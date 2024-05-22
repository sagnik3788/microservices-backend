const express = require('express');
const { Restaurant, Order, DeliveryAgent } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("restaurant-service running");
});

// Update menu, pricing, and availability
router.put('/restaurant/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const restaurant = await Restaurant.findByPk(id);
  if (restaurant) {
    await restaurant.update(updates);
    res.json(restaurant);
  } else {
    res.status(404).json({ error: 'Restaurant not found' });
  }
});

// Accept/reject order and process it
router.put('/order/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByPk(id);
  if (order) {
    await order.update({ status });
    if (status === 'Accepted') {
      const deliveryAgent = await DeliveryAgent.findOne({ where: { isAvailable: true } });
      if (deliveryAgent) {
        await deliveryAgent.update({ isAvailable: false });
        await order.update({ deliveryAgentId: deliveryAgent.id });
      }
    }
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

module.exports = router;
