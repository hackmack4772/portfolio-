import React, { useEffect, useState, useRef } from "react";
import { 
  Download, 
  FileText, 
  Layers, 
  Cpu, 
  Database, 
  Network, 
  Zap, 
  ShieldCheck, 
  Terminal as TerminalIcon,
  Play,
  Monitor,
  Activity,
  CheckCircle,
  FileDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import pdfFallback from "../../Assets/resume.pdf";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import HelmetWrapper from "../../components/HelmetWrapper";
import SectionWrapper from "../../components/ui/SectionWrapper";
import SectionTitle from "../../components/ui/SectionTitle";
import ActionButton from "../../components/ui/ActionButton";
import GlowCard from "../../components/ui/GlowCard";
import FloatingBadge from "../../components/ui/FloatingBadge";
import { calculateExperience } from "../../utils/experience";

// Engineering category clusters data
const CAPABILITIES = [
  { label: "BACKEND_SYSTEMS", level: "advanced", score: 92, color: "text-blue-500", progress: "bg-blue-500" },
  { label: "API_ARCHITECTURE", level: "optimized", score: 95, color: "text-green-500", progress: "bg-green-500" },
  { label: "REALTIME_INFRA", level: "active", score: 85, color: "text-purple-500", progress: "bg-purple-500" },
  { label: "DATABASE_ENGINEERING", level: "scalable", score: 90, color: "text-pink-500", progress: "bg-pink-500" }
];

function ResumeNew() {
  const { about, contact, skills } = usePortfolio();
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  // Secure transfer simulation states
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferLogs, setTransferLogs] = useState([]);
  const [transferProgress, setTransferProgress] = useState(0);
  const logEndRef = useRef(null);

  const { displayYears } = calculateExperience();

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

  // Scroll logs to bottom
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [transferLogs]);

  // Secure transfer simulator trigger
  const triggerSecureDownload = () => {
    if (isTransferring) return;
    setIsTransferring(true);
    setTransferProgress(0);
    setTransferLogs([]);

    const logs = [
      "[INFO] Resolving gate endpoint connection...",
      "[INFO] Initializing secure FTP pipeline on port 22...",
      "[INFO] Handshaking core: com.hackmack.assets.server",
      "[INFO] Authenticating guest token handshake...",
      "[SUCCESS] Access granted. Security authorization: verified.",
      "[INFO] Requesting file payload: Aamir_Lone_Resume.pdf",
      "[INFO] Initializing cryptographic download stream...",
      "[TRANSFER] Synced packets: 20% // Rate: 12.4 MB/s",
      "[TRANSFER] Synced packets: 55% // Rate: 14.8 MB/s",
      "[TRANSFER] Synced packets: 85% // Rate: 15.2 MB/s",
      "[TRANSFER] Synced packets: 100% // Bytes downloaded: 280KB",
      "[SUCCESS] MD5 Checksum signature matches database.",
      "[INFO] Decrypting local payload buffer. System active."
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < logs.length) {
        setTransferLogs(prev => [...prev, logs[currentIndex]]);
        setTransferProgress(Math.floor(((currentIndex + 1) / logs.length) * 100));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Trigger browser file download
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "Aamir_Saleem_Lone_Resume.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          setIsTransferring(false);
          setTransferLogs([]);
        }, 1200);
      }
    }, 180);
  };

  return (
    <SectionWrapper id="resume-section" className="pt-36 md:pt-40 lg:pt-44 pb-16" spacing="none">
      <HelmetWrapper>
        <title>Engineering Dashboard | Resume</title>
        <meta name="description" content="Access Aamir Saleem Lone's professional CV, engineering metrics, and dynamic systems capabilities." />
      </HelmetWrapper>

      {/* Radial ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />

      {/* Page Heading */}
      <SectionTitle 
        subtitle="Resume Command" 
        title="Engineering" 
        highlight="Console" 
        description="A telemetry dashboard representing system capability mappings, career deployments, and secure transfer logs."
      />

      {/* Secure Transfer Modal overlay */}
      <AnimatePresence>
        {isTransferring && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-[#030712] border border-accent/25 rounded-2xl overflow-hidden shadow-2xl p-6 relative flex flex-col gap-4 font-mono text-xs"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[10px] text-text-muted">
                <span className="flex items-center gap-1.5"><FileDown className="w-3.5 h-3.5 text-accent" /> SECURE_PAYLOAD_TRANSFER</span>
                <span className="text-accent animate-pulse">{transferProgress}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-black/40 border border-white/[0.06] rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: `${transferProgress}%` }} />
              </div>

              {/* Terminal log panel */}
              <div className="h-48 bg-black/50 border border-white/[0.05] rounded-xl p-4 overflow-y-auto space-y-1.5 no-scrollbar text-text-muted text-[10px]">
                {transferLogs.map((log, idx) => {
                  const isSuccess = log.includes("[SUCCESS]");
                  return (
                    <div key={idx} className={isSuccess ? "text-green-400 font-bold" : ""}>
                      {log}
                    </div>
                  );
                })}
                <div ref={logEndRef} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mt-8">
        
        {/* Left Column: KPI Metrics & Capabilities */}
        <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32 w-full text-left">
          
          {/* Hardware status panel */}
          <div className="glass-premium-dark p-5 rounded-2xl border border-white/[0.08] flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute inset-0 crt-scanlines opacity-5 pointer-events-none select-none" />
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 select-none">
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-accent" />
                <span>System Capabilities</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            </div>

            <div className="flex flex-col gap-3">
              {CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="space-y-1 font-mono text-[10px]">
                  <div className="flex justify-between items-center">
                    <span>{cap.label}:</span>
                    <span className={`${cap.color} font-bold`}>{cap.level}</span>
                  </div>
                  <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cap.progress}`} style={{ width: `${cap.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Stat */}
          <GlowCard glowColor="primary" hoverGlow={false} variant="dark" className="p-5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Professional Stand</span>
            <h4 className="text-3xl font-black font-mono text-text-base">{displayYears} Years</h4>
            <p className="text-xs text-text-muted leading-relaxed">Specialized in enterprise MERN, Laravel backend frameworks, and loyalty rewards architectures.</p>
          </GlowCard>

          {/* CV Controls */}
          <div className="glass-premium p-5 rounded-2xl flex flex-col gap-3">
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider">CV Transmission Control</span>
            <div className="flex flex-col gap-2">
              <ActionButton
                onClick={triggerSecureDownload}
                variant="primary"
                className="w-full justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Request Secure Transfer</span>
              </ActionButton>
              
              <ActionButton
                onClick={() => setShowPdfPreview(!showPdfPreview)}
                variant="secondary"
                className="w-full justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>{showPdfPreview ? "Hide Preview console" : "Open Preview console"}</span>
              </ActionButton>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Logs Panel */}
        <div className="lg:col-span-8 flex flex-col w-full">
          <div className="glass-premium-dark rounded-2xl border border-white/[0.08] shadow-2xl min-h-[480px] w-full relative overflow-hidden flex flex-col">
            
            {/* Dashboard Tab Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3 select-none w-full bg-white/[0.01]">
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
                  mission_logs.env
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
                          <div key={index} className="flex gap-4 p-5 rounded-xl glass-premium border border-white/[0.06] hover:border-accent/40 relative overflow-hidden group transition-all duration-300">
                            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary to-accent opacity-45" />
                            <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div className="space-y-2 w-full font-mono text-[10px]">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-white/[0.03] pb-1.5 select-none">
                                <h4 className="text-[11px] font-bold text-text-base leading-tight">
                                  ROLE: {exp.position} <span className="text-accent">@ {exp.company}</span>
                                </h4>
                                <span className="text-[8px] text-text-muted bg-white/[0.05] px-2 py-0.5 rounded border border-white/[0.08] self-start sm:self-center">
                                  {exp.period}
                                </span>
                              </div>
                              
                              {/* Mission details */}
                              <div className="space-y-1 text-text-muted pt-1">
                                <span className="text-[8px] text-primary font-bold uppercase tracking-widest block select-none">// Mission log</span>
                                <p className="font-sans text-[11px] md:text-xs leading-relaxed text-justify">
                                  {exp.description}
                                </p>
                              </div>
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
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "skills" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {dbSkills && dbSkills.length > 0 ? (
                        dbSkills.map((skill, index) => {
                          const colors = ["bg-primary", "bg-secondary", "bg-accent"];
                          const barColor = colors[index % colors.length];
                          return (
                            <div key={index} className="space-y-1.5 p-3 rounded-xl glass-premium border border-white/[0.05]">
                              <div className="flex justify-between items-center text-xs font-mono">
                                <span className="font-semibold text-text-base">{skill.name}</span>
                                <span className="text-text-muted">{skill.proficiency}%</span>
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
                          <div className="space-y-1 font-mono">
                            <h4 className="text-xs font-bold text-text-base uppercase tracking-wider">No Skills Loaded</h4>
                          </div>
                        </div>
                      )}
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
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4 px-6 font-mono text-xs">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold">Resume Document</h3>
                  <p className="text-xs text-text-muted max-w-xs leading-relaxed font-sans">
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
