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
import ProtectedRoute from './components/ProtectedRoute';
import Forgot from './components/forgot';
import BodyMessage from './pages/BodyMessage'

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
           <Route path ="/src/pages/BodyMessage.jsx" element={<BodyMessage />} />
            <Route path ="/src/components/forgot.jsx" element={<Forgot />} />
            <Route 
          path="/src/pages/BodyMessage.jsx" 
          element={
            <ProtectedRoute>
              <BodyMessage />
            </ProtectedRoute>
          }
        />
     
          </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;