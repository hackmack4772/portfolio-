import React from "react";
import { Sparkles } from "lucide-react";
import { calculateExperience } from "../utils/experience";

function AboutCard() {
  const { floorYears } = calculateExperience();
  
  const activities = [
    "Listening to Music & Podcasts",
    "Exploring Emerging Tech (AI, WebRTC)",
    "Photography & Cinematic Video Editing",
    "Playing Basketball & Volleyball",
  ];

  return (
    <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-primary/50 shadow-xl group">
      {/* Background glow effects */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col gap-6">
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed text-text-muted text-justify">
            Hi Everyone, I am <span className="text-primary font-bold">Aamir Saleem Lone</span> from{" "}
            <span className="text-secondary font-bold">Jammu and Kashmir, India.</span>
          </p>
          <p className="text-sm md:text-base leading-relaxed text-text-muted text-justify">
            I am currently working as a MERN + Laravel developer with {floorYears}+ years of professional experience in building enterprise-grade products.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-text-muted text-justify">
            I hold a Master's degree in Computer Applications (MCA) from Swami Vivekanand Institute of Engineering & Technology (SVIET).
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-text-base flex items-center gap-1.5 border-b border-border-base/50 pb-2">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>Beyond Code & Engineering</span>
          </h4>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {activities.map((activity, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-xs md:text-sm text-text-muted hover:text-text-base transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 pt-4 border-t border-border-base/40 text-center sm:text-left">
          <p className="text-base font-serif italic text-glow-primary text-primary">
            "Strive to build things that make a difference!"
          </p>
          <cite className="text-xs font-mono uppercase tracking-wider text-text-muted mt-1 block">
            — Aamir Lone
          </cite>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
