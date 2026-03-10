import "./footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Ali Ouroui - Portfolio développeur</p>

        <div className="footer-links">
          <a href="https://github.com/Ali-926" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ali-ouroui-75752a3b6/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
