import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* BRAND */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            VRH<span>INFOTECH</span>
          </Link>

          <p>
            Building modern digital solutions for ambitious
            businesses through technology, innovation and AI.
          </p>

          <div className="footer-social">

            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              in
            </a>

            <a href="https://www.instagram.com/" aria-label="Instagram">
              ig
            </a>

            <a href="https://www.facebook.com/" aria-label="Facebook">
              f
            </a>

          </div>

        </div>


        {/* COMPANY */}

        <div className="footer-column">

          <h3>Company</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>Services</h3>

          <Link to="/services">
            Custom Software
          </Link>

          <Link to="/services">
            Web Development
          </Link>

          <Link to="/services">
            Mobile Apps
          </Link>

          <Link to="/services">
            AI & Agentic AI
          </Link>

          <Link to="/services">
            CRM & ERP
          </Link>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h3>Get In Touch</h3>

          <p>
            📍 Indore, Madhya Pradesh, India
          </p>

          <p>
            📧 support.vrhinfotech@gmail.com
          </p>

          <p>
            📞 +91 7067335422
          </p>

          <Link
            to="/contact"
            className="footer-contact-btn"
          >
            Start a Project →
          </Link>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="container footer-bottom-content">

          <p>
            © {new Date().getFullYear()} VRH Infotech Solutions.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;