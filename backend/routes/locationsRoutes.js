const express = require('express');
const router = express.Router();
const locationsController = require('../controllers/locationsController');

// Rute untuk menambahkan lokasi baru
router.post('/locations', locationsController.addLocation);

// Rute untuk mengambil semua lokasi
router.get('/locations', locationsController.getLocations);

// Rute untuk mengambil satu lokasi berdasarkan ID
router.get('/locations/:id', locationsController.getLocationById);

// Rute untuk memperbarui lokasi
router.put('/locations/:id', locationsController.updateLocation);

// Rute untuk menghapus lokasi
router.delete('/locations/:id', locationsController.deleteLocation);

module.exports = router;