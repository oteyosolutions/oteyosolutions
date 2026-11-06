 
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: '800' }}>My Account</h1>
          <p style={{ color: 'var(--text-gray)' }}>Welcome back, {user?.username}</p>
        </div>
        <button onClick={logout} className="btn-secondary">Logout</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
        <Link to="/account" className="card-hover-lift" style={{ padding: '30px', border: '1px solid #f0f0f0', borderRadius: '16px', textDecoration: 'none', color: 'inherit', background: 'white' }}>
          <h3>Order History</h3>
          <p style={{ color: 'var(--text-gray)', marginTop: '8px' }}>View your past purchases.</p>
        </Link>
        <Link to="/account" className="card-hover-lift" style={{ padding: '30px', border: '1px solid #f0f0f0', borderRadius: '16px', textDecoration: 'none', color: 'inherit', background: 'white' }}>
          <h3>My Downloads</h3>
          <p style={{ color: 'var(--text-gray)', marginTop: '8px' }}>Access your digital products.</p>
        </Link>
        <Link to="/account" className="card-hover-lift" style={{ padding: '30px', border: '1px solid #f0f0f0', borderRadius: '16px', textDecoration: 'none', color: 'inherit', background: 'white' }}>
          <h3>Settings</h3>
          <p style={{ color: 'var(--text-gray)', marginTop: '8px' }}>Manage your account details.</p>
        </Link>
      </div>
    </div>
  );
};

export default Account;