import React, { useState } from 'react';

function SearchArt() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Simulate API call
    setResults(['ART 1', 'ART 2', 'ART 3']);
  };

  return (
    <div>
      <h2>Cari ART</h2>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Cari ART..."
      />
      <button onClick={handleSearch}>Cari</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchArt;
