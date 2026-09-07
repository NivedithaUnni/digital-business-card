const skills = [
  {
    icon: "/icons/php.png",
    title: "PHP",
    description:
      "Backend development, server-side programming and REST API development.",
  },
  {
    icon: "/icons/react.png",
    title: "React",
    description:
      "Building modern, responsive and interactive web applications.",
  },
  {
    icon: "/icons/javascript.png",
    title: "JavaScript",
    description:
      "Creating dynamic web experiences using modern JavaScript.",
  },
  {
    icon: "/icons/mysql.png",
    title: "MySQL",
    description:
      "Database design, SQL queries and efficient data management.",
  },
  {
    icon: "/icons/mongodb.png",
    title: "MongoDB",
    description:
      "Working with NoSQL databases, collections and document-based data.",
  },
  {
    icon: "/icons/java.png",
    title: "Java",
    description:
      "Object-oriented programming and building reliable applications.",
  },
  {
    icon: "/icons/docker.png",
    title: "Docker",
    description:
      "Containerizing applications and preparing them for deployment.",
  },
  {
    icon: "/icons/aws.png",
    title: "AWS",
    description:
      "Cloud fundamentals, deployment and working with cloud services.",
  },
  {
    icon: "/icons/qdrant.png",
    title: "Qdrant",
    description:
      "Working with vector databases for embeddings and AI-powered search.",
  },
];

function Skills() {
  return (
    <section className="skills-page">
      <div className="skills-header">
        <p className="skills-eyebrow">WHAT I WORK WITH</p>

        <h1>
          My <span>Skills</span>
        </h1>

        <p className="skills-intro">
          Technologies and tools I use to build modern, scalable and
          reliable applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.title} icon`} />
            </div>

            <h2>{skill.title}</h2>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;