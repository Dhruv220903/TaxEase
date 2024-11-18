// src/components/TaxSummary.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TaxSummary = () => {
    const [taxSummary, setTaxSummary] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Fetch tax summary on component mount
    useEffect(() => {
        const fetchTaxSummary = async () => {
            const email = location.state?.email; // Make sure the email is passed from previous page (e.g., after login)
            if (email) {
                try {
                    const response = await fetch(`/api/tax-summary/${email}`);
                    const data = await response.json();
                    setTaxSummary(data);
                } catch (error) {
                    console.error('Error fetching tax summary:', error);
                }
            } else {
                navigate('/login'); // If no email is found, redirect to login
            }
        };

        fetchTaxSummary();
    }, [location.state, navigate]);

    if (!taxSummary) {
        return <p>Loading...</p>;
    }

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
