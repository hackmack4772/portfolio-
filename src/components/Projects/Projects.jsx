import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { db } from "../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the project data from Firestore
  const fetchProjectsDataFromFirestore = async () => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects"); // Reference to the 'user_projects' document
      const projectsRef = collection(hackmackDocRef, "projectsData"); // Reference to the 'projectsData' subcollection
      const querySnapshot = await getDocs(projectsRef); // Get all documents in the subcollection

      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Get the project data (title, description, image, etc.)
      }));

      setProjectsData(fetchedData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching project data: ", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchProjectsDataFromFirestore(); // Fetch project data when component mounts
  }, []);

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

        {/* Show a loading spinner while data is being fetched */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px 0" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projectsData.map((project) => (
              <Col md={4} key={project.id} className="project-card">
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
