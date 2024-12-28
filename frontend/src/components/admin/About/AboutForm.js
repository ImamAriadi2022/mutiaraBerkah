import React, { useState } from 'react';

function AboutForm({ onSubmit, existingData }) {
  const [content, setContent] = useState(existingData?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Tentang Kami"
      />
      <button type="submit">Simpan</button>
    </form>
  );
}

export default AboutForm;
