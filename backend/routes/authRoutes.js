const express = require('express');
const { register, login, verifyToken } = require('../controllers/authController');

const router = express.Router();

// Rute untuk registrasi
router.post('/register', register);

// Rute untuk login
router.post('/login', login);

// Rute yang memerlukan autentikasi token
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
