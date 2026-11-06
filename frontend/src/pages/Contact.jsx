 
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Contact.css';

const Contact = () => {
  useScrollAnimation();
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="contact-page">
      
      {/* HERO with Background */}
      <section className="contact-hero-premium">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>
        
        <div className="floating-shape shape-purple" style={{ top: '15%', left: '-5%' }}></div>
        <div className="floating-shape shape-blue" style={{ top: '60%', right: '-5%' }}></div>

        <div className="container hero-content text-center animate-on-scroll">
          <div className="section-label">GET IN TOUCH</div>
          <h1 className="hero-title">Let's Discuss Your Next Project.</h1>
          <p className="hero-desc">
            Have a question, an idea, or a project in mind? I am always open to discussing new opportunities, creative ideas, or ways to be part of your vision.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section animate-on-scroll">
        <div className="container contact-grid">
          
          {/* Left: Info */}
          <div className="contact-info-col">
            <h2>Contact Information</h2>
            <p>Reach out directly through any of these channels. I usually respond within 24 hours.</p>
            
            <div className="info-cards">
              <div className="info-card card-hover-lift">
                <Mail size={24} color="var(--primary-purple)" />
                <div>
                  <h4>Email Me</h4>
                  <p>oteyikelvin@gmail.com</p>
                </div>
              </div>
              <div className="info-card card-hover-lift">
                <Phone size={24} color="var(--primary-purple)" />
                <div>
                  <h4>Call / WhatsApp</h4>
                  <p>+254 714 328 866</p>
                </div>
              </div>
              <div className="info-card card-hover-lift">
                <MapPin size={24} color="var(--primary-purple)" />
                <div>
                  <h4>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="social-contact">
              <a href="https://wa.me/254714328866" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', width: '100%', justifyContent: 'center', marginTop: '20px' }}>
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper">
              {formStatus === 'success' ? (
                <div className="form-success text-center">
                  <CheckCircle size={48} color="#10b981" style={{ margin: '0 auto 20px auto' }} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn-secondary" style={{ marginTop: '20px' }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Send a Message</h3>
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" required placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input type="text" required placeholder="Project Inquiry" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea rows="5" required placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }} disabled={formStatus === 'loading'}>
                    {formStatus === 'loading' ? 'Sending...' : <><Send size={18}/> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;