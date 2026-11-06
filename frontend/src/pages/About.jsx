import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Brain, PenTool, Wrench, Search, Target, Eye, CheckCircle } from 'lucide-react';
import * as Data from '../data/aboutData';
import { skillsData, technologiesData } from '../data/skillsData';
import { projectsData } from '../data/aboutProjects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/About.css';

const SectionTitle = ({ label, title, description }) => (
  <div className="section-title-wrapper">
    {label && <div className="section-label">{label}</div>}
    <h2 className="section-title">{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>
);

const About = () => {
  useScrollAnimation(); // Activate scroll animations

  const serviceIcons = [<Code />, <Server />, <Brain />, <PenTool />, <Wrench />, <Search />];

  return (
    <div className="about-page">
      
      {/* SECTION 1: HERO with Background Image */}
      <section className="about-hero-premium">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        
        {/* Floating shapes */}
        <div className="floating-shape shape-purple" style={{ top: '10%', left: '-5%' }}></div>
        <div className="floating-shape shape-blue" style={{ top: '60%', right: '-5%' }}></div>

        <div className="container about-hero-content">
          <div className="hero-content animate-on-scroll">
            <div className="section-label">{Data.aboutHeroData.label}</div>
            <h1 className="about-main-title">{Data.aboutHeroData.title}</h1>
            <p className="about-hero-desc">{Data.aboutHeroData.description}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary">Explore My Work</Link>
              <Link to="/contact" className="btn-secondary">Contact Me</Link>
            </div>
            <div className="tech-labels">
              <span>Web Development</span>
              <span>Software Solutions</span>
              <span>AI</span>
              <span>Digital Products</span>
            </div>
          </div>
          <div className="hero-visual-about animate-on-scroll">
             <div className="abstract-shape shape-1"></div>
             <div className="abstract-shape shape-2"></div>
             <div className="tech-graphic">
                <Code size={64} color="var(--primary-purple)" opacity={0.2} />
                <Server size={48} color="var(--secondary-blue)" opacity={0.3} style={{ position: 'absolute', bottom: '20%', right: '10%' }} />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="about-intro bg-light animate-on-scroll">
        <div className="container">
          <SectionTitle title={Data.introData.title} description={Data.introData.description} />
          <div className="intro-cards-grid">
            {Data.introData.cards.map((card, idx) => (
              <div className="intro-card card-hover-lift" key={idx}>
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, i) => <li key={i}><CheckCircle size={16} color="var(--primary-purple)"/> {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE DEVELOPER */}
      <section className="about-developer animate-on-scroll">
        <div className="container two-col">
          <div className="dev-image-wrapper">
            <div className="image-bg-deco"></div>
            <div className="image-placeholder">
              <span>Your Photo Here</span>
            </div>
            <div className="dev-label">{Data.developerData.label}</div>
          </div>
          <div className="dev-content">
            <h2>{Data.developerData.title}</h2>
            <p className="preserve-lines">{Data.developerData.description}</p>
            <h4 style={{ marginTop: '24px', marginBottom: '16px' }}>Areas I work in:</h4>
            <ul className="dev-areas-list">
              {Data.developerData.areas.map((area, i) => <li key={i}>{area}</li>)}
            </ul>
            <Link to="/projects" className="btn-primary" style={{ display: 'inline-block', marginTop: '24px' }}>View My Projects</Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: MY STORY */}
      <section className="about-story bg-light animate-on-scroll">
        <div className="container">
          <SectionTitle title={Data.storyData.title} />
          <div className="story-timeline">
            {Data.storyData.paragraphs.map((para, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot"></div>
                <p>{para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION & VISION */}
      <section className="about-mission animate-on-scroll">
        <div className="container two-col">
          <div className="mv-card card-hover-lift">
            <Target size={40} color="var(--primary-purple)" />
            <h3>My Mission</h3>
            <p>{Data.missionVisionData.mission}</p>
          </div>
          <div className="mv-card card-hover-lift">
            <Eye size={40} color="var(--secondary-blue)" />
            <h3>My Vision</h3>
            <p>{Data.missionVisionData.vision}</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TECHNICAL EXPERTISE */}
      <section className="about-skills bg-light animate-on-scroll">
        <div className="container">
          <SectionTitle title="Skills and Technical Expertise" />
          <div className="skills-grid">
            {skillsData.map((group, idx) => (
              <div className="skill-group card-hover-lift" key={idx}>
                <h4>{group.category}</h4>
                <div className="skill-tags">
                  {group.skills.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT I DO */}
      <section className="about-services animate-on-scroll">
        <div className="container">
          <SectionTitle title="What I Can Help You Build" />
          <div className="services-grid">
            {Data.servicesData.map((service, idx) => (
              <div className="service-card card-hover-lift" key={idx}>
                <div className="service-icon">{serviceIcons[idx]}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="learn-more">Learn More <ArrowRight size={16}/></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: DEVELOPMENT APPROACH */}
      <section className="about-process bg-light animate-on-scroll">
        <div className="container">
          <SectionTitle title="How I Approach Every Project" />
          <div className="process-timeline">
            {Data.processData.map((step, idx) => (
              <div className="process-step" key={idx}>
                <div className="step-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TECHNOLOGIES */}
      <section className="about-technologies animate-on-scroll">
        <div className="container text-center">
          <SectionTitle title="Tools Behind My Work" />
          <div className="tech-badges">
            {technologiesData.map((tech, idx) => (
              <span className="tech-badge card-hover-lift" key={idx}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: PROJECT EXPERIENCE */}
      <section className="about-projects bg-light animate-on-scroll">
        <div className="container">
          <SectionTitle 
            title="Learning, Building and Improving" 
            description="I believe the best way to improve as a developer is by building real projects. I continue exploring different ideas and developing applications that solve practical problems." 
          />
          <div className="projects-preview-grid">
            {projectsData.map((proj, idx) => (
              <div className="preview-project-card card-hover-lift" key={idx}>
                <div className="project-image-placeholder">Project Image</div>
                <div className="project-info">
                  <span className="project-status">{proj.status}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-tech-tags">
                    {proj.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: CORE VALUES */}
      <section className="about-values animate-on-scroll">
        <div className="container">
          <SectionTitle title="What Guides My Work" />
          <div className="values-grid">
            {Data.valuesData.map((val, idx) => (
              <div className="value-card card-hover-lift" key={idx}>
                <div className="value-dot"></div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12: WHY CHOOSE US */}
      <section className="about-why bg-light animate-on-scroll">
        <div className="container two-col align-center">
          <div className="why-content">
            <SectionTitle title="Why Choose OteyoSolutions?" />
            <ul className="why-list">
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Direct communication with the developer.</li>
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Solutions based on your actual needs.</li>
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Modern technologies.</li>
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Clean and responsive interfaces.</li>
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Focus on functionality and usability.</li>
              <li><CheckCircle size={20} color="var(--primary-purple)"/> Support and maintenance options.</li>
            </ul>
          </div>
          <div className="why-visual">
             <div className="abstract-circle"></div>
             <Code size={80} color="var(--secondary-blue)" opacity={0.1} />
          </div>
        </div>
      </section>

      {/* SECTION 13: FINAL CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>Have an Idea? Let's Build Something Useful.</h2>
          <p>Whether you need a website, custom software or help improving an existing digital product, I would be happy to discuss your project.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-purple)' }}>Start a Project</Link>
            <Link to="/contact" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Contact Me</Link>
            <a href="https://wa.me/254714328866" target="_blank" rel="noreferrer" className="btn-secondary" style={{ borderColor: '#25D366', color: '#25D366' }}>WhatsApp Me</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;