import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { getSkillIcon, getSkillGlowClass } from "../utils/iconResolver";

function Toolstack() {
  const [toolSkills, setToolSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToolSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));
        const skillsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filter for "tools" category skills
        const filtered = skillsList.filter(
          (s) => s.category && s.category.toLowerCase().includes("tool")
        );

        // Sort by order field
        filtered.sort((a, b) => (a.order || 0) - (b.order || 0));

        setToolSkills(filtered);
        setLoading(false);
      } catch (err) {
        console.error("Error loading tool stack skills:", err);
        setLoading(false);
      }
    };

    fetchToolSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (toolSkills.length === 0) {
    return (
      <div className="text-center py-6 text-xs text-text-muted font-mono">
        No tool skills found. Configure them inside admin panel.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-6 py-6 max-w-3xl mx-auto">
      {toolSkills.map((tool) => {
        const glowClass = getSkillGlowClass(tool.name);
        return (
          <div
            key={tool.id}
            className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl glass-panel text-text-muted hover:text-text-base border border-border-base/50 transition-all duration-500 hover:-translate-y-2 select-none cursor-pointer ${glowClass}`}
            aria-label={tool.name}
            title={tool.name}
          >
            {/* Dynamic Icon */}
            <div className="text-4.5xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
              {getSkillIcon(tool.icon, tool.name)}
            </div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tool.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Toolstack;
