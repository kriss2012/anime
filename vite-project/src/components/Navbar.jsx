import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">Mend</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Support</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
