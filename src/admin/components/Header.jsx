// src/components/Header.js
import React from "react";

const Header = () => (
  <header role="banner">
    <h1>HackmackManager</h1>
    <ul className="utilities">
      <li className="users">
        <a href="#">My Account</a>
      </li>
      <li className="logout warn">
        <a href="#">Log Out</a>
      </li>
    </ul>
  </header>
);

export default Header;
