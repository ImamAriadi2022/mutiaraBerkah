const Job = require('../models/Job');  // Pastikan model 'Job' telah dibuat
const JobRegistration = require('../models/JobRegistration');  // Model untuk menyimpan data pendaftaran

// Fungsi untuk menambahkan pekerjaan baru
exports.addJob = async (req, res) => {
  try {
    const { title, description, salary, location, company } = req.body;

    if (!title || !description || !salary || !location || !company) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const job = await Job.create({
      title,
      description,
      salary,
      location,
      company
    });

    res.status(201).json({ message: 'Job added successfully!', job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the job.' });
  }
};

// Fungsi untuk mendapatkan daftar pekerjaan
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();  // Mengambil semua pekerjaan dari database

    res.status(200).json({ jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the jobs.' });
  }
};

// Fungsi untuk mendapatkan pekerjaan berdasarkan ID
exports.getJobById = async (req, res) => {
  try {
    const { jobId } = req.params;

    const job = await Job.findByPk(jobId);  // Mengambil pekerjaan berdasarkan ID

    if (!job) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    res.status(200).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving the job.' });
  }
};

// Fungsi untuk mendaftar pekerjaan
exports.registerJob = async (req, res) => {
  try {
    const { personalData, marketingWords, jobId } = req.body;

    // Validasi input
    if (!personalData || !marketingWords || !jobId) {
      return res.status(400).json({ message: 'Personal data, marketing words, and job ID are required.' });
    }

    // Cek apakah pekerjaan dengan ID tersebut ada
    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    // Simpan data pendaftaran pekerjaan
    const jobRegistration = await JobRegistration.create({
      jobId,
      personalData: JSON.stringify(personalData),  // Convert data pribadi ke format JSON
      marketingWords: JSON.stringify(marketingWords)  // Convert marketing words ke format JSON
    });

    res.status(201).json({ message: 'Job registration successful!', jobRegistration });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while registering for the job.' });
  }
};

// Fungsi untuk mengambil daftar pendaftar pekerjaan berdasarkan pekerjaan
exports.getJobRegistrations = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Cek apakah pekerjaan dengan ID tersebut ada
    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({ message: 'Job not found.' });
    }

    // Ambil semua pendaftar untuk pekerjaan tersebut
    const registrations = await JobRegistration.findAll({
      where: { jobId }
    });

    res.status(200).json({ registrations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving job registrations.' });
  }
};
