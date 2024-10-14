import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Header.css'

const Header = () => {
  return (
    <div>
      <header className="header">
        <NavLink to="/" className="logo">
        <h1 className="lo">Memories</h1>
        </NavLink>
 
    {/*     <nav className="nav">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            exact
          >
            HOME
          </NavLink>

         
        </nav>   */}

        <nav className="nav2">
          <NavLink
            to="/src/pages/Login.jsx"
            className="nav-link"
            activeClassName="active"
            exact
          >
            LOGIN
          </NavLink>

          <NavLink
            to="/src/pages/Register.jsx"
            className="nav-link"
            activeClassName="active"
          >
            REGISTER
          </NavLink>
          
        </nav>               
      </header>
    </div>
  );
};

export default Header;
