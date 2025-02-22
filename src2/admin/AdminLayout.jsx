import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import AdminProjects from "./AdminProjects";
import AdminEducation from "./AdminEducation";
import AdminHome from "./AdminHome";
import AdminHome2 from "./AdminHome2";
import ContactUsSettings from "./ContactUsSettings";
import ContactUsListing from "./ContactUsListing";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Card } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../src/config/firebase";
import "./adminlayout.css";
import AuthPage from "./AuthPage";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginRoute = location.pathname.endsWith("/login");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is authenticated and on the login page, redirect to dashboard
        if (isLoginRoute) {
          navigate("/admin/edit-home");
        }
      } else {
        // If user is not authenticated, redirect to login page
        if (!isLoginRoute) {
          navigate("/admin/login");
        }
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, [isLoginRoute, navigate]);

  return (
    <>
      {!isLoginRoute && <Header />}
      <div className="main-layout">
        {!isLoginRoute && <Navigation />}
        <div className="admin-layout-container">
          <Card>
            <Card.Body>
              <Routes>
                <Route path="login" element={<AuthPage />} />
                <Route path="edit-projects" element={<AdminProjects />} />
                <Route path="edit-education" element={<AdminEducation />} />
                <Route path="edit-home" element={<AdminHome />} />
                <Route path="edit-home2" element={<AdminHome2 />} />
                <Route path="edit-contact" element={<ContactUsSettings />} />
                <Route path="contact-listing" element={<ContactUsListing />} />
                {/* Redirect to login for unknown routes */}
                <Route path="*" element={<Navigate to="/admin/login" />} />
              </Routes>
            </Card.Body>
          </Card>
        </div>
      </div>
      {!isLoginRoute && <Footer />}
    </>
  );
};

export default AdminLayout;
