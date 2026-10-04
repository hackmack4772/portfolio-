import React from "react";
import { useDarkMode } from "../../Context/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * The word "Dark" / "Light" used to sit beside this button. A sun or moon
 * icon already says which mode you are in, so the label was spending a word
 * of horizontal space in an already crowded bar to repeat it. It lives on as
 * the aria-label, where it is actually useful.
 */
const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.92 }}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[var(--edge-1)] text-text-muted transition hover:border-accent/40 hover:bg-accent/[0.06] hover:text-accent focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDarkMode ? (
          <motion.span
            key="moon"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex"
          >
            <Sun className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
