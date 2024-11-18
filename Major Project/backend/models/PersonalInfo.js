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
    email: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
});

module.exports = mongoose.model("PersonalInfo", personalInfoSchema);
