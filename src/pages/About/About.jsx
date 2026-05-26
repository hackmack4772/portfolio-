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
  Activity,
  Layers,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  Calendar,
  Network
} from "lucide-react";
import HelmetWrapper from "../../components/HelmetWrapper";
import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Toolstack from "../../components/Toolstack";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import homeBgHacker from "../../Assets/home_bg_hacker.png";
import { makeTextDynamic } from "../../utils/experience";

// Static Engineering Philosophy Data
const PHILOSOPHY_DATA = [
  {
    title: "Build for Caching & Eviction",
    subtitle: "Cache Core Mindset",
    desc: "Data layers are only as good as their eviction strategies. I design caching networks (Redis LFU/LRU) that protect persistence layers from lock contentions and high-latency spikes during traffic surges.",
    icon: Zap,
    color: "text-blue-500",
    bg: "bg-blue-500/5"
  },
  {
    title: "Observability is a Core Feature",
    subtitle: "Telemetry Mindset",
    desc: "A system without telemetry is a blind system. I treat instrumentation, log streaming, and latency diagnostics as first-class citizens in any backend API pipeline, not as post-prod afterthoughts.",
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-500/5"
  },
  {
    title: "Decouple via Messaging Queues",
    subtitle: "Distributed Pipelines",
    desc: "Synchronous dependencies kill scalability. I split heavy transactions and processing triggers into async worker tasks coordinated by Kafka topics, ensuring highly responsive customer gateways.",
    icon: Network,
    color: "text-purple-500",
    bg: "bg-purple-500/5"
  }
];

// Systems Sandbox Nodes Data
const SYSTEM_SANDBOX = {
  gateway: {
    title: "Edge Router & Security Gateways",
    subtitle: "Nginx / Node.js Router Layer",
    mindset: "I configure edge servers to intercept, throttle, and sanitize incoming requests. I handle SSL/TLS terminations, rate-limiting rules, and load balance connection payloads across backend clusters.",
    kpis: "99.99% Routing uptime | JWT Token checks < 2ms",
    techs: ["Nginx", "Node.js", "Express.js", "JSON Web Tokens"]
  },
  cache: {
    title: "In-Memory Eviction & Staging",
    subtitle: "Redis Caching Cluster",
    mindset: "I use Redis clusters to store active user profiles and compute reward indices. By utilizing transactional locks and pipeline optimizations, I avoid database read bottlenecks and ensure sub-10ms response times.",
    kpis: "92% Cache Hit Ratio | Eviction Policy: LFU",
    techs: ["Redis", "Memory Cache", "Pipeline Tuning"]
  },
  engine: {
    title: "Transactional rewards Calculation",
    subtitle: "Mobilytix Calculation Core",
    mindset: "This is the business logic processing engine. I design multi-threaded, cluster-safe microservices that process high-volume point allocations, validate loyalty triggers, and stream event logs asynchronously.",
    kpis: "Up to 25,000 Tx/sec computed | Async thread pools",
    techs: ["React", "TypeScript", "Node.js", "Event Sourcing"]
  },
  persistence: {
    title: "Optimized Relational Database Layer",
    subtitle: "MySQL / PostgreSQL Archives",
    mindset: "The ultimate source of truth. I design relational database schemas with indexed queries, shard read/write operations through primary-replica links, and audit indices to prevent table lock escalations.",
    kpis: "Query latency < 15ms | Optimized B-Tree indexing",
    techs: ["MySQL", "PostgreSQL", "Query Tuning", "Replica Routing"]
  }
};

