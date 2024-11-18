// models/PersonalInfo.js
const mongoose = require("mongoose");

const personalInfoSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    dateOfBirth: String,
    fathersName: String,
    gender: String,
    maritalStatus: String,
    aadhaar: String,
    pan: String,
    mobile: String,
    email: { type: String, unique: true, required: true },
    address: String,
    city: String,
    state: String,
    pincode: String,
    incomeData: {
        salaryIncome: Number,
        interestIncome: Number,
        gainsFromStocks: Number,
        housePropertyIncome: Number,
        dividendIncome: Number,
        professionalIncome: Number,
        cryptoIncome: Number,
        exemptIncome: Number,
    },
    taxSavings: {
        deduction80C: Number,
        disabledDependent: Boolean,
        disabilityNature: String,
        dependentType: String,
        panOfDependent: String,
        aadhaarOfDependent: String,
        form10IADetails: String,
        form10IAFilingDate: Date,
        form10IAAckNo: String,
        udidNo: String,
        insuranceSelf: Number,
        insuranceParents: Number,
        donation: Number,
        cashContribution: Number,
        nonCashContribution: Number,
        contributionDate: Date,
        transactionRefNo: String,
        ifscCode: String,
    }
});

module.exports = mongoose.model("PersonalInfo", personalInfoSchema);
