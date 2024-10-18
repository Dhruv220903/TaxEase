// models/TaxSummary.js
const mongoose = require('mongoose');

const taxSummarySchema = new mongoose.Schema({
    personalInfo: {
        name: {
            first: String,
            middle: String,
            last: String,
        },
        dob: Date,
        fatherName: String,
        gender: String,
        aadhaar: String,
        pan: String,
        mobile: String,
        email: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
    },
    incomeSources: {
        salary: Number,
        interest: Number,
        gainsFromStocks: Number,
        houseProperties: Number,
        dividend: Number,
        professionalIncome: Number,
        cryptoIncome: Number,
        exemptIncome: Number,
    },
    taxSavings: {
        deductions: Number,
        disabledDependent: {
            deductions: Number,
        },
        medicalInsurance: {
            self: Number,
            parents: Number,
        },
    },
    grossIncome: Number,
    taxableIncome: Number,
    taxLiability: Number,
    taxesPaid: Number,
    selectedRegime: String,
    assessmentYear: String,
    itrType: String,
    residentialStatus: String,
    totalDeductions: Number,
    homeLoanInterestClaimed: Number,
    homeLoanMaxLimit: Number,
});

module.exports = mongoose.model('TaxSummary', taxSummarySchema);
