import React from "react";
import { useDarkMode } from "../../Context/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono uppercase tracking-wider text-text-muted select-none">
        {isDarkMode ? "Dark" : "Light"}
      </span>
      <motion.button
        onClick={toggleDarkMode}
        className="relative h-10 w-10 flex items-center justify-center rounded-full glass-panel cursor-pointer shadow-glow-primary hover:shadow-glow-accent focus:outline-none transition-all duration-300 overflow-hidden"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDarkMode ? (
            <motion.div
              key="moon"
              initial={{ y: 20, rotate: 45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: -45, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-accent"
            >
              <Moon className="w-5 h-5 fill-current" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, rotate: -45, opacity: 0 }}
              animate={{ y: 0, rotate: 0, opacity: 1 }}
              exit={{ y: -20, rotate: 45, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-primary"
            >
              <Sun className="w-5 h-5 fill-current" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;