const express = require('express');
const { addCertification, getAllCertifications, getCertificationById, updateCertification, deleteCertification } = require('../controllers/certificationController');

const router = express.Router();

// Rute untuk menambah sertifikasi
router.post('/', addCertification);

// Rute untuk mendapatkan semua sertifikasi
router.get('/', getAllCertifications);

// Rute untuk mendapatkan sertifikasi berdasarkan ID
router.get('/:id', getCertificationById);

// Rute untuk memperbarui sertifikasi berdasarkan ID
router.put('/:id', updateCertification);

// Rute untuk menghapus sertifikasi berdasarkan ID
router.delete('/:id', deleteCertification);

module.exports = router;
