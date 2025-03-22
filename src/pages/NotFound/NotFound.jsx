import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetWrapper from "../../components/HelmetWrapper";
import "./NotFound.css";

function NotFound() {
  const [isTextAnimated, setIsTextAnimated] = useState(false);

  useEffect(() => {
    // Start the animation after a short delay
    const timer = setTimeout(() => {
      setIsTextAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="not-found-section">
      <HelmetWrapper>
        <title>Page Not Found | My Portfolio</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </HelmetWrapper>
      
      {/* Custom animated background */}
      <div className="animated-background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      <Container fluid className="not-found-container">
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="text-center">
            <div className="error-code-container">
              <h1 className="error-code">4</h1>
              <div className="error-circle">
                <div className="error-face">
                  <div className="error-eye left"></div>
                  <div className="error-eye right"></div>
                  <div className="error-mouth sad"></div>
                </div>
              </div>
              <h1 className="error-code">4</h1>
            </div>
            
            <h2 className={`error-text ${isTextAnimated ? 'animate' : ''}`}>
              Page Not Found
            </h2>
            
            <p className="error-description">
              Oops! The page you are looking for might have been removed, 
              had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="error-actions">
              <Link to="/">
                <Button className="home-button">
                  <span className="button-content">
                    <i className="fas fa-home"></i>
                    <span>Go Home</span>
                  </span>
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NotFound;
