import "./About.css";
import picture from "../../assets/picture.png";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <main className="about-container">
      <section className="about-card">
        <div className="about-content">
          <div className="about-text">
            <span className="about-badge">About me</span>

            <h1>Hi! I am Mariano, a Web Developer.</h1>

            <p>
              I am passionate about technology and I am on my way to becoming a
              full stack developer. I enjoy learning, creating projects and
              solving new challenges.
            </p>

            <p>
              My journey in this industry began as a fresh challenge, and I have
              learned that determination and continuous learning can overcome
              many obstacles.
            </p>

            <p className="about-highlight">
              We should have a coffee and talk!
            </p>

            <div className="about-actions">
              <Link to="/home" className="about-home-button">
                Back to Home
              </Link>
            </div>
          </div>

          <div className="about-profile">
            <div className="about-image-wrapper">
              <img src={picture} className="foto-about" alt="Mariano Masondo" />
            </div>

            <div className="button-about">
              <span>Contact me</span>

              <div className="social-links">
                <a
                  href="https://twitter.com/mason_nano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button twitter"
                  aria-label="Twitter / X"
                >
                  <FaXTwitter />
                </a>

                <a
                  href="https://www.instagram.com/mariano_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://github.com/MarianoMasondo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button github"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mariano-masondo-7026b0254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}