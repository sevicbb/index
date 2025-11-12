import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">SEVIĆ</h1>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2 className="logo">ABOUT</h2>
          <p className="about-text">
            Creative developer and passionate about building beautiful digital experiences.
            I combine design thinking with technical expertise to create innovative solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="container">
          <h2 className="logo">PROJECTS</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>A modern web application built with React and Node.js.</p>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>A mobile-first design system with reusable components.</p>
              <div className="tags">
                <span>Design</span>
                <span>Figma</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>An e-commerce platform with seamless user experience.</p>
              <div className="tags">
                <span>Vue.js</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="container">
          <h2 className="logo">SKILLS</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h4>Frontend</h4>
              <p>React, Vue.js, TypeScript, HTML, CSS</p>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <p>Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="skill-category">
              <h4>Design</h4>
              <p>Figma, UI/UX, Prototyping, Design Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="logo">CONTACT</h2>
          <p>Let's work together on your next project.</p>
          <div className="contact-links">
            <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>Email</a>
            <a href={import.meta.env.VITE_CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={import.meta.env.VITE_CONTACT_GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 SEVIĆ</p>
      </footer>
    </div>
  )
}

export default App
