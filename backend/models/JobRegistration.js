const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const JobRegistration = sequelize.define('JobRegistration', {
  personalData: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  marketingWords: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  jobId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Jobs',
      key: 'id',
    },
  }
}, {
  timestamps: true,
});

module.exports = JobRegistration;
