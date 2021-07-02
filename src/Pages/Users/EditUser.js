import React, { useState, useEffect } from 'react';
import './EditUser.css';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
  let history = useHistory();
  let { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const { name, mobile, email, message } = user;

  const inputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    history.push('/');
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="Contact">
      <h1 style={{ textAlign: 'center', margin: '1rem auto' }}>Edit User</h1>
      <div className="container-contact">
        <div className="wrap-contact">
          <form
            name="contact"
            className="contact-form validate-form"
            onSubmit={(e) => submitHandler(e)}
          >
            <div
              className="wrap-input validate-input"
              data-validate="Please enter your name"
            >
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>

            <div
              className="wrap-input validate-input"
              data-validate="Please enter your Mobile Number"
            >
              <input
                className="input"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>

            <div
              className="wrap-input validate-input"
              data-validate="Please enter your email"
            >
              <input
                className="input"
                type="text"
                name="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>

            <div
              className="wrap-input validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                className="input"
                type="text"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => inputChangeHandler(e)}
              ></textarea>
            </div>

            <div className="container-contact-form-btn">
              <button type="submit" className="contact-form-btn">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;