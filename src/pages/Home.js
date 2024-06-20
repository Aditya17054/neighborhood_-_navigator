import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Make sure this path is correct

const Home = () => {
  return (
    <div className="home">
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Welcome to Neighborhood Navigator!</h1>
          <p>Your one-stop solution to find and explore local services.</p>
          <div className="hero-buttons">
            <Link to="/services" className="cta-button">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item card">
            <i className="fas fa-search"></i>
            <h3>Find Local Services</h3>
            <p>Quickly find services near you.</p>
          </div>
          <div className="feature-item card">
            <i className="fas fa-th-list"></i>
            <h3>Explore Categories</h3>
            <p>Browse services by category.</p>
          </div>
          <div className="feature-item card">
            <i className="fas fa-star"></i>
            <h3>Top Rated</h3>
            <p>Discover the best services based on user ratings.</p>
          </div>
        </div>
      </section>
      <hr />

      <section id="about-us" className="about-us">
        <h2>About Us</h2>
        <p>
          Neighborhood Navigator is dedicated to helping you discover and
          explore local services in your area. Our mission is to provide a
          comprehensive platform where users can find reliable services and
          share their experiences.
        </p>
      </section>
      <hr />

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-list">
          <div className="gallery-item">
            <img
              src="https://images.indianexpress.com/2024/02/mumbai-itc-south-indian-restaurant.jpg"
              alt="GalleryImage1"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://media.istockphoto.com/id/1317007945/photo/exterior-view-of-a-typical-american-school-building.jpg?s=612x612&w=0&k=20&c=FffTSUEMo9VODNLVR6AL7KEEgdMIucu5wgixzTMiBgk="
              alt="GalleryImage2"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/apollo-proton_mobile-613c4b376e4c8-1-3.jpg"
              alt="GalleryImage3"
            />
          </div>
        </div>
      </section>
      <hr />

      <section id="testimonials" className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item card">
            <p>"This app helped me find the best local restaurant!"</p>
            <h4>Dhruv Solanki</h4>
          </div>
          <div className="testimonial-item card">
            <p>"A must-have for anyone new to the neighborhood."</p>
            <h4>Saurabh Sharma</h4>
          </div>
        </div>
      </section>
      <hr />

      <section id="contact-us" className="contact-us">
        <h2>Contact Us</h2>
        <form className="form1">
          <div className="contact-inputs">
            <div className="contact-input">
              <label htmlFor="fullName">Full Name:</label>
              <br />
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div className="contact-input">
              <label htmlFor="emailID">Email ID:</label>
              <br />
              <input type="email" id="emailID" name="emailID" />
            </div>
            <div className="contact-input">
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input type="text" id="mobileNumber" name="mobileNumber" />
            </div>
          </div>
          <div className="message-input">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit" className="button">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
