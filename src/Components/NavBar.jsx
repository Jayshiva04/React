// src/Components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaHeart, FaInfoCircle, FaCreditCard } from 'react-icons/fa';
import './NavBar.css'; // Make sure to create a CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/6.png`} alt="Shiva's Music Accessories" className="navbar-logo-img" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item-container">
          <Link to="/" className="navbar-item">
            <FaHome />
            <span className="navbar-tooltip">Home</span>
          </Link>
        </li>
        <li className="navbar-item-container">
          <Link to="/cart" className="navbar-item">
            <FaShoppingCart />
            <span className="navbar-tooltip">Cart</span>
          </Link>
        </li>
        <li className="navbar-item-container">
          <Link to="/favorites" className="navbar-item">
            <FaHeart />
            <span className="navbar-tooltip">Favorites</span>
          </Link>
        </li>
        <li className="navbar-item-container">
          <Link to="/checkout" className="navbar-item">
            <FaCreditCard />
            <span className="navbar-tooltip">Checkout</span>
          </Link>
        </li>
        <li className="navbar-item-container">
          <Link to="/about" className="navbar-item">
            <FaInfoCircle />
            <span className="navbar-tooltip">About Us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
