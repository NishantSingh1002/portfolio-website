import "./Experience.css";

function Experience() {
  const experience = [
    {
      company: "Tata Communications",
      role: "Engineer - Cisco SD-WAN & Infrastructure Automation",
      duration: "2024 - Present",
      description:
        "Developed automation solutions for Cisco SD-WAN infrastructure, backend services, validation frameworks, and upgrade orchestration platforms.",
    },

    {
      company: "Backend Engineering Journey",
      role: "Python Backend Developer",
      duration: "2025 - Present",
      description:
        "Focused on FastAPI, Flask, PostgreSQL, Linux, Docker, system design, and scalable backend development.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.role}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="duration">
                {item.duration}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;