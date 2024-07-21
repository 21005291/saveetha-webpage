import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Saveetha Engineering College</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/courses">Courses Offered</Link>
        <Link to="/events">Events</Link>
      </nav>
    </header>
  );
}

export default Header;
