const express = require('express');
const router = express.Router();
const ProjectConsultation = require('../models/ProjectConsultation');

// POST route to submit project consultation form
router.post('/submit', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      companySize,
      projectType,
      projectDescription,
      expectedTimeline,
      estimatedBudget,
      requiredServices,
      agreeToContact
    } = req.body;

    // Validate required fields
    if (!fullName || !email || !companyName) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email, and company name are required'
      });
    }

    // Convert requiredServices object to array of selected services
    const selectedServices = [];
    if (requiredServices && typeof requiredServices === 'object') {
      Object.keys(requiredServices).forEach(service => {
        if (requiredServices[service] === true) {
          selectedServices.push(service);
        }
      });
    }

    // Create new project consultation entry
    const newConsultation = new ProjectConsultation({
      fullName,
      email,
      phone,
      companyName,
      companySize,
      projectType,
      projectDescription,
      expectedTimeline,
      estimatedBudget,
      requiredServices: selectedServices,
      agreeToContact
    });

    // Save to database
    await newConsultation.save();

    res.status(201).json({
      success: true,
      message: 'Project consultation request submitted successfully',
      data: newConsultation
    });

  } catch (error) {
    console.error('Error submitting project consultation:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET route to fetch all project consultations (for admin)
router.get('/all', async (req, res) => {
  try {
    const consultations = await ProjectConsultation.find()
      .sort({ submittedAt: -1 });

    res.status(200).json({
      success: true,
      data: consultations
    });

  } catch (error) {
    console.error('Error fetching project consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// DELETE route to delete multiple project consultations
router.delete('/delete-multiple', async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please provide valid consultation IDs to delete'
      });
    }

    const result = await ProjectConsultation.deleteMany({
      _id: { $in: ids }
    });

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} consultation(s) deleted successfully`,
      deletedCount: result.deletedCount
    });

  } catch (error) {
    console.error('Error deleting project consultations:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;