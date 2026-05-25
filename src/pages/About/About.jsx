import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Github as GitIcon, 
  Code2,
  Terminal,
  Calendar
} from "lucide-react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import HelmetWrapper from "../../components/HelmetWrapper";
import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";
import { useLoading } from "../../Context/LoadingContext";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import TechPill from "../../components/ui/TechPill";

function About() {
  const [aboutData, setAboutData] = useState({
    tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",
    biography: "I am Aamir Saleem Lone, a passionate Full-Stack Developer with nearly 3 years of hands-on experience in building scalable, secure, and performance-driven web applications. Currently working at Mahindra Comviva on the Mobilytix Rewards platform, I specialize in developing enterprise-grade solutions using React, Node.js, TypeScript, and modern backend systems. Previously, I worked at Shine Dezign Infonet, where I contributed to healthcare, CRM, and real-time streaming applications. I hold a Master’s degree in Computer Applications (MCA) and enjoy building reliable systems that solve real-world problems.",
    skills: [],
    education: [],
    experience: [],
    photoURL: "https://i.postimg.cc/DfWp1PwJ/avatar.png"
  });

  const [contactData, setContactData] = useState({
    email: "loneaamir6@gmail.com",
    address: "Handwara, Jammu and Kashmir, India",
    socialLinks: {
      github: "https://github.com/hackmack4772",
      linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
      twitter: "https://twitter.com/hackmack4772",
    }
  });

  const [dbSkills, setDbSkills] = useState([]);
  const [activeTab, setActiveTab] = useState("personal");
  const { handleLoading } = useLoading();

  useEffect(() => {
    const fetchAboutPageData = async () => {
      try {
        const aboutSnap = await getDoc(doc(db, "content", "about"));
        if (aboutSnap.exists()) {
          const aData = aboutSnap.data();
          setAboutData(prev => ({
            ...prev,
            ...aData
          }));
        }

        const contactSnap = await getDoc(doc(db, "content", "contact"));
        if (contactSnap.exists()) {
          const cData = contactSnap.data();
          setContactData(prev => ({
            ...prev,
            ...cData
          }));
        }

        const skillsSnapshot = await getDocs(collection(db, "skills"));
        const skillsList = skillsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        skillsList.sort((a, b) => (a.order || 0) - (b.order || 0));
        setDbSkills(skillsList);

        handleLoading(false);
      } catch (error) {
        console.error("Error loading about page database content:", error);
        handleLoading(false);
      }
    };

    fetchAboutPageData();
  }, [handleLoading]);

  const tabs = [
    { id: "personal", label: "Bio Details", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "professional", label: "Skills Map", icon: Code2 },
    { id: "education", label: "Education", icon: GraduationCap },
  ];

  return (
    <SectionWrapper id="about-section" className="pt-36 pb-16 md:pt-40 md:pb-24 lg:pt-44" spacing="none">
      <HelmetWrapper>
        <title>About Me | My Portfolio</title>
        <meta name="description" content="Learn more about Aamir Saleem Lone, my skills, and my professional journey." />
      </HelmetWrapper>

      {/* Floating Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Heading */}
      <SectionTitle 
        subtitle="Discover Profile" 
        title="About" 
        highlight="Me" 
        description={aboutData.tagline || "Full-Stack Engineer building enterprise-grade web applications"}
      />

      {/* Main Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
               {/* Left Column: Profile Avatar */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:sticky lg:top-32">
          <div className="relative group p-4 glass-premium-dark rounded-3xl border border-white/[0.08] shadow-2xl">
            {/* Subtle inner glowing gradient backplane */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
            
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden relative">
              <img
                src={aboutData.photoURL || aboutData.image || "https://i.postimg.cc/DfWp1PwJ/avatar.png"}
                alt="Aamir Saleem Lone Avatar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 select-none pointer-events-none"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-1 -right-1 px-3 py-1.5 rounded-xl glass-premium border border-primary/30 text-[10px] font-mono font-bold text-primary flex items-center gap-1 shadow-lg animate-float">
              <span>React</span>
            </div>
            <div className="absolute -bottom-1 -left-1 px-3 py-1.5 rounded-xl glass-premium border border-accent/30 text-[10px] font-mono font-bold text-accent flex items-center gap-1 shadow-lg animate-float-slow">
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Right Column: IDE Editor Window Tabbed Content */}
        <div className="lg:col-span-7 flex flex-col w-full">
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] shadow-2xl min-h-[440px] w-full relative overflow-hidden flex flex-col">
            {/* IDE Window Frame Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 select-none w-full bg-white/[0.01]">
              {/* Window buttons */}
              <div className="flex items-center gap-1.5 shrink-0 sm:w-20">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
              </div>
              
              {/* IDE tabs */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar -mb-3 pt-0.5">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  const isActive = activeTab === tab.id;
                  const fileNames = {
                    personal: "bio.json",
                    experience: "experience.yaml",
                    professional: "skills.js",
                    education: "education.md"
                  };
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-2 px-4 py-2.5 text-xs font-mono rounded-t-lg transition-all duration-200 cursor-pointer select-none ${
                        isActive 
                          ? "bg-white/[0.04] text-accent border-b-2 border-b-accent font-bold" 
                          : "bg-transparent text-text-muted hover:text-text-base hover:bg-white/[0.02]"
                      }`}
                    >
                      <TabIcon className="w-3.5 h-3.5" />
                      <span>{fileNames[tab.id]}</span>
                    </button>
                  );
                })}
              </div>
              
              {/* UTF-8 indicator */}
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-text-muted/60">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500/80 animate-pulse" />
                <span>UTF-8</span>
              </div>
            </div>

            {/* IDE Tab Body Container */}
            <div className="p-6 md:p-8 flex-grow relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex flex-col gap-6 text-left"
                >
                  
                  {/* Bio details Tab */}
                  {activeTab === "personal" && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-base md:text-lg font-bold text-text-base flex items-center gap-2 font-mono">
                          <Terminal className="w-4 h-4 text-primary" />
                          <span>Who am I?</span>
                        </h3>
                        <p className="text-xs md:text-sm leading-relaxed text-text-muted text-justify">
                          {aboutData.biography || aboutData.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/[0.08] pt-6">
                        <div className="flex items-center gap-3 p-3.5 rounded-xl glass-premium border border-white/[0.05]">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <MapPin className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Location</span>
                            <span className="text-xs font-semibold">{contactData.address}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl glass-premium border border-white/[0.05]">
                          <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                            <Mail className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Email Address</span>
                            <span className="text-xs font-semibold select-all">{contactData.email}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl glass-premium border border-white/[0.05]">
                          <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                            <GitIcon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">GitHub Profile</span>
                            <a href={contactData.socialLinks?.github || "https://github.com/hackmack4772"} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:underline text-text-base hover:text-accent">
                              github.com/{(contactData.socialLinks?.github || "hackmack4772").split("/").pop()}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl glass-premium border border-white/[0.05]">
                          <div className="w-9 h-9 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                            <Terminal className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Work Status</span>
                            <span className="text-xs font-semibold text-green-500">Active Engineer & open to collaborations</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Professional Experience Tab */}
                  {activeTab === "experience" && (
                    <div className="space-y-6">
                      <h3 className="text-base md:text-lg font-bold text-text-base flex items-center gap-2 font-mono">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span>Professional Timeline</span>
                      </h3>
                      <div className="flex flex-col gap-4">
                        {aboutData.experience && aboutData.experience.length > 0 ? (
                          aboutData.experience.map((exp, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-xl glass-premium border border-white/[0.06] hover:border-primary/40 relative overflow-hidden group transition-all duration-300">
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-accent opacity-45" />
                              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Briefcase className="w-4 h-4" />
                              </div>
                              <div className="space-y-1.5 w-full">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                  <h4 className="text-xs md:text-sm font-bold text-text-base leading-tight">
                                    {exp.position} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono">@ {exp.company}</span>
                                  </h4>
                                  <span className="text-[9px] font-mono text-text-muted shrink-0 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] self-start sm:self-center">
                                    {exp.period}
                                  </span>
                                </div>
                                <p className="text-[11px] md:text-xs text-text-muted leading-relaxed text-justify pt-0.5">
                                  {exp.description}
                                </p>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 rounded-xl glass-premium border border-white/[0.05] text-center gap-3 py-12 select-none">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                              <Briefcase className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Experience Entries</h4>
                              <p className="text-[10px] text-text-muted max-w-[220px] leading-relaxed">
                                Experience timeline is empty. Configure entries inside your admin panel settings.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Skills / Proficiencies Tab */}
                  {activeTab === "professional" && (
                    <div className="space-y-6">
                      <h3 className="text-base md:text-lg font-bold text-text-base flex items-center gap-2 font-mono">
                        <Code2 className="w-4 h-4 text-accent" />
                        <span>Proficiencies Matrix</span>
                      </h3>
                      <div className="flex flex-col gap-4">
                        {dbSkills && dbSkills.length > 0 ? (
                          dbSkills.map((skill, index) => {
                            const colors = ["bg-primary", "bg-secondary", "bg-accent"];
                            const barColor = colors[index % colors.length];
                            return (
                              <div key={index} className="space-y-1.5">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="font-semibold text-text-base">{skill.name}</span>
                                  <span className="font-mono text-text-muted">{skill.proficiency}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-black/40 border border-white/[0.08] rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.proficiency}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full rounded-full ${barColor}`}
                                  />
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 rounded-xl glass-premium border border-white/[0.05] text-center gap-3 py-12 select-none">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent animate-pulse">
                              <Code2 className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Skills Loaded</h4>
                              <p className="text-[10px] text-text-muted max-w-[220px] leading-relaxed">
                                Proficiencies matrix is empty. Configure skills inside your admin panel settings.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Education Tab */}
                  {activeTab === "education" && (
                    <div className="space-y-6">
                      <h3 className="text-base md:text-lg font-bold text-text-base flex items-center gap-2 font-mono">
                        <GraduationCap className="w-4 h-4 text-secondary" />
                        <span>Education Details</span>
                      </h3>
                      <div className="flex flex-col gap-4">
                        {aboutData.education && aboutData.education.length > 0 ? (
                          aboutData.education.map((edu, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-xl glass-premium border border-white/[0.06] hover:border-secondary/40 relative overflow-hidden transition-all duration-300">
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-secondary to-accent opacity-45" />
                              <div className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                                <GraduationCap className="w-4 h-4" />
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-xs md:text-sm font-bold text-text-base leading-tight">{edu.degree}</h4>
                                <p className="text-xs text-text-muted font-medium pt-0.5">{edu.institution}</p>
                                <div className="flex items-center gap-4 text-[9px] font-mono text-accent pt-1">
                                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {edu.year}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="flex flex-col items-center justify-center p-8 rounded-xl glass-premium border border-white/[0.05] text-center gap-3 py-12 select-none">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary animate-pulse">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Academic Milestones</h4>
                              <p className="text-[10px] text-text-muted max-w-[220px] leading-relaxed">
                                Education history is empty. Configure milestones inside your admin panel settings.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* Skills Section */}
      <div className="space-y-8">
        <SectionTitle 
          subtitle="Core Capabilities" 
          title="Professional" 
          highlight="Skillset" 
          description="Frameworks and programming languages I work with day to day"
        />
        <Techstack />
      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* Tools Section */}
      <div className="space-y-8">
        <SectionTitle 
          subtitle="Developer Environment" 
          title="Tools I" 
          highlight="Use" 
          description="Software and productivity tools integrated into my daily engineering pipeline"
        />
        <Toolstack />
      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* GitHub Contribution Chart */}
      <div className="w-full">
        <Github />
      </div>

    </SectionWrapper>
  );
}

export default About;
