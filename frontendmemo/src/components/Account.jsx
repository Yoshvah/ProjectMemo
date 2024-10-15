import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../Styles/Account.css';
import users from '../assets/Images/ Users.png';

const AccountOptions = () => {
  const navigate = useNavigate(); // Initialize the hook

  const handleLogout = () => {
    // Logic for logging out (if any) goes here
    navigate('/'); // Redirect to the home page (Acceuil)
  };

  const handleAddAccount = () => {
    navigate('/src/pages/Login.jsx'); // Redirect to the login page
  };

  return (
    <div className="account-options">
      <div className="user-icon">
        <img src={users} alt="user icon" />
      </div>
      <div className="buttons">
        <button className="logout-button" onClick={handleLogout}>Log out</button>
        <button className="cancel-button" onClick={handleAddAccount}>
          Add Other <br /> account
        </button>
      </div>
    </div>
  );
};

export default AccountOptions;
