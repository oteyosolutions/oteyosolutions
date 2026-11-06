 
import React, { useState } from 'react';
import '../styles/ProfitCalculator.css'; // Reusing the same styling

const VatCalculator = () => {
  const [revenue, setRevenue] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [vatRate, setVatRate] = useState(16); // Default Kenya VAT

  const vatOnRevenue = revenue * (vatRate / 100);
  const totalRevenueWithVat = revenue + vatOnRevenue;
  
  // Simplified tax estimation (e.g., 30% on profit)
  const estimatedProfit = revenue - expenses;
  const estimatedTax = estimatedProfit > 0 ? estimatedProfit * 0.30 : 0;

  return (
    <div className="calc-page container">
      <div className="calc-card" style={{ maxWidth: '600px' }}>
        <h2>VAT & Tax Estimator</h2>
        <p style={{ color: '#dc2626', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px' }}>
          DISCLAIMER: This is a simplified estimation tool. It does not account for all tax reliefs, deductions, or specific business structures. Consult a certified accountant or the KRA for accurate tax advice.
        </p>

        <div className="form-group">
          <label>Total Revenue (Before VAT) - KSh</label>
          <input type="number" value={revenue} onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="form-group">
          <label>Total Business Expenses - KSh</label>
          <input type="number" value={expenses} onChange={(e) => setExpenses(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="form-group">
          <label>VAT Rate (%)</label>
          <input type="number" value={vatRate} onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="calc-results" style={{ gridTemplateColumns: '1fr' }}>
          <div className="result-box">
            <span>VAT Amount (Owed/Collected)</span>
            <h3>KSh {vatOnRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
          <div className="result-box">
            <span>Total Invoice Amount (Incl. VAT)</span>
            <h3>KSh {totalRevenueWithVat.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
          <div className="result-box primary">
            <span>Estimated Income Tax (approx 30%)</span>
            <h3>KSh {estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatCalculator;