import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("loading");

    emailjs
      .sendForm(
        "service_uqlsobk",
        "template_e6g0f7p",
        form.current,
        "fnwO50zkp05H4AW8F",
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        },
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="company"
            className="honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            aria-label="Nom"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            aria-label="Email"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            aria-label="Message"
            rows="5"
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="form-message success">
              ✓ Message envoyé avec succès !
            </p>
          )}

          {status === "error" && (
            <p className="form-message error">
              Une erreur est survenue, veuillez réessayer.
            </p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
