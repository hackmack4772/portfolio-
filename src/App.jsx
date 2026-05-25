import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Lenis from "lenis";
import { useLoading } from "./Context/LoadingContext";
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

function App() {
  const { isLoading, handleLoading } = useLoading();
  const [showLoader, setShowLoader] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    handleLoading(true);
    const minLoaderTime = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    const stopLoader = setTimeout(() => {
      handleLoading(false);
      setContentReady(true);
    }, 2000);

    return () => {
      clearTimeout(minLoaderTime);
      clearTimeout(stopLoader);
    };
  }, [handleLoading]);

  const { isDarkMode } = useDarkMode();
  const isChatRoute =
    location.pathname === "/login" ||
    location.pathname === "/users" ||
    location.pathname === "/not-found" ||
    location.pathname.startsWith("/chat") ||
    location.pathname.startsWith("/admin");

  return (
    <div className={isDarkMode ? "App" : "App light-mode"}>
      <Router>
        {showLoader || !contentReady ? (
          <Preloader isLoading={true} />
        ) : (
          <>
            {!isChatRoute && <Navbar />}

            <Suspense fallback={<Preloader isLoading={true} />}>
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
        )}
      </Router>
    </div>
  );
}

export default App;
