// routes/taxSummaryRoutes.js
const express = require('express');
const router = express.Router();
const TaxSummary = require('../models/TaxSummary');

// Create a new tax summary
router.post('/', async (req, res) => {
    try {
        const taxSummary = new TaxSummary(req.body);
        await taxSummary.save();
        res.status(201).json(taxSummary);
    } catch (error) {
        res.status(400).json({ message: 'Error creating tax summary' });
    }
});

// Get a tax summary by ID
router.get('/:id', async (req, res) => {
    try {
        const taxSummary = await TaxSummary.findById(req.params.id);
        if (!taxSummary) return res.status(404).json({ message: 'Tax summary not found' });

        // Calculate necessary fields
        taxSummary.grossIncome = taxSummary.incomeSources.salary + taxSummary.incomeSources.interest +
            taxSummary.incomeSources.gainsFromStocks + taxSummary.incomeSources.houseProperties +
            taxSummary.incomeSources.dividend + taxSummary.incomeSources.professionalIncome +
            taxSummary.incomeSources.cryptoIncome + taxSummary.incomeSources.exemptIncome;

        taxSummary.totalDeductions = taxSummary.taxSavings.deductions + taxSummary.taxSavings.disabledDependent.deductions;
        taxSummary.taxableIncome = taxSummary.grossIncome - taxSummary.totalDeductions;

        if (taxSummary.taxableIncome > 0) {
            taxSummary.taxLiability = taxSummary.taxableIncome * 0.1; // Example: 10% tax
        } else {
            taxSummary.taxLiability = 0;
        }

        taxSummary.taxesPaid = 0; // Adjust accordingly

        // Set other fields
        taxSummary.selectedRegime = "New Regime"; // Example logic
        taxSummary.assessmentYear = "2024 - 2025"; // Example logic
        taxSummary.itrType = "ITR1"; // Example logic
        taxSummary.residentialStatus = "Resident"; // Example logic
        taxSummary.homeLoanInterestClaimed = 0; // Fetch if available
        taxSummary.homeLoanMaxLimit = 200000; // Set max limit

        res.json(taxSummary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
