import React, { useState, useEffect } from 'react';
import './User.css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="Leads">
      <h1>User</h1>
      <div className="user-cards">
        <div className="user-card" key={user.id}>
          <h2>User Name: {user.name}</h2>
          <h3>Email: {user.email}</h3>
          <h4>Mobile: {user.mobile}</h4>
          <h3>Message: </h3>
          <p className="Message">{user.message}</p>
        </div>
      </div>
    </div>
  );
};

export default User;