import React from "react";

export default function FloatingBadge({ label, status = "active", color = "accent" }) {
  const colors = {
    primary: "border-primary/50 text-primary bg-primary/5 shadow-[0_0_15px_rgba(143,16,183,0.1)]",
    secondary: "border-secondary/50 text-secondary bg-secondary/5 shadow-[0_0_15px_rgba(3,163,165,0.1)]",
    accent: "border-accent/50 text-accent bg-accent/5 shadow-[0_0_15px_rgba(12,251,255,0.1)]"
  };

  const badgeGlows = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent"
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-mono uppercase tracking-wider select-none ${colors[color]}`}>
      <span>{label}</span>
      <span className={`w-1.5 h-1.5 rounded-full animate-ping ${badgeGlows[color]}`} />
    </div>
  );
}
