import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import "./admin.css";
import AdminStylingSettings from "./AdminStylingSettings";

const ContactUsSettings = () => {
  const [contactSettings, setContactSettings] = useState({
    pageTitle: "",
    introText: "",
    successMessage: "",
    errorMessage: "",
    contactDetails: {
      email: "",
      phone: "",
      address: "",
      socialMediaLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
      },
      workingHours: "",
      googleMapLocation: "",
    },
    styling: {
      backgroundColor: "",
      backgroundImage: "",
      backgroundImagePosition: "",
      backgroundImageRepeat: "",
      headingFontFamily: "",
      headingFontSize: "",
      headingFontColor: "",
      bodyFontFamily: "",
      bodyFontSize: "",
      bodyFontColor: "",
      labelFontSize: "",
      formBackgroundColor: "",
      buttonBackgroundColor: "",
      buttonTextColor: "",
      buttonFontFamily: "",
      buttonFontSize: "",
      buttonBorderRadius: "",
      footerBackgroundColor: "",
      footerTextColor: "",
    },
    formFields: {
      enableNameField: true,
      enableEmailField: true,
      enablePhoneField: false,
      enableSubjectField: false,
      enableMessageField: true,
      labels: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
      },
    },
    advanced: {
      enableRecaptcha: false,
      recaptchaSiteKey: "",
    },
  });

  const settingsRef = doc(db, "siteSettings", "contactUs");

  useEffect(() => {
    // Fetch existing settings from Firestore
    const fetchSettings = async () => {
      const docSnap = await getDoc(settingsRef);
      if (docSnap.exists()) {
        setContactSettings(docSnap.data());
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactSettings((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setContactSettings((prevState) => ({
      ...prevState,
      contactDetails: {
        ...prevState.contactDetails,
        [name]: value,
      },
    }));
  };

  const handleStylingChange = (e) => {
    const { name, value } = e.target;
    setContactSettings((prevState) => ({
      ...prevState,
      styling: {
        ...prevState.styling,
        [name]: value,
      },
    }));
  };

  const handleFormFieldsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactSettings((prevState) => ({
      ...prevState,
      formFields: {
        ...prevState.formFields,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(settingsRef, contactSettings);
      alert("Contact Us settings updated successfully!");
    } catch (e) {
      console.error("Error saving settings: ", e);
      alert("There was an error updating the settings. Please try again.");
    }
  };

  return (
    <div className="contact-setting">
      <Form onSubmit={handleSubmit} className="contact-inner-setting">
        <h2>Contact Us Page Settings</h2>

        {/* General Content */}
        <h3>General Content</h3>
        <Form.Group controlId="formPageTitle">
          <Form.Label>Page Title</Form.Label>
          <Form.Control
            type="text"
            name="pageTitle"
            value={contactSettings.pageTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formIntroText">
          <Form.Label>Introductory Text</Form.Label>
          <Form.Control
            type="text"
            name="introText"
            value={contactSettings.introText}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formSuccessMessage">
          <Form.Label>Success Message</Form.Label>
          <Form.Control
            type="text"
            name="successMessage"
            value={contactSettings.successMessage}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formErrorMessage">
          <Form.Label>Error Message</Form.Label>
          <Form.Control
            type="text"
            name="errorMessage"
            value={contactSettings.errorMessage}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Contact Details */}
        <h3>Contact Details</h3>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={contactSettings.contactDetails.email}
            onChange={handleContactDetailsChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={contactSettings.contactDetails.phone}
            onChange={handleContactDetailsChange}
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Physical Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={contactSettings.contactDetails.address}
            onChange={handleContactDetailsChange}
          />
        </Form.Group>

        {/* Form Fields */}
        <h3>Form Fields</h3>
        <Row>
          <Col>
            <Form.Check
              type="checkbox"
              label="Enable Name Field"
              name="enableNameField"
              checked={contactSettings.formFields.enableNameField}
              onChange={handleFormFieldsChange}
            />
            <Form.Check
              type="checkbox"
              label="Enable Email Field"
              name="enableEmailField"
              checked={contactSettings.formFields.enableEmailField}
              onChange={handleFormFieldsChange}
            />
            <Form.Check
              type="checkbox"
              label="Enable Phone Field"
              name="enablePhoneField"
              checked={contactSettings.formFields.enablePhoneField}
              onChange={handleFormFieldsChange}
            />
            <Form.Check
              type="checkbox"
              label="Enable Subject Field"
              name="enableSubjectField"
              checked={contactSettings.formFields.enableSubjectField}
              onChange={handleFormFieldsChange}
            />
            <Form.Check
              type="checkbox"
              label="Enable Message Field"
              name="enableMessageField"
              checked={contactSettings.formFields.enableMessageField}
              onChange={handleFormFieldsChange}
            />
          </Col>
        </Row>

        {/* Advanced Settings */}
        <h3>Advanced Settings</h3>
        <Form.Group controlId="formEnableRecaptcha">
          <Form.Check
            type="checkbox"
            label="Enable Google reCAPTCHA"
            name="enableRecaptcha"
            checked={contactSettings.advanced.enableRecaptcha}
            onChange={handleFormFieldsChange}
          />
        </Form.Group>
        {contactSettings.advanced.enableRecaptcha && (
          <Form.Group controlId="formRecaptchaSiteKey">
            <Form.Label>Google reCAPTCHA Site Key</Form.Label>
            <Form.Control
              type="text"
              name="recaptchaSiteKey"
              value={contactSettings.advanced.recaptchaSiteKey}
              onChange={handleChange}
            />
          </Form.Group>
        )}

        {/* Submit Button */}
        <Button type="submit">Save Settings</Button>
      </Form>

      <AdminStylingSettings />
    </div>
  );
};

export default ContactUsSettings;
