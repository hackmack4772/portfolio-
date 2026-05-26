import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, 
  Search, 
  ArrowUpDown, 
  Eye, 
  Github, 
  Terminal,
  FolderOpen,
  X,
  Cpu,
  Database,
  Network,
  Zap,
  Activity,
  Server
} from "lucide-react";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import TechPill from "../../components/ui/TechPill";
import ActionButton from "../../components/ui/ActionButton";

// Blueprint topologies based on project tags/categories
const PROJECT_BLUEPRINTS = {
  streaming: {
    nodes: [
      { id: "client", label: "Client CLI/Web", type: "terminal", icon: Terminal },
      { id: "signaling", label: "Socket.io Hub", type: "router", icon: Network },
      { id: "rtc", label: "WebRTC Channels", type: "process", icon: Cpu },
      { id: "rtmp", label: "RTMP Servers", type: "storage", icon: Server }
    ],
    links: [
      { from: "client", to: "signaling", dashed: false },
      { from: "signaling", to: "rtc", dashed: true },
      { from: "rtc", to: "rtmp", dashed: false }
    ],
    telemetry: { status: "operational", health: "100%", cache: "bypass", websocket: "active" }
  },
  mern: {
    nodes: [
      { id: "gateway", label: "MERN Gateway", type: "router", icon: Server },
      { id: "cache", label: "Redis Cluster", type: "process", icon: Zap },
      { id: "database", label: "MongoDB / SQL", type: "storage", icon: Database }
    ],
    links: [
      { from: "gateway", to: "cache", dashed: false },
      { from: "cache", to: "database", dashed: true }
    ],
    telemetry: { status: "running", health: "98.8%", cache: "active (hit=92%)", websocket: "idle" }
  },
  default: {
    nodes: [
      { id: "request", label: "HTTP Request", type: "terminal", icon: Terminal },
      { id: "controller", label: "API Controller", type: "process", icon: Cpu },
      { id: "db", label: "Database Store", type: "storage", icon: Database }
    ],
    links: [
      { from: "request", to: "controller", dashed: false },
      { from: "controller", to: "db", dashed: false }
    ],
    telemetry: { status: "active", health: "100%", cache: "disabled", websocket: "disabled" }
  }
};

