const mongoose = require('mongoose');

// Define the employer schema
const employerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Add validation for a valid email format here if needed
  },
  contact: {
    type: String,
    required: true,
    // You can add validation for phone numbers if needed
  },
  password: {
    type: String,
    required: true,
  },
 ConfirmPassword: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

// Create the Employer model
const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
