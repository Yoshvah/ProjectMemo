import React, { useState } from 'react';
import '../Styles/forgot.css';

const Forgot = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmailSubmit(email);  // Envoie l'email au composant parent ou à un autre composant
  };

  return (
    <div className='forgot'>
      <h1>Forgot Password</h1>
      <p>Please enter your email address to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='login-button2' type="submit">Reset Password</button>
      </form>

      <p>
        <a className='link' href="/src/pages/Login.jsx">Back to Login</a>
      </p>
    </div>
  );
};

export default Forgot;
