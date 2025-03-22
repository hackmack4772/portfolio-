import React from 'react';
import { usePortfolioData } from '../utils/usePortfolioData';
import './projects.css';

const Projects = () => {
  // Fetch only projects data
  const { data: projects, loading, error } = usePortfolioData({ 
    contentType: 'projects',
    applyColors: false // We don't need to apply colors again if already done in App.js
  });

  if (loading) {
    return (
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="loading-spinner">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="error-message">
            <p>Failed to load projects. Please try again later.</p>
            <small>{error}</small>
          </div>
        </div>
      </section>
    );
  }

  // Filter featured projects if needed
  const featuredProjects = projects?.filter(project => project.featured) || [];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-grid">
          {projects?.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.imageURL && (
                <div className="project-image">
                  <img src={project.imageURL} alt={project.title} />
                </div>
              )}
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 