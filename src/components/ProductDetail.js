import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ProductDetail.css'; // Import CSS file

function ProductDetail({ list = [], handleAddCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleSearch = useCallback(() => {
    const filtered = list.filter(pro =>
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchTerm, list]);

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleImageClick = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.name}`, { state: { product } });
  };

  if (!product) {
    return <div>Sản phẩm không có</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <img
            className="product-image"
            src={product.img}
            alt={product.name}
            onClick={() => handleImageClick(product.img)}
          />
          <p className="product-description">{product.description}</p>
          <div className="product-prices">
            <p className="product-price">Giá mua vào: {product.priceIn}</p>
            <p className="product-price">Giá bán ra: {product.priceOut}</p>
            {product.discount && (
              <p className="product-discount">
                Discount: {product.discount}%
                Price Out: {(product.priceOut * (1 - product.discount / 100)).toFixed(2)}
              </p>
            )}
            
            <button className='AddCart' onClick={() => handleAddCart(product)}>Thêm vào giỏ hàng</button>
          </div>
        </div>
        <div className="related-products">
          <h2>Những sảm phẩm tương tự</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearchButtonClick}>Tìm Kiếm</button>
          </div>
          <div className="related-products-grid">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="related-product-card"
                onClick={() => handleProductClick(result)}
              >
                <img
                  src={result.img}
                  alt={result.name}
                  onClick={() => handleImageClick(result.img)}
                />
                <h3>{result.name}</h3>
                <p>{result.description}</p>
                <p>Giá bán ra: {result.priceOut}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Product" />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
