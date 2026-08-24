import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          VRH<span>INFOTECH</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact" className="nav-btn">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;