import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFail } from '../actions';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../Styles/Login.css';

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
      navigate('/body-message'); // Ensure the correct route path
    } catch (error) {
      dispatch(loginFail(error.response.data.errors));
      setErrors(error.response.data.errors);
    } finally {
      setLoading(false); // Ensure loading state resets
    }
  };

  return (
    <>
      <Header />
      <div className='login-container'>
        <div className='login-box'>
          <h2 className='h2'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter your email address'
              />
              {errors.email && <p className="error">{errors.email}</p>}
              {error && error.email && <p className="error">{error.email}</p>}
            </div>
            <div className="input-group password-group">
              <label htmlFor="password">Password:</label>
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
              {errors.password && <p className="error">{errors.password}</p>}
              {error && error.password && <p className="error">{error.password}</p>}
            </div>
            <button type="submit" className="log" disabled={loading}>
              {loading ? 'Logging in...' : 'Log in'}
            </button>
            <NavLink to="/forgot" className="forgot-password">Forgot your password?</NavLink>
          </form>
          <p>Not a member yet?
            <NavLink to='/register' className="signup-link">Sign up</NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
