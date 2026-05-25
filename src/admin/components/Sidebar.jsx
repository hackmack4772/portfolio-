import React, { useState } from 'react';
import { User, Code, FolderOpen, Mail, Palette, LogOut, Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activeSection, setActiveSection, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact Messages', icon: Mail },
    { id: 'colors', label: 'Color Scheme', icon: Palette }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="fixed top-4 left-4 z-50 md:hidden p-2.5 rounded-full glass-panel border border-border-base text-text-base hover:text-accent hover:border-accent transition-colors focus:outline-none cursor-pointer"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle admin sidebar"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      
      {/* Overlay for mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-bg-base/70 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
      
      {/* Sidebar aside */}
      <aside className={`fixed top-0 bottom-0 left-0 z-45 w-64 glass-panel border-r border-border-base/50 p-6 flex flex-col justify-between transition-transform duration-300 md:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="space-y-8">
          {/* Logo Header */}
          <div className="flex items-center gap-2 border-b border-border-base/40 pb-4 mt-8 md:mt-0">
            <span className="text-lg font-black tracking-widest bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent select-none">
              ADMIN PANEL
            </span>
          </div>
          
          {/* Menu Links */}
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-xs font-mono uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer select-none ${
                    isActive 
                      ? "text-accent bg-primary/10 border border-primary/20 shadow-[0_0_10px_rgba(143,16,183,0.1)]" 
                      : "text-text-muted hover:text-text-base hover:bg-bg-sub/50 border border-transparent"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-text-muted"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        
        {/* Footer actions */}
        <div className="flex flex-col gap-3 pt-6 border-t border-border-base/40">
          <a 
            href="/" 
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-text-base glass-panel border border-border-base hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span>View Site</span>
          </a>
          
          <button 
            onClick={onLogout} 
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-bg-base bg-red-500 font-bold hover:bg-red-600 transition-colors cursor-pointer select-none"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;