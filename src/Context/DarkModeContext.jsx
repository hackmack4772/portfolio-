import React, { createContext, useState, useContext } from "react";

// Create the Context
const DarkModeContext = createContext();

// Create a Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);
