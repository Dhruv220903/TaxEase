const express = require("express");
const router = express.Router();
const PersonalInfo = require("../models/PersonalInfo");

// Route to fetch tax summary for a user by email
router.get("/tax-summary/:email", async (req, res) => {
    const { email } = req.params;

    try {
        // Find the user by email
        const user = await PersonalInfo.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Extract income and tax savings
        const income = user.incomeData || {};
        const taxSavings = user.taxSavings || {};

        // Calculate gross income
        const grossIncome = Object.values(income).reduce((sum, val) => sum + (val || 0), 0);

        // Calculate deductions (e.g., 80C, insurance, etc.)
        const totalDeductions = (taxSavings.deduction80C || 0) +
            (taxSavings.insuranceSelf || 0) +
            (taxSavings.insuranceParents || 0);

        // Taxable income
        const taxableIncome = grossIncome - totalDeductions;

        // Tax liability (basic calculation)
        const taxLiability = calculateTaxLiability(taxableIncome);

        // Taxes paid (example value; replace with actual data if available)
        const taxesPaid = 0;

        // Regime (you can implement logic to determine old/new regime)
        const selectedRegime = "Old Regime";

        // Prepare the response
        const taxSummary = {
            grossIncome,
            taxableIncome,
            taxLiability,
            taxesPaid,
            selectedRegime,
            userDetails: {
                firstName: user.firstName,
                lastName: user.lastName,
                dateOfBirth: user.dateOfBirth,
                pan: user.pan,
            },
        };

        res.json(taxSummary);
    } catch (error) {
        console.error("Error fetching tax summary:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Tax liability calculation (replace with actual slab logic)
const calculateTaxLiability = (income) => {
    if (income <= 250000) return 0;
    else if (income <= 500000) return (income - 250000) * 0.05;
    else if (income <= 1000000) return (250000 * 0.05) + (income - 500000) * 0.2;
    else return (250000 * 0.05) + (500000 * 0.2) + (income - 1000000) * 0.3;
};

module.exports = router;
