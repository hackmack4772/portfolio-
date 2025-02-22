import React, { createContext, useState, useContext } from "react";

// Create the Context
const LoadingContext = createContext();

// Create a Provider Component
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (status) => setIsLoading(status);

  return (
    <LoadingContext.Provider value={{ isLoading, handleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// Custom Hook to use the LoadingContext
export const useLoading = () => useContext(LoadingContext);
