import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Footer/Footer.css';

/**
 * 
 * loginUser
 * 
 * @param {*} credentials 
 * @returns token
 */
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 /**
  * Login
  * 
  * @param {*} param0 
  * @returns 
  */
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }

  return(
    <div className="login-wrapper">
    <Header />
    <h4>Please Log In</h4>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <Footer />
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}