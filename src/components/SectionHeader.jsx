import React from "react";

function SectionHeader({ subtitle, title, highlight, description }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 select-none">
      {subtitle && (
        <h5 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-accent">
          {subtitle}
        </h5>
      )}
      <h2 className="text-3xl md:text-5xl font-black mt-2 text-text-base tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-xs md:text-sm text-text-muted mt-3 max-w-lg leading-relaxed font-sans">
          {description}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mt-4 shadow-[0_0_8px_rgba(12,251,255,0.4)]" />
    </div>
  );
}

export default SectionHeader;
