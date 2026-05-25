import React from "react";

export default function TerminalPanel({ title = "bash", children, className = "" }) {
  return (
    <div className={`w-full rounded-2xl glass-premium-dark elevate-l1 relative overflow-hidden flex flex-col font-mono text-xs text-text-muted ${className}`}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.015] border-b border-white/[0.06] select-none">
        {/* Left Window Control dots (macOS styling) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Terminal Title */}
        <div className="text-[10px] font-mono tracking-widest uppercase text-text-muted/70 flex items-center gap-1">
          <span className="text-accent">&gt;</span> {title}
        </div>
        
        {/* Right status indicator */}
        <div className="w-12 flex justify-end">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent-color)]" />
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 flex-grow overflow-auto no-scrollbar font-mono text-left leading-relaxed text-text-muted/90">
        {children}
      </div>
    </div>
  );
}

