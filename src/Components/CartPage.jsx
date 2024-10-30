import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './CartPage.css'; // Import the CSS file

const CartPage = () => {
  const { cartItems, cartCount, calculateTotalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const totalAmount = calculateTotalAmount();
    navigate('/checkout', { state: { totalAmount } });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <p>Items in Cart: {cartCount}</p>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="/assets/images/Emptycart.jpg" alt="Empty Cart" className="empty-cart-image" />

          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Amount: ${calculateTotalAmount()}</p>
            <button onClick={handleCheckout} className="checkout-button">Proceed to Payment</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
