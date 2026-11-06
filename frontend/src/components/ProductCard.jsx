import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, title, price, image, tag }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevents the link from triggering
    addToCart({ id, name: title, price });
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image-container">
          <div className="product-image-placeholder">
            {image ? <img src={image} alt={title} /> : "Product Image"}
          </div>
          {tag && <span className="product-tag">{tag}</span>}
        </div>
      </Link>
      
      <div className="product-info">
        <Link to={`/product/${id}`}>
          <h3 className="product-title">{title}</h3>
        </Link>
        <div className="product-footer">
          <span className="product-price">KSh {price}</span>
          <button className="btn-secondary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;