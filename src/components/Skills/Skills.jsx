import "./Skills.css";

import {
  FaPython,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiCisco,
  SiSelenium,
} from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },

    { icon: <SiCisco />, name: "Cisco SD-WAN" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },

    { icon: <SiSelenium />, name: "Selenium" },

    {
      icon: <span className="custom-icon">⚡</span>,
      name: "REST APIs",
    },

    {
      icon: <span className="custom-icon">🤖</span>,
      name: "Automation",
    },

    {
      icon: <span className="custom-icon">🌐</span>,
      name: "Networking",
    },

    {
      icon: <span className="custom-icon">🔐</span>,
      name: "Paramiko",
    },

    {
      icon: <span className="custom-icon">🎭</span>,
      name: "Playwright",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">

        <span className="section-label">
          TECH STACK
        </span>

        <h2>Technologies I Work With</h2>

        <p>
          Building backend services, automation platforms,
          and network infrastructure solutions using modern tools
          and technologies.
        </p>

      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">
              {skill.icon}
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;