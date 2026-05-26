import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MyJourney from "../MyJourney/MyJourney";
import ContactUs from "../ContactUs/ContactUs";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import Type from "../../components/Type";
import SectionWrapper from "../../components/ui/SectionWrapper";
import TerminalPanel from "../../components/ui/TerminalPanel";
import ActionButton from "../../components/ui/ActionButton";
import FloatingBadge from "../../components/ui/FloatingBadge";
import GridOverlay from "../../components/ui/GridOverlay";
import ThreeBackground from "../../components/ui/ThreeBackground";
import TelemetryDashboard from "../../components/ui/TelemetryDashboard";
import ConsoleCLI from "../../components/ui/ConsoleCLI";
import { Github, Twitter, Linkedin, Instagram, Terminal as TerminalIcon } from "lucide-react";
import homeBg from "../../Assets/home_bg_hacker.png";
import { calculateExperience } from "../../utils/experience";

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
          <div className="hidden select-none text-right font-mono text-[10px] text-text-muted/20 sm:block">
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
              <span className="text-text-muted/30">// INITIALIZE CORE NODE</span>{"\n"}
              <span className="text-accent font-semibold">import</span> {"{"} <span className="text-secondary font-bold">Engineer</span> {"}"} <span className="text-accent font-semibold">from</span> <span className="text-primary font-bold">"@core"</span>;{"\n\n"}
              <span className="text-accent font-semibold">const</span> <span className="text-text-base">dev</span> = <span className="text-accent font-semibold">new</span> <span className="text-secondary font-bold">Engineer</span>({"{\n"}
              {"  "}name: <span className="text-[#34d399]">"Aamir Saleem Lone"</span>,{"\n"}
              {"  "}role: <span className="text-[#34d399]">"Full-Stack Engineer"</span>,{"\n"}
              {"  "}experience: <span className="text-[#eab308]">"{displayYears} Years"</span>,{"\n"}
              {"  "}tech: [<span className="text-[#38bdf8]">"React"</span>, <span className="text-[#38bdf8]">"Node"</span>, <span className="text-[#38bdf8]">"TS"</span>, <span className="text-[#38bdf8]">"SQL"</span>]{"\n"}
              {"}"});{"\n\n"}
              <span className="text-text-muted/30">// RUN PORTFOLIO APPS</span>{"\n"}
              <span className="text-text-base">dev</span>.<span className="text-[#38bdf8]">bootDeployment</span>();
            </code>
          </pre>
        </div>
      </TerminalPanel>
    </div>
  );
}

