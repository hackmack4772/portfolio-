import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { 
  User, 
  Save, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  GraduationCap, 
  Briefcase, 
  FileText,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

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
    const storageRef = ref(storage, `profile/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
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
    setNewEducation(prev => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setNewExperience(prev => ({ ...prev, [name]: value }));
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
      await setDoc(docRef, updatedData, { merge: true });
      
      setAboutData(updatedData);
      setImageFile(null);
      setMessage({ text: 'Bio & personal details updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error saving about data:", error);
      setMessage({ text: 'Failed to update about data settings.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Loading Profile Fields...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* Header action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-base flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <span>Bio & Profile Config</span>
          </h2>
          <p className="text-xs text-text-muted mt-1">Configure your personal presentation, profile avatar, and core details.</p>
        </div>
        <button 
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_12px_rgba(12,251,255,0.25)] transition-all cursor-pointer shrink-0 self-start sm:self-center"
          onClick={saveAboutData}
          disabled={saving}
        >
          {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          <span>{saving ? 'Syncing...' : 'Save Profile'}</span>
        </button>
      </div>

      {/* Messages */}
      {message.text && (
        <div className={`flex items-center gap-2 p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'border-green-500/30 bg-green-500/10 text-green-500' 
            : 'border-red-500/30 bg-red-500/10 text-red-500'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-4.5 h-4.5 shrink-0" /> : <AlertCircle className="w-4.5 h-4.5 shrink-0" />}
          <span className="text-xs font-medium">{message.text}</span>
        </div>
      )}

      {/* Inputs Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Card: Core text detail */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Full Display Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={aboutData.name || ''} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2.5 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs md:text-sm text-text-base focus:outline-none focus:border-accent"
                />
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Professional Role Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={aboutData.title || ''} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2.5 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs md:text-sm text-text-base focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Personal Biography Bio</label>
              <textarea 
                name="description" 
                value={aboutData.description || ''} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2.5 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs md:text-sm text-text-base focus:outline-none focus:border-accent resize-none"
                rows="6"
              />
            </div>
          </div>
        </div>

        {/* Right Card: Profile Image upload */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col items-center justify-center gap-4 text-center">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest self-start border-b border-border-base/40 w-full pb-2">Profile Avatar</span>
            
            <div className="w-40 h-40 rounded-2xl border border-border-base/50 p-1 relative overflow-hidden bg-bg-sub/20 shadow-md">
              <img 
                src={imagePreview || aboutData.photoURL || 'https://via.placeholder.com/150'} 
                alt="Profile Preview" 
                className="w-full h-full object-cover rounded-xl select-none"
              />
            </div>

            <div className="relative w-full">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="absolute inset-0 opacity-0 w-full cursor-pointer h-full z-10"
                id="profile-photo"
              />
              <div className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-border-base/60 text-xs font-mono uppercase hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                <ImageIcon className="w-4 h-4 text-primary" />
                <span>Upload New Avatar</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Skills Sub-Editor */}
      <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-4">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-base border-b border-border-base/40 pb-2 flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-accent" />
          <span>General Tags & Keywords</span>
        </h3>

        {/* Existing skill tags */}
        <div className="flex flex-wrap gap-2 py-2">
          {aboutData.skills && aboutData.skills.length > 0 ? (
            aboutData.skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-sub/80 border border-border-base/40 text-xs font-mono"
              >
                <span>{skill}</span>
                <button 
                  onClick={() => removeSkill(index)}
                  className="text-text-muted hover:text-red-500 font-bold focus:outline-none cursor-pointer"
                >
                  &times;
                </button>
              </div>
            ))
          ) : (
            <span className="text-xs font-mono text-text-muted">No tags added yet.</span>
          )}
        </div>

        {/* Inline Skill Add */}
        <div className="flex gap-3 max-w-md items-center">
          <input 
            type="text" 
            value={newSkill} 
            onChange={(e) => setNewSkill(e.target.value)} 
            placeholder="Add general tag..."
            className="flex-1 px-4 py-2.5 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs md:text-sm text-text-base focus:outline-none focus:border-accent"
            onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); addSkill(); } }}
          />
          <button 
            className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-border-base text-xs font-mono uppercase hover:border-accent/50 hover:bg-accent/10 transition-all cursor-pointer shrink-0"
            onClick={addSkill}
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Education Sub-Editor */}
      <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-base border-b border-border-base/40 pb-2 flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span>Education Records</span>
        </h3>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutData.education && aboutData.education.length > 0 ? (
            aboutData.education.map((edu, index) => (
              <div 
                key={index} 
                className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-bg-sub/30 border border-border-base/40"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-text-base">{edu.degree}</h4>
                  <p className="text-xs text-text-muted">{edu.institution}</p>
                  <p className="text-[10px] font-mono text-accent">{edu.year}</p>
                </div>
                <button 
                  onClick={() => removeEducation(index)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Delete record"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          ) : (
            <span className="text-xs font-mono text-text-muted col-span-2">No education records found. Add below.</span>
          )}
        </div>

        {/* Form fields */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-border-base/40 pt-4 items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Institution</label>
            <input 
              type="text" 
              name="institution" 
              value={newEducation.institution} 
              onChange={handleEducationChange} 
              className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
              placeholder="e.g. SVIET College"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Degree / Grade</label>
            <input 
              type="text" 
              name="degree" 
              value={newEducation.degree} 
              onChange={handleEducationChange} 
              className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
              placeholder="e.g. MCA, CGPA: 9.0"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Period</label>
            <div className="flex gap-2 w-full">
              <input 
                type="text" 
                name="year" 
                value={newEducation.year} 
                onChange={handleEducationChange} 
                className="flex-1 px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                placeholder="e.g. 2023 - 2025"
              />
              <button 
                onClick={addEducation}
                className="flex items-center gap-1 px-3 py-2 rounded-xl bg-accent text-bg-base text-xs font-mono uppercase font-bold hover:bg-accent/80 transition-colors cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Sub-Editor */}
      <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-6">
        <h3 className="text-xs font-mono uppercase tracking-widest text-text-base border-b border-border-base/40 pb-2 flex items-center gap-1.5">
          <Briefcase className="w-4 h-4 text-secondary" />
          <span>Professional Experience</span>
        </h3>

        {/* List */}
        <div className="flex flex-col gap-4">
          {aboutData.experience && aboutData.experience.length > 0 ? (
            aboutData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-bg-sub/30 border border-border-base/40"
              >
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-text-base">{exp.position} <span className="text-primary">@ {exp.company}</span></h4>
                  <p className="text-[10px] font-mono text-accent">{exp.period}</p>
                  <p className="text-xs text-text-muted text-justify pt-1 leading-relaxed">{exp.description}</p>
                </div>
                <button 
                  onClick={() => removeExperience(index)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Delete record"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          ) : (
            <span className="text-xs font-mono text-text-muted">No experience records found. Add below.</span>
          )}
        </div>

        {/* Form fields */}
        <div className="border-t border-border-base/40 pt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Company</label>
              <input 
                type="text" 
                name="company" 
                value={newExperience.company} 
                onChange={handleExperienceChange} 
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                placeholder="e.g. Mahindra Comviva"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Position</label>
              <input 
                type="text" 
                name="position" 
                value={newExperience.position} 
                onChange={handleExperienceChange} 
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                placeholder="e.g. Full-Stack Developer"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Period</label>
              <input 
                type="text" 
                name="period" 
                value={newExperience.period} 
                onChange={handleExperienceChange} 
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                placeholder="e.g. 2023 - Present"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">Responsibilities description</label>
            <textarea 
              name="description" 
              value={newExperience.description} 
              onChange={handleExperienceChange} 
              className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none resize-none"
              placeholder="Outline what you achieved or coded..."
              rows="3.5"
            />
          </div>

          <button 
            onClick={addExperience}
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-bg-base text-xs font-mono uppercase font-bold hover:bg-accent/80 transition-colors cursor-pointer w-48 self-end"
          >
            <Plus className="w-4 h-4" />
            <span>Add Experience</span>
          </button>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex justify-end border-t border-border-base/40 pt-6">
        <button 
          className="flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition-all cursor-pointer"
          onClick={saveAboutData}
          disabled={saving}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          <span>{saving ? 'Syncing...' : 'Save Profile Configuration'}</span>
        </button>
      </div>

    </div>
  );
};

export default AboutSection;