import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqlsobk",
        "template_e6g0f7p",
        form.current,
        "fnwO50zkp05H4AW8F",
      )
      .then(
        () => {
          alert("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Une erreur est survenue, veuillez réessayer.");
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

          <button type="submit" className="btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
