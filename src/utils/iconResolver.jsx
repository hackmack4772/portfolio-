import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { 
   DiJavascript1, 
   DiReact, 
   DiNodejs, 
   DiMongodb, 
   DiGit, 
   DiCss3, 
   DiHtml5,
   DiPython,
   DiJava
} from "react-icons/di";
import { 
   SiNextdotjs, 
   SiLaravel, 
   SiPostgresql, 
   SiTailwindcss, 
   SiPostman, 
   SiSlack, 
   SiVercel, 
   SiGithub, 
   SiFirebase, 
   SiUbuntu,
   SiDocker,
   SiTypescript,
   SiRedux,
   SiAntdesign,
   SiExpress,
   SiWebrtc
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Terminal } from "lucide-react";

export const getSkillIcon = (iconName, skillName) => {
  const key = (iconName || skillName || "").toLowerCase().trim();
  
  // React / Native
  if (key.includes("react")) return <DiReact />;
  
  // Languages
  if (key.includes("javascript") || key.includes("js") || key === "di-javascript1") return <DiJavascript1 />;
  if (key.includes("typescript") || key.includes("ts")) return <SiTypescript />;
  if (key.includes("python")) return <DiPython />;
  if (key.includes("java") && !key.includes("script")) return <DiJava />;
  if (key.includes("c++") || key.includes("cpp") || key.includes("cplusplus")) return <CgCPlusPlus />;
  if (key.includes("html") || key === "sihtml5") return <DiHtml5 />;
  if (key.includes("css") || key === "dicss3") return <DiCss3 />;

  // Frameworks / Libraries
  if (key.includes("next")) return <SiNextdotjs />;
  if (key.includes("node") || key === "dinodejs") return <DiNodejs />;
  if (key.includes("express")) return <SiExpress />;
  if (key.includes("laravel")) return <SiLaravel />;
  if (key.includes("tailwind")) return <SiTailwindcss />;
  if (key.includes("redux")) return <SiRedux />;
  if (key.includes("ant") || key.includes("design")) return <SiAntdesign />;
  if (key.includes("webrtc")) return <SiWebrtc />;

  // Databases
  if (key.includes("postgres")) return <SiPostgresql />;
  if (key.includes("mongo") || key === "dimongodb") return <DiMongodb />;
  if (key.includes("firebase")) return <SiFirebase />;

  // DevOps & Tools
  if (key.includes("docker")) return <SiDocker />;
  if (key.includes("git") && !key.includes("github")) return <DiGit />;
  if (key.includes("github")) return <SiGithub />;
  if (key.includes("vercel")) return <SiVercel />;
  if (key.includes("ubuntu")) return <SiUbuntu />;
  if (key.includes("postman")) return <SiPostman />;
  if (key.includes("slack")) return <SiSlack />;
  if (key.includes("code") || key.includes("vs") || key === "vsccode") return <VscCode />;
  
  // Fallback
  return <Terminal className="w-full h-full" />;
};

export const getSkillGlowClass = (name) => {
  const key = (name || "").toLowerCase().trim();
  if (key.includes("react")) return "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-400 hover:text-sky-400";
  if (key.includes("javascript") || key === "js") return "hover:shadow-[0_0_20px_rgba(253,224,71,0.25)] hover:border-yellow-400 hover:text-yellow-400";
  if (key.includes("typescript") || key === "ts") return "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500 hover:text-sky-500";
  if (key.includes("node")) return "hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:border-green-500 hover:text-green-500";
  if (key.includes("laravel")) return "hover:shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-500 hover:text-red-500";
  if (key.includes("next")) return "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white hover:text-white";
  if (key.includes("tailwind")) return "hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:text-cyan-400";
  if (key.includes("postgres")) return "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-500 hover:text-blue-500";
  if (key.includes("mongo")) return "hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:border-green-600 hover:text-green-600";
  if (key.includes("c++") || key === "cpp" || key === "cplusplus") return "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-600 hover:text-blue-600";
  if (key.includes("git") && !key.includes("github")) return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500 hover:text-orange-500";
  if (key.includes("html")) return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-600 hover:text-orange-600";
  if (key.includes("css")) return "hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-400 hover:text-blue-400";
  
  // Tools
  if (key.includes("code") || key.includes("vs")) return "hover:shadow-[0_0_20px_rgba(14,165,233,0.25)] hover:border-sky-500 hover:text-sky-500";
  if (key.includes("postman")) return "hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:border-orange-500 hover:text-orange-500";
  if (key.includes("slack")) return "hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500 hover:text-purple-500";
  if (key.includes("vercel")) return "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white hover:text-white";
  if (key.includes("github")) return "hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:border-white hover:text-white";
  if (key.includes("firebase")) return "hover:shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:border-yellow-500 hover:text-yellow-500";
  if (key.includes("ubuntu")) return "hover:shadow-[0_0_20px_rgba(234,88,12,0.25)] hover:border-orange-600 hover:text-orange-600";
  
  return "hover:shadow-[0_0_15px_rgba(143,16,183,0.2)] hover:border-primary hover:text-primary";
};
