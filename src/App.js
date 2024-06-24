import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceListing from "./pages/ServiceListing";
import ServiceDetails from "./pages/ServiceDetails";
import "./styles/App.css";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60; // Adjust this value based on your header height
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("scrolled-header", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <Router>
      <div>
        <header>
          <h1>Neighborhood Navigator</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/#features" scroll={(el) => scrollWithOffset(el)}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#about-us" scroll={(el) => scrollWithOffset(el)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#gallery" scroll={(el) => scrollWithOffset(el)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" scroll={(el) => scrollWithOffset(el)}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#contact-us" scroll={(el) => scrollWithOffset(el)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/list" element={<ServiceListing />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
          </Routes>
        </div>
        <footer>
          <p>© 2024 Neighborhood Navigator</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
