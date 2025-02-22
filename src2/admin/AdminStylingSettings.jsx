import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../src/config/firebase";
import "./admin.css";

const AdminStylingSettings = () => {
  const [stylingSettings, setStylingSettings] = useState({
    backgroundColor: "#ffffff", // Default color
    backgroundImage: "",
    backgroundImagePosition: "",
    backgroundImageRepeat: "",
    headingFontFamily: "",
    headingFontSize: "",
    headingFontColor: "#000000", // Default color
    bodyFontFamily: "",
    bodyFontSize: "",
    bodyFontColor: "#000000", // Default color
    labelFontSize: "",
    formBackgroundColor: "#ffffff", // Default color
    buttonBackgroundColor: "#007bff", // Default color
    buttonTextColor: "#ffffff", // Default color
    buttonFontFamily: "",
    buttonFontSize: "",
    buttonBorderRadius: "",
    footerBackgroundColor: "#f8f9fa", // Default color
    footerTextColor: "#000000", // Default color
  });

  const settingsRef = doc(db, "siteSettings", "styling");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStylingSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(settingsRef, stylingSettings);
      alert("Styling settings updated successfully!");
    } catch (e) {
      console.error("Error saving styling settings: ", e);
      alert("There was an error updating the settings. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="contact-inner-styling">
      <h2>Styling Settings</h2>

      <h3>Background</h3>
      <Form.Group controlId="formBackgroundColor">
        <Form.Label>Background Color</Form.Label>
        <Form.Control
          type="color"
          name="backgroundColor"
          value={stylingSettings.backgroundColor}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBackgroundImage">
        <Form.Label>Background Image URL</Form.Label>
        <Form.Control
          type="text"
          name="backgroundImage"
          value={stylingSettings.backgroundImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBackgroundImagePosition">
        <Form.Label>Background Image Position</Form.Label>
        <Form.Control
          type="text"
          name="backgroundImagePosition"
          value={stylingSettings.backgroundImagePosition}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBackgroundImageRepeat">
        <Form.Label>Background Image Repeat</Form.Label>
        <Form.Control
          type="text"
          name="backgroundImageRepeat"
          value={stylingSettings.backgroundImageRepeat}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Text Styles</h3>
      <Form.Group controlId="formHeadingFontFamily">
        <Form.Label>Heading Font Family</Form.Label>
        <Form.Control
          type="text"
          name="headingFontFamily"
          value={stylingSettings.headingFontFamily}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formHeadingFontSize">
        <Form.Label>Heading Font Size</Form.Label>
        <Form.Control
          type="text"
          name="headingFontSize"
          value={stylingSettings.headingFontSize}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formHeadingFontColor">
        <Form.Label>Heading Font Color</Form.Label>
        <Form.Control
          type="color"
          name="headingFontColor"
          value={stylingSettings.headingFontColor}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Body Styles</h3>
      <Form.Group controlId="formBodyFontFamily">
        <Form.Label>Body Font Family</Form.Label>
        <Form.Control
          type="text"
          name="bodyFontFamily"
          value={stylingSettings.bodyFontFamily}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBodyFontSize">
        <Form.Label>Body Font Size</Form.Label>
        <Form.Control
          type="text"
          name="bodyFontSize"
          value={stylingSettings.bodyFontSize}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBodyFontColor">
        <Form.Label>Body Font Color</Form.Label>
        <Form.Control
          type="color"
          name="bodyFontColor"
          value={stylingSettings.bodyFontColor}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Button Styling</h3>
      <Form.Group controlId="formButtonBackgroundColor">
        <Form.Label>Button Background Color</Form.Label>
        <Form.Control
          type="color"
          name="buttonBackgroundColor"
          value={stylingSettings.buttonBackgroundColor}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formButtonTextColor">
        <Form.Label>Button Text Color</Form.Label>
        <Form.Control
          type="color"
          name="buttonTextColor"
          value={stylingSettings.buttonTextColor}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Footer Styles</h3>
      <Form.Group controlId="formFooterBackgroundColor">
        <Form.Label>Footer Background Color</Form.Label>
        <Form.Control
          type="color"
          name="footerBackgroundColor"
          value={stylingSettings.footerBackgroundColor}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formFooterTextColor">
        <Form.Label>Footer Text Color</Form.Label>
        <Form.Control
          type="color"
          name="footerTextColor"
          value={stylingSettings.footerTextColor}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit">Save Styling</Button>
    </Form>
  );
};

export default AdminStylingSettings;
