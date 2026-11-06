import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { marketplaceCategories } from '../data/marketplaceProducts';
import { useApp } from '../context/CartContext';
import '../styles/Marketplace.css';

const Marketplace = () => {
  const { addToCart, productsConfig, isLoading } = useApp();
  
  // State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');
  const [priceFilter, setPriceFilter] = useState('All');

  // Filtering & Sorting Logic - Now reading from productsConfig (Admin Controlled)
  const filteredProducts = useMemo(() => {
    // Show only marketplace items (AI, Books, Courses, Templates, Downloads) that are active
    let result = productsConfig.filter(p => 
      p.isActive !== false && 
      p.productType !== 'Software' && 
      p.category !== 'Software Products'
    );

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(term)))
      );
    }

    if (priceFilter === 'Under1000') result = result.filter(p => p.price < 1000);
    if (priceFilter === '1000-5000') result = result.filter(p => p.price >= 1000 && p.price <= 5000);
    if (priceFilter === 'Above5000') result = result.filter(p => p.price > 5000);

    result.sort((a, b) => {
      if (sortOption === 'PriceLow') return a.price - b.price;
      if (sortOption === 'PriceHigh') return b.price - a.price;
      if (sortOption === 'A-Z') return a.name.localeCompare(b.name);
      if (sortOption === 'Z-A') return b.name.localeCompare(a.name);
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });

    return result;
  }, [searchTerm, selectedCategory, sortOption, priceFilter, productsConfig]);

  return (
    <div className="marketplace-page">
      
      {/* HERO */}
      <section className="marketplace-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Discover Digital Products That Help You Build, Learn and Grow.</h1>
            <p>Explore software, AI tools, digital books, online courses, templates and practical resources designed to help individuals and businesses achieve more.</p>
            
            <div className="hero-search">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for AI models, books, templates..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="marketplace-categories bg-light">
        <div className="container">
          <h2 className="section-title text-center">Browse Categories</h2>
          <div className="category-grid">
            {marketplaceCategories.map((cat, idx) => (
              <div 
                className={`category-card ${selectedCategory === cat.name ? 'active' : ''}`} 
                key={idx}
                onClick={() => { setSelectedCategory(cat.name); document.getElementById('product-grid').scrollIntoView({behavior: 'smooth'}); }}
              >
                <h3>{cat.name}</h3>
                <p>{cat.count} Products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="marketplace-products" id="product-grid">
        <div className="container">
          
          <div className="controls">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Filter within results..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filters">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="All">All Categories</option>
                {marketplaceCategories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>

              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                <option value="All">All Prices</option>
                <option value="Under1000">Under KSh 1,000</option>
                <option value="1000-5000">KSh 1,000 - 5,000</option>
                <option value="Above5000">Above KSh 5,000</option>
              </select>

              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="Newest">Newest First</option>
                <option value="PriceLow">Price: Low to High</option>
                <option value="PriceHigh">Price: High to Low</option>
                <option value="A-Z">Name: A-Z</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {isLoading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
                <h3>Loading marketplace...</h3>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="market-product-card" key={product.id}>
                  <div className="card-image-wrapper">
                    {product.isFeatured && <span className="featured-tag">Featured</span>}
                    <div className="image-placeholder">{product.productType || 'Digital Product'}</div>
                  </div>
                  <div className="card-content">
                    <span className="category-tag">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="desc">{product.shortDescription}</p>
                    <div className="price-row">
                      <span className="price">{product.currency || 'KSh'} {product.price.toLocaleString()}</span>
                    </div>
                    <div className="card-actions">
                      <Link to={`/marketplace/${product.slug || '#'}`} className="btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '10px' }}>Details</Link>
                      <button onClick={() => addToCart(product)} className="btn-primary" style={{ flex: 1, padding: '10px' }}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h3>No products found</h3>
                <p>Try adjusting your search or filters.</p>
                <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setPriceFilter('All'); }} className="btn-secondary">Clear Filters</button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Marketplace;