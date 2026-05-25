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
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl glass-premium border border-white/[0.08] text-center gap-3 py-12 select-none max-w-lg mx-auto">
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
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 py-6 max-w-5xl mx-auto">
      {techSkills.map((tech) => {
        const glowClass = getSkillGlowClass(tech.name);
        return (
          <div
            key={tech.id || tech.name}
            className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl glass-premium text-text-muted hover:text-text-base border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 select-none cursor-pointer ${glowClass}`}
            aria-label={tech.name}
            title={tech.name}
          >
            {/* Dynamic Icon */}
            <div className="text-4.5xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
              {getSkillIcon(tech.icon, tech.name)}
            </div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
