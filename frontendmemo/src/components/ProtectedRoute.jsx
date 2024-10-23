// import React from 'react';
// import { useSelector } from 'react-redux'; // Assuming you're using Redux for authentication
// import { Navigate } from 'react-router-dom';
// const ProtectedRoute = ({ children, adminOnly = false }) => {
//   // Check authentication status and user role from Redux
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   const userRole = useSelector((state) => state.auth.user?.role); // Assume user role is stored in the Redux state

//   // If the user is not authenticated, redirect to the login page
//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   // If adminOnly is true and the user is not an admin, redirect to a not authorized page
//   if (adminOnly && userRole !== 'admin') {
//     return <Navigate to="/unauthorized" />; // Redirect to unauthorized page or home
//   }

//   // If authenticated (and admin check is passed if applicable), render the children
//   return children;
// };

// export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  // For development purposes, we mock the authentication status and user role
  const isAuthenticated = true; // Force authentication to always be true
  const userRole = 'admin'; // Set a default role (e.g., 'admin' or 'user')

  // If adminOnly is true and the user is not an admin, redirect to a not authorized page
  if (adminOnly && userRole !== 'admin') {
    return <Navigate to="/unauthorized" />; // Redirect to unauthorized page or home
  }

  // If authenticated (and admin check is passed if applicable), render the children
  return children;
};

export default ProtectedRoute;
