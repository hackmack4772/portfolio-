// src/components/Header.js
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        navigate("admin/login"); // Redirect to the login page
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };
  return (
    <header role="banner">
      <h1>HackmackManager</h1>
      <ul className="utilities">
        <li className="users">
          <a href="#">My Account</a>
        </li>
        <li className="logout warn">
          <a href="#" onClick={handleLogout}>
            Log Out
          </a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
