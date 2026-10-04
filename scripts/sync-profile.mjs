/**
 * Pushes the canonical profile data into Firestore.
 *
 *   node scripts/sync-profile.mjs          # dry run, prints what would change
 *   node scripts/sync-profile.mjs --write  # actually writes
 *
 * Source of truth is the CV text below. Nothing here is inferred: every
 * value came from the CV, from the repos under C:\sourcecode, or from what
 * was already in Firestore. Where a judgement call was unavoidable it is
 * marked REVIEW.
 */
import { initializeApp } from "firebase/app";
import {
  getFirestore, doc, getDoc, setDoc, getDocs, collection, deleteDoc,
} from "firebase/firestore/lite";

const WRITE = process.argv.includes("--write");

const app = initializeApp({
  apiKey: "AIzaSyBtm9WpPn-WT0IFVKOW6Xs-dcX474oW16o",
  authDomain: "hackmack4772.firebaseapp.com",
  projectId: "hackmack4772",
  storageBucket: "hackmack4772.firebasestorage.app",
  messagingSenderId: "38931846023",
  appId: "1:38931846023:web:2ed96aa0b1912c0fa6b922",
});
const db = getFirestore(app);

/* ------------------------------------------------------------------ data */

const SOCIAL = {
  github: "https://github.com/hackmack4772",
  linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
  twitter: "https://twitter.com/hackmack4772",
  instagram: "https://www.instagram.com/aamir-saleem-lone",
};

const SUMMARY =
  "Software Engineer with 3+ years building enterprise-scale web applications and " +
  "distributed systems. Currently engineering a loyalty platform at Comviva serving 1M+ " +
  "users across 15-20 microservices (Node.js, TypeScript, GraphQL, PostgreSQL, Kafka, " +
  "Redis, Camunda BPM). Designed enterprise RBAC covering ~90 APIs with automated " +
  "authorization validation; modernized a legacy frontend to React 19 + Vite. Previously " +
  "shipped CRM, healthcare, survey, and real-time streaming products end to end.";

const EXPERIENCE = [
  {
    company: "Comviva",
    position: "Software Engineer",
    period: "Oct 2025 - Present",
    location: "Bengaluru",
    description:
      "Enterprise loyalty platform serving 1M+ users across 15-20 microservices. Engineer " +
      "campaign import/export, product catalogue, tiers, milestones and Kafka-driven " +
      "notification personalization; currently implementing the referral system (Node.js, " +
      "FeathersJS, GraphQL, PostgreSQL, Redis, Camunda BPM). Designed complete enterprise " +
      "RBAC covering GET/POST/PUT/DELETE across ~90 APIs on interdependent microservices, " +
      "closing unprotected-endpoint gaps, and built an automation script validating " +
      "authorization across all ~90 endpoints from token, email and club inputs - sharply " +
      "cutting manual verification, recognized by the Senior Technical Lead. Modernized the " +
      "enterprise PWA from Create React App to React 19 + Vite with TypeScript. Design REST " +
      "APIs and LLDs, contribute to HLD, and own production support: hotfixes, UAT, SQL " +
      "optimization, Kafka and Redis debugging.",
  },
  {
    company: "Shine Dezign Infonet",
    position: "Full Stack Developer",
    period: "Sep 2022 - Sep 2025",
    location: "Mohali",
    description:
      "CRM, healthcare, education, survey and real-time streaming products. Designed and " +
      "maintained production REST APIs and microservices serving thousands of users " +
      "(Node.js, Express.js, Laravel, Lumen; MongoDB, MySQL). Built real-time features: " +
      "Zoom SDK meetings with language interpretation and grid view, and an Nginx RTMP to " +
      "HLS live streaming platform with React playback. Developed CRM modules (content " +
      "libraries, template builder, email tracking, smart lists) and a dynamic Survey " +
      "Builder with conditional logic and live analytics. Deployed to AWS with Docker and " +
      "CI/CD; wrote unit and integration tests that reduced production bugs; introduced " +
      "TypeScript and Kubernetes to the team.",
  },
];

const EDUCATION = [
  {
    institution: "Swami Vivekanand Institute of Engineering & Technology",
    degree: "Master of Computer Applications (MCA)",
    year: "2023 - 2025",
    score: "CGPA: 7.89/10",
    note: "Completed while working full-time",
  },
  {
    institution: "RIMT University",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2019 - 2022",
    score: "CGPA: 9.08/10",
    note: "Certificate of Appreciation (2022)",
  },
];

