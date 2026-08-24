import React from "react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
  };

  return (
    <>

      <section className="page-hero">

        <div className="container">

          <p>CONTACT US</p>

          <h1>
            Let's Build Something
            <span> Amazing Together.</span>
          </h1>

          <p>
            Tell us about your project and our team will get back to you.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container contact-grid">

          <div className="contact-info">

            <p className="small-title">
              GET IN TOUCH
            </p>

            <h2>
              Let's Talk About
              <span> Your Project</span>
            </h2>

            <p>
              Whether you need a website, custom software,
              AI solution or business automation, we are ready
              to help.
            </p>

            <div className="contact-item">
              <strong>📍 Location</strong>
              <p>Indore, Madhya Pradesh, India</p>
            </div>

            <div className="contact-item">
              <strong>📧 Email</strong>
              <p>support.vrhinfotech@gmail.com</p>
            </div>

            <div className="contact-item">
              <strong>📞 Phone</strong>
              <p>+91 7067335422</p>
            </div>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Company Name"
            />

            <select required>

              <option value="">
                Select Service
              </option>

              <option>
                Custom Software
              </option>

              <option>
                Web Development
              </option>

              <option>
                Mobile App
              </option>

              <option>
                AI / Agentic AI
              </option>

              <option>
                CRM / ERP
              </option>

            </select>

            <textarea
              placeholder="Tell us about your project..."
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

    </>
  );
}

export default Contact;