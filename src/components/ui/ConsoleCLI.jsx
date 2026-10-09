import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { X, Terminal as TerminalIcon, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import Overlay from "./Overlay";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import { calculateExperience } from "../../utils/experience";
import { countRender } from "../../utils/debugBus";

// String.raw so the backslashes in the figlet art stay literal.
// The previous banner spelled "Mackmack" - its first glyph was an M.
const BANNER = String.raw`
 _   _     _      ____  _  __ __  __     _      ____  _  __
| | | |   / \    / ___|| |/ /|  \/  |   / \    / ___|| |/ /
| |_| |  / _ \  | |    | ' / | |\/| |  / _ \  | |    | ' /
|  _  | / ___ \ | |___ | . \ | |  | | / ___ \ | |___ | . \
| | | |/_/   \_\ \____||_|\_\|_|  |_|/_/   \_\ \____||_|\_\
|_| |_|                                                    `;

const ROUTES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  resume: "/resume",
  education: "/education",
  contact: "/contact",
};

// Maps onto variables that actually exist in :root. The previous version set
// --primary / --accent / --bg-base, none of which are defined anywhere, so
// `override-theme` had never once changed a pixel.
const THEMES = {
  matrix: { "--primary-color": "#22c55e", "--accent-color": "#4ade80", "--secondary-color": "#15803d" },
  cyber: { "--primary-color": "#a855f7", "--accent-color": "#ec4899", "--secondary-color": "#6366f1" },
  amber: { "--primary-color": "#f59e0b", "--accent-color": "#fbbf24", "--secondary-color": "#d97706" },
  ice: { "--primary-color": "#0ea5e9", "--accent-color": "#67e8f9", "--secondary-color": "#2563eb" },
};

const line = (text = "", type = "normal") => ({ text, type });

const bar = (pct) => {
  const n = Math.max(0, Math.min(20, Math.round((Number(pct) || 0) / 5)));
  return "[" + "=".repeat(n) + " ".repeat(20 - n) + "]";
};

const pad = (s, n) => String(s ?? "").padEnd(n);

