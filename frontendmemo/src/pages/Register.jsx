import React, { useState } from "react";
import "../Styles/Signup.css"; // Importation du fichier CSS
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignupForm = () => {
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

  // Fonction pour gérer les changements dans le formulaire
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validation du nom
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validation du prénom
    if (!formData.lastname) {
      newErrors.lastname = 'Lastname is required';
      isValid = false;
    }

    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    // Validation de la confirmation du mot de passe
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/src/pages/BodyMessage.jsx'); // Navigates to BodyMessage only if the form is valid
    }
  };

  // Gestion des changements des champs de formulaire
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Toggle Password Visibility
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
            />
            <span
              className="toggle-password"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

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

export default SignupForm;
