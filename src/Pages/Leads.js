import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Leads.css';

const Leads = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch('http://localhost:3000/user');
    const data = await response.json();
    setUsers(data.reverse());
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    loadUsers();
  };

  return (
    <div className="Leads">
      <h1>Leads</h1>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>User Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h4>Mobile: {user.mobile}</h4>
            <h3>Message: </h3>
            <p className="Message">{user.message}</p>
            <div className="user-options">
              <Link to={`user/${user.id}`}>View</Link>
              <Link to={`/user/edit/${user.id}`}>Edit</Link>
              <Link
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;