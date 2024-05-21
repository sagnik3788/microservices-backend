const express = require('express');
 const { User , Order, Rating } = require('../models');

const router = express.Router();

// Retrieve all online restaurants
router.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll({ where: { isOnline: true } });
  res.json(restaurants);
});

// Place an order
router.post('/order', async (req, res) => {
  const { userId, restaurantId, items } = req.body;
  const order = await Order.create({ userId, restaurantId, items, status: 'Pending' });
  res.status(201).json(order);
});

// Leave a rating
router.post('/rating', async (req, res) => {
  const { userId, orderId, deliveryAgentId, rating, comment } = req.body;
  const newRating = await Rating.create({ userId, orderId, deliveryAgentId, rating, comment });
  res.status(201).json(newRating);
});

module.exports = router;
