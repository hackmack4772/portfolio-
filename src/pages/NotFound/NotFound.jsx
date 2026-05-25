import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass } from "lucide-react";
import HelmetWrapper from "../../components/HelmetWrapper";

function NotFound() {
  return (
    <div className="w-full min-h-screen bg-bg-base text-text-base flex items-center justify-center p-6 relative overflow-hidden">
      <HelmetWrapper>
        <title>Page Not Found | My Portfolio</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </HelmetWrapper>
      
      {/* Background glowing bubbles */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      
      <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-border-base/50 shadow-2xl flex flex-col items-center justify-center text-center gap-6 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
        
        {/* Animated Compass Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-lg"
        >
          <Compass className="w-8 h-8" />
        </motion.div>

        <div className="space-y-2">
          {/* Animated 404 text */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="text-6xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-widest font-mono"
          >
            404
          </motion.h1>
          <h2 className="text-xl font-bold text-text-base">Lost in Space</h2>
          <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-xs mx-auto">
            The coordinates you requested do not exist or the page has floated away into orbit.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-2"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(12,251,255,0.3)] transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;
