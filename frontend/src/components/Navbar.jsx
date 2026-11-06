import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();
  
  // Calculate total items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="logo-text">Oteyo<span className="highlight">Solutions</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
           <li><Link to="/tools">Free Tools</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          <Link to="/contact" className="btn-primary hire-btn desktop-only">
            Hire Me
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="icon-btn mobile-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
            <li><Link to="/projects" onClick={toggleMobileMenu}>Projects</Link></li>
            <li><Link to="/services" onClick={toggleMobileMenu}>Services</Link></li>
            <li><Link to="/marketplace" onClick={toggleMobileMenu}>Marketplace</Link></li>
            <li><Link to="/store" onClick={toggleMobileMenu}>Store</Link></li>
            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
            <li><Link to="/cart" onClick={toggleMobileMenu}>🛒 Cart</Link></li>
            <li><Link to="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '10px' }} onClick={toggleMobileMenu}>Hire Me</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;