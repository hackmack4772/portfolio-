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
import MainLayout from "./components/ui/MainLayout";

// Lazy load components.
// Navbar and LandingPage are also prefetched during the boot screen (see
// below), so dismissing it does not then wait on another network round trip.
const importNavbar = () => import("./components/Navbar/Navbar");
const importLandingPage = () => import("./pages/LandingPage/LandingPage");

const Navbar = lazy(importNavbar);
const LandingPage = lazy(importLandingPage);
const Footer = lazy(() => import("./components/Footer/Footer"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const About = lazy(() => import("./pages/About/About"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Resume = lazy(() => import("./pages/Resume/ResumeNew"));
const Education = lazy(() => import("./pages/Education/Education"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

// The admin panel was statically imported, so every visitor downloaded it -
// along with firebase/auth and firebase/storage - before the home page could
// paint. It is now its own chunk, loaded only when /admin is opened.
const Login = lazy(() => import("./admin/Login.jsx"));
const Dashboard = lazy(() => import("./admin/Dashboard.jsx"));

/**
 * Subscribes to Firebase auth, but only once an /admin route is actually
 * visited. The public site used to block its first paint on this round trip
 * even though nothing outside /admin reads the result.
 */
function AdminGate({ view }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = () => {};
    let cancelled = false;

    (async () => {
      const [{ onAuthStateChanged }, { auth }] = await Promise.all([
        import("firebase/auth"),
        import("./admin/utils/firebase"),
      ]);
      if (cancelled) return;
      unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setAuthLoading(false);
      });
    })();

    return () => {
      cancelled = true;
      unsubscribe();
    };
  }, []);

  if (authLoading) return <Preloader />;

  if (view === "login") {
    return user ? <Navigate to="/admin/dashboard" /> : <div className="admin-app"><Login /></div>;
  }
  return user ? <div className="admin-app"><Dashboard /></div> : <Navigate to="/admin" />;
}

function AppContent() {
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
            <Route path="/admin" element={<AdminGate view="login" />} />
            <Route path="/admin/dashboard/*" element={<AdminGate view="dashboard" />} />
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

  // Warm the chunks the first screen needs while the boot screen is still up,
  // so dismissing it does not hand the user a second wait.
  useEffect(() => {
    importNavbar();
    importLandingPage();
  }, []);

  // Smooth scroll, desktop only.
  //
  // Lenis replaces the browser's native scrolling with a JS rAF loop. On a
  // phone that is a downgrade in both directions: it throws away the OS
  // momentum curve users expect, and it adds a third always-on rAF loop
  // alongside the two background canvases. Touch devices keep native
  // scrolling; reduced-motion users keep it too.
  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touch || reduced) return;

    const lenis = new Lenis({
      // Slightly shorter and on an expo-out curve, matching
      // --ease-out-quint in the stylesheet so wheel scrolling and UI
      // transitions decelerate with the same character.
      duration: 1.05,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    // Lenis owns the scroll position, so in-page anchors must go through it
    // or the browser and Lenis fight over the same scroll.
    const onAnchorClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]');
      const id = link?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -112 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "App" : "App light-mode"}>
      {portfolioLoading ? (
        <Preloader />
      ) : (
        <Router>
          <AppContent />
        </Router>
      )}
    </div>
  );
}

export default App;
