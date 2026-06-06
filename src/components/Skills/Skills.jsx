import "./Skills.css";

function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Flask",
        "REST APIs",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      title: "Automation",
      skills: [
        "Playwright",
        "Paramiko",
        "Selenium",
        "Network Automation",
      ],
    },
    {
      title: "Networking",
      skills: [
        "Cisco SD-WAN",
        "Routing",
        "Switching",
        "TCP/IP",
        "BGP",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Linux",
        "Git",
        "Docker",
        "GitHub",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;