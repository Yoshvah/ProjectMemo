import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// ... other imports

const Dashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userData, setUserData] = useState(null);
  // ... other state variables
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    // Check if a user is logged in on component mount
    const storedToken = localStorage.getItem('token'); // Assuming token storage
    if (storedToken) {
      isLoggedIn(true);
      // Fetch user data if token exists (optional)
    }
  }, []);
/*  */
  // ... other functions
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {userData?.name}!</h2>
          {/* Display other user data here */}
        </>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};
export default Dashboard;
