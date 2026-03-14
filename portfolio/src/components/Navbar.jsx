import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Ali Ouroui
        </Link>

        {/* Menu hamburger uniquement sur la page d'accueil */}
        {isHome && (
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        <ul
          className={
            isHome
              ? menuOpen
                ? "nav-links active"
                : "nav-links"
              : "nav-links project-nav"
          }
        >
          {isHome ? (
            <>
              <li>
                <a href="#about" onClick={closeMenu}>
                  À propos
                </a>
              </li>
              <li>
                <a href="#skills" onClick={closeMenu}>
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Accueil</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
