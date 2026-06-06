import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "2+",
      label: "Years Experience",
    },
    {
      number: "20+",
      label: "Automation Workflows",
    },
    {
      number: "65%",
      label: "Manual Effort Reduction",
    },
    {
      number: "100%",
      label: "Python Driven",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;