import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "../../firebase";
import HelmetWrapper from "../../components/HelmetWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faTrophy,
  faDownload,
  faCalendarAlt,
  faMapMarkerAlt,
  faBuilding,
  faUniversity,
  faEnvelope,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";

function Resume() {
  const [resumeData, setResumeData] = useState({
    experience: [],
    education: [],
    achievements: [],
    resumeUrl: ""
  });
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Fetch experience data
        const experienceQuery = query(
          collection(db, "experience"),
          orderBy("startDate", "desc")
        );
        const experienceSnapshot = await getDocs(experienceQuery);
        const experienceData = experienceSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Fetch education data
        const educationQuery = query(
          collection(db, "educationData"),
          orderBy("startDate", "desc")
        );
        const educationSnapshot = await getDocs(educationQuery);
        const educationData = educationSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Fetch achievements data
        const achievementsQuery = query(
          collection(db, "achievements"),
          orderBy("date", "desc")
        );
        const achievementsSnapshot = await getDocs(achievementsQuery);
        const achievementsData = achievementsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Fetch resume URL from settings
        const settingsQuery = query(
          collection(db, "settings"),
          where("name", "==", "resumeUrl")
        );
        const settingsSnapshot = await getDocs(settingsQuery);
        let resumeUrl = "";
        if (!settingsSnapshot.empty) {
          resumeUrl = settingsSnapshot.docs[0].data().value;
        }

        setResumeData({
          experience: experienceData,
          education: educationData,
          achievements: achievementsData,
          resumeUrl: resumeUrl
        });

        setLoading(false);

        // Set visibility after a short delay for animation
        setTimeout(() => {
          setVisible(true);
        }, 100);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  // Function to format date
  const formatDate = (timestamp) => {
    if (!timestamp) return "Present";
    
    try {
      // Check if timestamp is a Firebase Timestamp
      if (timestamp.toDate) {
        const date = timestamp.toDate();
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
      
      // If it's already a JS Date
      if (timestamp instanceof Date) {
        return timestamp.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      }
      
      // If it's a string or number, create a date
      const date = new Date(timestamp);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  // Function to determine color classes
  const getColorClass = (index) => {
    const colors = ["primary", "secondary", "accent"];
    return colors[index % colors.length];
  };

  // Create timeline for experience
  const renderExperienceTimeline = () => {
    return resumeData.experience.map((exp, index) => (
      <div 
        key={exp.id} 
        className={`timeline-item ${getColorClass(index)} ${visible ? 'animate' : ''}`}
        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
      >
        <div className="timeline-content">
          <h3 className="timeline-title">{exp.title}</h3>
          <div className="timeline-subtitle">
            <span className="timeline-company">
              <FontAwesomeIcon icon={faBuilding} className="me-2" />
              {exp.company}
            </span>
            <span className="timeline-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
            </span>
          </div>
          {exp.location && (
            <div className="mb-2 text-muted">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              {exp.location}
            </div>
          )}
          <p className="timeline-description">{exp.description}</p>
          {exp.skills && exp.skills.length > 0 && (
            <div className="skills-tag-container">
              {exp.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    ));
  };

  // Create timeline for education
  const renderEducationTimeline = () => {
    return resumeData.education.map((edu, index) => (
      <div 
        key={edu.id} 
        className={`timeline-item ${getColorClass(index)} ${visible ? 'animate' : ''}`}
        style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
      >
        <div className="timeline-content">
          <h3 className="timeline-title">{edu.degree}</h3>
          <div className="timeline-subtitle">
            <span className="timeline-institution">
              <FontAwesomeIcon icon={faUniversity} className="me-2" />
              {edu.institution}
            </span>
            <span className="timeline-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
            </span>
          </div>
          {edu.location && (
            <div className="mb-2 text-muted">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              {edu.location}
            </div>
          )}
          {edu.gpa && (
            <div className="timeline-gpa">
              <strong>GPA:</strong> {edu.gpa}
            </div>
          )}
          <p className="timeline-description">{edu.description}</p>
          {edu.courses && edu.courses.length > 0 && (
            <div className="skills-tag-container">
              {edu.courses.map((course, idx) => (
                <span key={idx} className="skill-tag">{course}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    ));
  };

  // Create achievement cards
  const renderAchievements = () => {
    return (
      <div className="achievement-grid">
        {resumeData.achievements.map((achievement, index) => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${visible ? 'animate' : ''}`}
            style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
          >
            <div className={`achievement-icon ${getColorClass(index)}`}>
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <h4 className="achievement-title">{achievement.title}</h4>
            <div className="achievement-date">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              {formatDate(achievement.date)}
            </div>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading resume data...</p>
      </div>
    );
  }

  return (
    <section className="resume-section">
      <HelmetWrapper>
        <title>My Resume | Portfolio</title>
        <meta name="description" content="View my professional experience, education, and achievements." />
      </HelmetWrapper>
      
      <Container>
        <div className="resume-content">
          {/* Section Heading */}
          <div className={`section-heading ${visible ? 'animate' : ''}`}>
            <h1 className="heading">
              My <span className="accent-text">Resume</span>
            </h1>
            <p className="subheading">
              A comprehensive overview of my professional journey, education, and achievements
            </p>
          </div>

          {/* Resume Tabs */}
          <div className={`resume-tabs ${visible ? 'animate' : ''}`}>
            <div 
              className={`resume-tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <FontAwesomeIcon icon={faBriefcase} />
              <span>Experience</span>
            </div>
            <div 
              className={`resume-tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <FontAwesomeIcon icon={faGraduationCap} />
              <span>Education</span>
            </div>
            <div 
              className={`resume-tab ${activeTab === 'achievements' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievements')}
            >
              <FontAwesomeIcon icon={faTrophy} />
              <span>Achievements</span>
            </div>
          </div>

          {/* Resume Content Container */}
          <div className={`resume-container ${visible ? 'animate' : ''}`}>
            {activeTab === 'experience' && (
              <div className="timeline-container">
                <h2 className="mb-4">Professional Experience</h2>
                {resumeData.experience.length > 0 ? renderExperienceTimeline() : (
                  <p className="text-center text-muted">No experience data available</p>
                )}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="timeline-container">
                <h2 className="mb-4">Educational Background</h2>
                {resumeData.education.length > 0 ? renderEducationTimeline() : (
                  <p className="text-center text-muted">No education data available</p>
                )}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h2 className="mb-4">Achievements & Certifications</h2>
                {resumeData.achievements.length > 0 ? renderAchievements() : (
                  <p className="text-center text-muted">No achievements data available</p>
                )}
              </div>
            )}
          </div>

          {/* Resume Download Button */}
          {resumeData.resumeUrl && (
            <div className={`resume-download ${visible ? 'animate' : ''}`}>
              <a 
                href={resumeData.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-btn"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Complete Resume
              </a>
            </div>
          )}

          {/* Resume Footer */}
          <div className={`resume-footer ${visible ? 'animate' : ''}`}>
            <div className="footer-cta">
              <h3>Let's Work Together</h3>
              <p>Interested in my experience and skills? Feel free to get in touch to discuss how we can collaborate.</p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-btn primary-btn">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Contact Me
                </a>
                <a href="/projects" className="cta-btn secondary-btn">
                  <FontAwesomeIcon icon={faFileAlt} />
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Resume; 