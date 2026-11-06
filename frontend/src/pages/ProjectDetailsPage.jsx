 
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, CheckCircle, ExternalLink, Code, ArrowRight } from 'lucide-react';
import '../styles/ProjectDetails.css';

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  // 404 State
  if (!project) {
    return (
      <div className="not-found container text-center">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist or has been moved.</p>
        <Link to="/projects" className="btn-primary" style={{ marginTop: '20px' }}>Back to Portfolio</Link>
      </div>
    );
  }

  // Related projects (same category, excluding current)
  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="project-details-page">
      
      {/* Breadcrumbs */}
      <div className="breadcrumbs container">
        <Link to="/projects">Projects</Link> / <span>{project.title}</span>
      </div>

      {/* Header */}
      <section className="pd-header container">
        <div className="pd-header-content">
          <span className="pd-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="pd-short-desc">{project.shortDescription}</p>
          <div className="pd-meta">
            <span className="pd-status">Status: <strong>{project.status}</strong></span>
            <div className="pd-tech-tags">
              {project.technologies.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>
          <div className="pd-actions">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">Live Demo <ExternalLink size={16}/></a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">Source Code <Code size={16}/></a>}
          </div>
        </div>
        <div className="pd-hero-image">
           <div className="image-placeholder">Main Screenshot</div>
        </div>
      </section>

      {/* Case Study / Details */}
      <section className="pd-content bg-light">
        <div className="container pd-two-col">
          
          <div className="pd-main">
            <h2>Project Overview</h2>
            <p>{project.overview}</p>

            <h2>The Problem</h2>
            <p>{project.problem}</p>

            <h2>The Solution</h2>
            <p>{project.solution}</p>

            {project.features && project.features.length > 0 && (
              <>
                <h2>Key Features</h2>
                <ul className="pd-features-list">
                  {project.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={20} color="var(--primary-purple)" /> {feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="pd-sidebar">
            <div className="sidebar-card">
              <h3>Project Details</h3>
              <ul>
                <li><strong>Category:</strong> {project.category}</li>
                <li><strong>Status:</strong> {project.status}</li>
                <li><strong>Completed:</strong> {project.completedAt || 'N/A'}</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h3>Technologies</h3>
              <div className="pd-tech-tags">
                {project.technologies.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="pd-related container">
          <h2>Related Projects</h2>
          <div className="related-grid">
            {relatedProjects.map(p => (
              <Link to={`/projects/${p.slug}`} className="related-card" key={p.id}>
                <div className="related-image-placeholder"></div>
                <h3>{p.title}</h3>
                <span>{p.category}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pd-cta text-center">
        <div className="container">
          <h2>Have a Similar Project in Mind?</h2>
          <p>Let's discuss how I can help you build a solution for your idea or business.</p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-purple)' }}>Start a Project</Link>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetailsPage;