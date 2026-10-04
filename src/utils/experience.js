/**
 * Utility functions for calculating and formatting experience dynamically
 */

// First professional role: Full Stack Developer at Shine Dezign Infonet,
// Sep 2022, per the CV. Every "N+ years" on the site derives from this one
// constant, so it has to match the first entry in the experience list.
export const START_DATE = "2022-09-01";

/**
 * Calculates experience details since the specified start date
 * @param {string} startDateStr - Start date (YYYY-MM-DD)
 * @returns {Object} Experience metrics
 */
export const calculateExperience = (startDateStr = START_DATE) => {
  const startDate = new Date(startDateStr);
  const currentDate = new Date();
  
  // Calculate difference in years
  const diffTime = Math.max(0, currentDate - startDate);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  const floorYears = Math.floor(diffYears);
  
  return {
    exactYears: diffYears,
    yearsFloat: parseFloat(diffYears.toFixed(1)),
    yearsInt: floorYears,
    displayYears: `${floorYears}+`
  };
};

/**
 * Replaces hardcoded experience numbers in bios and descriptions with the dynamic value
 * @param {string} text - The input text containing hardcoded experience
 * @returns {string} The formatted text with dynamic experience
 */
export const makeTextDynamic = (text) => {
  if (!text) return "";
  const { yearsInt } = calculateExperience();
  
  // Replace patterns like "nearly 3 years", "3+ years", "2+ years", "3 years", etc.
  return text
    .replace(/nearly\s+\d+\s+years/gi, `${yearsInt}+ years`)
    .replace(/\d+\+\s*years/gi, `${yearsInt}+ years`)
    .replace(/\b\d+\s+years\b/gi, `${yearsInt}+ years`);
};
