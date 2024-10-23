// src/components/IncomeSources.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IncomeSources = () => {
    const [incomeData, setIncomeData] = useState({
        salaryIncome: '',
        interestIncome: '',
        gainsFromStocks: '',
        housePropertyIncome: '',
        dividendIncome: '',
        professionalIncome: '',
        cryptoIncome: '',
        exemptIncome: '',
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncomeData({ ...incomeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send incomeData to the next component or backend
        navigate('/tax-savings', { state: incomeData });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">Income Sources</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Salary Income*</label>
                    <input type="number" name="salaryIncome" value={incomeData.salaryIncome} onChange={handleChange} className="border rounded w-full p-2" required />
                </div>
                <div>
                    <label>Interest Income</label>
                    <input type="number" name="interestIncome" value={incomeData.interestIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>Gains from Stocks</label>
                    <input type="number" name="gainsFromStocks" value={incomeData.gainsFromStocks} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>House Property Income</label>
                    <input type="number" name="housePropertyIncome" value={incomeData.housePropertyIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>Dividend Income</label>
                    <input type="number" name="dividendIncome" value={incomeData.dividendIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>Professional Income</label>
                    <input type="number" name="professionalIncome" value={incomeData.professionalIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>Crypto Income</label>
                    <input type="number" name="cryptoIncome" value={incomeData.cryptoIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <div>
                    <label>Exempt Income</label>
                    <input type="number" name="exemptIncome" value={incomeData.exemptIncome} onChange={handleChange} className="border rounded w-full p-2" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Next</button>
            </form>
        </div>
    );
};

export default IncomeSources;
