import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Mes Projets</h2>

      <div className="project-card">
        <h3>Finalisation d’un banc de caractérisation hautes températures</h3>
        <p>
          Développement complet d’un banc de mesure pour capteurs SAW fonctionnant jusqu’à 1000°C.  
          Ce projet comprend la programmation avancée en Python pour l’automatisation des tests, la régulation précise par PID, 
          ainsi que l’acquisition et l’analyse des données en temps réel.  
          Une collaboration étroite avec les équipes de l’Institut Jean Lamour a permis de garantir la fiabilité et la qualité des mesures.  
        </p>
        <ul>
          <li>Programmation Python avec bibliothèques pyModbus et pySerial.</li>
          <li>Contrôle précis de la température par induction et système PID.</li>
          <li>Acquisition de données et tracé des caractéristiques fréquence/temps.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Conception et réalisation d’un robot mobile autonome</h3>
        <p>
          Conception mécanique et électronique complète d’un robot mobile intégrant modélisation 3D, architecture électronique et programmation embarquée.  
          Gestion rigoureuse du projet avec modélisation SysML, suivi des exigences, et réalisation d’un prototype fonctionnel.  
          Programmation Arduino pour la gestion des capteurs ultrason, commande des servomoteurs, et communication.  
        </p>
        <ul>
          <li>Création de diagrammes SysML pour gestion des exigences et conception.</li>
          <li>Modélisation 3D avec Autodesk Fusion, fabrication mécanique incluant impression 3D.</li>
          <li>Programmation Arduino et développement d’un shield personnalisé pour simplifier le câblage.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>API REST en Java EE avec interface PHP/JavaScript</h3>
        <p>
          Développement d’un service web REST en Jakarta EE 10 pour réaliser des calculs dynamiques via une API.  
          Intégration d’une communication client-serveur utilisant curl en PHP et fetch en JavaScript, permettant un front-end léger et efficace.  
          Manipulation du format JSON pour échanger des données complexes et structurer les réponses de l’API.  
          Projet collaboratif avec gestion de versions, déploiement sur serveur Tomcat, et respect des bonnes pratiques REST.  
        </p>
        <ul>
          <li>Création d’endpoint REST avec paramètres dynamiques pour calculs en temps réel.</li>
          <li>Interopérabilité PHP/JavaScript pour communication avec le backend.</li>
          <li>Utilisation de JSON pour formatage des données et documentation de l’API.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Portfolio React (en cours)</h3>
        <p>
          Développement d’un portfolio personnel moderne avec React.js et React Router pour présenter mes compétences et projets.  
          Utilisation de composants modulaires, navigation fluide entre les pages et styles CSS personnalisés pour un rendu professionnel.  
          Projet en constante évolution qui reflète ma maîtrise des technologies front-end modernes et ma capacité à construire des interfaces dynamiques et réactives.
        </p>
        <ul>
          <li>Création de composants React modulaires pour chaque section.</li>
          <li>Gestion des routes avec React Router pour une navigation SPA efficace.</li>
          <li>Application de styles CSS spécifiques pour une identité visuelle claire et professionnelle.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
