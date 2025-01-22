import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./components/Education/Education";
import Cursor from "./components/Cursor";
import Chat from "./Chat.js";
import ListUsers from "./ListUsers.js";
import Login from "./Login.js";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const MainContent = () => {
    const location = useLocation();
    const isChatRoute = location.pathname === "/chat";

    const PrivateRoute = ({ element: Component, ...rest }) => {
      const token = localStorage.getItem("token");
      console.log(token, "token");
      return token ? <Component {...rest} /> : <Navigate to="/login" />;
    };

    return (
      <>
        {!isChatRoute && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<PrivateRoute element={Chat} />} />
          <Route path="/users" element={<PrivateRoute element={ListUsers} />} />

          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {!isChatRoute && <Footer />}
      </>
    );
  };

  return (
    <div className="App">
      {/* <Cursor /> */}
      <Router>
        <Preloader load={load} />
        {!load && (
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <MainContent />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