function LandingPage() {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isCliOpen, setIsCliOpen] = useState(false);
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

  const getDiagnosticText = () => {
    switch (hoveredNode) {
      case "GitHub":
        return {
          cmd: "curl -I https://github.com/hackmack4772",
          line1: "HTTP/2 200 OK",
          line2: "server: GitHub.com | connection: keep-alive",
          status: "ESTABLISHED // SECURE_PORT_443"
        };
      case "Twitter":
        return {
          cmd: "ping -c 1 twitter.com",
          line1: "64 bytes from 104.244.42.1: icmp_seq=1 ttl=56 time=14.2 ms",
          line2: "--- twitter.com ping statistics --- 1 packets transmitted, 1 received",
          status: "ROUTE_ACTIVE // SECURE_PORT_80"
        };
      case "LinkedIn":
        return {
          cmd: "ssh -T git@linkedin.com",
          line1: "Welcome aamir-saleem-lone! Shell access is restricted.",
          line2: "Authorized keys verified. Protocol version 2.0 active.",
          status: "HANDSHAKE_GRANTED // PORT_8080"
        };
      case "Instagram":
        return {
          cmd: "traceroute instagram.com",
          line1: "1  gateway (192.168.1.1)  0.315 ms",
          line2: "2  edge-star-shv (157.240.23.174)  22.450 ms",
          status: "LINK_ESTABLISHED // PORT_8443"
        };
      default:
        return {
          cmd: "ssh-connect -t social_ports --user=guest",
          line1: "Initializing encrypted connection to external domains...",
          line2: "✓ Handshake successful: Node coordinates resolved.",
          status: "SYSTEM_READY // WAITING_FOR_PORTAL_SELECTION"
        };
    }
  };

  const diagnostic = getDiagnosticText();

  return (
    <div className="w-full bg-bg-base text-text-base relative">
      {/* 3D WebGL Background Particles Mesh */}
      <ThreeBackground />

      {/* Global Interactive Console CLI Overlay */}
      <ConsoleCLI isOpen={isCliOpen} onClose={() => setIsCliOpen(false)} />

      {/* Floating CLI Toggle Action Button */}
      <button
        onClick={() => setIsCliOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full glass-premium border border-primary/30 flex items-center justify-center text-primary hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition-all duration-300 z-40 cursor-pointer shadow-lg animate-float-slow"
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] lg:opacity-[0.12] mix-blend-luminosity scale-105"
            style={{ 
              backgroundImage: `url(${homeBg})`,
              maskImage: 'radial-gradient(circle at 75% 50%, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at 75% 50%, black 30%, transparent 70%)'
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
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-light leading-tight tracking-tight text-white/90 md:text-5xl lg:text-6.5xl font-sans"
              >
                Hi There, <span className="font-extrabold bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">I'm</span>{" "}
                <span className="inline-block animate-[wave-animation_2.1s_infinite]" aria-hidden="true">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent md:text-5xl lg:text-6xl font-sans"
              >
                {personalData.name}
              </motion.h2>
            </div>

            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex w-full justify-center lg:justify-start font-mono text-sm tracking-widest text-accent/80 uppercase"
            >
              <Type typewriterStrings={personalData.typewriterStrings} />
            </motion.div>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-xs sm:text-sm leading-relaxed text-text-muted/90 text-center lg:text-left font-sans"
            >
              {displayTagline}
            </motion.p>

            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex w-full flex-col items-stretch gap-4 pt-3 sm:w-auto sm:flex-row sm:items-center sm:justify-start"
            >
              <ActionButton href="#about" variant="secondary" className="w-full sm:w-auto glass-premium hover:bg-white/[0.04] transition-all">
                Discover Journey
              </ActionButton>

              <ActionButton href="#telemetry" variant="primary" className="w-full sm:w-auto bg-accent text-bg-base hover:bg-accent/80 shadow-[0_0_25px_rgba(12,251,255,0.25)] transition-all">
                Inspect Infrastructure
              </ActionButton>
            </motion.div>
          </div>

          {/* Hero Right Content */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex w-full justify-center lg:justify-end"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Journey Section */}
      <SectionWrapper id="about" variant="sub" showTicks={true}>
        <MyJourney />
      </SectionWrapper>

      {/* Telemetry Dashboard Section */}
      <SectionWrapper id="telemetry" showTicks={true}>
        <TelemetryDashboard />
      </SectionWrapper>

      {/* Social & Contact Section */}
      <SectionWrapper id="contact" showTicks={true}>
        <div className="mx-auto mb-16 flex w-full max-w-4xl flex-col items-center">
          {/* Cyberpunk Outer Card */}
          <div className="relative group w-full">
            {/* Outer Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-secondary/15 to-accent/15 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
            
            <div className="relative rounded-2xl border border-white/[0.08] bg-bg-base/90 shadow-2xl overflow-hidden flex flex-col font-mono text-xs text-text-muted">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.015] border-b border-white/[0.06] select-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
                </div>
                <div className="text-[10px] tracking-wider uppercase text-text-muted/65 flex items-center gap-1.5 font-mono">
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
                        <h2 className="text-xl font-bold tracking-[0.15em] text-white uppercase font-mono">
                          FIND_ME_ON
                        </h2>
                        <p className="text-[10px] text-text-muted/80 uppercase tracking-wider font-mono">
                          I'd love to <span className="text-accent font-semibold">connect</span> with you!
                        </p>
                      </div>
                    </div>

                    {/* Diagnostic Monitor Box */}
                    <div className="bg-black/45 rounded-xl border border-white/[0.05] p-4.5 font-mono text-[10px] leading-relaxed text-text-muted/80 flex-grow flex flex-col justify-between min-h-[105px]">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-secondary font-bold">$</span>
                          <span className="text-text-base font-semibold">{diagnostic.cmd}</span>
                        </div>
                        <div className="text-text-muted/50 pl-2.5 truncate">{diagnostic.line1}</div>
                        <div className="text-text-muted/50 pl-2.5 truncate">{diagnostic.line2}</div>
                      </div>
                      <div className="flex items-center justify-between border-t border-white/[0.04] pt-2 mt-3 text-[8px] tracking-wider uppercase text-text-muted/40">
                        <span>NODE_FEED</span>
                        <span className="text-accent font-bold tracking-widest">{diagnostic.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider (visible only on desktop) */}
                  <div className="hidden md:block md:col-span-1 w-px bg-white/[0.05] mx-auto" />

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
                            className="relative group/btn flex items-center gap-3.5 px-4.5 py-4 rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.04] hover:border-accent/40 transition-all duration-300 select-none cursor-pointer"
                            aria-label={link.label}
                          >
                            {/* Interactive inner glow */}
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/btn:opacity-100 rounded-xl blur transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="p-2 rounded-lg bg-bg-base/70 border border-white/[0.04] group-hover/btn:border-accent/30 group-hover/btn:bg-accent/5 transition-all duration-300">
                              <Icon className="w-4.5 h-4.5 text-text-muted group-hover/btn:text-accent transition-colors duration-300" />
                            </div>
                            
                            <div className="flex flex-col text-left min-w-0">
                              <span className="text-[11px] font-bold text-white group-hover/btn:text-accent tracking-wider uppercase transition-colors duration-300 truncate">
                                {link.label}
                              </span>
                              <span className="text-[8px] font-mono text-text-muted/40 group-hover/btn:text-accent/50 transition-colors duration-300">
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

        <ContactUs hideHeader={true} />
      </SectionWrapper>
    </div>
  );
}

export default LandingPage;
