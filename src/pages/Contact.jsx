function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        <div className="contact-header">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1>
            Let's <span>Connect</span>
          </h1>

          <p className="contact-intro">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-item">
              <div className="contact-icon">
                <img
                  src="/icons/email.png"
                  alt="Email"
                />
              </div>

              <div>
                <h3>Email</h3>
                <a href="mailto:niveditha.unni@halverongroup.com">
                  niveditha.unni@halverongroup.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                />
              </div>

              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/niveditha-unni-934861227/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img
                  src="/icons/github.png"
                  alt="GitHub"
                />
              </div>

              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/NivedithaUnni"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my projects
                </a>
              </div>
            </div>

          </div>

  <div className="contact-card">

  <div className="contact-card-content">
    <h2>Ready to work together?</h2>

    <p>
      I'm always interested in new opportunities, interesting
      projects and collaborations.
    </p>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=niveditha.unni@halverongroup.com"
  target="_blank"
  rel="noreferrer"
  className="contact-button"
>
  Send Me an Email →
</a>
  </div>

  <img
    src="/profile.png"
    alt="Niveditha Unni"
    className="contact-profile"
  />

</div>

        </div>
      </div>
    </section>
  );
}

export default Contact;