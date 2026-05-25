import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolio } from "../../Context/PortfolioDataContext";

function Preloader() {
  const { loading, bootLogs, bootProgress } = usePortfolio();
  const [visible, setVisible] = useState(loading);
  const consoleEndRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setVisible(false), 600); // Transition buffer
      return () => clearTimeout(timer);
    }
    setVisible(true);
  }, [loading]);

  // Scroll to bottom of terminal when logs update
  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [bootLogs]);

  // Generate ASCII progress bar
  const getProgressBar = (progress) => {
    const totalBars = 20;
    const filledBars = Math.round((progress / 100) * totalBars);
    const emptyBars = totalBars - filledBars;
    return "[" + "█".repeat(filledBars) + "░".repeat(emptyBars) + "]";
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#07090e] p-4 font-mono overflow-hidden select-none"
        >
          {/* Subtle CRT scanline overlay effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-50 opacity-40" />

          {/* Deep blue/purple glowing particles background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Core Preloader Frame */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl rounded-lg border border-white/[0.08] bg-[#0c0f16]/80 backdrop-blur-xl shadow-2xl overflow-hidden glass-premium relative z-10"
          >
            {/* Terminal Window Header (macOS style) */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-75" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-75" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] opacity-75" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-text-muted font-bold">
                SECURE_SHELL // BOOT_SEQUENCE
              </div>
              <div className="text-[10px] text-accent font-semibold">
                v3.5.2
              </div>
            </div>

            {/* Terminal Console Output area */}
            <div className="p-6 min-h-[260px] max-h-[340px] overflow-y-auto flex flex-col gap-2.5 text-xs text-left no-scrollbar text-[#e2e8f0]">
              <div className="text-text-muted/60 text-[10px]">
                HACKMACK SYSTEMS INC. PORTAL CONNECTION PROTOCOL<br />
                AUTHORIZED ACCESS ONLY // SYSTEM STABLE
              </div>
              <div className="h-px bg-white/[0.05] my-1" />

              {/* Logs */}
              {bootLogs.map((log, index) => {
                const isSuccess = log.includes("OK");
                const isFail = log.includes("FAIL");
                const colorClass = isSuccess 
                  ? "text-[#4ade80]" 
                  : isFail 
                  ? "text-[#f87171]" 
                  : "text-accent";

                // Format: [  OK  ] message
                const parts = log.split(/(\[[\s\w.]+\])/);
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-1 font-mono tracking-wide"
                  >
                    {parts.map((part, pIdx) => {
                      if (part.startsWith("[")) {
                        return (
                          <span key={pIdx} className={`${colorClass} font-bold mr-2 select-none`}>
                            {part}
                          </span>
                        );
                      }
                      return <span key={pIdx} className="opacity-90">{part}</span>;
                    })}
                  </motion.div>
                );
              })}

              {/* Loader prompt block */}
              {loading && (
                <div className="flex items-center gap-1.5 text-accent mt-2">
                  <span className="animate-pulse font-bold">[  ..  ]</span>
                  <span className="animate-pulse">LOADING CORES...</span>
                  <span className="w-1.5 h-3.5 bg-accent animate-caret-blink inline-block" />
                </div>
              )}
              
              <div ref={consoleEndRef} />
            </div>

            {/* Terminal Footer with Matrix Progress Bar */}
            <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3 font-mono">
                <span className="text-accent font-bold">PROGRESS:</span>
                <span className="text-text-base/80">{getProgressBar(bootProgress)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-text-muted">STATE:</span>
                <span className="text-accent font-bold text-[10px]">
                  {bootProgress}% SYNCED
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
