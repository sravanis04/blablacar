import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/logo.jpeg" alt="BlaBlaCar" height="40" width="300" />
      </Link>
      
      <div className="navbar-right">
        <Link to="/search" className="search-button">
          <FaSearch />
          <span>Search</span>
        </Link>
        <Link to="/offer-ride" className="publish-button">
          Publish a ride
        </Link>
        <button className="user-menu">
          <img src="/signin.jpg" alt="User menu" className="w-8 h-8 rounded-full" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;