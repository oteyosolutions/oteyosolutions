import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/Home.css'; // <-- We will create this

const Home = () => {
  const [products, setProducts] = useState([]);
  useScrollAnimation(); 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="home-wrapper">
      
      {/* Premium Background Image with Overlay */}
      <div className="home-background">
        <div className="home-bg-image"></div>
        <div className="home-bg-overlay"></div>
        {/* Floating decorative shapes */}
        <div className="floating-shape shape-purple" style={{ top: '15%', left: '-5%' }}></div>
        <div className="floating-shape shape-blue" style={{ top: '60%', right: '-5%' }}></div>
      </div>

      {/* Hero Section sits on top of the background */}
      <div className="home-content">
        <Hero />
        
        <section className="featured-section animate-on-scroll" style={{ background: 'white', borderRadius: '40px', padding: '60px 40px', marginTop: '60px' }}>
          <div className="section-header">
            <h2 className="section-title">Digital Products</h2>
            <p className="section-subtitle">Premium templates and software to accelerate your business.</p>
          </div>
          
          <div className="products-grid">
            {products.length > 0 ? (
              products.slice(0, 3).map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  title={product.name} 
                  price={product.price} 
                  tag={product.category} 
                />
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Loading products...</p>
            )}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/store" className="btn-primary">View All Products</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;