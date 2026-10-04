import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import { calculateExperience } from "../../utils/experience";

/**
 * Employment history, read from the database.
 *
 * This replaces the simulated telemetry dashboard that used to sit here. The
 * real version of that story - an enterprise loyalty platform, 15-20
 * microservices, RBAC across ~90 APIs - reads better stated plainly than it
 * did as a mock console jittering Math.random() metrics.
 */
export default function ExperienceSection() {
  const { about } = usePortfolio();
  const roles = Array.isArray(about?.experience) ? about.experience : [];
  const { displayYears } = calculateExperience();

  if (!roles.length) return null;

  return (
    <div className="w-full">
      <SectionTitle
        subtitle="Engineering Timeline"
        title="Where I have"
        highlight="Worked"
        description={`${displayYears} years building production systems, from CRM and streaming products to enterprise loyalty infrastructure.`}
      />

      <ol className="relative mx-auto max-w-4xl">
        {/* Spine */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-border-base/30 to-transparent"
        />

        {roles.map((role, i) => (
          <li key={`${role.company}-${i}`} className="reveal relative pl-10 pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                i === 0 ? "border-accent bg-accent/20" : "border-border-base bg-bg-base"
              }`}
            />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-sans text-base font-bold text-white">{role.position}</h3>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-accent">
                <Building2 className="h-3 w-3" />
                {role.company}
              </span>
              {i === 0 && (
                <span className="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-accent">
                  current
                </span>
              )}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 font-mono text-[10px] uppercase tracking-wider text-text-muted/55">
              <span>{role.period}</span>
              {role.location && <span>· {role.location}</span>}
            </div>

            <p className="mt-3 max-w-3xl text-xs leading-relaxed text-text-muted/85">
              {role.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex justify-center">
        <Link
          to="/resume"
          className="group inline-flex items-center gap-2 rounded-full border border-[var(--edge-2)] px-6 py-2.5 font-mono text-[11px] uppercase tracking-wider text-text-base transition hover:border-accent/50 hover:text-accent"
        >
          Full CV
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
