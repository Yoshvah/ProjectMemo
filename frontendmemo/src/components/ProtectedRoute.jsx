import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for authentication
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Check authentication status from Redux (you could also use local storage or context)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // If the user is not authenticated, redirect to the login page
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
