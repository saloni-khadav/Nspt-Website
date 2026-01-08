const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  resumePath: {
    type: String,
    required: true
  },
  passOutYear: {
    type: Number,
    required: true
  },
  phone: {
    type: String
  },
  experience: {
    type: String
  },
  qualification: {
    type: String,
    required: true
  },
  position: {
    type: String
  },
  coverLetter: {
    type: String
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CareerApplication', careerApplicationSchema);