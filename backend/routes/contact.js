const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      contactId: contact._id 
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Error submitting contact form',
      error: error.message 
    });
  }
});

// GET - Get all contacts
router.get('/messages', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching contacts',
      error: error.message 
    });
  }
});

// DELETE - Delete multiple contacts
router.delete('/delete-multiple', async (req, res) => {
  try {
    const { ids } = req.body;
    await Contact.deleteMany({ _id: { $in: ids } });
    res.json({ message: 'Contacts deleted successfully' });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting contacts',
      error: error.message 
    });
  }
});

module.exports = router;