import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ColorSchemeSection from './components/ColorSchemeSection';

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
    return (
      <div className="w-full min-h-screen bg-bg-base text-text-base flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Decrypting Workspace...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-bg-base text-text-base flex flex-col md:flex-row">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        onLogout={handleLogout}
      />
      
      {/* Content Area */}
      <main className="flex-1 md:ml-64 p-6 md:p-10 flex flex-col gap-8 min-w-0">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-base/40 pb-6 mt-12 md:mt-0">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-text-base select-none">
              PORTFOLIO <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MANAGER</span>
            </h1>
            <p className="text-xs text-text-muted font-mono mt-1">Logged in as {user.email}</p>
          </div>
          <button 
            onClick={handleLogout} 
            className="self-start sm:self-center px-4 py-2 rounded-full text-xs font-mono uppercase border border-border-base hover:border-red-500/50 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            Log Out
          </button>
        </header>
        
        {/* Active Section container */}
        <div className="w-full flex-1">
          {renderActiveSection()}
        </div>

      </main>
    </div>
  );
};

export default Dashboard;