import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';   
import { loginSuccess, loginFail } from '../actions';
import { useSelector } from 'react-redux';


const Login = () => {
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p>{errors.email}</p>}
          {error.email && <p>{error.email}</p>}

        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p>{errors.password}</p>}
          {error.email && <p>{error.email}</p>}

        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;