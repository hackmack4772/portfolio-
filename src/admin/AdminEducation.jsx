import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";

function AdminEducation() {
  const [educationData, setEducationData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEducation, setCurrentEducation] = useState({
    id: "",
    title: "",
    institution: "",
    year: "",
    score: "",
    image: "",
  });

  // Fetch education data from Firestore
  const fetchEducationData = async () => {
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

  // Save or update education data in Firestore
  const handleSaveEducation = async () => {
    try {
      // Correct way to reference a subcollection
      const educationRef = collection(
        db,
        "hackmack",
        "user_education",
        "educationData"
      );

      if (currentEducation.id) {
        // Update an existing document
        const educationDoc = doc(educationRef, currentEducation.id); // Reference existing document
        await updateDoc(educationDoc, {
          title: currentEducation.title,
          institution: currentEducation.institution,
          year: currentEducation.year,
          score: currentEducation.score,
          image: currentEducation.image,
        });
      } else {
        // Add a new document
        const newEducationDoc = doc(educationRef); // Generate a new document reference
        await setDoc(newEducationDoc, {
          title: currentEducation.title,
          institution: currentEducation.institution,
          year: currentEducation.year,
          score: currentEducation.score,
          image: currentEducation.image,
        });
      }

      // Refresh data and close modal
      fetchEducationData(); // Refresh the list of education items
      setShowModal(false); // Close the modal
    } catch (error) {
      console.error("Error saving education data: ", error);
    }
  };

  // Delete education entry from Firestore
  const handleDeleteEducation = async (id) => {
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_education");
      const educationRef = collection(hackmackDocRef, "educationData");
      const educationDoc = doc(educationRef, id);

      await deleteDoc(educationDoc);
      fetchEducationData();
    } catch (error) {
      console.error("Error deleting education entry: ", error);
    }
  };

  // Open modal to add or edit an entry
  const handleEditEducation = (education) => {
    setCurrentEducation(
      education || {
        id: "",
        title: "",
        institution: "",
        year: "",
        score: "",
        image: "",
      }
    );
    setShowModal(true);
  };

  useEffect(() => {
    fetchEducationData();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Admin - Manage Education</h1>
      <Button className="mb-3" onClick={() => handleEditEducation(null)}>
        Add New Education
      </Button>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Institution</th>
            <th>Year</th>
            <th>Score</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((education) => (
            <tr key={education.id}>
              <td>{education.title}</td>
              <td>{education.institution}</td>
              <td>{education.year}</td>
              <td>{education.score}</td>
              <td>
                <img
                  src={education.image}
                  alt={education.title}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleEditEducation(education)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteEducation(education.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding/Editing Education */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentEducation.id ? "Edit Education" : "Add New Education"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={currentEducation.title}
                onChange={(e) =>
                  setCurrentEducation({
                    ...currentEducation,
                    title: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formInstitution" className="mb-3">
              <Form.Label>Institution</Form.Label>
              <Form.Control
                type="text"
                value={currentEducation.institution}
                onChange={(e) =>
                  setCurrentEducation({
                    ...currentEducation,
                    institution: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formYear" className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                value={currentEducation.year}
                onChange={(e) =>
                  setCurrentEducation({
                    ...currentEducation,
                    year: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formScore" className="mb-3">
              <Form.Label>Score</Form.Label>
              <Form.Control
                type="text"
                value={currentEducation.score}
                onChange={(e) =>
                  setCurrentEducation({
                    ...currentEducation,
                    score: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={currentEducation.image}
                onChange={(e) =>
                  setCurrentEducation({
                    ...currentEducation,
                    image: e.target.value,
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
          <Button variant="primary" onClick={handleSaveEducation}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdminEducation;
