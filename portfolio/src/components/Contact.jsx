import { motion } from "framer-motion";
import "./contact.css";

function Contact() {
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

        <form
          className="contact-form"
          action="mailto:ali.ouroui@outlook.fr"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Votre nom" required />

          <input type="email" name="email" placeholder="Votre email" required />

          <textarea
            name="message"
            placeholder="Votre message"
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
