import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-grid">

        <div className="hero-content">

          <span className="hero-tag">
            PYTHON • AUTOMATION • NETWORKING
          </span>

          <h1>
            Automating what
            <span className="gradient-blue"> shouldn't be manual.</span>

            <br />

            Building what
            <span className="gradient-purple"> shouldn't be complicated.</span>
          </h1>

          <p>
            From network automation to backend services,
            I build practical solutions that simplify operations,
            improve reliability, and help teams work more efficiently.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore Projects →
            </a>

            <a href="#contacts" className="secondary-btn">
              Contact →
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-card">

            <img
              src="/profile.png"
              alt="Nishant Singh"
              className="hero-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;