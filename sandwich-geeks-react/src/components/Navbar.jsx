import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // if you have custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/ambience">Ambience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
