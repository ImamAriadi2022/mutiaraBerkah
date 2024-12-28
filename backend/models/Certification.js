const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Certification = sequelize.define('Certification', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  certificateUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,  // Menambahkan createdAt dan updatedAt
});

module.exports = Certification;
