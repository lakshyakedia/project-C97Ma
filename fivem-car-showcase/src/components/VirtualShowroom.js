import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VirtualShowroom = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Virtual Showroom</h1>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <p>Price: {car.price}</p>
            <button>Customize</button>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualShowroom;