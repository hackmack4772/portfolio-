import React from "react";

export default function TechPill({ label }) {
  return (
    <span className="px-2.5 py-1 rounded bg-bg-sub/60 border border-border-base/30 text-[9px] font-mono text-text-muted hover:text-accent hover:border-accent/40 transition-all duration-300 uppercase tracking-wide">
      {label}
    </span>
  );
}
