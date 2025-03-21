import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Context
const DarkModeContext = createContext();

// Create a Provider Component
export const DarkModeProvider = ({ children }) => {
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
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
