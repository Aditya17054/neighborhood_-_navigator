import React from "react";

const CategoryFilter = ({ categories, onFilter }) => {
  return (
    <div className="category-filter">
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
