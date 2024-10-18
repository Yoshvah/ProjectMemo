import React, { useState } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import "../Styles/Signup.css";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.lastname) {
      newErrors.lastname = 'Lastname is required';
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send data to your Symfony backend
        const response = await axios.post('http://localhost:8000/api/register', {
          email: formData.email,
          name: formData.name,
          lastname: formData.lastname,
          password: formData.password,
        });
        
        console.log(response.data); // You can handle success response here
        navigate('/src/pages/BodyMessage.jsx'); // Navigate after successful registration
      } catch (error) {
        console.error('Error during registration:', error);
        setErrors({ submit: 'Failed to register. Please try again.' }); // Handle error response
      }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email" // Added autocomplete attribute
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="name" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="given-name" // Added autocomplete attribute
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="name" htmlFor="lastname">
              Lastname:
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              autoComplete="family-name" // Added autocomplete attribute
            />
            {errors.lastname && <span className="error">{errors.lastname}</span>}
          </div>

          <div className="form-group password-group">
            <label className="name" htmlFor="password">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="new-password" // Added autocomplete attribute
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group password-group">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              autoComplete="new-password" // Added autocomplete attribute
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          {errors.submit && <span className="error">{errors.submit}</span>}

          <button type="submit" className="submit-btn">
            Sign in
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <NavLink to="/src/pages/Login.jsx">Log in</NavLink>
        </p>
      </div>
    </>
  );
};

export default Register;
