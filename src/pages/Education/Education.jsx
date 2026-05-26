import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  BookOpen, 
  Award, 
  Star, 
  FileCheck, 
  Terminal, 
  Zap, 
  Database, 
  Cpu, 
  Activity, 
  Layers, 
  Network, 
  GitBranch, 
  ShieldAlert, 
  Calendar 
} from "lucide-react";
import HelmetWrapper from "../../components/HelmetWrapper";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import FloatingBadge from "../../components/ui/FloatingBadge";

// Knowledge Domains Data
const KNOWLEDGE_DOMAINS = {
  mern: {
    title: "MERN Stack Architecture",
    description: "Designing non-blocking, asynchronous backend REST APIs and client-side reactive components. Focuses on lifecycle management, state synchronization, and modular layout components.",
    mastery: 95,
    details: ["React Context / Hooks", "Node.js clustering", "Express middleware pipelines", "MongoDB document schemas"]
  },
  caching: {
    title: "Distributed Caching & Staging",
    description: "Managing memory bottlenecks and protecting persistent layers from read surges using Redis. Configuring optimal eviction strategies to guarantee sub-10ms transactional lock resolutions.",
    mastery: 90,
    details: ["Redis LFU / LRU policies", "Transactional cache locks", "Eviction buffer profiling", "Connection pool allocation"]
  },
  databases: {
    title: "Persistent Relational Storage",
    description: "Optimizing relational models, indexing queries for B-Tree lookup speed, and configuring primary-replica configurations to shard heavy analytical operations.",
    mastery: 90,
    details: ["MySQL / PostgreSQL tuning", "Schema indexing and query plans", "Read replicas sharding", "Database lock contention fixes"]
  },
  realtime: {
    title: "Real-Time Streaming Protocols",
    description: "Architecting WebRTC peer connections and Socket.io event-message brokers to handle low-latency frame transmissions and interactive socket pushes.",
    microservices: "Used in CRM & streaming portals",
    mastery: 85,
    details: ["WebSockets / Socket.io hubs", "WebRTC signaling streams", "RTMP frame dispatching", "Concurrency load management"]
  },
  infrastructure: {
    title: "Container Operations & DevOps",
    description: "Deploying microservices inside isolated container environments. Automating server configurations, proxy rules, and routing gates for staging/production.",
    mastery: 80,
    details: ["Docker containers isolation", "Nginx reverse proxy gates", "Vercel edge operations", "GitLab CI pipeline tasks"]
  }
};

// Evolution Eras Data
const EDUCATION_ERAS = [
  {
    id: "era-1",
    tag: "01_FOUNDATIONS",
    title: "Foundations & Mathematical Logic",
    period: "2017 - 2019",
    degree: "Higher Secondary Education (JKBOSE)",
    institution: "Government Higher Secondary School, Handwara",
    outcome: "Concluded standard schooling with 80.4% standing. Developed deep logical interests in mathematics and problem-solving structures.",
    transformation: "Transitioned from textbook formulas to structural problem analysis, building the basis for computer algorithms."
  },
  {
    id: "era-2",
    tag: "02_APPLICATION",
    title: "BCA / Relational Scripting Era",
    period: "2019 - 2022",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "RIMT University, Mandi Gobindgarh, Punjab",
    outcome: "Graduated with a peak standing 9.08 CGPA. Coded my first scripting apps, explored procedural database schemas, and studied OOP concepts.",
    transformation: "Evolved from basic visual layouts to relational databases (SQL) and OOP craftsmanship."
  },
  {
    id: "era-3",
    tag: "03_DISTRIBUTION",
    title: "MCA / Algorithms & Systems Era",
    period: "2023 - 2025",
    degree: "Master of Computer Applications (MCA)",
    institution: "Swami Vivekanand Institute of Engineering & Technology (SVIET)",
    outcome: "Maintained a high-standing 8.0 CGPA. Focused on distributed systems architectures, database schema design, and runtime optimization.",
    transformation: "Evolved from individual scripting sites to understanding multi-tier database configurations and runtime scaling."
  },
  {
    id: "era-4",
    tag: "04_PRODUCTION",
    title: "Production Scale & Optimization Era",
    period: "2022 - Present",
    degree: "Professional Software Engineering Operations",
    institution: "Shine Dezign Infonet & Mahindra Comviva",
    outcome: "Deployed high-load rewards platforms (Mobilytix Rewards) and streaming systems. Optimizing query execution plans and caching structures.",
    transformation: "Transitioned to professional backend operations, designing cache-eviction systems, and resolving lock contentions in live environments."
  }
];

