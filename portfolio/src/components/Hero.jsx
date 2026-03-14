import { motion } from "framer-motion";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-glow" aria-hidden="true"></div>

        <motion.h1
          id="hero-title"
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bonjour, je suis <span>Ali Ouroui</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Développeur Web Junior spécialisé en React et Node.js
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Je développe des applications web modernes, performantes et
          accessibles avec React pour le front-end et Node.js pour le back-end.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a
            href="#projects"
            className="btn-primary"
            aria-label="Voir les projets développés"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="btn-secondary"
            aria-label="Accéder au formulaire de contact"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
