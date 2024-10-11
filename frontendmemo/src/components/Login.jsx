import React, { useState } from 'react';
import '../styles/Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <> 
    <Header />
    <div className="login-container">
      <div className="login-box">
        <h2>Log in</h2>
        <form>
          <div className="input-group">
            <label className='justify'>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group password-group">
            <label className='justify'>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <span className="password-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="login-button">Log in</button>
          <NavLink to="/src/components/forgot.jsx"
          className="forgot-password">forgot your password
          </NavLink>
        </form>
       
        <p>Not a member yet?
          <NavLink to='/src/components/SignUp.jsx'
           className="signup-link">Sign up </NavLink>
         </p>
      </div>
    </div>
    </>
  );
};

export default Login;
