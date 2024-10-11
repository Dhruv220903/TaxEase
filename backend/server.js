// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const PersonalInfo = require('./models/PersonalInfo');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// API endpoint to save personal information
app.post('/api/personal-info', async (req, res) => {
  const personalInfoData = new PersonalInfo(req.body);
  
  try {
    await personalInfoData.save();
    res.status(201).send({ message: 'Personal information saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving personal information' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
