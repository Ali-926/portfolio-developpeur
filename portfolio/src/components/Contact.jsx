import "./contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
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
    </section>
  );
}

export default Contact;
