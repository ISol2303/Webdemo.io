import React from 'react';
import '../css/Products.css';

function Products({ list, handleAddCart }) {
  return (
    <div className="product-list-container">
      <h1 className="product-list-heading">Danh sách sản phẩm</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Miêu tả sản phẩm</th>
            <th>Giá mua vào</th>
            <th>Giá bán ra</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((pro, index) => (
            <tr key={pro.name}>
              <td>{index + 1}</td>
              <td>{pro.name}</td>
              <td><img src={pro.img} alt={pro.name} className="product-image" /></td>
              <td>{pro.description}</td>
              <td>{pro.priceIn}</td>
              <td>{pro.priceOut}</td>
              <td className="product-action">
                <button onClick={() => handleAddCart(pro)}>Thêm vào giỏ hàng</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
