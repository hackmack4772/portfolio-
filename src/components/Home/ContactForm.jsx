import React, { useState } from "react";
import "./ContactUs.css"; // Assuming you create a separate CSS file for styles
import { db, addDoc, collection } from "../../config/firebase"; // Import Firestore functions

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contactMessages"), formData);
      alert(`Thank you, ${formData.name}! Your message has been sent.`);
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="contact_inner">
      <div className="slogan">Connecting People, Building Dreams</div>
      <div className="row">
        <div className="col-lg-12">
          <div className="contact_form_inner">
            <form onSubmit={handleSubmit}>
              <div className="contact_field">
                <h3>Contact Us</h3>
                <p>
                  Feel Free to contact us any time. We will get back to you as
                  soon as we can!
                </p>
                <input
                  type="text"
                  name="name"
                  className="form-control form-group"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control form-group"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  className="form-control form-group"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="contact_form_submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact_info_sec">
        <h4>Contact Info</h4>
        <div className="d-flex info_single align-items-center">
          <i className="fas fa-headset"></i>
          <span>+91 9596581274</span>
        </div>
        <div className="d-flex info_single align-items-center">
          <i className="fas fa-envelope-open-text"></i>
          <span>hackmackcrew4772@gmail.com</span>
        </div>
        <div className="d-flex info_single align-items-center">
          <i className="fas fa-map-marked-alt"></i>
          <span>Handwara jammu and kashmir ,193302</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
