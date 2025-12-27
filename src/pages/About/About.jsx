import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, ProgressBar } from "react-bootstrap";
import HelmetWrapper from "../../components/HelmetWrapper";
import { useLoading } from "../../Context/LoadingContext";
import "./about.css";
import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Aboutcard from "../../components/AboutCard";
import Toolstack from "../../components/Toolstack";
import laptopImg from "../../Assets/about.png";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

// Make sure this function is defined before it's used
function getColorClass(index) {
  const colors = ["primary", "secondary", "accent"];
  return colors[index % colors.length];
}

function About() {
  const [aboutData, setAboutData] = useState({
    tagline: "Full-Stack Engineer | Building Scalable Web & Reward Platforms",

    biography:
      "I am Aamir Saleem Lone, a passionate Full-Stack Developer with nearly 3 years of hands-on experience in building scalable, secure, and performance-driven web applications. Currently working at Mahindra Comviva on the Mobilytix Rewards platform, I specialize in developing enterprise-grade solutions using React, Node.js, TypeScript, and modern backend systems. Previously, I worked at Shine Dezign Infonet, where I contributed to healthcare, CRM, and real-time streaming applications. I hold a Master’s degree in Computer Applications (MCA) and enjoy building reliable systems that solve real-world problems.",

    highlights: [
      "Full-Stack Developer with ~3 years of experience",
      "Currently working at Mahindra Comviva (Mobilytix Rewards)",
      "Previously worked at Shine Dezign Infonet Pvt. Ltd.",
      "Strong expertise in React, Node.js, TypeScript & APIs",
      "Experience in CRM, healthcare, and reward-based platforms",
      "Hands-on with real-time streaming & integrations",
      "Focused on scalable, secure, and maintainable systems",
    ],

    experience: [
      {
        skill: "Frontend Development (React, Redux, Ant Design)",
        years: "3+ years",
        level: 90,
      },
      {
        skill: "Backend Development (Node.js, Express, FeathersJS)",
        years: "3+ years",
        level: 88,
      },
      {
        skill: "Database Design (PostgreSQL, MySQL, MongoDB)",
        years: "3+ years",
        level: 85,
      },
      {
        skill: "Authentication & Security (JWT, Firebase, OAuth)",
        years: "2+ years",
        level: 80,
      },
      {
        skill: "Streaming & Real-Time Systems (WebRTC, RTMP, Zoom)",
        years: "2+ years",
        level: 78,
      },
    ],

    education: [
      {
        degree: "Master of Computer Applications (MCA)",
        institution:
          "Swami Vivekanand Institute of Engineering & Technology, Punjab",
        year: "2023 – 2025",
        score: "CGPA: 8.0",
      },
      {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "RIMT University, Punjab",
        year: "2019 – 2022",
        score: "CGPA: 9.08",
      },
      {
        degree: "Higher Secondary Education",
        institution: "JKBOSE, Jammu & Kashmir",
        year: "2017 – 2019",
        score: "80.4%",
      },
      {
        degree: "Secondary Education",
        institution: "JKBOSE, Jammu & Kashmir",
        year: "2015 – 2017",
        score: "86.6%",
      },
    ],

    projects: [
      {
        name: "Mobilytix Rewards Platform",
        description:
          "Enterprise-grade rewards and loyalty platform developed for large-scale user engagement and reward management.",
        features: [
          "Reward lifecycle & transaction management",
          "Secure APIs and role-based access",
          "Scalable backend with Node.js & PostgreSQL",
          "Analytics and reporting dashboards",
        ],
      },
      {
        name: "Healthcare Engagement Platform",
        description:
          "A digital platform for healthcare professionals featuring webinars, surveys, and content engagement.",
        features: [
          "Zoom & Webex integrations",
          "Survey builder with analytics",
          "HCP activity tracking",
          "Admin dashboards and reporting",
        ],
      },
    ],

    skills: {
      programmingLanguages: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "Java",
        "C++",
        "C",
      ],
      frameworksLibraries: [
        "React.js",
        "Redux",
        "Express.js",
        "FeathersJS",
        "Laravel",
        "Lumen",
        "Ant Design",
      ],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
      webTechnologies: ["REST APIs", "WebSockets", "WebRTC", "RTMP"],
      toolsPlatforms: ["Git", "GitLab", "Vite", "Webpack", "Nginx", "Docker"],
    },

    languages: {
      English: "Professional",
      Hindi: "Fluent",
      Urdu: "Conversational",
      Kashmiri: "Native",
    },

    hobbies: [
      "Listening to music",
      "Exploring new technologies",
      "Photography",
      "Playing basketball",
    ],

    image: "https://i.postimg.cc/DfWp1PwJ/avatar.png",

    contact: {
      location: "Handwara, Jammu & Kashmir, India",
      phone: "9596581274",
      email: "loneaamir6@gmail.com",
      links: {
        linkedin: "LinkedIn",
        github: "GitHub",
        portfolio: "Portfolio",
      },
    },
  });

  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const { handleLoading } = useLoading();

  // Animation tracking
  const [animationCompleted, setAnimationCompleted] = useState({
    main: false,
    skills: false,
    tools: false,
    github: false,
  });

  // Skill categories for filter tabs
  const skillCategories = [
    { name: "Frontend", icon: "fas fa-laptop-code", color: "primary" },
    { name: "Backend", icon: "fas fa-server", color: "secondary" },
    { name: "DevOps", icon: "fas fa-cloud", color: "accent" },
    { name: "Tools", icon: "fas fa-tools", color: "primary" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Here you would normally fetch data from API/Firebase
        // For now we'll just use the default data

        // Simulate data load and trigger animations
        handleLoading(false);
        setLoading(false);

        // Set visible state to true immediately after loading is complete
        setVisible(true);

        // Setup tab animation timers
        setTimeout(() => {
          // setActiveTab('professional');

          // Staggered animation for sections
          setTimeout(
            () => setAnimationCompleted({ ...animationCompleted, main: true }),
            500
          );
          setTimeout(
            () =>
              setAnimationCompleted({ ...animationCompleted, skills: true }),
            800
          );
          setTimeout(
            () => setAnimationCompleted({ ...animationCompleted, tools: true }),
            1100
          );
          setTimeout(
            () =>
              setAnimationCompleted({ ...animationCompleted, github: true }),
            1400
          );
        }, 100);
      } catch (error) {
        console.error("Error fetching about data:", error);
        handleLoading(false);
        setLoading(false);
        // Even on error, make sure we're not stuck in loading state
        setVisible(true);
      }
    };

    fetchData();
  }, [handleLoading]);

  // Enhanced handling of animations when they become visible
  useEffect(() => {
    if (visible) {
      // Force all elements with animation classes to be visible
      document
        .querySelectorAll(
          ".section-heading, .about-tabs, .about-tab-content, .about-image-container, " +
            ".summary-section, .skill-categories-tabs, .skills-container, " +
            ".tools-container, .github-container, .about-footer"
        )
        .forEach((element) => {
          // Force inline style to override any CSS that might be preventing visibility
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";

          // Add the animate class with a slight delay to ensure CSS transition works
          setTimeout(() => {
            element.classList.add("animate");
          }, 50);
        });
    }
  }, [visible]);

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="about-section">
      <HelmetWrapper>
        <title>About Me | My Portfolio</title>
        <meta
          name="description"
          content="Learn more about me, my skills, and my professional journey."
        />
      </HelmetWrapper>

      {loading ? (
        <div className="loading-container">
          <Spinner animation="border" variant="primary" />
          <p>Loading education data...</p>
        </div>
      ) : (
        <Container>
          <div className="about-content">
            {/* Animated particles in background */}
            <div className="about-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>

            {/* Section Heading */}
            <div className={`section-heading ${visible ? "animate" : ""}`}>
              <h5 className="heading">
                About <span className="accent-text">Me</span>
              </h5>
              <p className="subheading">
                {aboutData?.tagline || "Developer, Designer, Problem Solver"}
              </p>
            </div>

            <Row className="about-main">
              <Col lg={5} className="about-image-column about-image-left">
                <div
                  className={`about-image-container ${
                    visible ? "animate" : ""
                  }`}
                >
                  {aboutData?.image ? (
                    <img
                      src={aboutData.image}
                      alt="Profile"
                      className="about-image"
                    />
                  ) : (
                    <div className="about-image-placeholder">
                      <i className="fas fa-user"></i>
                    </div>
                  )}
                  <div className="about-image-decoration"></div>

                  {/* Floating badges */}
                  <div className="floating-badge badge-1">
                    <i className="fab fa-react"></i>
                    <span>React</span>
                  </div>
                  <div className="floating-badge badge-2">
                    <i className="fab fa-node-js"></i>
                    <span>Node.js</span>
                  </div>
                  <div className="floating-badge badge-3">
                    <i className="fab fa-js"></i>
                    <span>JavaScript</span>
                  </div>
                </div>
              </Col>

              <Col lg={7} className="about-text-column">
                {/* About Tabs */}
                <div className={`about-tabs ${visible ? "animate" : ""}`}>
                  <div
                    className={`tab-button ${
                      activeTab === "personal" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("personal")}
                  >
                    <i className="fas fa-user"></i>
                    <span>Personal</span>
                  </div>
                  <div
                    className={`tab-button ${
                      activeTab === "highlights" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("highlights")}
                  >
                    <i className="fas fa-star"></i>
                    <span>Highlights</span>
                  </div>
                  <div
                    className={`tab-button ${
                      activeTab === "professional" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("professional")}
                  >
                    <i className="fas fa-briefcase"></i>
                    <span>Professional</span>
                  </div>
                  <div
                    className={`tab-button ${
                      activeTab === "education" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("education")}
                  >
                    <i className="fas fa-graduation-cap"></i>
                    <span>Education</span>
                  </div>
                </div>

                {/* Tab Content */}
                <div
                  className={`about-tab-content ${visible ? "animate" : ""}`}
                >
                  {activeTab === "personal" && (
                    <div className="about-bio">
                      <h2 className="bio-title">Who am I?</h2>
                      <div className="biography-content">
                        <p className="bio-text">{aboutData.biography}</p>

                        <div className="personal-info">
                          <div className="info-item">
                            <span className="info-label">
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              Location:
                            </span>
                            <span className="info-value">
                              San Zipora Kutlari, Kupwara, Jammu and Kashmir,
                              193302
                            </span>
                          </div>
                          <div className="info-item">
                            <span className="info-label">
                              <i className="fas fa-envelope"></i> Email:
                            </span>
                            <span className="info-value">
                              loneaamir6@gmail.com
                            </span>
                          </div>
                          <div className="info-item">
                            <span className="info-label">
                              <i className="fas fa-code-branch"></i> GitHub:
                            </span>
                            <span className="info-value">
                              <a
                                href="https://github.com/hackmack4772"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                github.com/hackmack4772
                              </a>
                            </span>
                          </div>
                          <div className="info-item">
                            <span className="info-label">
                              <i className="fas fa-briefcase"></i> Open to Work:
                            </span>
                            <span className="info-value info-badge">
                              Available for Full-time & Freelance
                            </span>
                          </div>
                        </div>
                      </div>

                     
                    </div>
                  )}

                  {activeTab === "highlights" && (
                    <div className="highlights-tab">
                      <h2 className="bio-title">Key Highlights</h2>
                      <ul className="highlights-list">
                        {aboutData?.highlights?.map((highlight, index) => ( 
                          <li key={index} className="highlight-item">
                            <span className="highlight-icon">
                              <i className="fas fa-check-circle"></i>
                            </span>
                            <span className="highlight-text">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "professional" && (
                    <div className="professional-tab">
                      <h2 className="bio-title">Professional Experience</h2>
                      <div className="experience-skills">
                        {aboutData?.experience?.map((exp, index) => (
                          <div key={index} className="experience-skill-item">
                            <div className="skill-header">
                              <span className="skill-name">{exp.skill}</span>
                              <span className="skill-years">{exp.years}</span>
                            </div>
                            <ProgressBar
                              now={exp.level}
                              className={`custom-progress ${getColorClass(
                                index
                              )}`}
                            />
                          </div>
                        )) || <p>No experience data available</p>}
                      </div>

                      {/* <div className="certifications-section">
                        <h3 className="highlights-title">Certifications</h3>
                        <div className="certifications-grid">
                          {aboutData?.certifications?.map((cert, index) => (
                            <div key={index} className={`certification-card ${getColorClass(index)}`}>
                              <div className="certification-icon">
                                <i className="fas fa-certificate"></i>
                              </div>
                              <div className="certification-details">
                                <h4>{cert.name}</h4>
                                <div className="certification-meta">
                                  <span>{cert.issuer}</span>
                                  <span className="cert-year">{cert.year}</span>
                                </div>
                              </div>
                            </div>
                          )) || <p>No certification data available</p>}
                        </div>
                      </div> */}
                    </div>
                  )}

                  {activeTab === "education" && (
                    <div className="education-tab">
                      <h2 className="bio-title">Education Background</h2>

                      {aboutData?.education?.map((edu, index) => (
                        <div key={index} className="education-about-card">
                          <div className="education-icon">
                            <i className="fas fa-graduation-cap"></i>
                          </div>
                          <div className="education-details">
                            <h3 className="education-degree">{edu.degree}</h3>
                            <div className="education-meta">
                              <span className="education-institution">
                                {edu.institution}
                              </span>
                              <span className="education-year">{edu.year}</span>
                            </div>
                          </div>
                        </div>
                      )) || <p>No education data available</p>}

                      <div className="education-skills">
                        <h3 className="highlights-title">
                          Core Knowledge Areas
                        </h3>
                        <div className="knowledge-tags">
                          <span className="knowledge-tag">Data Structures</span>
                          <span className="knowledge-tag">Algorithms</span>
                          <span className="knowledge-tag">Web Development</span>
                          <span className="knowledge-tag">
                            Database Systems
                          </span>
                          <span className="knowledge-tag">
                            Software Engineering
                          </span>
                          <span className="knowledge-tag">UI/UX Design</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </Row>

            <div className={`section-divider ${visible ? "animate" : ""}`}>
              <div className="divider-line"></div>
              <div className="divider-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="divider-line"></div>
            </div>

            {/* Professional Summary Section */}
            <div className={`summary-section ${visible ? "animate" : ""}`}>
              <h2 className="section-subtitle">Professional Summary</h2>
              <div className="summary-content">
                <div className="summary-quote">
                  {/* <i className="fas fa-quote-left quote-icon left"></i> */}
                  <p>
                    {aboutData?.biography ||
                      "I am a passionate developer with a love for clean code and innovative solutions."}
                  </p>
                  {/* <i className="fas fa-quote-right quote-icon right"></i> */}
                </div>
              </div>
            </div>

            <div className={`section-divider ${visible ? "animate" : ""}`}>
              <div className="divider-line"></div>
              <div className="divider-icon secondary">
                <i className="fas fa-code"></i>
              </div>
              <div className="divider-line"></div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
              <h2 className={`section-subtitle ${visible ? "animate" : ""}`}>
                Professional Skillset
              </h2>

              <div
                className={`skill-categories-tabs ${visible ? "animate" : ""}`}
              >
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category-tab">
                    <div className={`category-icon-wrapper ${category.color}`}>
                      <i className={category.icon}></i>
                    </div>
                    <span>{category.name}</span>
                  </div>
                ))}
              </div>

              <div className={`skills-container ${visible ? "animate" : ""}`}>
                <Techstack />
              </div>
            </div>

            <div className={`section-divider ${visible ? "animate" : ""}`}>
              <div className="divider-line"></div>
              <div className="divider-icon accent">
                <i className="fas fa-tools"></i>
              </div>
              <div className="divider-line"></div>
            </div>

            {/* Tools Section */}
            <div className="tools-section">
              <h2 className={`section-subtitle ${visible ? "animate" : ""}`}>
                Tools I Use
              </h2>
              <div
                className={`tools-container ${
                  visible && animationCompleted.tools ? "animate" : ""
                }`}
              >
                <Toolstack />
              </div>
            </div>

            <div className={`section-divider ${visible ? "animate" : ""}`}>
              <div className="divider-line"></div>
              <div className="divider-icon primary">
                <i className="fab fa-github"></i>
              </div>
              <div className="divider-line"></div>
            </div>

            {/* GitHub Section */}
            <div className="github-section">
              <h2 className={`section-subtitle ${visible ? "animate" : ""}`}>
                Days I Code
              </h2>
              <div
                className={`github-container ${
                  visible && animationCompleted.github ? "animate" : ""
                }`}
              >
                <Github />
              </div>
            </div>

            {/* About Footer */}
            <div className={`about-footer ${visible ? "animate" : ""}`}>
              <div className="footer-cta">
                <h3>Let's Connect!</h3>
                <p>Interested in working together? Feel free to reach out.</p>
                <div className="cta-buttons">
                  <a href="/projects" className="cta-btn primary-btn">
                    <i className="fas fa-project-diagram"></i> View Projects
                  </a>
                  <a href="/contact" className="cta-btn secondary-btn">
                    <i className="fas fa-envelope"></i> Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
}

export default About;
