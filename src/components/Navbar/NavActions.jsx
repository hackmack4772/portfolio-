import React from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Terminal } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function NavActions({ githubUrl }) {
  return (
    <div className="flex items-center gap-5">
      {/* Theme Toggle Wrapper */}
      <div className="relative pl-1 border-l border-border-base/20 sm:border-l-0 sm:pl-0">
        <ThemeToggle />
      </div>

      {/* Futuristic Console-widget GitHub Star Button */}
      {githubUrl && (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="relative hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-lg font-mono text-[10px] uppercase tracking-widest text-text-base border border-border-base/40 bg-bg-sub/10 hover:border-accent/40 hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(12,251,255,0.12)] transition-all duration-300 cursor-pointer"
        >
          {/* Tech Scan Line Indicator */}
          <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 tech-scan-line" />

          {/* Active Status Pulse Dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>

          <span className="opacity-50 select-none">SYS:</span>
          
          <div className="flex items-center gap-1.5">
            <GitFork className="w-3.5 h-3.5 text-primary" />
            <Star className="w-3.5 h-3.5 text-accent fill-accent/20 animate-pulse" />
            <span className="font-bold text-text-base">STAR_REPO</span>
          </div>
        </motion.a>
      )}
    </div>
  );
}
