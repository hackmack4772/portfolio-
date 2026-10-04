import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * A single top-level nav item.
 *
 * Each item used to render five layers at rest: a sliding active pill, a
 * separate hover underline, a "01" index, a "//" separator and the label.
 * Six items came to thirty elements, and every link read as three visual
 * tokens rather than one, which is what made the bar feel sprawling and
 * busy.
 *
 * Now the label carries the item and the sliding pill is the only active
 * treatment. The index is kept - it belongs to the terminal styling - but
 * only surfaces on hover or when active, so the resting bar is quiet.
 */
export default function NavLink({ to, label, index, isActive }) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <Link
      to={to}
      aria-current={isActive ? "page" : undefined}
      className={`group relative flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors select-none ${
        isActive ? "text-accent" : "text-text-muted hover:text-text-base"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute inset-0 -z-10 rounded-lg border border-accent/25 bg-accent/[0.07]"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}

      {/* Index: present, but only legible on hover or when active. Keeps the
          motif without spending three tokens of width on every item. */}
      <span
        aria-hidden="true"
        className={`text-[9px] font-bold tabular-nums transition-opacity duration-200 ${
          isActive ? "text-accent/70 opacity-100" : "text-primary opacity-0 group-hover:opacity-70"
        }`}
      >
        {formattedIndex}
      </span>

      <span className="font-semibold">{label}</span>
    </Link>
  );
}
