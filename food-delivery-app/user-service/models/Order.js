const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

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

Order.belongsTo(User);
User.hasMany(Order);

module.exports = Order;
