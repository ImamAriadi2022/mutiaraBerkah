const AboutUs = require('../models/AboutUs'); // Import model AboutUs

// Fungsi untuk mendapatkan informasi "About Us"
exports.getAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne({ where: { id: 1 } });
    if (!aboutUs) {
      return res.status(404).json({ message: 'About Us content not found.' });
    }
    res.status(200).json(aboutUs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching About Us content.' });
  }
};

// Fungsi untuk membuat atau mengupdate informasi "About Us"
exports.createOrUpdateAboutUs = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Cek apakah data About Us sudah ada
    let aboutUs = await AboutUs.findOne({ where: { id: 1 } });

    if (aboutUs) {
      // Update konten "About Us" jika sudah ada
      aboutUs.title = title;
      aboutUs.content = content;
      await aboutUs.save();
      res.status(200).json({ message: 'About Us content updated successfully!', data: aboutUs });
    } else {
      // Buat konten "About Us" baru jika belum ada
      aboutUs = await AboutUs.create({ title, content });
      res.status(201).json({ message: 'About Us content created successfully!', data: aboutUs });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while creating or updating About Us content.' });
  }
};

// Fungsi untuk menghapus informasi "About Us"
exports.deleteAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findOne({ where: { id: 1 } });

    if (!aboutUs) {
      return res.status(404).json({ message: 'About Us content not found.' });
    }

    await aboutUs.destroy();
    res.status(200).json({ message: 'About Us content deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting About Us content.' });
  }
};
