import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

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
          setFormData({ name: "", email: "", message: "" });
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
          <label htmlFor="company" className="sr-only" aria-hidden="true">
            Company (ne pas remplir)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="honeypot"
            tabIndex="-1"
            autoComplete="off"
          />

          <label htmlFor="name" className="sr-only">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            aria-label="Nom"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            required
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            aria-label="Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={!isFormValid || status === "loading"}
          >
            {status === "loading" ? "Envoi..." : "Envoyer"}
          </button>

          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                className="form-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Message envoyé avec succès !
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                key="error"
                className="form-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Une erreur est survenue, veuillez réessayer.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
