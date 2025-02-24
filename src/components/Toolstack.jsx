import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGit,
  SiGithub,
  SiFirebase,
  SiDocker,
  SiUbuntu,
  SiMacos,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiSlack />, name: "Slack" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiFirebase />, name: "Firebase" },
  // { icon: <SiDocker />, name: "Docker" },
  { icon: <SiUbuntu />, name: "Ubuntu" },
  // { icon: <SiMacos />, name: "MacOS" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          aria-label={tool.name}
          title={tool.name} // Tooltip on hover
        >
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
