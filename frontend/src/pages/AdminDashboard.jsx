import React, { useState } from 'react';
import { useApp } from '../context/CartContext';
import { LayoutDashboard, Wrench, ShoppingBag, Settings, Check, X, Trash2, Plus } from 'lucide-react';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const { 
    toolsConfig, toggleToolStatus, updateToolRoute,
    productsConfig, addProduct, deleteProduct, toggleProductStatus
  } = useApp();
  
  const [activeTab, setActiveTab] = useState('tools');
  const [editingRoutes, setEditingRoutes] = useState({});

  // State for new product form
  const [newProduct, setNewProduct] = useState({
    name: '', category: 'Software', price: 0, shortDescription: '', productType: 'Software'
  });

  const handleRouteChange = (id, value) => setEditingRoutes({ ...editingRoutes, [id]: value });
  const saveRoute = (id) => {
    if (editingRoutes[id] !== undefined) {
      updateToolRoute(id, editingRoutes[id]);
      alert("Route updated!");
    }
  };

    const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return alert("Name and Price are required");
    
    addProduct({
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      shortDescription: newProduct.shortDescription,
      productType: newProduct.category
    });
    
    setNewProduct({ name: '', category: 'Software', price: 0, shortDescription: '', productType: 'Software' });
  };
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">Oteyo<span>Admin</span></div>
        <nav className="admin-nav">
          <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}><LayoutDashboard size={20} /> Overview</button>
          <button className={activeTab === 'tools' ? 'active' : ''} onClick={() => setActiveTab('tools')}><Wrench size={20} /> Manage Tools</button>
          <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}><ShoppingBag size={20} /> Manage Products</button>
          <button className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}><Settings size={20} /> Settings</button>
        </nav>
      </aside>

      <main className="admin-content">
        <header className="admin-header">
          <h1>{activeTab === 'tools' ? 'Tool Management' : activeTab === 'products' ? 'Product Management' : 'Dashboard'}</h1>
          <div className="admin-user">Admin</div>
        </header>

        {/* TOOLS TAB */}
        {activeTab === 'tools' && (
          <div className="admin-section">
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead><tr><th>Tool</th><th>Status</th><th>Route</th><th>Action</th></tr></thead>
                <tbody>
                  {toolsConfig.map(tool => (
                    <tr key={tool.id}>
                      <td><strong>{tool.name}</strong></td>
                      <td><span className={`status-badge ${tool.isActive ? 'active' : 'inactive'}`}>{tool.isActive ? 'Active' : 'Hidden'}</span></td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <input type="text" defaultValue={tool.route === '#' ? '' : tool.route} placeholder="/tools/..." onChange={(e) => handleRouteChange(tool.id, e.target.value)} className="admin-input" />
                          <button onClick={() => saveRoute(tool.id)} className="btn-save">Save</button>
                        </div>
                      </td>
                      <td><button className={`toggle-btn ${tool.isActive ? 'btn-hide' : 'btn-publish'}`} onClick={() => toggleToolStatus(tool.id)}>{tool.isActive ? <X size={14}/> : <Check size={14}/>}</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="admin-section">
            {/* Add Product Form */}
            <div className="admin-form-card">
              <h2><Plus size={20}/> Add New Product</h2>
              <form onSubmit={handleCreateProduct} className="admin-form-grid">
                <input type="text" placeholder="Product Name" required value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                  <option>Software</option>
                  <option>Website Template</option>
                  <option>eBook</option>
                  <option>Course</option>
                  <option>AI Model</option>
                </select>
                <input type="number" placeholder="Price (KSh)" required value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                <input type="text" placeholder="Short Description" required value={newProduct.shortDescription} onChange={e => setNewProduct({...newProduct, shortDescription: e.target.value})} />
                <button type="submit" className="btn-primary" style={{ gridColumn: 'span 4' }}>Add Product</button>
              </form>
            </div>

            {/* Product List */}
            <div className="admin-table-wrapper" style={{ marginTop: '30px' }}>
              <table className="admin-table">
                <thead><tr><th>Product</th><th>Price</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead>
                <tbody>
                  {productsConfig.map(product => (
                    <tr key={product.id}>
                      <td><strong>{product.name}</strong><br/><small>{product.category}</small></td>
                      <td>KSh {product.price}</td>
                      <td>{product.productType || 'Software'}</td>
                      <td><span className={`status-badge ${product.isActive ? 'active' : 'inactive'}`}>{product.isActive ? 'Live' : 'Draft'}</span></td>
                      <td style={{ display: 'flex', gap: '10px' }}>
                        <button className={`toggle-btn ${product.isActive ? 'btn-hide' : 'btn-publish'}`} onClick={() => toggleProductStatus(product.id)}>
                          {product.isActive ? 'Hide' : 'Publish'}
                        </button>
                        <button className="btn-danger" onClick={() => { if(window.confirm('Delete product?')) deleteProduct(product.id); }}><Trash2 size={16}/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;