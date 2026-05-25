import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function SocialDock({ socialLinks, className = "" }) {
  const links = [
    { icon: Github, href: socialLinks?.github || "https://github.com/hackmack4772", label: "GitHub" },
    { icon: Twitter, href: socialLinks?.twitter || "https://twitter.com/hackmack4772", label: "Twitter" },
    { icon: Linkedin, href: socialLinks?.linkedin || "https://www.linkedin.com/in/aamir-saleem-lone/", label: "LinkedIn" },
    { icon: Instagram, href: socialLinks?.instagram || "https://www.instagram.com/aamir-saleem-lone", label: "Instagram" },
  ].filter(l => l.href);

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {links.map((link, idx) => {
        const Icon = link.icon;
        return (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full glass-premium border border-white/[0.08] text-text-muted hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(12,251,255,0.25)] transition-all duration-300 cursor-pointer"
            aria-label={link.label}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
