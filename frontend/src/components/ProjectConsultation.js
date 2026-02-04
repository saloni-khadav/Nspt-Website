import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const ProjectConsultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    projectType: '',
    projectDescription: '',
    expectedTimeline: '',
    estimatedBudget: '',
    requiredServices: {
      'Website Design & Development': false,
      'UI/UX Design': false,
      'App Development': false,
      'ERP Solutions': false,
      'AI Integration': false,
      'HR Applications': false,
      'Cloud Services': false,
      'SEO': false,
      'Digital Marketing': false,
      'R&D Services': false,
      'Consulting': false,
      'Technical Support': false,
      'Other': false
    },
    agreeToContact: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      requiredServices: {
        ...prev.requiredServices,
        [service]: !prev.requiredServices[service]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/project-consultation/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Project consultation request submitted successfully!');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          companySize: '',
          projectType: '',
          projectDescription: '',
          expectedTimeline: '',
          estimatedBudget: '',
          requiredServices: {
            'Website Design & Development': false,
            'UI/UX Design': false,
            'App Development': false,
            'ERP Solutions': false,
            'AI Integration': false,
            'HR Applications': false,
            'Cloud Services': false,
            'SEO': false,
            'Digital Marketing': false,
            'R&D Services': false,
            'Consulting': false,
            'Technical Support': false,
            'Other': false
          },
          agreeToContact: false
        });
      } else {
        alert(data.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <Layout activePage="Project Consultation" hideFooter={true}>
      <div className="min-h-screen bg-gray-50 py-12 pt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Form Section */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Let's Talk About Your Project
              </h1>
              <p className="text-gray-600 mb-8">
                Share your requirements and our team will connect with you shortly.
              </p>

              <form onSubmit={handleSubmit} id="consultation-form" className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXX XXXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Your company / organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      required
                    />
                  </div>
                </div>

                {/* Services and Company Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Required Services <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-3 max-h-64 overflow-y-auto border border-gray-300 rounded-lg p-4">
                      {Object.entries(formData.requiredServices).map(([service, checked]) => (
                        <label key={service} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleServiceChange(service)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Company Size
                    </label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select project type</option>
                    <option value="New Project">New Project</option>
                    <option value="Existing System Enhancement">Existing System Enhancement</option>
                    <option value="Maintenance & Support">Maintenance & Support</option>
                    <option value="Consulting / Strategy">Consulting / Strategy</option>
                    <option value="Proof of Concept (PoC)">Proof of Concept (PoC)</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your requirements, goals, or challenges..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                  />
                </div>

                {/* Timeline and Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Expected Timeline
                    </label>
                    <select
                      name="expectedTimeline"
                      value={formData.expectedTimeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate">Immediate</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="6+ Months">6+ Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    >
                      <option value="">Select budget</option>
                      <option value="₹50K-₹1L">₹50K-₹1L</option>
                      <option value="₹1L-₹5L">₹1L-₹5L</option>
                      <option value="₹5L-₹10L">₹5L-₹10L</option>
                      <option value="₹10L+">₹10L+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                {/* Agreement Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={(e) => setFormData(prev => ({ ...prev, agreeToContact: e.target.checked }))}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                  />
                  <label htmlFor="agreeToContact" className="text-sm text-gray-600">
                    I agree to be contacted by Next Sphere Product & Technology regarding my inquiry.
                  </label>
                </div>
              </form>
            </div>

            {/* Right CTA Section */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 h-fit">
              <h2 className="text-3xl font-bold mb-4 leading-tight">
                Transform Your Business with Technology
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Discover tailored digital solutions designed to scale, secure, and support your long-term growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextsphere.co.in" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@nextsphere.co.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <a href="tel:+919078027948" className="text-gray-300 hover:text-white transition-colors">
                    +91 9078027948
                  </a>
                </div>
              </div>

              <button 
                type="submit"
                form="consultation-form"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <span>Submit Request</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="text-gray-400 text-sm mt-4 text-center">
                We usually respond within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectConsultation;