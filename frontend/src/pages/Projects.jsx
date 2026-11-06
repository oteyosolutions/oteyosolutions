import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { projectsData, categories } from '../data/projectsData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Projects.css';

const Projects = () => {
  useScrollAnimation(); // Activate animations

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [sortOption, setSortOption] = useState('Latest');

  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projectsData];

    if (selectedCategory !== 'All Projects') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.technologies.some(t => t.toLowerCase().includes(term))
      );
    }

    result.sort((a, b) => {
      if (sortOption === 'A-Z') return a.title.localeCompare(b.title);
      if (sortOption === 'Z-A') return b.title.localeCompare(a.title);
      if (sortOption === 'Oldest') return new Date(a.completedAt || 0) - new Date(b.completedAt || 0);
      return new Date(b.completedAt || 0) - new Date(a.completedAt || 0);
    });

    return result;
  }, [searchTerm, selectedCategory, sortOption]);

  const totalProjects = projectsData.length;
  const webApps = projectsData.filter(p => p.category === 'Web Applications' || p.category === 'Websites').length;
  const aiProjects = projectsData.filter(p => p.category === 'AI & Machine Learning').length;

  return (
    <div className="projects-page">
      
      {/* HERO with Premium Background */}
      <section className="projects-hero-premium">
        <div className="projects-hero-bg"></div>
        <div className="projects-hero-overlay"></div>
        
        <div className="floating-shape shape-purple" style={{ top: '10%', left: '-5%' }}></div>
        <div className="floating-shape shape-blue" style={{ top: '60%', right: '-5%' }}></div>

        <div className="container hero-content text-center animate-on-scroll">
          <div className="section-label">MY WORK & PROJECTS</div>
          <h1 className="hero-title">Turning Ideas Into Digital Solutions.</h1>
          <p className="hero-desc">
            Explore a collection of software applications, websites and digital solutions I have worked on. Each project represents an opportunity to solve problems, explore technology and create useful digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#project-grid" className="btn-primary">Explore Projects</a>
            <Link to="/contact" className="btn-secondary">Start a Project</Link>
          </div>
          <div className="tech-labels">
            <span>Web Development</span>
            <span>Software Applications</span>
            <span>AI & ML</span>
            <span>Digital Solutions</span>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="project-stats bg-light animate-on-scroll">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>{totalProjects}</h3>
            <p>Total Projects</p>
          </div>
          <div className="stat-item">
            <h3>{webApps}</h3>
            <p>Web Applications</p>
          </div>
          <div className="stat-item">
            <h3>{aiProjects}</h3>
            <p>AI & ML Projects</p>
          </div>
          <div className="stat-item">
            <h3>{categories.length - 1}</h3>
            <p>Categories</p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      {projectsData.filter(p => p.featured).map(featured => (
        <section className="featured-project animate-on-scroll" key={featured.id}>
          <div className="container two-col">
            <div className="featured-image-wrapper card-hover-lift">
              <div className="image-placeholder">Featured Image</div>
            </div>
            <div className="featured-content">
              <span className="project-status highlight">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>{featured.overview}</p>
              
              <div className="featured-details">
                <div>
                  <h4>Problem</h4>
                  <p>{featured.problem}</p>
                </div>
                <div>
                  <h4>Solution</h4>
                  <p>{featured.solution}</p>
                </div>
              </div>
              
              <div className="tech-tags">
                {featured.technologies.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <Link to={`/projects/${featured.slug}`} className="btn-primary" style={{ marginTop: '20px' }}>
                View Details <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* FILTERS, SEARCH, AND GRID */}
      <section className="project-grid-section bg-light animate-on-scroll" id="project-grid">
        <div className="container">
          
          <div className="grid-header">
            <h2>Selected Projects</h2>
            <p>Browse some of the projects I have developed, explored or worked on.</p>
          </div>

          <div className="project-controls">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search projects by name, technology or category..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="sort-dropdown">
              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="Latest">Latest Projects</option>
                <option value="Oldest">Oldest Projects</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
              </select>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === 'All Projects' && <span>({projectsData.length})</span>}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredAndSortedProjects.length > 0 ? (
              filteredAndSortedProjects.map(project => (
                <Link to={`/projects/${project.slug}`} className="project-card card-hover-lift" key={project.id}>
                  <div className="card-image-placeholder">Screenshot</div>
                  <div className="card-body">
                    <span className="card-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <div className="card-tech">
                      {project.technologies.slice(0, 3).map((t, i) => <span key={i}>{t}</span>)}
                      {project.technologies.length > 3 && <span>+{project.technologies.length - 3}</span>}
                    </div>
                    <div className="card-footer">
                      <span className={`status-dot ${project.status.replace(' ', '-').toLowerCase()}`}></span>
                      {project.status}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="empty-state">
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria.</p>
                <button onClick={() => { setSearchTerm(''); setSelectedCategory('All Projects'); }} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta animate-on-scroll">
        <div className="container text-center">
          <h2>Let's Build Your Next Digital Project.</h2>
          <p>Have an idea for a website, software application or digital product? I can help you plan and develop a solution that fits your needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-purple)' }}>Start a Project</Link>
            <Link to="/contact" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Contact Me</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;