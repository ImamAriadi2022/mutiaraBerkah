const Article = require('../models/Article'); // Import model Article

// Fungsi untuk mendapatkan semua artikel
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    if (articles.length === 0) {
      return res.status(404).json({ message: 'No articles found.' });
    }
    res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching articles.' });
  }
};

// Fungsi untuk mendapatkan artikel berdasarkan ID
exports.getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }
    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the article.' });
  }
};

// Fungsi untuk membuat artikel baru
exports.createArticle = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Validasi data
    if (!title || !content || !author) {
      return res.status(400).json({ message: 'Title, content, and author are required.' });
    }

    const article = await Article.create({ title, content, author });
    res.status(201).json({ message: 'Article created successfully!', data: article });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating the article.' });
  }
};

// Fungsi untuk mengupdate artikel
exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    // Validasi data
    if (!title || !content || !author) {
      return res.status(400).json({ message: 'Title, content, and author are required.' });
    }

    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }

    // Update artikel
    article.title = title;
    article.content = content;
    article.author = author;
    await article.save();

    res.status(200).json({ message: 'Article updated successfully!', data: article });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the article.' });
  }
};

// Fungsi untuk menghapus artikel
exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findByPk(id);

    if (!article) {
      return res.status(404).json({ message: 'Article not found.' });
    }

    await article.destroy();
    res.status(200).json({ message: 'Article deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the article.' });
  }
};
