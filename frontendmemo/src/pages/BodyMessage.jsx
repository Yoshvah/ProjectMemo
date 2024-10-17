import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Sidebar existant
 import MainMessage from '../components/MainMessage'; // Nouveau composant
 import '../Styles/navbar.css'; 
 import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar';
 


function App() {
  const [selectedMenu, setSelectedMenu] = useState('message');

  const handleSelectMenu = (menu) => {
      setSelectedMenu(menu); // Mettre à jour le menu sélectionné
  };

  return (
    <>
          <MainMessage selectedMenu={selectedMenu} />
    </>

  );
}

export default App;
