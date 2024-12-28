const JobRegistration = require('../models/JobRegistration'); // Model untuk menyimpan data pendaftaran

exports.registerJob = async (req, res) => {
  try {
    const { personalData, marketingWords } = req.body;

    // Validasi input
    if (!personalData || !marketingWords) {
      return res.status(400).json({ message: 'Personal data and marketing words are required.' });
    }

    // Simpan data pendaftaran pekerjaan
    const jobRegistration = await JobRegistration.create({
      personalData: JSON.stringify(personalData),  // Convert to string if needed
      marketingWords: JSON.stringify(marketingWords),
    });

    res.status(201).json({ message: 'Job registration successful!', jobRegistration });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering the job.' });
  }
};
