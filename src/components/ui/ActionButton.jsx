import React from "react";
import { motion } from "framer-motion";

export default function ActionButton({ 
  children, 
  onClick, 
  href, 
  variant = "primary", // primary, secondary, text
  className = "",
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 select-none cursor-pointer focus:outline-none";
  
  const variants = {
    primary: "text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(12,251,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "text-text-base glass-panel border border-border-base/50 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(143,16,183,0.15)] disabled:opacity-50 disabled:cursor-not-allowed",
    text: "text-text-muted hover:text-accent font-semibold px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex ${className.includes("w-full") ? "w-full" : "w-full sm:w-auto"}`}>
      <Component 
        className={`${baseClasses} ${variants[variant]} ${className}`}
        href={href}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
