import React from 'react';
import { useDarkMode } from '../../Context/DarkModeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="theme-toggle-wrapper">
      <div className="theme-toggle-label">{isDarkMode ? 'Dark' : 'Light'}</div>
      <button 
        className="theme-toggle-button" 
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="toggle-track">
          <div className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
            <span className="toggle-icon">
              {isDarkMode ? '🌙' : '☀️'}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle; 