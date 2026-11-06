import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';

const CheckoutPage = () => {
  const { cart, cartTotal, clearCart } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateOrderText = () => {
    let itemsText = cart.map(item => `- ${item.quantity}x ${item.name} (KSh ${item.price.toLocaleString()})`).join('%0D%0A');
    let totalText = `Total: KSh ${cartTotal.toLocaleString()}`;
    
    let text = `Hello OteyoSolutions,%0D%0A%0D%0AI would like to order the following digital products:%0D%0A%0D%0A${itemsText}%0D%0A%0D%0A${totalText}%0D%0A%0D%0A--- Customer Details ---%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0APlease send me the M-Pesa payment details so I can complete this purchase.`;
    return text;
  };

  const handleEmailOrder = (e) => {
    e.preventDefault();
    if (!agreed) return alert("Please agree to the Terms and Conditions.");
    
    const subject = `New Order Request: ${formData.name}`;
    const body = generateOrderText();
    
    window.location.href = `mailto:oteyikelvin@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    clearCart();
  };

  const handleWhatsAppOrder = () => {
    if (!agreed) return alert("Please agree to the Terms and Conditions first.");
    if (!formData.name || !formData.email) return alert("Please fill in your name and email first.");

    const text = generateOrderText();
    window.open(`https://wa.me/254714328866?text=${text}`, '_blank');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="container text-center" style={{ padding: '100px 0' }}>
        <h2>Your cart is empty</h2>
        <Link to="/store" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Go to Store</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page container" style={{ padding: '60px 24px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>Checkout</h1>
      <p style={{ color: 'var(--text-gray)', marginBottom: '40px' }}>Please enter your details below to complete your order request.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
        
        {/* Form */}
        <form onSubmit={handleEmailOrder} style={{ background: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #f0f0f0' }}>
          <h3 style={{ marginBottom: '20px' }}>Customer Details</h3>
          
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
          </div>
          
          <div className="form-group">
            <label>Phone Number (for M-Pesa) *</label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="0712 345 678" />
          </div>

          <div className="form-group" style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '20px' }}>
            <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={{ width: '20px', height: '20px' }} />
            <label htmlFor="terms" style={{ margin: 0 }}>I agree to the Terms and Conditions and Refund Policy.</label>
          </div>

          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <Mail size={20} /> Send Order via Email
            </button>
            
            <button type="button" onClick={handleWhatsAppOrder} className="btn-secondary" style={{ padding: '16px', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', borderColor: '#25D366', color: '#25D366' }}>
              <MessageCircle size={20} /> Send Order via WhatsApp
            </button>
          </div>
          
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', textAlign: 'center', marginTop: '20px' }}>
            Once you send the order, I will reply with the M-Pesa payment details (Paybill/Till Number) to complete your purchase.
          </p>
        </form>

        {/* Order Summary */}
        <div style={{ background: 'var(--bg-light)', padding: '30px', borderRadius: '16px' }}>
          <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' }}>
              <span>{item.quantity}x {item.name}</span>
              <span>KSh {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '20px', fontWeight: '800' }}>
            <span>Total</span>
            <span>KSh {cartTotal.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;