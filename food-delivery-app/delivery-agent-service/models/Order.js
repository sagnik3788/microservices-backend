const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const DeliveryAgent = require('./DeliveryAgent');

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

Order.belongsTo(DeliveryAgent);
DeliveryAgent.hasMany(Order);

module.exports = Order;
