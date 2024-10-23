// src/IncomeTaxCalculator.js

import React, { useState } from 'react';

const OLD_TAX_REGIME = [
  { upTo: 250000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 1000000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

const OLD_TAX_REGIME_SENIOR = [
  { upTo: 300000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 1000000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

const NEW_TAX_REGIME = [
  { upTo: 250000, rate: 0 },
  { upTo: 500000, rate: 0.05 },
  { upTo: 750000, rate: 0.1 },
  { upTo: 1000000, rate: 0.15 },
  { upTo: 1250000, rate: 0.2 },
  { upTo: 1500000, rate: 0.25 },
  { upTo: Infinity, rate: 0.3 },
];

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [age, setAge] = useState('');
  const [deductions, setDeductions] = useState('');
  const [taxRegime, setTaxRegime] = useState('New Tax Regime');
  const [calculatedTax, setCalculatedTax] = useState(null);  // Change initial state to null

  const calculateTax = (income, slabs) => {
    let tax = 0;
    let previousLimit = 0;

    for (const slab of slabs) {
      if (income > slab.upTo) {
        tax += (slab.upTo - previousLimit) * slab.rate;
        previousLimit = slab.upTo;
      } else {
        tax += (income - previousLimit) * slab.rate;
        break;
      }
    }
    return tax;
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const incomeAmount = parseFloat(income);
    const deductionsAmount = parseFloat(deductions) || 0; // Default to 0 if deductions are not provided

    if (isNaN(incomeAmount) || incomeAmount < 0) {
      alert("Please enter a valid income amount.");
      return;
    }

    const slabs = taxRegime === 'Old Tax Regime'
      ? (age >= 60 ? OLD_TAX_REGIME_SENIOR : OLD_TAX_REGIME)
      : NEW_TAX_REGIME;

    const taxableIncome = Math.max(incomeAmount - deductionsAmount, 0); // Ensure taxable income is non-negative
    const tax = calculateTax(taxableIncome, slabs);
    setCalculatedTax(tax);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Income Tax Calculator</h2>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Income:</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter your income"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter your age"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Deductions (e.g., 80C, 80D):</label>
            <input
              type="number"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="Enter total deductions"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Tax Regime:</label>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setTaxRegime('Old Tax Regime')}
                className={`py-2 px-4 rounded ${taxRegime === 'Old Tax Regime' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Old Tax Regime
              </button>
              <button
                type="button"
                onClick={() => setTaxRegime('New Tax Regime')}
                className={`py-2 px-4 rounded ${taxRegime === 'New Tax Regime' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                New Tax Regime
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 transition"
          >
            Calculate
          </button>
        </form>

        {calculatedTax !== null && ( // Show tax even if it's zero
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Calculated Tax: ₹{calculatedTax.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
