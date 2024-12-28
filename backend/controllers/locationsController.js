const Location = require('../models/Location'); // Mengimpor model Location

// Menambahkan lokasi baru
exports.addLocation = async (req, res) => {
  try {
    const { name, address, city, province, country, postalCode, contact } = req.body;

    // Membuat entri lokasi baru
    const newLocation = await Location.create({
      name,
      address,
      city,
      province,
      country,
      postalCode,
      contact
    });

    res.status(201).json({
      message: 'Lokasi berhasil ditambahkan',
      location: newLocation
    });
  } catch (error) {
    console.error('Error adding location:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menambahkan lokasi',
      error: error.message
    });
  }
};

// Mengambil semua lokasi
exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();

    if (locations.length === 0) {
      return res.status(404).json({ message: 'Tidak ada lokasi yang ditemukan' });
    }

    res.status(200).json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil lokasi',
      error: error.message
    });
  }
};

// Mengambil satu lokasi berdasarkan ID
exports.getLocationById = async (req, res) => {
  try {
    const locationId = req.params.id;
    const location = await Location.findByPk(locationId);

    if (!location) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }

    res.status(200).json(location);
  } catch (error) {
    console.error('Error fetching location:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil lokasi',
      error: error.message
    });
  }
};

// Memperbarui lokasi
exports.updateLocation = async (req, res) => {
  try {
    const locationId = req.params.id;
    const { name, address, city, province, country, postalCode, contact } = req.body;

    const location = await Location.findByPk(locationId);

    if (!location) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }

    // Memperbarui lokasi
    await location.update({
      name,
      address,
      city,
      province,
      country,
      postalCode,
      contact
    });

    res.status(200).json({
      message: 'Lokasi berhasil diperbarui',
      location
    });
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat memperbarui lokasi',
      error: error.message
    });
  }
};

// Menghapus lokasi
exports.deleteLocation = async (req, res) => {
  try {
    const locationId = req.params.id;

    const location = await Location.findByPk(locationId);

    if (!location) {
      return res.status(404).json({ message: 'Lokasi tidak ditemukan' });
    }

    // Menghapus lokasi
    await location.destroy();

    res.status(200).json({
      message: 'Lokasi berhasil dihapus'
    });
  } catch (error) {
    console.error('Error deleting location:', error);
    res.status(500).json({
      message: 'Terjadi kesalahan saat menghapus lokasi',
      error: error.message
    });
  }
};
