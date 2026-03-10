import kasaImage from "../assets/images/kasa.jpg";
import grimoireImage from "../assets/images/grimoire.jpg";
import "./projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects-grid">
          <div className="project-card">
            <img src={kasaImage} alt="Projet Kasa" className="project-image" />

            <div className="project-content">
              <h3>Kasa</h3>

              <p>
                Application React de location immobilière avec routing dynamique
                et composants réutilisables.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Sass</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Ali-926/Kasa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src={grimoireImage}
              alt="Projet Mon Vieux Grimoire"
              className="project-image"
            />

            <div className="project-content">
              <h3>Mon Vieux Grimoire</h3>

              <p>
                Application Node.js permettant de gérer des livres avec
                authentification sécurisée et upload d'images.
              </p>

              <div className="project-tech">
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Ali-926/MonVieuxGrimoire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
