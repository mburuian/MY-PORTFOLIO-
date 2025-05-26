// App.jsx
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const myPicture = "/IMG-20250502-WA0118.jpg";
  const [showForm, setShowForm] = useState(false);
  const projects = [
    {
  title: 'Emerald Counselling',
  description: 'A Next.js-based counseling website for booking consultations.',
  link: 'https://github.com/mburuian/emerald-counselling',
  type: 'web',
  image: '/IMG-20250318-WA0003.jpg'
},
{
  title: 'Road Accident Data Analysis',
  description: 'Analyzes road accident data using Python and Pandas to identify patterns and insights.',
  link: 'https://github.com/mburuian/Road-Accident-Data-Analysis-using-Python-Pandas',
  type: 'terminal',
  image: '/nvmbky-dkWY6Jgryiw-unsplash.jpg'
},

{
  title: 'Mystic Bank System',
  description: 'A console-based simulation of a bank management system.',
  link: 'https://github.com/mburuian/MYSTIC-BANK-SYSTEM',
  type: 'terminal',
  image: '/etienne-martin-2_K82gx9Uk8-unsplash.jpg'
},
{
  title: 'Rental Car System',
  description: 'A terminal app for managing car rentals and customer information.',
  link: 'https://github.com/mburuian/RENTAL-CAR-SYSTEM',
  type: 'terminal',
  image: '/sven-d-a4S6KUuLeoM-unsplash.jpg'
},
{
  title: 'Game Guessing',
  description: 'A guessing game played in the terminal.',
  link: 'https://github.com/mburuian/game-guessing-',
  type: 'terminal',
  image: '/massimo-virgilio--TUFuoyFVjY-unsplash.jpg'
}
];
 const certifications = [
    {
      title: 'Problem Solving (Basic)',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/your-cert-link',
      image: '/images/hackerrank-logo.png'
    },
    {
      title: 'Python (Basic)',
      platform: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/your-python-cert-link',
      image: '/images/hackerrank-logo.png'
    }

  ];
  

  return (
    <main className="bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Ian Mburu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
     <header className="hero-section py-5">
  <div className="container d-flex flex-wrap align-items-center justify-content-between">
    <div className="hero-text text-light">
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Hello.</h1>
      <h2 style={{ fontSize: '4rem', fontWeight: 'bolder' }}>I’m Ian Mburu</h2>
      <h3 style={{ fontSize: '2.5rem', color: 'orange', fontWeight: '600' }}>Backend Developer</h3>

      <div className="mt-4 d-flex gap-3">
        <a href="#contact" className="btn btn-warning text-dark fw-bold">Got a Project?</a>
      </div>
    </div>
    <div className="hero-image mt-4 mt-md-0">
      <img src="/IMG-20250502-WA0118.jpg" alt="Ian Mburu" className="profile-image" />
    </div>
  </div>
</header>


        

    {/* Skills */}
<section className="skills-blur-container py-4 my-5 text-center text-light">
  <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
    <span className="px-3 py-2">JavaScript</span>
    <span className="px-3 py-2">MySQL</span>
    <span className="px-3 py-2">React</span>
    <span className="px-3 py-2">Java</span>
    <span className="px-3 py-2">HTML</span>
    <span className="px-3 py-2">CSS</span>
    <span className="px-3 py-2">Python (Flask)</span>
  </div>
</section>




      {/* About */}
      <section id="about" className="py-5" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <div className="about-left flex-grow-1 mb-4 mb-md-0 d-flex flex-column gap-3" style={{ minWidth: '300px', maxWidth: '45%' }}>
            <img
              src="/IMG-20250526-WA0183.jpg"
              alt="About"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
            
          </div>
          <div className="about-right flex-grow-1" style={{ maxWidth: '50%', textAlign: 'right' }}>
            <h2>About Me</h2>
            <p>I am a dedicated backend developer with a passion for building scalable and efficient web applications. With a strong foundation in Node.js, Express, and databases, I create robust APIs and seamless integrations.</p>
            <p>My approach focuses on writing clean, maintainable code and solving complex problems with elegant solutions. I’m continuously learning and exploring new technologies to stay ahead in the rapidly evolving software industry.</p>
            <p>When I’m not coding, I enjoy contributing to open-source projects and collaborating with fellow developers to innovate and grow.</p>
          </div>
        </div>
      </section>

     {/* Projects */}
<section id="projects" className="py-5" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
  <div className="container">
    <h2 className="text-center mb-5">Projects</h2>
    <div className="row">
      {projects.map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100 bg-dark text-light">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
            )}
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text flex-grow-1">{project.description}</p>
              <span className="badge bg-secondary mb-2" style={{ width: 'fit-content' }}>
                {project.type === 'terminal' ? 'Terminal App' : 'Web App'}
              </span>
              <a
                href={project.link}
                className="btn btn-outline-light mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     

  
    <section id="contact" className="py-5" style={{ backgroundColor: '#0f172a', color: '#fff' }}>
      <div className="container text-center">
        <h2 className="mb-3" style={{ fontWeight: '700', fontSize: '2.5rem' }}>
          Have a project? Let’s talk.
        </h2>
        <p className="mb-5" style={{ fontSize: '1.1rem', color: '#cbd5e1' }}>
          I’d love to hear about your ideas and how I can help bring them to life.
        </p>

        <div className="d-flex flex-column align-items-center gap-4">
          {/* Email */}
          <div
            onMouseEnter={() => setShowForm(true)}
            onMouseLeave={() => setShowForm(false)}
            style={{ cursor: 'pointer' }}
          >
            <div className="text-light" style={{ fontSize: '1.2rem' }}>
              📧 <span style={{ textDecoration: 'underline' }}>Send an Email</span>
            </div>

            {showForm && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent");
                }}
                style={{
                  background: '#1e293b',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginTop: '1rem',
                  width: '300px',
                  boxShadow: '0 0 10px rgba(255,165,0,0.3)'
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="form-control mb-2"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="form-control mb-2"
                ></textarea>
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: 'orange',
                    color: '#0f172a',
                    fontWeight: 'bold',
                    width: '100%'
                  }}
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/254708059908"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: 'orange', fontSize: '1.2rem' }}
          >
            💬 WhatsApp Chat
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mburuian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: 'orange', fontSize: '1.2rem' }}
          >
            🧑‍💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ian-mburu-b704a0265/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: 'orange', fontSize: '1.2rem' }}
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <small>&copy; 2025 Ian Mburu. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}
