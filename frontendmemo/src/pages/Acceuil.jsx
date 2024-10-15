import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
 import '../Styles/Signup.css' 
import Home from "../assets/Images/Home.png";
import { NavLink } from "react-router-dom";
const Acceuil = () => {
  return (
    <div className="sub_page">
      <Header />
      <section className="slider">
        <div className="contai">
          <h2 className="h3">Welcome to</h2>
          <img src={Home} alt="Logo" className="logo1" />
          <p className="h1">Chat Memories</p>
        </div>
        <div>
          <NavLink to="/src/pages/BodyMessage.jsx">
            <button className="submit-btn2">Get Started</button>
          </NavLink>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Acceuil;
