import React, { useState } from 'react';

const RegistrationForm = () => {
  // State untuk Data Pribadi Pendaftar
  const [personalData, setPersonalData] = useState([{
    name: '',
    birthPlace: '',
    birthDate: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    nationality: '',
    religion: '',
    maritalStatus: '',
    education: '',
    experience: ''
  }]);

  // State untuk Kata-kata Marketing Pekerjaan
  const [marketingWords, setMarketingWords] = useState(['']);

  // Fungsi untuk menangani perubahan input pada Data Pribadi
  const handlePersonalDataChange = (index, e) => {
    const updatedData = [...personalData];
    updatedData[index][e.target.name] = e.target.value;
    setPersonalData(updatedData);
  };

  // Fungsi untuk menambah data pribadi
  const addPersonalData = () => {
    setPersonalData([...personalData, {
      name: '',
      birthPlace: '',
      birthDate: '',
      age: '',
      height: '',
      weight: '',
      gender: '',
      nationality: '',
      religion: '',
      maritalStatus: '',
      education: '',
      experience: ''
    }]);
  };

  // Fungsi untuk menghapus data pribadi
  const removePersonalData = (index) => {
    const updatedData = personalData.filter((_, i) => i !== index);
    setPersonalData(updatedData);
  };

  // Fungsi untuk menangani perubahan input pada kata-kata marketing
  const handleMarketingWordsChange = (index, e) => {
    const updatedMarketing = [...marketingWords];
    updatedMarketing[index] = e.target.value;
    setMarketingWords(updatedMarketing);
  };

  // Fungsi untuk menambah kata-kata marketing
  const addMarketingWord = () => {
    setMarketingWords([...marketingWords, '']);
  };

  // Fungsi untuk menghapus kata-kata marketing
  const removeMarketingWord = (index) => {
    const updatedMarketing = marketingWords.filter((_, i) => i !== index);
    setMarketingWords(updatedMarketing);
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke backend
    const formData = {
      personalData,
      marketingWords
    };
    console.log('Form data:', formData);
    // Lakukan request ke API backend di sini
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Pendaftaran Pekerjaan</h2>

      {/* Bagian Data Pribadi */}
      <h3>Data Pribadi Pendaftar</h3>
      {personalData.map((data, index) => (
        <div key={index} className="personal-data">
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={data.name}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="birthPlace"
            placeholder="Tempat Tanggal Lahir"
            value={data.birthPlace}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Tanggal Lahir"
            value={data.birthDate}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="number"
            name="age"
            placeholder="Usia"
            value={data.age}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="height"
            placeholder="Tinggi"
            value={data.height}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="weight"
            placeholder="Berat"
            value={data.weight}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="gender"
            placeholder="Jenis Kelamin"
            value={data.gender}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Kewarganegaraan"
            value={data.nationality}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="religion"
            placeholder="Agama"
            value={data.religion}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="maritalStatus"
            placeholder="Status"
            value={data.maritalStatus}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="education"
            placeholder="Pendidikan"
            value={data.education}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <input
            type="text"
            name="experience"
            placeholder="Pengalaman"
            value={data.experience}
            onChange={(e) => handlePersonalDataChange(index, e)}
          />
          <button type="button" onClick={() => removePersonalData(index)}>Hapus Data</button>
        </div>
      ))}
      <button type="button" onClick={addPersonalData}>Tambah Data Pribadi</button>

      {/* Bagian Kata-kata Marketing */}
      <h3>Kata-kata Marketing Pekerjaan</h3>
      {marketingWords.map((word, index) => (
        <div key={index} className="marketing-word">
          <input
            type="text"
            placeholder="Deskripsi Marketing"
            value={word}
            onChange={(e) => handleMarketingWordsChange(index, e)}
          />
          <button type="button" onClick={() => removeMarketingWord(index)}>Hapus</button>
        </div>
      ))}
      <button type="button" onClick={addMarketingWord}>Tambah Kata-kata Marketing</button>

      {/* Submit Form */}
      <button type="submit">Kirim Pendaftaran</button>
    </form>
  );
};

export default RegistrationForm;
