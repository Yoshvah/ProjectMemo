import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink to="/" className="logo">
          <h1 className="lo">Memories</h1>
        </NavLink>
        
        {/* Add the opening <nav> tag */}
        <nav className="nav">
          <NavLink
            to="/src/pages/Login.jsx"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            LOGIN
          </NavLink>

          <NavLink
            to="/src/pages/Register.jsx"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            REGISTER
          </NavLink>
        </nav> {/* Closing nav tag */}
      </header>
    </div>
  );
};

export default Header;
