import React from 'react';
import Layout from './Layout';

const AboutUs = () => {
  return (
    <Layout>
      {/* About Us Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-8">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
              
              {/* Vertical Divider */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
              
              {/* Our Vision */}
              <div className="text-center lg:pr-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                  👁️
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To revolutionize business operations with smart, automated, and data-driven solutions accessible to everyone — from startups to enterprises.
                </p>
              </div>

              {/* Our Mission */}
              <div className="text-center lg:pl-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl">
                  🌐
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We aim to bridge the gap between technology and real-world challenges — empowering businesses, innovators, and industries through intelligent ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;