import React from "react";
import "../Styles/navbar.css";
import logo from "../assets/Images/ logo.png";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Message</li>
          <li className="active">AI</li>
          <li>About us</li>
          <li>Help</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="search...." />
        <button className="search-button">
        </button>
      </div>
    </header>
  );
};

export default Header;
