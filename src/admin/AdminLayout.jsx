// src/layouts/AdminLayout.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminProjects from "./AdminProjects";
import AdminEducation from "./AdminEducation";
import AdminHome from "./AdminHome";
import AdminHome2 from "./AdminHome2";
import ContactUsSettings from "./ContactUsSettings";
import ContactUsListing from "./ContactUsListing";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Card, Button, Row, Col, Table } from "react-bootstrap";

import "./adminlayout.css";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout">
        <Navigation />
        <div className="admin-layout-container">
          <Card>
            <Card.Body>
              <Routes>
                <Route path="edit-projects" element={<AdminProjects />} />
                <Route path="edit-education" element={<AdminEducation />} />
                <Route path="edit-home" element={<AdminHome />} />
                <Route path="edit-home2" element={<AdminHome2 />} />
                <Route path="edit-contact" element={<ContactUsSettings />} />
                <Route path="contact-listing" element={<ContactUsListing />} />
                <Route path="*" element={<Navigate to="/edit-projects" />} />
              </Routes>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
