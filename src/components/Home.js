import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css'; // Import CSS file

function Home({ list = [] }) { // Default value for list
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState(list);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleView = (pro) => {
    navigate(`/product/${pro.name}`, { state: { product: pro } });
  };

  const handleSearch = () => {
    const filtered = list.filter(pro =>
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3); // Assuming there are 3 slides
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFilteredList(list); // Update filteredList when list changes
  }, [list]);

  return (
    <div className="home-container">
      <div className="image-slider">
        <div
          className="image-slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="image-slide">
            <img src="/images/background1.jpg" alt="background1" />
          </div>
          <div className="image-slide">
            <img src="/images/background2.jpg" alt="background2" />
          </div>
          <div className="image-slide">
            <img src="/images/background3.jpg" alt="background3" />
          </div>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm Kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Tìm Kiếm</button>
      </div>
      <div className="product-grid">
        {filteredList.map((pro) => (
          <div className="product-card" key={pro.id || pro.name}>
            <img src={pro.img} alt={pro.name} />
            <div className="product-card-body">
              <h3>{pro.name}</h3>
              <p>{pro.description}</p>
              <div className="price">Giá Mua vào: {pro.priceIn}</div>
              <div className="price">Giá Bán ra: {pro.priceOut}</div>
              <button onClick={() => handleView(pro)}>Xem Sản Phẩm</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
