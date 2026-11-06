import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Briefcase } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>
      
      <div className="footer-content container">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              Oteyo<span>Solutions</span>
            </Link>
            <p className="footer-desc">
              One Platform. Many Digital Solutions. We help businesses and individuals build, learn, and grow through modern technology and digital products.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Globe size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><MessageCircle size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Share2 size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/store">Store</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services/website-development">Website Development</Link></li>
              <li><Link to="/services/software-development">Custom Software</Link></li>
              <li><Link to="/services/ai-automation">AI & Automation</Link></li>
              <li><Link to="/services/graphic-design">Graphic Design</Link></li>
              <li><Link to="/services/seo-digital-support">SEO & Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li><MapPin size={18} /> Nairobi, Kenya</li>
              <li><Mail size={18} /> oteyikelvin@gmail.com</li>
              <li><Phone size={18} /> +254 714 328 866</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OteyoSolutions. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;