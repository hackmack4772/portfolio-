import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiCss3, DiHtml5, DiPython, DiJava } from "react-icons/di";
import {
  SiNextdotjs, SiLaravel, SiPostgresql, SiTailwindcss, SiPostman, SiSlack, SiVercel,
  SiGithub, SiFirebase, SiUbuntu, SiDocker, SiTypescript, SiRedux, SiExpress, SiWebrtc,
  SiGraphql, SiApachekafka, SiRedis, SiMysql, SiKubernetes, SiNginx, SiSocketdotio,
  SiVite, SiBootstrap, SiJsonwebtokens, SiZoom, SiPhp,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import {
  Terminal, Shield, Layers, GitBranch, Workflow, Network, FlaskConical, Boxes, Server, Cloud,
} from "lucide-react";

/**
 * Skill name -> icon.
 *
 * The previous version matched with loose substrings in declaration order,
 * and `key.includes("js")` sat above the framework checks. "Node.js",
 * "Express.js" and "FeathersJS" therefore all rendered the JavaScript logo,
 * which is why the grid showed three identical JS tiles. Matching is exact
 * first, and only falls back to substrings that cannot collide.
 *
 * The register also contains things that simply have no logo - RBAC, JWT,
 * Microservices, CI/CD, LLD/HLD. Those used to land on the generic terminal
 * glyph, so most of the grid was identical `>_` tiles. They now get a lucide
 * icon that means something.
 */
const EXACT = {
  // Languages & runtimes
  "javascript": <DiJavascript1 />,
  "typescript": <SiTypescript />,
  "python": <DiPython />,
  "java": <DiJava />,
  "php": <SiPhp />,
  "html": <DiHtml5 />,
  "html5": <DiHtml5 />,
  "css": <DiCss3 />,
  "css3": <DiCss3 />,

  // Backend
  "node.js": <DiNodejs />,
  "nodejs": <DiNodejs />,
  "express.js": <SiExpress />,
  "express": <SiExpress />,
  "feathersjs": <SiExpress />,   // react-icons has no FeathersJS mark
  "graphql": <SiGraphql />,
  "rest apis": <Network />,
  "rest api": <Network />,
  "laravel": <SiLaravel />,
  "lumen": <SiLaravel />,
  "microservices": <Boxes />,
  "event-driven architecture": <Workflow />,

  // Frontend
  "react.js": <DiReact />,
  "react": <DiReact />,
  "react native": <DiReact />,
  "next.js": <SiNextdotjs />,
  "redux": <SiRedux />,
  "vite": <SiVite />,
  "tailwind css": <SiTailwindcss />,
  "tailwindcss": <SiTailwindcss />,
  "bootstrap": <SiBootstrap />,

  // Data & messaging
  "postgresql": <SiPostgresql />,
  "mongodb": <DiMongodb />,
  "mysql": <SiMysql />,
  "redis": <SiRedis />,
  "apache kafka": <SiApachekafka />,
  "kafka": <SiApachekafka />,
  "camunda bpm": <Workflow />,
  "firebase": <SiFirebase />,

  // Security & real-time
  "rbac": <Shield />,
  "jwt": <SiJsonwebtokens />,
  "webrtc": <SiWebrtc />,
  "socket.io": <SiSocketdotio />,
  "zoom sdk": <SiZoom />,
  "nginx rtmp-hls": <SiNginx />,
  "nginx": <SiNginx />,

  // DevOps & practice
  "docker": <SiDocker />,
  "ci-cd": <GitBranch />,
  "ci/cd": <GitBranch />,
  "aws": <FaAws />,
  "kubernetes": <SiKubernetes />,
  "git": <DiGit />,
  "github": <SiGithub />,
  "lld - hld": <Layers />,
  "lld / hld": <Layers />,
  "testing & uat": <FlaskConical />,
  "vercel": <SiVercel />,
  "ubuntu": <SiUbuntu />,
  "postman": <SiPostman />,
  "slack": <SiSlack />,
  "vs code": <VscCode />,
  "c++": <CgCPlusPlus />,
};

const normalise = (s) =>
  String(s || "")
    .toLowerCase()
    .trim()
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ");

export const getSkillIcon = (iconName, skillName) => {
  for (const raw of [iconName, skillName]) {
    const key = normalise(raw);
    if (!key) continue;
    if (EXACT[key]) return EXACT[key];
    // Try a couple of harmless normalisations before giving up.
    const alt = key.replace(/\//g, "-").replace(/\s/g, "");
    if (EXACT[alt]) return EXACT[alt];
  }

  // Ordered longest-first so "react native" cannot be shadowed by "react",
  // and no token is short enough to collide the way "js" and "ts" did.
  const key = normalise(skillName || iconName);
  const LOOSE = [
    ["kubernetes", <SiKubernetes />], ["postgres", <SiPostgresql />], ["typescript", <SiTypescript />],
    ["javascript", <DiJavascript1 />], ["tailwind", <SiTailwindcss />], ["bootstrap", <SiBootstrap />],
    ["socket", <SiSocketdotio />], ["graphql", <SiGraphql />], ["kafka", <SiApachekafka />],
    ["mongo", <DiMongodb />], ["laravel", <SiLaravel />], ["express", <SiExpress />],
    ["docker", <SiDocker />], ["redux", <SiRedux />], ["redis", <SiRedis />],
    ["nginx", <SiNginx />], ["webrtc", <SiWebrtc />], ["firebase", <SiFirebase />],
    ["react", <DiReact />], ["mysql", <SiMysql />], ["node", <DiNodejs />],
    ["next", <SiNextdotjs />], ["vite", <SiVite />], ["java", <DiJava />],
    ["python", <DiPython />], ["github", <SiGithub />], ["git", <DiGit />],
    ["aws", <FaAws />], ["jwt", <SiJsonwebtokens />], ["zoom", <SiZoom />],
    ["cloud", <Cloud />], ["server", <Server />], ["api", <Network />],
    ["test", <FlaskConical />], ["security", <Shield />], ["architecture", <Layers />],
  ];
  for (const [token, icon] of LOOSE) if (key.includes(token)) return icon;

  return <Terminal />;
};

/**
 * A hover tint per technology, so the grid is not one flat colour.
 *
 * These have to be complete literal strings. Tailwind finds classes by
 * scanning source text, so an interpolated `hover:border-${colour}` is
 * invisible to it and the utility is never generated.
 */
export const getSkillGlowClass = (name) => {
  const key = normalise(name);
  const TINTS = [
    ["typescript", "hover:border-sky-500 hover:text-sky-500"],
    ["javascript", "hover:border-yellow-400 hover:text-yellow-400"],
    ["react", "hover:border-sky-400 hover:text-sky-400"],
    ["node", "hover:border-green-500 hover:text-green-500"],
    ["express", "hover:border-neutral-300 hover:text-neutral-300"],
    ["laravel", "hover:border-red-500 hover:text-red-500"],
    ["php", "hover:border-indigo-400 hover:text-indigo-400"],
    ["graphql", "hover:border-pink-500 hover:text-pink-500"],
    ["postgres", "hover:border-blue-500 hover:text-blue-500"],
    ["mysql", "hover:border-sky-600 hover:text-sky-600"],
    ["mongo", "hover:border-green-600 hover:text-green-600"],
    ["redis", "hover:border-red-600 hover:text-red-600"],
    ["kafka", "hover:border-neutral-200 hover:text-neutral-200"],
    ["docker", "hover:border-blue-400 hover:text-blue-400"],
    ["kubernetes", "hover:border-blue-500 hover:text-blue-500"],
    ["aws", "hover:border-orange-400 hover:text-orange-400"],
    ["tailwind", "hover:border-cyan-400 hover:text-cyan-400"],
    ["bootstrap", "hover:border-purple-500 hover:text-purple-500"],
    ["redux", "hover:border-purple-400 hover:text-purple-400"],
    ["vite", "hover:border-yellow-300 hover:text-yellow-300"],
    ["nginx", "hover:border-green-500 hover:text-green-500"],
    ["socket", "hover:border-neutral-300 hover:text-neutral-300"],
    ["webrtc", "hover:border-amber-400 hover:text-amber-400"],
    ["firebase", "hover:border-yellow-500 hover:text-yellow-500"],
    ["git", "hover:border-orange-500 hover:text-orange-500"],
    ["jwt", "hover:border-fuchsia-400 hover:text-fuchsia-400"],
    ["zoom", "hover:border-blue-400 hover:text-blue-400"],
    ["next", "hover:border-white hover:text-text-base"],
    ["vercel", "hover:border-white hover:text-text-base"],
  ];
  for (const [token, cls] of TINTS) if (key.includes(token)) return cls;
  return "hover:border-accent/60 hover:text-accent";
};
