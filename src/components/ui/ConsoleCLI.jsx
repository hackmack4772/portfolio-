import React, { useState, useEffect, useRef } from "react";
import { X, Terminal as TerminalIcon, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ConsoleCLI({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: "Initializing secure link to Aamir Lone's core registers...", type: "system" },
    { text: "Establishing routing credentials...", type: "system" },
    { text: "Connection established. Welcome guest.", type: "success" },
    { text: "Type 'help' to discover CLI command directories.", type: "info" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [glitchActive, setGlitchActive] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 150);
    }
  }, [isOpen]);

  // Handle auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const addHistoryEntry = (text, type = "normal") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    addHistoryEntry(`guest@hackmack-os:~$ ${trimmed}`, "command");
    
    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case "help":
        addHistoryEntry("Available Commands:", "info");
        addHistoryEntry("  help            - Display interface command directory", "normal");
        addHistoryEntry("  telemetry       - Query live host hardware statistics", "normal");
        addHistoryEntry("  skills          - Load technical core proficiencies", "normal");
        addHistoryEntry("  git-log         - Output chronological engineering commits", "normal");
        addHistoryEntry("  override-theme  - Modify CSS variables: <default|cyber|matrix|amber>", "normal");
        addHistoryEntry("  glitch          - Test system decoupling warning alert", "normal");
        addHistoryEntry("  clear           - Purge terminal terminal history console", "normal");
        addHistoryEntry("  exit            - Terminate terminal console portal", "normal");
        break;

      case "clear":
        setHistory([]);
        break;

      case "exit":
        onClose();
        break;

      case "telemetry":
        addHistoryEntry("HOST DIAGNOSTICS:", "info");
        addHistoryEntry("  [NODE] host_ip          : 127.0.0.1 (localhost)", "normal");
        addHistoryEntry(`  [CPU]  load_average     : ${(3 + Math.random() * 4).toFixed(1)}% (M1 Engine)`, "normal");
        addHistoryEntry("  [MEM]  active_heap      : 840 MB / 4096 MB", "normal");
        addHistoryEntry("  [NET]  socket_rtt       : 4 ms", "normal");
        addHistoryEntry("  [SLA]  operational_status: NOMINAL", "success");
        break;

      case "skills":
        addHistoryEntry("CORE SKILLS MATRIX LOADED:", "info");
        addHistoryEntry("  React / Next.js     [====================] 95%", "success");
        addHistoryEntry("  Node.js / Express   [==================  ] 90%", "success");
        addHistoryEntry("  TypeScript          [=================   ] 85%", "success");
        addHistoryEntry("  Laravel / PHP       [=================   ] 85%", "success");
        addHistoryEntry("  MySQL / Redis       [==================  ] 90%", "success");
        addHistoryEntry("  Docker / Nginx      [===============     ] 75%", "success");
        break;

      case "git-log":
        addHistoryEntry("ENGINEERING TIMELINE EVENTS:", "info");
        addHistoryEntry("  * Oct 2023 - Present: Joined Mahindra Comviva (MERN + Redis Rewards SaaS)", "success");
        addHistoryEntry("  * Jun 2022 - Oct 2023: Software Engineer @ Shine Dezign (Healthcare, Streaming)", "success");
        addHistoryEntry("  * May 2023: Completed Master of Computer Applications (MCA) // 8 CGPA", "normal");
        addHistoryEntry("  * Jun 2022: Completed Bachelor of Computer Applications (BCA) // 9.08 CGPA", "normal");
        break;

      case "override-theme":
        if (args.length === 0) {
          addHistoryEntry("Error: Missing theme argument. Options: default, cyber, matrix, amber", "error");
          break;
        }
        const theme = args[0].toLowerCase();
        const root = document.documentElement;
        if (theme === "matrix") {
          root.style.setProperty("--primary", "34 197 94"); // green
          root.style.setProperty("--accent", "16 185 129");
          root.style.setProperty("--bg-base", "#022c22");
          addHistoryEntry("System Alert: Matrix theme applied.", "success");
        } else if (theme === "cyber") {
          root.style.setProperty("--primary", "168 85 247"); // purple
          root.style.setProperty("--accent", "236 72 153"); // pink
          root.style.setProperty("--bg-base", "#0f0728");
          addHistoryEntry("System Alert: Cyberpunk theme applied.", "success");
        } else if (theme === "amber") {
          root.style.setProperty("--primary", "245 158 11"); // amber
          root.style.setProperty("--accent", "217 119 6");
          root.style.setProperty("--bg-base", "#1c0d02");
          addHistoryEntry("System Alert: Amber Fallout theme applied.", "success");
        } else if (theme === "default") {
          root.style.removeProperty("--primary");
          root.style.removeProperty("--accent");
          root.style.removeProperty("--bg-base");
          addHistoryEntry("System Alert: Standard color variables restored.", "success");
        } else {
          addHistoryEntry(`Error: Theme '${theme}' unresolved. Options: default, cyber, matrix, amber`, "error");
        }
        break;

      case "glitch":
        setGlitchActive(true);
        addHistoryEntry("[CRITICAL] CACHE EVICTION OVERFLOW SIGNAL SENT", "error");
        addHistoryEntry("Initiating screen decoupling simulation...", "error");
        setTimeout(() => {
          setGlitchActive(false);
          addHistoryEntry("Interface self-healed. Calibration indices secure.", "success");
        }, 3000);
        break;

      default:
        addHistoryEntry(`bash: command not found: ${command}. Type 'help' for directory listings.`, "error");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      {/* Glitch Overlay Effect */}
      {glitchActive && (
        <div className="absolute inset-0 bg-red-500/10 pointer-events-none z-30 animate-pulse flex items-center justify-center border-4 border-red-500">
          <div className="text-red-500 font-mono text-center space-y-2 animate-bounce">
            <ShieldAlert className="w-16 h-16 mx-auto" />
            <h2 className="text-xl font-bold tracking-widest uppercase">CRITICAL SYSTEM DECOUPLING</h2>
            <p className="text-xs uppercase font-semibold">Decryption failure on cluster core // calibration mismatch</p>
          </div>
        </div>
      )}

      {/* Terminal Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl h-[85vh] bg-[#030712] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.015] select-none shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80 cursor-pointer" onClick={onClose} />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
          </div>
          <div className="text-[10px] font-mono tracking-wider uppercase text-text-muted/65 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            <span>guest@hackmack-os: /sys/cores</span>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-white cursor-pointer">
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Scrollable history console logs */}
        <div 
          ref={containerRef}
          className="flex-grow p-6 overflow-y-auto font-mono text-xs text-text-muted/95 space-y-2.5 selection:bg-accent selection:text-bg-base"
        >
          {/* ASCII Art Welcome banner */}
          <pre className="text-[8px] sm:text-[10px] text-accent leading-none font-bold select-none border-b border-white/[0.04] pb-4 mb-4">
{` __  __            _                            _    
|  \\/  |          | |                          | |   
| \\  / | __ _  ___| | ___ __ ___   __ _  ___ __| | __
| |\\/| |/ _\` |/ __| |/ / '_ \` _ \\ / _\` |/ __/ _\` |/ /
| |  | | (_| | (__|   <| | | | | | (_| | (_| (_|   < 
|_|  |_|\\__,_|\\___|_|\\_\\_| |_| |_|\\__,_|\\___\\__,_|\\_\\
                                                    `}
            <span className="block mt-2 text-text-muted font-normal text-[9px] tracking-wide">
              [ PORTAL INTERACTION CODES ENGAGED // v4.26 ]
            </span>
          </pre>

          {history.map((entry, index) => {
            let style = "text-text-muted";
            if (entry.type === "command") style = "text-white font-bold";
            if (entry.type === "success") style = "text-green-400 font-bold";
            if (entry.type === "info") style = "text-accent font-bold";
            if (entry.type === "error") style = "text-red-400 font-bold";
            if (entry.type === "system") style = "text-text-muted/60 italic";

            return (
              <div key={index} className={style} style={{ whiteSpace: "pre-wrap" }}>
                {entry.text}
              </div>
            );
          })}
        </div>

        {/* Prompt Input Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.01] flex items-center gap-2 shrink-0">
          <span className="font-mono text-xs text-accent font-bold select-none">guest@hackmack-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent border-none outline-none font-mono text-xs text-white selection:bg-accent focus:ring-0"
            placeholder="Type 'help' to explore commands..."
          />
        </div>
      </motion.div>
    </div>
  );
}

export default ConsoleCLI;
