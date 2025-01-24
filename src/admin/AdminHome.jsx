import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../config/firebase"; // Assuming firebase is configured here
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

function AdminPanel() {
  const [personalData, setPersonalData] = useState({
    name: "",
    description: "",
    socialLinks: {
      github: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  });

  // Handle input changes for both regular and nested fields (social links)
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("socialLinks")) {
      const key = name.split(".")[1]; // Extract the social media key (e.g., github)
      setPersonalData((prevData) => ({
        ...prevData,
        socialLinks: { ...prevData.socialLinks, [key]: value },
      }));
    } else {
      setPersonalData({ ...personalData, [name]: value });
    }
  };

  // Save the data to Firestore
  const handleSavePersonalData = async () => {
    try {
      // Correct Firestore document reference for the specified path
      const personalRef = doc(
        db,
        "hackmack",
        "personal_data",
        "user_profile",
        "home"
      );

      // Set document data in Firestore
      await setDoc(personalRef, personalData);

      // If successful, show an alert
      alert("Personal data saved successfully!");
    } catch (error) {
      // Log error to debug and show an alert
      console.error("Error saving personal data: ", error);
      alert("Failed to save data. Please check the console for errors.");
    }
  };

  // Fetch the data from Firestore (if needed)
  const fetchHomeData = async () => {
    try {
      const personalRef = doc(
        db,
        "hackmack",
        "personal_data",
        "user_profile",
        "home"
      );
      const docSnap = await getDocs(personalRef);

      if (docSnap.exists()) {
        setPersonalData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <div>
      <h2>Admin Panel - Update Personal Data</h2>
      <Form>
        {/* Name Field */}
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={personalData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Description Field */}
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            name="description"
            value={personalData.description}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Social Links Section */}
        <h4>Social Links</h4>
        <Form.Group controlId="formGithub">
          <Form.Label>GitHub URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter GitHub URL"
            name="socialLinks.github"
            value={personalData.socialLinks.github}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formTwitter">
          <Form.Label>Twitter URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Twitter URL"
            name="socialLinks.twitter"
            value={personalData.socialLinks.twitter}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLinkedIn">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter LinkedIn URL"
            name="socialLinks.linkedin"
            value={personalData.socialLinks.linkedin}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formInstagram">
          <Form.Label>Instagram URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Instagram URL"
            name="socialLinks.instagram"
            value={personalData.socialLinks.instagram}
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Save Button */}
        <Button variant="primary" onClick={handleSavePersonalData}>
          Save Personal Data
        </Button>
      </Form>
    </div>
  );
}

export default AdminPanel;
