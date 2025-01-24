import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./education.css";

function Education() {
  const educationData = [
    {
      id: 1,
      title: "Master of Computer Application (MCA)",
      institution:
        "Swami Vivekanand Institute of Engineering & Technology, Rajpura, Punjab",
      year: "2023 - 2025",
      score: "Expected Completion: July 2025",
      image:
        "https://images.collegedunia.com/public/college_data/images/campusimage/165245050801.00_05_46_42.Still008.jpg",
    },
    {
      id: 2,
      title: "Bachelors of Computer Application (BCA)",
      institution: "RIMT University, Mandi Gobindgarh, Punjab",
      year: "2019 - 2022",
      score: "CGPA: 9.08",
      image:
        "https://content.jdmagicbox.com/comp/fatehgarh-sahib/l6/9999pxxxx.xxxx.100611182107.d1l6/catalogue/rimt-institute-of-engineering-and-technology-mandigobindgarh-fatehgarh-sahib-engineering-colleges-zqg3t7o.jpg",
    },
    {
      id: 3,
      title: "12th Standard",
      institution: "Government Higher Secondary School, Handwara",
      year: "2017 - 2018",
      score: "Percentage: 80.4%",
      image:
        "https://content3.jdmagicbox.com/comp/kupwara/u6/9999p1955.1955.221122221134.x3u6/catalogue/govt-boys-higher-secondary-handwara-kupwara-secondary-schools-9d1de1o7ya.jpg",
    },
    {
      id: 4,
      title: "10th Standard",
      institution: "Government High School, Sanzipora",
      year: "2015 - 2016",
      score: "Percentage: 86.6%",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKzyc1JASdv-3qUBIaCthlSpXbTCELIilwIA&s",
    },
    {
      id: 5,
      title: "1st to 8th Standard",
      institution: "Army Goodwill School, Naugam",
      year: "2008 - 2015",
      image:
        "https://asianlite.uk/wp-content/uploads/2022/02/FKCFVQTaUAAPD55-1024x767.jpg",
    },
  ];

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
