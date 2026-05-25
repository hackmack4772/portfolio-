import React, { useState, useRef, useEffect } from 'react';

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

  return (
    <div className="relative w-full" ref={colorPickerRef}>
      <div 
        className="flex items-center gap-3 p-2.5 rounded-xl border border-border-base/50 bg-bg-sub/30 hover:border-primary/40 hover:bg-bg-sub/50 transition-all duration-300 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div 
          className="w-7 h-7 rounded-lg shadow-md border border-border-base/30 shrink-0" 
          style={{ backgroundColor: color }}
        />
        <span className="text-xs font-mono text-text-base tracking-wider uppercase">{color}</span>
      </div>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 glass-panel p-3.5 rounded-2xl border border-border-base shadow-2xl flex flex-col gap-3 min-w-[200px]">
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="w-10 h-10 rounded-lg border border-border-base/50 bg-transparent cursor-pointer shrink-0"
            />
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Select hue</span>
          </div>
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
            className="w-full px-3 py-1.5 bg-bg-sub/40 border border-border-base/40 rounded-xl text-xs font-mono text-text-base placeholder-text-muted/30 focus:outline-none focus:border-accent"
            placeholder="#RRGGBB"
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;