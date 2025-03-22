import React, { useState } from 'react';
import '../styles/admin-styles.css';

const Sidebar = ({ activeSection, setActiveSection, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About Me', icon: 'user' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'projects', label: 'Projects', icon: 'folder-open' },
    { id: 'contact', label: 'Contact', icon: 'envelope' },
    { id: 'colors', label: 'Color Scheme', icon: 'palette' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <>
      {/* Mobile hamburger button */}
      <button 
        className="admin-mobile-menu-toggle" 
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
      </button>
      
      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="admin-sidebar-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'admin-sidebar-open' : ''}`}>
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        
        <nav className="admin-sidebar-nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`admin-nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="admin-sidebar-footer">
          <button onClick={onLogout} className="admin-btn admin-btn-danger admin-btn-block">
            <i className="fa fa-sign-out"></i> Logout
          </button>
          <a 
            href="/" 
            className="admin-button admin-button-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
            <span>View Site</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 