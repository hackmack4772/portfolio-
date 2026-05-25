import React from "react";
import { motion } from "framer-motion";

export default function Header({ children, isScrolled }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`mx-auto w-full max-w-7xl glass-navbar-premium rounded-2xl flex items-center justify-between px-5 md:px-8 pointer-events-auto transition-all duration-300 relative overflow-hidden ${
          isScrolled 
            ? "py-2.5 bg-bg-base/90 shadow-2xl scale-[0.99] border-primary/30" 
            : "py-4 bg-bg-base/75 shadow-lg border-border-base/40"
        }`}
      >
        {/* Futuristic background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none -z-10" />

        {/* Dynamic Scan Line on the bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

        {/* HUD detail lines */}
        <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none" />

        {children}
      </div>
    </motion.header>
  );
}
