import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import UserReviews from "../components/UserReviews";
import "../styles/ServiceDetails.css";
import "../styles/RatingReview.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    // Save the review to backend (not implemented here)
    setReviews([...reviews, review]);
  };

  if (!service) {
    return <div className="service-details-container">Service not found</div>;
  }

  return (
    <div className="service-details-container">
      <div className="service-image">
        <img src={service.imageUrl} alt={service.name} />
      </div>
      <div className="service-card">
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <p>
          <b>Address:</b> {service.address}
        </p>
        <p>
          <b>Contact:</b> {service.contact}
        </p>
        <Link to="/services" className="back-button">
          Back to Services
        </Link>
      </div>
      <UserReviews onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default ServiceDetails;
