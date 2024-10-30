// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import CheckoutPage from './Components/CheckoutPage';
import FavoritesPage from './Components/FavoritesPage';
import AboutPage from './Components/AboutPage';
import ShopPage from './Components/ShopPage'; // Import the ShopPage
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import ProductDetails from './Components/ProductDetails';
import products from './data/products';

const App = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} /> {/* Add this route */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<ShopPage />} />
            <Route path="/" element={<ShopPage products={products} />} />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;


