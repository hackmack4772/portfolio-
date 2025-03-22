import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Container } from "react-bootstrap";
import "./Github.css"; // We'll create this CSS file next

export default function Github() {
  const [isVisible, setIsVisible] = useState(true);
  const [calendarLoaded, setCalendarLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    // Use Intersection Observer to detect when component is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("github-section");
    if (element) observer.observe(element);
    
    // Handle window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (element) observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle successful calendar load
  const handleCalendarLoad = () => {
    setCalendarLoaded(true);
  };
  
  // Responsive block size for GitHub calendar
  const getBlockSize = () => {
    if (windowWidth <= 480) return 8;
    if (windowWidth <= 768) return 10;
    return 12;
  };
  
  return (
    <div id="github-section" className={`github-section visible ${isVisible ? 'visible' : ''}`}>
      <div className="github-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <Container>
        <div className="github-header">
          <h1 className="section-title">
            Days I <span className="text-accent">Code</span>
          </h1>
          <p className="section-subtitle">My GitHub Contribution Journey</p>
          <div className="title-underline"></div>
        </div>
        
        <Row className="github-content">
          <Col lg={12} className="calendar-wrapper">
            <div className={`github-card contribution-card ${calendarLoaded ? 'calendar-loaded' : ''}`}>
              <div className="card-glare"></div>
              <div className="card-content">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Contribution Calendar</h3>
                <div className="calendar-container">
                  <GitHubCalendar
                    username="hackmack4772"
                    blockSize={getBlockSize()}
                    blockMargin={windowWidth <= 480 ? 3 : 5}
                    color="#FFFFFF"
                    fontSize={windowWidth <= 480 ? 12 : 14}
                    showWeekdayLabels={windowWidth > 480}
                    dateFormat="yyyy-MM-dd"
                    tooltip={"{{count}} contributions on {{date}}"}
                    onDataReady={handleCalendarLoad}
                    theme={{
                      level4: "#00FFFF", // Cyan for highest activity
                      level3: "#00BFFF", // Lighter cyan
                      level2: "#00808F", // Teal
                      level1: "#005055", // Dark teal
                      level0: "#1A1A1A", // Dark background
                    }}
                    hideColorLegend={windowWidth <= 576}
                    hideMonthLabels={windowWidth <= 480}
                    hideTotalCount={windowWidth <= 480}
                  />
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={6} sm={12} className="stats-column">
            <div className="github-card stats-card">
              <div className="card-glare"></div>
              <div className="card-content">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
                  </svg>
                </div>
                <h3 className="card-title">GitHub Stats</h3>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=hackmack4772&show_icons=true&theme=react&bg_color=0D1117&title_color=00FFFF&icon_color=00FFFF&text_color=FFFFFF&hide_border=true&count_private=true${windowWidth <= 480 ? '&hide=contribs,issues' : ''}`}
                  alt="GitHub Stats"
                  className="stats-image"
                  loading="lazy"
                />
                <div className="stat-highlights">
                  <div className="stat-item">
                    <div className="stat-icon commits">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
                      </svg>
                    </div>
                    <span>Commits</span>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon prs">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                      </svg>
                    </div>
                    <span>PRs</span>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon stars">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                      </svg>
                    </div>
                    <span>Stars</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={6} sm={12} className="language-column">
            <div className="github-card language-card">
              <div className="card-glare"></div>
              <div className="card-content">
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V2.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 13.25V2.75zm9.22 3.72a.75.75 0 000 1.06L10.69 9 9.22 10.47a.75.75 0 101.06 1.06l2-2a.75.75 0 000-1.06l-2-2a.75.75 0 00-1.06 0zM6.78 6.53a.75.75 0 00-1.06-1.06l-2 2a.75.75 0 000 1.06l2 2a.75.75 0 101.06-1.06L5.31 9l1.47-1.47z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Top Languages</h3>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=hackmack4772&layout=compact&theme=react&bg_color=0D1117&title_color=00FFFF&text_color=FFFFFF&hide_border=true${windowWidth <= 480 ? '&hide=css' : ''}`}
                  alt="Top Languages"
                  className="stats-image"
                  loading="lazy"
                />
                <div className="tech-badges">
                  {windowWidth > 480 ? (
                    <>
                      <span className="tech-badge">JavaScript</span>
                      <span className="tech-badge">React</span>
                      <span className="tech-badge">Node.js</span>
                      <span className="tech-badge">CSS</span>
                      <span className="tech-badge">HTML</span>
                    </>
                  ) : (
                    <>
                      <span className="tech-badge">JS</span>
                      <span className="tech-badge">React</span>
                      <span className="tech-badge">Node</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="github-footer">
          <a 
            href="https://github.com/hackmack4772" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-button"
          >
            <span className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </span>
            {windowWidth <= 480 ? 'My GitHub' : 'Visit my GitHub Profile'}
          </a>
        </div>
      </Container>
    </div>
  );
}
