const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const CareerApplication = require('../models/CareerApplication');
const GoogleDriveService = require('../services/googleDriveService');

const driveService = new GoogleDriveService();

// Test Google Drive connection on startup
driveService.testConnection();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedTypes = /pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// POST - Submit career application
router.post('/apply', upload.single('resume'), async (req, res) => {
  try {
    const applicationData = {
      ...req.body,
      resumePath: req.file ? req.file.path : null
    };
    
    // Save to database
    const application = new CareerApplication(applicationData);
    await application.save();
    
    console.log('Application saved successfully:', application._id);
    
    // Try to create Google Sheet (ignore errors)
    try {
      console.log('Google Sheets integration disabled due to storage quota');
      // const resumeLocalPath = req.file ? `http://localhost:5000/${req.file.path.replace(/\\/g, '/')}` : 'N/A';
      // const sheetLink = await driveService.createApplicationSheet({
      //   ...applicationData,
      //   resumeLink: resumeLocalPath,
      //   submittedAt: application.submittedAt
      // });
      // console.log('Google Sheet created:', sheetLink);
    } catch (sheetError) {
      console.log('Could not create Google Sheet:', sheetError.message);
    }
    
    res.status(201).json({ 
      message: 'Application submitted successfully',
      applicationId: application._id
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(400).json({ 
      message: 'Error submitting application',
      error: error.message 
    });
  }
});

// GET - Get all applications
router.get('/applications', async (req, res) => {
  try {
    const applications = await CareerApplication.find().sort({ submittedAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching applications',
      error: error.message 
    });
  }
});

// DELETE - Delete multiple applications
router.delete('/delete-multiple', async (req, res) => {
  try {
    const { ids } = req.body;
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'No application IDs provided' });
    }
    
    const result = await CareerApplication.deleteMany({ _id: { $in: ids } });
    
    res.json({ 
      message: `${result.deletedCount} applications deleted successfully`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting applications',
      error: error.message 
    });
  }
});

module.exports = router;