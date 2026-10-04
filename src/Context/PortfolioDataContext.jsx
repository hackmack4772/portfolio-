import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import homeBgHacker from "../Assets/home_bg_hacker.png";
import { makeTextDynamic } from "../utils/experience";
import { readCache, writeCache, clearCache, pruneOldVersions } from "../utils/portfolioCache";
import { clearApiCache } from "../utils/apiCache";

const PortfolioDataContext = createContext();

const fallbackAbout = {
  name: "Aamir Saleem Lone",
  title: "Software Engineer",
  tagline: "Software Engineer · Backend & Full-Stack · Node.js / React / TypeScript",
  description: makeTextDynamic("Software Engineer with 3+ years building enterprise-scale web applications and distributed systems. Currently engineering a loyalty platform at Comviva serving 1M+ users across 15-20 microservices (Node.js, TypeScript, GraphQL, PostgreSQL, Kafka, Redis, Camunda BPM). Designed enterprise RBAC covering ~90 APIs with automated authorization validation; modernized a legacy frontend to React 19 + Vite. Previously shipped CRM, healthcare, survey, and real-time streaming products end to end."),
  photoURL: homeBgHacker,
  skills: ["Node.js", "React.js", "TypeScript", "GraphQL", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "AWS"],
  experience: [
    {
      company: "Comviva",
      position: "Software Engineer",
      period: "Oct 2025 - Present",
      location: "Bengaluru",
      description: "Enterprise loyalty platform serving 1M+ users across 15-20 microservices. Designed enterprise RBAC across ~90 APIs with automated authorization validation, engineer campaigns, tiers, milestones and Kafka-driven notification personalization, and modernized the enterprise PWA to React 19 + Vite."
    },
    {
      company: "Shine Dezign Infonet",
      position: "Full Stack Developer",
      period: "Sep 2022 - Sep 2025",
      location: "Mohali",
      description: "CRM, healthcare, education, survey and real-time streaming products. Production REST APIs and microservices on Node.js, Express, Laravel and Lumen over MongoDB and MySQL, plus Zoom SDK meetings and an Nginx RTMP to HLS streaming platform."
    }
  ],
  education: [
    {
      institution: "Swami Vivekanand Institute of Engineering & Technology",
      degree: "Master of Computer Applications (MCA)",
      year: "2023 - 2025",
      score: "CGPA: 7.89/10"
    },
    {
      institution: "RIMT University",
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2019 - 2022",
      score: "CGPA: 9.08/10"
    }
  ]
};

const fallbackContact = {
  email: "loneaamir6@gmail.com",
  phone: "+91 95965 81274",
  address: "Bengaluru, India",
  socialLinks: {
    github: "https://github.com/hackmack4772",
    linkedin: "https://www.linkedin.com/in/aamir-saleem-lone/",
    twitter: "https://twitter.com/hackmack4772",
    instagram: "https://www.instagram.com/aamir-saleem-lone"
  },
  resumeURL: ""
};

const fallbackHome = {
  name: "Aamir Saleem Lone",
  description: "Software Engineer building enterprise-scale web applications and distributed systems - loyalty platforms, real-time streaming and high-throughput APIs.",
  tagline: "Software Engineer · Backend & Full-Stack · Node.js / React / TypeScript",
  socialLinks: fallbackContact.socialLinks,
  typewriterStrings: [
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Developer",
    "Node.js / TypeScript",
  ]
};

const fallbackHome2 = {
  heading: "My Journey",
  introduction: makeTextDynamic("I have spent the last few years developing software that is robust, scalable, and intuitive. From building healthcare portals to high-throughput rewards systems, my engineering path has centered on backend performance and frontend user engagement."),
  skills: "Node.js, React, Express, MySQL, MongoDB, Redis, Docker, Git, Laravel",
  hobbies: "Coding, exploring system architectures, cybersecurity",
  imageUrl: ""
};

// Hard ceiling on how long the boot screen may block the site.
const BOOT_SCREEN_MAX_MS = 6000;

