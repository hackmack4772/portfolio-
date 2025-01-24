import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./education.css";

function Education() {
  const [educationData, setEducationData] = useState([]);
  const fetchEducationDataFromFirestore = async () => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_education");
      const educationRef = collection(hackmackDocRef, "educationData");
      const querySnapshot = await getDocs(educationRef);

      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEducationData(fetchedData);
    } catch (error) {
      console.error("Error fetching education data: ", error);
    }
  };

  useEffect(() => {
    fetchEducationDataFromFirestore();
  }, []);

  return (
    <Container fluid className="education-section">
      <Container>
        <h1 className="education-heading">
          My <strong className="purple">Education</strong>
        </h1>
        <p style={{ color: "white" }}>
          A summary of my academic qualifications and milestones.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {educationData.map((education) => (
            <Col md={6} key={education.id} className="education-card">
              <Card className="education-card-view">
                <Card.Img
                  variant="top"
                  src={education.image}
                  alt={education.title}
                />
                <Card.Body>
                  <Card.Title>{education.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {education.institution}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Year:</strong> {education.year}
                    <br />
                    <strong>Details:</strong> {education.score}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
