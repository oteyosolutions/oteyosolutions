import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Server, Brain, PenTool, Wrench, Search, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { servicesData, packagesData, faqsData } from '../data/servicesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Services.css';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  useScrollAnimation(); // Activate animations

  const icons = {
    code: <Code size={28} />,
    server: <Server size={28} />,
    brain: <Brain size={28} />,
    "pen-tool": <PenTool size={28} />,
    wrench: <Wrench size={28} />,
    search: <Search size={28} />
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="services-page">
      
      {/* HERO with Premium Background */}
      <section className="services-hero-premium">
        <div className="services-hero-bg"></div>
        <div className="services-hero-overlay"></div>
        
        {/* Floating shapes */}
        <div className="floating-shape shape-purple" style={{ top: '10%', left: '-5%' }}></div>
        <div className="floating-shape shape-blue" style={{ top: '60%', right: '-5%' }}></div>

        <div className="container hero-content text-center animate-on-scroll">
          <div className="section-label">WHAT I OFFER</div>
          <h1 className="hero-title">Digital Solutions Designed Around Your Needs.</h1>
          <p className="hero-desc">
            From modern websites and custom software to AI-powered applications and creative digital designs, I help businesses and individuals turn ideas into practical digital solutions.
          </p>
          <div className="hero-actions">
            <a href="#enquiry" className="btn-primary">Start a Project</a>
            <a href="#services-grid" className="btn-secondary">Explore Services</a>
          </div>
          <div className="tech-labels">
            <span>Website Development</span>
            <span>Custom Software</span>
            <span>AI & Automation</span>
            <span>Digital Design</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro bg-light animate-on-scroll">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>How I Can Help You</h2>
            <p>Every business has different needs. I provide digital development services designed to help businesses establish their online presence, improve operations and make better use of technology.</p>
          </div>
          <div className="intro-grid">
            <div className="intro-card card-hover-lift">
              <h3>Build Your Online Presence</h3>
              <p>Professional websites and landing pages that help businesses present their services and connect with customers.</p>
            </div>
            <div className="intro-card card-hover-lift">
              <h3>Improve Your Operations</h3>
              <p>Custom software systems that help organize information, manage daily activities and reduce repetitive work.</p>
            </div>
            <div className="intro-card card-hover-lift">
              <h3>Create Better Experiences</h3>
              <p>Modern applications, AI solutions and creative designs that make technology more useful and accessible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="services-grid-section animate-on-scroll" id="services-grid">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>My Services</h2>
            <p>Explore the services available through OteyoSolutions.</p>
          </div>
          <div className="services-grid">
            {servicesData.map(service => (
              <div className="service-card card-hover-lift" key={service.id}>
                <div className="service-icon">{icons[service.icon]}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <ul className="service-features">
                  {service.features.slice(0, 3).map((f, i) => <li key={i}><CheckCircle size={14}/> {f}</li>)}
                </ul>
                <div className="service-actions">
                  <Link to={`/services/${service.slug}`} className="btn-text">Learn More <ArrowRight size={16}/></Link>
                  <a href="#enquiry" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>Get Quote</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us bg-light animate-on-scroll">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>Why Work With OteyoSolutions?</h2>
            <p>I believe good digital solutions begin with understanding the problem and choosing the right approach.</p>
          </div>
          <div className="why-grid">
            <div className="why-card card-hover-lift"><h4>Direct Communication</h4><p>You communicate directly with the developer handling your project.</p></div>
            <div className="why-card card-hover-lift"><h4>Practical Solutions</h4><p>Focus is on solving actual problems rather than adding unnecessary features.</p></div>
            <div className="why-card card-hover-lift"><h4>Modern Technologies</h4><p>I use suitable modern technologies to build websites and applications.</p></div>
            <div className="why-card card-hover-lift"><h4>User-Focused Design</h4><p>I pay attention to usability, responsiveness and how people interact with the product.</p></div>
            <div className="why-card card-hover-lift"><h4>Clear Process</h4><p>I explain the project requirements, development stages and agreed deliverables.</p></div>
            <div className="why-card card-hover-lift"><h4>Ongoing Support</h4><p>Maintenance and technical support can be arranged depending on the project.</p></div>
          </div>
        </div>
      </section>

      {/* PRICING PACKAGES */}
      <section className="pricing-section animate-on-scroll">
        <div className="container">
          <div className="section-title-wrapper">
            <h2>Flexible Solutions for Different Needs</h2>
            <p>Choose a starting point, or request a custom quote for your specific project.</p>
          </div>
          <div className="pricing-grid">
            {packagesData.filter(p => p.active).map((pkg, idx) => (
              <div className={`pricing-card card-hover-lift ${pkg.featured ? 'featured' : ''}`} key={idx}>
                {pkg.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{pkg.name}</h3>
                <div className="price">
                  {pkg.price ? `${pkg.currency} ${pkg.price}` : "Request a Quote"}
                </div>
                <p className="pkg-desc">{pkg.description}</p>
                <ul className="pkg-features">
                  {pkg.features.map((f, i) => <li key={i}><CheckCircle size={16} color="var(--primary-purple)"/> {f}</li>)}
                </ul>
                <div className="pkg-delivery">Est. Delivery: {pkg.delivery}</div>
                <a href="#enquiry" className={`btn-primary ${pkg.featured ? '' : 'btn-outline'}`} style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  {pkg.price ? "Get Started" : "Request Quote"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="faq-section bg-light animate-on-scroll">
        <div className="container max-w-800">
          <div className="section-title-wrapper">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqsData.map((faq, idx) => (
              <div className={`faq-item ${openFaq === idx ? 'open' : ''}`} key={idx}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {faq.q}
                  <ChevronDown size={20} className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="enquiry-section animate-on-scroll" id="enquiry">
        <div className="container two-col">
          <div className="enquiry-content">
            <h2>Tell Me About Your Project</h2>
            <p>Have a project in mind? Share a few details and I will review your requirements and get back to you.</p>
            <div className="contact-options">
              <h4>Prefer to talk directly?</h4>
              <a href="mailto:oteyikelvin@gmail.com" className="contact-link">Email Me</a>
              <a href="https://wa.me/254714328866" target="_blank" rel="noreferrer" className="contact-link" style={{ color: '#25D366' }}>WhatsApp Me</a>
            </div>
          </div>
          
          <div className="enquiry-form-wrapper">
            {formStatus === 'success' ? (
              <div className="form-success text-center">
                <CheckCircle size={48} color="#10b981" style={{ margin: '0 auto 20px auto' }} />
                <h3>Enquiry Sent Successfully!</h3>
                <p>Thank you for reaching out. I will review your project details and get back to you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="btn-secondary" style={{ marginTop: '20px' }}>Send Another Enquiry</button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="enquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="0712 345 678" />
                  </div>
                  <div className="form-group">
                    <label>Business Name</label>
                    <input type="text" placeholder="Your Company Ltd" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Required *</label>
                    <select required>
                      <option value="">Select a service...</option>
                      {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Budget</label>
                    <select>
                      <option value="">Select budget...</option>
                      <option>Under KSh 5,000</option>
                      <option>KSh 5,000 - 15,000</option>
                      <option>KSh 15,000 - 30,000</option>
                      <option>KSh 30,000 - 50,000</option>
                      <option>Above KSh 50,000</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Project Description *</label>
                  <textarea rows="4" required placeholder="Please describe your project, goals, and any specific features you need..."></textarea>
                </div>
                <div className="form-group checkbox-group">
                  <input type="checkbox" required id="consent" />
                  <label htmlFor="consent">I consent to OteyoSolutions using this information to respond to my enquiry.</label>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }} disabled={formStatus === 'loading'}>
                  {formStatus === 'loading' ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;