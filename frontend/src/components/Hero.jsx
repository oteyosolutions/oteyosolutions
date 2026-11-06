import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Cpu, Layers, TrendingUp, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-label">
            SOFTWARE DEVELOPMENT & DIGITAL INNOVATION
          </div>
          
          <h1 className="hero-title">
            Building Digital Solutions That Move Businesses Forward.
          </h1>
          
          <p className="hero-description">
            I design and develop modern websites, intelligent applications and digital products that help businesses solve problems, improve efficiency and grow.
          </p>
          
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary btn-large">
              Explore My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/store" className="btn-secondary btn-large">
              Explore Digital Products
            </Link>
          </div>

          <div className="hero-expertise">
            <div className="expertise-item"><Code2 size={18} /> Full-Stack Development</div>
            <div className="expertise-item"><Cpu size={18} /> AI & Machine Learning</div>
            <div className="expertise-item"><Layers size={18} /> Digital Product Development</div>
          </div>
        </div>

        {/* Right Side: Visual Mockup Composition */}
        <div className="hero-visual">
          {/* Decorative Shapes */}
          <div className="deco-circle purple"></div>
          <div className="deco-circle blue"></div>
          <div className="deco-grid"></div>

          {/* Main Dashboard Mockup */}
          <div className="dashboard-mockup animate-float">
            <div className="mockup-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="mockup-title">Analytics Overview</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="side-item active"></div>
                <div className="side-item"></div>
                <div className="side-item"></div>
              </div>
              <div className="mockup-content">
                <div className="stat-cards">
                  <div className="stat-card">
                    <span className="stat-label">Revenue</span>
                    <span className="stat-value">KSh 124k</span>
                    <span className="stat-trend up"><TrendingUp size={12}/> +12%</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Users</span>
                    <span className="stat-value">8,402</span>
                    <span className="stat-trend up"><TrendingUp size={12}/> +8%</span>
                  </div>
                </div>
                <div className="mockup-chart">
                  <div className="chart-bar" style={{ height: '40%' }}></div>
                  <div className="chart-bar" style={{ height: '70%' }}></div>
                  <div className="chart-bar" style={{ height: '50%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Interface Cards */}
          <div className="floating-card card-1 animate-float-delayed">
            <CheckCircle size={20} color="var(--secondary-blue)" />
            <div>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: 0 }}>Deployment</p>
              <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: 0 }}>Success</p>
            </div>
          </div>

          <div className="floating-card card-2 animate-float-fast">
            <div style={{ backgroundColor: '#f3e8ff', padding: '8px', borderRadius: '50%' }}>
              <Code2 size={20} color="var(--primary-purple)" />
            </div>
            <div>
              <p style={{ fontWeight: '700', fontSize: '14px', margin: 0 }}>Clean Code</p>
              <p style={{ fontSize: '12px', color: 'var(--text-gray)', margin: 0 }}>100% TypeSafe</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;