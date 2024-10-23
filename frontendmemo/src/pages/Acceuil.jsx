import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Home from "../assets/Images/Home.png";
import '../Styles/Acceuil.css' 
import { NavLink } from "react-router-dom";
const Acceuil = () => {
  return (
    <div className="sub_page">
      <Header />
            <section className="slider">
        <div className="text-content">
          <h2 className="h3">Welcome to</h2>
          <p className="h1">Chat Memories</p>
          <NavLink to="/Body-Message">
            <button className="submit-btn2">Get Started</button>
          </NavLink>
        </div>
        <div className="image-content">
          <img src={Home} alt="Logo" className="logo1" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Acceuil;
