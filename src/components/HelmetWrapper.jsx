import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

/**
 * A wrapper component for React Helmet to address the UNSAFE_componentWillMount warning in React 18
 * This component simply forwards all props to the underlying Helmet component
 */
const HelmetWrapper = ({ children, ...rest }) => {
  return <ReactHelmet {...rest}>{children}</ReactHelmet>;
};

export default HelmetWrapper; 