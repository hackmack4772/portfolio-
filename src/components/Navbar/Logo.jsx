import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center select-none relative focus:outline-none">
      <motion.div
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-base/10 bg-bg-sub/5 backdrop-blur-sm transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:shadow-[0_0_15px_rgba(12,251,255,0.08)]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Futuristic left bracket */}
        <span className="font-mono text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300 select-none">
          [
        </span>

        {/* Terminal Indicator */}
        <span className="font-mono text-[10px] font-bold text-accent/70 group-hover:text-accent transition-colors duration-300">
          _&gt;
        </span>

        {/* Main Logo Text */}
        <span className="text-sm font-black tracking-[0.18em] font-mono text-text-base uppercase">
          HACK
          <span className="text-primary group-hover:text-accent group-hover:text-glow transition-all duration-300">
            MACK
          </span>
        </span>

        {/* Blinking block terminal cursor */}
        <span className="w-1.5 h-3.5 bg-accent animate-cursor-blink group-hover:bg-primary transition-colors duration-300" />

        {/* Futuristic right bracket */}
        <span className="font-mono text-xs font-semibold text-primary group-hover:text-accent transition-colors duration-300 select-none">
          ]
        </span>
      </motion.div>
    </Link>
  );
}
