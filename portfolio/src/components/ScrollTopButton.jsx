import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollTopButton.css";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        aria-label="Retour en haut de la page"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollTopButton;
