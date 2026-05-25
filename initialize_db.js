import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtm9WpPn-WT0IFVKOW6Xs-dcX474oW16o",
  authDomain: "hackmack4772.firebaseapp.com",
  projectId: "hackmack4772",
  storageBucket: "hackmack4772.firebasestorage.app",
  messagingSenderId: "38931846023",
  appId: "1:38931846023:web:2ed96aa0b1912c0fa6b922",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialAbout = {
  name: "Aamir Saleem Lone",
  title: "Full-Stack Engineer",
  tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",
  description: "I am Aamir Saleem Lone, a passionate Full-Stack Developer with nearly 3 years of hands-on experience in building scalable, secure, and performance-driven web applications. Currently working at Mahindra Comviva on the Mobilytix Rewards platform, I specialize in developing enterprise-grade solutions using React, Node.js, TypeScript, and modern backend systems. Previously, I worked at Shine Dezign Infonet, where I contributed to healthcare, CRM, and real-time streaming applications. I hold a Master’s degree in Computer Applications (MCA) and enjoy building reliable systems that solve real-world problems.",
  photoURL: "https://i.postimg.cc/DfWp1PwJ/avatar.png",
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

const initialContact = {
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

const initialSkills = [
  { name: "React", category: "Frontend", proficiency: 90, icon: "fa-react", order: 1 },
  { name: "Node.js", category: "Backend", proficiency: 85, icon: "fa-node-js", order: 2 },
  { name: "JavaScript", category: "Languages", proficiency: 90, icon: "fa-js", order: 3 },
  { name: "TypeScript", category: "Languages", proficiency: 80, icon: "SiTypescript", order: 4 },
  { name: "Laravel", category: "Backend", proficiency: 75, icon: "SiLaravel", order: 5 },
  { name: "MongoDB", category: "Databases", proficiency: 80, icon: "DiMongodb", order: 6 },
  { name: "Git", category: "Tools", proficiency: 85, icon: "DiGit", order: 7 },
  { name: "Docker", category: "Tools", proficiency: 70, icon: "SiDocker", order: 8 },
  { name: "Postman", category: "Tools", proficiency: 85, icon: "SiPostman", order: 9 },
  { name: "WebRTC", category: "Frontend", proficiency: 75, icon: "SiWebrtc", order: 10 }
];

async function initializeDatabase() {
  console.log("Initializing content/about...");
  await setDoc(doc(db, "content", "about"), initialAbout);
  console.log("✓ content/about document initialized.");

  console.log("Initializing content/contact...");
  await setDoc(doc(db, "content", "contact"), initialContact);
  console.log("✓ content/contact document initialized.");

  console.log("Checking skills...");
  const skillsSnap = await getDocs(collection(db, "skills"));
  if (skillsSnap.size === 0) {
    console.log("Populating skills collection...");
    for (const skill of initialSkills) {
      await addDoc(collection(db, "skills"), skill);
    }
    console.log("✓ skills collection populated.");
  } else {
    console.log("Skills collection is not empty, skipping population.");
  }
  
  console.log("Database initialization finished successfully!");
}

initializeDatabase().then(() => process.exit(0)).catch(console.error);
