const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const DeliveryAgent = sequelize.define('DeliveryAgent', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = DeliveryAgent;
