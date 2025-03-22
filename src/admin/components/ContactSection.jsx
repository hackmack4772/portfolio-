import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import '../styles/admin-styles.css';

const ContactSection = () => {
  const [contactData, setContactData] = useState({
    email: '',
    phone: '',
    address: '',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: '',
      instagram: '',
      facebook: '',
      youtube: '',
      blog: ''
    },
    resumeURL: ''
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const db = getFirestore();

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, "content", "contact");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setContactData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setMessage({ text: 'Failed to load contact data', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, [db]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value
      }
    }));
  };

  const saveContactData = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const docRef = doc(db, "content", "contact");
      await updateDoc(docRef, contactData);
      
      setMessage({ text: 'Contact information updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error saving contact data:", error);
      setMessage({ text: 'Failed to save contact information', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading contact information...</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2>Contact Information</h2>
        <div className="admin-section-actions">
          <button 
            className="admin-btn admin-btn-primary" 
            onClick={saveContactData}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
      
      {message.text && (
        <div className={`admin-alert admin-alert-${message.type === 'success' ? 'success' : 'danger'}`}>
          {message.text}
        </div>
      )}
      
      <div className="admin-form-container">
        <div className="admin-section-divider">
          <h3>Basic Contact Information</h3>
        </div>
        
        <div className="admin-form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={contactData.email} 
            onChange={handleInputChange} 
            className="admin-form-control"
            placeholder="your@email.com"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            value={contactData.phone} 
            onChange={handleInputChange} 
            className="admin-form-control"
            placeholder="+1 (234) 567-8901"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Address</label>
          <textarea 
            name="address" 
            value={contactData.address} 
            onChange={handleInputChange} 
            className="admin-form-control admin-textarea"
            rows="3"
            placeholder="Your address (optional)"
          ></textarea>
        </div>
        
        <div className="admin-form-group">
          <label>Resume URL</label>
          <input 
            type="url" 
            name="resumeURL" 
            value={contactData.resumeURL} 
            onChange={handleInputChange} 
            className="admin-form-control"
            placeholder="https://example.com/your-resume.pdf"
          />
          <small className="admin-form-text">Link to your downloadable resume file.</small>
        </div>
        
        <div className="admin-section-divider">
          <h3>Social Media Links</h3>
        </div>
        
        <div className="admin-form-group">
          <label>GitHub</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-github"></i>
            </span>
            <input 
              type="url" 
              name="github" 
              value={contactData.socialLinks.github} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://github.com/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>LinkedIn</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-linkedin"></i>
            </span>
            <input 
              type="url" 
              name="linkedin" 
              value={contactData.socialLinks.linkedin} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://linkedin.com/in/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>Twitter</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-twitter"></i>
            </span>
            <input 
              type="url" 
              name="twitter" 
              value={contactData.socialLinks.twitter} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://twitter.com/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>Instagram</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-instagram"></i>
            </span>
            <input 
              type="url" 
              name="instagram" 
              value={contactData.socialLinks.instagram} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://instagram.com/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>Facebook</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-facebook"></i>
            </span>
            <input 
              type="url" 
              name="facebook" 
              value={contactData.socialLinks.facebook} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://facebook.com/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>YouTube</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-youtube"></i>
            </span>
            <input 
              type="url" 
              name="youtube" 
              value={contactData.socialLinks.youtube} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://youtube.com/channel/yourusername"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>Personal Blog / Website</label>
          <div className="admin-input-group">
            <span className="admin-input-group-text">
              <i className="fa fa-globe"></i>
            </span>
            <input 
              type="url" 
              name="blog" 
              value={contactData.socialLinks.blog} 
              onChange={handleSocialLinkChange} 
              className="admin-form-control"
              placeholder="https://yourblog.com"
            />
          </div>
        </div>
      </div>
      
      <div className="admin-section-footer">
        <button 
          className="admin-btn admin-btn-primary" 
          onClick={saveContactData}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default ContactSection; 