const defaultBootSteps = [
  { message: "INITIALIZING APIS & SECURE CHANNELS", status: "PENDING" },
  { message: "ESTABLISHING CONNECTIVITY TO DATA CORES", status: "PENDING" },
  { message: "DOWNLOADING DESIGN TOKENS & SYSTEM THEME", status: "PENDING" },
  { message: "RESOLVING BIOGRAPHICAL ENGINE PROFILES", status: "PENDING" },
  { message: "INDEXING TECHNICAL SKILLS REGISTER", status: "PENDING" },
  { message: "LINKING PROJECT DIRECTORIES", status: "PENDING" },
  { message: "SYNCING ACADEMIC RECORDS & CV", status: "PENDING" },
  { message: "VERIFYING INTEGRITY // BOOT COMPLETED", status: "PENDING" },
];

export const PortfolioDataProvider = ({ children }) => {
  const [data, setData] = useState({
    about: fallbackAbout,
    contact: fallbackContact,
    homeData: fallbackHome,
    home2: fallbackHome2,
    skills: [],
    education: [],
    projects: [],
    colors: null
  });

  const [loading, setLoading] = useState(true);
  const [bootLogs, setBootLogs] = useState([]);
  const [bootProgress, setBootProgress] = useState(0);
  const [error, setError] = useState(null);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const dataFetchedRef = useRef(false);

  const refreshData = () => {
    dataFetchedRef.current = false;
    clearCache();                       // an explicit refresh must hit the network
    clearApiCache();
    setRefetchTrigger(prev => prev + 1);
  };

  useEffect(() => {
    let active = true;
    pruneOldVersions();

    // Cache hit: render from disk immediately. The boot screen is skipped
    // entirely, because there is nothing to wait for.
    const cached = refetchTrigger === 0 ? readCache() : null;
    if (cached) {
      setData(cached.data);
      dataFetchedRef.current = true;
      setLoading(false);

      // Fresh enough that re-reading eight documents would be pure cost.
      if (cached.fresh) return () => { active = false; };
    }

    const revalidating = Boolean(cached);
    if (!revalidating) {
      setLoading(true);
      setBootProgress(0);
      setBootLogs([]);
    }

    // Hard ceiling on the boot screen. Every section already renders from the
    // fallback data this provider starts with, and the live values swap in as
    // soon as Firestore answers, so there is never a reason to sit here for
    // tens of seconds on a bad connection.
    const watchdog = revalidating
      ? null
      : setTimeout(() => { if (active) setLoading(false); }, BOOT_SCREEN_MAX_MS);

    // Step-by-step preloader simulator coordinator
    const logsToPrint = [];
    const currentSteps = defaultBootSteps.map(step => ({ ...step }));
    
    // Function to add a boot log cleanly
    const addLog = (index, status, textOverride = null) => {
      if (!active) return;
      currentSteps[index].status = status;
      if (textOverride) currentSteps[index].message = textOverride;
      
      // Map to visual terminal text lines
      const outputLines = currentSteps.slice(0, index + 1).map(step => {
        const prefix = step.status === "OK" 
          ? "[  OK  ]" 
          : step.status === "FAIL" 
          ? "[ FAIL ]" 
          : "[  ..  ]";
        return `${prefix} ${step.message}`;
      });
      
      if (revalidating) return;        // nothing is on screen to narrate
      setBootLogs(outputLines);
      setBootProgress(Math.floor(((index + 1) / currentSteps.length) * 100));
    };

    // Firebase fetching core promise.
    //
    // These eight reads are completely independent - none of them uses another's
    // result - but they used to run as sequential awaits, so the boot screen paid
    // eight full round trips end to end. Measured against this project's own
    // Firestore on a warm desktop connection: 2944 ms sequential vs 420 ms in
    // parallel. On a phone each round trip is several times worse again.
    const settle = (promise, fallback, label) =>
      promise.catch((e) => {
        console.warn(`Failed fetching ${label}:`, e);
        return fallback;
      });

    const fetchCoreData = async () => {
      const [colors, about, contact, homeData, home2, skills, projects, education] =
        await Promise.all([
          settle(
            getDoc(doc(db, "settings", "colors")).then(d => (d.exists() ? d.data() : null)),
            null,
            "settings/colors"
          ),
          settle(
            getDoc(doc(db, "content", "about")).then(d => (d.exists() ? d.data() : fallbackAbout)),
            fallbackAbout,
            "content/about"
          ),
          settle(
            getDoc(doc(db, "content", "contact")).then(d => (d.exists() ? d.data() : fallbackContact)),
            fallbackContact,
            "content/contact"
          ),
          settle(
            getDoc(doc(db, "home", "homeData")).then(d => (d.exists() ? d.data() : fallbackHome)),
            fallbackHome,
            "home/homeData"
          ),
          settle(
            getDoc(doc(db, "home", "home2")).then(d => (d.exists() ? d.data() : fallbackHome2)),
            fallbackHome2,
            "home/home2"
          ),
          settle(
            getDocs(collection(db, "skills")).then(snap =>
              snap.docs
                .map(d => ({ id: d.id, ...d.data() }))
                .sort((a, b) => (a.order || 0) - (b.order || 0))
            ),
            [],
            "skills collection"
          ),
          settle(
            getDocs(collection(doc(db, "hackmack", "user_projects"), "projectsData")).then(snap =>
              snap.docs.map(d => ({ id: d.id, ...d.data() }))
            ),
            [],
            "projectsData collection"
          ),
          settle(
            getDocs(query(collection(db, "educationData"), orderBy("created", "desc"))).then(snap =>
              snap.docs.map(d => ({ id: d.id, ...d.data() }))
            ),
            [],
            "educationData collection"
          ),
        ]);

      return { colors, about, contact, homeData, home2, skills, projects, education };
    };

    const runBootSequence = async () => {
      // The boot log is decoration. It is filled in from the real progress of
      // the fetch instead of from a chain of setTimeouts - those added 1470 ms
      // (1170 ms between log lines plus 300 ms at the end) to every single
      // page load, on the critical path, for no functional reason.
      addLog(0, "RUNNING");

      let fetchResults;
      try {
        fetchResults = await fetchCoreData();
      } catch (e) {
        console.error("Critical boot failure:", e);
        if (active) setError(e);
        fetchResults = {
          about: fallbackAbout,
          contact: fallbackContact,
          homeData: fallbackHome,
          home2: fallbackHome2,
          skills: [],
          education: [],
          projects: [],
          colors: null
        };
      }

      if (!active) return;

      addLog(0, "OK");
      addLog(1, "OK");
      addLog(2, "OK", fetchResults.colors ? "DESIGN SYSTEM COLORS APPLIED" : "DEFAULT TOKENS INJECTED");
      addLog(3, "OK");
      addLog(4, "OK");
      addLog(5, "OK", `INDEXED ${fetchResults.skills.length} TECHNICAL CAPABILITIES`);
      addLog(6, "OK", `CONNECTED PROJECT ARCHIVE (${fetchResults.projects.length} RECORDS)`);
      addLog(7, "OK");

      // Apply dynamic experience formatting to loaded values
      if (fetchResults.about && fetchResults.about.description) {
        fetchResults.about.description = makeTextDynamic(fetchResults.about.description);
      }
      if (fetchResults.home2 && fetchResults.home2.introduction) {
        fetchResults.home2.introduction = makeTextDynamic(fetchResults.home2.introduction);
      }

      writeCache(fetchResults);
      setData(fetchResults);
      dataFetchedRef.current = true;
      clearTimeout(watchdog);
      setLoading(false);
    };

    runBootSequence();

    return () => {
      active = false;
      clearTimeout(watchdog);
    };
  }, [refetchTrigger]);

  return (
    <PortfolioDataContext.Provider value={{ ...data, loading, bootLogs, bootProgress, error, refreshData }}>
      {children}
    </PortfolioDataContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioDataProvider");
  }
  return context;
};
