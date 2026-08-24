import React from "react";
import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Business Management System",
      category: "Custom Software",
      description:
        "A centralized business management platform for managing operations, customers and business workflows."
    },
    {
      number: "02",
      title: "AI Business Assistant",
      category: "AI / Agentic AI",
      description:
        "An intelligent AI assistant designed to automate repetitive business tasks and improve productivity."
    },
    {
      number: "03",
      title: "CRM & Sales Automation",
      category: "CRM / Automation",
      description:
        "A CRM solution for managing leads, customers, sales pipelines and automated follow-ups."
    },
    {
      number: "04",
      title: "Modern Business Website",
      category: "Web Development",
      description:
        "A responsive corporate website designed to improve brand presence and generate leads."
    }
  ];

  return (
    <>

      <section className="page-hero">

        <div className="container">

          <p>OUR WORK</p>

          <h1>
            Ideas Transformed Into
            <span> Digital Products</span>
          </h1>

          <p>
            Explore some of the solutions we build for modern businesses.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="projects-grid">

            {projects.map((project, index) => (

              <div className="project-card" key={index}>

                <div className="project-number">
                  {project.number}
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h2>{project.title}</h2>

                <p>
                  {project.description}
                </p>

                <Link to="/contact">
                  View Project →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="cta">

        <div className="container">

          <h2>Have a Project in Mind?</h2>

          <p>
            Let's turn your idea into a real product.
          </p>

          <Link to="/contact" className="primary-btn">
            Start Your Project →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Projects;