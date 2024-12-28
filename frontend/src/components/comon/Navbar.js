import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Nama PT</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Mencari ART</Link></li>
        <li><Link to="/register">Mendaftar ART</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
