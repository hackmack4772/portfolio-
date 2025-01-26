import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import Education from "./components/Education/Education";
import ScrollToTop from "./components/ScrollToTop";
import Chat from "./chat/Chat";
import ListUsers from "./chat/ListUsers";
import Login from "./chat/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLayout from "./admin/AdminLayout";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const isChatRoute =
    location.pathname === "/login" ||
    location.pathname === "/users" ||
    location.pathname.startsWith("/chat") ||
    location.pathname.startsWith("/admin");
  const MainContent = () => {
    const PrivateRoute = ({ element: Component, ...rest }) => {
      const token = localStorage.getItem("token");
      return token ? <Component {...rest} /> : <Navigate to="/login" />;
    };

    return (
      <>
        {!isChatRoute && <Navbar />}
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />

          <Route
            path="/chat/:usersdata"
            element={<PrivateRoute element={Chat} />}
          />
          <Route path="/users" element={<PrivateRoute element={ListUsers} />} />
          <Route path="/admin/*" element={<AdminLayout />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {!isChatRoute && <Footer />}{" "}
      </>
    );
  };

  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "App dark-mode" : "App light-mode"}>
      <Router>
        <Preloader load={load} />
        {!load && (
          <div id={load ? "no-scroll" : "scroll"}>
            <MainContent />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
