import React from "react";

export default function CodeBlockPanel({ code, language = "javascript" }) {
  return (
    <div className="w-full rounded-xl border border-border-base/40 bg-bg-sub/20 shadow-lg font-mono text-[10px] md:text-xs text-text-muted overflow-hidden flex flex-col">
      <div className="px-4 py-1.5 bg-bg-sub/80 border-b border-border-base/40 flex items-center justify-between">
        <span className="text-[9px] font-mono uppercase tracking-wider text-text-muted">{language} file viewer</span>
        <div className="w-2 h-2 rounded-full bg-accent/30" />
      </div>
      <pre className="p-4 overflow-x-auto no-scrollbar text-left font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
