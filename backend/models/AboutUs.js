const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AboutUs = sequelize.define('AboutUs', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  // Tentukan opsi lain jika perlu
});

module.exports = AboutUs;
