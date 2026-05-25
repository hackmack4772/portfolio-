import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { Palette, Eye, Save, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import ColorPicker from './ColorPicker';

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
      await setDoc(docRef, colors, { merge: true });
      
      // Update CSS variables directly
      applyColorsToCSS(colors);
      
      setMessage({ text: 'Theme colors successfully saved & synchronized!', type: 'success' });
    } catch (error) {
      console.error("Error saving colors:", error);
      setMessage({ text: 'Failed to save color settings.', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const togglePreview = () => {
    if (previewActive) {
      fetchAndApplyOriginalColors();
    } else {
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
    const root = document.documentElement;
    Object.entries(colorValues).forEach(([key, val]) => {
      // Convert key to css variable syntax (primaryColor -> --primary-color)
      const cssVarName = `--${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`;
      root.style.setProperty(cssVarName, val);
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Loading Color Scheme...</p>
      </div>
    );
  }

  const colorGroups = [
    {
      title: 'Main Dynamic Branding',
      colors: [
        { key: 'primaryColor', label: 'Primary Brand Color', value: colors.primaryColor },
        { key: 'primaryHover', label: 'Primary Hover Accent', value: colors.primaryHover },
        { key: 'secondaryColor', label: 'Secondary Theme Hue', value: colors.secondaryColor },
        { key: 'accentColor', label: 'Interface Accent/Highlight', value: colors.accentColor },
      ]
    },
    {
      title: 'Custom Light Theme Details',
      colors: [
        { key: 'lightBg', label: 'Theme Base background', value: colors.lightBg },
        { key: 'lightBgSecondary', label: 'Theme Secondary background', value: colors.lightBgSecondary },
        { key: 'lightText', label: 'Light Base Text', value: colors.lightText },
        { key: 'lightTextSecondary', label: 'Light Secondary Text', value: colors.lightTextSecondary },
        { key: 'lightBorder', label: 'Light Card Borders', value: colors.lightBorder },
        { key: 'lightCardBg', label: 'Light Card Background', value: colors.lightCardBg },
      ]
    },
    {
      title: 'Custom Dark Theme Details',
      colors: [
        { key: 'darkBg', label: 'Dark Base background', value: colors.darkBg },
        { key: 'darkBgSecondary', label: 'Dark Secondary background', value: colors.darkBgSecondary },
        { key: 'darkText', label: 'Dark Base Text', value: colors.darkText },
        { key: 'darkTextSecondary', label: 'Dark Secondary Text', value: colors.darkTextSecondary },
        { key: 'darkBorder', label: 'Dark Card Borders', value: colors.darkBorder },
        { key: 'darkCardBg', label: 'Dark Card Background', value: colors.darkCardBg },
      ]
    },
    {
      title: 'System Alerts & Utilities',
      colors: [
        { key: 'successColor', label: 'Validation Success Color', value: colors.successColor },
        { key: 'errorColor', label: 'Validation Error Color', value: colors.errorColor },
        { key: 'warningColor', label: 'System Warnings Color', value: colors.warningColor },
        { key: 'infoColor', label: 'System Notice/Info Color', value: colors.infoColor },
      ]
    }
  ];
  
  return (
    <div className="flex flex-col gap-6">
      
      {/* Sub Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-base flex items-center gap-2">
            <Palette className="w-5 h-5 text-primary" />
            <span>Theme Color Schemes</span>
          </h2>
          <p className="text-xs text-text-muted mt-1">Modify colors dynamically. Updates are pushed globally.</p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button 
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border cursor-pointer transition-all duration-300 ${
              previewActive 
                ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30 shadow-[0_0_12px_rgba(234,179,8,0.15)] font-bold' 
                : 'border-border-base text-text-muted hover:text-text-base hover:border-text-muted'
            }`}
            onClick={togglePreview}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{previewActive ? 'Exit Preview' : 'Preview'}</span>
          </button>
          <button 
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_12px_rgba(12,251,255,0.25)] transition-all cursor-pointer"
            onClick={saveColors}
            disabled={saving}
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saving ? 'Syncing...' : 'Save Theme'}</span>
          </button>
        </div>
      </div>
      
      {/* Messages */}
      {message.text && (
        <div className={`flex items-center gap-2 p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'border-green-500/30 bg-green-500/10 text-green-500' 
            : 'border-red-500/30 bg-red-500/10 text-red-500'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-4.5 h-4.5 shrink-0" /> : <AlertCircle className="w-4.5 h-4.5 shrink-0" />}
          <span className="text-xs font-medium">{message.text}</span>
        </div>
      )}
      
      {/* Editor Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {colorGroups.map((group, groupIndex) => (
          <div 
            key={groupIndex} 
            className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-4 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-30" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base border-b border-border-base/40 pb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span>{group.title}</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {group.colors.map((color) => (
                <div key={color.key} className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">{color.label}</label>
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
      
      {/* Footer controls */}
      <div className="flex justify-end mt-4 border-t border-border-base/40 pt-6">
        <button 
          className="flex items-center gap-1.5 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.35)] transition-all cursor-pointer"
          onClick={saveColors}
          disabled={saving}
        >
          <Save className="w-4 h-4" />
          <span>{saving ? 'Syncing...' : 'Save Theme Config'}</span>
        </button>
      </div>
      
    </div>
  );
};

export default ColorSchemeSection;