/**
 * Theme manager utility for handling color schemes
 */
import { applyColorScheme } from './portfolioData';

/**
 * Apply current theme based on user preferences and stored settings
 * @param {Object} colors - Color scheme object from Firebase
 */
export const initTheme = (colors) => {
  if (!colors) return;
  
  // Get user's preferred color scheme
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Get stored theme preference from localStorage
  const storedTheme = localStorage.getItem('theme');

  // Determine which theme to use
  let currentTheme;
  if (storedTheme === 'light' || storedTheme === 'dark') {
    currentTheme = storedTheme;
  } else {
    currentTheme = prefersDarkMode ? 'dark' : 'light';
  }

  // Apply theme
  setTheme(currentTheme, colors);
  
  // Add theme class to body
  document.body.classList.add(`${currentTheme}-theme`);
};

/**
 * Set the active theme
 * @param {string} theme - 'light' or 'dark'
 * @param {Object} colors - Color scheme object from Firebase
 */
export const setTheme = (theme, colors) => {
  const root = document.documentElement;
  
  // Save theme preference
  localStorage.setItem('theme', theme);
  
  // Toggle theme classes
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(`${theme}-theme`);
  
  // Apply the correct set of colors based on theme
  if (theme === 'light') {
    // Use light theme color variables
    root.style.setProperty('--bg-color', colors.lightBg || '#f8f9fa');
    root.style.setProperty('--bg-secondary', colors.lightBgSecondary || '#eef1f5');
    root.style.setProperty('--text-color', colors.lightText || '#2d3436');
    root.style.setProperty('--text-secondary', colors.lightTextSecondary || '#636e72');
    root.style.setProperty('--border-color', colors.lightBorder || '#dfe6e9');
    root.style.setProperty('--card-bg', colors.lightCardBg || '#ffffff');
    root.style.setProperty('--shadow', colors.lightShadow || 'rgba(0, 0, 0, 0.08)');
    root.style.setProperty('--navbar-bg', colors.lightNavbar || 'rgba(248, 249, 250, 0.85)');
  } else {
    // Use dark theme color variables
    root.style.setProperty('--bg-color', colors.darkBg || '#0c0f15');
    root.style.setProperty('--bg-secondary', colors.darkBgSecondary || '#1b1a2e');
    root.style.setProperty('--text-color', colors.darkText || '#f5f5f5');
    root.style.setProperty('--text-secondary', colors.darkTextSecondary || '#ababab');
    root.style.setProperty('--border-color', colors.darkBorder || '#2d1950');
    root.style.setProperty('--card-bg', colors.darkCardBg || '#181a27');
    root.style.setProperty('--shadow', colors.darkShadow || 'rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--navbar-bg', colors.darkNavbar || 'rgba(27, 26, 46, 0.85)');
  }
  
  // Common colors for both themes
  applyColorScheme({
    primaryColor: colors.primaryColor,
    primaryHover: colors.primaryHover,
    secondaryColor: colors.secondaryColor,
    accentColor: colors.accentColor,
    successColor: colors.successColor,
    errorColor: colors.errorColor,
    warningColor: colors.warningColor,
    infoColor: colors.infoColor
  });
};

/**
 * Toggle between light and dark theme
 * @param {Object} colors - Color scheme object from Firebase
 */
export const toggleTheme = (colors) => {
  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme, colors);
  
  return newTheme;
};

export default {
  initTheme,
  setTheme,
  toggleTheme
}; 