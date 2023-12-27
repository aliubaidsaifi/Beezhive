const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: String,
  location: String,
  employmentType: String,
  workAuthorization: String,
  description: String,
});

module.exports = mongoose.model('Job', jobSchema);
