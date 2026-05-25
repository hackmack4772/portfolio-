import React from "react";

export default function TerminalPanel({ title = "bash", children, className = "" }) {
  return (
    <div className={`w-full rounded-xl border border-border-base/50 bg-bg-base/90 shadow-2xl relative overflow-hidden flex flex-col font-mono text-xs text-text-muted ${className}`}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-sub/80 border-b border-border-base/50 select-none">
        {/* Left Window Control dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
        </div>
        
        {/* Terminal Title */}
        <div className="text-[10px] font-mono tracking-wider uppercase text-text-muted flex items-center gap-1">
          <span className="text-primary">&gt;</span> {title}
        </div>
        
        {/* Right status indicator */}
        <div className="w-10 flex justify-end">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-5 flex-grow overflow-auto no-scrollbar font-mono text-left leading-relaxed">
        {children}
      </div>
    </div>
  );
}
