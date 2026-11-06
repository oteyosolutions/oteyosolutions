 
import React, { useState } from 'react';
import '../styles/ProfitCalculator.css'; // Reusing the same styling

const LoanCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(12); // Default annual rate
  const [months, setMonths] = useState(12);

  // Standard Loan Amortization Formula: 
  // M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1 ]
  const monthlyRate = (interestRate / 100) / 12;
  const n = months;
  
  let monthlyPayment = 0;
  if (amount > 0 && monthlyRate > 0 && n > 0) {
    monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  } else if (amount > 0 && n > 0) {
    monthlyPayment = amount / n; // 0% interest case
  }

  const totalPayment = monthlyPayment * n;
  const totalInterest = totalPayment - amount;

  return (
    <div className="calc-page container">
      <div className="calc-card" style={{ maxWidth: '600px' }}>
        <h2>Loan Repayment Calculator</h2>
        <p>Plan your business loans by calculating monthly repayments and total interest.</p>

        <div className="form-group">
          <label>Loan Amount (KSh)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="form-group">
          <label>Annual Interest Rate (%)</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)} />
        </div>

        <div className="form-group">
          <label>Loan Term (Months)</label>
          <input type="range" min="1" max="120" value={months} onChange={(e) => setMonths(parseInt(e.target.value))} />
          <span className="range-value">{months} Months</span>
        </div>

        <div className="calc-results" style={{ gridTemplateColumns: '1fr' }}>
          <div className="result-box primary">
            <span>Monthly Payment</span>
            <h3>KSh {monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
          <div className="result-box">
            <span>Total Interest Paid</span>
            <h3>KSh {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
          <div className="result-box">
            <span>Total Amount to Repay</span>
            <h3>KSh {totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;