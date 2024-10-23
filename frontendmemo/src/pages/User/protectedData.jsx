import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// Protected data component
const ProtectedData = () => {
const token = useSelector((state) => state.isLoggedIn); // Access token from redux state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/protected-data', {
          headers: { Authorization: `Bearer ${token}` }, // Include token in header
        });
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default ProtectedData;