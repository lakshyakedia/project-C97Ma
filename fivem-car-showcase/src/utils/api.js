const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Car = require('../models/Car');

// Get all cars
router.get('/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific car
router.get('/cars/:id', getCar, (req, res) => {
  res.json(res.car);
});

// Create a new car
router.post('/cars', async (req, res) => {
  const car = new Car({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  });

  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a car
router.patch('/cars/:id', getCar, async (req, res) => {
  if (req.body.name != null) {
    res.car.name = req.body.name;
  }
  if (req.body.description != null) {
    res.car.description = req.body.description;
  }
  if (req.body.price != null) {
    res.car.price = req.body.price;
  }
  if (req.body.image != null) {
    res.car.image = req.body.image;
  }

  try {
    const updatedCar = await res.car.save();
    res.json(updatedCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a car
router.delete('/cars/:id', getCar, async (req, res) => {
  try {
    await res.car.remove();
    res.json({ message: 'Deleted Car' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCar(req, res, next) {
  let car;
  try {
    car = await Car.findById(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: 'Cannot find car' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.car = car;
  next();
}

module.exports = router;