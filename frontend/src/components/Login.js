import React, { useState } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {
        email,
        password,
      });
      alert('Bien connecté');
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      alert('Essayez encore'); 
    }
  };

  return (
    <>
    <div className="container">
      <h1 className="title">Login</h1>
      <form onSubmit={loginSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Entrez email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Entrez password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-link" type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;

