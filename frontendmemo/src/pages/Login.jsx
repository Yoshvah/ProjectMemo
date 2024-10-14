import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';   
import { loginSuccess, loginFail } from '../actions';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../Styles/Login.css'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errors);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSuccess = (response) => {
    const token = response.data.token;
    document.cookie = `auth_token=${token}; Path=/; HttpOnly; Secure`;
  };
  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/login', { email, password });
      dispatch(loginSuccess(response.data.user));
      handleLoginSuccess(response);
      navigate('/dashboard');
    } catch (error) {
      dispatch(loginFail(error.response.data.errors));
      setLoading(false);
      setErrors(error.response.data.errors);
    }
  };

  return (
    <>
    <Header />
    <div className='login-container'>
      <div className='login-box'>
      <h2 className='h2'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <div className="input-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your email address'
          />
          </div>
          {errors.email && <p>{errors.email}</p>}
          {error.email && <p>{error.email}</p>}

        </div>
        <div>
          <label  htmlFor="password">Password:</label>
          <div className="input-group password-group">

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter your password'
          />
           <span className="password-icons" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p>{errors.password}</p>}
          {error.email && <p>{error.email}</p>}

        </div>
        <button type="submit" className="log">Log in</button>
        <NavLink to="/"
          className="forgot-password">forgot your password
          </NavLink>
      </form>
      <p>Not a member yet?
          <NavLink to='/src/pages/Register.jsx'
           className="signup-link">Sign up </NavLink>
         </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;