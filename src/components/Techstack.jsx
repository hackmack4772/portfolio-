import React from "react";
import { getSkillIcon, getSkillGlowClass } from "../utils/iconResolver";
import { Terminal } from "lucide-react";
import { usePortfolio } from "../Context/PortfolioDataContext";

function Techstack() {
  const { skills } = usePortfolio();

  // Filter out "tools" category skills
  const techSkills = (skills || [])
    .filter(
      (s) => !s.category || typeof s.category !== "string" || !s.category.toLowerCase().includes("tool")
    )
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (techSkills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl glass-premium border border-[var(--edge-2)] text-center gap-3 py-12 select-none max-w-lg mx-auto">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
          <Terminal className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Technical Skills</h4>
          <p className="text-[10px] text-text-muted max-w-[280px] leading-relaxed">
            Technical skillset is empty. Configure your technologies inside the admin settings panel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 py-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {techSkills.map((tech) => {
        const glowClass = getSkillGlowClass(tech.name);
        return (
          <div
            key={tech.id || tech.name}
            className={`surface-interactive reveal group relative flex flex-col items-center justify-center gap-1 p-4 text-text-muted select-none ${glowClass}`}
            aria-label={tech.name}
            title={tech.name}
          >
            {/* Dynamic Icon */}
            <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
              {getSkillIcon(tech.icon, tech.name)}
            </div>
            <span className="mt-3 text-center font-mono text-[10px] uppercase leading-tight tracking-wide text-text-muted/80 transition-colors group-hover:text-current">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
