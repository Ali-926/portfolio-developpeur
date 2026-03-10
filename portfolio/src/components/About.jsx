import "./about.css";

function About() {
  return (
    <section id="about" className="about">
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
    </section>
  );
}

export default About;
