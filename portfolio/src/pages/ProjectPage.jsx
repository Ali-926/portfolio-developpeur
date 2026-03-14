import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/ProjectContext";
import kasaImage from "../assets/images/kasa.webp";
import grimoireImage from "../assets/images/grimoire.webp";
import "../styles/projectPage.css";

const projectImages = {
  kasa: kasaImage,
  grimoire: grimoireImage,
};

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  const techStack = project.stack.split(",");

  return (
    <main className="project-page">
      {/* HERO PROJET */}

      <div className="project-hero">
        <img
          src={projectImages[id]}
          alt={`Capture du projet ${project.title}`}
          className="project-hero-image"
        />

        <div className="project-hero-content">
          <h1>{project.title}</h1>

          <div className="project-tags">
            {techStack.map((tech, index) => (
              <span key={index}>{tech.trim()}</span>
            ))}
          </div>

          <div className="project-buttons">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Voir le GitHub
            </a>

            <Link to="/#projects" className="btn-secondary">
              Retour aux projets
            </Link>
          </div>
        </div>
      </div>

      {/* CONTENU */}

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </motion.section>

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Objectifs</h2>
        <p>{project.objectives}</p>
      </motion.section>

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Compétences développées</h2>
        <p>{project.skills}</p>
      </motion.section>

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Défis techniques rencontrés</h2>

        <ul className="project-challenges">
          {project.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Résultats</h2>
        <p>{project.results}</p>
      </motion.section>

      <motion.section
        className="project-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Perspectives d'amélioration</h2>
        <p>{project.improvements}</p>
      </motion.section>
    </main>
  );
}

export default ProjectPage;
