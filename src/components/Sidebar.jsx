// src/components/Sidebar.js
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/welderlogo.png';


const Sidebar = ({ closeMenu }) => {

  return (
    <div className="sidebars">
        <div onClick={closeMenu} className="sidebars-header">
         <div className="logo-sections">
           <Link to="/" className="logo-link">
             <img src={logo} alt="Flenny Scent Logo" className="logo-image" />
               <div className="logo-text">
                  <span className="brand-name">TITO'S WELDER</span>
                  <span className="slogan">Strong Welds. Stronger Trust.</span>
               </div>        
          </Link>
         </div>
          <button onClick={closeMenu} className="close-btn" aria-label="Close sidebar">✕</button>
        </div>

<ul className="sidebars-links">
        <li onClick={closeMenu}>
        <Link to="/">
         Home <span className="arrow">→</span>
        </Link>
        </li>
        <li onClick={closeMenu}>
        <Link to="/About">
         About <span className="arrow">→</span>
        </Link>
        </li>
        <li onClick={closeMenu}>
        <Link to="/Services">
         Services <span className="arrow">→</span>
        </Link>
        </li>
        <li onClick={closeMenu}>
        <Link to="/Contact">
         Contact <span className="arrow">→</span>
        </Link>
        </li>        
        <li onClick={closeMenu}><a href="mailto:ulterspace@gmail.com">Help Centre</a></li>
      </ul>

    </div>
    );
  };

export default Sidebar;