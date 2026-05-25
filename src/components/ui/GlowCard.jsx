import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDarkMode } from "../../Context/DarkModeContext";

export default function GlowCard({ 
  children, 
  className = "", 
  hoverGlow = true,
  glowColor = "primary", // primary, secondary, accent
  variant = "premium", // premium, dark, panel
  onClick 
}) {
  const { isDarkMode } = useDarkMode();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const glowShadows = {
    primary: "hover:shadow-glow-primary hover:border-primary/45",
    secondary: "hover:shadow-glow-secondary hover:border-secondary/45",
    accent: "hover:shadow-glow-accent hover:border-accent/45"
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
      onMouseMove={hoverGlow ? handleMouseMove : undefined}
      onMouseEnter={hoverGlow ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverGlow ? () => setIsHovered(false) : undefined}
      className={`${glassClasses[variant] || glassClasses.premium} p-6 rounded-2xl relative overflow-hidden transition-colors duration-300 group ${
        hoverGlow ? `${glowShadows[glowColor]} cursor-pointer` : ""
      } ${className}`}
    >
      {/* Dynamic Mouse Coordinate Spotlight */}
      {hoverGlow && isHovered && (
        <div 
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, ${
              isDarkMode 
                ? (glowColor === 'primary' ? 'rgba(143, 16, 183, 0.08)' : glowColor === 'secondary' ? 'rgba(3, 163, 165, 0.08)' : 'rgba(12, 251, 255, 0.12)')
                : (glowColor === 'primary' ? 'rgba(3, 163, 165, 0.04)' : glowColor === 'secondary' ? 'rgba(143, 16, 183, 0.04)' : 'rgba(122, 13, 155, 0.04)')
            }, transparent 80%)`,
          }}
        />
      )}

      {/* Top light bar accent */}
      <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-10" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
