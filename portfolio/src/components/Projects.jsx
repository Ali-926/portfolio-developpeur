import kasaImage from "../assets/images/kasa.jpg";
import grimoireImage from "../assets/images/grimoire.jpg";
import "./projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Kasa",
    description:
      "Application React de location immobilière avec routing dynamique et composants réutilisables.",
    image: kasaImage,
    tech: ["React", "Sass"],
    github: "https://github.com/Ali-926/Kasa",
    demo: "#",
  },
  {
    title: "Mon Vieux Grimoire",
    description:
      "Application Node.js permettant de gérer des livres avec authentification sécurisée et upload d'images.",
    image: grimoireImage,
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ali-926/MonVieuxGrimoire",
    demo: "#",
  },
];

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
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Voir le projet
                    </a>
                  )}
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
