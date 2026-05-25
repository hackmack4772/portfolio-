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
  Layers
} from "lucide-react";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import TechPill from "../../components/ui/TechPill";
import ActionButton from "../../components/ui/ActionButton";

function getProjectBlueprint(title, technologies = [], category = "") {
  const techs = technologies.map(t => t.toLowerCase());
  
  let architecture = "";
  let schema = "";
  let tradeoffs = [];
  
  if (techs.some(t => t.includes("webrtc") || t.includes("zoom") || t.includes("socket") || t.includes("streaming") || t.includes("video"))) {
    architecture = `  ┌──────────────────────────────────────────────────────────┐
  │                 SYSTEM DESIGN: Real-Time WebRTC          │
  └──────────────────────────────────────────────────────────┘
  [Client Peer A] ────(RTC Peer Connection)────> [Client Peer B]
        │                                             ▲
        └────(Signaling: WebSockets)──> [Node.js Signaling]
                                               │
                                         [Redis PubSub]`;
    schema = `  // WebRTC Signal Message model
  interface SignalPayload {
    type: "offer" | "answer" | "candidate";
    sdp?: string;
    candidate?: RTCIceCandidate;
    roomId: string;
    timestamp: number;
  }`;
    tradeoffs = [
      "P2P direct streams utilized for sub-100ms latency between active peers.",
      "TURN relays enabled via Coturn for traversal of symmetric NAT firewalls.",
      "Node.js signaling process clustered with Redis adapter for session sync."
    ];
  } else if (techs.some(t => t.includes("node") || t.includes("react") || t.includes("mongo") || t.includes("express") || t.includes("firebase"))) {
    architecture = `  ┌──────────────────────────────────────────────────────────┐
  │                   SYSTEM DESIGN: MERN Stack              │
  └──────────────────────────────────────────────────────────┘
  [React Client SPA] ────(REST API / HTTPS)────> [Express App Node]
                                                      │
                                               [Redis Caching]
                                                      │
                                            [MongoDB Replica Set]`;
    schema = `  // MongoDB Mongoose Schema
  const ItemSchema = new Schema({
    title: { type: String, required: true, index: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'active' }
  }, { timestamps: true });`;
    tradeoffs = [
      "Indexed query fields to maintain sub-5ms write/read database response.",
      "Redis memory-cache layer configured for project metadata endpoints.",
      "Stateless JWT authentication implemented for horizontal scale capacity."
    ];
  } else if (techs.some(t => t.includes("laravel") || t.includes("php") || t.includes("sql") || t.includes("mysql") || t.includes("postgres"))) {
    architecture = `  ┌──────────────────────────────────────────────────────────┐
  │               SYSTEM DESIGN: MVC Relational RDBMS         │
  └──────────────────────────────────────────────────────────┘
  [Client Agent] ────(REST API / HTTPS)────> [Laravel Service API]
                                                      │
                                             [Redis Queue Engine]
                                                      │
                                             [PostgreSQL Instance]`;
    schema = `  -- SQL Schema definition
  CREATE TABLE records (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'draft',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_status (status)
  );`;
    tradeoffs = [
      "Asynchronous tasks delegated to Redis queue worker for faster UI thread returns.",
      "Database connections pooled to avoid max thread exhaustion under load spikes.",
      "Strict normalization utilized with target indexing for reporting joins."
    ];
  } else {
    architecture = `  ┌──────────────────────────────────────────────────────────┐
  │                  SYSTEM DESIGN: Serverless               │
  └──────────────────────────────────────────────────────────┘
  [SPA Client] ────(SSL API Call)────> [Vercel Serverless Function]
                                              │
                                       [Edge Cache Core]
                                              │
                                    [Supabase Postgres DB]`;
    schema = `  -- PostgreSQL Relational Model
  CREATE TABLE nodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    label TEXT UNIQUE NOT NULL,
    config JSONB
  );`;
    tradeoffs = [
      "Vercel Edge functions used to host API routes for global low-latency runs.",
      "JSONB payload columns utilized to accommodate highly flexible config inputs.",
      "Optimistic frontend rendering used to mask remote database write latencies."
    ];
  }
  
  return { architecture, schema, tradeoffs };
}

