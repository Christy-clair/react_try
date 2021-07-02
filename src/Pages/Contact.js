import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  let history = useHistory();
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

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/users', user);
    history.push('/');
  };

  return (
    <div className="Contact">
      <h1 style={{ textAlign: 'center', margin: '1rem auto' }}>Contact Me</h1>
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

export default Contact;