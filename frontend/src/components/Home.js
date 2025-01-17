import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

function Home() {
  return (
    <>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Le Projet Geek le plus fou</h1>
          <h2 className="subtitle">Svp connetez vous ou inscrivez vous jai besoin d'argent</h2>
          <div className="buttons">
            <a href="/login" className="button is-light">Se connecter</a>
            <a href="/register" className="button is-link">S'inscrire</a>
          </div>
        </div>
      </div>
    </section>
    </>    
  );
}

export default Home;
