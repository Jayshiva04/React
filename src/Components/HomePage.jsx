import React, { useContext, useState, useEffect } from 'react';
import { FaPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';
import './HomePage.css';

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext);
  const [notification, setNotification] = useState(null);
  const [email, setEmail] = useState("");
  const featuredProducts = [
    { id: 1, name: 'Electric Guitar', price: 499.99, image: `${process.env.PUBLIC_URL}/assets/images/1.jpg` },
    { id: 2, name: 'Grand Piano', price: 2999.99, image: `${process.env.PUBLIC_URL}/assets/images/2.jpg` },
    { id: 3, name: 'Drum Set', price: 799.99, image: `${process.env.PUBLIC_URL}/assets/images/3.jpg` },
  ];

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        // Add 'hidden' class to trigger fade-out
        setNotification(null);
      }, 1000); // Duration for which the notification is visible
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`Added ${product.name} to cart!`);
  };

  const handleAddToFavorites = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    addToFavorites(product);
    if (isFavorite) {
      setNotification(`Removed ${product.name} from favorites.`);
    } else {
      setNotification(`Added ${product.name} to favorites.`);
    }
  };

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setNotification("Please enter your email address.");
      return;
    }
    
    try {
      const response = await fetch('http://localhost/Backend/subscribe.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email: email,
        }),
      });
      
      const result = await response.text();
      if (response.ok) {
        setNotification(result); // Set notification to the response message
        setEmail(""); // Clear the input field
      } else {
        setNotification("An error occurred. Please try again.");
        console.error('Server responded with an error:', result); // Log server error message
      }
    } catch (error) {
      setNotification("An error occurred. Please try again.");
      console.error('Error:', error); // Log error to console for debugging
    }
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Shiv's Music Accessories</h1>
          <p>Your one-stop shop for musical instruments and accessories.</p>
          <a href="/shop" className="cta-button">Shop Now</a>
        </div>
      </section>

      <section className="featured-products-container">
        <div className="musical-notes-left"></div>
        <div className="featured-products">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="add-to-cart"
                  >
                    <FaPlus /> Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToFavorites(product);
                    }}
                    className="add-to-favorites"
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="musical-notes-right"></div>
      </section>

      <section className="cta">
        <h2>Join Our Newsletter</h2>
        <p>Sign up for the latest updates and exclusive offers.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </section>

      {/* Notification Slider */}
      {notification && (
        <div className={`notification-slider ${notification ? '' : 'hidden'}`}>
          {notification}
        </div>
      )}
    </div>
  );
};

export default HomePage;
