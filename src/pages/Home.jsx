import React, { useState, useEffect } from "react"; 
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

// Swiper for hero slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Contact from "./Contact";
import About from "./About";

const dummyServices = [
  {
    id: 1,
    name: "Gates",
    description: "Custom-made steel and sliding gates for homes and businesses, built to last.",
    category: "Welding",
    image: "/assets/gate.jpg",
  },
  {
    id: 2,
    name: "Burglar Proof",
    description: "Strong and stylish burglar bars for windows and doors to keep your property safe.",
    category: "Security",
    image: "/assets/burglar.jpg",
  },
  {
    id: 3,
    name: "Car Ports",
    description: "Durable and modern carports designed to protect your vehicle from sun and rain.",
    category: "Shelters",
    image: "/assets/carporta.webp",
  },
  {
    id: 4,
    name: "Sliding Burglar",
    description: "Smooth-sliding steel burglar doors offering easy access and solid protection.",
    category: "Security",
    image: "/assets/slide.jpg",
  },
  {
    id: 5,
    name: "Washing Line",
    description: "Steel washing lines designed for convenience, durability, and everyday use.",
    category: "Home Utility",
    image: "/assets/line.jpg",
  },
  {
    id: 6,
    name: "Balcon",
    description: "Beautiful, secure balcony railings and extensions for homes and apartments.",
    category: "Metalwork",
    image: "/assets/balcony11.jpeg",
  },
];

const Home = () => {
  const [search] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  const filteredProducts = dummyServices.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  // Show scroll-to-top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-page">

      {/* ===== Hero Slider ===== */}
      <section className="hero-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
        >
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/gate12.png')" }}
            >
              <div className="overlay">
                <h2>Custom Steel Gates</h2>
                <p>Strong, secure, and stylish gates designed for your home or business.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/burglar.jpg')" }}
            >
              <div className="overlay">
                <h2>Burglar Proofing</h2>
                <p>Protect your family and property with durable burglar bars and safety doors.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/carport.jpg')" }}
            >
              <div className="overlay">
                <h2>Car Ports & Shades</h2>
                <p>Stylish carports built to protect your vehicles from the elements.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/slide.jpg')" }}
            >
              <div className="overlay">
                <h2>Sliding Burglar Doors</h2>
                <p>Easy-slide steel doors that combine safety and convenience.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/line.jpg')" }}
            >
              <div className="overlay">
                <h2>Washing Lines</h2>
                <p>Functional and long-lasting washing lines for everyday use.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('/assets/balcony11.jpeg')" }}
            >
              <div className="overlay">
                <h2>Balcony Railings</h2>
                <p>Elegant, secure, and durable balcony railing solutions for all styles.</p>
                <a
                  href="https://wa.me/27838833388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quote-btn"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="container section layout">
        {/* ===== Products Grid ===== */}
        <section className="products-section">
          <h2>Our Services</h2>
          <div className="card-wrapper">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No services match your filters.</p>
            )}
          </div>
        </section>
      </div>

      {/* ===== Video Section ===== */}
      <section className="video-section">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/assets/welder123.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
          <h2>TITO’S WELDER</h2>
          <p>Precision, Strength, and Style — Custom Steelwork Built to Last.</p>
        </div>
      </section>
      <Contact/>
      <About/>

      {/* ===== Scroll to Top Button ===== */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
