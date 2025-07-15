import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L’email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // 📨 Envoi à toi (le propriétaire)
      emailjs.send(
        'service_m11b1xb',
        'template_d1c7yz8', // <-- le template qui t'envoie à toi
        formData,
        'FQfFDzKLVLledvVKU'
      ).then(() => {
        // ✅ Ensuite, envoi l'auto-réponse à l'utilisateur
        emailjs.send(
          'service_m11b1xb',
          'template_1lp06mr', // <-- le template qui envoie au visiteur
          formData,
          'FQfFDzKLVLledvVKU'
        ).then(() => {
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        }).catch((error) => {
          alert("Erreur lors de l'envoi de l'accusé de réception.");
          console.error(error);
        });
      }).catch((error) => {
        alert("Erreur lors de l'envoi du message.");
        console.error(error);
      });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contactez-moi</h2>
      {submitted && <p className="success-message">Merci pour votre message ! Je vous répondrai rapidement.</p>}

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Nom et prénom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit">Envoyer</button>
      </form>

      <div className="contact-info">
        <h3>Mes informations</h3>
        <p><FaEnvelope /> ayoub.outahar9@etu.univ-lorraine.fr</p>
        <p><FaPhone /> +33 6 12 34 56 78</p>
        <p>
          <FaLinkedin />{' '}
          <a href="https://www.linkedin.com/in/ayoub-outahar-0a8870293/" target="_blank" rel="noreferrer">
            Mon profil LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
