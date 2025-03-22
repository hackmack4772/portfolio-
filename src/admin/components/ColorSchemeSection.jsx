import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import ColorPicker from './ColorPicker';
import '../styles/admin-styles.css';

const ColorSchemeSection = () => {
  const [colors, setColors] = useState({
    primaryColor: '#8f10b7',
    primaryHover: '#7a0d9b',
    secondaryColor: '#03a3a5',
    accentColor: '#0cfbff',
    textColor: '#ffffff',
    textSecondary: '#cccccc',
    bgColor: '#0e1118',
    cardBg: '#1e2530',
    borderColor: '#2a3cad',
    shadow: 'rgba(0, 0, 0, 0.3)',
    
    // Light theme
    lightBg: '#f8f9fa',
    lightBgSecondary: '#eef1f5',
    lightText: '#2d3436',
    lightTextSecondary: '#636e72',
    lightBorder: '#dfe6e9',
    lightCardBg: '#ffffff',
    lightShadow: 'rgba(0, 0, 0, 0.08)',
    lightNavbar: 'rgba(248, 249, 250, 0.85)',
    
    // Dark theme
    darkBg: '#0c0f15',
    darkBgSecondary: '#1b1a2e',
    darkText: '#f5f5f5',
    darkTextSecondary: '#ababab',
    darkBorder: '#2d1950',
    darkCardBg: '#181a27',
    darkShadow: 'rgba(0, 0, 0, 0.3)',
    darkNavbar: 'rgba(27, 26, 46, 0.85)',
    
    // System colors
    successColor: '#28a745',
    errorColor: '#dc3545',
    warningColor: '#ffc107',
    infoColor: '#17a2b8',
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [previewActive, setPreviewActive] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const db = getFirestore();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const docRef = doc(db, "settings", "colors");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setColors(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching colors:", error);
        setMessage({ text: 'Failed to load color settings', type: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, [db]);

  const handleColorChange = (colorKey, value) => {
    setColors(prev => ({
      ...prev,
      [colorKey]: value
    }));
  };

  const saveColors = async () => {
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      const docRef = doc(db, "settings", "colors");
      await updateDoc(docRef, colors);
      
      // Update CSS variables directly
      applyColorsToCSS(colors);
      
      setMessage({ text: 'Colors saved successfully!', type: 'success' });
    } catch (error) {
      console.error("Error saving colors:", error);
      setMessage({ text: 'Failed to save colors', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const togglePreview = () => {
    if (previewActive) {
      // Restore original colors from Firebase
      fetchAndApplyOriginalColors();
    } else {
      // Apply preview colors
      applyColorsToCSS(colors);
    }
    setPreviewActive(!previewActive);
  };

  const fetchAndApplyOriginalColors = async () => {
    try {
      const docRef = doc(db, "settings", "colors");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        applyColorsToCSS(docSnap.data());
      }
    } catch (error) {
      console.error("Error fetching original colors:", error);
    }
  };

  const applyColorsToCSS = (colorValues) => {
    document.documentElement.style.setProperty('--primary-color', colorValues.primaryColor);
    document.documentElement.style.setProperty('--primary-hover', colorValues.primaryHover);
    document.documentElement.style.setProperty('--secondary-color', colorValues.secondaryColor);
    document.documentElement.style.setProperty('--accent-color', colorValues.accentColor);
    document.documentElement.style.setProperty('--text-color', colorValues.textColor);
    document.documentElement.style.setProperty('--text-secondary', colorValues.textSecondary);
    document.documentElement.style.setProperty('--bg-color', colorValues.bgColor);
    document.documentElement.style.setProperty('--card-bg', colorValues.cardBg);
    document.documentElement.style.setProperty('--border-color', colorValues.borderColor);
    document.documentElement.style.setProperty('--shadow', colorValues.shadow);
    
    // Light theme
    document.documentElement.style.setProperty('--light-bg', colorValues.lightBg);
    document.documentElement.style.setProperty('--light-bg-secondary', colorValues.lightBgSecondary);
    document.documentElement.style.setProperty('--light-text', colorValues.lightText);
    document.documentElement.style.setProperty('--light-text-secondary', colorValues.lightTextSecondary);
    document.documentElement.style.setProperty('--light-border', colorValues.lightBorder);
    document.documentElement.style.setProperty('--light-card-bg', colorValues.lightCardBg);
    document.documentElement.style.setProperty('--light-shadow', colorValues.lightShadow);
    document.documentElement.style.setProperty('--light-navbar', colorValues.lightNavbar);
    
    // Dark theme
    document.documentElement.style.setProperty('--dark-bg', colorValues.darkBg);
    document.documentElement.style.setProperty('--dark-bg-secondary', colorValues.darkBgSecondary);
    document.documentElement.style.setProperty('--dark-text', colorValues.darkText);
    document.documentElement.style.setProperty('--dark-text-secondary', colorValues.darkTextSecondary);
    document.documentElement.style.setProperty('--dark-border', colorValues.darkBorder);
    document.documentElement.style.setProperty('--dark-card-bg', colorValues.darkCardBg);
    document.documentElement.style.setProperty('--dark-shadow', colorValues.darkShadow);
    document.documentElement.style.setProperty('--dark-navbar', colorValues.darkNavbar);
    
    // System colors
    document.documentElement.style.setProperty('--success-color', colorValues.successColor);
    document.documentElement.style.setProperty('--error-color', colorValues.errorColor);
    document.documentElement.style.setProperty('--warning-color', colorValues.warningColor);
    document.documentElement.style.setProperty('--info-color', colorValues.infoColor);
  };

  if (loading) {
    return <div className="admin-loading">Loading color settings...</div>;
  }

  const colorGroups = [
    {
      title: 'Main Theme Colors',
      colors: [
        { key: 'primaryColor', label: 'Primary Color', value: colors.primaryColor },
        { key: 'primaryHover', label: 'Primary Hover', value: colors.primaryHover },
        { key: 'secondaryColor', label: 'Secondary Color', value: colors.secondaryColor },
        { key: 'accentColor', label: 'Accent Color', value: colors.accentColor },
      ]
    },
    {
      title: 'Text & Background',
      colors: [
        { key: 'textColor', label: 'Text Color', value: colors.textColor },
        { key: 'textSecondary', label: 'Secondary Text', value: colors.textSecondary },
        { key: 'bgColor', label: 'Background Color', value: colors.bgColor },
        { key: 'cardBg', label: 'Card Background', value: colors.cardBg },
        { key: 'borderColor', label: 'Border Color', value: colors.borderColor },
        { key: 'shadow', label: 'Shadow Color', value: colors.shadow },
      ]
    },
    {
      title: 'Light Theme',
      colors: [
        { key: 'lightBg', label: 'Light Background', value: colors.lightBg },
        { key: 'lightBgSecondary', label: 'Light Background Secondary', value: colors.lightBgSecondary },
        { key: 'lightText', label: 'Light Text', value: colors.lightText },
        { key: 'lightTextSecondary', label: 'Light Text Secondary', value: colors.lightTextSecondary },
        { key: 'lightBorder', label: 'Light Border', value: colors.lightBorder },
        { key: 'lightCardBg', label: 'Light Card Background', value: colors.lightCardBg },
      ]
    },
    {
      title: 'Dark Theme',
      colors: [
        { key: 'darkBg', label: 'Dark Background', value: colors.darkBg },
        { key: 'darkBgSecondary', label: 'Dark Background Secondary', value: colors.darkBgSecondary },
        { key: 'darkText', label: 'Dark Text', value: colors.darkText },
        { key: 'darkTextSecondary', label: 'Dark Text Secondary', value: colors.darkTextSecondary },
        { key: 'darkBorder', label: 'Dark Border', value: colors.darkBorder },
        { key: 'darkCardBg', label: 'Dark Card Background', value: colors.darkCardBg },
      ]
    },
    {
      title: 'System Colors',
      colors: [
        { key: 'successColor', label: 'Success Color', value: colors.successColor },
        { key: 'errorColor', label: 'Error Color', value: colors.errorColor },
        { key: 'warningColor', label: 'Warning Color', value: colors.warningColor },
        { key: 'infoColor', label: 'Info Color', value: colors.infoColor },
      ]
    }
  ];
  
  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2>Color Scheme Settings</h2>
        <div className="admin-section-actions">
          <button 
            className={`admin-btn ${previewActive ? 'admin-btn-warning' : 'admin-btn-secondary'}`}
            onClick={togglePreview}
          >
            {previewActive ? 'Exit Preview' : 'Preview Changes'}
          </button>
          <button 
            className="admin-btn admin-btn-primary" 
            onClick={saveColors}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
      
      {message.text && (
        <div className={`admin-alert admin-alert-${message.type === 'success' ? 'success' : 'danger'}`}>
          {message.text}
        </div>
      )}
      
      <div className="admin-color-scheme-container">
        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="admin-color-group">
            <h3 className="admin-color-group-title">{group.title}</h3>
            <div className="admin-color-grid">
              {group.colors.map((color) => (
                <div key={color.key} className="admin-color-item">
                  <label>{color.label}</label>
                  <ColorPicker 
                    color={color.value} 
                    onChange={(value) => handleColorChange(color.key, value)} 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="admin-section-footer">
        <button 
          className="admin-btn admin-btn-primary" 
          onClick={saveColors}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default ColorSchemeSection; 