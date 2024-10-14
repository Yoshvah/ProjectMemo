import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './store'; // Import your store
import '../src/Styles/bootstrap.css';
import '../src/Styles/responsive.css';
import '../src/Styles/style.css';
import '../src/Styles/style.css.map';

function App() {
  return (
    <div>
        <Provider store={store}>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/src/pages/Login.jsx" element={<Login />} />
            <Route path="/src/pages/Register.jsx" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;