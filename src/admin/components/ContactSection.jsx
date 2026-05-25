import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube, 
  Globe,
  Save,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

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
      setMessage({ text: 'Contact & social details synced successfully!', type: 'success' });
    } catch (error) {
      console.error("Error saving contact data:", error);
      setMessage({ text: 'Failed to save contact settings.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Loading Contact Fields...</p>
      </div>
    );
  }

  const socialFields = [
    { name: 'github', label: 'GitHub Link', icon: Github, color: 'text-primary' },
    { name: 'linkedin', label: 'LinkedIn Link', icon: Linkedin, color: 'text-accent' },
    { name: 'twitter', label: 'Twitter Link', icon: Twitter, color: 'text-secondary' },
    { name: 'instagram', label: 'Instagram Link', icon: Instagram, color: 'text-red-400' },
    { name: 'facebook', label: 'Facebook Link', icon: Facebook, color: 'text-blue-500' },
    { name: 'youtube', label: 'YouTube Link', icon: Youtube, color: 'text-red-500' },
    { name: 'blog', label: 'Personal Blog / Website', icon: Globe, color: 'text-green-400' },
  ];

  return (
    <div className="flex flex-col gap-6 pb-10">
      
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-base flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            <span>Contact & Social Links</span>
          </h2>
          <p className="text-xs text-text-muted mt-1">Configure email, phone, location address, and active social profiles.</p>
        </div>
        
        <button 
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_12px_rgba(12,251,255,0.25)] transition-all cursor-pointer shrink-0 self-start sm:self-center"
          onClick={saveContactData}
          disabled={saving}
        >
          <Save className="w-3.5 h-3.5" />
          <span>{saving ? 'Syncing...' : 'Save Settings'}</span>
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

      {/* Forms Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: General Info Card */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-30" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base pb-2 border-b border-border-base/40 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-accent" />
              <span>General Information</span>
            </h3>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Email Address</label>
              <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
                <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  name="email" 
                  value={contactData.email || ''} 
                  onChange={handleInputChange} 
                  placeholder="admin@hackmack.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-bg-sub/30 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Phone Number</label>
              <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
                <Phone className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="tel" 
                  name="phone" 
                  value={contactData.phone || ''} 
                  onChange={handleInputChange} 
                  placeholder="+91-9596581274"
                  className="w-full pl-10 pr-4 py-2.5 bg-bg-sub/30 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>
            </div>

            {/* Resume URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Resume / Document URL</label>
              <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
                <FileText className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="url" 
                  name="resumeURL" 
                  value={contactData.resumeURL || ''} 
                  onChange={handleInputChange} 
                  placeholder="https://..."
                  className="w-full pl-10 pr-4 py-2.5 bg-bg-sub/30 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>
              <small className="text-[9px] font-mono text-text-muted">Link to your CV file stored on firebase or cloud storage.</small>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Address Location</label>
              <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
                <MapPin className="w-4 h-4 text-text-muted absolute left-3.5 top-4" />
                <textarea 
                  name="address" 
                  value={contactData.address || ''} 
                  onChange={handleInputChange} 
                  placeholder="Address details..."
                  className="w-full pl-10 pr-4 py-2.5 bg-bg-sub/30 rounded-xl text-xs text-text-base focus:outline-none resize-none"
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Social handles Card */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-30" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base pb-2 border-b border-border-base/40 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-primary animate-pulse" />
              <span>Social Media Handles</span>
            </h3>

            {socialFields.map((social) => {
              const SocialIcon = social.icon;
              const value = contactData.socialLinks ? contactData.socialLinks[social.name] || '' : '';
              return (
                <div key={social.name} className="flex flex-col gap-1">
                  <label className="text-[9px] font-mono text-text-muted uppercase tracking-wider">{social.label}</label>
                  <div className="relative rounded-xl border border-border-base/40 focus-within:border-accent transition-colors">
                    <SocialIcon className={`w-4 h-4 ${social.color} absolute left-3.5 top-1/2 -translate-y-1/2`} />
                    <input 
                      type="url" 
                      name={social.name} 
                      value={value} 
                      onChange={handleSocialLinkChange} 
                      placeholder="https://..."
                      className="w-full pl-10 pr-4 py-2.5 bg-bg-sub/30 rounded-xl text-xs text-text-base focus:outline-none"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Footer controls */}
      <div className="flex justify-end border-t border-border-base/40 pt-6">
        <button 
          className="flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition-all cursor-pointer"
          onClick={saveContactData}
          disabled={saving}
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Syncing...' : 'Save Settings Details'}</span>
        </button>
      </div>

    </div>
  );
};

export default ContactSection;