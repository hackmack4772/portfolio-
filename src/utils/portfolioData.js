/**
 * Utility functions for fetching portfolio data from Firebase Functions
 */

// Base URL for API calls - replace with your Firebase Functions URL in production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-firebase-project-id.web.app/api'
  : 'http://localhost:5001/your-firebase-project-id/us-central1';

/**
 * Fetches all portfolio content in a single request
 * @returns {Promise<Object>} Portfolio content
 */
export const getAllPortfolioContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/getPortfolioContent`);
    
    if (!response.ok) {
      throw new Error(`Error fetching portfolio content: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio content:', error);
    throw error;
  }
};

/**
 * Fetches a specific type of content
 * @param {string} contentType - Type of content to fetch (about, contact, colors, skills, projects)
 * @returns {Promise<Object>} Content data
 */
export const getContentByType = async (contentType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/getContent?type=${contentType}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching ${contentType} content: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${contentType} content:`, error);
    throw error;
  }
};

/**
 * Applies color scheme CSS variables to the document root
 * @param {Object} colors - Color scheme object from Firebase
 */
export const applyColorScheme = (colors) => {
  if (!colors) return;
  
  const root = document.documentElement;
  
  // Apply each color to its corresponding CSS variable
  Object.entries(colors).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--${key}`, value);
    }
  });
  
  console.log('Color scheme applied');
};

/**
 * Example of how to use these utilities in your React components:
 * 
 * import { useEffect, useState } from 'react';
 * import { getAllPortfolioContent, applyColorScheme } from '../utils/portfolioData';
 * 
 * function App() {
 *   const [portfolioData, setPortfolioData] = useState(null);
 *   const [loading, setLoading] = useState(true);
 *   const [error, setError] = useState(null);
 * 
 *   useEffect(() => {
 *     const fetchData = async () => {
 *       try {
 *         const data = await getAllPortfolioContent();
 *         setPortfolioData(data);
 *         
 *         // Apply color scheme
 *         applyColorScheme(data.colors);
 *       } catch (err) {
 *         setError(err.message);
 *       } finally {
 *         setLoading(false);
 *       }
 *     };
 *     
 *     fetchData();
 *   }, []);
 * 
 *   if (loading) return <div>Loading...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   
 *   return (
 *     <div>
 *       <header>
 *         <h1>{portfolioData.about.name}</h1>
 *         <p>{portfolioData.about.title}</p>
 *       </header>
 *       
 *Rest of your app 
 *     </div>
 *   );
 * }
 */ 