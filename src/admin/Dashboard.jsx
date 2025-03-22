import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ColorSchemeSection from './components/ColorSchemeSection';
import './styles/admin-styles.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/admin');
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      case 'colors':
        return <ColorSchemeSection />;
      default:
        return <AboutSection />;
    }
  };

  if (!user) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onLogout={handleLogout}
      />
      <main className="admin-main-content">
        <header className="admin-header">
          <h1>Portfolio Admin</h1>
          <div className="admin-user-info">
            <span>{user.email}</span>
            <button onClick={handleLogout} className="admin-btn admin-btn-outline">
              Logout
            </button>
          </div>
        </header>
        <div className="admin-content-container">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 