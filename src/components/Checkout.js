// Checkout.js
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../css/Checkout.css';

function Checkout({ clearCart,isLoggedin}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment successful!');
    clearCart();  // Clear the cart
    if (isLoggedin) {
      navigate('/');  // Redirect to checkout page if logged in
    } else {
      navigate('/login');  // Redirect to login page if not logged in
    }  // Redirect to home
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Thủ tục thanh toán</h1>
      <p>Nhập thông tin thanh toán của bạn bên dưới:</p>
      <form className="checkout-form" onSubmit={handlePayment}>
        <div>
          <label>Tên:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Địa chỉ:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Số thẻ:</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Ngày hết hạn:</label>
          <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
        </div>
        <div>
          <label>CVV:</label>
          <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit">Thanh Toán</button>
      </form>
    </div>
  );
}

export default Checkout;
