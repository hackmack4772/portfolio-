import React from 'react';
import '../styles/admin-styles.css';

const Sidebar = ({ activeSection, setActiveSection, onLogout }) => {
  const menuItems = [
    { id: 'about', label: 'About Me', icon: 'user' },
    { id: 'projects', label: 'Projects', icon: 'briefcase' },
    { id: 'skills', label: 'Skills', icon: 'code' },
    { id: 'contact', label: 'Contact', icon: 'envelope' },
    { id: 'colors', label: 'Color Scheme', icon: 'palette' }
  ];

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <nav className="admin-sidebar-nav">
        <ul>
          {menuItems.map(item => (
            <li 
              key={item.id} 
              className={`admin-sidebar-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <i className={`fa fa-${item.icon}`}></i>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="admin-sidebar-footer">
        <button onClick={onLogout} className="admin-btn admin-btn-danger admin-btn-block">
          <i className="fa fa-sign-out"></i> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 