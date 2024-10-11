import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signup from '../src/components/Signup.jsx';
import Login from '../src/components/Login.jsx';
import Forgot from '../src/components/forgot.jsx';
 

const App = () => {


  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/src/components/Login.jsx" element={<Login />} />
          <Route path="/src/components/SignUp.jsx" element={<Signup />} />
          <Route path="/src/components/forgot.jsx" element={<Forgot />} />
 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
