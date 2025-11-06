import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, message } = formData;
    const whatsappMsg = `Hello, I'm ${name}. ${message}`;
    const whatsappURL = `https://wa.me/27838833388?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’re here to weld, repair, and build strong structures with precision and care.</p>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <span>083 883 3388</span>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>info@titoswelder.co.za</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>Johannesburg, South Africa</span>
          </div>

          <div className="social-links">
            <a href="https://wa.me/27838833388" target="_blank" rel="noreferrer" className="social-btn whatsapp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Get a Quote</h3>
          <p>Fill in your details and service needed, and we’ll reply shortly.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message or Service Needed"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn-submit">
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
