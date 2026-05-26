import React, { createContext, useState, useEffect, useContext, useRef } from "react";
import { doc, getDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
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

  const fetchPromiseRef = useRef(null);
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

    // Firebase fetching core promise
    const fetchCoreData = async () => {
      const results = {};
      
      // Fetch 1: Settings Colors
      try {
        const docSnap = await getDoc(doc(db, "settings", "colors"));
        results.colors = docSnap.exists() ? docSnap.data() : null;
      } catch (e) {
        console.warn("Failed fetching settings/colors:", e);
      }

      // Fetch 2: Content About
      try {
        const docSnap = await getDoc(doc(db, "content", "about"));
        results.about = docSnap.exists() ? docSnap.data() : fallbackAbout;
      } catch (e) {
        console.warn("Failed fetching content/about:", e);
        results.about = fallbackAbout;
      }

      // Fetch 3: Content Contact
      try {
        const docSnap = await getDoc(doc(db, "content", "contact"));
        results.contact = docSnap.exists() ? docSnap.data() : fallbackContact;
      } catch (e) {
        console.warn("Failed fetching content/contact:", e);
        results.contact = fallbackContact;
      }

      // Fetch 4: Home HomeData
      try {
        const docSnap = await getDoc(doc(db, "home", "homeData"));
        results.homeData = docSnap.exists() ? docSnap.data() : fallbackHome;
      } catch (e) {
        console.warn("Failed fetching home/homeData:", e);
        results.homeData = fallbackHome;
      }

      // Fetch 5: Home Home2
      try {
        const docSnap = await getDoc(doc(db, "home", "home2"));
        results.home2 = docSnap.exists() ? docSnap.data() : fallbackHome2;
      } catch (e) {
        console.warn("Failed fetching home/home2:", e);
        results.home2 = fallbackHome2;
      }

      // Fetch 6: Skills Collection
      try {
        const snap = await getDocs(collection(db, "skills"));
        const skillsList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        skillsList.sort((a, b) => (a.order || 0) - (b.order || 0));
        results.skills = skillsList;
      } catch (e) {
        console.warn("Failed fetching skills collection:", e);
        results.skills = [];
      }

      // Fetch 7: Projects Collection (hackmack/user_projects/projectsData)
      try {
        const hackRef = doc(db, "hackmack", "user_projects");
        const snap = await getDocs(collection(hackRef, "projectsData"));
        const projectsList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        results.projects = projectsList;
      } catch (e) {
        console.warn("Failed fetching projectsData collection:", e);
        results.projects = [];
      }

      // Fetch 8: Education Collection fallback (if about.education is empty)
      try {
        const snap = await getDocs(query(collection(db, "educationData"), orderBy("created", "desc")));
        results.education = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      } catch (e) {
        console.warn("Failed fetching educationData collection:", e);
        results.education = [];
      }

      return results;
    };

    const runBootSequence = async () => {
      // Start database fetching immediately
      const fetchPromise = fetchCoreData();
      fetchPromiseRef.current = fetchPromise;

      const delay = (ms) => new Promise(res => setTimeout(res, ms));

      // Step 1: Initializing APIs
      addLog(0, "RUNNING");
      await delay(150);
      addLog(0, "OK");

      // Step 2: Establish connection
      addLog(1, "RUNNING");
      await delay(180);
      addLog(1, "OK");

      // Wait for the Firebase queries to finish before continuing log prints or slow them down
      let fetchResults;
      try {
        fetchResults = await fetchPromise;
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

      // Step 3: Colors
      addLog(2, "RUNNING");
      await delay(120);
      addLog(2, fetchResults.colors ? "OK" : "OK", fetchResults.colors ? "DESIGN SYSTEM COLORS APPLIED" : "DEFAULT TOKENS INJECTED");

      // Step 4: About data
      addLog(3, "RUNNING");
      await delay(140);
      addLog(3, "OK");

      // Step 5: Contact
      addLog(4, "RUNNING");
      await delay(100);
      addLog(4, "OK");

      // Step 6: Skills
      addLog(5, "RUNNING");
      await delay(130);
      addLog(5, "OK", `INDEXED ${fetchResults.skills.length} TECHNICAL CAPABILITIES`);

      // Step 7: Projects & Education
      addLog(6, "RUNNING");
      await delay(150);
      addLog(6, "OK", `CONNECTED PROJECT ARCHIVE (${fetchResults.projects.length} RECORDS)`);

      // Step 8: Complete
      addLog(7, "RUNNING");
      await delay(200);
      addLog(7, "OK");

      if (active) {
        // Apply dynamic experience formatting to loaded values
        if (fetchResults.about && fetchResults.about.description) {
          fetchResults.about.description = makeTextDynamic(fetchResults.about.description);
        }
        if (fetchResults.home2 && fetchResults.home2.introduction) {
          fetchResults.home2.introduction = makeTextDynamic(fetchResults.home2.introduction);
        }
        
        setData(fetchResults);
        dataFetchedRef.current = true;
        // Let it display 100% and BOOT COMPLETE briefly for satisfaction
        setTimeout(() => {
          if (active) setLoading(false);
        }, 300);
      }
    };

    runBootSequence();

    return () => {
      active = false;
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
