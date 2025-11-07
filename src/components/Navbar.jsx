// src/components/Navbar.js
import React, { useState } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX, FiFileText } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/welderlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden"; // Prevent scroll
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </div>
          <div className="logo-section">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Flenny Scent Logo" className="logo-image" />
              <div className="logo-text">
                <span className="brand-name">TITO'S WELDER</span>
                <span className="slogan">Strong Welds. Stronger Trust.</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <a href="/New.pdf" download title="Download CV">
            <FiFileText size={22} color="#0843a2" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            {/* <Link to="/Services">Services</Link> */}
            <a href="/services">Services</a>
          </li>
          <li>
            {/* <Link to="/Contact">Contact</Link> */}
            <a href="/contact">Contact</a>
          </li>
          <div className="desktop-icons">
            <a href="/P" download title="Download CV">
              <FiFileText size={22} color="#0843a2" className="icon" />
            </a>
          </div>
        </ul>
      </nav>

      {isOpen && <Sidebar closeMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
