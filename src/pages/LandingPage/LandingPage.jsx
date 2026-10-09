import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MyJourney from "../MyJourney/MyJourney";
import FeaturedWork from "../../components/home/FeaturedWork";
import StackSection from "../../components/home/StackSection";
import ExperienceSection from "../../components/home/ExperienceSection";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import Type from "../../components/Type";
import SectionWrapper from "../../components/ui/SectionWrapper";
import TerminalPanel from "../../components/ui/TerminalPanel";
import ActionButton from "../../components/ui/ActionButton";
import FloatingBadge from "../../components/ui/FloatingBadge";
import GridOverlay from "../../components/ui/GridOverlay";
import ThreeBackground from "../../components/ui/ThreeBackground";
import ConsoleCLI from "../../components/ui/ConsoleCLI";
import { Github, Twitter, Linkedin, Instagram, Terminal as TerminalIcon, ArrowUpRight } from "lucide-react";
import { calculateExperience } from "../../utils/experience";
import { countRender } from "../../utils/debugBus";

function HeroTerminal() {
  const { displayYears } = calculateExperience();
  
  return (
    <div className="relative group w-full max-w-md select-none">
      {/* Premium Apple-style drop glow under terminal */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
      
      <TerminalPanel
        title="aamir_saleem_lone.ts"
        className="relative"
      >
        <div className="flex min-w-0 gap-4">
          {/* Editor line indices */}
          <div className="hidden select-none text-right font-mono text-[10px] text-text-muted/70 sm:block">
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
          </div>
          
          <pre className="no-scrollbar min-w-0 overflow-x-auto font-mono text-[10px] leading-relaxed text-text-muted/95 sm:text-xs">
            <code>
              <span className="text-text-muted/70">// INITIALIZE CORE NODE</span>{"\n"}
              <span className="text-accent font-semibold">import</span> {"{"} <span className="text-secondary font-bold">Engineer</span> {"}"} <span className="text-accent font-semibold">from</span> <span className="text-primary font-bold">"@core"</span>;{"\n\n"}
              <span className="text-accent font-semibold">const</span> <span className="text-text-base">dev</span> = <span className="text-accent font-semibold">new</span> <span className="text-secondary font-bold">Engineer</span>({"{\n"}
              {"  "}name: <span className="text-[#34d399]">"Aamir Saleem Lone"</span>,{"\n"}
              {"  "}role: <span className="text-[#34d399]">"Full-Stack Engineer"</span>,{"\n"}
              {"  "}experience: <span className="text-[#eab308]">"{displayYears} Years"</span>,{"\n"}
              {"  "}tech: [<span className="text-[#38bdf8]">"React"</span>, <span className="text-[#38bdf8]">"Node"</span>, <span className="text-[#38bdf8]">"TS"</span>, <span className="text-[#38bdf8]">"SQL"</span>]{"\n"}
              {"}"});{"\n\n"}
              <span className="text-text-muted/70">// RUN PORTFOLIO APPS</span>{"\n"}
              <span className="text-text-base">dev</span>.<span className="text-[#38bdf8]">bootDeployment</span>();
            </code>
          </pre>
        </div>
      </TerminalPanel>
    </div>
  );
}

function LandingPage() {
  countRender("LandingPage");
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isCliOpen, setIsCliOpen] = useState(false);
  // Stable identity: ConsoleCLI memoises its command registry against this,
  // so an inline arrow here rebuilt the whole registry on every render.
  const closeCli = useCallback(() => setIsCliOpen(false), []);
  const { homeData, contact } = usePortfolio();

  // Listen for global shortcut keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "`" || (e.ctrlKey && e.key === "k")) {
        e.preventDefault();
        setIsCliOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const personalData = {
    name: homeData?.name || "Aamir Saleem Lone",
    description: homeData?.description || "",
    tagline: homeData?.tagline || "",
    typewriterStrings: homeData?.typewriterStrings || [
      "Full-Stack Engineer",
      "MERN Stack Developer",
      "Backend Specialist",
    ],
    socialLinks: {
      github: homeData?.socialLinks?.github || "",
      twitter: homeData?.socialLinks?.twitter || "",
      linkedin: homeData?.socialLinks?.linkedin || "",
      instagram: homeData?.socialLinks?.instagram || "",
      ...(contact?.socialLinks || {})
    }
  };

  const displayTagline =
    personalData.tagline && personalData.tagline.trim().length > 5
      ? personalData.tagline
      : "Full-Stack Developer designing high-performance, responsive systems with beautiful, modern layouts.";

  const socialNodes = [
    { icon: Github, href: personalData.socialLinks?.github || "https://github.com/hackmack4772", label: "GitHub", port: "443" },
    { icon: Twitter, href: personalData.socialLinks?.twitter || "https://twitter.com/hackmack4772", label: "Twitter", port: "80" },
    { icon: Linkedin, href: personalData.socialLinks?.linkedin || "https://www.linkedin.com/in/aamir-saleem-lone/", label: "LinkedIn", port: "8080" },
    { icon: Instagram, href: personalData.socialLinks?.instagram || "https://www.instagram.com/aamir-saleem-lone", label: "Instagram", port: "8443" },
  ].filter(link => link.href);

  // This used to print invented ping times, traceroute hops and HTTP
  // responses on hover ("64 bytes from 104.244.42.1 ... time=14.2 ms").
  // Fabricated output on an engineer's portfolio is a liability, so the
  // panel now just states where a link goes.
  const diagnostic = hoveredNode
    ? {
        label: hoveredNode.toUpperCase(),
        line: socialNodes.find((n) => n.label === hoveredNode)?.href || "",
      }
    : {
        label: "AWAITING SELECTION",
        line: "Hover a channel to see where it goes.",
      };

  return (
    <div className="w-full bg-bg-base text-text-base relative">
      {/* Every other route declares its own title, so navigating back here
          left whichever one was set last. React 19 hoists these natively. */}
      <title>Aamir Saleem Lone — Software Engineer | Backend & Full-Stack</title>
      <meta
        name="description"
        content="Software Engineer at Comviva building an enterprise loyalty platform for 1M+ users. Node.js, TypeScript, GraphQL, PostgreSQL, Kafka and Redis."
      />

      {/* 3D WebGL Background Particles Mesh */}
      <ThreeBackground />

      {/* Global Interactive Console CLI Overlay */}
      <ConsoleCLI isOpen={isCliOpen} onClose={closeCli} />

      {/* Floating CLI Toggle Action Button */}
      <button
        onClick={() => setIsCliOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-premium border border-primary/30 flex items-center justify-center text-primary hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition duration-300 z-40 cursor-pointer shadow-lg animate-float-slow"
        aria-label="Open Interactive CLI Console"
        title="Open Terminal (Ctrl + K or `)"
      >
        <TerminalIcon className="w-5 h-5" />
      </button>

      {/* Hero Section */}
      <SectionWrapper
        id="home"
        className="flex min-h-screen items-center pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32"
        containerClassName="flex items-center w-full min-h-[70vh]"
        spacing="none"
        showTicks={true}
      >
        <GridOverlay />

        {/* Artistic background image blending (home-bg.png) */}
        <div className="absolute inset-0 select-none pointer-events-none overflow-hidden -z-10">
          <div 
            className="hero-portrait absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.13] lg:opacity-[0.18] mix-blend-luminosity scale-105"
            style={{ 
              // Stable public path, so this is not emitted a second time as a
                // content-hashed copy of the identical file in public/.
                backgroundImage: "url(/home_bg_hacker.png)",
              maskImage: 'radial-gradient(circle at 80% 46%, black 30%, transparent 72%)',
              WebkitMaskImage: 'radial-gradient(circle at 80% 46%, black 30%, transparent 72%)'
            }}
          />
          {/* Subtle grid lines overlaid on the image for technical depth */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Smooth vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-bg-base" />
        </div>

        {/* Soft Ambient Blurs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[140px] animate-pulse-glow -z-20 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px] animate-pulse-glow -z-20 pointer-events-none" />

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] xl:gap-20">
          {/* Hero Left Content */}
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <FloatingBadge
              label="system_online // core_active"
              color="accent"
            />

            <div className="flex flex-col gap-2">
              <motion.h1
                className="rise text-xl font-light leading-tight tracking-tight text-text-base/80 sm:text-2xl lg:text-3xl font-sans"
              >
                Hi There, <span className="font-extrabold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">I'm</span>{" "}
                <span className="inline-block animate-[wave-animation_2.1s_infinite]" aria-hidden="true">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h2
                className="rise rise-1 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-sans font-extrabold leading-[1.05] tracking-tight text-[clamp(2.1rem,7.5vw,4.25rem)]"
              >
                {personalData.name}
              </motion.h2>
            </div>

            <motion.div
              className="rise rise-2 flex w-full justify-center lg:justify-start font-mono text-sm tracking-widest text-accent/80 uppercase"
            >
              <Type typewriterStrings={personalData.typewriterStrings} />
            </motion.div>

            <motion.p
              className="rise rise-3 max-w-xl text-sm sm:text-base leading-relaxed text-text-muted/85 text-center lg:text-left font-sans"
            >
              {displayTagline}
            </motion.p>

            <motion.div
              className="rise rise-4 flex w-full flex-col items-stretch gap-4 pt-3 sm:w-auto sm:flex-row sm:items-center sm:justify-start"
            >
              <ActionButton href="#about" variant="secondary" className="w-full sm:w-auto glass-premium hover:bg-[var(--surface-2)] transition">
                Read My Story
              </ActionButton>

              <ActionButton href="#work" variant="primary" className="w-full sm:w-auto bg-accent text-bg-base hover:bg-accent/80 shadow-[0_0_25px_rgba(12,251,255,0.25)] transition">
                View My Work
              </ActionButton>
            </motion.div>
          </div>

          {/* Hero Right Content */}
          <motion.div
            className="rise rise-3 flex w-full justify-center lg:justify-end"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Selected Work - three real projects, ahead of everything else.
          The page used to surface none of the eight in the database. */}
      {/* Stacked scroll: each section pins under the navbar and the next
          slides up over it. position: sticky plus a scroll-driven scale,
          no observer and no rAF loop. */}
      <div className="stack">
        <SectionWrapper id="work" variant="sub" showTicks={true} className="stack-card" style={{ "--i": 0 }}>
          <FeaturedWork />
        </SectionWrapper>

        {/* Technical register */}
        <SectionWrapper id="stack" showTicks={true} className="stack-card" style={{ "--i": 1 }}>
          <StackSection />
        </SectionWrapper>

        {/* Employment history. Replaces the simulated telemetry dashboard that
            sat here: 526 lines of hardcoded nodes and Math.random() metrics,
            which read as padding next to the real version of the same story. */}
        <SectionWrapper id="experience" variant="sub" showTicks={true} className="stack-card" style={{ "--i": 2 }}>
          <ExperienceSection />
        </SectionWrapper>

        {/* Journey Section */}
        <SectionWrapper id="about" showTicks={true} className="stack-card" style={{ "--i": 3 }}>
          <MyJourney />
        </SectionWrapper>
      </div>

      {/* Social & Contact Section */}
      <SectionWrapper id="contact" variant="sub" showTicks={true}>
        <div className="mx-auto mb-16 flex w-full max-w-4xl flex-col items-center">
          {/* Cyberpunk Outer Card */}
          <div className="relative group w-full">
            {/* Outer Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/15 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl border border-[var(--edge-2)] bg-bg-base/90 shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-text-muted">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[var(--surface-1)] border-b border-[var(--edge-1)] select-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
                </div>
                <div className="text-[10px] tracking-wider uppercase text-text-muted/70 flex items-center gap-1.5 font-mono">
                  <span className="text-accent">&gt;</span> SOCIAL_CONNECTIVITY.sh
                </div>
                <div className="w-12 flex justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(12,251,255,0.8)]" />
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Diagnostics Screen & Headers */}
                  <div className="md:col-span-5 flex flex-col gap-5 justify-between min-h-[170px]">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-accent font-semibold tracking-widest text-[9px] uppercase bg-accent/5 px-2.5 py-1 rounded w-fit select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                        transmitting_nodes
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-xl font-bold tracking-[0.15em] text-text-base uppercase font-mono">
                          FIND_ME_ON
                        </h2>
                        <p className="text-[10px] text-text-muted/80 uppercase tracking-wider font-mono">
                          I'd love to <span className="text-accent font-semibold">connect</span> with you!
                        </p>
                      </div>
                    </div>

                    {/* Diagnostic Monitor Box */}
                    <div className="bg-[var(--well)] rounded-xl border border-[var(--edge-1)] p-4.5 font-mono text-[10px] leading-relaxed text-text-muted/80 flex-grow flex flex-col justify-between min-h-[105px]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-secondary font-bold">$</span>
                          <span className="text-text-base font-semibold">open {diagnostic.label.toLowerCase()}</span>
                        </div>
                        <div className="text-text-muted/70 pl-2.5 break-all">{diagnostic.line}</div>
                      </div>
                      <div className="flex items-center justify-between border-t border-[var(--edge-1)] pt-2 mt-3 text-[9px] tracking-wider uppercase text-text-muted/70">
                        <span>CHANNEL</span>
                        <span className="text-accent font-bold tracking-widest">{diagnostic.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider (visible only on desktop) */}
                  <div className="hidden md:block md:col-span-1 w-px bg-[var(--surface-2)] mx-auto" />

                  {/* Right Column: Highly Interactive Social Grid */}
                  <div className="md:col-span-6 flex flex-col justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                      {socialNodes.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                          <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredNode(link.label)}
                            onMouseLeave={() => setHoveredNode(null)}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="surface-interactive relative group/btn flex items-center gap-3.5 px-4.5 py-4 select-none cursor-pointer"
                            aria-label={link.label}
                          >
                            {/* Interactive inner glow */}
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/btn:opacity-100 rounded-xl blur transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="p-2 rounded-lg bg-bg-base/70 border border-[var(--edge-1)] group-hover/btn:border-accent/30 group-hover/btn:bg-accent/5 transition duration-300">
                              <Icon className="w-4.5 h-4.5 text-text-muted group-hover/btn:text-accent transition-colors duration-300" />
                            </div>
                            
                            <div className="flex flex-col text-left min-w-0">
                              <span className="text-[11px] font-bold text-text-base group-hover/btn:text-accent tracking-wider uppercase transition-colors duration-300 truncate">
                                {link.label}
                              </span>
                              <span className="text-[9px] font-mono text-text-muted/70 group-hover/btn:text-accent/50 transition-colors duration-300">
                                PORT // {link.port}
                              </span>
                            </div>

                            {/* Hover accent bar */}
                            <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_8px_rgba(12,251,255,0.8)]" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The full form lives on /contact. Rendering all 485 lines of it a
            second time here only lengthened the page and duplicated the
            social links for a third time. */}
        <div className="flex flex-col items-center gap-4">
          <p className="max-w-md text-center text-xs leading-relaxed text-text-muted/80">
            Open to interesting backend and full-stack problems. The quickest route is
            email, or send a message from the contact page.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ActionButton href={`mailto:${contact?.email || "loneaamir6@gmail.com"}`} variant="primary" className="bg-accent text-bg-base hover:bg-accent/80">
              {contact?.email || "loneaamir6@gmail.com"}
            </ActionButton>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--edge-2)] px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-text-base transition hover:border-accent/50 hover:text-accent"
            >
              Send a message
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default LandingPage;
