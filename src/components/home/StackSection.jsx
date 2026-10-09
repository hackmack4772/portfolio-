import React from "react";
import SectionTitle from "../ui/SectionTitle";
import { usePortfolio } from "../../Context/PortfolioDataContext";

/**
 * The skill register, grouped exactly as the CV groups it.
 *
 * Deliberately shows names only, not proficiency bars. A self-assigned
 * "React 92%" tells a reader nothing they can trust, and the numbers in the
 * database are mostly an unreviewed default. The grouping itself - backend,
 * data and messaging, security and real-time - communicates the shape of the
 * skill set, which is the useful part.
 */
export default function StackSection() {
  const { skills } = usePortfolio();
  const list = Array.isArray(skills) ? skills : [];

  if (!list.length) return null;

  const grouped = list.reduce((acc, s) => {
    const key = s.category || "General";
    (acc[key] = acc[key] || []).push(s);
    return acc;
  }, {});

  // Stable, meaningful order rather than whatever the database returns.
  const ORDER = ["Backend", "Frontend", "Data & Messaging", "Security & Real-Time", "DevOps & Practice"];
  const categories = Object.keys(grouped).sort((a, b) => {
    const ia = ORDER.indexOf(a), ib = ORDER.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

  return (
    <div className="w-full">
      <SectionTitle
        subtitle="Technical Register"
        title="The"
        highlight="Stack"
        description={`${list.length} technologies I work with day to day, grouped by where they sit in a system.`}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat}
            className="surface-interactive reveal p-5"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-[var(--edge-1)] pb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
                {cat}
              </h3>
              <span className="ml-auto font-mono text-[9px] text-text-muted/70">
                {String(grouped[cat].length).padStart(2, "0")}
              </span>
            </div>

            <ul className="flex flex-wrap gap-x-3 gap-y-2">
              {grouped[cat].map((s) => (
                <li
                  key={s.id || s.name}
                  className="font-mono text-[11px] text-text-muted/90 transition hover:text-text-base"
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
