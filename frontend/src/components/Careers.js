import React, { useState } from 'react';
import Layout from './Layout';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    resume: null,
    passOutYear: '',
    phone: '',
    experience: '',
    qualification: '',
    position: '',
    coverLetter: ''
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'resume') {
      setApplicationData({
        ...applicationData,
        resume: e.target.files[0]
      });
    } else {
      setApplicationData({
        ...applicationData,
        [e.target.name]: e.target.value
      });
    }
  };

  const submitApplication = (e) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const formData = new FormData();
    formData.append('fullName', applicationData.fullName);
    formData.append('email', applicationData.email);
    formData.append('resume', applicationData.resume);
    formData.append('passOutYear', applicationData.passOutYear);
    formData.append('phone', applicationData.phone);
    formData.append('experience', applicationData.experience);
    formData.append('qualification', applicationData.qualification);
    formData.append('position', applicationData.position);
    formData.append('coverLetter', applicationData.coverLetter);
    
    // Save application data to database
    fetch('http://localhost:5000/api/careers/apply', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        toast.success('Application submitted and saved to database! ✅', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
        setShowApplicationForm(false);
        setApplicationData({
          fullName: '',
          email: '',
          resume: null,
          passOutYear: '',
          phone: '',
          experience: '',
          qualification: '',
          position: '',
          coverLetter: ''
        });
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error('Failed to submit application. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    });
  };

  const openApplicationForm = (position) => {
    setApplicationData({ ...applicationData, position });
    setShowApplicationForm(true);
  };

  const jobDetails = {
    tech: {
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
      date: "16th Nov 2025",
      description: "Looking for an experienced Software Engineer to develop cutting-edge AI solutions, build scalable applications, and drive innovation through modern technology stack.",
      requirements: [
        "Strong programming skills in Python, JavaScript, or Java",
        "Experience with AI/ML frameworks and cloud platforms",
        "Knowledge of modern web technologies and databases",
        "Ability to work in agile development environments"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Health and dental insurance coverage",
        "Flexible working hours & remote options",
        "Professional development opportunities",
        "Latest technology and equipment",
        "Innovation time for personal projects"
      ],
      color: "blue"
    },
    hr: {
      title: "HR Specialist",
      type: "Full-time",
      location: "Hybrid",
      date: "16th Nov 2025",
      description: "Looking for an experienced HR Specialist to manage talent acquisition, employee relations, and drive organizational growth through effective people management.",
      requirements: [
        "Strong communication and interpersonal skills",
        "Experience in recruitment and talent management",
        "Knowledge of HR policies and employment law",
        "Ability to handle confidential information"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health insurance",
        "Flexible timing & work culture",
        "Professional HR certifications support",
        "Team building and wellness programs",
        "Career advancement opportunities"
      ],
      color: "emerald"
    },
    accounts: {
      title: "Financial Analyst",
      type: "Full-time",
      location: "On-site",
      date: "16th Nov 2025",
      description: "Looking for a detail-oriented Financial Analyst to manage financial planning, analysis, and reporting to support strategic business decisions.",
      requirements: [
        "Strong analytical and mathematical skills",
        "Experience with financial modeling and forecasting",
        "Proficiency in Excel, SQL, and financial software",
        "Attention to detail and accuracy"
      ],
      benefits: [
        "Competitive salary and annual bonuses",
        "Health and accidental insurance",
        "Flexible timing & professional environment",
        "Financial certifications support",
        "Performance-based incentives",
        "Fast-growth career opportunities"
      ],
      color: "purple"
    },
    operations: {
      title: "Operations Manager",
      type: "Full-time",
      location: "Hybrid",
      date: "16th Nov 2025",
      description: "Looking for an experienced Operations Manager to streamline processes, manage teams, and ensure efficient business operations across all departments.",
      requirements: [
        "Strong leadership and management skills",
        "Experience in operations and process optimization",
        "Excellent problem-solving abilities",
        "Ability to manage multiple projects simultaneously"
      ],
      benefits: [
        "Competitive salary and leadership bonuses",
        "Comprehensive insurance coverage",
        "Flexible working arrangements",
        "Management training programs",
        "Travel allowance for operations",
        "Fast-track promotion opportunities"
      ],
      color: "orange"
    },
    agri: {
      title: "Agricultural Research Scientist",
      type: "Full-time",
      location: "Field + Remote",
      date: "16th Nov 2025",
      description: "Looking for a passionate Agricultural Research Scientist to conduct field research, develop innovative farming solutions, and advance sustainable agriculture practices.",
      requirements: [
        "Strong research and analytical skills",
        "Experience in agricultural science and field work",
        "Knowledge of modern farming techniques",
        "Ability to work in outdoor field conditions"
      ],
      benefits: [
        "Competitive salary and research incentives",
        "Health and field insurance coverage",
        "Flexible field timing & research culture",
        "Research publications support",
        "Travel allowance for field roles",
        "Innovation-driven career growth"
      ],
      color: "green"
    }
  };

  const openModal = (jobKey) => {
    setSelectedJob(jobDetails[jobKey]);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <section className="pt-32 pb-20 px-4 sm:px-6">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We're building the future — Join us!
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Encourage visitors to become part of the Next Sphere journey by joining a forward-thinking, AI-driven tech company.
            </p>
          </div>

          {/* Current Openings */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="bg-purple-50 border border-gray-200 rounded-2xl p-6 sm:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
                <p className="text-gray-600 text-base sm:text-lg">Join our dynamic team and shape the future of AI technology</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-200 transition-colors duration-300 overflow-hidden">
                    <img src="/circular.png" alt="Tech" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Tech</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">Software Engineers, AI/ML Engineers, DevOps, Full Stack Developers</p>
                  <button onClick={() => openModal('tech')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Details 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-green-200 transition-colors duration-300 overflow-hidden">
                    <img src="/hr.png" alt="HR" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">HR</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">HR Specialists, Talent Acquisition, Employee Relations</p>
                  <button onClick={() => openModal('hr')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Details 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-purple-200 transition-colors duration-300 overflow-hidden">
                    <img src="/account.png" alt="Accounts" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Accounts</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">Financial Analysts, Accountants, Finance Managers</p>
                  <button onClick={() => openModal('accounts')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Details 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-200 transition-colors duration-300 overflow-hidden">
                    <img src="/operation.png" alt="Operations" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Operations</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">Operations Managers, Process Analysts, Quality Assurance</p>
                  <button onClick={() => openModal('operations')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Details 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-green-200 transition-colors duration-300 overflow-hidden">
                    <img src="/agri.png" alt="Agri Research" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Agri Research</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">Agricultural Scientists, Research Analysts, Field Specialists</p>
                  <button onClick={() => openModal('agri')} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                    View Details 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Future Talent Pipeline */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Future Talent Pipeline</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              "Even if we're not hiring right now, drop your resume — we'll reach out when roles open."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all">
                Submit Resume
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all">
                Join Talent Pool
              </button>
            </div>
          </div>
        </section>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 pt-20">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                    <div className="flex gap-3 mb-4">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">
                        {selectedJob.type}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                        {selectedJob.location}
                      </span>
                      <span className="text-gray-500 text-sm px-3 py-1">{selectedJob.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1 text-sm">›</span>
                        <span className="text-gray-600 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button 
                  onClick={() => openApplicationForm(selectedJob.title)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 pt-20">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Career Application</h2>
                    <p className="text-blue-600 text-lg">Join Our Team Today</p>
                  </div>
                  <button 
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Application Form */}
                <form onSubmit={submitApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={applicationData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter Your Full Name"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Your Email Address"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Resume Upload *</label>
                    <input 
                      type="file" 
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Pass Out Year *</label>
                      <input 
                        type="number" 
                        name="passOutYear"
                        value={applicationData.passOutYear}
                        onChange={handleInputChange}
                        placeholder="2024"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        placeholder="91+"
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Experience</label>
                      <input 
                        type="text" 
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        placeholder="Years"
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Qualification *</label>
                      <input 
                        type="text" 
                        name="qualification"
                        value={applicationData.qualification}
                        onChange={handleInputChange}
                        placeholder="Btech Computer Science"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Position</label>
                      <input 
                        type="text" 
                        name="position"
                        value={applicationData.position}
                        onChange={handleInputChange}
                        placeholder="Position Applied For"
                        className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Cover Letter</label>
                    <textarea 
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you are interested in this position..."
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                  >
                    Submit Application
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm">
                    Fields marked with * are required
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Careers;