import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";

// import hcp from "../../Assets/Projects/hcp.png"; // Example image for Healthcare Platform
// import crm from "../../Assets/Projects/crm.png"; // Example image for CRM
// import surveyBuilder from "../../Assets/Projects/surveyBuilder.png"; // Example image for Survey Builder
// import videoCall from "../../Assets/Projects/videoCall.png"; // Example image for Video Call

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few notable projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Healthcare Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Healthcare Platform"
              description="Developed an integrated platform for healthcare professionals (HCPs) featuring content engagement tracking, live webinars, dynamic surveys, and an educational resource library. Used React.js, Redux, and MySQL for efficient performance and data management."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* CRM Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CRM Platform"
              description="Built a CRM platform with advanced features like campaign management, user tracking, and customizable templates. Visualized complex data using Highcharts to enhance user insights. Developed using React.js, Redux, and MongoDB."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Survey Builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Survey Builder"
              description="Designed and implemented a dynamic survey builder with drag-and-drop functionality using React.js and Redux. Enabled real-time analytics and easy distribution via QR codes."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* Real-Time Video Call */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-Time Video Call"
              description="Built a real-time video call solution integrating WebRTC, HLS streaming via Nginx, and Zoom Web SDK for seamless video conferencing. Enhanced user engagement with polls and interactive tools."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
