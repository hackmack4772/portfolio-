import React, { useState, useRef, useEffect } from 'react';
import '../styles/admin-styles.css';

const ColorPicker = ({ color, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorPickerRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleColorChange = (e) => {
    onChange(e.target.value);
  };

  const toggleColorPicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="admin-color-picker" ref={colorPickerRef}>
      <div className="admin-color-picker-preview" onClick={toggleColorPicker}>
        <div 
          className="admin-color-swatch" 
          style={{ backgroundColor: color }}
        ></div>
        <span className="admin-color-value">{color}</span>
      </div>
      
      {isOpen && (
        <div className="admin-color-picker-dropdown">
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="admin-color-input"
          />
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
            className="admin-form-control admin-color-text-input"
            placeholder="#RRGGBB"
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker; 