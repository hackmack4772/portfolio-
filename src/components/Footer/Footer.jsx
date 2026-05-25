import React from "react";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { usePortfolio } from "../../Context/PortfolioDataContext";

function Footer() {
  const { about, contact } = usePortfolio();
  const year = new Date().getFullYear();

  const personalName = about?.name || "Aamir Saleem Lone";
  const socialLinks = contact?.socialLinks || {
    github: "https://github.com/hackmack4772",
    twitter: "https://twitter.com/hackmack4772",
    linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
    instagram: "https://www.instagram.com/aamir-saleem-lone",
  };

  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-bg-sub/10 border-t border-border-base/10 py-8 mt-auto relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Designer/Developer Profile */}
        <div className="text-center sm:text-left">
          <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
            Portfolio // <span className="text-text-base font-bold">{personalName}</span>
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-text-muted font-mono tracking-wide">
            © {year} Hackmack. All rights reserved.
          </p>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center gap-3.5">
          {socials.map((social, index) => {
            const Icon = social.icon;
            if (!social.href) return null;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 flex items-center justify-center rounded-full glass-panel border border-border-base/50 text-text-muted hover:text-accent hover:border-accent hover:shadow-[0_0_10px_rgba(12,251,255,0.2)] transition-all duration-300 cursor-pointer"
                aria-label={social.label}
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}

export default Footer;

