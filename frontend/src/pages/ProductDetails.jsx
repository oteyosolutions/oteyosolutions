import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => {
        const foundProduct = response.data.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <div style={{ textAlign: 'center', marginTop: '100px' }}>Loading...</div>;

  return (
    <div style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
      
      {/* Left Side: Image Placeholder */}
      <div style={{ backgroundColor: '#f3f4f6', borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF' }}>
        Product Image Placeholder
      </div>

      {/* Right Side: Details */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Link to="/store" style={{ color: 'var(--primary-purple)', marginBottom: '20px', fontWeight: '600' }}>← Back to Store</Link>
        
        {product.tag && (
          <span style={{ backgroundColor: 'var(--secondary-blue)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', width: 'fit-content', marginBottom: '16px' }}>
            {product.tag}
          </span>
        )}
        
        <h1 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '16px' }}>{product.name}</h1>
        <p style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '24px' }}>KSh {product.price}</p>
        
        <p style={{ color: 'var(--text-gray)', lineHeight: '1.6', marginBottom: '40px' }}>
          {product.description}
        </p>

        <button 
          className="btn-primary" 
          style={{ width: '100%', padding: '16px', fontSize: '18px' }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;