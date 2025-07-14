import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import photo from '../assets/idayoub.jpg'; // ← ton image ici

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <img src={photo} alt="Profil" className="home-photo" />
        <h1 className="home-title">Bienvenue sur mon portfolio</h1>
        <p className="home-intro">
          Je suis étudiant en 4ᵉ année à <strong>Polytech Nancy</strong>, spécialisé en 
          <em> Informatique, Automatique, Robotique et Réseaux</em>.
        </p>
        <p className="home-description">
          Ce site présente mes projets réalisés durant ma formation, ainsi que mes compétences
          en développement web, électronique, systèmes embarqués, et conception mécanique.
        </p>
        <p className="home-note">
          N’hésitez pas à visiter les différentes sections pour découvrir mon parcours et mes réalisations.
        </p>
        <button className="home-button" onClick={() => navigate('/projects')}>
          Voir mes projets
        </button>
      </div>
    </div>
  );
}

export default Home;
