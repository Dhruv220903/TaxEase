import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TaxSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [taxSummary, setTaxSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch tax summary from backend
  const fetchTaxSummary = async () => {
    const email = location.state?.email; // Email passed via navigation state
    if (!email) {
      setError("Email not provided. Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000); // Redirect to login after delay
      return;
    }

    try {
      const response = await fetch(`/api/tax-summary/${email}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tax summary. Please try again.");
      }
      const data = await response.json();
      setTaxSummary(data);
    } catch (err) {
      console.error("Error fetching tax summary:", err);
      setError("Failed to fetch tax summary. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaxSummary();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading your tax summary...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500 text-xl">{error}</div>;
  }

  // Default data structure to avoid undefined errors
  const {
    grossIncome = 0,
    taxableIncome = 0,
    taxLiability = 0,
    taxesPaid = 0,
    selectedRegime = "Not specified",
    userDetails = {},
  } = taxSummary || {};

  const { firstName = "", lastName = "", dateOfBirth = "N/A", pan = "N/A" } = userDetails;

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Tax Summary</h1>

      {/* Gross Income */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Gross Income</h2>
        <p className="text-gray-600">₹ {grossIncome}</p>
      </div>

      {/* Taxable Income */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Taxable Income</h2>
        <p className="text-gray-600">₹ {taxableIncome}</p>
      </div>

      {/* Tax Liability */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Tax Liability</h2>
        <p className="text-gray-600">₹ {taxLiability}</p>
      </div>

      {/* Taxes Paid */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Taxes Paid</h2>
        <p className="text-gray-600">₹ {taxesPaid}</p>
      </div>

      {/* Selected Regime */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Selected Regime</h2>
        <p className="text-gray-600">{selectedRegime}</p>
      </div>

      {/* Tax Breakup */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Tax Break-Up</h2>
        <div className="mt-2">
          <p className="text-gray-600">Name: {`${firstName} ${lastName}`}</p>
          <p className="text-gray-600">Date of Birth: {dateOfBirth}</p>
          <p className="text-gray-600">PAN: {pan}</p>
          <p className="text-gray-600">Assessment Year: 2024-2025</p>
        </div>
      </div>

      {/* Compare Regimes */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Compare Regimes</h2>
        <p className="text-gray-600">
          According to the Income Tax Department, filing a belated return under the Old Regime may not be allowed.
        </p>
      </div>

      {/* Optimization Tips */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Optimize Your Tax</h2>
        <p className="text-gray-600">Home Loan Interest Claimed: ₹ 0 (Max Limit: ₹ 200,000)</p>
      </div>

      {/* Summary Section */}
      <h2 className="text-lg font-semibold text-gray-700 mt-6">Tax Payable</h2>
      <div className="mt-2">
        <p className="text-gray-600">Total Taxable Income: ₹ {taxableIncome}</p>
        <p className="text-gray-600">Total Tax: ₹ {taxLiability}</p>
        <p className="text-gray-600">Total Tax Paid: ₹ {taxesPaid}</p>
        <p className="text-gray-600">Net Tax Payable: ₹ {taxLiability - taxesPaid}</p>
      </div>
    </div>
  );
};

export default TaxSummary;
