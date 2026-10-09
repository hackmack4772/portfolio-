import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink, FolderGit2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import TechPill from "../ui/TechPill";
import { usePortfolio } from "../../Context/PortfolioDataContext";

/**
 * The three projects shown on the landing page.
 *
 * The home page previously surfaced none of the eight projects in the
 * database, so a visitor had to go hunting in the nav before seeing any
 * actual work. Three is deliberate: enough to show range, few enough that
 * the section does not become the whole page. The rest stay on /projects.
 */
const FEATURED_COUNT = 3;

export default function FeaturedWork() {
  const { projects } = usePortfolio();
  const list = Array.isArray(projects) ? projects : [];

  if (!list.length) return null;

  // Prefer anything with a public link - those are the ones worth clicking.
  const featured = [...list]
    .sort((a, b) => Number(Boolean(b.githubUrl || b.demoUrl)) - Number(Boolean(a.githubUrl || a.demoUrl)))
    .slice(0, FEATURED_COUNT);

  return (
    <div className="w-full">
      <SectionTitle
        subtitle="Selected Work"
        title="Things I have"
        highlight="Shipped"
        description="A few of the systems I have built end to end. The full archive lives on the projects page."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <article
            key={p.id || p.title}
            className="surface-interactive reveal group relative flex flex-col gap-4 p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70">
                {p.category || "project"}
              </span>
              <FolderGit2 className="h-4 w-4 shrink-0 text-text-muted/70 transition group-hover:text-accent" />
            </div>

            <h3 className="font-sans text-base font-bold leading-snug text-white">{p.title}</h3>

            <p className="line-clamp-4 flex-grow text-xs leading-relaxed text-text-muted/85">
              {p.description}
            </p>

            {Array.isArray(p.technologies) && p.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 4).map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            )}

            <div className="mt-auto flex items-center gap-4 border-t border-[var(--edge-1)] pt-4 font-mono text-[10px] uppercase tracking-wider">
              {p.githubUrl ? (
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted transition hover:text-accent"
                >
                  <Github className="h-3.5 w-3.5" /> code
                </a>
              ) : null}
              {p.demoUrl ? (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-text-muted transition hover:text-accent"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> live
                </a>
              ) : null}
              {!p.githubUrl && !p.demoUrl && (
                <span className="text-text-muted/70">private / client work</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--edge-2)] px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-text-base transition hover:border-accent/50 hover:text-accent"
        >
          All {list.length} projects
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
