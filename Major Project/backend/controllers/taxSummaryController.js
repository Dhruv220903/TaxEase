// controllers/taxSummaryController.js
const PersonalInfo = require('../models/PersonalInfo');

const calculateTaxSummary = (personalInfo) => {
    // Extracting the data from the schema
    const { incomeData, taxSavings } = personalInfo;
    const { salaryIncome, interestIncome, gainsFromStocks, housePropertyIncome, dividendIncome, professionalIncome, cryptoIncome, exemptIncome } = incomeData;
    const { deduction80C, disabledDependent, insuranceSelf, insuranceParents } = taxSavings;

    // Calculate gross income
    const grossIncome = salaryIncome + interestIncome + gainsFromStocks + housePropertyIncome + dividendIncome + professionalIncome + cryptoIncome + exemptIncome;

    // Calculate tax-saving deductions (deductions for 80C, medical insurance)
    const deductions = deduction80C + insuranceSelf + insuranceParents;

    // Calculate taxable income
    const taxableIncome = grossIncome - deductions;

    // Calculate tax liability (assuming flat tax rates, can be updated for progressive tax slabs)
    let taxLiability = 0;
    if (taxableIncome <= 250000) {
        taxLiability = 0;
    } else if (taxableIncome <= 500000) {
        taxLiability = taxableIncome * 0.05;
    } else if (taxableIncome <= 1000000) {
        taxLiability = taxableIncome * 0.2;
    } else {
        taxLiability = taxableIncome * 0.3;
    }

    // Taxes paid (you might want to store this in the database or calculate it based on another form)
    const taxesPaid = 0;

    return {
        grossIncome,
        taxableIncome,
        taxLiability,
        taxesPaid,
        selectedRegime: "Old Regime", // or "New Regime" based on the user's selection
    };
};

const getTaxSummary = async (req, res) => {
    try {
        const personalInfo = await PersonalInfo.findOne({ email: req.params.email });
        if (!personalInfo) {
            return res.status(404).json({ message: "Personal Information not found" });
        }

        const taxSummary = calculateTaxSummary(personalInfo);
        res.json(taxSummary);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getTaxSummary };
