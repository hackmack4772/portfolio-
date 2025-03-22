import { useState, useEffect } from 'react';
import { getAllPortfolioContent, getContentByType, applyColorScheme } from './portfolioData';

/**
 * Custom React hook for fetching and using portfolio data
 * @param {object} options - Configuration options
 * @param {boolean} options.applyColors - Whether to automatically apply color scheme to CSS variables
 * @param {string} options.contentType - Specific content type to fetch (optional)
 * @returns {object} Portfolio data and status
 */
export const usePortfolioData = ({ applyColors = true, contentType = null } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  // Function to manually trigger a refetch
  const refetch = () => setRefetchTrigger(prev => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        let fetchedData;
        
        if (contentType) {
          // Fetch specific content type
          fetchedData = await getContentByType(contentType);
        } else {
          // Fetch all content
          fetchedData = await getAllPortfolioContent();
          
          // Apply color scheme if option is enabled
          if (applyColors && fetchedData.colors) {
            applyColorScheme(fetchedData.colors);
          }
        }
        
        setData(fetchedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [contentType, applyColors, refetchTrigger]);
  
  return { data, loading, error, refetch };
};

/**
 * Example usage:
 * 
 * // For all data:
 * const { data, loading, error } = usePortfolioData();
 * 
 * // For specific section:
 * const { data: aboutData, loading } = usePortfolioData({ contentType: 'about' });
 * 
 * // Without applying colors:
 * const { data } = usePortfolioData({ applyColors: false });
 * 
 * // To refetch data:
 * const { data, refetch } = usePortfolioData();
 * // Then later call refetch() when needed
 */ 