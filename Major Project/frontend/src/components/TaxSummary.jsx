// src/components/TaxSummary.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const TaxSummary = () => {
    const location = useLocation();
    const { taxSummary } = location.state || {};

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Tax Summary</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Gross Income</h3>
                <p>₹ {taxSummary?.grossIncome || '0'}</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Taxable Income</h3>
                <p>₹ {taxSummary?.taxableIncome || '0'}</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Tax Liability</h3>
                <p>₹ {taxSummary?.taxLiability || '0'}</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Taxes Paid</h3>
                <p>₹ {taxSummary?.taxesPaid || '0'}</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">You have selected {taxSummary?.selectedRegime}</h3>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Compare Regimes</h3>
                <p>As per Income Tax Dept., you cannot file a Belated Return under Old Regime.</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Optimise your tax and Double-check your important data</h3>
                <p>Home Loan Interest Claimed: ₹ 0 (Max Limit: ₹ 200000)</p>
            </div>

            <h3 className="text-lg font-semibold">YOUR TAX BREAK-UP</h3>
            <div className="mb-4">
                <h4 className="text-md font-semibold">Personal Information</h4>
                <p>Name: {/* Add name */}</p>
                <p>Date of birth: {/* Add DOB */}</p>
                <p>PAN: {/* Add PAN */}</p>
                <p>Assessment Year: 2024 - 2025</p>
                <p>ITR Type: ITR1</p>
                <p>Residential Status: Resident</p>
            </div>

            <div className="mb-4">
                <h4 className="text-md font-semibold">Income Sources</h4>
                <p>Gross Total Income: ₹ {taxSummary?.grossIncome || '0'}</p>
                <p>Tax Savings (Deductions): Total Deduction: ₹ 0</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Tax Payable</h3>
                <p>Total Taxable Income: ₹ {taxSummary?.grossIncome || '0'}</p>
                <p>Total Tax: ₹ {taxSummary?.taxLiability || '0'}</p>
                <p>Total Tax Payable: ₹ {taxSummary?.taxLiability || '0'}</p>
                <p>Total Tax Paid: ₹ {taxSummary?.taxesPaid || '0'}</p>
            </div>
        </div>
    );
};

export default TaxSummary;
