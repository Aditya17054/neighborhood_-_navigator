import React, { useState } from "react";
import { Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import "../styles/Services.css";

const Services = () => {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const categories = [
    ...new Set(servicesData.map((service) => service.category)),
  ];

  const handleSearch = (query) => {
    const result = servicesData.filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(result);
  };

  const handleFilter = (category) => {
    const result = category
      ? servicesData.filter((service) => service.category === category)
      : servicesData;
    setFilteredServices(result);
  };

  return (
    <div className="service-details">
      <h2 className="heading1">SERVICES</h2>
      <div className="search-filter-container">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter categories={categories} onFilter={handleFilter} />
      </div>
      <div className="service-grid">
        {filteredServices.map((service) => (
          <div key={service.id} className="service-card1">
            <Link to={`/services/${service.id}`}>
              <img
                src={service.imageUrl}
                alt={service.name}
                className="service-image"
              />
              <h2>{service.name}</h2>
            </Link>
            <p className="description">{service.description}</p>
            <p>Category: {service.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
