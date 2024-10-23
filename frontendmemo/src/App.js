import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './pages/Acceuil';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/User/Dashboard';
import { Provider } from 'react-redux';
import store from './store'; // Import your store
import '../src/Styles/bootstrap.css';
import '../src/Styles/responsive.css';
import '../src/Styles/style.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include the Bootstrap JS
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded as well
import ProtectedRoute from './components/ProtectedRoute';
import Forgot from './components/forgot';
import BodyMessage from './pages/User/BodyMessage';
import DashboardAdmin from './pages/Admin/DashboardAdmin';
import Unauthorized from './components/Unauthorized';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route 
            path="/body-message" 
            element={
              <ProtectedRoute>
                <BodyMessage />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute adminOnly={true}>
                <DashboardAdmin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
