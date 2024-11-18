// routes/userRoutes.js
const express = require("express");
const PersonalInfo = require("../models/PersonalInfo");
const router = express.Router();

// Update income data
router.post("/income-data", async (req, res) => {
    try {
        const { email, incomeData } = req.body; // Identify user via email
        const user = await PersonalInfo.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.incomeData = incomeData; // Update income data
        await user.save();

        res.status(200).json({ message: "Income data saved successfully" });
    } catch (error) {
        console.error("Error updating income data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
