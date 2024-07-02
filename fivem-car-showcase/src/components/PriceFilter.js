import React, { useState } from 'react';

const PriceFilter = ({ cars, setFilteredCars }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    const filteredCars = cars.filter(car => car.price >= minPrice && car.price <= maxPrice);
    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default PriceFilter;