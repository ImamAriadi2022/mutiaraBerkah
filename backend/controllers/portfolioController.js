const Portfolio = require('../models/Portfolio'); // Mengimpor model Portfolio

// Menambahkan video portfolio baru
exports.addPortfolio = async (req, res) => {
  try {
    const { title, description, videoUrl, createdBy } = req.body;

    // Membuat entri portfolio baru
    const newPortfolio = await Portfolio.create({
      title,
      description,
      videoUrl,
      createdBy,
    });

    res.status(201).json({
      message: 'Portfolio berhasil ditambahkan',
      portfolio: newPortfolio
    });
  } catch (error) {
    console.error('Error adding portfolio:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menambahkan portfolio',
      error: error.message
    });
  }
};

// Mengambil semua portfolio
exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.findAll();

    if (portfolios.length === 0) {
      return res.status(404).json({ message: 'Tidak ada portfolio yang ditemukan' });
    }

    res.status(200).json(portfolios);
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil portfolio',
      error: error.message
    });
  }
};

// Mengambil satu portfolio berdasarkan ID
exports.getPortfolioById = async (req, res) => {
  try {
    const portfolioId = req.params.id;
    const portfolio = await Portfolio.findByPk(portfolioId);

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio tidak ditemukan' });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil portfolio',
      error: error.message
    });
  }
};

// Memperbarui portfolio
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolioId = req.params.id;
    const { title, description, videoUrl, createdBy } = req.body;

    const portfolio = await Portfolio.findByPk(portfolioId);

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio tidak ditemukan' });
    }

    // Memperbarui portfolio
    await portfolio.update({
      title,
      description,
      videoUrl,
      createdBy
    });

    res.status(200).json({
      message: 'Portfolio berhasil diperbarui',
      portfolio
    });
  } catch (error) {
    console.error('Error updating portfolio:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat memperbarui portfolio',
      error: error.message
    });
  }
};

// Menghapus portfolio
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolioId = req.params.id;

    const portfolio = await Portfolio.findByPk(portfolioId);

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio tidak ditemukan' });
    }

    // Menghapus portfolio
    await portfolio.destroy();

    res.status(200).json({
      message: 'Portfolio berhasil dihapus'
    });
  } catch (error) {
    console.error('Error deleting portfolio:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menghapus portfolio',
      error: error.message
    });
  }
};
