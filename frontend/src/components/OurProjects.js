import React from 'react';
import Layout from './Layout';

const OurProjects = () => {
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

      <div className="bg-gradient-to-br from-black/50 via-slate-900/50 to-emerald-400/30 relative z-10">
        <section className="pt-32 pb-16 px-6 relative">
          {/* White circular background behind heading */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">Our Projects</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Showcasing our AI-powered solutions: 10+ Clients | 5+ Farmers Network | 15+ Business Teams | 3 Smart Platforms
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=256&fit=crop&crop=center" alt="NextBook Accounting" className="w-full h-64 object-cover rounded-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Live</span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">01</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">NextBook Accounting</h3>
                <p className="text-xl text-gray-300 mb-6">Automated accounting platform for MSMEs</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm">Django</span>
                  <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm">Power BI</span>
                </div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">View Details →</a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=256&fit=crop&crop=center" alt="HR Portal" className="w-full h-64 object-cover rounded-xl" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">In Testing</span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">02</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">HR Portal</h3>
                <p className="text-xl text-gray-300 mb-6">Attendance & Payroll Automation</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-teal-500/20 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm">Flutter</span>
                  <span className="bg-teal-500/20 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm">Node.js</span>
                </div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">View Details →</a>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=256&fit=crop&crop=center" alt="AgriDrone Project" className="w-full h-64 object-cover rounded-xl" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Pilot Phase</span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">03</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">AgriDrone Project</h3>
                <p className="text-xl text-gray-300 mb-6">Drone-based crop monitoring in Odisha</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm">AI</span>
                  <span className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm">IoT</span>
                </div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">View Details →</a>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurProjects;