import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "SD-WAN Validation Platform",
      description:
        "Automated pre and post-upgrade validation platform for Cisco SD-WAN environments using Python, Flask, and Cisco vManage APIs.",

      image: "/project-placeholder.png",

      tags: [
        "Python",
        "Flask",
        "REST APIs",
        "Cisco SD-WAN",
      ],

      stats: [
        "Cisco vManage APIs",
        "Automated Validation",
        "Flask Dashboard",
      ],

      github: "#",
      details: "#",
    },

    {
      title: "Multi-Hop SSH Automation Framework",

      description:
        "Automation framework for accessing network devices through multiple jump hosts with centralized logging and command execution.",

      image: "/project-placeholder.png",

      tags: [
        "Python",
        "Paramiko",
        "Linux",
        "SSH",
      ],

      stats: [
        "Multi-Hop Access",
        "SSH Automation",
        "Centralized Logging",
      ],

      github: "#",
      details: "#",
    },
  ];

  return (
    <section id="projects" className="projects">

      <span className="section-label">
        PROJECTS
      </span>

      <h2>Things I've Built</h2>

      <p className="projects-intro">
        Real-world backend engineering, automation,
        and infrastructure projects built using Python,
        networking technologies, and modern development tools.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-stats">

                {project.stats.map((stat) => (
                  <span
                    className="stat-pill"
                    key={stat}
                  >
                    {stat}
                  </span>
                ))}

              </div>

              <div className="project-tags">

                {project.tags.map((tag) => (
                  <span
                    className="tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="project-actions">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn"
                >
                  View Project →
                </a>

                <a
                  href={project.details}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn secondary"
                >
                  View Details
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;