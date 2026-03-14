import { Link } from "react-router-dom";
import projects from "../data/ProjectContext";

import kasaImage from "../assets/images/kasa.webp";
import grimoireImage from "../assets/images/grimoire.webp";

import "./projects.css";
import { motion } from "framer-motion";

const images = {
  kasa: kasaImage,
  grimoire: grimoireImage,
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="projects-container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={images[project.id]}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.context}</p>

                <div className="project-tech">
                  {project.stack.split(",").map((tech, i) => (
                    <span key={i}>{tech.trim()}</span>
                  ))}
                </div>

                <div className="project-links">
                  <Link to={`/project/${project.id}`} className="btn-primary">
                    Voir le projet
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
