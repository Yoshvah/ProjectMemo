import React, { useState } from 'react';
import '../Styles/Signup.css'; // Importation du fichier CSS
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
    <Header />
    <div className="form-container">
      <h2>Create new Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your mail" />
        </div>

        <div className="form-group">
          <label className='name' htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label className='name' htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" placeholder="Enter your lastname" />
        </div>

        <div className="form-group password-group">
          <label className='name' htmlFor="password">Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash />: <FaEye />}
          </span>
        </div>

        <div className="form-group password-group">
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm your password"
          />
          <span
            className="toggle-password"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <FaEyeSlash />: <FaEye />}
          </span>
        </div>
      
        <button type="submit" className="submit-btn">Sign in</button>
      </form>
     
      <p className="login-text">
        Already have an account? 
        <NavLink to='/src/pages/Login.jsx'>
        Log in
        </NavLink>
      
      </p>
     
    
    </div>
    </>
  );
};

export default SignupForm;
