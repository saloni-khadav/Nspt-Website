const express = require('express');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const router = express.Router();
const CareerApplication = require('../models/CareerApplication');

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

// Test email configuration
router.get('/test-email', async (req, res) => {
  try {
    console.log('=== EMAIL CONFIGURATION TEST ===');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
    console.log('EMAIL_PASS length:', process.env.EMAIL_PASS?.length);
    console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('EMAIL')));
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({ error: 'Email credentials missing from environment' });
    }
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    console.log('Attempting to verify SMTP connection...');
    await transporter.verify();
    console.log('SMTP verification successful!');
    
    res.json({ message: 'Email configuration is working!' });
  } catch (error) {
    console.error('=== EMAIL TEST ERROR ===');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    console.error('Full error:', error);
    res.status(500).json({ 
      error: error.message, 
      code: error.code,
      response: error.response 
    });
  }
});

// POST - Send rejection emails
router.post('/send-rejection', async (req, res) => {
  try {
    const { ids, message } = req.body;
    
    console.log('Rejection email request received:', { ids, messageLength: message?.length });
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: 'No application IDs provided' });
    }
    
    // Get applications by IDs
    const applications = await CareerApplication.find({ _id: { $in: ids } });
    console.log('Found applications:', applications.length);
    
    if (applications.length === 0) {
      return res.status(404).json({ message: 'No applications found' });
    }
    
    // Check email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials missing in .env file');
      return res.status(500).json({ message: 'Email configuration missing' });
    }
    
    console.log('Email user:', process.env.EMAIL_USER);
    console.log('Email pass length:', process.env.EMAIL_PASS?.length);
    
    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    
    // Test connection first
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    
    const defaultMessage = `Dear Candidate,

Thank you for your interest in joining NSPT and for taking the time to apply for a position with us.

After careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current requirements.

We appreciate the time and effort you invested in the application process and encourage you to apply for future opportunities that align with your skills and experience.

We wish you the best of luck in your job search.

Best regards,
NSPT HR Team`;
    
    const emailPromises = applications.map(app => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: app.email,
        subject: 'Application Status Update - NSPT',
        text: message || defaultMessage
      };
      
      console.log(`Sending email to: ${app.email}`);
      return transporter.sendMail(mailOptions);
    });
    
    await Promise.all(emailPromises);
    console.log('All emails sent successfully');
    
    res.json({ 
      message: `Rejection emails sent to ${applications.length} candidates`,
      count: applications.length
    });
  } catch (error) {
    console.error('Detailed error sending rejection emails:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    res.status(500).json({ 
      message: 'Error sending rejection emails',
      error: error.message,
      code: error.code
    });
  }
});

module.exports = router;