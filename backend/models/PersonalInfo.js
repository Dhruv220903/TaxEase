// models/PersonalInfo.js
const mongoose = require('mongoose');

const PersonalInfoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  fatherName: { type: String, required: true },
  gender: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  aadhaar: { type: String, required: true },
  pan: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true }
});

const PersonalInfo = mongoose.model('PersonalInfo', PersonalInfoSchema);

module.exports = PersonalInfo;
