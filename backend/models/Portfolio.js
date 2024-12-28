const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Mengimpor konfigurasi database

class Portfolio extends Model {}

Portfolio.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdBy: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Portfolio',
  tableName: 'portfolios',
  timestamps: true // Menambahkan createdAt dan updatedAt
});

module.exports = Portfolio;
