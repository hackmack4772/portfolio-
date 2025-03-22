import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import Sidebar from './Sidebar';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import ColorSchemeSection from './ColorSchemeSection';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('about');
  const auth = getAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'colors':
        return <ColorSchemeSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onSignOut={handleSignOut}
      />
      <main className="admin-main-content">
        <header className="admin-header">
          <h1>Portfolio Admin</h1>
          <button className="admin-button admin-button-danger" onClick={handleSignOut}>
            Sign Out
          </button>
        </header>
        <div className="admin-content-container">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 