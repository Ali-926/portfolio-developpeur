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
    tech: ["React", "CSS"],
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
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Mes projets</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
                  <a href={project.github}>GitHub</a>
                  {project.demo && <a href={project.demo}>Voir le projet</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
