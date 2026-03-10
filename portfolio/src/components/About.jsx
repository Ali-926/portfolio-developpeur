import "./about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="about-container">
        <h2 className="section-title">À propos</h2>

        <div className="about-content">
          <p>
            Je suis développeur web formé chez OpenClassrooms, spécialisé dans
            la création d'applications web modernes avec React et Node.js.
          </p>

          <p>
            J'aime concevoir des interfaces intuitives et développer des
            architectures backend robustes pour créer des applications
            performantes et sécurisées.
          </p>

          <p>
            Je suis actuellement à la recherche d'opportunités en tant que
            développeur web afin de continuer à progresser et contribuer à des
            projets ambitieux.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
