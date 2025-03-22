import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Card } from "react-bootstrap";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import HelmetWrapper from "../../components/HelmetWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLink,
  faLaptopCode,
  faServer,
  faMobileAlt,
  faDatabase,
  faGlobe,
  faFilter,
  faSort,
  faEye,
  faGithub,
  faSearch,
  faEnvelope,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import { db } from "../../config/firebase";

function Projects() {
  // State variables
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsQuery = query(
          collection(db, "projects"),
          orderBy("date", "desc")
        );
        const projectsSnapshot = await getDocs(projectsQuery);
        const projectsData = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProjects(projectsData);
        
        // Extract unique categories
        const allCategories = projectsData.reduce((cats, project) => {
          if (project.category && !cats.includes(project.category)) {
            cats.push(project.category);
          }
          return cats;
        }, []);
        
        setCategories(allCategories);
        setLoading(false);
        
        // Set visibility after a short delay for animation
        setTimeout(() => {
          setVisible(true);
        }, 100);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  // Filter projects based on active category and search term
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.technologies && project.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    
    return matchesCategory && matchesSearch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date?.toDate?.() || b.date) - new Date(a.date?.toDate?.() || a.date);
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Get icon for project category
  const getCategoryIcon = (category) => {
    const icons = {
      "web": faGlobe,
      "frontend": faLaptopCode,
      "backend": faServer,
      "mobile": faMobileAlt,
      "database": faDatabase,
      "fullstack": faCode
    };
    
    return icons[category?.toLowerCase()] || faCode;
  };

  // Get color class based on index
  const getColorClass = (index) => {
    const colors = ["primary", "secondary", "accent"];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <section className="projects-section">
      <HelmetWrapper>
        <title>My Projects | Portfolio</title>
        <meta name="description" content="Browse through my portfolio of projects showcasing my skills and experience." />
      </HelmetWrapper>
      
      <Container>
        <div className="projects-content">
          {/* Section Heading */}
          <div className={`section-heading ${visible ? 'animate' : ''}`}>
            <h1 className="heading">
              My <span className="accent-text">Projects</span>
            </h1>
            <p className="subheading">
              Explore my latest work and technical projects
            </p>
          </div>

          {/* Projects Filter */}
          <div className={`projects-filter ${visible ? 'animate' : ''}`}>
            <div className="filter-options">
              <div className="category-filters">
                <button 
                  className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  <FontAwesomeIcon icon={faFilter} className="me-2" />
                  All Projects
                </button>
                
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <FontAwesomeIcon icon={getCategoryIcon(category)} className="me-2" />
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="filter-controls">
                <div className="search-box">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search projects..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>
                
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="date">Latest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {sortedProjects.length > 0 ? (
              <Row>
                {sortedProjects.map((project, index) => (
                  <Col key={project.id} lg={4} md={6} sm={12} className="mb-4">
                    <div 
                      className={`project-card ${visible ? 'animate' : ''}`}
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    >
                      <div className="project-img-container">
                        {project.imageUrl ? (
                          <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="project-img"
                          />
                        ) : (
                          <div className={`project-img-placeholder ${getColorClass(index)}`}>
                            <FontAwesomeIcon icon={getCategoryIcon(project.category)} />
                          </div>
                        )}
                        <div className="project-category">
                          <FontAwesomeIcon icon={getCategoryIcon(project.category)} className="me-2" />
                          {project.category || "Project"}
                        </div>
                      </div>
                      
                      <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description?.substring(0, 120)}
                          {project.description?.length > 120 ? "..." : ""}
                        </p>
                        
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="project-tech-stack">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="project-links">
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="project-link primary"
                            >
                              <FontAwesomeIcon icon={faEye} className="me-2" />
                              Demo
                            </a>
                          )}
                          
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="project-link secondary"
                            >
                              <FontAwesomeIcon icon={faGithub} className="me-2" />
                              Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="no-projects">
                <div className="empty-message">
                  <FontAwesomeIcon icon={faSearch} className="empty-icon" />
                  <p>No projects match your search criteria.</p>
                  <Button 
                    variant="primary" 
                    className="mt-3"
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Projects Footer */}
          <div className={`projects-footer ${visible ? 'animate' : ''}`}>
            <div className="footer-cta">
              <h3>Interested in working together?</h3>
              <p>I'm always open to discussing new projects or partnership opportunities.</p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-btn primary-btn">
                  <FontAwesomeIcon icon={faEnvelope} />
                  Get in Touch
                </a>
                <a href="/resume" className="cta-btn secondary-btn">
                  <FontAwesomeIcon icon={faFileAlt} />
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
