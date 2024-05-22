const express = require('express');
const sequelize = require('./database');
const restaurantRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(restaurantRoutes);

// Connect to the database and start the server
sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Restaurant Service listening on port 3001');
  });
});
