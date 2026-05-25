import React from "react";

export default function SectionWrapper({ 
  id, 
  children, 
  className = "", 
  variant = "default",
  showTicks = true 
}) {
  const bgClasses = {
    default: "bg-transparent",
    sub: "bg-bg-sub/10 border-y border-border-base/10",
    dark: "bg-bg-base"
  };

  return (
    <section 
      id={id} 
      className={`relative w-full py-16 md:py-24 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 overflow-hidden ${bgClasses[variant]} ${className}`}
    >
      {/* Corner Ticks (+ marks for futuristic engineering details) */}
      {showTicks && (
        <div className="absolute inset-x-4 md:inset-x-8 top-4 md:top-8 flex justify-between pointer-events-none select-none text-[10px] font-mono text-border-base/40">
          <span>+ [0x00]</span>
          <span>[0x7F] +</span>
        </div>
      )}
      {showTicks && (
        <div className="absolute inset-x-4 md:inset-x-8 bottom-4 md:bottom-8 flex justify-between pointer-events-none select-none text-[10px] font-mono text-border-base/40">
          <span>+ [0xFF]</span>
          <span>[0xCC] +</span>
        </div>
      )}
      
      {/* Centralized Grid constraint wrapper */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
}
