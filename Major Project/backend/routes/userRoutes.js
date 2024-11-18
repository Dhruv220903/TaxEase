// routes/userRoutes.js
const express = require("express");
const PersonalInfo = require("../models/PersonalInfo");
const router = express.Router();

// Save or update personal info along with income data
router.post("/save-personal-info", async (req, res) => {
    try {
        const { personalInfo, incomeData } = req.body;  // Extract personal info and income data from request body

        // Check if the user already exists by email
        let user = await PersonalInfo.findOne({ email: personalInfo.email });

        if (user) {
            // If user exists, update the user's data
            user = await PersonalInfo.findOneAndUpdate(
                { email: personalInfo.email },
                {
                    ...personalInfo,  // Update personal information
                    incomeData,       // Update income data
                },
                { new: true } // Return the updated document
            );
        } else {
            // If user does not exist, create a new user document
            user = new PersonalInfo({
                ...personalInfo,
                incomeData,
            });
            await user.save();
        }

        res.status(200).json({ message: "User data saved successfully", user });
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
