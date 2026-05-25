import React, { useState, useEffect } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, 
  Search, 
  ArrowUpDown, 
  Eye, 
  Github, 
  Terminal,
  FolderOpen
} from "lucide-react";
import { db } from "../../config/firebase";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import GlowCard from "../../components/ui/GlowCard";
import TechPill from "../../components/ui/TechPill";
import ActionButton from "../../components/ui/ActionButton";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const hackmackDocRef = doc(db, "hackmack", "user_projects");
        const projectsRef = collection(hackmackDocRef, "projectsData");
        const querySnapshot = await getDocs(projectsRef);
  
        const projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
        setProjects(projectsData);
        
        // Extract unique categories
        const allCategories = projectsData.reduce((cats, project) => {
          if (project.category && !cats.includes(project.category)) {
            cats.push(project.category);
          }
          return cats;
        }, []);
        
        setCategories(allCategories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

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
    <SectionWrapper id="projects-section" className="pt-28">
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
      <div className="glass-panel p-5 rounded-2xl border border-border-base/40 mb-10 shadow-lg space-y-4 text-left">
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
                          className="flex items-center justify-center gap-1.5 flex-grow px-3 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-text-base glass-panel border border-border-base/70 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-primary" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </GlowCard>
                );
              })}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center glass-panel rounded-3xl border border-border-base/50 shadow-md max-w-md mx-auto gap-4"
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
          className="mt-20 p-6 md:p-8 glass-panel rounded-3xl border border-primary/30 relative overflow-hidden shadow-xl text-center md:text-left"
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
