 
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Simulating M-Pesa STK Push to ${phone} for KSh ${cartTotal}`);
    // In the future, this is where you call your Django API to trigger the Daraja STK push
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Your cart is empty</h2>
        <Link to="/store" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Go to Store</Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '80vh', backgroundColor: '#f8f9fa' }}>
      
      {/* Left Side: Visual / Order Summary */}
      <div style={{ flex: 1, backgroundColor: '#d4b895', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px' }}>
         <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <span>{item.quantity}x {item.name}</span>
                <span>KSh {item.price * item.quantity}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontWeight: 'bold', fontSize: '20px' }}>
              <span>Total</span>
              <span>KSh {cartTotal}</span>
            </div>
         </div>
      </div>

      {/* Right Side: Payment Form */}
      <div style={{ flex: 1, padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>CheckOut</h1>
        <p style={{ color: 'var(--text-gray)', marginBottom: '30px' }}>Please complete the purchase by providing payment details.</p>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png" alt="M-Pesa" style={{ height: '30px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" style={{ height: '30px' }} />
        </div>

        <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>M-Pesa Phone Number</label>
            <input 
              type="text" 
              placeholder="e.g. 0712345678" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} 
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="kelvin@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} 
              required
            />
          </div>

          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-gray)' }}>
                <span>Subtotal</span><span>KSh {cartTotal}</span>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-gray)' }}>
                <span>VAT (16%)</span><span>Calculated at next step</span>
             </div>
          </div>

          <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '18px', backgroundColor: '#b76e2c', borderRadius: '50px' }}>
            Pay KSh {cartTotal}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;