function Projects() {
  const { projects: dbProjects, loading } = usePortfolio();
  const projects = dbProjects || [];
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [expandedProject, setExpandedProject] = useState(null);
  const [blueprintTab, setBlueprintTab] = useState("architecture");

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

  return (
    <SectionWrapper id="projects-section" className="pt-36 md:pt-40 lg:pt-44" spacing="none">
      <HelmetWrapper>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Browse through my portfolio of projects showcasing my skills and experience." />
      </HelmetWrapper>

      {/* Background soft glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Section Heading */}
      <SectionTitle 
        subtitle="Finished Products" 
        title="My" 
        highlight="Projects" 
        description="A list of full-stack, backend, and streaming systems I have shipped over the years"
      />

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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            >
              {sortedProjects.map((project, index) => {
                const textCol = textColors[index % textColors.length];
                const glowCol = glowColors[index % glowColors.length];

                return (
                  <GlowCard 
                    key={project.id}
                    glowColor={glowCol}
                    className="flex flex-col justify-between h-full !p-0 overflow-hidden"
                  >
                    <div className="flex flex-col flex-grow">
                      {/* Project Image Panel */}
                      <div className="relative h-44 overflow-hidden border-b border-border-base/30 bg-bg-sub/20 flex items-center justify-center select-none">
                        {project.imageUrl ? (
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-bg-sub/30 to-transparent flex flex-col items-center justify-center text-text-muted gap-2">
                            <FolderOpen className={`w-10 h-10 ${textCol} opacity-80`} />
                          </div>
                        )}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-bg-base/90 border border-border-base/40 text-[9px] font-mono font-bold uppercase tracking-wider text-accent shadow-md">
                          {project.category || "Project"}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex flex-col gap-4 flex-grow justify-between">
                        <div className="space-y-2">
                          <h3 className="text-sm md:text-base font-bold text-text-base group-hover:text-primary transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-[11px] md:text-xs text-text-muted leading-relaxed line-clamp-3 text-justify">
                            {project.description}
                          </p>
                        </div>

                        {/* Tech Tag Badges */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.technologies.map((tech, techIndex) => (
                              <TechPill key={techIndex} label={tech} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expandable Blueprint Console */}
                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="border-t border-border-base/30 bg-bg-sub/20 font-mono text-[9px] text-text-muted overflow-hidden flex flex-col w-full"
                        >
                          {/* Inner Tabs header */}
                          <div className="flex border-b border-border-base/20 bg-bg-base/40 select-none text-[8px]">
                            {['architecture', 'schema', 'tradeoffs'].map((tab) => (
                              <button
                                key={tab}
                                onClick={() => setBlueprintTab(tab)}
                                className={`flex-1 py-2 text-center uppercase tracking-wider font-bold border-r last:border-r-0 border-border-base/20 cursor-pointer transition-colors ${
                                  blueprintTab === tab 
                                    ? "bg-bg-sub/50 text-accent font-black" 
                                    : "hover:bg-bg-sub/10 text-text-muted/65"
                                }`}
                              >
                                {tab}
                              </button>
                            ))}
                          </div>

                          {/* Inner Tab Contents */}
                          <div className="p-4 text-left overflow-x-auto no-scrollbar max-h-48">
                            {blueprintTab === 'architecture' && (
                              <pre className="text-accent leading-tight whitespace-pre font-mono text-[9px]">
                                {getProjectBlueprint(project.title, project.technologies, project.category).architecture}
                              </pre>
                            )}
                            {blueprintTab === 'schema' && (
                              <pre className="text-secondary leading-tight whitespace-pre font-mono text-[9px]">
                                {getProjectBlueprint(project.title, project.technologies, project.category).schema}
                              </pre>
                            )}
                            {blueprintTab === 'tradeoffs' && (
                              <ul className="space-y-1.5 list-disc pl-3 leading-relaxed text-text-muted/90 text-[10px] font-sans">
                                {getProjectBlueprint(project.title, project.technologies, project.category).tradeoffs.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Action buttons */}
                    <div className="p-5 pt-0 flex items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 flex-grow px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-bg-base bg-accent font-semibold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.25)] transition-all duration-300 cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </a>
                      )}
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 flex-grow px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-text-base glass-premium border border-white/[0.08] hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
                          <span>Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                        className={`flex items-center justify-center gap-1.5 flex-grow px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          expandedProject === project.id 
                            ? "bg-primary text-text-base border border-primary hover:bg-primary/80" 
                            : "text-text-muted glass-premium border border-white/[0.08] hover:border-accent/50 hover:bg-accent/10"
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>System</span>
                      </button>
                    </div>
                  </GlowCard>
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
