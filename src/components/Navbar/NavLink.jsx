import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLink({ to, label, index, isActive }) {
  // Format index as two digit string: 01, 02...
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={to}
      className={`relative flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest transition-all duration-300 focus:outline-none select-none group ${
        isActive 
          ? "text-accent text-glow" 
          : "text-text-muted hover:text-text-base"
      }`}
    >
      {/* Dynamic Active Indicator Overlay */}
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/30 -z-10 shadow-[0_0_15px_rgba(143,16,183,0.15)]"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}

      {/* Cyberpunk sub-decoration for active/hover links */}
      <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-accent/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center -z-10 rounded-full" />

      {/* Futuristic index prefix */}
      <span className="text-[9px] font-bold text-primary group-hover:text-accent transition-colors duration-300">
        {formattedIndex}
      </span>

      {/* Terminal double-slash separator */}
      <span className="opacity-40 text-text-muted select-none group-hover:opacity-100 transition-opacity duration-300">
        //
      </span>

      {/* Nav Label Text */}
      <span className="font-semibold transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </span>
    </Link>
  );
}
