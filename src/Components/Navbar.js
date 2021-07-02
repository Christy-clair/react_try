import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h3 className="brand">CHRISTY</h3>
      <ul className="nav-links">
        <Link to="/" className="Nav-item">
          Home
        </Link>
        <Link to="/Projects" className="Nav-item">
          Projects
        </Link>
        <Link to="/Contact" className="Nav-item">
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;