import React from "react";
import { motion } from "framer-motion";

export default function GlowCard({ 
  children, 
  className = "", 
  hoverGlow = true,
  glowColor = "primary", // primary, secondary, accent
  variant = "premium", // premium, dark, panel
  onClick 
}) {
  const glowShadows = {
    primary: "hover:shadow-[0_0_30px_rgba(143,16,183,0.15)] hover:border-primary/45",
    secondary: "hover:shadow-[0_0_30px_rgba(3,163,165,0.15)] hover:border-secondary/45",
    accent: "hover:shadow-[0_0_30px_rgba(12,251,255,0.15)] hover:border-accent/45"
  };

  const glassClasses = {
    premium: "glass-premium border border-white/[0.08]",
    dark: "glass-premium-dark border border-white/[0.07]",
    panel: "glass-panel border border-border-base/40"
  };

  return (
    <motion.div
      whileHover={hoverGlow ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`${glassClasses[variant] || glassClasses.premium} p-6 rounded-2xl relative overflow-hidden transition-colors duration-300 ${
        hoverGlow ? `${glowShadows[glowColor]} cursor-pointer` : ""
      } ${className}`}
    >
      {/* Top light bar accent */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      {children}
    </motion.div>
  );
}
