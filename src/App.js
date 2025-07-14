import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '900px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px', color: '#282c34' }}>
          <h1>Bienvenue sur mon portfolio</h1>
        </header>

        {/* Barre de navigation */}
        <nav style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '25px', 
          marginBottom: '30px', 
          backgroundColor: '#282c34', 
          padding: '15px 0', 
          borderRadius: '8px',
          flexWrap: 'wrap'
        }}>
          <Link to="/" style={navStyle}>Accueil</Link>
          <Link to="/about" style={navStyle}>À propos</Link>
          <Link to="/projects" style={navStyle}>Projets</Link>
          <Link to="/contact" style={navStyle}>Contact</Link>
        </nav>

        {/* Contenu */}
        <div style={{ fontSize: '18px', color: '#444', lineHeight: '1.6' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

const navStyle = {
  color: '#61dafb',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '18px'
};

export default App;
