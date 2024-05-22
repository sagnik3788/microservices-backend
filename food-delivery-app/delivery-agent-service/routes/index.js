const express = require('express');
const { DeliveryAgent, Order } = require('../models');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("delivery-agent-service running");
  });

// Update delivery status
router.put('/order/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByPk(id);
  if (order) {
    await order.update({ status });
    res.json(order);
  } else {
    res.status(404).json({ error: 'Order not found' });
  }
});

module.exports = router;
