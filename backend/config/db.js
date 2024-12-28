const { Sequelize } = require('sequelize');

// Konfigurasi koneksi ke database
const sequelize = new Sequelize('nama_database', 'username', 'password', {
  host: 'localhost', // Ganti dengan host database Anda jika bukan localhost
  dialect: 'mysql',  // Dialek yang digunakan (MySQL)
  logging: false,    // Nonaktifkan logging query SQL
});

// Test koneksi ke database
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Keluar dari proses jika koneksi gagal
  }
};

testConnection();

module.exports = sequelize;
