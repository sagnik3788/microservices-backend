const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Restaurant = require('./Restaurant');

const Order = sequelize.define('Order', {
  items: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Order.belongsTo(Restaurant);
Restaurant.hasMany(Order);

module.exports = Order;
