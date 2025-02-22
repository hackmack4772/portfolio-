// src/components/Footer.js
import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return <footer role="contentinfo"> Copyright © {year} Hackmack</footer>;
};

export default Footer;
