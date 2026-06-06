import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-label">
          BACKEND • AUTOMATION • INFRASTRUCTURE
        </span>

        <h1>
          Nishant Singh
        </h1>

        <h2>
          Automating what shouldn't be manual.
          <br />
          Building what shouldn't be complicated.
        </h2>

        <p>
          I build backend services, automation platforms,
          and infrastructure solutions that improve reliability,
          reduce operational effort, and simplify complex workflows.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Resume
          </a>

          <a
            href="https://github.com/NishantSingh1002"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nishant-singh-backend-dev/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-card">

          <img
            src="/profile.png"
            alt="Nishant Singh"
            className="hero-image"
          />

          <div className="hero-card-content">

            <h3>Nishant Singh</h3>

            <p className="hero-role">
              Backend & Infrastructure Automation Engineer
            </p>

            <div className="hero-highlights">

              <div className="highlight">
                <span>🚀</span>
                <p>2+ Years Experience</p>
              </div>

              <div className="highlight">
                <span>⚙️</span>
                <p>Automation Platforms</p>
              </div>

              <div className="highlight">
                <span>🌐</span>
                <p>Network Automation</p>
              </div>

              <div className="highlight">
                <span>🇮🇳</span>
                <p>India</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;