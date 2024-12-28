const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Rute untuk menambah pekerjaan
router.post('/add-job', jobController.addJob);

// Rute untuk mendapatkan semua pekerjaan
router.get('/jobs', jobController.getAllJobs);

// Rute untuk mendapatkan pekerjaan berdasarkan ID
router.get('/job/:jobId', jobController.getJobById);

// Rute untuk mendaftar pekerjaan
router.post('/register-job', jobController.registerJob);

// Rute untuk mendapatkan pendaftar pekerjaan berdasarkan job ID
router.get('/job/:jobId/registrations', jobController.getJobRegistrations);

module.exports = router;
