import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import MyJourney from "../MyJourney/MyJourney";
import ContactUs from "../ContactUs/ContactUs";
import { db } from "../../config/firebase";
import { useLoading } from "../../Context/LoadingContext";
import Type from "../../components/Type";
import SectionWrapper from "../../components/ui/SectionWrapper";
import TerminalPanel from "../../components/ui/TerminalPanel";
import ActionButton from "../../components/ui/ActionButton";
import FloatingBadge from "../../components/ui/FloatingBadge";
import SocialDock from "../../components/ui/SocialDock";
import GridOverlay from "../../components/ui/GridOverlay";

function HeroTerminal() {
  return (
    <TerminalPanel
      title="aamir_lone_spec.json"
      className="max-w-md"
    >
      <div className="flex min-w-0 gap-4">
        <div className="hidden select-none text-right font-mono text-[10px] text-text-muted/30 sm:block">
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
        <pre className="no-scrollbar min-w-0 overflow-x-auto font-mono text-[10px] leading-relaxed text-text-base sm:text-xs">
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
    typewriterStrings: [
      "Full-Stack Engineer",
      "MERN Stack Developer",
      "Backend Specialist",
    ],
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
        typewriterStrings: [
          "Full-Stack Engineer",
          "MERN Stack Developer",
          "Backend Specialist",
        ],
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
            ...contactData.socialLinks,
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

  const displayTagline =
    personalData.tagline && personalData.tagline.trim().length > 5
      ? personalData.tagline
      : "Full-Stack Developer designing high-performance, responsive systems with beautiful, modern layouts.";

  return (
    <div className="w-full bg-bg-base text-text-base">
      {/* Hero Section */}
      <SectionWrapper
        id="home"
        className="flex min-h-screen items-center py-24 md:py-28 lg:py-32"
        containerClassName="flex items-center"
        spacing="none"
        showTicks={true}
      >
        <GridOverlay />

        {/* Soft Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow -z-10" />

        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-14">
          {/* Hero Left Content */}
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center lg:max-w-2xl">
            <FloatingBadge
              label="system_online: status_active"
              color="accent"
            />

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black leading-tight tracking-tight md:text-6xl"
            >
              Hi There!{" "}
              <span className="inline-block animate-[wave-animation_2.1s_infinite]" aria-hidden="true">
                👋🏻
              </span>
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-extrabold leading-tight md:text-4xl"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono">
                {personalData.name}
              </span>
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex w-full justify-center"
            >
              <Type typewriterStrings={personalData.typewriterStrings} />
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-sm leading-relaxed text-text-muted"
            >
              {displayTagline}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center sm:justify-center"
            >
              <ActionButton href="#about" variant="secondary" className="w-full sm:w-auto">
                Discover Journey
              </ActionButton>

              <ActionButton href="#contact" variant="primary" className="w-full sm:w-auto">
                Get in Touch
              </ActionButton>
            </motion.div>
          </div>

          {/* Hero Right Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex w-full justify-center lg:justify-end"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Journey Section */}
      <SectionWrapper id="about" variant="sub">
        <MyJourney />
      </SectionWrapper>

      {/* Social & Contact Section */}
      <SectionWrapper id="contact">
        <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col items-center gap-4 text-center md:mb-16">
          <h2 className="text-2xl font-black tracking-tight text-text-base md:text-4xl">
            FIND ME ON
          </h2>
          <p className="text-xs text-text-muted md:text-sm">
            I'd love to{" "}
            <span className="text-accent font-semibold">connect</span> with you!
          </p>

          <SocialDock socialLinks={personalData.socialLinks} />
        </div>

        <ContactUs hideHeader={true} />
      </SectionWrapper>
    </div>
  );
}

export default LandingPage;
