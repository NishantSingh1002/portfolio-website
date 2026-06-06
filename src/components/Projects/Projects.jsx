import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Cisco SD-WAN Pre/Post Upgrade Validation Framework",
      description:
        "Automated pre and post change validation using Cisco vManage APIs, reducing manual validation effort and improving upgrade reliability.",
      tech: ["Python", "Flask", "Cisco SD-WAN", "REST APIs"],
    },

    {
      title: "Multi-Hop Network Device Access Automation",
      description:
        "Automated SSH connectivity across multiple jump hosts with centralized logging and command execution.",
      tech: ["Python", "Paramiko", "Linux", "SSH"],
    },

  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;