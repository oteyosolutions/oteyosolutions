 
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { useCart } from '../context/CartContext';
import { CheckCircle, Shield, FileText, Settings } from 'lucide-react';
import '../styles/ProductDetails.css';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);
  const { addToCart } = useCart();

  if (!product) {
    return <div className="not-found container text-center"><h1>Product Not Found</h1><Link to="/store" className="btn-primary" style={{marginTop:'20px'}}>Back to Store</Link></div>;
  }

  const relatedProducts = productsData.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="product-details-page">
      
      <div className="breadcrumbs container">
        <Link to="/store">Store</Link> / <span>{product.name}</span>
      </div>

      {/* HEADER */}
      <section className="pd-hero container">
        <div className="pd-image">
          <div className="image-placeholder">Product Screenshot</div>
        </div>
        <div className="pd-info">
          <span className="pd-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="pd-short-desc">{product.shortDescription}</p>
          
          <div className="pd-price-box">
            <span className="pd-price">{product.currency} {product.price.toLocaleString()}</span>
            {product.originalPrice && <span className="pd-old-price">{product.currency} {product.originalPrice.toLocaleString()}</span>}
          </div>

          <div className="pd-actions">
            <button onClick={() => addToCart(product)} className="btn-primary btn-large" disabled={product.availability !== "Available"}>
              {product.availability === "Available" ? "Add to Cart" : product.availability}
            </button>
            <Link to="/checkout" onClick={() => addToCart(product)} className={`btn-secondary btn-large ${product.availability !== "Available" ? 'disabled' : ''}`}>Buy Now</Link>
          </div>

          <div className="pd-meta">
            <div className="meta-item"><Shield size={16}/> {product.licenceType}</div>
            <div className="meta-item"><CheckCircle size={16}/> {product.availability}</div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pd-content bg-light">
        <div className="container pd-grid">
          
          <div className="pd-main">
            <h2>Product Overview</h2>
            <p>{product.fullDescription}</p>

            <h2>Key Features</h2>
            <ul className="feature-list">
              {product.features.map((f, i) => <li key={i}><CheckCircle size={20} color="var(--primary-purple)"/> {f}</li>)}
            </ul>

            <h2>Requirements</h2>
            <ul className="req-list">
              {product.requirements.map((r, i) => <li key={i}><Settings size={16}/> {r}</li>)}
            </ul>

            <h2>What's Included</h2>
            <ul className="req-list">
              {product.includedFiles.map((file, i) => <li key={i}><FileText size={16}/> {file}</li>)}
            </ul>
          </div>

          <div className="pd-sidebar">
            <div className="sidebar-card">
              <h3>Licence</h3>
              <p><strong>{product.licenceType}</strong></p>
              <p style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Please review the terms of use before purchasing.</p>
            </div>
            <div className="sidebar-card">
              <h3>Support</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{product.supportPolicy}</p>
            </div>
          </div>

        </div>
      </section>

      {/* RELATED */}
      {relatedProducts.length > 0 && (
        <section className="pd-related container">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(p => (
              <Link to={`/store/${p.slug}`} key={p.id} className="related-card">
                <div className="related-image-placeholder"></div>
                <h3>{p.name}</h3>
                <span>{p.currency} {p.price}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ProductDetailsPage;