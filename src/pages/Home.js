import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="container hero-content">

          <div className="hero-text">

            <p className="tagline">
              🚀 DIGITAL SOLUTIONS FOR MODERN BUSINESSES
            </p>

            <h1>
              We Build
              <span> Digital Solutions </span>
              That Drive Growth.
            </h1>

            <p>
              VRH Infotech Solutions helps startups and businesses
              transform ideas into powerful websites, custom software,
              AI solutions and scalable digital products.
            </p>

            <div className="hero-buttons">

              <Link to="/contact" className="primary-btn">
                Start a Project →
              </Link>

              <Link to="/projects" className="secondary-btn">
                View Projects
              </Link>

            </div>

          </div>

          <div className="hero-card">

            <div className="code-window">

              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const VRH = {
  innovation: true,
  technology: [
    "React",
    "Node.js",
    "AI",
    "Cloud"
  ],
  mission:
    "Build. Innovate. Grow."
};`}
              </pre>

            </div>

          </div>

        </div>

      </section>


      {/* SERVICES */}

      <section className="section">

        <div className="container">

          <div className="section-heading">

            <p>WHAT WE DO</p>

            <h2>
              Technology That
              <span> Moves Your Business Forward</span>
            </h2>

          </div>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Custom Software</h3>
              <p>
                Scalable software solutions designed around your
                business requirements.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Web Development</h3>
              <p>
                Modern, responsive and high-performance websites
                using the latest technologies.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI Solutions</h3>
              <p>
                AI-powered automation and intelligent business
                solutions.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>CRM & ERP</h3>
              <p>
                Business automation using CRM, ERP and custom
                management systems.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="technology">

        <div className="container">

          <div className="section-heading">

            <p>OUR TECHNOLOGY</p>

            <h2>
              Built With Modern
              <span> Technologies</span>
            </h2>

          </div>

          <div className="tech-grid">

            <div>React JS</div>
            <div>Node JS</div>
            <div>JavaScript</div>
            <div>Python</div>
            <div>PHP</div>
            <div>MySQL</div>
            <div>AI / ML</div>
            <div>Cloud</div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <div className="container">

          <h2>Have an Idea? Let's Build It.</h2>

          <p>
            Turn your business idea into a powerful digital product.
          </p>

          <Link to="/contact" className="primary-btn">
            Let's Talk →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;