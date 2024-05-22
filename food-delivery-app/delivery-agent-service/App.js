const express = require('express');
const sequelize = require('./database');
const deliveryAgentRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(deliveryAgentRoutes);

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log('Delivery Agent Service listening on port 3002');
  });
});
