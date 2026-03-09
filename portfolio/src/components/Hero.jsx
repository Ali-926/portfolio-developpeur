import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2 className="hero-title">
          Bonjour, je suis <span>Ali Ouroui</span>
        </h2>

        <h3 className="hero-subtitle">Développeur Web Junior</h3>

        <p className="hero-description">
          Je développe des applications web modernes avec React et Node.js.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Voir mes projets
          </a>

          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
