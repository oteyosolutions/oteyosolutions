import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { categoriesData } from '../data/productsData';
import { useApp } from '../context/CartContext';
import '../styles/Store.css';

const Store = () => {
  const { addToCart, productsConfig, isLoading } = useApp();
  
  // State for Search, Filter, Sort
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');
  const [priceFilter, setPriceFilter] = useState('All');

  // Combined Logic - Now reading from productsConfig (Admin Controlled)
  const filteredProducts = useMemo(() => {
    // Only show products that are published AND active (toggled on in admin)
    let result = productsConfig.filter(p => p.isActive !== false);

    // Category Filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search Filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(term)))
      );
    }

    // Price Filter
    if (priceFilter === 'Under500') result = result.filter(p => p.price < 500);
    if (priceFilter === '500-1000') result = result.filter(p => p.price >= 500 && p.price <= 1000);
    if (priceFilter === '1000-2500') result = result.filter(p => p.price > 1000 && p.price <= 2500);
    if (priceFilter === 'Above2500') result = result.filter(p => p.price > 2500);

    // Sorting
    result.sort((a, b) => {
      if (sortOption === 'PriceLow') return a.price - b.price;
      if (sortOption === 'PriceHigh') return b.price - a.price;
      if (sortOption === 'A-Z') return a.name.localeCompare(b.name);
      if (sortOption === 'Z-A') return b.name.localeCompare(a.name);
      if (sortOption === 'Oldest') return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });

    return result;
  }, [searchTerm, selectedCategory, sortOption, priceFilter, productsConfig]);

  return (
    <div className="store-page">
      
      {/* HERO */}
      <section className="store-hero">
        <div className="container">
          <div className="section-label">OTEYOSOLUTIONS DIGITAL STORE</div>
          <h1 className="hero-title">Discover Digital Products Built to Make Work Easier.</h1>
          <p className="hero-desc">
            Explore useful software products, website templates and digital resources designed to help businesses, developers and individuals work smarter.
          </p>
          <div className="hero-actions">
            <a href="#all-products" className="btn-primary">Explore Products</a>
            <a href="#categories" className="btn-secondary">Browse Categories</a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="store-categories bg-light" id="categories">
        <div className="container">
          <h2 className="section-title text-center">Explore Product Categories</h2>
          <div className="category-grid">
            {categoriesData.map((cat, idx) => (
              <div className="category-card" key={idx} onClick={() => { setSelectedCategory(cat.name); document.getElementById('all-products').scrollIntoView({behavior: 'smooth'}); }}>
                <h3>{cat.name}</h3>
                <p>{cat.count} Products</p>
                <span className="link-text">Explore <ArrowRight size={16}/></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="all-products" id="all-products">
        <div className="container">
          
          {/* CONTROLS */}
          <div className="store-controls">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for software, templates and digital products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filters">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="All">All Categories</option>
                {categoriesData.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </select>

              <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
                <option value="All">All Prices</option>
                <option value="Under500">Under KSh 500</option>
                <option value="500-1000">KSh 500 - 1,000</option>
                <option value="1000-2500">KSh 1,000 - 2,500</option>
                <option value="Above2500">Above KSh 2,500</option>
              </select>

              <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
                <option value="PriceLow">Price: Low to High</option>
                <option value="PriceHigh">Price: High to Low</option>
                <option value="A-Z">Name: A-Z</option>
                <option value="Z-A">Name: Z-A</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className="products-grid">
            {isLoading ? (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
                <h3>Loading products from server...</h3>
              </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="store-product-card" key={product.id}>
                  <div className="product-image-wrapper">
                    {product.featured && <span className="featured-badge">Featured</span>}
                    <div className="image-placeholder">Product Image</div>
                  </div>
                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="product-desc">{product.shortDescription}</p>
                    <div className="product-price-row">
                      <span className="price">{product.currency || 'KSh'} {product.price.toLocaleString()}</span>
                      {product.originalPrice && <span className="old-price">{product.currency || 'KSh'} {product.originalPrice.toLocaleString()}</span>}
                    </div>
                    <div className="product-actions">
                      <Link to={`/store/${product.slug || '#'}`} className="btn-secondary" style={{ flex: 1, textAlign: 'center' }}>View Details</Link>
                      <button 
                        onClick={() => addToCart(product)} 
                        className="btn-primary" 
                        style={{ flex: 1 }}
                        disabled={product.availability !== "Available" && product.availability !== undefined}
                      >
                        {product.availability === "Available" || !product.availability ? "Add to Cart" : product.availability}
                      </button>
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

export default Store;