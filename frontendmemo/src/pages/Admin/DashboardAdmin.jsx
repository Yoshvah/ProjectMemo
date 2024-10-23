
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios to fetch users

function DashboardAdmin() {
  const [users, setUsers] = useState([]);

  // Fetch all users when the component loads
  useEffect(() => {
    axios.get('/api/admin/users')  // Replace with the actual API endpoint for fetching users
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching users!", error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`/api/admin/users/${userId}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error("There was an error deleting the user!", error);
      });
  };

  const handleApproveUser = (userId) => {
    axios.patch(`/api/admin/users/${userId}/approve`)
      .then(response => {
        // Update user status in the UI
        const updatedUsers = users.map(user =>
          user.id === userId ? { ...user, status: 'approved' } : user
        );
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error("There was an error approving the user!", error);
      });
  };

  return (
    <div>
      <h1>Admin Panel - Manage Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} - {user.status}
            {user.status === 'pending' && (
              <button onClick={() => handleApproveUser(user.id)}>Approve</button>
            )}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardAdmin;
