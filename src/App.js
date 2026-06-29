import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide back to top button
      setShowBackToTop(window.scrollY > 400);

      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'Python', icon: '🐍', category: 'language' },
    { name: 'Java', icon: '☕', category: 'language' },
    { name: 'JavaScript', icon: '⚡', category: 'frontend' },
    { name: 'React.js', icon: '⚛️', category: 'frontend' },
    { name: 'HTML/CSS', icon: '🎨', category: 'frontend' },
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'SQL', icon: '🗄️', category: 'database' },
    { name: 'Machine Learning', icon: '🤖', category: 'datascience' },
    { name: 'Deep Learning', icon: '🧠', category: 'datascience' },
    { name: 'Power BI', icon: '📊', category: 'datascience' },
    { name: 'Statistics', icon: '📈', category: 'datascience' },
    { name: 'Flask', icon: '🌶️', category: 'backend' }
  ];

  const projects = [
    {
      title: 'TrustScan Prediction',
      description: 'AI-powered system to detect phishing and scams by analyzing emails and domains. Implemented full pipeline with company detection, web scraping, and security checks (WHOIS, DNS, SSL). Generated trust scores using ML models.',
      tech: ['Python', 'React.js', 'Pandas', 'NumPy', 'Scikit-learn', 'ML'],
      icon: '🛡️',
      github: 'https://github.com/AnusiyaThirumalai/TrustScan',
      date: 'Jan 2026 - April 2026'
    },
    {
      title: 'SentinelGPT',
      description: 'Advanced AI-powered cybersecurity system combining GPT capabilities with threat detection. Features real-time monitoring, intelligent analysis, and automated response to security threats.',
      tech: ['Python', 'GPT', 'Cybersecurity', 'AI', 'Real-time Analysis'],
      icon: '🔐',
      github: 'https://github.com/AnusiyaThirumalai',
      date: ' May 2026'
    },
    {
      title: 'DeepShield_Detection',
      description: 'Advanced AI-powered cybersecurity system combining capabilities with threat detection by detecting the fake images,texts,audios,videos and malicious files. Features real-time monitoring, intelligent analysis, and automated response to security threats.',
      tech: ['Python', 'Cybersecurity', 'AI', 'Real-time Analysis'],
      icon: '🔐',
      github: 'https://github.com/AnusiyaThirumalai/DeepShield_Detection',
      date: 'Dec2025'
    },
    {
      title: 'Chronic Disease Prediction',
      description: 'Machine learning model to predict chronic diseases (diabetes, heart disease) using patient health records and lifestyle factors, enhancing early detection accuracy.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      icon: '🏥',
      github: 'https://github.com/AnusiyaThirumalai/Chronic-Disease-Prediction',
      date: 'Sep 2025 - Oct 2025'
    },
     {
      title: 'Gold Price Prediction',
      description: 'Machine learning model to predict gold prices using historical data and market indicators, enhancing forecasting accuracy.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      icon: '💰',
      github: 'https://github.com/AnusiyaThirumalai/gold-predict-streamlit',
      date: 'Sep 2025 - Oct 2025'
    },
    {
      title: 'Uber Ride Prediction',
      description: 'Developed ML model to predict Uber ride demand, integrated into Flask web app with HTML/CSS UI, and deployed on cloud platforms for real-time user interaction.',
      tech: ['Python', 'Flask', 'HTML/CSS', 'Scikit-learn', 'Pickle'],
      icon: '🚗',
      github: 'https://github.com/AnusiyaThirumalai/Uber-Ride-Prediction',
      date: 'Sep 2025 - Oct 2025'
    }
  ];

  const experiences = [
    {
      title: 'AI & ML Engineer Intern',
      company: 'Deffo Tech AI',
      location: 'On-site, India',
      date: 'March 2026 – Present',
      description: 'Collecting and preparing large-scale datasets for LLM training and knowledge acquisition. Handled data formats like Parquet, performed data preprocessing, cleaning, and transformation. Improved data quality and consistency to support efficient training and accurate AI model performance.',
      icon: '🤖'
    },
    {
      title: 'Data Scientist Intern',
      company: '8Queens',
      location: 'On-site, India',
      date: 'Sep 2025 – Oct 2025',
      description: 'Applied machine learning algorithms such as Linear Regression, Decision Trees, and Random Forest to build predictive models for real-world datasets. Collaborated with the team to develop and present ML projects, showcasing end-to-end model building, evaluation, and reporting.',
      icon: '📊'
    },
    {
      title: 'AI & Data Analytics Intern',
      company: 'Edunet Foundation',
      location: 'Remote, India',
      date: 'July 2025 – Aug 2025',
      description: 'Contributed to the development of an AI-based smart irrigation system aimed at optimizing water usage in agriculture. Implemented machine learning models to analyze soil moisture, weather data, and crop requirements.',
      icon: '💧'
    }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <div className="App">
      {/* Floating Blobs */}
      <div className="blob" style={{ top: '25%', left: '-10%' }}></div>
      <div className="blob blob-reverse" style={{ bottom: '25%', right: '-10%' }}></div>

      {/* Header */}
      <header>
        <nav>
          <a href="#home" className="logo">AT</a>
          
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>

          <div className="nav-right">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
            <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu open">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Hi, I'm <span className="name">Anusiya T</span>
            </h1>
            <h2>
              <span className="typewriter">
                Web Developer | AI Engineer | Data Enthusiast
              </span>
            </h2>
            <p>
             Computer Science graduate specializing in Data Science with experience in developing scalable web applications and intelligent AI systems. Skilled in machine learning, data science, backend development, and frontend technologies, with hands-on experience building end-to-end AI solutions. Strong problem-solving abilities, collaborative mindset, and a passion for delivering impactful technology solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
              <a href="/Anusiya_T_Resume.pdf" download className="btn btn-outline">
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img src="/PH.jpg" alt="Anusiya T" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="about">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-bg"></div>
              <img src="/PH.jpg" alt="Anusiya T" />
            </div>
            <div className="about-text">
              <h3>Who am I?</h3>
              <p>
                I am a dedicated Computer Science Engineering student with strong skills in web development, 
                data science, and artificial intelligence. Completed my B.E. in Computer Science 
                with Honours at Jeppiaar Engineering College (GPA: 8.78/10), I have gained hands-on 
                experience through multiple internships and innovative projects.
              </p>
              <p>
                My journey includes developing AI-powered systems like TrustScan for phishing detection 
                and SentinelGPT for cybersecurity. I've contributed to smart irrigation systems using ML 
                models and built predictive models for healthcare and transportation. I'm passionate about 
                leveraging technology to solve real-world problems and create impactful solutions.
              </p>
              <p>
                As a national-level hackathon participant and continuous learner, I thrive in collaborative 
                environments and enjoy working on cutting-edge technologies. I'm fluent in Tamil,English,and driven 
                to build inclusive tech solutions for diverse users.
              </p>
              
              <div className="stats">
                <div className="stat-item">
                  <h4>8.78</h4>
                  <p>GPA</p>
                </div>
                <div className="stat-item">
                  <h4>4+</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>3</h4>
                  <p>Internships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        
        <div className="skills-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'language' ? 'active' : ''}`}
            onClick={() => setActiveFilter('language')}
          >
            Languages
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'datascience' ? 'active' : ''}`}
            onClick={() => setActiveFilter('datascience')}
          >
            Data Science
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'database' ? 'active' : ''}`}
            onClick={() => setActiveFilter('database')}
          >
            Database
          </button>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span style={{ fontSize: '5rem' }}>{project.icon}</span>
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-date" style={{ fontSize: '0.85rem', color: 'var(--primary-600)', marginBottom: '0.5rem' }}>
                  {project.date}
                </p>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title">
          My <span>Journey</span>
        </h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-icon">
                  <span>{exp.icon}</span>
                </div>
                <div>
                  <h3>{exp.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                    {exp.company} • {exp.location}
                  </p>
                </div>
              </div>
              <p className="experience-date">{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to contact me for collaboration, project discussions, or opportunities. 
              I'm always excited to contribute and learn.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:anusiyathirumala@gmail.com">anusiyathirumala@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917826875500">+91 7826875500</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Chennai, India</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/AnusiyaThirumalai" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/anusiyathirumalai" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! This is a demo form.');
            }}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" required />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" required />
              </div>
              
              <div className="form-group">
                <label>Message</label>
                <textarea required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <a href="#home" className="logo">AT</a>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <p>© 2026 Anusiya T. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}

export default App;
