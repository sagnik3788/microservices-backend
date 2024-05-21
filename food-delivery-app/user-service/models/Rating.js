const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');
const Order = require('./Order');

const Rating = sequelize.define('Rating', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
  },
});

Rating.belongsTo(User);
User.hasMany(Rating);
Rating.belongsTo(Order);

module.exports = Rating;
