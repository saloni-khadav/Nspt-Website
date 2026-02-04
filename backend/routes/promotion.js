const express = require('express');
const router = express.Router();
const Promotion = require('../models/Promotion');

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email, position } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if email already exists
    const existingSubscription = await Promotion.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }

    // Create new subscription
    const promotion = new Promotion({ email, position });
    await promotion.save();

    res.status(201).json({ message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Promotion subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all promotions
router.get('/all', async (req, res) => {
  try {
    const promotions = await Promotion.find().sort({ subscribedAt: -1 });
    res.json(promotions);
  } catch (error) {
    console.error('Error fetching promotions:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete multiple promotions
router.delete('/delete-multiple', async (req, res) => {
  try {
    const { ids } = req.body;
    await Promotion.deleteMany({ _id: { $in: ids } });
    res.json({ message: 'Promotions deleted successfully' });
  } catch (error) {
    console.error('Error deleting promotions:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;