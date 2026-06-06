import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div>

        <h1>Nishant Singh</h1>

        <h2>
          Backend & Infrastructure Automation Engineer
        </h2>

        <p>
          Building automation platforms,
          backend services and network
          infrastructure solutions using
          Python, FastAPI, Flask and
          Cisco SD-WAN technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            className="btn-primary"
          >
            Resume
          </a>

          <a
            href="https://github.com/NishantSingh1002"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>

      </div>

      <div>
        <img
          src="/profile.png"
          alt="Nishant Singh"
        />
      </div>

    </section>
  );
}

export default Hero;