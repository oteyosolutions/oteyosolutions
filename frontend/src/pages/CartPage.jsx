 
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowLeft } from 'lucide-react';
import '../styles/Cart.css';

const CartPage = () => {
  const { cart, removeFromCart, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart container text-center">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any digital products yet.</p>
        <Link to="/store" className="btn-primary" style={{ marginTop: '20px' }}>Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h1>Your Shopping Cart</h1>
      
      <div className="cart-grid">
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">Image</div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span className="cart-item-price">{item.currency} {item.price.toLocaleString()}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn"><Trash2 size={20} /></button>
            </div>
          ))}
          <Link to="/store" className="continue-link"><ArrowLeft size={16}/> Continue Shopping</Link>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>KSh {cartTotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Tax (Included)</span>
            <span>KSh 0</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>KSh {cartTotal.toLocaleString()}</span>
          </div>
          <Link to="/checkout" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%', padding: '16px', marginTop: '20px' }}>
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;