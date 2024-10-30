// src/Components/FavoritesPage.jsx
import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { CartContext } from '../context/CartContext'; // Import CartContext
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  const { addToCart, notification } = useContext(CartContext);

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((product) => (
            <div key={product.id} className="favorite-item">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <img src="/assets/images/empty-favorites.gif" alt="Empty Favorites" className="empty-favorites-image" />
          <p className="empty-message">Your favorites list is empty. Add some favorites soon!</p>
        </div>
      )}
      {notification && (
        <div className="notification-slider">
          {notification}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
