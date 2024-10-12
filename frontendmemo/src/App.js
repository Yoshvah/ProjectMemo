import { BrowserRouter,Route ,Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import '../src/Styles/bootstrap.css';
import '../src/Styles/responsive.css';
import '../src/Styles/style.css';
import '../src/Styles/style.css.map';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
