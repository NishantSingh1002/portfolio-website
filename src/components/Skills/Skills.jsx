import "./Skills.css";

import {
  FaPython,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaJenkins,
  FaTerminal,
} from "react-icons/fa";

import {
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSelenium,
  SiPydantic,
  SiSqlalchemy,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Bash", icon: <FaTerminal /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
        { name: "Pydantic", icon: <SiPydantic /> },
      ],
    },

    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Redis", icon: <SiRedis /> },
      ],
    },


    {
      title: "DevOps & Tools",
      skills: [
        { name: "Linux", icon: <FaLinux /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Selenium", icon: <SiSelenium /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <span className="section-label">TECH STACK</span>

        <h2>Technologies I Work With</h2>

        <p>
          A curated toolkit of technologies I use to build, automate, and solve real-world problems.
        </p>
      </div>

      <div className="skill-categories">
        {categories.map((category) => (
          <div className="category-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="category-skills">
              {category.skills.map((skill) => (
                <div className="skill-pill" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;