// Milestone Registry Data
const MILESTONE_REGISTRY = [
  {
    id: "mile-1",
    title: "First Production Push",
    desc: "Shipped static templates and API routes to edge production nodes. Learned DNS caching and proxy routing configurations.",
    year: "2022"
  },
  {
    id: "mile-2",
    title: "First Thread Lock Resolution",
    desc: "Fixed heavy table lock escalations on MySQL databases during high-traffic reads. Rewrote queries to leverage index seeks.",
    year: "2023"
  },
  {
    id: "mile-3",
    title: "First Redis Caching Layer",
    desc: "Integrated Redis cluster staging inside rewards systems to resolve database query bottlenecks, decreasing latency by 85%.",
    year: "2024"
  },
  {
    id: "mile-4",
    title: "First Event Broker Pipeline",
    desc: "Configured Kafka event queues to decouple synchronous transaction processing, ensuring gateway responsiveness during bursts.",
    year: "2025"
  }
];

function Education() {
  const { loading } = usePortfolio();
  const [selectedDomain, setSelectedDomain] = useState("mern");
  const [expandedEra, setExpandedEra] = useState("era-4");

  return (
    <SectionWrapper id="education-section" className="pt-36 md:pt-40 lg:pt-44 pb-16" spacing="none">
      <HelmetWrapper>
        <title>Engineering Evolution | Education</title>
        <meta name="description" content="Trace my engineering evolution from basic schooling models to distributed caching systems and production infrastructure." />
      </HelmetWrapper>

      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Heading */}
      <SectionTitle 
        subtitle="Developer Evolution" 
        title="Education" 
        highlight="& Growth" 
        description="A technical map tracing the transformations from academic computer science foundations to professional systems architecture."
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest animate-pulse">Accessing Archive Data...</p>
        </div>
      ) : (
        <div className="flex flex-col gap-16 w-full mt-12 text-left">
          
          {/* Top Section: Metrics HUD & Tech Evolution Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
            
            {/* Left Column: Learning Telemetry Cockpit */}
            <div className="lg:col-span-4 flex flex-col justify-between glass-premium-dark border border-white/[0.08] p-6 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 crt-scanlines opacity-5 pointer-events-none select-none" />
              
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 select-none">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Learning Core Registers</span>
                  <FloatingBadge label="ACTIVE" color="accent" />
                </div>

                {/* monospaced diagnostics statistics */}
                <div className="space-y-3 pt-2 font-mono text-[10px] text-text-muted">
                  <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                    <span>LEARNING_MODE:</span>
                    <span className="text-accent font-bold">ACTIVE // AUTODIDACT</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                    <span>DOMAINS_EXPLORED:</span>
                    <span className="text-white font-bold">25+ Technical Cores</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                    <span>ACADEMIC_PEAK:</span>
                    <span className="text-white font-bold">9.08 CGPA (BCA)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.03] pb-1.5">
                    <span>SYSTEMS_BUILT:</span>
                    <span className="text-white font-bold">Multiple Production</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RUNTIME_STATUS:</span>
                    <span className="text-green-500 font-bold animate-pulse">EVOLVING // STABLE</span>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-start gap-3 select-none">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] font-mono text-text-muted uppercase">Evolution Philosophy</h4>
                  <p className="text-[10px] italic text-text-base font-sans mt-0.5 leading-relaxed">
                    "I don't just study distributed systems; I run tests, code pipelines, break caches, and optimize them."
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Stack Evolution Flowchart */}
            <div className="lg:col-span-8 flex flex-col justify-between glass-premium border border-white/[0.08] p-6 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="space-y-4 w-full">
                <div className="text-[10px] font-mono text-text-muted uppercase border-b border-white/[0.06] pb-3 select-none">
                  Technology Stack Evolution Pipeline
                </div>

                {/* Horizontal flowchart steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-3 text-center">
                  {[
                    { step: "01", key: "MARKUP", name: "HTML / CSS", details: "Layout Core" },
                    { step: "02", key: "SCRIPT", name: "PHP / SQL", details: "Dynamic Code" },
                    { step: "03", key: "FRAME", name: "Laravel", details: "MVC Structures" },
                    { step: "04", key: "ASYNC", name: "Node / MERN", details: "Non-Blocking APIs" },
                    { step: "05", key: "STREAM", name: "Realtime", details: "Sockets / RTC" },
                    { step: "06", key: "SCALE", name: "Architecture", details: "Cache / Cluster" }
                  ].map((flow, index) => (
                    <div 
                      key={index} 
                      className="group relative p-3 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:border-accent/40 hover:bg-white/[0.03] transition-all flex flex-col items-center justify-center gap-1.5"
                    >
                      <span className="text-[7px] font-mono text-accent">{flow.step}_{flow.key}</span>
                      <h4 className="text-[11px] font-bold text-white leading-tight font-mono">{flow.name}</h4>
                      <span className="text-[7px] font-mono text-text-muted">{flow.details}</span>

                      {/* Direction flow indicators (except last item) */}
                      {index < 5 && (
                        <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-accent/20 font-mono text-[9px] pointer-events-none select-none z-10 font-black">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Detail narrative text below pipeline */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-sans text-text-muted leading-relaxed text-justify">
                <strong>Trajectory Summary:</strong> Starting with basic UI markup, I advanced into scripting logic and relational databases. Moving through MVC frame modeling (Laravel), I transitioned to fully asynchronous distributed architectures (MERN Stack, TypeScript). Today, my focus targets real-time communications pipelines (WebSockets) and production telemetry scaling (Redis cache eviction models).
              </div>
            </div>

          </div>

          {/* Spacing Divider */}
          <div className="w-full h-[1px] bg-border-base/10 my-4" />

          {/* Middle Section: Interactive Knowledge System Map */}
          <div className="w-full text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center gap-1.5 mb-6 select-none">
              <GitBranch className="w-4 h-4 text-accent" />
              <span>Knowledge System Map</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Connected node network layout (blueprint-styled) */}
              <div className="lg:col-span-7 bg-[#0b0f19] blueprint-grid border-2 border-accent/20 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-[inset_0_0_30px_rgba(12,251,255,0.02)]">
                <div className="absolute top-3 left-3 text-[9px] font-mono text-[#0cfbff]/60 uppercase tracking-widest select-none">
                  // KNOWLEDGE_NODE_SYSTEM_MESH
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-full max-w-lg h-60 flex items-center justify-between px-4 z-10 font-mono text-[9px]">
                    
                    {/* SVG Link lines between knowledge circles */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                      <line x1="20%" y1="50%" x2="50%" y2="25%" stroke="#0cfbff" strokeWidth="1.5" strokeOpacity="0.25" />
                      <line x1="20%" y1="50%" x2="50%" y2="75%" stroke="#0cfbff" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                      <line x1="50%" y1="25%" x2="80%" y2="35%" stroke="#0cfbff" strokeWidth="1.5" strokeOpacity="0.25" />
                      <line x1="50%" y1="75%" x2="80%" y2="65%" stroke="#0cfbff" strokeWidth="1.5" strokeOpacity="0.25" />
                      <line x1="80%" y1="35%" x2="80%" y2="65%" stroke="#0cfbff" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="3 3" />
                    </svg>

                    {/* MERN Core Node */}
                    <button 
                      onClick={() => setSelectedDomain("mern")}
                      className={`w-24 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                        selectedDomain === "mern"
                          ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                          : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                      }`}
                    >
                      <Cpu className="w-5 h-5 mb-1 text-accent" />
                      <span className="font-bold">MERN</span>
                      <span className="text-[7px] opacity-60">Full-Stack</span>
                    </button>

                    {/* Cache & DB group */}
                    <div className="flex flex-col gap-12 justify-center">
                      <button 
                        onClick={() => setSelectedDomain("caching")}
                        className={`w-24 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDomain === "caching"
                            ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                            : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                        }`}
                      >
                        <Zap className="w-5 h-5 mb-1 text-accent" />
                        <span className="font-bold">CACHING</span>
                        <span className="text-[7px] opacity-60">Redis Cluster</span>
                      </button>

                      <button 
                        onClick={() => setSelectedDomain("databases")}
                        className={`w-24 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDomain === "databases"
                            ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                            : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                        }`}
                      >
                        <Database className="w-5 h-5 mb-1 text-accent" />
                        <span className="font-bold">DATABASE</span>
                        <span className="text-[7px] opacity-60">MySQL/Postgres</span>
                      </button>
                    </div>

                    {/* Realtime & Ops group */}
                    <div className="flex flex-col gap-12 justify-center">
                      <button 
                        onClick={() => setSelectedDomain("realtime")}
                        className={`w-24 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDomain === "realtime"
                            ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                            : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                        }`}
                      >
                        <Network className="w-5 h-5 mb-1 text-accent" />
                        <span className="font-bold">REALTIME</span>
                        <span className="text-[7px] opacity-60">Socket / RTC</span>
                      </button>

                      <button 
                        onClick={() => setSelectedDomain("infrastructure")}
                        className={`w-24 p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                          selectedDomain === "infrastructure"
                            ? "border-accent bg-accent/15 text-white scale-105 shadow-[0_0_15px_rgba(12,251,255,0.25)] animate-pulse-cyan"
                            : "border-white/10 bg-black/40 text-text-muted hover:border-accent/40"
                        }`}
                      >
                        <Layers className="w-5 h-5 mb-1 text-accent" />
                        <span className="font-bold">DEVOPS</span>
                        <span className="text-[7px] opacity-60">Docker / Proxy</span>
                      </button>
                    </div>

                  </div>
                </div>

                <div className="border-t border-accent/10 pt-3 flex justify-between text-[8px] font-mono text-[#0cfbff]/60 select-none">
                  <span>SPECTRUM SCALE: SYSTEM COMPREHENSIVE</span>
                  <span>SYSTEM MAPPED // NOMINAL</span>
                </div>
              </div>

              {/* Node detail inspector panel */}
              <div className="lg:col-span-5 flex flex-col justify-between glass-premium-dark border border-white/[0.08] p-6 rounded-3xl shadow-2xl min-h-[360px]">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] pb-2 font-mono text-[9px] text-text-muted select-none">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>Domain Inspection Portal</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold font-mono text-text-base leading-tight">
                      {KNOWLEDGE_DOMAINS[selectedDomain].title}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed text-justify pt-1 font-sans">
                      {KNOWLEDGE_DOMAINS[selectedDomain].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/[0.06]">
                  {/* Mastery bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span>MASTERY METRIC:</span>
                      <span className="text-accent font-bold">{KNOWLEDGE_DOMAINS[selectedDomain].mastery}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/[0.05]">
                      <div className="h-full bg-accent rounded-full" style={{ width: `${KNOWLEDGE_DOMAINS[selectedDomain].mastery}%` }} />
                    </div>
                  </div>

                  {/* Core items tag keys */}
                  <div className="flex flex-col gap-1.5 font-mono text-[10px]">
                    <span className="text-text-muted uppercase text-[8px] tracking-wider block">Conquered Sub-systems:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {KNOWLEDGE_DOMAINS[selectedDomain].details.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[8px] text-white">
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
          <div className="w-full h-[1px] bg-border-base/10 my-4" />

          {/* Bottom Section: Expandable Evolution Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            
            {/* Timeline Era List (Left/Main Accordion list) */}
            <div className="lg:col-span-7 flex flex-col gap-4 text-left">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center gap-1.5 mb-2 select-none">
                <Calendar className="w-4 h-4 text-accent" />
                <span>System Evolution Accordion</span>
              </h3>

              {EDUCATION_ERAS.map((era) => {
                const isExpanded = expandedEra === era.id;
                return (
                  <div 
                    key={era.id} 
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isExpanded 
                        ? "bg-white/[0.03] border-accent/60 shadow-[0_0_15px_rgba(12,251,255,0.08)]" 
                        : "bg-white/[0.01] border-white/[0.06] hover:border-accent/30"
                    }`}
                  >
                    {/* Header trigger */}
                    <button 
                      onClick={() => setExpandedEra(era.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-mono cursor-pointer select-none"
                    >
                      <div className="space-y-1">
                        <span className="text-[8px] text-accent uppercase font-bold tracking-widest">{era.tag}</span>
                        <h4 className="text-xs font-bold text-white">{era.title}</h4>
                      </div>
                      <span className="text-[10px] text-text-muted shrink-0 ml-4 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08]">
                        {era.period}
                      </span>
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-white/[0.06]"
                        >
                          <div className="p-5 font-sans text-xs md:text-sm text-text-muted leading-relaxed space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px]">
                              <div>
                                <span className="text-text-muted uppercase text-[8px] tracking-wider block">Degree Awarded</span>
                                <span className="text-white font-semibold block mt-0.5">{era.degree}</span>
                              </div>
                              <div>
                                <span className="text-text-muted uppercase text-[8px] tracking-wider block">Institution</span>
                                <span className="text-white font-semibold block mt-0.5">{era.institution}</span>
                              </div>
                            </div>

                            <div className="space-y-1 pt-2">
                              <span className="text-[9px] font-mono text-accent uppercase tracking-widest block">Academic Outcome</span>
                              <p className="text-justify font-sans text-[11px] md:text-xs leading-relaxed">{era.outcome}</p>
                            </div>

                            <div className="space-y-1 pt-2 border-t border-white/[0.03]">
                              <span className="text-[9px] font-mono text-green-500 uppercase tracking-widest block">System Transformation</span>
                              <p className="text-justify font-sans text-[11px] md:text-xs leading-relaxed italic text-green-500/80">"{era.transformation}"</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Timeline Milestones Registry (Right Card) */}
            <div className="lg:col-span-5 flex flex-col gap-5 w-full">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center gap-1.5 mb-2 select-none">
                <Trophy className="w-4 h-4 text-accent" />
                <span>Developer Milestone Registry</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {MILESTONE_REGISTRY.map((mile) => (
                  <div 
                    key={mile.id} 
                    className="p-4 rounded-xl border border-white/[0.06] glass-premium hover:border-accent/40 transition-colors flex gap-4 items-start relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-accent opacity-45" />
                    
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Trophy className="w-4.5 h-4.5" />
                    </div>

                    <div className="space-y-1 font-mono text-[10px]">
                      <div className="flex justify-between items-center w-full">
                        <h4 className="text-[11px] font-bold text-white leading-tight">{mile.title}</h4>
                        <span className="text-[8px] text-text-muted bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.08] ml-2">
                          {mile.year}
                        </span>
                      </div>
                      <p className="text-text-muted leading-relaxed font-sans text-[10px] text-justify pt-1">{mile.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

    </SectionWrapper>
  );
}

export default Education;
