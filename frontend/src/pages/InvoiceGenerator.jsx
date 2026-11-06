 
import React, { useState } from 'react';
import { Plus, Trash2, Printer } from 'lucide-react';
import '../styles/InvoiceGenerator.css';

const InvoiceGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
    date: new Date().toISOString().split('T')[0],
    clientName: '',
    clientEmail: '',
    items: [{ id: 1, description: '', quantity: 1, price: 0 }]
  });

  const handleAddItem = () => {
    setInvoiceData({
      ...invoiceData,
      items: [...invoiceData.items, { id: Date.now(), description: '', quantity: 1, price: 0 }]
    });
  };

  const handleRemoveItem = (id) => {
    setInvoiceData({
      ...invoiceData,
      items: invoiceData.items.filter(item => item.id !== id)
    });
  };

  const handleItemChange = (id, field, value) => {
    const updatedItems = invoiceData.items.map(item => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const calculateTotal = () => {
    return invoiceData.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-page container">
      <div className="invoice-controls no-print">
        <button onClick={handlePrint} className="btn-primary"><Printer size={18}/> Print / Save as PDF</button>
      </div>

      {/* The Invoice Paper */}
      <div className="invoice-paper">
        <div className="invoice-header">
          <div>
            <h1 className="logo-text">Oteyo<span className="highlight">Solutions</span></h1>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Your Vision. Our Code.</p>
          </div>
          <div className="invoice-meta">
            <h2>INVOICE</h2>
            <p><strong>#</strong> {invoiceData.invoiceNumber}</p>
            <p><strong>Date:</strong> {invoiceData.date}</p>
          </div>
        </div>

        <div className="invoice-billing">
          <div>
            <h3>From:</h3>
            <p><strong>OteyoSolutions</strong></p>
            <p>Nairobi, Kenya</p>
            <p>hello@oteyosolutions.com</p>
          </div>
          <div>
            <h3>Bill To:</h3>
            <input 
              type="text" 
              placeholder="Client Name" 
              className="input-inline"
              value={invoiceData.clientName}
              onChange={(e) => setInvoiceData({...invoiceData, clientName: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Client Email" 
              className="input-inline"
              value={invoiceData.clientEmail}
              onChange={(e) => setInvoiceData({...invoiceData, clientEmail: e.target.value})}
            />
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Price (KSh)</th>
              <th>Total (KSh)</th>
              <th className="no-print"></th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map(item => (
              <tr key={item.id}>
                <td>
                  <input 
                    type="text" 
                    placeholder="Item description" 
                    className="input-table"
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    min="1" 
                    className="input-table text-center"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 0)}
                  />
                </td>
                <td>
                  <input 
                    type="number" 
                    min="0" 
                    className="input-table text-right"
                    value={item.price}
                    onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)}
                  />
                </td>
                <td className="text-right">{(item.quantity * item.price).toLocaleString()}</td>
                <td className="no-print">
                  <button onClick={() => handleRemoveItem(item.id)} className="btn-danger"><Trash2 size={16}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button onClick={handleAddItem} className="btn-secondary no-print" style={{ marginTop: '16px' }}>
          <Plus size={16}/> Add Item
        </button>

        <div className="invoice-totals">
          <div className="total-row">
            <span>Total</span>
            <span>KSh {calculateTotal().toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;