const express = require('express');
const axios= require("axios")
 const { User , Order, Rating , Restaurant } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("user-service running");
});

router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({ where: { isOnline: true } });
    res.json(restaurants);
  } catch (error) {
    console.error('Error retrieving restaurants:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Place an order
router.post('/order', async (req, res) => {
  try {
    const { userId, restaurantId, items } = req.body;
    const order = await Order.create({ userId, restaurantId, items, status: 'Pending' });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Leave a rating
router.post('/rating', async (req, res) => {
  const { userId, orderId, deliveryAgentId, rating, comment } = req.body;
  const newRating = await Rating.create({ userId, orderId, deliveryAgentId, rating, comment });
  res.status(201).json(newRating);
});

module.exports = router;