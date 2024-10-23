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
            to="/login"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            LOGIN
          </NavLink>

          <NavLink
            to="/register"
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
