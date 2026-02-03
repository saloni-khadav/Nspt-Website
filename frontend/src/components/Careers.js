import React, { useState } from 'react';
import Layout from './Layout';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showTalentPoolForm, setShowTalentPoolForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [talentPoolData, setTalentPoolData] = useState({
    email: '',
    position: '',
    customPosition: ''
  });
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

  const submitTalentPool = async (e) => {
    e.preventDefault();
    
    const finalPosition = talentPoolData.position === 'Other' ? talentPoolData.customPosition : talentPoolData.position;
    
    try {
      const response = await fetch('http://localhost:5000/api/promotion/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: talentPoolData.email,
          position: finalPosition
        })
      });
      const result = await response.json();
      if (response.ok) {
        setShowTalentPoolForm(false);
        setShowSuccessMessage(true);
        setTalentPoolData({ email: '', position: '', customPosition: '' });
        setTimeout(() => setShowSuccessMessage(false), 4000);
      } else {
        toast.error(result.message, {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
      }
    } catch (error) {
      toast.error('Error joining talent pool. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
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
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response. Backend server may not be running.');
      }
      return response.json();
    })
    .then(data => {
      if (data.message) {
        toast.success('Application submitted successfully! ✅', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'colored',
        });
        setShowApplicationForm(false);
        setSelectedJob(null); // Close job details modal too
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
      if (error.message.includes('Backend server may not be running')) {
        toast.error('Backend server is not running. Please start the server first.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
      } else {
        toast.error('Failed to submit application. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });
      }
    });
  };

  const openApplicationForm = (position) => {
    setApplicationData({ ...applicationData, position });
    setShowApplicationForm(true);
  };

  const jobDetails = {
   
    
    devops: {
      title: "DevOps Engineer",
      type: "Intern",
      location: "Remote",
      department: "Technology",
      date: "2 feb 2026",
      description: "Looking for a skilled DevOps Engineer to streamline development processes, automate deployments, and maintain robust CI/CD pipelines.",
      requirements: [
         "AWS knowledge required",
         
         "Recent passout or last semester students welcome",
        "Experience with CI/CD tools (Jenkins, GitLab, GitHub Actions)",
        
        "Proficiency in scripting languages (Bash, Python)",
        "Experience with monitoring and logging tools"
       
       
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health insurance",
        "Flexible timing & modern work environment",
        "DevOps certifications support",
        "Latest automation tools access",
        "Career growth opportunities"
      ],
      color: "green"
    },
    softwareEngineer: {
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
      department: "Technology",
      date: "2 feb 2026",
      description: "Looking for a passionate Software Engineer to build innovative applications, work with modern frameworks, and contribute to cutting-edge projects.",
      requirements: [
        "2-3 years of experience required",
        "Strong programming skills in multiple languages",
        "Experience with modern frameworks and libraries",
        "Knowledge of software design patterns",
        "Ability to work in collaborative team environment"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Health and accidental insurance",
        "Flexible timing & innovative culture",
        "Technical training programs",
        "Modern development tools",
        "Fast-track career advancement"
      ],
      color: "blue"
    },
   
    frontendIntern: {
      title: "Frontend Developer",
      type: "Intern",
      location: "Remote",
      department: "Technology",
      date: "2 feb 2026",
      description: "Looking for an enthusiastic Frontend Intern to work on user interfaces, learn modern web technologies, and contribute to exciting projects.",
      requirements: [
        "Basic knowledge of HTML, CSS, JavaScript",
        "Familiarity with React or similar frameworks",
        "Understanding of responsive design principles",
        "Eagerness to learn and adapt quickly"
      ],
      benefits: [
        "Competitive internship stipend",
        "Remote work flexibility",
        "Mentorship from experienced developers",
        "Real project experience",
        "Potential for full-time offer",
        "Latest development tools access"
      ],
      color: "cyan"
    },
    seo: {
      title: "SEO Specialist",
      type: "Full-time",
      location: "Remote",
      department: "Marketing",
      date: "2 feb 2026",
      description: "Looking for an experienced SEO Specialist to optimize website visibility, improve search rankings, and drive organic traffic growth.",
      requirements: [
        "2 years of experience in SEO required",
        "Strong knowledge of SEO tools and techniques",
        "Experience with Google Analytics and Search Console",
        "Understanding of content marketing strategies",
        "Knowledge of technical SEO and website optimization",
        "Expertise in keyword research and analysis",
        "Experience with voice search optimization",
        "Knowledge of Google algorithm updates and ranking factors"
      ],
      benefits: [
        "Competitive salary and performance incentives",
        "Health and wellness benefits",
        "Flexible working arrangements",
        "SEO certifications support",
        "Access to premium SEO tools",
        "Growth-oriented career path"
      ],
      color: "indigo"
    },
    salesExecutive: {
      title: "Sales Executive",
      type: "Full-time",
      location: "Remote",
      department: "Sales",
      date: "2 feb 2026",
      description: "Looking for a dynamic Sales Executive to drive business growth, build client relationships, and achieve sales targets in the technology sector.",
      requirements: [
        "2 years of experience in tech fields required",
        "Strong communication and negotiation skills",
        "Experience in B2B sales or client management",
        "Understanding of technology products/services",
        "Ability to meet targets and work under pressure"
      ],
      benefits: [
        "Competitive salary and commission structure",
        "Health and travel insurance",
        "Performance-based bonuses",
        "Sales training and development",
        "Travel allowance and incentives",
        "Leadership development opportunities"
      ],
      color: "red"
    },
    accounts: {
      title: "Financial Analyst",
      type: "Intern",
      location: "Remote",
      department: "Finance",
      date: "2 feb 2026",
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
      department: "Operations",
      date: "2 feb 2026",
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
    }
  };

  // Filter jobs based on selected filters
  const filteredJobs = Object.entries(jobDetails).filter(([key, job]) => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

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
              Join us. Build the future
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
                <p className="text-gray-600 text-base sm:text-lg mb-6">Join our dynamic team and shape the future of AI technology</p>
                
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">Department:</label>
                    <select 
                      value={selectedDepartment} 
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                    >
                      <option value="All">All Departments</option>
                      <option value="Technology">Technology</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Sales">Sales</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">Location:</label>
                    <select 
                      value={selectedLocation} 
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                    >
                      <option value="All">All Locations</option>
                      <option value="Remote">Remote</option>
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredJobs.map(([key, job]) => (
                  <div key={key} className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animated-border">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors duration-300 overflow-hidden ${
                      job.color === 'green' ? 'bg-green-100 group-hover:bg-green-200' :
                      job.color === 'blue' ? 'bg-blue-100 group-hover:bg-blue-200' :
                      job.color === 'cyan' ? 'bg-cyan-100 group-hover:bg-cyan-200' :
                      job.color === 'indigo' ? 'bg-indigo-100 group-hover:bg-indigo-200' :
                      job.color === 'red' ? 'bg-red-100 group-hover:bg-red-200' :
                      job.color === 'purple' ? 'bg-purple-100 group-hover:bg-purple-200' :
                      job.color === 'orange' ? 'bg-orange-100 group-hover:bg-orange-200' :
                      'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <img src={key === 'devops' ? '/setting.png' : key === 'accounts' || key === 'accountsIntern' ? '/account.png' : key === 'operations' ? '/operation.png' : '/circular.png'} alt={job.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {key === 'devops' ? 'CI/CD Pipelines, Automation, Infrastructure Management' :
                       key === 'softwareEngineer' ? 'Full Stack Development, Modern Frameworks, API Design' :
                       key === 'frontendIntern' ? 'React Development, UI/UX Design, Modern Web Technologies' :
                       key === 'seo' ? 'Search Optimization, Content Strategy, Analytics' :
                       key === 'salesExecutive' ? 'Business Development, Client Relations, Target Achievement' :
                       key === 'accounts' ? 'Financial Analysts, Accountants, Finance Managers' :
                       key === 'operations' ? 'Operations Managers, Process Analysts, Quality Assurance' :
                       'Technology Solutions and Innovation'}
                    </p>
                    <button onClick={() => openModal(key)} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      View Details 
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
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
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/nsptai', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all"
              >
                Subscribe
              </button>
              <button 
                onClick={() => setShowTalentPoolForm(true)}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all"
              >
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

        {/* Talent Pool Form Modal */}
        {showTalentPoolForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full shadow-lg">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Talent Pool</h2>
                    <p className="text-gray-600">We'll reach out when roles open</p>
                  </div>
                  <button 
                    onClick={() => setShowTalentPoolForm(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold transition-colors"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={submitTalentPool} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email *</label>
                    <input 
                      type="email" 
                      value={talentPoolData.email}
                      onChange={(e) => setTalentPoolData({...talentPoolData, email: e.target.value})}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Position *</label>
                    <select 
                      value={talentPoolData.position}
                      onChange={(e) => setTalentPoolData({...talentPoolData, position: e.target.value, customPosition: ''})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    >
                      <option value="">Select Position</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Frontend Developer">Frontend Developer</option>
                      <option value="Backend Developer">Backend Developer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="SEO Specialist">SEO Specialist</option>
                      <option value="Sales Executive">Sales Executive</option>
                      <option value="Financial Analyst">Financial Analyst</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {talentPoolData.position === 'Other' && (
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Specify Position *</label>
                      <input 
                        type="text" 
                        value={talentPoolData.customPosition}
                        onChange={(e) => setTalentPoolData({...talentPoolData, customPosition: e.target.value})}
                        placeholder="Enter your desired position"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      />
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Success Message Popup */}
        {showSuccessMessage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for connecting! We'll reach out when suitable roles open.
              </p>
              <button 
                onClick={() => setShowSuccessMessage(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Careers;