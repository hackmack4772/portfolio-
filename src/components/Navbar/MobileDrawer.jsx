import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { X, GitFork, Star, Terminal, Radio, Shield, HardDrive } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function MobileDrawer({ isOpen, onClose, navItems, isActivePath, githubUrl }) {
  const containerVariants = {
    hidden: { x: "100%", opacity: 0.95 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        damping: 25, 
        stiffness: 200,
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    },
    exit: { 
      x: "100%", 
      opacity: 0.95,
      transition: { 
        type: "tween", 
        duration: 0.35, 
        ease: "easeInOut" 
      } 
    }
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 15 } }
  };

  return (
    <>
      {/* Backdrop blur overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-45 bg-bg-base/60 backdrop-blur-md md:hidden"
      />

      {/* Drawer Container Panel */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-bg-base/95 border-l border-border-base/30 glass-navbar shadow-2xl flex flex-col p-6 overflow-y-auto no-scrollbar md:hidden"
      >
        {/* Cyber grid overlays */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none -z-10" />

        {/* HUD corner styling markers */}
        <div className="absolute top-2 left-2 text-[8px] font-mono text-border-base/40 pointer-events-none select-none">
          SYS_MGR_v4.7 // DRAW_PORT
        </div>

        {/* Close Button & Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border-base/20 mb-8 mt-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-text-base">
              SYSTEM_NAV
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="p-2.5 rounded-lg border border-border-base/30 text-text-base hover:text-accent hover:border-accent/40 bg-bg-sub/10 transition-all cursor-pointer focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col gap-3 flex-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = isActivePath(item.path);
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3.5 w-full rounded-lg border font-mono text-xs uppercase tracking-widest transition-all min-h-[48px] ${
                    isActive
                      ? "text-accent bg-accent/5 border-accent/30 shadow-[0_0_15px_rgba(12,251,255,0.06)]"
                      : "text-text-muted hover:text-text-base border-border-base/10 hover:border-primary/25 hover:bg-primary/5 bg-bg-sub/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-primary group-hover:text-accent"}`} />
                    <span className="font-semibold">{item.label}</span>
                  </div>

                  <span className={`text-[9px] font-bold ${isActive ? "text-accent text-glow" : "text-border-base/60"}`}>
                    {formattedIndex} //
                  </span>
                </Link>
              </motion.div>
            );
          })}

          {/* GitHub Action widget for drawer */}
          {githubUrl && (
            <motion.div variants={itemVariants} className="mt-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3.5 rounded-lg text-xs font-mono tracking-widest uppercase text-text-base bg-primary/10 border border-primary/40 hover:bg-primary/15 transition-all min-h-[48px] shadow-[0_0_15px_rgba(143,16,183,0.05)] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <GitFork className="w-4 h-4 text-primary" />
                  <span>STAR_REPO</span>
                </div>
                <Star className="w-4 h-4 text-accent fill-accent animate-pulse" />
              </a>
            </motion.div>
          )}
        </nav>

        {/* Dashboard Console Telemetry Log */}
        <div className="mt-auto pt-6 border-t border-border-base/20 flex flex-col gap-3 font-mono text-[8px] text-text-muted/60 select-none">
          <div className="flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-accent animate-pulse" />
            <span>PORT_LINK: ACTIVE [127.0.0.1:3000]</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-primary" />
            <span>SECURITY_LEVEL: SAFE // TLSv1.3</span>
          </div>
          <div className="flex items-center gap-1.5">
            <HardDrive className="w-3 h-3 text-green-400" />
            <span>COGNITIVE_CORE: ANTIGRAVITY_v3.5</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
