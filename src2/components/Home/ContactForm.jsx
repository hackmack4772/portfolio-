import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import { doc, getDoc, addDoc, collection } from "@firebase/firestore";
import { db } from "../../../src/config/firebase";

const ContactUs = () => {
  const [settings, setSettings] = useState({});
  const [style, setStyle] = useState({});
  const [apiStatus, setApiStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      // Fetch settings from Firestore
      const settingsRef = doc(db, "siteSettings", "contactUs");
      const docSnap = await getDoc(settingsRef);
      if (docSnap.exists()) {
        console.log(docSnap.data(), "docSnap.data()");
        setSettings(docSnap.data());
      } else {
        console.log("No settings found!");
      }

      // Fetch styling settings from Firestore
      /*const stylingRef = doc(db, "siteSettings", "styling");
      const docStyleSnap = await getDoc(stylingRef);
      if (docStyleSnap.exists()) {
        setStyle(docStyleSnap.data());
      } else {
        console.log("No styling settings found!");
      }*/
      setApiStatus(true);
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "contactMessages"), formData);
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  // Default styling with fallback values
  const contactUsStyles = {
    backgroundColor: style.backgroundColor || "#a7bcec",
    backgroundImage: style.backgroundImage
      ? `url(${style.backgroundImage})`
      : "none",
    backgroundPosition: style.backgroundImagePosition || "center",
    backgroundRepeat: style.backgroundImageRepeat || "no-repeat",
    color: settings.pageTextColor || "#333",
  };

  const formStyles = {
    backgroundColor: style.formBackgroundColor || "#ffffff",
    color: style.formTextColor || "#333",
  };

  const buttonStyles = {
    backgroundColor: style.buttonBackgroundColor || "#007bff",
    color: style.buttonTextColor || "#d3693c",
  };

  const footerStyles = {
    backgroundColor: style.footerBackgroundColor || "#f8f9fa",
    color: style.footerTextColor || "#ffa3a3",
  };

  return (
    apiStatus && (
      <div className="contact_inner" /*style={contactUsStyles}*/>
        <div className="slogan">
          {settings.pageTitle || "Connecting People, Building Dreams"}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="contact_form_inner" /*style={formStyles}*/>
              <form onSubmit={handleSubmit}>
                <div className="contact_field">
                  <p>
                    {settings.introText ||
                      "Feel Free to contact us any time..."}
                  </p>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-group"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required={settings.formFields?.enableNameField}
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control form-group"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required={settings.formFields?.enableEmailField}
                  />
                  <textarea
                    name="message"
                    className="form-control form-group"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required={settings.formFields?.enableMessageField}
                  ></textarea>
                  <button
                    type="submit"
                    className="contact_form_submit"
                    /*style={buttonStyles}*/
                  >
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
            <span>{settings.contactDetails?.phone || "+91 9596581274"}</span>
          </div>
          <div className="d-flex info_single align-items-center">
            <i className="fas fa-envelope-open-text"></i>
            <span>
              {settings.contactDetails?.email || "hackmackcrew4772@gmail.com"}
            </span>
          </div>
          <div className="d-flex info_single align-items-center">
            <i className="fas fa-map-marked-alt"></i>
            <span>
              {settings.contactDetails?.address ||
                "Handwara, Jammu and Kashmir, 193302"}
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default ContactUs;
