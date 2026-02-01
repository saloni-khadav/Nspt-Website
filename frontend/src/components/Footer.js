import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left - Main Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Innovate. Build.<br/>
              Transform. Together.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mt-4 sm:mt-6">
              info@nextsphere.co.in<br/>
              +91 9078027948
            </p>
          </div>
          
          {/* Right - Social Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              WhatsApp
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/nsptai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;