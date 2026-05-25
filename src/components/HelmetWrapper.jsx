import React from 'react';

/**
 * HelmetWrapper - Simplified for React 19.
 * React 19 natively supports hoisting document metadata tags (<title>, <meta>, <link>) 
 * to the document <head>, making external libraries like react-helmet obsolete.
 */
const HelmetWrapper = ({ children }) => {
  return <>{children}</>;
};

export default HelmetWrapper;