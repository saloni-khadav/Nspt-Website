import React from 'react';
import Layout from './Layout';

const Services = () => {
  return (
    <Layout>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900/50 to-emerald-400/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
      
      {/* AI Particle Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Services Hero Section */}
      <section className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1 - HR Software */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">HR Software (Cloud + App)</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                AI-powered HR Automation Platform with attendance automation, punch-in/out sync, payroll, leave tracker, performance reports.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Attendance Automation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Punch-in/out Sync
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Payroll Processing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Performance Reports
                </li>
              </ul>
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                View Demo / Request Access
              </button>
            </div>

            {/* Card 2 - Accounting App */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Accounting App (NextBook)</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Automatic End to End Bookkeeping Using AI, GST Filing, TDS Return, Auto Reconciliation, Balance Sheet Finalise.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  GST Filing
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  TDS Return
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Auto Reconciliation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Balance Sheet Finalise
                </li>
              </ul>
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                View Dashboard / Learn More
              </button>
            </div>

            {/* Card 3 - AI Tools */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Tools (NextSphere AI)</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Predictive analytics, chatbot automation, AI forecasting, sentiment analysis.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Predictive Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Chatbot Automation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  AI Forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Sentiment Analysis
                </li>
              </ul>
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                Explore AI Suite
              </button>
            </div>

            {/* Card 4 - AgriTech */}
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">AgriTech / Drone Solutions</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Drone mapping, soil analysis, crop tracking, smart irrigation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Drone Mapping
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Soil Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Crop Tracking
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Smart Irrigation
                </li>
              </ul>
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
                Explore Agri Innovation
              </button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Services;