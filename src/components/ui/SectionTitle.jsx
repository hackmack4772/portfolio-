import React from "react";

export default function SectionTitle({ subtitle, title, highlight, description, align = "center", className = "" }) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <div className={`mb-12 flex flex-col select-none md:mb-16 ${alignmentClasses[align]} ${className}`}>
      {subtitle && (
        <h5 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-accent mb-2.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {subtitle}
        </h5>
      )}
      <h2 className="text-3xl md:text-5xl font-black text-text-base tracking-tight font-sans">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-xs md:text-sm text-text-muted mt-3 max-w-xl leading-relaxed font-sans">
          {description}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4 shadow-[0_0_8px_rgba(12,251,255,0.4)]" />
    </div>
  );
}
