import React from "react";
import { motion } from "framer-motion";
import propic from "../assets/images/productivity.jpg";



const Portfolio = () => {
  // ✅ Contact Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Server error. Please try again later.");
    }
  };

  const projects = [
    {
      id: 1,
      title: "Productivity Tracker",
      description:
        "Full-stack productivity tracker using React, Node.js, Express, and MongoDB with real-time updates.",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        propic,
    },
  ];

  const skills = [
    { name: "React", level: 70 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Node.js & Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Java", level: 75 },
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">Bezalel</span>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <motion.section
          id="home"
          className="hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hero-content">
            <h1>
              Hi! I'm <span className="highlight">Bezalel Vivian</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>
              Final-year IT student passionate about scalable web apps and
              clean, modern UI design.
            </p>
            <a href="#projects" className="cta-button">
              View My Work
            </a>
          </div>
          <div className="hero-image">
            <div className="glow-effect"></div>
            <div className="avatar-placeholder"></div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="about-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">
            About <span className="highlight">Me</span>
          </h2>
          <p>
            I'm a final-year B.Tech IT student from Nagercoil, specializing in
            the MERN stack. I build responsive, performant UIs and scalable REST
            APIs.
          </p>
          <p>
            Education: University College of Engineering, Nagercoil (CGPA 7.78)
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="projects-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="skills-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="contact-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="section-title">
            Contact <span className="highlight">Me</span>
          </h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </motion.section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bezalel Vivian — All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Portfolio;
