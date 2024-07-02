import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Purchase = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`api/cars/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car:', error);
      }
    };

    fetchCar();
  }, [id]);

  const handlePurchase = async () => {
    try {
      await axios.post('api/purchase', { carId: car.id });
      alert('Purchase successful!');
    } catch (error) {
      console.error('Error purchasing car:', error);
      alert('Failed to purchase car. Please try again later.');
    }
  };

  return (
    <div>
      {car ? (
        <div>
          <h2>{car.make} {car.model}</h2>
          <img src={car.image} alt={`${car.make} ${car.model}`} />
          <p>Price: ${car.price}</p>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Purchase;