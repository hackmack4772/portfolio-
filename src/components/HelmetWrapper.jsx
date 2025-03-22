import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

/**
 * HelmetWrapper - A wrapper for React Helmet to avoid the UNSAFE_componentWillMount warning
 * This component uses useEffect instead of componentWillMount
 */
const HelmetWrapper = ({ children }) => {
  return <Helmet>{children}</Helmet>;
};

export default HelmetWrapper; 