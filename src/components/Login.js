import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Login.css'; // Import CSS file

function Login({ handleLogin, setShowRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = handleLogin(username, password);
    if (isLoggedIn) {
      navigate('/');
    } else {
    setError('Invalid username or password'); 
    navigate('/login');
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true); // Set showRegister to true to display Register component
    navigate('/register'); // Navigate to Register page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Đăng Nhập</h2>
        <div>
        Tên Người Dùng:
          <input value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="username" />
        </div>
        <div>
        Mật Khẩu:
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="login-button">
          Đăng Nhập
        </button>
        <hr className='hr'/>
        <br/>
        <button type="button" className="login-button" onClick={handleRegisterClick}>
          Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default Login;
