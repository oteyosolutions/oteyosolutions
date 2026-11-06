 
import React, { useState } from 'react';
import '../styles/ProfitCalculator.css';

const ProfitCalculator = () => {
  const [cost, setCost] = useState(0);
  const [margin, setMargin] = useState(20); // Default 20% margin

  const sellingPrice = cost + (cost * (margin / 100));
  const profit = sellingPrice - cost;

  return (
    <div className="calc-page container">
      <div className="calc-card">
        <h2>Profit Margin Calculator</h2>
        <p>Calculate your selling price based on cost and desired profit margin.</p>

        <div className="form-group">
          <label>Product Cost (KSh)</label>
          <input type="number" value={cost} onChange={(e) => setCost(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="form-group">
          <label>Desired Profit Margin (%)</label>
          <input type="range" min="1" max="100" value={margin} onChange={(e) => setMargin(parseInt(e.target.value))} />
          <span className="range-value">{margin}%</span>
        </div>

        <div className="calc-results">
          <div className="result-box">
            <span>Total Profit</span>
            <h3>KSh {profit.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
          <div className="result-box primary">
            <span>Suggested Selling Price</span>
            <h3>KSh {sellingPrice.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;