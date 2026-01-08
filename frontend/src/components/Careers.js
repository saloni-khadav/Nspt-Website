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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-emerald-400/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="bg-gradient-to-br from-black/30 via-slate-900/50 to-emerald-600/50 min-h-screen relative z-10">
        <section className="pt-32 pb-20 px-6">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto text-center mb-16 relative">
            {/* White circular background behind heading */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight">
              We're building the future — Join us!
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Encourage visitors to become part of the Next Sphere journey by joining a forward-thinking, AI-driven tech company.
            </p>
            </div>
          </div>

          {/* Current Openings */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Current Openings</h2>
                <p className="text-gray-400 text-lg">Join our dynamic team and shape the future of AI technology</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group relative backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-400/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-500 animated-border animated-border-blue overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img src="/circular.png" alt="Tech" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Tech</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">Software Engineers, AI/ML Engineers, DevOps, Full Stack Developers</p>
                    <button onClick={() => openModal('tech')} className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="group relative backdrop-blur-md bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-2 border-emerald-400/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-green-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-500 animated-border animated-border-green overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img src="/hr.png" alt="HR" className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">HR</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">HR Specialists, Talent Acquisition, Employee Relations</p>
                    <button onClick={() => openModal('hr')} className="inline-flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="group relative backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-400/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-indigo-500/20 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-500 animated-border animated-border-purple overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img src="/account.png" alt="Accounts" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Accounts</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">Financial Analysts, Accountants, Finance Managers</p>
                    <button onClick={() => openModal('accounts')} className="inline-flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="group relative backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-400/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-500 animated-border animated-border-orange overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img src="/operation.png" alt="Operations" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Operations</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">Operations Managers, Process Analysts, Quality Assurance</p>
                    <button onClick={() => openModal('operations')} className="inline-flex items-center gap-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="group relative backdrop-blur-md bg-gradient-to-br from-green-500/10 to-teal-500/10 border-2 border-green-400/50 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-green-500/20 hover:to-teal-500/20 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-500 animated-border animated-border-green overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img src="/agri.png" alt="Agri Research" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Agri Research</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">Agricultural Scientists, Research Analysts, Field Specialists</p>
                    <button onClick={() => openModal('agri')} className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Talent Pipeline */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Future Talent Pipeline</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              "Even if we're not hiring right now, drop your resume — we'll reach out when roles open."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                Submit Resume
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 backdrop-blur-md transition-all">
                Join Talent Pool
              </button>
            </div>
          </div>
        </section>

        {/* Job Details Modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border-2 border-emerald-400/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedJob.title}</h2>
                    <div className="flex gap-3 mb-4">
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium border border-yellow-400/30">
                        {selectedJob.type}
                      </span>
                      <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium border border-purple-400/30">
                        {selectedJob.location}
                      </span>
                      <span className="text-gray-400 text-sm px-3 py-1">{selectedJob.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Requirements:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.requirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1 text-sm">›</span>
                        <span className="text-gray-300 text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedJob.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button 
                  onClick={() => openApplicationForm(selectedJob.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border-2 border-emerald-400/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Career Application</h2>
                    <p className="text-emerald-400 text-lg">Join Our Team Today</p>
                  </div>
                  <button 
                    onClick={() => setShowApplicationForm(false)}
                    className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Application Form */}
                <form onSubmit={submitApplication} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={applicationData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter Your Full Name"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Your Email Address"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Resume Upload *</label>
                    <input 
                      type="file" 
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-600 file:text-white hover:file:bg-emerald-700 transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Pass Out Year *</label>
                      <input 
                        type="number" 
                        name="passOutYear"
                        value={applicationData.passOutYear}
                        onChange={handleInputChange}
                        placeholder="2024"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        placeholder="91+"
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Experience</label>
                      <input 
                        type="text" 
                        name="experience"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        placeholder="Years"
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Qualification *</label>
                      <input 
                        type="text" 
                        name="qualification"
                        value={applicationData.qualification}
                        onChange={handleInputChange}
                        placeholder="Btech Computer Science"
                        required
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Position</label>
                      <input 
                        type="text" 
                        name="position"
                        value={applicationData.position}
                        onChange={handleInputChange}
                        placeholder="Position Applied For"
                        className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Cover Letter</label>
                    <textarea 
                      name="coverLetter"
                      value={applicationData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you are interested in this position..."
                      rows="4"
                      className="w-full bg-transparent border-b-2 border-gray-600 focus:border-emerald-400 outline-none py-3 text-white placeholder-gray-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  >
                    Submit Application
                  </button>
                  
                  <p className="text-center text-gray-400 text-sm">
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