import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import HelmetWrapper from "../../components/HelmetWrapper";
import "./Education.css";
import { useLoading } from "../../Context/LoadingContext";

function Education() {
  const [educationData, setEducationData] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [visible, setVisible] = useState(false);
  const { handleLoading } = useLoading();

  // Fetch education data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch education degrees
        const educationRef = collection(db, "educationData");
        const educationQuery = query(educationRef, orderBy("created", "desc"));
        const educationSnapshot = await getDocs(educationQuery);
        const fetchedEducation = educationSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEducationData(fetchedEducation);
        setLoading(false);
        handleLoading(false);
        setVisible(true);
      } catch (error) {
        console.error("Error fetching education data: ", error);
        setLoading(false);
      }
    };

    fetchData();
    
    // Reset active card when component unmounts
    return () => setActiveCard(null);
  }, [handleLoading]);

  const toggleDetails = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  // Get color class based on index
  const getColorClass = (index) => {
    const colors = ["primary", "secondary", "accent"];
    return colors[index % colors.length];
  };

  return (
    <Container fluid className="education-section">
      <HelmetWrapper>
        <title>Education | My Portfolio</title>
        <meta 
          name="description" 
          content="Academic background and professional certifications" 
        />
      </HelmetWrapper>
      
      <Container className="education-content" style={{marginTop: "5rem"}}>
        <div className={`section-heading ${visible ? 'animate' : ''}`}>
          <h5 className="heading">
            My <span className="accent-text">Education</span>
          </h5>
          <p className="subheading">
            Academic achievements and professional development
          </p>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
            <p>Loading education data...</p>
          </div>
        ) : (
          <>
            <Row className="timeline-container">
              <Col md={12} className="timeline-header">
                <div className="timeline-icon-wrapper">
                  <div className="timeline-icon">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                </div>
                <h2 className="timeline-title">Educational Journey</h2>
              </Col>
              
              {educationData.map((item, index) => (
                <Col md={12} key={item.id} className={`timeline-item ${visible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="timeline-marker">
                    <div className={`marker-dot marker-${getColorClass(index)}`}></div>
                    <div className="marker-line"></div>
                  </div>
                  
                  <div className={`education-card ${activeCard === item.id ? 'expanded' : ''}`} onClick={() => toggleDetails(item.id)}>
                    <div className="card-header">
                      <div className={`education-icon ${getColorClass(index)}`}>
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div className="education-summary">
                        <h3 className="degree">{item.title}</h3>
                        <div className="institution">
                          <span>{item.institution}</span>
                        </div>
                        <div className="duration">
                          <i className="far fa-calendar-alt"></i> {item.year}
                        </div>
                      </div>
                      <div className="card-toggle">
                        <i className={`fas ${activeCard === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                      </div>
                    </div>
                    
                    <div className="card-details">
                      <p className="description">{item.score}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            
            <div className={`education-footer ${visible ? 'animate' : ''}`}>
              <div className="quote">
                <i className="fas fa-quote-left quote-icon"></i>
                <p>Education is not the learning of facts, but the training of the mind to think.</p>
                <cite>— Albert Einstein</cite>
              </div>
            </div>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Education;
