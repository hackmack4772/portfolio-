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
          <div className="relative group">
            {/* Rotating glowing border backplane */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500 -z-10" />
            
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl p-[1.5px] bg-gradient-to-tr from-primary to-accent relative overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-bg-base rounded-3xl overflow-hidden flex items-center justify-center">
                <img
                  src={aboutData.photoURL || aboutData.image || "https://i.postimg.cc/DfWp1PwJ/avatar.png"}
                  alt="Aamir Saleem Lone Avatar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                />
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl glass-panel border border-primary/50 text-[10px] font-mono font-bold text-primary flex items-center gap-1 shadow-lg animate-float">
                <span>React</span>
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl glass-panel border border-accent/50 text-[10px] font-mono font-bold text-accent flex items-center gap-1 shadow-lg animate-float-slow">
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: IDE Editor Window Tabbed Content */}
        <div className="lg:col-span-7 flex flex-col w-full">
          
          {/* IDE Window Frame Header */}
          <div className="flex items-center justify-between bg-bg-sub/80 border border-border-base/50 border-b-0 rounded-t-2xl px-4 py-2.5 select-none w-full">
            {/* Window buttons */}
            <div className="flex items-center gap-1.5 shrink-0 sm:w-20">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
            </div>
            
            {/* IDE tabs */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar -mb-2.5 pt-0.5">
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
                    className={`relative flex items-center gap-2 px-4 py-2 text-xs font-mono rounded-t-lg border-t border-x transition-all duration-200 cursor-pointer select-none ${
                      isActive 
                        ? "bg-bg-base text-accent border-border-base/50 border-b-bg-base font-bold" 
                        : "bg-transparent text-text-muted border-transparent hover:text-text-base hover:bg-bg-sub/20"
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
          <div className="border border-border-base/50 rounded-b-2xl p-6 md:p-8 bg-bg-base/80 shadow-xl min-h-[380px] w-full border-t-0 relative overflow-hidden">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-base/20 pt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <MapPin className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Location</span>
                          <span className="text-xs font-semibold">{contactData.address}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                          <Mail className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Email Address</span>
                          <span className="text-xs font-semibold select-all">{contactData.email}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
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

                      <div className="flex items-center gap-3">
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
                          <div key={index} className="flex gap-4 p-4 rounded-xl bg-bg-sub/20 border border-border-base/30 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-accent opacity-40" />
                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <div className="space-y-1.5 w-full">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                <h4 className="text-xs md:text-sm font-bold text-text-base leading-tight">
                                  {exp.position} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono">@ {exp.company}</span>
                                </h4>
                                <span className="text-[9px] font-mono text-text-muted shrink-0 bg-bg-sub/60 px-2 py-0.5 rounded border border-border-base/50 self-start sm:self-center">
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
                        <span className="text-xs font-mono text-text-muted">No experience entries found. Configure them inside admin panel.</span>
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
                              <div className="w-full h-1.5 bg-bg-sub/80 border border-border-base/30 rounded-full overflow-hidden">
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
                        <span className="text-xs font-mono text-text-muted">No skills proficiencies loaded. Add them in admin settings.</span>
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
                          <div key={index} className="flex gap-4 p-4 rounded-xl bg-bg-sub/20 border border-border-base/30 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-secondary to-accent opacity-40" />
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
                        <span className="text-xs font-mono text-text-muted">No education records found. Configure them inside admin panel.</span>
                      )}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
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