// Grouped exactly as the CV groups them.
const SKILL_GROUPS = {
  Backend: ["Node.js", "Express.js", "FeathersJS", "GraphQL", "REST APIs", "Laravel", "Lumen", "Microservices", "Event-Driven Architecture"],
  Frontend: ["React.js", "TypeScript", "Redux", "Vite", "Tailwind CSS", "Bootstrap"],
  "Data & Messaging": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Apache Kafka", "Camunda BPM", "Firebase"],
  "Security & Real-Time": ["RBAC", "JWT", "WebRTC", "Socket.IO", "Zoom SDK", "Nginx RTMP/HLS"],
  "DevOps & Practice": ["Docker", "CI/CD", "AWS", "Kubernetes", "Git", "LLD / HLD", "Testing & UAT"],
};

// Stacks for the Syki projects were read from the actual repos under
// C:\sourcecode, not assumed: syki-website (react, vite, tailwindcss,
// axios, react-router-dom), confrets_app (package name "syki": react-native,
// expo, zustand, axios), confrets_backend ("confessions_backend": express,
// mongoose, jsonwebtoken).
const PROJECTS = [
  {
    id: "Enterprise Loyalty Platform",
    title: "Enterprise Loyalty Platform",
    category: "backend",
    description:
      "Campaigns, referrals, rewards, tiers and personalized notifications for 1M+ users " +
      "across 15-20 microservices. Includes enterprise RBAC across ~90 APIs and an " +
      "automated authorization-validation harness.",
    technologies: ["Node.js", "FeathersJS", "GraphQL", "PostgreSQL", "Apache Kafka", "Redis", "Camunda BPM"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "Syki Website",
    title: "Syki - Marketing Site & Admin Console",
    category: "web",
    description:
      "Public marketing site and internal moderation dashboard for Syki, an anonymous " +
      "social app, built as one of two developers. The site opens shared confessions " +
      "straight from a link and routes visitors into the app or the right store. The " +
      "admin console gives the team no-code content moderation, usage analytics, " +
      "community management and instant feature flags - no release needed to change " +
      "behaviour.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "Sykii App",
    title: "Sykii - Anonymous Social Networking App",
    category: "mobile",
    description:
      "Cross-platform app letting users send anonymous confessions to people in their " +
      "contacts. Built the React Native client and the Node.js backend: core flows, " +
      "authentication, contact discovery, profiles and the REST API over MongoDB.",
    technologies: ["React Native", "Expo", "Zustand", "Node.js", "Express.js", "MongoDB", "REST API"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "Rive Streaming Platform",
    title: "Rive Streaming Platform",
    category: "web",
    description: "RTMP ingestion converted to HLS on Nginx, with React playback.",
    technologies: ["Nginx", "RTMP", "HLS", "React"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "OneSource Healthcare Platform",
    title: "OneSource Healthcare Platform",
    category: "web",
    description:
      "Doctor portal covering symposiums, surveys, expert ratings and JWT authentication.",
    technologies: ["Laravel", "React", "Redux", "MongoDB", "JWT"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "Zoom Meeting Tool",
    title: "Zoom Meeting Tool",
    category: "web",
    description:
      "Dynamic meeting lifecycle with language interpretation and grid view.",
    technologies: ["Zoom SDK", "Node.js", "React"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "Survey Builder",
    title: "Survey Builder",
    category: "web",
    description:
      "Dynamic survey builder with drag-and-drop composition, conditional logic and live analytics.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
  {
    id: "CRM Platform",
    title: "CRM Platform",
    category: "web",
    description:
      "CRM modules: content libraries, template builder, email tracking and smart lists.",
    technologies: ["Node.js", "Express.js", "Laravel", "MySQL", "React"],
    githubUrl: "", demoUrl: "", imageUrl: "",
  },
];

/* ------------------------------------------------------------------ sync */

// Firestore document ids cannot contain "/" - it is the path separator -
// so names like "Nginx RTMP/HLS" and "LLD / HLD" need a slug. The display
// name is kept in the `name` field.
const slug = (s) => s.replace(/[\/\.#$\[\]]+/g, "-").replace(/\s+/g, " ").trim();

const log = [];
const plan = (what, detail) => log.push(`  ${WRITE ? "WROTE" : "would write"}  ${what}${detail ? "  " + detail : ""}`);

const existingAbout = (await getDoc(doc(db, "content", "about"))).data() || {};
const existingContact = (await getDoc(doc(db, "content", "contact"))).data() || {};

const about = {
  name: "Aamir Saleem Lone",
  title: "Software Engineer",
  tagline: "Software Engineer · Backend & Full-Stack · Node.js / React / TypeScript",
  description: SUMMARY,
  photoURL: existingAbout.photoURL || "",   // preserved
  skills: ["Node.js", "React.js", "TypeScript", "GraphQL", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "AWS"],
  experience: EXPERIENCE,
  education: EDUCATION.map(({ note, ...e }) => e),
};

const contact = {
  email: "loneaamir6@gmail.com",
  phone: "+91 95965 81274",
  address: "Bengaluru, India",
  socialLinks: SOCIAL,
  resumeURL: existingContact.resumeURL || "",  // preserved
};

const homeData = {
  name: "Aamir Saleem Lone",
  description:
    "Software Engineer building enterprise-scale web applications and distributed " +
    "systems - loyalty platforms, real-time streaming and high-throughput APIs.",
  tagline: "Software Engineer · Backend & Full-Stack · Node.js / React / TypeScript",
  socialLinks: SOCIAL,
  typewriterStrings: ["Software Engineer", "Backend Engineer", "Full-Stack Developer", "Node.js / TypeScript"],
};

const home2 = {
  heading: "My Journey",
  introduction:
    "I build backend systems that carry real load. At Comviva I work on an enterprise " +
    "loyalty platform serving over a million users across 15-20 microservices, where I " +
    "designed the RBAC layer covering ~90 APIs and the automation that validates it. " +
    "Before that I spent three years at Shine Dezign Infonet shipping CRM, healthcare, " +
    "survey and real-time streaming products end to end.",
  skills: "Node.js, TypeScript, React, GraphQL, PostgreSQL, Kafka, Redis, Docker, AWS",
  hobbies: "System architecture, performance tuning, cybersecurity",
  // Preserved, never reset. An earlier run of this script wrote "" here and
  // the journey card rendered IMAGE_NULL until it was noticed.
  imageUrl: (await getDoc(doc(db, "home", "home2"))).data()?.imageUrl || "/avatar_hacker.png",
};

if (WRITE) {
  await setDoc(doc(db, "content", "about"), about);
  await setDoc(doc(db, "content", "contact"), contact);
  await setDoc(doc(db, "home", "homeData"), homeData);
  await setDoc(doc(db, "home", "home2"), home2);
}
plan("content/about", `${EXPERIENCE.length} roles, ${EDUCATION.length} degrees`);
plan("content/contact", "address -> Bengaluru, India");
plan("home/homeData", `${homeData.typewriterStrings.length} typewriter strings`);
plan("home/home2", "");

// Skills: keep any proficiency already set for a matching name, so manual
// tuning in /admin is not wiped out. New skills get 80 - REVIEW and adjust.
const prevSkills = (await getDocs(collection(db, "skills"))).docs;
const prevProf = Object.fromEntries(prevSkills.map((d) => [String(d.data().name).toLowerCase(), d.data().proficiency]));
let order = 0, reused = 0;
for (const [category, names] of Object.entries(SKILL_GROUPS)) {
  for (const name of names) {
    const proficiency = prevProf[name.toLowerCase()] ?? 80;
    if (prevProf[name.toLowerCase()] !== undefined) reused++;
    if (WRITE) await setDoc(doc(collection(db, "skills"), slug(name)), { name, category, proficiency, icon: "", order });
    order++;
  }
}
if (WRITE) {
  // Drop stale skill docs that are no longer in the CV grouping.
  const keep = new Set(Object.values(SKILL_GROUPS).flat().map(slug));
  for (const d of prevSkills) if (!keep.has(d.id)) await deleteDoc(doc(collection(db, "skills"), d.id));
}
plan("skills", `${order} docs (${reused} proficiencies preserved, rest default 80 - REVIEW)`);

// Projects: canonical schema. The four legacy docs used ghLink/demoLink/
// imgPath and had placeholder values ("#", "path-to-your-image.jpg").
const projCol = collection(doc(db, "hackmack", "user_projects"), "projectsData");
const prevProjects = (await getDocs(projCol)).docs;
if (WRITE) {
  for (const p of PROJECTS) { const { id, ...rest } = p; await setDoc(doc(projCol, slug(id)), rest); }
  const keep = new Set(PROJECTS.map((p) => slug(p.id)));
  for (const d of prevProjects) if (!keep.has(d.id)) await deleteDoc(doc(projCol, d.id));
}
plan("projectsData", `${PROJECTS.length} docs in canonical schema (githubUrl/demoUrl/technologies/category)`);

console.log(WRITE ? "\nSYNC APPLIED\n" : "\nDRY RUN - nothing written. Re-run with --write\n");
log.forEach((l) => console.log(l));
console.log(`\n  previously: ${prevSkills.length} skills, ${prevProjects.length} projects`);
console.log(`  now:        ${order} skills, ${PROJECTS.length} projects`);
process.exit(0);
