import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="card">
      <img src={car.image} alt={car.make} />
      <div className="card-body">
        <h5 className="card-title">{car.make} {car.model}</h5>
        <p className="card-text">{car.description}</p>
        <p className="card-text">Price: ${car.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default CarCard;