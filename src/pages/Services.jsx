import React from "react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    "GATES",
    "BURGLAR PROOF",
    "CAR PORTS",
    "SLIDING BURGLAR",
    "WASHING LINE",
    "BALCON",
  ];

  return (
    <div className="page services">
      <h2>Our Services</h2>
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <p className="contact-number">📞 083 883 3388</p>
    </div>
  );
};

export default Services;
