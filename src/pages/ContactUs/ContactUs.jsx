import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";
import { useLoading } from "../../Context/LoadingContext";
import emailjs from "@emailjs/browser";
import HelmetWrapper from "../../components/HelmetWrapper";

function ContactUs() {
  const { handleLoading } = useLoading();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  const formRef = useRef();

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Initialize formik
  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        handleLoading(true);
        setIsButtonAnimating(true);
        
        await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        
        setFormSubmitted(true);
        setSubmitError(null);
        resetForm();
      } catch (error) {
        console.error("Email send error:", error);
        setSubmitError("Failed to send message. Please try again later.");
      } finally {
        handleLoading(false);
        setIsButtonAnimating(false);
      }
    },
  });

  // Handle field focus animation
  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  // Handle field blur animation
  const handleBlur = (e) => {
    formik.handleBlur(e);
    setActiveField(null);
  };

  return (
    <Container fluid className="contact-section">
      <HelmetWrapper>
        <title>Contact Me | My Portfolio</title>
        <meta name="description" content="Get in touch with me for collaborations or inquiries." />
      </HelmetWrapper>
      
      <Container className="contact-content">
        <h1 className="contact-heading">
          Get In <span className="accent-text">Touch</span>
        </h1>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        {formSubmitted ? (
          <div className="success-message">
            <div className="checkmark-circle">
              <div className="checkmark draw"></div>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
            <Button 
              onClick={() => setFormSubmitted(false)} 
              className="contact-button"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Row className="contact-form-container">
            <Col md={5} className="contact-form-left">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Location</h4>
                    <p>Handwara, Jammu and kashmir</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Email</h4>
                    <p>loneaamir6@gmail.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Phone</h4>
                    <p>+91-9596581274</p>
                  </div>
                </div>
                <div className="contact-social">
                  <a href="https://github.com/hackmack4772" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/aamir-saleem-lone/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/hackmack4772" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a> */}
                </div>
              </div>
            </Col>
            <Col md={7} className="contact-form-right">
              <Form ref={formRef} onSubmit={formik.handleSubmit} className="contact-form">
                {submitError && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i> {submitError}
                  </div>
                )}
                
                <Form.Group className="mb-4">
                  <div className={`form-input-group ${activeField === 'user_name' ? 'focused' : ''} ${
                    formik.touched.user_name && formik.errors.user_name 
                      ? 'has-error' 
                      : formik.touched.user_name && !formik.errors.user_name 
                      ? 'has-success' 
                      : ''
                  }`}>
                    <Form.Label>Name</Form.Label>
                    <span className="input-icon">
                      <i className="fas fa-user"></i>
                    </span>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      value={formik.values.user_name}
                      onChange={formik.handleChange}
                      onFocus={() => handleFocus('user_name')}
                      onBlur={handleBlur}
                    />
                    <span className="validation-icon">
                      {formik.touched.user_name && formik.errors.user_name ? (
                        <i className="fas fa-times-circle error-icon"></i>
                      ) : formik.touched.user_name && !formik.errors.user_name ? (
                        <i className="fas fa-check-circle success-icon"></i>
                      ) : null}
                    </span>
                  </div>
                  {formik.touched.user_name && formik.errors.user_name && (
                    <div className="error-feedback">{formik.errors.user_name}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className={`form-input-group ${activeField === 'user_email' ? 'focused' : ''} ${
                    formik.touched.user_email && formik.errors.user_email 
                      ? 'has-error' 
                      : formik.touched.user_email && !formik.errors.user_email 
                      ? 'has-success' 
                      : ''
                  }`}>
                    <Form.Label>Email</Form.Label>
                    <span className="input-icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      value={formik.values.user_email}
                      onChange={formik.handleChange}
                      onFocus={() => handleFocus('user_email')}
                      onBlur={handleBlur}
                    />
                    <span className="validation-icon">
                      {formik.touched.user_email && formik.errors.user_email ? (
                        <i className="fas fa-times-circle error-icon"></i>
                      ) : formik.touched.user_email && !formik.errors.user_email ? (
                        <i className="fas fa-check-circle success-icon"></i>
                      ) : null}
                    </span>
                  </div>
                  {formik.touched.user_email && formik.errors.user_email && (
                    <div className="error-feedback">{formik.errors.user_email}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className={`form-input-group ${activeField === 'subject' ? 'focused' : ''} ${
                    formik.touched.subject && formik.errors.subject 
                      ? 'has-error' 
                      : formik.touched.subject && !formik.errors.subject 
                      ? 'has-success' 
                      : ''
                  }`}>
                    <Form.Label>Subject</Form.Label>
                    <span className="input-icon">
                      <i className="fas fa-heading"></i>
                    </span>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                    />
                    <span className="validation-icon">
                      {formik.touched.subject && formik.errors.subject ? (
                        <i className="fas fa-times-circle error-icon"></i>
                      ) : formik.touched.subject && !formik.errors.subject ? (
                        <i className="fas fa-check-circle success-icon"></i>
                      ) : null}
                    </span>
                  </div>
                  {formik.touched.subject && formik.errors.subject && (
                    <div className="error-feedback">{formik.errors.subject}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className={`form-input-group ${activeField === 'message' ? 'focused' : ''} ${
                    formik.touched.message && formik.errors.message 
                      ? 'has-error' 
                      : formik.touched.message && !formik.errors.message 
                      ? 'has-success' 
                      : ''
                  }`}>
                    <Form.Label>Message</Form.Label>
                    <span className="input-icon textarea-icon">
                      <i className="fas fa-comment"></i>
                    </span>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                    />
                    <span className="validation-icon textarea-validation">
                      {formik.touched.message && formik.errors.message ? (
                        <i className="fas fa-times-circle error-icon"></i>
                      ) : formik.touched.message && !formik.errors.message ? (
                        <i className="fas fa-check-circle success-icon"></i>
                      ) : null}
                    </span>
                  </div>
                  {formik.touched.message && formik.errors.message && (
                    <div className="error-feedback">{formik.errors.message}</div>
                  )}
                </Form.Group>

                <Button 
                  type="submit" 
                  className={`contact-button ${isButtonAnimating ? 'button-submitting' : ''}`}
                  disabled={formik.isSubmitting}
                >
                  <span className="button-text">
                    {formik.isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="button-icon">
                    <i className={`fas ${formik.isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                  </span>
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default ContactUs;
