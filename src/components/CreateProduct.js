// CreateProduct.js

import React from 'react';
import '../css/CreateProduct.css'; // Import CSS file

function CreateProduct({ handleCreate }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var img = document.getElementById("img").value;
    var des = document.getElementById("des").value;
    var pIn = document.getElementById("pIn").value;
    var pOut = document.getElementById("pOut").value;

    var newProduct = { name: name, img: img, priceIn: pIn, priceOut: pOut, description: des };
    handleCreate(newProduct);
  };

  return (
    <div className="create-product-container">
      <h1 className="create-product-title">Thêm Sản Phẩm</h1>
      <form className="create-product-form" onSubmit={handleSubmit}>
        <div>
          <label className="create-product-label" htmlFor="name">Tên sản phẩm:</label>
          <input className="create-product-input" id="name" type="text" />
        </div>
        <div>
          <label className="create-product-label" htmlFor="img">Hình ảnh:</label>
          <input className="create-product-input" id="img" type="text" />
        </div>
        <div>
          <label className="create-product-label" htmlFor="des">Miêu tả sản phẩm:</label>
          <input className="create-product-input" id="des" type="text" />
        </div>
        <div>
          <label className="create-product-label" htmlFor="pIn">Giá mua vào:</label>
          <input className="create-product-input" id="pIn" type="number" />
        </div>
        <div>
          <label className="create-product-label" htmlFor="pOut">Giá bán ra:</label>
          <input className="create-product-input" id="pOut" type="number" />
        </div>
        <div>
          <input className="create-product-submit" type="submit" value="Thêm sản phẩm" />
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
