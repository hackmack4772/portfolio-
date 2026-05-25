import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import MyJourney from "../MyJourney/MyJourney";
import ContactUs from "../ContactUs/ContactUs";
import { db } from "../../config/firebase";
import { useLoading } from "../../Context/LoadingContext";
import Type from "../../components/Type";
import SectionWrapper from "../../components/ui/SectionWrapper";
import ContentContainer from "../../components/ui/ContentContainer";
import TerminalPanel from "../../components/ui/TerminalPanel";
import ActionButton from "../../components/ui/ActionButton";
import FloatingBadge from "../../components/ui/FloatingBadge";
import SocialDock from "../../components/ui/SocialDock";
import GridOverlay from "../../components/ui/GridOverlay";

function HeroTerminal() {
  return (
    <TerminalPanel title="aamir_lone_spec.json" className="w-full max-w-md mx-auto shadow-2xl relative">
      <div className="flex gap-4">
        <div className="text-text-muted/30 text-right select-none font-mono text-[10px] hidden sm:block">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
          <div>07</div>
          <div>08</div>
          <div>09</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
        </div>
        <pre className="text-text-base font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto no-scrollbar">
          <code>
            {"{\n"}
            {"  "}
            <span className="text-primary">"developer"</span>
            {": {\n"}
            {"    "}
            <span className="text-secondary">"name"</span>
            {": "}
            <span className="text-accent">"Aamir Saleem Lone"</span>
            {",\n"}
            {"    "}
            <span className="text-secondary">"role"</span>
            {": "}
            <span className="text-accent">"Full-Stack Engineer"</span>
            {",\n"}
            {"    "}
            <span className="text-secondary">"experience"</span>
            {": "}
            <span className="text-accent">"3+ Professional Years"</span>
            {",\n"}
            {"    "}
            <span className="text-secondary">"status"</span>
            {": "}
            <span className="text-green-400">"active_online"</span>
            {"\n"}
            {"  },\n"}
            {"  "}
            <span className="text-primary">"core_stack"</span>
            {": [\n"}
            {"    "}
            <span className="text-accent">"React"</span>
            {", "}
            <span className="text-accent">"Node.js"</span>
            {", "}
            <span className="text-accent">"TypeScript"</span>
            {",\n"}
            {"    "}
            <span className="text-accent">"Postgres"</span>
            {", "}
            <span className="text-accent">"MongoDB"</span>
            {", "}
            <span className="text-accent">"FeathersJS"</span>
            {"\n"}
            {"  ]\n"}
            {"}"}
          </code>
        </pre>
      </div>
    </TerminalPanel>
  );
}

function LandingPage() {
  const [personalData, setPersonalData] = useState({
    name: "Aamir Saleem Lone",
    description: "",
    tagline: "",
    socialLinks: {
      github: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    typewriterStrings: ["Full-Stack Engineer", "MERN Stack Developer", "Backend Specialist"]
  });

  const homeRef = doc(db, "home", "homeData");
  const { handleLoading } = useLoading();

  const fetchHomeData = async () => {
    try {
      const docSnap = await getDoc(homeRef);
      let pData = {
        name: "Aamir Saleem Lone",
        description: "",
        tagline: "",
        socialLinks: {
          github: "",
          twitter: "",
          linkedin: "",
          instagram: "",
        },
        typewriterStrings: ["Full-Stack Engineer", "MERN Stack Developer", "Backend Specialist"]
      };

      if (docSnap.exists()) {
        pData = { ...pData, ...docSnap.data() };
      }

      // Sync social links from content/contact for global consistency
      const contactSnap = await getDoc(doc(db, "content", "contact"));
      if (contactSnap.exists()) {
        const contactData = contactSnap.data();
        if (contactData.socialLinks) {
          pData.socialLinks = {
            ...pData.socialLinks,
            ...contactData.socialLinks
          };
        }
      }

      setPersonalData(pData);
      handleLoading(false);
    } catch (error) {
      console.error("Error fetching home data: ", error);
      handleLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const displayTagline = personalData.tagline && personalData.tagline.trim().length > 5 
    ? personalData.tagline 
    : "Full-Stack Developer designing high-performance, responsive systems with beautiful, modern layouts.";

  return (
    <div className="w-full bg-bg-base text-text-base">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 overflow-hidden">
        <GridOverlay />
        
        {/* Soft Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow -z-10" />

        <ContentContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start text-left gap-5">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FloatingBadge label="system_online: status_active" color="accent" />
              </motion.div>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black tracking-tight text-text-base font-sans leading-none"
              >
                Hi There! <span className="inline-block animate-[wave-animation_2.1s_infinite] origin-[70%_70%]">👋🏻</span>
              </motion.h1>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl md:text-4xl font-extrabold tracking-tight text-text-base"
              >
                I'm <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">{personalData.name}</span>
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="min-h-[48px] w-full"
              >
                <Type typewriterStrings={personalData.typewriterStrings} />
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xs md:text-sm text-text-muted max-w-lg leading-relaxed font-sans -mt-2"
              >
                {displayTagline}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-4 mt-2"
              >
                <ActionButton href="#about" variant="secondary">
                  Discover Journey
                </ActionButton>
                <ActionButton href="#contact" variant="primary">
                  Get in Touch
                </ActionButton>
              </motion.div>
            </div>

            {/* Hero Right Content (Hacker Terminal Mockup) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex items-center justify-center w-full"
            >
              <HeroTerminal />
            </motion.div>
          </div>
        </ContentContainer>
      </section>

      {/* Journey Section */}
      <SectionWrapper id="about" variant="sub">
        <MyJourney />
      </SectionWrapper>

      {/* Social & Contact Section */}
      <SectionWrapper id="contact">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center gap-6 mb-12 text-center">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-text-base">
            FIND ME ON
          </h2>
          <p className="text-xs md:text-sm text-text-muted -mt-3">
            I'd love to <span className="text-accent font-semibold">connect</span> with you!
          </p>

          <SocialDock socialLinks={personalData.socialLinks} />
        </div>

        <ContactUs hideHeader={true} />
      </SectionWrapper>

    </div>
  );
}

export default LandingPage;
