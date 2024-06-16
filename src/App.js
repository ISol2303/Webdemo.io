import React, { useState, useEffect } from 'react';
import './App.css';
import './css/styles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import CreateProduct from './components/CreateProduct';
import ProductDetail from './components/ProductDetail';
import product_list from '../src/product_list.json';
import cus_List from "../src/cus_list.json"

function App() {
  const [list, setList] = useState([]);
  const [cusList, setCusList] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    setList(product_list);
    setCusList(cus_List);
  }, []);


  const handleLogin = (username, password) => {
    const cus = cusList.find((c) => c.username === username && c.password === password);
    if (cus) {
      setIsLoggedin(true);
      return true;
    } else {
      setError("Invalid username or password");
      return false;
    }
  };

  const handleRegister = (newUsername, newPassword) => {
    const existingUser = cusList.find((c) => c.username === newUsername);
    if (existingUser) {
      setError("Username already exists");
    } else {
      const newUser = {
        id: cusList.length + 1,
        username: newUsername,
        password: newPassword
      };
      setCusList([...cusList, newUser]);
      setShowRegister(false);
    }
  };

  const updateCartCount = (cart) => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  };

  const handleCreate = (pro) => {
    setList([...list, pro]);
  };

  const handleAddCart = (pro) => {
    const existingProduct = cart.find(item => item.name === pro.name);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.name === pro.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
      updateCartCount(updatedCart);
    } else {
      const updatedCart = [...cart, { ...pro, quantity: 1 }];
      setCart(updatedCart);
      updateCartCount(updatedCart);
    }
  };

  const handleDeletedCart = (pro) => {
    const updatedCart = cart.filter(item => item.name !== pro.name);
    setCart(updatedCart);
    updateCartCount(updatedCart);
  };

  const handleQuantityChange = (pro, quantity) => {
    if (quantity <= 0) {
      handleDeletedCart(pro);
    } else {
      const updatedCart = cart.map(item =>
        item.name === pro.name ? { ...item, quantity } : item
      );
      setCart(updatedCart);
      updateCartCount(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
    updateCartCount([]);
  };

  return (
    <div className="App">
      {isLoggedin ? (
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Trang Chủ</Link>
              </li>
              <li>
                <Link to="/products">Sản Phẩm</Link>
              </li>
              <li>
                <Link to="/create">Thêm Sản Phẩm</Link>
              </li>
              <li>
                <Link to="/about">Giới Thiệu</Link>
              </li>
              <li>
                <Link to="/contact">Liên Hệ</Link>
              </li>
              <li>
                <Link to="/cart">Giỏ Hàng ({cartCount})</Link>
              </li>
            </ul>
          </nav>
          <section>
            <Routes>
              <Route path='/' element={<Home list={list}/>} />
              <Route path='/products' element={<Products list={list} handleAddCart={handleAddCart} />} />
              <Route path='/create' element={<CreateProduct handleCreate={handleCreate} />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/cart' element={<Cart cart={cart} handleDeletedCart={handleDeletedCart} handleQuantityChange={handleQuantityChange} isLoggedin={isLoggedin}/>} />
              <Route path='/product/:name' element={<ProductDetail list={list} handleAddCart={handleAddCart}/>}/>
              <Route path='/checkout' element={<Checkout clearCart={clearCart} isLoggedin={isLoggedin}/>} />
              <Route path='*' element={<>Error: 404</>} />
            </Routes>
          </section>
          <Footer />
          <div className="contact-buttons">
          <a href="tel:+84903687298" className="contact-button hotline-button">Hotline</a>
          <a href="https://zalo.me/0903687298" className="contact-button zalo-button">Zalo</a>
        </div>
        </div>
      ) :
      (
        <div>
          <h2>{error}</h2>
          {showRegister ? (
            <Register handleRegister={handleRegister} />
          ) : (
            <Login handleLogin={handleLogin} setShowRegister={setShowRegister}/>
          )}
        </div>
      )}
    </div>
    
  );

}

export default App;
