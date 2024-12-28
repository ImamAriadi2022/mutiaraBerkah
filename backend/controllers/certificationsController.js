const Certification = require('../models/Certification'); // Pastikan Anda sudah membuat model Certification

// Fungsi untuk menambah sertifikasi
exports.addCertification = async (req, res) => {
  try {
    const { title, description, issueDate, certificateUrl } = req.body;

    // Validasi input
    if (!title || !description || !issueDate || !certificateUrl) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Menambahkan sertifikasi baru
    const certification = await Certification.create({
      title,
      description,
      issueDate,
      certificateUrl,
    });

    res.status(201).json({ message: 'Certification added successfully!', certification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the certification.' });
  }
};

// Fungsi untuk mendapatkan semua sertifikasi
exports.getAllCertifications = async (req, res) => {
  try {
    const certifications = await Certification.findAll();
    res.status(200).json(certifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching certifications.' });
  }
};

// Fungsi untuk mendapatkan sertifikasi berdasarkan ID
exports.getCertificationById = async (req, res) => {
  try {
    const { id } = req.params;
    const certification = await Certification.findByPk(id);

    if (!certification) {
      return res.status(404).json({ message: 'Certification not found.' });
    }

    res.status(200).json(certification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching the certification.' });
  }
};

// Fungsi untuk mengupdate sertifikasi
exports.updateCertification = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, issueDate, certificateUrl } = req.body;

    // Cek apakah sertifikasi ada
    const certification = await Certification.findByPk(id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found.' });
    }

    // Update sertifikasi
    certification.title = title || certification.title;
    certification.description = description || certification.description;
    certification.issueDate = issueDate || certification.issueDate;
    certification.certificateUrl = certificateUrl || certification.certificateUrl;

    await certification.save();

    res.status(200).json({ message: 'Certification updated successfully!', certification });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while updating the certification.' });
  }
};

// Fungsi untuk menghapus sertifikasi
exports.deleteCertification = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek apakah sertifikasi ada
    const certification = await Certification.findByPk(id);
    if (!certification) {
      return res.status(404).json({ message: 'Certification not found.' });
    }

    // Hapus sertifikasi
    await certification.destroy();

    res.status(200).json({ message: 'Certification deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the certification.' });
  }
};
