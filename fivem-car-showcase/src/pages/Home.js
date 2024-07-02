import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('api/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars: ', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Welcome to Fivem Car Showcase</h1>
      <div className="card-container">
        {cars.map((car) => (
          <Card key={car.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={car.image} />
            <Card.Body>
              <Card.Title>{car.make} {car.model}</Card.Title>
              <Card.Text>{car.description}</Card.Text>
              <Button variant="primary">View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;