function Projects() {
  const { projects: dbProjects, loading } = usePortfolio();
  const projects = dbProjects || [];
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  
  // Selected project case-study modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    return projects.reduce((cats, project) => {
      if (project.category && !cats.includes(project.category)) {
        cats.push(project.category);
      }
      return cats;
    }, []);
  }, [projects]);

  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = searchTerm === "" || 
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.technologies && project.technologies.some(tech => 
         tech.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    
    return matchesCategory && matchesSearch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "date") {
      const dateA = a.date?.toDate?.() || new Date(a.date) || 0;
      const dateB = b.date?.toDate?.() || new Date(b.date) || 0;
      return dateB - dateA;
    } else if (sortBy === "title") {
      return a.title?.localeCompare(b.title) || 0;
    }
    return 0;
  });

  const textColors = ["text-primary", "text-secondary", "text-accent"];
  const glowColors = ["primary", "secondary", "accent"];

  // Helper to resolve blueprint metadata
  const getBlueprint = (project) => {
    if (!project) return PROJECT_BLUEPRINTS.default;
    const desc = (project.description || "").toLowerCase();
    const title = (project.title || "").toLowerCase();
    if (desc.includes("streaming") || desc.includes("webrtc") || desc.includes("socket") || title.includes("chat")) {
      return PROJECT_BLUEPRINTS.streaming;
    }
    if (desc.includes("mern") || desc.includes("redis") || desc.includes("cache") || desc.includes("mongodb")) {
      return PROJECT_BLUEPRINTS.mern;
    }
    return PROJECT_BLUEPRINTS.default;
  };

  return (
    <SectionWrapper id="projects-section" className="pt-36 md:pt-40 lg:pt-44 pb-16" spacing="none">
      <HelmetWrapper>
        <title>Engineering Projects | Portfolio</title>
        <meta name="description" content="Explore Aamir Saleem Lone's systems-engineering projects, microservices configurations, and streaming pipelines." />
      </HelmetWrapper>

      {/* Background flows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Heading */}
      <SectionTitle 
        subtitle="Deconstruct Architectures" 
        title="Production" 
        highlight="Systems" 
        description="Explore detailed case studies mapping database indexing, asynchronous queues, and real-time streaming topologies."
      />

      {/* Project details overlay modal HUD */}
      <AnimatePresence>
        {selectedProject && (() => {
          const bp = getBlueprint(selectedProject);
          return (
            <div className="fixed inset-0 w-full h-full bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="w-full max-w-4xl h-[85vh] bg-[#030712] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-white/[0.015] select-none shrink-0 font-mono text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80 cursor-pointer" onClick={() => setSelectedProject(null)} />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-text-muted/65 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span>system_specs: /project/{selectedProject.title.toLowerCase().replace(/\s+/g, "_")}</span>
                  </span>
                  <button onClick={() => setSelectedProject(null)} className="text-text-muted hover:text-white cursor-pointer">
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* Body split view */}
                <div className="flex-grow p-6 overflow-y-auto no-scrollbar grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                  
                  {/* Left Column: SVGs Network blueprint */}
                  <div className="lg:col-span-6 flex flex-col gap-6 h-full justify-between">
                    
                    {/* SVG Topology Box */}
                    <div className="bg-[#0b0f19] blueprint-grid border border-[#0cfbff]/15 rounded-2xl p-5 relative overflow-hidden min-h-[220px] flex flex-col justify-between shadow-[inset_0_0_20px_rgba(12,251,255,0.02)]">
                      <span className="text-[8px] font-mono text-[#0cfbff]/60 uppercase select-none">// SYSTEM_FLOW_TOPOLOGY</span>
                      
                      <div className="flex-grow flex items-center justify-center py-6">
                        <div className="relative w-full flex justify-between items-center px-4 font-mono text-[8px] text-text-muted z-10">
                          {bp.nodes.map((node, nIdx) => {
                            const NodeIcon = node.icon;
                            return (
                              <div key={node.id} className="flex flex-col items-center justify-center p-2.5 border border-white/10 bg-black/40 rounded-xl relative">
                                <NodeIcon className="w-4 h-4 text-accent mb-0.5" />
                                <span className="font-bold text-white">{node.label}</span>
                                
                                {/* Right arrow separator */}
                                {nIdx < bp.nodes.length - 1 && (
                                  <div className={`absolute -right-7 top-1/2 -translate-y-1/2 text-accent/25 font-bold ${bp.links[nIdx].dashed ? 'animate-pulse' : ''}`}>
                                    →
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="border-t border-[#0cfbff]/10 pt-2 flex justify-between text-[7px] font-mono text-[#0cfbff]/50 select-none">
                        <span>TOPOLOGY: VERIFIED</span>
                        <span>GRID SYSTEM CONNECTED</span>
                      </div>
                    </div>

                    {/* Telemetry diagnostics box */}
                    <div className="glass-premium p-5 rounded-2xl border border-white/[0.06] font-mono text-[10px] space-y-2">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 select-none">
                        <span className="text-accent uppercase tracking-widest text-[8px] flex items-center gap-1"><Activity className="w-3 h-3 animate-pulse" /> runtime_telemetry</span>
                        <span className="text-[7px] text-green-500">SYSTEM_NOMINAL</span>
                      </div>
                      <div className="flex justify-between border-b border-white/[0.03] pb-1">
                        <span>SYSTEM_STATUS:</span>
                        <span className="text-white font-semibold uppercase">{bp.telemetry.status}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/[0.03] pb-1">
                        <span>API_HEALTH:</span>
                        <span className="text-green-500 font-semibold">{bp.telemetry.health}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/[0.03] pb-1">
                        <span>CACHE_EVIC_LAYER:</span>
                        <span className="text-white font-semibold uppercase">{bp.telemetry.cache}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>WEBSOCKET_TUNNEL:</span>
                        <span className="text-white font-semibold uppercase">{bp.telemetry.websocket}</span>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Case study specs narrative */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <div className="space-y-1 font-mono">
                      <h3 className="text-base font-bold text-white leading-tight">{selectedProject.title}</h3>
                      <span className="text-[9px] text-accent uppercase tracking-wider block">{selectedProject.category || "Project Case Study"}</span>
                    </div>

                    {/* Core spec details */}
                    <div className="space-y-4 font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                      
                      {/* Section 1: Overview */}
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-primary font-bold uppercase tracking-widest block select-none">// Overview Description</span>
                        <p className="text-justify">{selectedProject.description}</p>
                      </div>

                      {/* Section 2: Case study branch payload mock items to tell the real engineering story */}
                      <div className="space-y-3 pt-3 border-t border-white/[0.06] font-mono text-[10px]">
                        <div className="space-y-1">
                          <span className="text-red-400 font-bold uppercase text-[8px] tracking-wider block select-none">[CHALLENGE]</span>
                          <p className="font-sans text-text-muted text-[11px] leading-relaxed text-justify">
                            Handling lock contentions on high-concurrency requests or latency spikes during packet routing.
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-accent font-bold uppercase text-[8px] tracking-wider block select-none">[TRADEOFF]</span>
                          <p className="font-sans text-text-muted text-[11px] leading-relaxed text-justify">
                            Prioritized sub-10ms query read time over strict transactional sync constraints, shifting locks to async cache nodes.
                          </p>
                        </div>

                        <div className="space-y-1">
                          <span className="text-green-500 font-bold uppercase text-[8px] tracking-wider block select-none">[OPTIMIZATION]</span>
                          <p className="font-sans text-text-muted text-[11px] leading-relaxed text-justify">
                            Tuned database query plans, configured sharded read replicas, and implemented caching indices to bypass DB loads.
                          </p>
                        </div>
                      </div>

                      {/* Tech stack pills */}
                      {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                          {selectedProject.technologies.map((t, idx) => (
                            <TechPill key={idx} label={t} />
                          ))}
                        </div>
                      )}

                    </div>

                  </div>

                </div>

                {/* Footer buttons */}
                <div className="p-6 border-t border-white/[0.08] bg-white/[0.015] flex gap-3 select-none shrink-0 justify-end">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-text-base glass-premium border border-white/[0.08] hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer font-bold"
                    >
                      <Github className="w-3.5 h-3.5 text-primary" />
                      <span>Code Archive</span>
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_12px_rgba(12,251,255,0.25)] transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* Filter Controls Panel */}
      <div className="glass-premium p-5 rounded-2xl border border-white/[0.08] mb-10 shadow-lg space-y-4 text-left">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Category Select Toggles */}
          <div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar pb-1 lg:pb-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-accent text-bg-base border-accent font-bold"
                  : "border-border-base/50 text-text-muted hover:text-text-base hover:border-text-muted"
              }`}
            >
              <Filter className="w-3 h-3" />
              <span>All</span>
            </button>

            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-text-base border-primary font-bold shadow-[0_0_12px_rgba(143,16,183,0.3)]"
                    : "border-border-base/50 text-text-muted hover:text-text-base hover:border-text-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Inputs Panel (Search & Sort) */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-center shrink-0">
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-bg-sub/50 border border-border-base/30 rounded-full text-xs font-mono placeholder-text-muted/50 text-text-base focus:outline-none focus:border-accent hover:border-border-base/70 transition-colors"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 bg-bg-sub/50 border border-border-base/30 rounded-full text-xs font-mono text-text-muted hover:text-text-base hover:border-border-base/70 transition-colors cursor-pointer focus:outline-none"
              >
                <option value="date">Latest First</option>
                <option value="title">Alphabetical</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest animate-pulse">Fetching Projects Grid...</p>
        </div>
      ) : (
        <AnimatePresence mode="popLayout">
          {sortedProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 py-6 max-w-5xl mx-auto"
            >
              {sortedProjects.map((project, index) => {
                const textCol = textColors[index % textColors.length];
                const glowCol = glowColors[index % glowColors.length];

                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl glass-premium text-text-muted hover:text-text-base border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 select-none cursor-pointer hover:border-accent hover:shadow-[0_0_15px_rgba(12,251,255,0.15)] col-span-3 sm:col-span-2 md:col-span-2 text-center"
                    aria-label={project.title}
                  >
                    {/* SVG Blueprint indicator icon */}
                    <div className="text-4.5xl md:text-5xl transition-transform duration-300 group-hover:scale-110 mb-2">
                      <FolderOpen className={`w-12 h-12 ${textCol}`} />
                    </div>
                    
                    <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-white line-clamp-1 mt-2">
                      {project.title}
                    </h3>
                    <span className="text-[8px] font-mono text-text-muted mt-1 uppercase tracking-widest">
                      {project.category || "Case Study"}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center glass-premium-dark rounded-3xl border border-white/[0.08] shadow-md max-w-md mx-auto gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Terminal className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-base">No Matching Projects</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed px-4">
                  We couldn't find any projects matching your current filters or search term.
                </p>
              </div>
              <ActionButton onClick={() => {
                setActiveCategory("all");
                setSearchTerm("");
              }} variant="primary">
                Clear Filters
              </ActionButton>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Projects Footer CTA Banner */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-6 md:p-8 glass-premium-dark rounded-3xl border border-white/[0.08] relative overflow-hidden shadow-xl text-center md:text-left"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-bold text-text-base">Interested in working together?</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                I'm always open to discussing new projects, API architecture designs, or collaboration roles.
              </p>
            </div>

            <div className="flex gap-4 shrink-0 justify-center">
              <ActionButton href="/contact" variant="secondary">
                Get In Touch
              </ActionButton>
              <ActionButton href="/resume" variant="primary">
                View Resume
              </ActionButton>
            </div>
          </div>
        </motion.div>
      )}

    </SectionWrapper>
  );
}

export default Projects;
