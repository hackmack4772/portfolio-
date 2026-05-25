import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { 
  Home, 
  GraduationCap, 
  User, 
  FolderGit2, 
  FileText, 
  Mail, 
  Menu as MenuIcon, 
  X, 
  GitFork, 
  Star,
  Terminal
} from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navItems = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/education", label: "Education", icon: GraduationCap },
  { path: "/about", label: "About", icon: User },
  { path: "/projects", label: "Projects", icon: FolderGit2 },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [githubUrl, setGithubUrl] = useState("https://github.com/hackmack4772");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const contactSnap = await getDoc(doc(db, "content", "contact"));
        if (contactSnap.exists()) {
          const cData = contactSnap.data();
          if (cData.socialLinks?.github) {
            setGithubUrl(cData.socialLinks.github);
          }
        }
      } catch (err) {
        console.error("Error fetching navbar github:", err);
      }
    };
    fetchNavbarData();
  }, []);

  const isActivePath = (path) => {
    if (path === "/home" && (location.pathname === "/" || location.pathname === "")) return true;
    return location.pathname === path;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none"
      >
        <div className={`max-w-7xl mx-auto w-full glass-panel rounded-full border border-border-base/50 flex items-center justify-between px-6 py-2.5 bg-bg-base/80 backdrop-blur-lg shadow-lg pointer-events-auto transition-all duration-300 ${
          isScrolled ? "scale-98 shadow-2xl py-2 bg-bg-base/90" : ""
        }`}>
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group select-none">
              <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:border-accent/40 group-hover:text-accent transition-colors duration-300">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-base font-black tracking-wider text-text-base font-mono">
                HACK<span className="text-primary group-hover:text-accent transition-colors duration-300">MACK</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items (Center) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActivePath(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-accent animate-pulse-glow" : "text-text-muted hover:text-text-base"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10 shadow-[0_0_10px_rgba(143,16,183,0.1)]"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            
            {/* GitHub Star Button */}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-text-base glass-panel border border-border-base/50 hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300 cursor-pointer"
              >
                <GitFork className="w-3.5 h-3.5 text-primary" />
                <Star className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" />
                <span>Star</span>
              </motion.a>
            )}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full glass-panel border border-border-base/50 text-text-base hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 z-40 bg-bg-base/95 backdrop-blur-lg flex flex-col justify-center px-6 md:hidden border-b border-border-base/40 shadow-2xl pt-24 pb-12"
          >
            <div className="flex flex-col gap-5 items-center text-center max-w-sm mx-auto w-full">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = isActivePath(item.path);
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-center gap-3 py-3 w-full rounded-2xl border text-sm font-mono uppercase tracking-widest transition-all ${
                        isActive 
                          ? "text-accent bg-accent/5 border-accent/30 shadow-[0_0_15px_rgba(12,251,255,0.1)] animate-pulse-glow" 
                          : "text-text-muted hover:text-text-base border-transparent"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}

              {githubUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="mt-4 w-full"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-mono tracking-wider uppercase text-text-base bg-primary/10 border border-primary/40 shadow-[0_0_15px_rgba(143,16,183,0.1)] hover:bg-primary/20 w-full"
                  >
                    <GitFork className="w-4 h-4 text-primary" />
                    <span>GitHub Repository</span>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
