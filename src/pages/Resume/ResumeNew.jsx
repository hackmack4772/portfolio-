import React, { useEffect, useState } from "react";
import { Download, FileText, ExternalLink, Trophy, BookOpen, FileCheck, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import pdfFallback from "../../Assets/resume.pdf";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import ActionButton from "../../components/ui/ActionButton";
import GlowCard from "../../components/ui/GlowCard";
import FloatingBadge from "../../components/ui/FloatingBadge";

function ResumeNew() {
  const { about, contact, skills } = usePortfolio();
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const resumeUrl = contact?.resumeURL && contact.resumeURL.trim().startsWith("http")
    ? contact.resumeURL.trim()
    : pdfFallback;

  const aboutData = about || { experience: [], education: [] };
  const dbSkills = skills || [];

  useEffect(() => {
    // Detect mobile screen sizing
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <SectionWrapper id="resume-section" className="pt-36 md:pt-40 lg:pt-44 pb-16" spacing="none">
      <HelmetWrapper>
        <title>Engineering Dashboard | Resume</title>
        <meta name="description" content="View my professional experience, core capabilities, and download my CV." />
      </HelmetWrapper>

      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Page Heading */}
      <SectionTitle 
        subtitle="Resume Dashboard" 
        title="Engineering" 
        highlight="Console" 
        description="A high-density dashboard highlighting professional logs, metrics, and developer skill sets."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
        
        {/* Left Column: KPI Metrics & Actions */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 w-full text-left">
          
          {/* Experience Stat */}
          <GlowCard glowColor="primary" hoverGlow={false} variant="dark" className="p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Professional Stand</span>
            <h4 className="text-3xl font-black font-mono text-text-base">3+ Years</h4>
            <p className="text-xs text-text-muted">Specialized in enterprise MERN, Laravel, and reward SaaS systems.</p>
          </GlowCard>

          {/* Active position */}
          <GlowCard glowColor="secondary" hoverGlow={false} variant="dark" className="p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-wider">Active Position</span>
            <h4 className="text-lg font-bold text-text-base leading-tight">Full-Stack Developer</h4>
            <p className="text-xs text-text-muted">Mobilytix Rewards at Mahindra Comviva</p>
          </GlowCard>

          {/* Project Stat */}
          <GlowCard glowColor="accent" hoverGlow={false} variant="dark" className="p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-accent uppercase tracking-wider">Delivered Stats</span>
            <h4 className="text-3xl font-black font-mono text-text-base">15+ Platforms</h4>
            <p className="text-xs text-text-muted">Engaged across Healthcare, CRM, and high-load reward platforms.</p>
          </GlowCard>

          {/* Action buttons */}
          <div className="glass-premium p-5 rounded-2xl flex flex-col gap-3">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">CV Controls</span>
            <div className="flex flex-col gap-2">
              <ActionButton
                href={resumeUrl}
                download="Aamir_Saleem_Lone_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </ActionButton>
              
              <ActionButton
                onClick={() => setShowPdfPreview(!showPdfPreview)}
                variant="secondary"
                className="w-full justify-center"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>{showPdfPreview ? "Hide Preview Document" : "Show Preview Document"}</span>
              </ActionButton>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Logs Panel */}
        <div className="lg:col-span-8 flex flex-col w-full">
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] shadow-2xl min-h-[480px] w-full relative overflow-hidden flex flex-col">
            {/* Dashboard Tab Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3.5 select-none w-full bg-white/[0.01]">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all duration-200 cursor-pointer ${
                    activeTab === "experience"
                      ? "bg-white/[0.04] text-accent border-b-2 border-b-accent font-bold"
                      : "bg-transparent text-text-muted hover:text-text-base hover:bg-white/[0.01]"
                  }`}
                >
                  experience_logs.log
                </button>
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all duration-200 cursor-pointer ${
                    activeTab === "skills"
                      ? "bg-white/[0.04] text-accent border-b-2 border-b-accent font-bold"
                      : "bg-transparent text-text-muted hover:text-text-base hover:bg-white/[0.01]"
                  }`}
                >
                  skills_matrix.json
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-text-muted/60">
                <span>DASHBOARD</span>
              </div>
            </div>

            {/* Tab Content Body */}
            <div className="p-6 md:p-8 flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full text-left"
                >
                  {activeTab === "experience" && (
                    <div className="space-y-6">
                      {aboutData.experience && aboutData.experience.length > 0 ? (
                        aboutData.experience.map((exp, index) => (
                          <div key={index} className="flex gap-4 p-4 rounded-xl glass-premium border border-white/[0.06] hover:border-primary/40 relative overflow-hidden group transition-all duration-300">
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-accent opacity-45" />
                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div className="space-y-1.5 w-full">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                <h4 className="text-xs md:text-sm font-bold text-text-base leading-tight">
                                  {exp.position} <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-mono">@ {exp.company}</span>
                                </h4>
                                <span className="text-[9px] font-mono text-text-muted shrink-0 bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] self-start sm:self-center">
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
                        <div className="flex flex-col items-center justify-center p-8 rounded-xl glass-premium border border-white/[0.05] text-center gap-3 py-12 select-none">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Experience Entries</h4>
                            <p className="text-[10px] text-text-muted max-w-[220px] leading-relaxed">
                              Experience timeline logs are empty. Configure entries inside your admin panel.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "skills" && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dbSkills && dbSkills.length > 0 ? (
                          dbSkills.map((skill, index) => {
                            const colors = ["bg-primary", "bg-secondary", "bg-accent"];
                            const barColor = colors[index % colors.length];
                            return (
                              <div key={index} className="space-y-1.5 p-3 rounded-xl glass-premium border border-white/[0.05]">
                                <div className="flex justify-between items-center text-xs">
                                  <span className="font-semibold text-text-base">{skill.name}</span>
                                  <span className="font-mono text-text-muted">{skill.proficiency}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-black/40 border border-white/[0.08] rounded-full overflow-hidden">
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
                          <div className="col-span-2 flex flex-col items-center justify-center p-8 rounded-xl glass-premium border border-white/[0.05] text-center gap-3 py-12 select-none">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent animate-pulse">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Skills Loaded</h4>
                              <p className="text-[10px] text-text-muted max-w-[220px] leading-relaxed">
                                Proficiencies matrix is empty. Configure skills inside your admin settings.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible PDF Viewer Drawer */}
      <AnimatePresence>
        {showPdfPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full glass-premium-dark p-2.5 md:p-4 rounded-3xl border border-white/[0.08] shadow-2xl relative overflow-hidden mt-8"
          >
            {isMobile ? (
              /* Mobile Fallback: Direct visual card */
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4 px-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold">Resume Document</h3>
                  <p className="text-xs text-text-muted max-w-xs leading-relaxed">
                    For optimal reading on mobile viewports, launch the document viewer directly.
                  </p>
                </div>
                <ActionButton
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <span>Open PDF in Tab</span>
                </ActionButton>
              </div>
            ) : (
              /* Desktop/Tablet: Native Embed */
              <iframe
                src={resumeUrl.endsWith(".pdf") ? `${resumeUrl}#toolbar=0` : resumeUrl}
                className="w-full h-[650px] md:h-[750px] rounded-2xl border border-white/[0.06] bg-bg-base/50"
                title="Aamir Lone Resume Document Viewer"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
}

export default ResumeNew;
