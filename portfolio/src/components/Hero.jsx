import { motion } from "framer-motion";
import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bonjour, je suis <span>Ali Ouroui</span>
        </motion.h2>

        <motion.h3
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Développeur Web Junior
        </motion.h3>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Je développe des applications web modernes avec React et Node.js.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#projects" className="btn-primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
