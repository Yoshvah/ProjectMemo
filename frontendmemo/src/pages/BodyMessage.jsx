import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar existant
 import MainMessage from '../components/MainMessage'; // Nouveau composant
 import '../Styles/navbar.css'; 
 import { NavLink } from 'react-router-dom';
 


function App() {
  const [selectedMenu, setSelectedMenu] = useState('message');

  const handleSelectMenu = (menu) => {
      setSelectedMenu(menu); // Mettre à jour le menu sélectionné
  };

  return (
    <>
           <header className="headers">
      <div className="logo">
 Natix     
  </div>
  <nav className="nav">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Message
          </NavLink>

          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            Ai
          </NavLink>

          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </nav>
      <div className="search-bar">
        <input type="text" placeholder="search...." />
        <button className="search-button">
          <i className="fa fa-search"></i> {/* Utilisez FontAwesome pour l'icône */}
        </button>
      </div>
      </header>
      <div style={styles.container}>
          <Sidebar onSelectMenu={handleSelectMenu} />
          <MainMessage selectedMenu={selectedMenu} />
      </div>
    </>

  );
}


const styles = {
  container: {
    display: 'flex',
  }
  
};

export default App;
