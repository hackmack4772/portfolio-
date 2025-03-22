import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../styles/admin-styles.css';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    name: '',
    title: '',
    description: '',
    photoURL: '',
    skills: [],
    education: [],
    experience: []
  });
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [newSkill, setNewSkill] = useState('');
  const [newEducation, setNewEducation] = useState({ institution: '', degree: '', year: '' });
  const [newExperience, setNewExperience] = useState({ company: '', position: '', period: '', description: '' });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, "content", "about");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setAboutData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
        setMessage({ text: 'Failed to load about data', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, [db]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return null;
    
    const storageRef = ref(storage, `profile/${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    const url = await getDownloadURL(storageRef);
    return url;
  };

  const addSkill = () => {
    if (newSkill.trim() === '') return;
    
    setAboutData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill.trim()]
    }));
    
    setNewSkill('');
  };

  const removeSkill = (index) => {
    setAboutData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    if (newEducation.institution.trim() === '' || 
        newEducation.degree.trim() === '' || 
        newEducation.year.trim() === '') return;
    
    setAboutData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
    
    setNewEducation({ institution: '', degree: '', year: '' });
  };

  const removeEducation = (index) => {
    setAboutData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const addExperience = () => {
    if (newExperience.company.trim() === '' || 
        newExperience.position.trim() === '' || 
        newExperience.period.trim() === '') return;
    
    setAboutData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
    
    setNewExperience({ company: '', position: '', period: '', description: '' });
  };

  const removeExperience = (index) => {
    setAboutData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setNewEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveAboutData = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      let updatedData = { ...aboutData };
      
      if (imageFile) {
        const photoURL = await uploadImage();
        if (photoURL) {
          updatedData.photoURL = photoURL;
        }
      }
      
      const docRef = doc(db, "content", "about");
      await updateDoc(docRef, updatedData);
      
      setAboutData(updatedData);
      setImageFile(null);
      setMessage({ text: 'About section updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error saving about data:", error);
      setMessage({ text: 'Failed to save about data', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading about data...</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2>About Me</h2>
        <div className="admin-section-actions">
          <button 
            className="admin-btn admin-btn-primary" 
            onClick={saveAboutData}
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
        <div className="admin-form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={aboutData.name} 
            onChange={handleInputChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Professional Title</label>
          <input 
            type="text" 
            name="title" 
            value={aboutData.title} 
            onChange={handleInputChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Profile Photo</label>
          <div className="admin-profile-photo-container">
            <img 
              src={imagePreview || aboutData.photoURL || 'https://via.placeholder.com/150'} 
              alt="Profile" 
              className="admin-profile-photo-preview"
            />
            <div className="admin-file-upload">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="admin-file-input"
                id="profile-photo"
              />
              <label htmlFor="profile-photo" className="admin-btn admin-btn-secondary">
                Choose Image
              </label>
            </div>
          </div>
        </div>
        
        <div className="admin-form-group">
          <label>Bio Description</label>
          <textarea 
            name="description" 
            value={aboutData.description} 
            onChange={handleInputChange} 
            className="admin-form-control admin-textarea"
            rows="5"
          ></textarea>
        </div>
        
        <div className="admin-section-divider">
          <h3>Skills</h3>
        </div>
        
        <div className="admin-tags-container">
          {aboutData.skills.map((skill, index) => (
            <div key={index} className="admin-tag">
              <span>{skill}</span>
              <button 
                className="admin-tag-remove" 
                onClick={() => removeSkill(index)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        
        <div className="admin-form-inline">
          <input 
            type="text" 
            value={newSkill} 
            onChange={(e) => setNewSkill(e.target.value)} 
            placeholder="Add a skill..."
            className="admin-form-control"
          />
          <button 
            className="admin-btn admin-btn-secondary" 
            onClick={addSkill}
          >
            Add Skill
          </button>
        </div>
        
        <div className="admin-section-divider">
          <h3>Education</h3>
        </div>
        
        <div className="admin-items-list">
          {aboutData.education.map((edu, index) => (
            <div key={index} className="admin-item-card">
              <div className="admin-item-card-body">
                <h4>{edu.institution}</h4>
                <p>{edu.degree} • {edu.year}</p>
              </div>
              <button 
                className="admin-btn admin-btn-danger admin-btn-sm" 
                onClick={() => removeEducation(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        <div className="admin-form-group">
          <label>Institution</label>
          <input 
            type="text" 
            name="institution" 
            value={newEducation.institution} 
            onChange={handleEducationChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Degree/Certification</label>
          <input 
            type="text" 
            name="degree" 
            value={newEducation.degree} 
            onChange={handleEducationChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Year</label>
          <input 
            type="text" 
            name="year" 
            value={newEducation.year} 
            onChange={handleEducationChange} 
            className="admin-form-control"
          />
        </div>
        
        <button 
          className="admin-btn admin-btn-secondary" 
          onClick={addEducation}
        >
          Add Education
        </button>
        
        <div className="admin-section-divider">
          <h3>Work Experience</h3>
        </div>
        
        <div className="admin-items-list">
          {aboutData.experience.map((exp, index) => (
            <div key={index} className="admin-item-card">
              <div className="admin-item-card-body">
                <h4>{exp.position} at {exp.company}</h4>
                <p className="admin-text-muted">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
              <button 
                className="admin-btn admin-btn-danger admin-btn-sm" 
                onClick={() => removeExperience(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        
        <div className="admin-form-group">
          <label>Company</label>
          <input 
            type="text" 
            name="company" 
            value={newExperience.company} 
            onChange={handleExperienceChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Position</label>
          <input 
            type="text" 
            name="position" 
            value={newExperience.position} 
            onChange={handleExperienceChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Time Period</label>
          <input 
            type="text" 
            name="period" 
            value={newExperience.period} 
            onChange={handleExperienceChange} 
            className="admin-form-control"
          />
        </div>
        
        <div className="admin-form-group">
          <label>Description</label>
          <textarea 
            name="description" 
            value={newExperience.description} 
            onChange={handleExperienceChange} 
            className="admin-form-control admin-textarea"
            rows="3"
          ></textarea>
        </div>
        
        <button 
          className="admin-btn admin-btn-secondary" 
          onClick={addExperience}
        >
          Add Experience
        </button>
      </div>
      
      <div className="admin-section-footer">
        <button 
          className="admin-btn admin-btn-primary" 
          onClick={saveAboutData}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default AboutSection; 