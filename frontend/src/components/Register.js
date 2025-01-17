import React, { useState } from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/users/create`, {
        name,
        email,
        password,
      });
      alert('Bien inscrit!');
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      alert('Mauvaise infos'); 
    }
  };

  return (
    <>
    <div className="container">
      <h1 className="title">Inscription</h1>
      <form onSubmit={registerSubmit}>
        <div className="field">
          <label className="label">Nom</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Entrez votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Entrez mail"
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
            <button className="button is-link" type="submit">Register</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Register;

