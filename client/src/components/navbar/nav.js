import React, { useState } from 'react';
import './nav.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">Logo</span>
        </div>
        {/* <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-icon">&#9776;</span>
        </button> */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/visitor">Visitor</a>
          <a href="/logs">History</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
