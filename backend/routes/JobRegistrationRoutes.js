const express = require('express');
const router = express.Router();
const jobRegistrationController = require('../controllers/jobRegistrationController');

router.post('/register-job', jobRegistrationController.registerJob);

module.exports = router;
