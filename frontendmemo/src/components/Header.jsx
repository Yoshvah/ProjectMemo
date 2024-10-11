import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Memories</h1>
        <nav className="nav">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            exact
          >
            HOME
          </NavLink>

          <NavLink
            to="/src/components/Login.jsx"
            className="nav-link"
            activeClassName="active"
          >
            LOG IN
          </NavLink>

          <NavLink
            to="/src/components/SignUp.jsx"
            className="nav-link"
            activeClassName="active"
          >
            SIGN IN
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
