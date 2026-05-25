import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { usePortfolio } from "../../Context/PortfolioDataContext";
import { 
  Home, 
  GraduationCap, 
  User, 
  FolderGit2, 
  FileText, 
  Mail, 
  Menu as MenuIcon, 
  X 
} from "lucide-react";

import Header from "./Header";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavActions from "./NavActions";
import MobileDrawer from "./MobileDrawer";
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
  const { contact } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const githubUrl = contact?.socialLinks?.github || "https://github.com/hackmack4772";

  // Scroll Event Listener
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

  const isActivePath = (path) => {
    if (path === "/home" && (location.pathname === "/" || location.pathname === "")) return true;
    return location.pathname === path;
  };

  return (
    <>
      <Header isScrolled={isScrolled}>
        {/* Brand Identity / Logo */}
        <Logo />

        {/* Desktop Navbar Navigation Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2.5">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              label={item.label}
              index={index}
              isActive={isActivePath(item.path)}
            />
          ))}
        </nav>

        {/* Right-Side Dashboard Actions (Theme Toggle & Star Repo) */}
        <div className="hidden md:flex items-center gap-4">
          <NavActions githubUrl={githubUrl} />
        </div>

        {/* Mobile Navbar Controls (Theme & Menu Toggle) */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg border border-border-base/40 text-text-base hover:text-accent hover:border-accent/40 bg-bg-sub/10 transition-all duration-300 focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
          </button>
        </div>
      </Header>

      {/* Slide-in Cyber Mobile / Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <MobileDrawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            navItems={navItems}
            isActivePath={isActivePath}
            githubUrl={githubUrl}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
