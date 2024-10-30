import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    shippingAddress: '',
    phoneNumber: '',
    totalAmount: totalAmount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost/Backend/save_checkout.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert('Order saved successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="checkout-page">
      <div className="musical-notes-left"></div>
      <div className="musical-notes-right"></div>
      <div className="card">
        <h1>Checkout</h1>
        <p>Please enter your payment and shipping details to complete your purchase.</p>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              required
              value={formData.expiryDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              required
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              id="shippingAddress"
              name="shippingAddress"
              required
              value={formData.shippingAddress}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Total Amount: ${totalAmount}</p>
            <input type="hidden" name="totalAmount" value={totalAmount} />
          </div>
          <div className="submit-button-container">
            <button type="submit" className="submit-button">
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
