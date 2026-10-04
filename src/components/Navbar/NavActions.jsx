import React from "react";
import { Github } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

/**
 * Right-hand side of the navbar.
 *
 * The GitHub link used to be a five-token widget - a pinging status dot, a
 * "SYS:" prefix, a fork icon, a pulsing star icon and the word STAR_REPO -
 * to express "my GitHub". It crowded the bar and ran two infinite CSS
 * animations permanently just to sit there. One icon plus one word says the
 * same thing.
 */
export default function NavActions({ githubUrl }) {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="group hidden items-center gap-2 rounded-lg border border-[var(--edge-1)] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-text-muted transition hover:border-accent/40 hover:bg-accent/[0.06] hover:text-accent lg:flex"
        >
          <Github className="h-3.5 w-3.5" />
          <span className="font-semibold">GitHub</span>
        </a>
      )}
    </div>
  );
}
