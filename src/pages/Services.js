import React from "react";
import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      icon: "💻",
      title: "Custom Software Development",
      description:
        "Business-specific software designed to automate processes and improve productivity."
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Modern websites and web applications built with scalable technologies."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "User-friendly mobile applications for Android and iOS platforms."
    },
    {
      icon: "🤖",
      title: "AI & Agentic AI Solutions",
      description:
        "Intelligent AI systems, automation and agentic workflows for modern businesses."
    },
    {
      icon: "📊",
      title: "CRM & ERP Solutions",
      description:
        "CRM and ERP implementations that streamline sales, operations and business management."
    },
    {
      icon: "☁️",
      title: "Cloud & API Development",
      description:
        "Secure APIs, cloud applications and integrations for connected business systems."
    }
  ];

  return (
    <>

      <section className="page-hero">

        <div className="container">

          <p>OUR SERVICES</p>

          <h1>
            Technology Services
            <span> For Business Growth</span>
          </h1>

          <p>
            From idea to implementation, we help businesses build
            scalable digital products.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="services-large-grid">

            {services.map((service, index) => (

              <div className="large-service-card" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to="/contact">
                  Discuss Your Project →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="cta">

        <div className="container">

          <h2>Need a Custom Solution?</h2>

          <p>
            Tell us about your business requirement.
          </p>

          <Link to="/contact" className="primary-btn">
            Get Started →
          </Link>

        </div>

      </section>

    </>
  );
}

export default Services;