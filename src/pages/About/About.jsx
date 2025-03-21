import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "../../components/Github";
import Techstack from "../../components/Techstack";
import Aboutcard from "../../components/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "../../components/Toolstack";
import { useLoading } from "../../Context/LoadingContext";
import "./about.css"

function About() {
  const { handleLoading } = useLoading();

  useEffect(() => {
    const handleApiData = () => {
      handleLoading(false);
    };
    handleApiData();
  }, []);
  return (
    <Container fluid className="about-section">
      <Container>
        {/* About Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Professional Summary */}
        <h1 className="project-heading">
          Professional <strong className="purple">Summary</strong>
        </h1>
        <p style={{ color: "white" }}>
          I am a dedicated and innovative <strong>MERN Stack Developer</strong>
          with hands-on experience in <strong>React.js</strong>,{" "}
          <strong>Express.js</strong>, <strong>Laravel</strong>,{" "}
          <strong>Lumen</strong>, and <strong>MongoDB</strong>. I started my
          journey as a trainee web developer at Shine Dezign Infonet Pvt. Ltd.
          and transitioned into a full-time role. I specialize in creating
          scalable systems, efficient APIs, and end-to-end solutions for modern,
          user-centric web applications.
        </p>

        {/* Professional Skillset */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        {/* Tools */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* GitHub Section */}
        <h1 className="project-heading">
          My <strong className="purple">GitHub</strong> Stats
        </h1>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
