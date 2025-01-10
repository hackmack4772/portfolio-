import React, { useState } from 'react';
import './ContactUs.css'; // Assuming you create a separate CSS file for styles

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    console.log('Form Data:', formData); // You can replace this with an API call or another action
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    
    // Optionally reset the form after submission
    setFormData({ name: '', email: '', message: '' });
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
                <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>
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
        {/* <div className="col-lg-4">
          <div className="right_contact_social_icon d-flex align-items-end">
            <div className="social_item_inner d-flex">
              <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </div>
          </div>
        </div> */}
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
