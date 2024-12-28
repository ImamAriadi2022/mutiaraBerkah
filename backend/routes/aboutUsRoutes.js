const express = require('express');
const { getAboutUs, createOrUpdateAboutUs, deleteAboutUs } = require('../controllers/aboutUsController');

const router = express.Router();

// Rute untuk mendapatkan konten "About Us"
router.get('/', getAboutUs);

// Rute untuk membuat atau mengupdate konten "About Us"
router.post('/', createOrUpdateAboutUs);

// Rute untuk menghapus konten "About Us"
router.delete('/', deleteAboutUs);

module.exports = router;
