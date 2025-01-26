import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import { db } from "../config/firebase";

function AdminProjects() {
  const [projectsData, setProjectsData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState({
    id: "",
    title: "",
    description: "",
    imgPath: "",
    ghLink: "",
    demoLink: "",
  });

  // Fetch projects data from Firestore
  const fetchProjectsData = async () => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const projectsRef = collection(hackmackDocRef, "projectsData");
      const querySnapshot = await getDocs(projectsRef);

      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjectsData(fetchedData);
    } catch (error) {
      console.error("Error fetching projects: ", error);
    }
  };

  // Save or update project in Firestore
  const handleSaveProject = async () => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const projectsRef = collection(hackmackDocRef, "projectsData");

      if (currentProject.id) {
        // Update existing project
        const projectDoc = doc(projectsRef, currentProject.id);
        await updateDoc(projectDoc, currentProject);
      } else {
        // Add new project
        const newDocRef = doc(projectsRef, currentProject.title); // Use title as ID
        await setDoc(newDocRef, currentProject);
      }

      fetchProjectsData();
      setShowModal(false);
    } catch (error) {
      console.error("Error saving project: ", error);
    }
  };

  // Delete project from Firestore
  const handleDeleteProject = async (id) => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const projectsRef = collection(hackmackDocRef, "projectsData");
      const projectDoc = doc(projectsRef, id);

      await deleteDoc(projectDoc);
      fetchProjectsData();
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  // Open the modal to add or edit a project
  const handleEditProject = (project) => {
    setCurrentProject(
      project || {
        id: "",
        title: "",
        description: "",
        imgPath: "",
        ghLink: "",
        demoLink: "",
      }
    );
    setShowModal(true);
  };

  useEffect(() => {
    fetchProjectsData();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Manage Projects</h1>
      <Button className="mb-3" onClick={() => handleEditProject(null)}>
        Add New Project
      </Button>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>
                <img
                  src={project.imgPath}
                  alt={project.title}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEditProject(project)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteProject(project.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding/Editing Project */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentProject.id ? "Edit Project" : "Add New Project"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={currentProject.title}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={currentProject.description}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formImgPath" className="mb-3">
              <Form.Label>Image Path</Form.Label>
              <Form.Control
                type="text"
                value={currentProject.imgPath}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    imgPath: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formGhLink" className="mb-3">
              <Form.Label>GitHub Link</Form.Label>
              <Form.Control
                type="text"
                value={currentProject.ghLink}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    ghLink: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formDemoLink" className="mb-3">
              <Form.Label>Demo Link</Form.Label>
              <Form.Control
                type="text"
                value={currentProject.demoLink}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    demoLink: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdminProjects;
