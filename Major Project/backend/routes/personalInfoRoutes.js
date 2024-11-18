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

module.exports = router;
