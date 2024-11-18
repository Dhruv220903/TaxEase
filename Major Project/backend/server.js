const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// Initialize App
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI; // Get URI from .env
mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const personalInfoRoutes = require("./routes/personalInfoRoutes");
app.use("/api/user", personalInfoRoutes);

// Start Server
const PORT = process.env.PORT || 3085;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
