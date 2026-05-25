import React from "react";
import { Calendar, GraduationCap } from "lucide-react";
import GlowCard from "./GlowCard";

export default function TimelineItem({ title, institution, year, score, idx }) {
  const colors = [
    { border: "border-primary", text: "text-primary", bg: "bg-primary/10", glow: "primary" },
    { border: "border-secondary", text: "text-secondary", bg: "bg-secondary/10", glow: "secondary" },
    { border: "border-accent", text: "text-accent", bg: "bg-accent/10", glow: "accent" },
  ];
  
  const theme = colors[idx % colors.length];

  return (
    <div className="relative group pl-8 md:pl-10">
      {/* Vertical timeline node dot */}
      <div className={`absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-bg-base border-2 ${theme.border} flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
        <div className={`w-1.5 h-1.5 rounded-full bg-current ${theme.text}`} />
      </div>

      <GlowCard glowColor={theme.glow} className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-xl ${theme.bg} ${theme.text} flex items-center justify-center shrink-0`}>
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm md:text-base font-bold text-text-base group-hover:text-primary transition-colors duration-200">
                {title}
              </h4>
              <p className="text-xs md:text-sm text-text-muted font-medium">
                {institution}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-border-base/20">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-sub/80 border border-border-base/40 text-[10px] font-mono text-text-muted uppercase">
              <Calendar className="w-3 h-3 text-accent" />
              <span>{year}</span>
            </div>
            {score && (
              <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20">
                {score}
              </span>
            )}
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
