import { Link } from "react-router-dom";
import "../styles/Notfound.css";

function NotFound() {
  return (
    <main className="notfound">
      <h1>404 - Page introuvable</h1>

      <p>La page que vous recherchez n'existe pas.</p>

      <Link to="/" className="btn-primary">
        Retour à l'accueil
      </Link>
    </main>
  );
}

export default NotFound;
