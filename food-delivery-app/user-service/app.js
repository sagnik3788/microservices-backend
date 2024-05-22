const express = require('express');
const sequelize = require('./database');
const userRoutes = require('./routes');
const { Restaurant } = require('./models'); 

const app = express();
app.use(express.json());
app.use(userRoutes);

// Connect to the database and start the server
sequelize.sync().then(async () => {
  await Restaurant.sync(); // Sync Restaurant model
  app.listen(3000, () => {
    console.log('User Service listening on port 3000');
  });
});
