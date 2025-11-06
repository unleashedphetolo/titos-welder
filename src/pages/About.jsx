import React from "react";
import "../styles/About.css";
import { FaTools, FaHandshake, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="overlay">
          <h1>TITO’S WELDER</h1>
          <p>Precision. Strength. Craftsmanship.</p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="about-container">
        <h2>About Us</h2>
        <p className="intro">
          At <strong>TITO’S WELDER</strong>, we specialize in top-tier welding and metal fabrication — 
          including gates, burglar proofing, carports, and custom metal projects.
          Our mission is to deliver unmatched durability, modern design, and
          complete customer satisfaction.
        </p>

        <div className="highlights">
          <div className="highlight">
            <FaTools className="icon" />
            <h3>Expert Craftsmanship</h3>
            <p>
              Every weld and design is executed with precision and years of
              experience to ensure long-lasting quality.
            </p>
          </div>

          <div className="highlight">
            <FaHandshake className="icon" />
            <h3>Reliable Service</h3>
            <p>
              We pride ourselves on punctuality, honesty, and professionalism —
              delivering every project on time and within budget.
            </p>
          </div>

          <div className="highlight">
            <FaShieldAlt className="icon" />
            <h3>Quality You Can Trust</h3>
            <p>
              From residential gates to commercial structures, our builds are
              designed for strength, safety, and elegance.
            </p>
          </div>
        </div>

        <div className="cta">
          <a href="/contact" className="btn-primary">
            Get a Quote
          </a>
          <p className="contact-info">📞 Call us: <strong>083 883 3388</strong></p>
        </div>
      </div>
    </section>
  );
};

export default About;
