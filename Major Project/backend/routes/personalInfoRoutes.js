const express = require("express");
const router = express.Router();
const PersonalInfo = require("../models/PersonalInfo");

// Route to Save Data
router.post("/personal-info", async (req, res) => {
    try {
        const personalInfo = new PersonalInfo(req.body);
        await personalInfo.save();
        res.status(201).json({ message: "Personal information saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save personal information", details: err.message });
    }
});

// Route to Save Income Data for an Existing User
router.post("/income-data", async (req, res) => {
    try {
        const { email, incomeData } = req.body;

        // Find the user by email
        const user = await PersonalInfo.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's income data
        user.incomeData = incomeData;
        await user.save();

        res.status(200).json({ message: "Income data saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save income data", details: err.message });
    }
});
router.post("/tax-savings", async (req, res) => {
    try {
        const { email, taxSavingsData } = req.body;

        // Find the user by email
        const user = await PersonalInfo.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Update the user's tax savings data
        user.taxSavings = taxSavingsData;
        await user.save();

        res.status(200).json({ message: "Tax savings data saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to save tax savings data", details: err.message });
    }
});
module.exports = router;
