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
    <footer className="relative z-20 mt-auto w-full border-t border-[var(--edge-2)] bg-bg-sub py-10">
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
            © {year} Hackmack · {personalName}. All rights reserved.
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
                className="surface-interactive flex h-9 w-9 items-center justify-center rounded-full text-text-muted hover:text-accent"
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

