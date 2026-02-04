const mongoose = require('mongoose');
require('dotenv').config();

// Import the model
const ProjectConsultation = require('./models/ProjectConsultation');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
  checkData();
})
.catch(err => console.error('MongoDB connection error:', err));

async function checkData() {
  try {
    // Get all project consultation entries
    const consultations = await ProjectConsultation.find().sort({ submittedAt: -1 });
    
    console.log('\n=== PROJECT CONSULTATION DATA ===');
    console.log(`Total entries: ${consultations.length}`);
    
    if (consultations.length > 0) {
      console.log('\nLatest entries:');
      consultations.slice(0, 3).forEach((entry, index) => {
        console.log(`\n${index + 1}. ${entry.fullName}`);
        console.log(`   Email: ${entry.email}`);
        console.log(`   Company: ${entry.companyName}`);
        console.log(`   Services: ${entry.requiredServices.join(', ')}`);
        console.log(`   Submitted: ${entry.submittedAt}`);
      });
    } else {
      console.log('No entries found in database');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error checking data:', error);
    process.exit(1);
  }
}