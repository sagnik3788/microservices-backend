const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Restaurant = sequelize.define('Restaurant', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  menu: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  isOnline: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Restaurant;