const wrap = (text, width = 76) => {
  const out = [];
  let cur = "";
  for (const w of String(text).split(/\s+/)) {
    if ((cur + " " + w).trim().length > width) { out.push(cur.trim()); cur = w; }
    else cur += " " + w;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
};

/** Levenshtein distance - turns an unknown command into a suggestion. */
const distance = (a, b) => {
  const m = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0; j <= b.length; j++) m[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return m[a.length][b.length];
};

function ConsoleCLI({ isOpen, onClose }) {
  countRender("ConsoleCLI");
  const navigate = useNavigate();
  const { about, contact, skills, projects, education } = usePortfolio();

  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [commandLog, setCommandLog] = useState([]);
  const [logIndex, setLogIndex] = useState(-1);
  const [glitchActive, setGlitchActive] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const glitchTimer = useRef(null);

  /**
   * The command registry. help, tab completion and "did you mean" are all
   * derived from it, so adding an entry here is enough to wire a command up.
   * Every command reads live portfolio data rather than hardcoded copy.
   */
  const commands = useMemo(() => {
    const exp = calculateExperience();
    const links = { ...(about?.socialLinks || {}), ...(contact?.socialLinks || {}) };

    const registry = {
      help: {
        group: "core",
        desc: "List every command, or explain one: help <command>",
        run: (args) => {
          const key = args[0]?.toLowerCase();
          if (key && registry[key]) {
            return [
              line(`${key} - ${registry[key].desc}`, "info"),
              ...(registry[key].usage ? [line(`  usage: ${registry[key].usage}`)] : []),
            ];
          }
          const groups = { core: "CORE", profile: "PROFILE", work: "WORK", nav: "NAVIGATION", system: "SYSTEM" };
          const out = [line("HACKMACK-OS command directory", "info"), line()];
          for (const [g, label] of Object.entries(groups)) {
            const list = Object.keys(registry).filter((n) => registry[n].group === g && !registry[n].hidden);
            if (!list.length) continue;
            out.push(line(`  ${label}`, "success"));
            list.forEach((n) => out.push(line(`    ${pad(n, 12)} ${registry[n].desc}`)));
            out.push(line());
          }
          out.push(line("  Tab completes - Up/Down recalls history - Esc closes", "muted"));
          return out;
        },
      },

      whoami: {
        group: "profile",
        desc: "Identity, role and current posting",
        run: () => [
          line("IDENTITY REGISTER", "info"),
          line(`  name       : ${about?.name || "Aamir Saleem Lone"}`),
          line(`  role       : ${about?.title || "Full-Stack Engineer"}`),
          line(`  experience : ${exp.displayYears} years (full-time since Jan 2023)`),
          line(`  location   : ${contact?.address || "Handwara, Jammu and Kashmir, India"}`),
          line(`  status     : OPEN TO INTERESTING PROBLEMS`, "success"),
        ],
      },

      about: {
        group: "profile",
        desc: "Full biography",
        run: () => {
          const text = about?.description || about?.tagline;
          if (!text) return [line("No biography loaded.", "error")];
          return [line("BIOGRAPHY", "info"), ...wrap(text).map((l) => line("  " + l))];
        },
      },

      skills: {
        group: "profile",
        desc: "Skill matrix, live from the database",
        usage: "skills [category]",
        run: (args) => {
          const list = Array.isArray(skills) ? skills : [];
          if (!list.length) return [line("Skill register empty - the database returned no rows.", "error")];

          const filter = args[0]?.toLowerCase();
          const shown = filter ? list.filter((s) => (s.category || "").toLowerCase().includes(filter)) : list;
          if (!shown.length) {
            const cats = [...new Set(list.map((s) => s.category).filter(Boolean))];
            return [line(`No category matching '${filter}'.`, "error"), line(`Known: ${cats.join(", ")}`, "muted")];
          }

          const byCat = shown.reduce((acc, s) => {
            const c = s.category || "GENERAL";
            (acc[c] = acc[c] || []).push(s);
            return acc;
          }, {});

          const out = [line(`SKILL MATRIX // ${shown.length} entries`, "info")];
          for (const [cat, items] of Object.entries(byCat)) {
            out.push(line(), line(`  ${String(cat).toUpperCase()}`, "success"));
            items.forEach((s) =>
              out.push(line(`    ${pad(s.name, 18)} ${bar(s.proficiency)} ${String(s.proficiency ?? "--").padStart(3)}%`))
            );
          }
          return out;
        },
      },

      projects: {
        group: "work",
        desc: "List shipped projects",
        usage: "projects [n]   - 'projects 2' shows detail",
        run: (args) => {
          const list = Array.isArray(projects) ? projects : [];
          if (!list.length) return [line("Project archive empty - the database returned no rows.", "error")];

          if (args[0]) {
            const i = parseInt(args[0], 10) - 1;
            const p = list[i];
            if (!p) return [line(`No project at index ${args[0]}. Range is 1-${list.length}.`, "error")];
            const out = [
              line(`PROJECT ${String(i + 1).padStart(2, "0")} // ${p.title}`, "info"),
              line(`  category   : ${p.category || "uncategorised"}`),
              line(`  stack      : ${(p.technologies || []).join(", ") || "n/a"}`),
            ];
            if (p.githubUrl) out.push(line(`  repository : ${p.githubUrl}`));
            if (p.demoUrl) out.push(line(`  live       : ${p.demoUrl}`));
            if (p.description) out.push(line(), ...wrap(p.description).map((l) => line("  " + l)));
            out.push(line(), line(`  'open ${i + 1}' launches the repository`, "muted"));
            return out;
          }

          return [
            line(`PROJECT ARCHIVE // ${list.length} records`, "info"),
            line(),
            ...list.map((p, i) =>
              line(`  [${String(i + 1).padStart(2, "0")}] ${pad(p.title, 26)} ${(p.technologies || []).slice(0, 3).join(" / ")}`)
            ),
            line(),
            line("  'projects <n>' for detail, 'open <n>' to launch the repo", "muted"),
          ];
        },
      },

      experience: {
        group: "work",
        desc: "Employment history",
        run: () => {
          const list = about?.experience || [];
          if (!list.length) return [line("No experience records loaded.", "error")];
          const out = [line("ENGINEERING TIMELINE", "info")];
          list.forEach((e) => {
            out.push(line(), line(`  * ${e.period} - ${e.position} @ ${e.company}`, "success"));
            if (e.description) wrap(e.description, 72).forEach((l) => out.push(line("    " + l, "muted")));
          });
          return out;
        },
      },

      education: {
        group: "work",
        desc: "Academic record",
        run: () => {
          const list = about?.education?.length ? about.education : education || [];
          if (!list.length) return [line("No academic records loaded.", "error")];
          return [
            line("ACADEMIC RECORD", "info"),
            ...list.flatMap((e) => [
              line(),
              line(`  * ${e.degree || e.title || "Programme"} (${e.year || e.period || "n/a"})`, "success"),
              line(`    ${e.institution || e.school || ""}${e.score ? ` // ${e.score}` : ""}`, "muted"),
            ]),
          ];
        },
      },

      contact: {
        group: "profile",
        desc: "Contact channels and social links",
        run: () => {
          const out = [line("CONTACT CHANNELS", "info")];
          if (contact?.email) out.push(line(`  email    : ${contact.email}`));
          if (contact?.phone) out.push(line(`  phone    : ${contact.phone}`));
          if (contact?.address) out.push(line(`  location : ${contact.address}`));
          const entries = Object.entries(links).filter(([, v]) => v);
          if (entries.length) {
            out.push(line(), line("  SOCIAL", "success"));
            entries.forEach(([k, v]) => out.push(line(`    ${pad(k, 10)} ${v}`)));
            out.push(line(), line("  'open <github|linkedin|twitter|email>' to launch", "muted"));
          }
          return out;
        },
      },

      open: {
        group: "nav",
        desc: "Open a social link, a project repo or your mail client",
        usage: "open <github|linkedin|twitter|instagram|email|resume|n>",
        run: (args) => {
          const target = (args[0] || "").toLowerCase();
          if (!target) return [line("Missing target. Try 'open github' or 'open 1'.", "error")];

          const asIndex = parseInt(target, 10);
          if (!Number.isNaN(asIndex)) {
            const p = (projects || [])[asIndex - 1];
            if (!p) return [line(`No project at index ${target}.`, "error")];
            const url = p.githubUrl || p.demoUrl;
            if (!url) return [line(`'${p.title}' has no public link on record.`, "error")];
            window.open(url, "_blank", "noopener,noreferrer");
            return [line(`Launching ${p.title} -> ${url}`, "success")];
          }

          if (target === "email") {
            if (!contact?.email) return [line("No email on record.", "error")];
            window.location.href = `mailto:${contact.email}`;
            return [line(`Opening mail client -> ${contact.email}`, "success")];
          }

          if (target === "resume") return registry.resume.run([]);

          const url = links[target];
          if (!url) return [line(`Unknown target '${target}'. Known: ${Object.keys(links).join(", ")}`, "error")];
          window.open(url, "_blank", "noopener,noreferrer");
          return [line(`Launching ${target} -> ${url}`, "success")];
        },
      },

      resume: {
        group: "work",
        desc: "Open the CV",
        run: () => {
          const url = contact?.resumeURL?.trim();
          if (url && url.startsWith("http")) {
            window.open(url, "_blank", "noopener,noreferrer");
            return [line("Opening CV...", "success")];
          }
          navigate("/resume");
          onClose();
          return [line("No direct CV URL on record - routing to /resume.", "success")];
        },
      },

      goto: {
        group: "nav",
        desc: "Navigate the site",
        usage: `goto <${Object.keys(ROUTES).join("|")}>`,
        run: (args) => {
          const page = (args[0] || "").toLowerCase();
          if (!page) return [line(`Missing page. Options: ${Object.keys(ROUTES).join(", ")}`, "error")];
          const path = ROUTES[page];
          if (!path) return [line(`Unknown page '${page}'. Options: ${Object.keys(ROUTES).join(", ")}`, "error")];
          navigate(path);
          onClose();
          return [line(`Routing to ${path}`, "success")];
        },
      },

      theme: {
        group: "system",
        desc: "Recolour the interface",
        usage: `theme <${Object.keys(THEMES).join("|")}|reset>`,
        run: (args) => {
          const name = (args[0] || "").toLowerCase();
          const root = document.documentElement;
          if (!name) return [line(`Missing theme. Options: ${Object.keys(THEMES).join(", ")}, reset`, "error")];
          if (name === "reset" || name === "default") {
            Object.values(THEMES).forEach((t) => Object.keys(t).forEach((v) => root.style.removeProperty(v)));
            return [line("Palette restored to the configured scheme.", "success")];
          }
          const theme = THEMES[name];
          if (!theme) return [line(`Unknown theme '${name}'. Options: ${Object.keys(THEMES).join(", ")}, reset`, "error")];
          Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
          return [line(`Palette '${name}' applied. 'theme reset' to undo.`, "success")];
        },
      },

      stack: {
        group: "system",
        desc: "What this site is built with",
        run: () => [
          line("BUILD MANIFEST", "info"),
          line("  framework : React 19 + Vite 6"),
          line("  routing   : react-router-dom 6"),
          line("  styling   : Tailwind CSS 4"),
          line("  motion    : framer-motion 12"),
          line("  3d        : three.js"),
          line("  data      : Firebase Firestore (lite SDK)"),
          line("  hosting   : Vercel"),
          line(),
          line("  source    : github.com/hackmack4772/portfolio-", "muted"),
        ],
      },

      date: { group: "system", desc: "Current system time", run: () => [line(new Date().toString())] },
      echo: { group: "system", desc: "Print back the arguments", run: (args) => [line(args.join(" "))] },
      banner: { group: "system", desc: "Reprint the banner", run: () => [line(BANNER, "banner")] },
      clear: { group: "core", desc: "Clear the screen", run: () => "CLEAR" },
      exit: { group: "core", desc: "Close the console", run: () => "EXIT" },

      sudo: {
        group: "system",
        hidden: true,
        desc: "Elevate privileges",
        run: (args) => [
          line("guest is not in the sudoers file. This incident has been reported.", "error"),
          line(args.length ? `  (nice try: ${args.join(" ")})` : "  (nice try)", "muted"),
        ],
      },

      glitch: { group: "system", hidden: true, desc: "Trigger the decoupling alert", run: () => "GLITCH" },
    };

    return registry;
  }, [about, contact, skills, projects, education, navigate, onClose]);

  const names = useMemo(() => Object.keys(commands), [commands]);

  const welcome = useCallback(
    () => [
      line(BANNER, "banner"),
      line("HACKMACK-OS // interactive portfolio shell", "muted"),
      line(),
      line(
        `Connected as guest. ${(projects || []).length} projects and ${(skills || []).length} skills indexed.`,
        "success"
      ),
      line("Type 'help' for the command directory.", "info"),
      line(),
    ],
    [projects, skills]
  );

  // Greet once per session, tracked by a ref rather than by history.length.
  // Keying it off the length meant `clear` emptied the screen, the effect
  // immediately saw length 0 and reprinted the banner - so clear could never
  // actually clear.
  const greeted = useRef(false);
  useEffect(() => {
    if (!isOpen || greeted.current) return;
    greeted.current = true;
    setHistory(welcome());
  }, [isOpen, welcome]);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [isOpen]);

  // Stick to the bottom only while the user is already there. Unconditionally
  // jumping to scrollHeight on every history change meant scrolling up to
  // re-read earlier output was immediately undone by the next command.
  const pinnedRef = useRef(true);
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    pinnedRef.current = el.scrollHeight - el.scrollTop - el.clientHeight < 48;
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el && pinnedRef.current) el.scrollTop = el.scrollHeight;
  }, [history]);

  useEffect(() => () => clearTimeout(glitchTimer.current), []);

  // Only listen while open, and keep onClose out of the dep list so the
  // listener is not re-subscribed on every parent render.
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e) => { if (e.key === "Escape") onCloseRef.current(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setCommandLog((prev) => [...prev, trimmed]);
    setLogIndex(-1);

    const [head, ...args] = trimmed.split(/\s+/);
    const name = head.toLowerCase();
    const entry = commands[name];
    const prompt = line(`guest@hackmack-os:~$ ${trimmed}`, "command");
    const emit = (lines) => setHistory((prev) => [...prev, prompt, ...lines]);

    if (!entry) {
      const near = names
        .filter((n) => !commands[n].hidden)
        .map((n) => [n, distance(name, n)])
        .sort((a, b) => a[1] - b[1])
        .find(([, d]) => d <= 3);
      emit([
        line(`command not found: ${name}`, "error"),
        near ? line(`Did you mean '${near[0]}'?`, "muted") : line("Type 'help' for the directory.", "muted"),
      ]);
      return;
    }

    const result = entry.run(args);

    if (result === "CLEAR") { setHistory([]); return; }
    if (result === "EXIT") { setHistory((p) => [...p, prompt]); onClose(); return; }
    if (result === "GLITCH") {
      emit([line("[CRITICAL] CACHE EVICTION OVERFLOW SIGNAL SENT", "error")]);
      setGlitchActive(true);
      glitchTimer.current = setTimeout(() => {
        setGlitchActive(false);
        setHistory((p) => [...p, line("Interface self-healed. Calibration indices secure.", "success")]);
      }, 2500);
      return;
    }
    emit(result || []);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(inputValue);
      setInputValue("");
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const head = inputValue.trim();
      if (!head || head.includes(" ")) return;
      const matches = names.filter((n) => n.startsWith(head.toLowerCase()) && !commands[n].hidden);
      if (matches.length === 1) setInputValue(matches[0] + " ");
      else if (matches.length > 1)
        setHistory((p) => [...p, line(`guest@hackmack-os:~$ ${head}`, "command"), line(matches.join("   "), "muted")]);
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!commandLog.length) return;
      const next = logIndex < 0 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(next);
      setInputValue(commandLog[next]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIndex < 0) return;
      const next = logIndex + 1;
      if (next >= commandLog.length) { setLogIndex(-1); setInputValue(""); }
      else { setLogIndex(next); setInputValue(commandLog[next]); }
    }
  };

  if (!isOpen) return null;

  const styleFor = (type) =>
    ({
      command: "text-white font-bold",
      success: "text-green-400",
      info: "text-accent font-bold",
      error: "text-red-400 font-bold",
      muted: "text-text-muted/70 italic",
      banner: "text-accent font-bold leading-none",
    }[type] || "text-text-muted");

  return (
    <Overlay className="bg-black/90 backdrop-blur-md">
      {glitchActive && (
        <div className="absolute inset-0 bg-red-500/10 pointer-events-none z-30 animate-pulse flex items-center justify-center border-4 border-red-500">
          <div className="text-red-500 font-mono text-center space-y-2">
            <ShieldAlert className="w-16 h-16 mx-auto" />
            <h2 className="text-xl font-bold tracking-widest uppercase">CRITICAL SYSTEM DECOUPLING</h2>
            <p className="text-xs uppercase font-semibold">Decryption failure on cluster core // calibration mismatch</p>
          </div>
        </div>
      )}

      <motion.div
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="w-full max-w-4xl h-[85vh] bg-[#030712] border border-white/[0.08] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.015] select-none shrink-0">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              aria-label="Close console"
              className="w-2.5 h-2.5 rounded-full bg-[#ef4444] opacity-80 cursor-pointer"
            />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] opacity-80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] opacity-80" />
          </div>
          <div className="text-[10px] font-mono tracking-wider uppercase text-text-muted/70 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-accent" />
            <span>guest@hackmack-os: ~</span>
          </div>
          <button onClick={onClose} aria-label="Close console" className="text-text-muted hover:text-white cursor-pointer">
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        <div
          ref={containerRef}
          onScroll={handleScroll}
          onClick={() => inputRef.current?.focus()}
          className="min-h-0 flex-grow p-4 sm:p-6 overflow-y-auto overscroll-contain font-mono text-[11px] sm:text-xs text-text-muted/95 selection:bg-accent selection:text-bg-base"
        >
          {history.map((entry, i) => (
            <div
              key={i}
              className={`${styleFor(entry.type)} ${
                entry.type === "banner" ? "text-[9px] sm:text-[10px] overflow-x-auto no-scrollbar mb-2" : ""
              }`}
              style={{ whiteSpace: "pre" }}
            >
              {entry.text || " "}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/[0.08] bg-white/[0.01] flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] sm:text-xs text-accent font-bold select-none shrink-0">
            guest@hackmack-os:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            className="flex-grow min-w-0 bg-transparent border-none outline-none font-mono text-[11px] sm:text-xs text-white selection:bg-accent focus:ring-0"
            placeholder="help, whoami, projects, skills..."
          />
        </div>
      </motion.div>
    </Overlay>
  );
}

export default ConsoleCLI;
