import "./Projects.css";

const projects = [
  {
    title: "SD-WAN Validation Platform",
    description:
      "Automated pre and post upgrade validation platform for Cisco SD-WAN environments using Python, Flask and Cisco vManage APIs.",

    tags: ["Python", "Flask", "REST APIs", "Cisco SD-WAN"],

    github: "#",
    docs: "#",

    stats: [
      "20+ APIs",
      "Validation Automation",
      "Production Ready",
    ],
  },

  {
    title: "Multi-Hop SSH Automation",

    description:
      "Automation framework for accessing network devices through multiple jump hosts with centralized logging and command execution.",

    tags: ["Python", "Paramiko", "Linux", "SSH"],

    github: "#",
    docs: "#",

    stats: [
      "SSH Automation",
      "Multi-Hop Access",
      "Centralized Logs",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <span className="section-label">
        PROJECTS
      </span>

      <h2>Things I've Built</h2>

      <p className="projects-intro">
        Real-world backend engineering, automation,
        and infrastructure projects.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-image">
              Screenshot Coming Soon
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-stats">
                {project.stats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
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
                  GitHub
                </a>

                <a
                  href={project.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="action-btn secondary"
                >
                  Documentation
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