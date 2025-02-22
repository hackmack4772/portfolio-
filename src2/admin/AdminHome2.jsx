import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../../src/config/firebase"; // Firebase config import
import { doc, getDoc, setDoc } from "firebase/firestore"; // Firestore methods
import { Editor } from "@tinymce/tinymce-react"; // Import TinyMCE Editor

function AdminHome2() {
  const [home2Data, setHome2Data] = useState({
    heading: "",
    introduction: "",
    skills: "",
    hobbies: "",
    skills2: "",
    imageUrl: "",
  });

  const home2Ref = doc(db, "home", "home2"); // Reference to the home2 document

  // Handle input changes for the fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHome2Data({ ...home2Data, [name]: value });
  };

  // Handle TinyMCE editor change
  const handleEditorChange = (content, editor) => {
    setHome2Data({ ...home2Data, introduction: content });
  };

  // Save Home2 data to Firebase
  const handleSaveHome2Data = async () => {
    try {
      await setDoc(home2Ref, home2Data);
      alert("Home2 data saved successfully!");
    } catch (error) {
      console.error("Error saving Home2 data: ", error);
      alert("Failed to save data. Please check the console for errors.");
    }
  };

  // Fetch Home2 data from Firestore
  const fetchHome2Data = async () => {
    try {
      const docSnap = await getDoc(home2Ref);
      if (docSnap.exists()) {
        setHome2Data(docSnap.data()); // Set fetched data into the state
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching Home2 data: ", error);
    }
  };

  useEffect(() => {
    fetchHome2Data();
  }, []);

  return (
    <div>
      <h2> - Update Home2 Data</h2>
      <Form>
        {/* Heading Field */}
        <Form.Group controlId="formHeading">
          <Form.Label>Heading</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Heading"
            name="heading"
            value={home2Data.heading}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Introduction Field */}
        <Form.Group controlId="formIntroduction">
          <Form.Label>Introduction</Form.Label>
          <Editor
  apiKey="wcs0tr03ex8aael6x0srckygt7derbszhies2gq7kevl31n3"
  value={home2Data.introduction}
  init={{
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
      'code' // Ensure 'code' is included
    ],
    toolbar:
      'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat | code', // Ensure 'code' is in the toolbar
  }}
  onEditorChange={handleEditorChange}
/>

        </Form.Group>

        {/* Skills Field */}
        <Form.Group controlId="formSkills">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Skills"
            name="skills"
            value={home2Data.skills}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Hobbies Field */}
        <Form.Group controlId="formHobbies">
          <Form.Label>Hobbies</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Hobbies"
            name="hobbies"
            value={home2Data.hobbies}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formHobbies">
          <Form.Label>Hobbies section2</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Hobbies section 2"
            name="skills2"
            value={home2Data.skills2}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Image URL Field */}
        <Form.Group controlId="formImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Image URL"
            name="imageUrl"
            value={home2Data.imageUrl}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Save Button */}
        <Button variant="primary" onClick={handleSaveHome2Data}>
          Save Home2 Data
        </Button>
      </Form>
    </div>
  );
}

export default AdminHome2;
