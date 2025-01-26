import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { db } from "../config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function AdminPanel() {
  const [personalData, setPersonalData] = useState({
    name: "",
    description: "",
    tagline: "",
    socialLinks: {
      github: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    typewriterStrings: [], // New field for typewriter strings
  });

  const homeRef = doc(db, "home", "homeData"); // Reference to specific document in Firestore

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

  // Save personal data to Firebase
  const handleSavePersonalData = async () => {
    try {
      await setDoc(homeRef, personalData);
      alert("Personal data saved successfully!");
    } catch (error) {
      console.error("Error saving personal data: ", error);
      alert("Failed to save data. Please check the console for errors.");
    }
  };

  // Fetch personal data from Firebase
  const fetchHomeData = async () => {
    try {
      const docSnap = await getDoc(homeRef);

      if (docSnap.exists()) {
        setPersonalData(docSnap.data()); // Set fetched data into the state
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
    <Form>
      <h2> Update Personal Data</h2>

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

      {/* Tagline Field */}
      <Form.Group controlId="formTagline">
        <Form.Label>Tagline</Form.Label>
        <Form.Control
          type="text"
          placeholder="I am..."
          name="tagline"
          value={personalData.tagline}
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

      {/* Typewriter Strings */}
      <Form.Group controlId="formTypewriterStrings">
        <Form.Label>Typewriter Strings (comma separated)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter typewriter strings"
          name="typewriterStrings"
          value={personalData.typewriterStrings?.join(", ")}
          onChange={(e) => {
            const strings = e.target.value.split(",").map((str) => str.trim());
            setPersonalData((prevData) => ({
              ...prevData,
              typewriterStrings: strings,
            }));
          }}
        />
      </Form.Group>

      {/* Save Button */}
      <Button variant="primary" onClick={handleSavePersonalData}>
        Save Personal Data
      </Button>
    </Form>
  );
}

export default AdminPanel;
