import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/logo.png" alt="Logo Ali Ouroui" className="footer-logo" />

        <p>© {new Date().getFullYear()} Ali Ouroui - Portfolio développeur</p>

        <div className="footer-links">
          <a
            href="https://github.com/Ali-926"
            target="_blank"
            rel="noreferrer"
            aria-label="Lien vers profil GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-ouroui-75752a3b6/"
            target="_blank"
            rel="noreferrer"
            aria-label="Lien vers profil LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
