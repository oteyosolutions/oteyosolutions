import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, TrendingUp, Smartphone, ArrowRight, Lock, Calculator, Banknote, QrCode, Sparkles } from 'lucide-react';
import { useApp } from '../context/CartContext';
import '../styles/ToolsHub.css';

const ToolsHub = () => {
  const { toolsConfig } = useApp();
  const activeTools = toolsConfig.filter(tool => tool.isActive);

  const icons = {
    "file-text": <FileText size={32} />,
    "trending-up": <TrendingUp size={32} />,
    "smartphone": <Smartphone size={32} />,
    "calculator": <Calculator size={32} />,
    "banknote": <Banknote size={32} />,
    "qr-code": <QrCode size={32} />,
    "sparkles": <Sparkles size={32} />
  };

  const renderAction = (e, tool) => {
    if (tool.route === "#" || tool.route === "") {
      e.preventDefault();
      alert("This tool is not configured yet. Please check back later.");
      return;
    }
    
    // If it's an external link, open in new tab
    if (tool.route.startsWith('http')) {
      e.preventDefault();
      window.open(tool.route, '_blank');
    }
    // If it's an internal link, let React Router handle it
  };

  return (
    <div className="tools-hub-page">
      <section className="tools-hero">
        <div className="container text-center">
          <div className="section-label">OTEYO FREE TOOLS</div>
          <h1>Free Business Tools to Help You Grow.</h1>
          <p>Access practical tools to manage your finances, create professional documents, and run your business better. No sign-up required.</p>
        </div>
      </section>

      <section className="tools-grid-section container">
        <div className="tools-grid">
          {activeTools.length > 0 ? (
            activeTools.map((tool) => (
              <Link 
                to={tool.route !== "#" ? tool.route : "#"} 
                key={tool.id} 
                className={`tool-card ${tool.isPremium ? 'premium' : ''}`}
                onClick={(e) => renderAction(e, tool)}
              >
                <div className="tool-icon-wrapper">
                  {icons[tool.icon]}
                </div>
                <div className="tool-content">
                  <span className="tool-category">{tool.category}</span>
                  <h3>{tool.name}</h3>
                  <p>{tool.description}</p>
                </div>
                <div className="tool-action">
                  {tool.isPremium ? (
                    <span className="premium-badge"><Lock size={14} /> Premium</span>
                  ) : (
                    <span className="use-tool">Use Tool <ArrowRight size={16} /></span>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="empty-state" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
              <h3>No tools available right now</h3>
              <p>Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToolsHub;