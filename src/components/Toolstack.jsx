import React from "react";
import { getSkillIcon, getSkillGlowClass } from "../utils/iconResolver";
import { Terminal } from "lucide-react";
import { usePortfolio } from "../Context/PortfolioDataContext";

function Toolstack() {
  const { skills } = usePortfolio();

  // Filter for "tools" category skills
  const toolSkills = (skills || [])
    .filter(
      (s) => s.category && typeof s.category === "string" && s.category.toLowerCase().includes("tool")
    )
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  if (toolSkills.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-2xl glass-premium border border-[var(--edge-2)] text-center gap-3 py-12 select-none max-w-lg mx-auto">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent animate-pulse">
          <Terminal className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-text-base font-mono uppercase tracking-wider">No Tool Skills</h4>
          <p className="text-[10px] text-text-muted max-w-[280px] leading-relaxed">
            Developer tools list is empty. Configure your environment tools inside the admin settings panel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 py-6 max-w-3xl mx-auto">
      {toolSkills.map((tool) => {
        const glowClass = getSkillGlowClass(tool.name);
        return (
          <div
            key={tool.id || tool.name}
            className={`surface-interactive reveal group relative flex flex-col items-center justify-center gap-1 p-4 text-text-muted select-none ${glowClass}`}
            aria-label={tool.name}
            title={tool.name}
          >
            {/* Dynamic Icon */}
            <div className="text-3xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
              {getSkillIcon(tool.icon, tool.name)}
            </div>
            <span className="mt-3 text-center font-mono text-[10px] uppercase leading-tight tracking-wide text-text-muted/80 transition-colors group-hover:text-current">
              {tool.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Toolstack;
