import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useLoading } from "./Context/LoadingContext";
import { useDarkMode } from "./Context/DarkModeContext";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Menu = lazy(() => import("./pages/Menu/Menu"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const Preloader = lazy(() => import("./components/Pre"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
// const Login = lazy(() => import("./chat/Login"));
// const Projects = lazy(() => import("./components/Projects/Projects"));
// const About = lazy(() => import("./components/About/About"));
// const Education = lazy(() => import("./components/Education/Education"));
// const Resume = lazy(() => import("./components/Resume/ResumeNew"));
// const Chat = lazy(() => import("./chat/Chat"));
// const ListUsers = lazy(() => import("./chat/ListUsers"));
// const AdminLayout = lazy(() => import("./admin/AdminLayout"));

function App() {
  const { isLoading = false, handleLoading } = useLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const { isDarkMode } = useDarkMode();
  const isChatRoute =
    location.pathname === "/login" ||
    location.pathname === "/" ||
    location.pathname === "/users" ||
    location.pathname === "/not-found" ||
    location.pathname.startsWith("/chat") ||
    location.pathname.startsWith("/admin");

  const PrivateRoute = ({ element: Component, ...rest }) => {
    const token = localStorage.getItem("token");
    return token ? <Component {...rest} /> : <Navigate to="/login" />;
  };

  const MainContent = () => (
    <Suspense fallback={<div className="loading-screen">Loading...</div>}>
      {!isChatRoute && <Navbar />}
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/not-found" element={<NotFound />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
         */}
        {/* Private Routes */}
        {/* <Route path="/chat/:usersdata" element={<PrivateRoute element={Chat} />} />
        <Route path="/users" element={<PrivateRoute element={ListUsers} />} />
        <Route path="/admin/*" element={<AdminLayout />} /> */}

        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {!isChatRoute && <Footer />}
    </Suspense>
  );

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <Router>
        <Suspense fallback={<Preloader isLoading={isLoading} />}>
          <div id={isLoading ? "no-scroll" : "scroll"} style={{ opacity: !isLoading ? 1 : 0 }}>
            <MainContent />
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
