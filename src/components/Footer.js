import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Ayoub Outahar. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="mailto:ayoub.outahar9@etu.univ-lorraine.fr">Email</a>
          <a href="https://github.com/ayoub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ayoub-outahar-0a8870293/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
