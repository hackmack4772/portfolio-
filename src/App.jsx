import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import { usePortfolio } from "./Context/PortfolioDataContext";
import { useDarkMode } from "./Context/DarkModeContext";
import Preloader from "./components/Preloader/Preloader";
import Login from "./admin/Login.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./admin/utils/firebase";
import MainLayout from "./components/ui/MainLayout";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Resume = lazy(() => import("./pages/Resume/ResumeNew"));
const Education = lazy(() => import("./pages/Education/Education"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

function AppContent({ user }) {
  const location = useLocation();
  const isChatRoute =
    location.pathname === "/login" ||
    location.pathname === "/users" ||
    location.pathname === "/not-found" ||
    location.pathname.startsWith("/chat") ||
    location.pathname.startsWith("/admin");

  return (
    <>
      {!isChatRoute && <Navbar />}

      <Suspense fallback={<Preloader />}>
        <MainLayout>
          <Routes>
            <Route
              path="/admin"
              element={
                user ? <Navigate to="/admin/dashboard" /> : <div className="admin-app"><Login /></div>
              }
            />
            <Route
              path="/admin/dashboard/*"
              element={
                user ? <div className="admin-app"><Dashboard /></div> : <Navigate to="/admin" />
              }
            />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
          {!isChatRoute && <Footer />}
        </MainLayout>
      </Suspense>
    </>
  );
}

function App() {
  const { loading: portfolioLoading } = usePortfolio();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Initialize Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "App" : "App light-mode"}>
      {portfolioLoading || authLoading ? (
        <Preloader />
      ) : (
        <Router>
          <AppContent user={user} />
        </Router>
      )}
    </div>
  );
}

export default App;
