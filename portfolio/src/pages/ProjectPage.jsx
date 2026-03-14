import { useParams, Link } from "react-router-dom";
import projects from "../data/ProjectContext";
import "../styles/projectPage.css";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="project-page">
        <h1>Projet introuvable</h1>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="project-header">
        <h1>{project.title}</h1>

        <div className="project-buttons">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Voir le GitHub
          </a>

          <Link to="/" className="btn-secondary">
            Retour aux projets
          </Link>
        </div>
      </div>

      <section className="project-section">
        <h2>Contexte</h2>
        <p>{project.context}</p>
      </section>

      <section className="project-section">
        <h2>Objectifs</h2>
        <p>{project.objectives}</p>
      </section>

      <section className="project-section">
        <h2>Stack technique</h2>
        <p>{project.stack}</p>
      </section>

      <section className="project-section">
        <h2>Compétences développées</h2>
        <p>{project.skills}</p>
      </section>

      <section className="project-section">
        <h2>Résultats</h2>
        <p>{project.results}</p>
      </section>

      <section className="project-section">
        <h2>Perspectives d'amélioration</h2>
        <p>{project.improvements}</p>
      </section>
    </main>
  );
}

export default ProjectPage;
