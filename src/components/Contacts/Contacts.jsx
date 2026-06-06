import "./Contacts.css";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const email = "nishantsingh2608@yahoo.com";

  return (
    <section id="contacts" className="contacts">

      <h2>Let's Connect.</h2>

      <p className="contact-intro">
        Feel free to reach out if you'd like to connect.
      </p>

      <div className="terminal-card">

        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>

          <span className="terminal-title">
            contact.sh
          </span>
        </div>

        <div className="terminal-body">

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">whoami</span>
          </div>

          <div className="output">
            Nishant Singh
          </div>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">role</span>
          </div>

          <div className="output">
            Backend Developer 
          </div>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">email</span>
          </div>

          <a
            href={`mailto:${email}`}
            className="output-link"
          >
            {email}
          </a>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">github</span>
          </div>

          <a
            href="https://github.com/NishantSingh1002"
            target="_blank"
            rel="noreferrer"
            className="output-link"
          >
            github.com/NishantSingh1002
          </a>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">linkedin</span>
          </div>

          <a
            href="https://www.linkedin.com/in/nishant-singh-backend-dev/"
            target="_blank"
            rel="noreferrer"
            className="output-link"
          >
            linkedin.com/in/nishant-singh-backend-dev
          </a>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="command">status</span>
          </div>

          <div className="output available">
            Actively Working on Backend & Automation Projects
          </div>

          <div className="terminal-row">
            <span className="prompt">$</span>
            <span className="cursor"></span>
          </div>

        </div>
      </div>

      <div className="contact-actions">

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="action-btn primary-btn"
        >
          <FaDownload />
          Resume
        </a>

        <a
          href={`mailto:${email}`}
          className="action-btn"
        >
          <FaEnvelope />
          Email
        </a>

        <a
          href="https://github.com/NishantSingh1002"
          target="_blank"
          rel="noreferrer"
          className="action-btn"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nishant-singh-backend-dev/"
          target="_blank"
          rel="noreferrer"
          className="action-btn"
        >
          <FaLinkedin />
          LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;