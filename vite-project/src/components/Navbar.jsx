import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">Mend</div>
      <ul className="nav-links">
        <li><a href="#home">The Storm</a></li>
        <li><a href="#struggle">The Struggle</a></li>
        <li><a href="#healing">The Healing</a></li>
        <li><a href="#growth">The Growth</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
