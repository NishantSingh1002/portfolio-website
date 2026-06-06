import "./Contacts.css";

function Contact() {
  return (
    <section id="contacts" className="contacts">
      <h2>Let's Connect</h2>

      <p>
        I'm interested in Backend Engineering,
        Infrastructure Automation, Python Development,
        and Network Automation opportunities.
      </p>

      <div className="contacts-links">
        <a
          href="mailto:nishantsingh2608@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          href="https://github.com/NishantSingh1002"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nishant-singh-backend-dev/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;