// Interactive SVG Git Branch career commits
const GIT_BRANCH_TIMELINE = [
  {
    branch: "education",
    label: "research/mca-studies",
    commit: "mca_init_0x7b",
    title: "Master of Computer Applications",
    company: "SVIET College, Punjab",
    date: "2023 - 2025",
    impact: "Acquired deep understanding of database architectures, memory allocations, and discrete algorithms. Maintained a high-standing 8 CGPA.",
    challenges: "Balanced algorithmic theory with real-time stack implementations.",
    techs: ["Algorithms", "Data Structures", "MySQL", "Java"]
  },
  {
    branch: "development",
    label: "ship/shine-dezign-crm",
    commit: "feat_stream_0x4f",
    title: "Software Engineer",
    company: "Shine Dezign Infonet",
    date: "2022 - 2023",
    impact: "Designed secure healthcare management modules, optimized custom CRM databases, and integrated WebRTC/RTMP audio-video streaming gateways.",
    challenges: "Reducing visual latency drift during high-load streaming heartbeats.",
    techs: ["React.js", "Node.js", "Laravel", "WebRTC", "Socket.io"]
  },
  {
    branch: "scaling",
    label: "scale/comviva-rewards",
    commit: "perf_cache_0x2c",
    title: "Full-Stack Developer",
    company: "Mahindra Comviva",
    date: "2023 - Present",
    impact: "Architecting the Mobilytix Rewards loyalty portal. Implemented Redis cluster staging, optimized MySQL index tables, and built interactive dashboards.",
    challenges: "Handling concurrent transaction locks during reward calculations.",
    techs: ["React.js", "Node.js", "TypeScript", "Redis", "MySQL", "Docker"]
  }
];

