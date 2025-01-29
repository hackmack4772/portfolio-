import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav role="navigation" className="navigation">
    <ul className="main-home">
      <li className="dashboard">
        <Link to="/admin/edit-home">Dashboard</Link>
      </li>
       <li className="dashboard">
        <Link to="/admin/edit-home2">Home </Link>
      </li>
      {/* <li className="write">
        <Link to="/admin/edit-home2">Write Post</Link>
      </li> */}
      <li className="edit">
        <Link to="/admin/edit-projects">Edit Projects</Link>
      </li>
      <li className="comments">
        <Link to="/admin/edit-contact">Manage Comments</Link>
      </li>
      <li className="users">
        <Link to="/admin/contact-listing">Manage Users</Link>
      </li>
      <li className="education">
        <Link to="/admin/edit-education">Manage Education</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
