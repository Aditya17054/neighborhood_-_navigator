import React, { useState } from "react";
import servicesData from "../data/servicesData";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const ServiceListing = () => {
  const [filteredServices, setFilteredServices] = useState(servicesData);

  const handleSearch = (query) => {
    const filtered = servicesData.filter((service) =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleFilter = (category) => {
    const filtered = category
      ? servicesData.filter((service) => service.category === category)
      : servicesData;
    setFilteredServices(filtered);
  };

  const categories = [
    ...new Set(servicesData.map((service) => service.category)),
  ];

  return (
    <div>
      <h2>Service Listings</h2>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter categories={categories} onFilter={handleFilter} />
      <ul>
        {filteredServices.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListing;
