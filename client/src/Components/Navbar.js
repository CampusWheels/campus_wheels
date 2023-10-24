import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-bg bg-white'>
    <div className='container-fluid row'>
      <Link to="/" className='col-3'><img src='../media/logo.png'></img></Link>
      <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='col-9 collapse navbar-collapse row' id='navbarSupoortedContent'>
        <div className='justify-content-between row'>
        <div className='col-8 text-center h1'>Campus Wheels</div>
          <ul className='col-4 justify-content-between navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
            <li className='nav-item'><Link to="/login" className='nav-link'>Login / Signup</Link></li>
            <li className='nav-item'><Link to="/admin" className='nav-link'>Administration</Link></li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
}