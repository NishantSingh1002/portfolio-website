import "./Experience.css";

function Experience() {
  const experience = [
    {
      company: "Tata Communications",
      role: "Backend Developer",
      duration: "2024 - Present",
      description: [
        "Developed Python-based automation scripts for Cisco SD-WAN operations to streamline workflows and reduce manual intervention.",
        "Built a Flask-based web UI for automation workflows, including live log streaming and operational task execution.",
        "Integrated Cisco vManage REST APIs for device data retrieval, validation, and automation processes.",
        "Automated pre- and post-upgrade validation checks for Cisco SD-WAN environments.",
        "Improved operational efficiency by minimizing repetitive manual tasks through automation.",
        "Performed Cisco SD-WAN feature testing and use-case validation, preparing detailed documentation and test reports.",
        "Worked on Cisco SD-WAN deployment, configuration, and day-to-day operations across lab and production environments.",
        "Applied strong knowledge of DNS, HTTP/HTTPS, TCP/IP, UDP, and DHCP protocols during troubleshooting activities.",
        "Conducted Proof-of-Concept (POC) validation to evaluate Lavelle SD-WAN platform features and enhancements.",
        "Troubleshoot routing, connectivity, and policy-related issues across Cisco SD-WAN controllers and edge devices.",
        "Assisted in maintaining secure, stable, and scalable SD-WAN environments.",
        "Supported lab setup activities, including rack-and-stack deployment and device provisioning."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <span className="section-label">CAREER JOURNEY</span>

        <h2>Experience</h2>

      </div>

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

              <ul className="experience-list">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;