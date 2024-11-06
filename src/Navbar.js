import React from 'react';
import './Style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">UME MARIAM</div>
      <div className="navbar-menu">
        <button className="navbar-toggle">&#9776;</button>
      </div>
    </nav>
  );
};

export default Navbar;
