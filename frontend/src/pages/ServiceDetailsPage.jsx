 
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import '../styles/ServiceDetails.css';

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="not-found container text-center">
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link to="/services" className="btn-primary" style={{ marginTop: '20px' }}>Back to Services</Link>
      </div>
    );
  }

  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="service-details-page">
      
      {/* Breadcrumbs */}
      <div className="breadcrumbs container">
        <Link to="/services">Services</Link> / <span>{service.title}</span>
      </div>

      {/* Hero */}
      <section className="sd-hero container">
        <div className="sd-hero-content">
          <h1>{service.title}</h1>
          <p className="sd-lead">{service.description}</p>
          <div className="sd-actions">
            <a href="/services#enquiry" className="btn-primary">Request a Quote</a>
          </div>
        </div>
        <div className="sd-hero-image">
          <div className="image-placeholder">{service.title} Illustration</div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="sd-content bg-light">
        <div className="container sd-grid">
          
          <div className="sd-main">
            <h2>What's Included</h2>
            <ul className="sd-list-grid">
              {service.features.map((f, i) => (
                <li key={i}><CheckCircle size={20} color="var(--primary-purple)" /> {f}</li>
              ))}
            </ul>

            <h2>Key Benefits</h2>
            <ul className="sd-list-grid">
              {service.benefits.map((b, i) => (
                <li key={i}><CheckCircle size={20} color="var(--secondary-blue)" /> {b}</li>
              ))}
            </ul>

            <h2>Example Use Cases</h2>
            <div className="use-cases">
              {service.useCases.map((uc, i) => (
                <div className="use-case-badge" key={i}>{uc}</div>
              ))}
            </div>
          </div>

          <div className="sd-sidebar">
            <div className="sidebar-card">
              <h3>Technologies Used</h3>
              <div className="sd-tech-tags">
                {service.technologies.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>
            <div className="sidebar-card cta-card">
              <h3>Ready to start?</h3>
              <p>Let's discuss how this service can help your business grow.</p>
              <a href="/services#enquiry" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>Contact Me</a>
            </div>
          </div>

        </div>
      </section>

      {/* Related Services */}
      <section className="sd-related container">
        <h2>Explore Other Services</h2>
        <div className="related-services-grid">
          {relatedServices.map(s => (
            <Link to={`/services/${s.slug}`} className="related-service-card" key={s.id}>
              <h3>{s.title}</h3>
              <p>{s.shortDescription}</p>
              <span className="link-text">Learn More →</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailsPage;