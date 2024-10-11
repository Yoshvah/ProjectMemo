import React from 'react';
import '../../src/styles/HomePage.css';
import Image1 from '../assets/Images/Home.png';
  import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <div className="text-content">
          <h1 className="title">Chat <br/> Collaborator</h1>
        </div>
      </div>
 
      <div className="slid">
        <img src={Image1} alt="Slide 1" />
        </div>
 
 
      <NavLink to='/src/components/Login.jsx'>
      <button className="start-chat-button">
        Start Chatting
      </button>
      </NavLink>
    </div>
  );
}

export default HomePage;
