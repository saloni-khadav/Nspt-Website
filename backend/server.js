const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'NSPT Backend API is running!' });
});

// Career Applications Routes
const careerRoutes = require('./routes/careers');
app.use('/api/careers', careerRoutes);

// Contact Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

// Promotion Routes
const promotionRoutes = require('./routes/promotion');
app.use('/api/promotion', promotionRoutes);

// Project Consultation Routes
const projectConsultationRoutes = require('./routes/projectConsultation');
app.use('/api/project-consultation', projectConsultationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});