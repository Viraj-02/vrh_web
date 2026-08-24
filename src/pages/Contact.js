import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jbon7h7",
        "template_lzmm9ih",
        form.current,
        {
          publicKey: "ArHIWSN6dLD62H37G",
        }
      )
      .then(
        () => {
          alert("Thank you! Your message has been sent successfully.");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
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
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
            />

            <select
              name="service"
              required
            >

              <option value="">
                Select Service
              </option>

              <option value="Custom Software">
                Custom Software
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Mobile App">
                Mobile App
              </option>

              <option value="AI / Agentic AI">
                AI / Agentic AI
              </option>

              <option value="CRM / ERP">
                CRM / ERP
              </option>

            </select>

            <textarea
              name="message"
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