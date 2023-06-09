import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="nav-logo">
        <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/register">Register</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
