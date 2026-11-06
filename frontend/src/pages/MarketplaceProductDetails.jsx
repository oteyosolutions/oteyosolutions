 
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marketplaceProducts } from '../data/marketplaceProducts';
import { useCart } from '../context/CartContext';
import { CheckCircle, Shield, Download, BookOpen, Cpu, Code } from 'lucide-react';
import '../styles/MarketplaceDetails.css';

const MarketplaceProductDetails = () => {
  const { slug } = useParams();
  const product = marketplaceProducts.find(p => p.slug === slug);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container text-center" style={{ padding: '100px 0' }}>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
        <Link to="/marketplace" className="btn-primary" style={{ marginTop: '20px' }}>Back to Marketplace</Link>
      </div>
    );
  }

  // Render specific technical details based on product type
  const renderTypeSpecifics = () => {
    switch (product.productType) {
      case 'AI Model':
        return (
          <div className="type-specifics">
            <h2>Technical Specifications</h2>
            <ul className="spec-list">
              <li><strong>Architecture:</strong> {product.modelArchitecture}</li>
              <li><strong>Framework:</strong> {product.framework}</li>
              <li><strong>Format:</strong> {product.modelFormat}</li>
              <li><strong>Hardware:</strong> {product.hardwareRequirements}</li>
              <li><strong>Access Method:</strong> {product.accessMethod}</li>
            </ul>
          </div>
        );
      case 'eBook':
        return (
          <div className="type-specifics">
            <h2>Book Details</h2>
            <ul className="spec-list">
              <li><strong>Author:</strong> {product.author}</li>
              <li><strong>Publisher:</strong> {product.publisher}</li>
              <li><strong>Pages:</strong> {product.pageCount}</li>
              <li><strong>Format:</strong> {product.fileFormat}</li>
              <li><strong>Language:</strong> {product.language}</li>
            </ul>
          </div>
        );
      case 'Course':
        return (
          <div className="type-specifics">
            <h2>Course Curriculum</h2>
            <ul className="spec-list">
              <li><strong>Instructor:</strong> {product.instructor}</li>
              <li><strong>Level:</strong> {product.level}</li>
              <li><strong>Duration:</strong> {product.duration}</li>
              <li><strong>Modules:</strong> {product.modules}</li>
              <li><strong>Lessons:</strong> {product.lessons}</li>
              <li><strong>Certificate:</strong> {product.certificateAvailability ? 'Yes' : 'No'}</li>
            </ul>
            <h3 style={{ marginTop: '20px' }}>What You Will Learn</h3>
            <ul className="feature-list">
              {product.learningOutcomes.map((outcome, i) => (
                <li key={i}><CheckCircle size={16} color="var(--primary-purple)"/> {outcome}</li>
              ))}
            </ul>
          </div>
        );
      case 'Software':
      case 'Website Template':
        return (
          <div className="type-specifics">
            <h2>Compatibility & Requirements</h2>
            <ul className="spec-list">
              <li><strong>Platform:</strong> {product.platform || product.framework}</li>
              <li><strong>Version:</strong> {product.version}</li>
              <li><strong>Included Files:</strong> {product.includedFiles ? product.includedFiles.join(', ') : product.features.join(', ')}</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="marketplace-details-page">
      
      <div className="breadcrumbs container">
        <Link to="/marketplace">Marketplace</Link> / <span>{product.name}</span>
      </div>

      {/* HEADER */}
      <section className="md-hero container">
        <div className="md-image-wrapper">
          <div className="image-placeholder">{product.productType} Preview</div>
        </div>
        
        <div className="md-info">
          <span className="md-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="md-short-desc">{product.shortDescription}</p>
          
          <div className="md-price-box">
            <span className="md-price">{product.currency} {product.price.toLocaleString()}</span>
          </div>

          <div className="md-actions">
            <button onClick={() => addToCart(product)} className="btn-primary btn-large">
              Add to Cart
            </button>
            <Link to="/checkout" onClick={() => addToCart(product)} className="btn-secondary btn-large">
              Buy Now
            </Link>
          </div>

          <div className="md-meta">
            <div className="meta-item"><Shield size={16}/> {product.licence} Licence</div>
            <div className="meta-item"><CheckCircle size={16}/> {product.availability}</div>
            <div className="meta-item"><Download size={16}/> {product.deliveryMethod}</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="md-content bg-light">
        <div className="container md-grid">
          
          <div className="md-main">
            <h2>Product Overview</h2>
            <p>{product.fullDescription}</p>

            {renderTypeSpecifics()}

            <h2>Key Features</h2>
            <ul className="feature-list">
              {product.features.map((f, i) => <li key={i}><CheckCircle size={20} color="var(--primary-purple)"/> {f}</li>)}
            </ul>

            <h2>Tags</h2>
            <div className="md-tags">
              {product.tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </div>
          </div>

          <div className="md-sidebar">
            <div className="sidebar-card">
              <h3>Licence Details</h3>
              <p><strong>{product.licence}</strong></p>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '10px' }}>
                Please review the terms of use before purchasing.
              </p>
            </div>
            
            <div className="sidebar-card">
              <h3>Version Information</h3>
              <p>Current Version: <strong>{product.version}</strong></p>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '10px' }}>
                Last Updated: {product.createdAt}
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default MarketplaceProductDetails;