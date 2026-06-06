import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-tag">
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
          I build backend services, automation platforms, and
          infrastructure solutions that improve reliability,
          simplify operations, and reduce engineering effort.
        </p>

        <div className="hero-nav-buttons">

          <a href="#projects">
            View Projects
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#skills">
            Skills
          </a>

        </div>

        <div className="hero-metrics">

          <div className="metric">
            <h3>2+</h3>
            <span>Years Experience</span>
          </div>

          <div className="metric">
            <h3>20+</h3>
            <span>Automation Workflows</span>
          </div>

          <div className="metric">
            <h3>SD-WAN</h3>
            <span>Infrastructure Focus</span>
          </div>

          <div className="metric">
            <h3>Backend</h3>
            <span>Python & APIs</span>
          </div>

        </div>

      </div>

      <div className="hero-image-section">

        <div className="hero-image-wrapper">

          <img
            src="/profile.png"
            alt="Nishant Singh"
            className="hero-image"
          />

          <div className="floating-badge">
            🚀 Building Automation Platforms
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;