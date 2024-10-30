
import React, { useContext, useState } from 'react';
import { FaPlus, FaHeart } from 'react-icons/fa'; 
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext'; 
import { Link } from 'react-router-dom';  // Import Link for navigation
import './ShopPage.css';

const products = [
  { id: 1, name: 'Electric Guitar', price: '499.99', image: `${process.env.PUBLIC_URL}/assets/images/1.jpg` },
  { id: 2, name: 'Grand Piano', price: '2999.99', image: `${process.env.PUBLIC_URL}/assets/images/2.jpg` },
  { id: 3, name: 'Drum Set', price: '799.99', image: `${process.env.PUBLIC_URL}/assets/images/3.jpg` },
  { id: 4, name: 'Saxophone', price: '699.99', image: `${process.env.PUBLIC_URL}/assets/images/4.jpg` },
  { id: 5, name: 'Flute', price: '199.99', image: `${process.env.PUBLIC_URL}/assets/images/5.jpg` },
  { id: 6, name: 'Clarinet', price: '249.99', image: `${process.env.PUBLIC_URL}/assets/images/6.jpg` },
  { id: 7, name: 'Trumpet', price: '349.99', image: `${process.env.PUBLIC_URL}/assets/images/7.jpg` },
  { id: 8, name: 'Cello', price: '899.99', image: `${process.env.PUBLIC_URL}/assets/images/8.jpg` },
  { id: 9, name: 'Violin', price: '599.99', image: `${process.env.PUBLIC_URL}/assets/images/9.jpg` },
  { id: 10, name: 'Harp', price: '1999.99', image: `${process.env.PUBLIC_URL}/assets/images/10.jpg` },
  { id: 11, name: 'Trombone', price: '399.99', image: `${process.env.PUBLIC_URL}/assets/images/11.jpg` },
  { id: 12, name: 'Bass Guitar', price: '499.99', image: `${process.env.PUBLIC_URL}/assets/images/12.jpg` },
  { id: 13, name: 'Banjo', price: '299.99', image: `${process.env.PUBLIC_URL}/assets/images/13.jpg` },
  { id: 14, name: 'Mandolin', price: '199.99', image: `${process.env.PUBLIC_URL}/assets/images/14.jpg` },
  { id: 15, name: 'Accordion', price: '699.99', image: `${process.env.PUBLIC_URL}/assets/images/15.jpg` },
  { id: 16, name: 'Oboe', price: '349.99', image: `${process.env.PUBLIC_URL}/assets/images/16.jpg` },
  { id: 17, name: 'Tuba', price: '999.99', image: `${process.env.PUBLIC_URL}/assets/images/17.jpg` },
  { id: 18, name: 'Tabla', price: '149.99', image: `${process.env.PUBLIC_URL}/assets/images/18.jpg` },
  { id: 19, name: 'Harmonica', price: '49.99', image: `${process.env.PUBLIC_URL}/assets/images/19.jpg` },
  { id: 20, name: 'Xylophone', price: '249.99', image: `${process.env.PUBLIC_URL}/assets/images/20.jpg` },
];
const ShopPage = () => {
  const { addToCart } = useContext(CartContext);
  const { favorites, addToFavorites } = useContext(FavoritesContext); 
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`Added ${product.name} to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToFavorites = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    addToFavorites(product);
    if (isFavorite) {
      setNotification(`Removed ${product.name} from favorites.`);
    } else {
      setNotification(`Added ${product.name} to favorites.`);
    }
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="shop-page">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart"
              >
                <FaPlus /> Add to Cart
              </button>
              <button
                onClick={() => handleAddToFavorites(product)}
                className="add-to-favorites"
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>

      {notification && (
        <div className="notification-slider">{notification}</div>
      )}
    </div>
  );
};

export default ShopPage;
