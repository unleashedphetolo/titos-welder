import React from "react";
import "../styles/Footer.css";
import ulterspaceLogo from '../assets/ulterspace.gif';


const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} TITO'S WELDER. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://wa.me/27838833388" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
              <p>Maintained by Ulterspace Team</p>
        <div className="powered-by">
          <span>Powered by</span>
          <a
            href="https://ulterspace.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="ulterspace-link"
          >
            <img src={ulterspaceLogo} alt="Ulterspace Logo" className="ulterspace-logo" />
            <span>Ulterspace</span>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
