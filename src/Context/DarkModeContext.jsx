import React, { createContext, useState, useContext, useEffect } from "react";
import { usePortfolio } from "./PortfolioDataContext";

// Create the Context
const DarkModeContext = createContext();

// Helper to apply colors
const applyColors = (isDark, c) => {
  const root = document.documentElement;
  if (!c) return;

  // Common colors
  if (c.primaryColor) root.style.setProperty('--primary-color', c.primaryColor);
  if (c.primaryHover) root.style.setProperty('--primary-hover', c.primaryHover);
  if (c.secondaryColor) root.style.setProperty('--secondary-color', c.secondaryColor);
  if (c.accentColor) root.style.setProperty('--accent-color', c.accentColor);
  if (c.successColor) root.style.setProperty('--success-color', c.successColor);
  if (c.errorColor) root.style.setProperty('--error-color', c.errorColor);
  if (c.warningColor) root.style.setProperty('--warning-color', c.warningColor);
  if (c.infoColor) root.style.setProperty('--info-color', c.infoColor);

  if (isDark) {
    root.style.setProperty('--bg-color', c.darkBg || '#0c0f15');
    root.style.setProperty('--bg-secondary', c.darkBgSecondary || '#111420');
    root.style.setProperty('--text-color', c.darkText || '#f5f5f5');
    root.style.setProperty('--text-secondary', c.darkTextSecondary || '#ababab');
    root.style.setProperty('--border-color', c.darkBorder || 'rgba(143, 16, 183, 0.2)');
    root.style.setProperty('--card-bg', c.darkCardBg || 'rgba(20, 24, 39, 0.6)');
    root.style.setProperty('--shadow', c.darkShadow || 'rgba(0, 0, 0, 0.5)');
    root.style.setProperty('--navbar-bg', c.darkNavbar || 'rgba(12, 15, 21, 0.8)');
  } else {
    root.style.setProperty('--bg-color', c.lightBg || '#f8f9fa');
    root.style.setProperty('--bg-secondary', c.lightBgSecondary || '#edf0f5');
    root.style.setProperty('--text-color', c.lightText || '#1e2530');
    root.style.setProperty('--text-secondary', c.lightTextSecondary || '#4a5568');
    root.style.setProperty('--border-color', c.lightBorder || 'rgba(3, 163, 165, 0.2)');
    root.style.setProperty('--card-bg', c.lightCardBg || 'rgba(255, 255, 255, 0.7)');
    root.style.setProperty('--shadow', c.lightShadow || 'rgba(0, 0, 0, 0.08)');
    root.style.setProperty('--navbar-bg', c.lightNavbar || 'rgba(248, 249, 250, 0.85)');
  }
};

// Create a Provider Component
export const DarkModeProvider = ({ children }) => {
  const { colors } = usePortfolio();

  // Check for user's system preference
  const prefersDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Get initial mode from localStorage or system preference
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      return savedMode === "dark";
    }
    // Use system preference as fallback
    return prefersDarkMode();
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Set specific mode
  const setDarkMode = (value) => {
    setIsDarkMode(Boolean(value));
  };

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only update if user hasn't set a preference in localStorage
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(mediaQuery.matches);
      }
    };

    // Add listener if browser supports it
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      // For older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Update localStorage and document class when the mode changes
  useEffect(() => {
    // Store the current theme preference
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    
    // Update the document root class
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.remove("light-mode");
      document.body.classList.remove("light-mode");
    } else {
      rootElement.classList.add("light-mode");
      document.body.classList.add("light-mode");
    }

    if (colors) {
      applyColors(isDarkMode, colors);
    }
  }, [isDarkMode, colors]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode, colors }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