function About() {
  const { about, contact } = usePortfolio();
  const [expClock, setExpClock] = useState("3.00000000");
  const [selectedSandbox, setSelectedSandbox] = useState("gateway");
  const [focusedCommit, setFocusedCommit] = useState(GIT_BRANCH_TIMELINE[2]);

  // Telemetry ticking clock calculation since Jan 1, 2023
  useEffect(() => {
    const startDate = new Date("2023-01-01");
    const interval = setInterval(() => {
      const now = new Date();
      const diffMs = now - startDate;
      const years = diffMs / (1000 * 60 * 60 * 24 * 365.25);
      setExpClock(years.toFixed(8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const aboutData = {
    tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",
    biography: makeTextDynamic("I am Aamir Saleem Lone, a passionate Full-Stack Developer with nearly 3 years of hands-on experience in building scalable, secure, and performance-driven web applications. Currently working at Mahindra Comviva on the Mobilytix Rewards platform, I specialize in developing enterprise-grade solutions using React, Node.js, TypeScript, and modern backend systems. Previously, I worked at Shine Dezign Infonet, where I contributed to healthcare, CRM, and real-time streaming applications. I hold a Master’s degree in Computer Applications (MCA) and enjoy building reliable systems that solve real-world problems."),
    photoURL: homeBgHacker,
    ...about
  };

  const contactData = {
    email: "loneaamir6@gmail.com",
    address: "Handwara, Jammu and Kashmir, India",
    socialLinks: {
      github: "https://github.com/hackmack4772",
      linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
      twitter: "https://twitter.com/hackmack4772",
    },
    ...contact
  };

  return (
    <SectionWrapper id="about-section" className="pt-36 pb-16 md:pt-40 md:pb-24 lg:pt-44" spacing="none">
      <HelmetWrapper>
        <title>Engineering Identity | About Me</title>
        <meta name="description" content="Discover Aamir Saleem Lone's systems engineering mindset, technical timeline, and distributed architecture philosophy." />
      </HelmetWrapper>

      {/* Floating Ambient Blurs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Header */}
      <SectionTitle 
        subtitle="Identity Register" 
        title="Engineering" 
        highlight="Mindset" 
        description="Explore the architecture, career commits, and engineering values that shape the products I build."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 w-full text-left">
        
        {/* Left Column: Digital Identity Terminal & Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-32">
          
          {/* Futuristic Profile Card with Scanlines */}
          <div className="relative group p-4 glass-premium-dark rounded-3xl border border-white/[0.08] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 crt-scanlines opacity-5 pointer-events-none select-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-30 pointer-events-none" />

            <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden relative">
              <img
                src={homeBgHacker || aboutData.photoURL }
                alt="Aamir Saleem Lone Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 select-none pointer-events-none"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl glass-premium border border-accent/30 text-[10px] font-mono font-bold text-accent flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span>RUNTIME: ACTIVE</span>
              </div>
            </div>

            {/* Profile sys registers */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[10px] space-y-1.5 text-text-muted">
              <div className="flex justify-between">
                <span>PROFILE:</span>
                <span className="text-white font-bold">ENGINEER_PROFILE.sys</span>
              </div>
              <div className="flex justify-between">
                <span>ROLE:</span>
                <span className="text-white font-bold">Full Stack Engineer</span>
              </div>
              <div className="flex justify-between">
                <span>LOC:</span>
                <span className="text-accent font-bold">{contactData.address}</span>
              </div>
            </div>
          </div>

          {/* Telemetry Clock Stats Card */}
          <GlowCard glowColor="accent" hoverGlow={false} variant="dark" className="p-5 flex flex-col gap-2 relative overflow-hidden">
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[7px] font-mono text-accent uppercase">live_ticker</span>
            </div>
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Computed Professional Age</span>
            <div className="text-3xl font-black font-mono text-accent tabular-nums tracking-wide">
              {expClock} <span className="text-xs text-text-muted font-normal">Yrs</span>
            </div>
            <p className="text-[10px] text-text-muted leading-relaxed font-sans">
              Precision timer tracking elapsed hands-on software development experience since Jan 1, 2023.
            </p>
          </GlowCard>

          {/* Quick Contact HUD */}
          <div className="glass-premium p-5 rounded-2xl flex flex-col gap-3">
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Gateway Handshake</span>
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3 text-xs">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="font-mono text-[11px] text-text-muted truncate select-all">{contactData.email}</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <GitIcon className="w-4 h-4 text-accent shrink-0" />
                <a href={contactData.socialLinks?.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[11px] text-accent hover:underline">
                  github.com/{(contactData.socialLinks?.github || "").split("/").pop()}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative Biography & Philosophy */}
        <div className="lg:col-span-7 flex flex-col gap-8 w-full">
          
          {/* Biography Terminal */}
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] p-6 shadow-2xl flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-2 right-3 text-[8px] font-mono text-text-muted/40 uppercase select-none">
              &lt;bio_manifesto&gt;
            </div>
            <h3 className="text-sm font-mono font-bold text-text-base flex items-center gap-2 border-b border-white/[0.06] pb-3 select-none">
              <Terminal className="w-4 h-4 text-primary" />
              <span>Bio Manifesto</span>
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-text-muted text-justify font-sans">
              {aboutData.biography || aboutData.description}
            </p>
          </div>

          {/* Systems Philosophy Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center gap-1.5 select-none">
              <Cpu className="w-4 h-4 text-accent" />
              <span>Systems Philosophy</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PHILOSOPHY_DATA.map((p, i) => (
                <div key={i} className={`p-4 rounded-xl border border-white/[0.05] ${p.bg} flex flex-col gap-2`}>
                  <div className="flex items-center justify-between">
                    <p.icon className={`w-5 h-5 ${p.color}`} />
                    <span className="text-[8px] font-mono text-text-muted uppercase">0{i+1}_core</span>
                  </div>
                  <div className="space-y-1 mt-1">
                    <h4 className="text-[11px] font-mono font-bold text-white leading-tight">{p.title}</h4>
                    <span className="text-[8px] font-mono text-accent block">{p.subtitle}</span>
                  </div>
                  <p className="text-[10px] text-text-muted leading-relaxed font-sans text-justify mt-1">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* Systems Design Blueprint Sandbox */}
      <div className="w-full text-left mb-20">
        <SectionTitle 
          subtitle="Architect Blueprint" 
          title="Systems" 
          highlight="Sandbox" 
          description="Select layout nodes below to inspect how I think about and configure distributed infrastructure components."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Blueprint SVG Layout Panel */}
          <div className="lg:col-span-7 bg-[#0b0f19] blueprint-grid border-2 border-[#0cfbff]/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-[inset_0_0_30px_rgba(12,251,255,0.02)]">
            <div className="absolute top-3 left-3 text-[9px] font-mono text-[#0cfbff]/60 uppercase tracking-widest select-none">
              // ARCHITECTURE_BLUEPRINT_SCHEMATIC
            </div>
            
            {/* Holographic glowing lines linking blueprint objects */}
            <div className="flex-grow flex items-center justify-center py-8">
              <div className="relative w-full max-w-lg flex justify-between items-center px-4 z-10 font-mono text-[9px]">
                
                {/* Gateway Node */}
                <button 
                  onClick={() => setSelectedSandbox("gateway")}
                  className={`w-28 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    selectedSandbox === "gateway"
                      ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                      : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                  }`}
                >
                  <Cpu className="w-5 h-5 mb-1 text-accent" />
                  <span className="font-bold">01_GATEWAY</span>
                  <span className="text-[7px] opacity-60">Edge Route</span>
                </button>

                {/* Staging Cache & Process Core Group */}
                <div className="flex flex-col gap-10">
                  <button 
                    onClick={() => setSelectedSandbox("cache")}
                    className={`w-28 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                      selectedSandbox === "cache"
                        ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                        : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                    }`}
                  >
                    <Zap className="w-5 h-5 mb-1 text-accent" />
                    <span className="font-bold">02_CACHE</span>
                    <span className="text-[7px] opacity-60">Redis Staging</span>
                  </button>

                  <button 
                    onClick={() => setSelectedSandbox("engine")}
                    className={`w-28 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                      selectedSandbox === "engine"
                        ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                        : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                    }`}
                  >
                    <Activity className="w-5 h-5 mb-1 text-accent" />
                    <span className="font-bold">03_CORE_ENG</span>
                    <span className="text-[7px] opacity-60">Loyalty SaaS</span>
                  </button>
                </div>

                {/* Database Node */}
                <button 
                  onClick={() => setSelectedSandbox("persistence")}
                  className={`w-28 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                    selectedSandbox === "persistence"
                      ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                      : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                  }`}
                >
                  <Database className="w-5 h-5 mb-1 text-accent" />
                  <span className="font-bold">04_DATABASE</span>
                  <span className="text-[7px] opacity-60">Relational DB</span>
                </button>

              </div>
            </div>

            <div className="border-t border-[#0cfbff]/10 pt-3 flex justify-between text-[8px] font-mono text-[#0cfbff]/60 select-none">
              <span>SCALE FACTOR: 10x REPLICAS</span>
              <span>GRID SYSTEM CALIBRATED</span>
            </div>
          </div>

          {/* Blueprint Node Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-premium-dark border border-white/[0.08] p-6 rounded-3xl shadow-2xl min-h-[380px]">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3 select-none">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider">Blueprint Inspector Portal</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold font-mono text-text-base leading-tight">
                  {SYSTEM_SANDBOX[selectedSandbox].title}
                </h3>
                <span className="text-[9px] font-mono text-accent block uppercase">
                  {SYSTEM_SANDBOX[selectedSandbox].subtitle}
                </span>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed text-justify pt-2 font-sans">
                  {SYSTEM_SANDBOX[selectedSandbox].mindset}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <div className="flex flex-col gap-1 font-mono text-[10px]">
                <span className="text-text-muted uppercase text-[8px] tracking-wider">Benchmark KPIs:</span>
                <span className="text-white font-semibold">{SYSTEM_SANDBOX[selectedSandbox].kpis}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-text-muted uppercase text-[8px] tracking-wider font-mono">Integrated Stacks:</span>
                <div className="flex flex-wrap gap-1.5">
                  {SYSTEM_SANDBOX[selectedSandbox].techs.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.05] text-[9px] font-mono text-white font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* Career Commits timeline Section */}
      <div className="w-full text-left mb-20">
        <SectionTitle 
          subtitle="Commit History" 
          title="Career" 
          highlight="Git Flow" 
          description="Trace the developmental branching logic representing my academic transformations and production roles."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-12 w-full">
          
          {/* Timeline Node Inspector Detail Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-premium border border-white/[0.08] p-6 rounded-3xl shadow-2xl min-h-[380px] lg:sticky lg:top-32 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/[0.06] pb-3 font-mono text-[9px] text-text-muted select-none">
                <span>COMMIT: {focusedCommit.commit}</span>
                <span className="text-accent uppercase">[{focusedCommit.branch} branch]</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-white leading-tight font-mono">{focusedCommit.title}</h4>
                <p className="text-xs text-accent font-semibold font-mono">{focusedCommit.company} // {focusedCommit.date}</p>
                <p className="text-xs text-text-muted leading-relaxed pt-3 text-justify font-sans">
                  {focusedCommit.impact}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/[0.06] font-mono text-[10px]">
              <div className="flex flex-col gap-1.5">
                <span className="text-text-muted uppercase text-[8px] tracking-wider block">Production Challenge Resolved:</span>
                <span className="text-red-400 font-semibold">{focusedCommit.challenges}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-text-muted uppercase text-[8px] tracking-wider block">Technologies Deployed:</span>
                <div className="flex flex-wrap gap-1.5">
                  {focusedCommit.techs.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[8px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SVG Branch Graph Interactive Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2">
            <div className="glass-premium-dark rounded-3xl border border-white/[0.08] p-6 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
              <div className="text-[10px] font-mono text-text-muted uppercase border-b border-white/[0.06] pb-3 mb-4 select-none">
                System Commit Registry // select_node_to_expand_diff
              </div>

              <div className="flex-grow flex flex-col gap-6 relative pl-12 md:pl-16">
                
                {/* Vertical SVG branching path */}
                <div className="absolute left-6 top-2 bottom-2 w-8 select-none z-0">
                  <svg className="w-full h-full" viewBox="0 0 40 200" preserveAspectRatio="none">
                    {/* Main branch line */}
                    <line x1="20" y1="0" x2="20" y2="200" stroke="#0ea5e9" strokeWidth="2.5" strokeOpacity="0.3" />
                    {/* Dynamic branching bends */}
                    <path d="M 20,40 Q 5,60 5,80 T 20,120" fill="none" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.4" />
                    <path d="M 20,100 Q 35,120 35,140 T 20,180" fill="none" stroke="#ec4899" strokeWidth="2" strokeOpacity="0.4" />
                  </svg>
                </div>

                {GIT_BRANCH_TIMELINE.map((item, idx) => {
                  const isFocused = focusedCommit.commit === item.commit;
                  return (
                    <button 
                      key={idx}
                      onClick={() => setFocusedCommit(item)}
                      className={`relative z-10 flex gap-4 items-start p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        isFocused 
                          ? "bg-white/[0.04] border-accent shadow-[0_0_12px_rgba(12,251,255,0.15)] scale-102" 
                          : "bg-white/[0.01] border-white/[0.06] hover:border-accent/40"
                      }`}
                    >
                      {/* Commit dot selector */}
                      <div className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          isFocused 
                            ? "bg-accent border-accent scale-110 shadow-[0_0_8px_rgba(12,251,255,0.6)] animate-pulse-cyan" 
                            : "bg-bg-base border-white/30 hover:border-accent"
                        }`}>
                          {isFocused && <div className="w-1.5 h-1.5 rounded-full bg-bg-base" />}
                        </div>
                      </div>

                      <div className="space-y-1 font-mono">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="text-[10px] bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded text-accent">
                            {item.commit}
                          </span>
                          <span className="text-[9px] text-text-muted">{item.date}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white pt-1">{item.title}</h4>
                        <p className="text-[9px] text-text-muted uppercase leading-none mt-1">{item.company}</p>
                      </div>
                    </button>
                  );
                })}

              </div>
              
              <div className="border-t border-white/[0.06] pt-3 text-[8px] font-mono text-text-muted/50 select-none">
                ✓ ALL COMMIT CHECKS PASSED: DEPLOYED SUCCESS
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Spacing Divider */}
      <div className="w-full h-[1px] bg-border-base/10 my-16" />

      {/* Interactive Workflow Pipeline */}
      <div className="w-full text-left mb-20">
        <SectionTitle 
          subtitle="Engineering Process" 
          title="Workflow" 
          highlight="Pipeline" 
          description="How I take raw requirements and architect them into highly scalable production systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 w-full font-mono text-[10px] text-text-muted">
          {[
            { step: "01", title: "MODEL SYSTEM", desc: "Design logical system models, coordinate database schemas, and define API routing paths.", tech: "Swagger / DBML" },
            { step: "02", title: "OPTIMIZE CACHE", desc: "Configure cache eviction policies (LFU), pre-stage transactions, and decouple sync pipelines.", tech: "Redis / Kafka" },
            { step: "03", title: "BENCHMARK TESTS", desc: "Mock high concurrency queries, check memory allocations under load, and verify latency bounds.", tech: "Load Testing / SLA" },
            { step: "04", title: "SCALE OPERATIONS", desc: "Deploy containers in Docker, configure health-check telemetry probes, and monitor live clusters.", tech: "Docker / Vercel" }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl glass-premium border border-white/[0.06] flex flex-col gap-3 relative overflow-hidden group hover:border-accent/40 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-accent">{item.step}_PROCESS</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/45" />
              </div>
              <div className="space-y-1 pt-1">
                <h4 className="font-bold text-white uppercase text-[11px] leading-tight">{item.title}</h4>
                <span className="text-[8px] text-accent block uppercase">Gate: {item.tech}</span>
              </div>
              <p className="text-[10px] text-text-muted leading-relaxed font-sans text-justify mt-1.5">
                {item.desc}
              </p>
            </div>
          ))}
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
