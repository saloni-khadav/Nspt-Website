const mongoose = require('mongoose');

const projectConsultationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  companySize: {
    type: String,
    trim: true
  },
  projectType: {
    type: String,
    trim: true
  },
  projectDescription: {
    type: String,
    trim: true
  },
  expectedTimeline: {
    type: String,
    trim: true
  },
  estimatedBudget: {
    type: String,
    trim: true
  },
  requiredServices: {
    type: [String],
    default: []
  },
  agreeToContact: {
    type: Boolean,
    default: false
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProjectConsultation', projectConsultationSchema);