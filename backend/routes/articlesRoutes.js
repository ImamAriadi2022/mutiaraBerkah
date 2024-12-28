const express = require('express');
const { getAllArticles, getArticleById, createArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

const router = express.Router();

// Rute untuk mendapatkan semua artikel
router.get('/', getAllArticles);

// Rute untuk mendapatkan artikel berdasarkan ID
router.get('/:id', getArticleById);

// Rute untuk membuat artikel baru
router.post('/', createArticle);

// Rute untuk mengupdate artikel
router.put('/:id', updateArticle);

// Rute untuk menghapus artikel
router.delete('/:id', deleteArticle);

module.exports = router;
