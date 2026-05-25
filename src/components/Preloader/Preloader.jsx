import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Preloader({ isLoading }) {
  const [show, setShow] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShow(false), 500); // Buffer for exit fade out
      return () => clearTimeout(timer);
    }
    setShow(true);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-bg-base"
        >
          {/* Glowing blur background */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
            
            {/* SVG rotating gradient ring */}
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="mb-8 relative z-10"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#preloaderGradient)"
                strokeWidth="3.5"
                fill="transparent"
                strokeLinecap="round"
                initial={{ strokeDasharray: "0 250", rotate: 0 }}
                animate={{ 
                  strokeDasharray: ["20 200", "120 100", "20 250"],
                  rotate: 360 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary-color)" />
                  <stop offset="100%" stopColor="var(--accent-color)" />
                </linearGradient>
              </defs>
            </motion.svg>
            
            {/* Spaced lettering reveal */}
            <div className="flex gap-1.5 overflow-hidden relative z-10">
              {"HACKMACK".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 120,
                    damping: 12
                  }}
                  className="text-3xl font-sans font-black tracking-wider bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent select-none"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.8 }}
              className="mt-5 text-[10px] font-mono tracking-[0.25em] text-text-muted uppercase relative z-10"
            >
              Entering Anti-Gravity System
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
