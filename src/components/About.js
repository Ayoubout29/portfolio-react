import './About.css';


function About() {
  return (
    <div className="about-container">
      <h2>À propos de moi</h2>
      <p>
        Je suis étudiant en 4ème année à Polytech Nancy, spécialité Informatique, Automatique, Robotique et Réseaux.
        Passionné par le développement web et les nouvelles technologies, je travaille actuellement sur plusieurs projets techniques
        dont un portfolio React pour présenter mes compétences et réalisations.
      </p>
      <p>
        Mes domaines de prédilection incluent le développement frontend avec React, la programmation backend en Java EE,
        ainsi que la robotique et l'automatisation. Je suis motivé par la résolution de problèmes complexes et l'apprentissage continu.
      </p>
      <h3>Compétences principales :</h3>
      <ul>
        <li>Développement web (React, JavaScript, HTML/CSS)</li>
        <li>Programmation Java EE & services REST</li>
        <li>Automatisation et régulation (PID, Python)</li>
        <li>Robotique et électronique embarquée (Arduino)</li>
      </ul>
    </div>
  );
}

export default About;
