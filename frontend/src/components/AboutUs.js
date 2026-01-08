import React from 'react';
import Layout from './Layout';

const AboutUs = () => {
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

      {/* About Us Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-8 leading-tight">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-500 shadow-2xl shadow-cyan-500/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              
              {/* Animated Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
              
              {/* Our Vision */}
              <div className="text-center lg:pr-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl animate-pulse hover:animate-bounce transition-all duration-300 group-hover:scale-110 shadow-lg shadow-cyan-400/30">
                  👁️
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform">Our Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  To revolutionize business operations with smart, automated, and data-driven solutions accessible to everyone — from startups to enterprises.
                </p>
              </div>

              {/* Our Mission */}
              <div className="text-center lg:pl-8 group">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl animate-pulse hover:animate-spin transition-all duration-300 group-hover:scale-110 shadow-lg shadow-teal-400/30">
                  🌐
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  We aim to bridge the gap between technology and real-world challenges — empowering businesses, innovators, and industries through intelligent ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl group-hover:animate-bounce overflow-hidden">
                <img src="/innovation.png" alt="Innovation" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 group-hover:scale-105 transition-transform">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">Pushing boundaries with cutting-edge AI and automation solutions</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl group-hover:animate-pulse overflow-hidden">
                <img src="/partnership.png" alt="Partnership" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-teal-400 mb-4 group-hover:scale-105 transition-transform">Partnership</h3>
              <p className="text-gray-300 leading-relaxed">Building lasting relationships with clients and communities</p>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl group-hover:animate-spin overflow-hidden">
                <img src="/excellence.png" alt="Excellence" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-4 group-hover:scale-105 transition-transform">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">Delivering superior quality in every solution we create</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;