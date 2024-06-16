import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Login.css'; // Import CSS file

function Register({ handleRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');
  const [error, setError] = useState(''); // State to handle errors
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
        setError("Passwords do not match");
      } else {
        handleRegister(username, password); // Call handleRegister function passed from props
        navigate('/login'); // Navigate to Login page after successful registration
      }
  };

  return (
    <div className="login-container">
      
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Đăng Ký</h2>
        <div>
          Tên Người Dùng:
          <input value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="username"/>
        </div>
        <div>
          Mật Khẩu:
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
        </div>
        <div>
        Xác Nhận Mật Khẩu:
          <input value={cpassword} onChange={(e) => setcPassword(e.target.value)} placeholder="confirm password"/>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="login-button">
         Đăng Ký
        </button>
      </form>
    </div>
  );
}

export default Register;
