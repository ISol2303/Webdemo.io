import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css';

function Cart({ cart, handleDeletedCart, handleQuantityChange, isLoggedin }) {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleCheckout = () => {
    if (isLoggedin) {
      navigate('/checkout');  // Redirect to checkout page if logged in
    } else {
      navigate('/login');  // Redirect to login page if not logged in
    }
  };
  const calculateDiscountedPrice = (priceOut, discount) => {
    return discount ? (priceOut * (1 - discount / 100)).toFixed(2) : priceOut.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p>Không có sản phẩm trong giỏ.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Miêu tả sản phẩm</th>
                <th>Giá mua vào</th>
                <th>Giá bán ra</th>
                <th>Giảm giá</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td><img src={item.img} alt={item.name} className="cart-image" /></td>
                  <td>{item.description}</td>
                  <td>{item.priceIn}</td>
                  <td>{item.priceOut.toFixed(2)}</td>
                  <td>{item.discount ? `${item.discount}%` : '0%'}</td>
                  <td className="cart-quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                      min="1"
                    />
                  </td>
                  <td>{(calculateDiscountedPrice(item.priceOut, item.discount) * item.quantity).toFixed(2)}</td>
                  <td className="cart-action">
                    <button onClick={() => handleDeletedCart(item)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-checkout">
            <button onClick={handleCheckout}>Thanh Toán</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
