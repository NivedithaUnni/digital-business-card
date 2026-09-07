import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-text">

          <div className="hero-badge">
            ✦ SOFTWARE DEVELOPER
          </div>

          <h1>
            Hi, I'm
            <br />
            <span>Niveditha Unni</span>
          </h1>

          <h2>
            PHP Developer & Full Stack Enthusiast
          </h2>

          <p className="hero-description">
            I build modern web applications, REST APIs and digital
            experiences using PHP, React, JavaScript, MySQL and Docker.
          </p>

          <div className="hero-buttons">

            <Link to="/skills" className="primary-btn">
              View My Skills →
            </Link>

            <Link to="/contact" className="secondary-btn">
              ✉ Let's Connect
            </Link>

          </div>

          <div className="social-links">

  <a
    href="https://www.linkedin.com/in/niveditha-unni-934861227/"
    target="_blank"
    rel="noreferrer"
    className="social"
  >
    <img
      src="/icons/linkedin.png"
      alt="LinkedIn"
      className="social-image"
    />
  </a>

  <a
    href="https://github.com/NivedithaUnni"
    target="_blank"
    rel="noreferrer"
    className="social"
  >
    <img
      src="/icons/github.png"
      alt="GitHub"
      className="social-image"
    />
  </a>

  <a
    href="mailto:niveditha.unni@halverongroup.com"
    className="social"
  >
    <img
      src="/icons/email.png"
      alt="Email"
      className="social-image"
    />
  </a>

</div>

        </div>


        {/* RIGHT SIDE */}
       <div className="hero-visual">
  <img
    src="/developer.png"
    alt="Developer working on laptop"
    className="developer-image"
  />
</div>

      </div>

    </section>
  );
}

export default Home;