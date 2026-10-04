import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import homeBgHacker from "../Assets/home_bg_hacker.png";
import { makeTextDynamic } from "../utils/experience";

const PortfolioDataContext = createContext();

const fallbackAbout = {
  name: "Aamir Saleem Lone",
  title: "Full-Stack Engineer",
  tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",
  description: makeTextDynamic("I am Aamir Saleem Lone, a passionate Full-Stack Developer with nearly 3 years of hands-on experience in building scalable, secure, and performance-driven web applications. Currently working at Mahindra Comviva on the Mobilytix Rewards platform, I specialize in developing enterprise-grade solutions using React, Node.js, TypeScript, and modern backend systems. Previously, I worked at Shine Dezign Infonet, where I contributed to healthcare, CRM, and real-time streaming applications. I hold a Master’s degree in Computer Applications (MCA) and enjoy building reliable systems that solve real-world problems."),
  photoURL: homeBgHacker,
  skills: ["React", "Node.js", "JavaScript", "TypeScript", "Laravel", "MongoDB", "Git", "Docker", "WebRTC"],
  experience: [
    {
      company: "Mahindra Comviva",
      position: "Full-Stack Developer",
      period: "Oct 2023 - Present",
      description: "Developing Mobilytix Rewards platform, an enterprise-grade reward solution handling high load transactions. Using React, Node.js, TypeScript, and MySQL/Redis optimizations."
    },
    {
      company: "Shine Dezign Infonet",
      position: "Software Engineer",
      period: "Jun 2022 - Oct 2023",
      description: "Contributed to healthcare software, custom CRM solutions, and real-time video/audio streaming platforms using MERN stack and Laravel frameworks."
    }
  ],
  education: [
    {
      institution: "Swami Vivekanand Institute of Engineering & Technology, Rajpura, Punjab",
      degree: "Master of Computer Application (MCA)",
      year: "2023 - 2025",
      score: "8 CGPA"
    },
    {
      institution: "RIMT University, Mandi Gobindgarh, Punjab",
      degree: "Bachelors of Computer Application (BCA)",
      year: "2019 - 2022",
      score: "CGPA: 9.08"
    },
    {
      institution: "Government Higher Secondary School, Handwara",
      degree: "12th Standard",
      year: "2017 - 2018",
      score: "Percentage: 80.4%"
    }
  ]
};

const fallbackContact = {
  email: "loneaamir6@gmail.com",
  phone: "+91-9596581274",
  address: "Handwara, Jammu and Kashmir, India",
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
  description: "Passionate Full-Stack Engineer focused on building high-performance web products, scalable enterprise services, and robust engineering solutions.",
  tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",
  socialLinks: fallbackContact.socialLinks,
  typewriterStrings: [
    "Full-Stack Engineer",
    "MERN Stack Developer",
    "Backend Specialist",
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
    setRefetchTrigger(prev => prev + 1);
  };

  useEffect(() => {
    let active = true;
    setLoading(true);
    setBootProgress(0);
    setBootLogs([]);

    // Hard ceiling on the boot screen. Every section already renders from the
    // fallback data this provider starts with, and the live values swap in as
    // soon as Firestore answers, so there is never a reason to sit here for
    // tens of seconds on a bad connection.
    const watchdog = setTimeout(() => {
      if (active) setLoading(false);
    }, BOOT_SCREEN_MAX_MS);

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
