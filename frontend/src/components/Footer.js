import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900/10 via-slate-900/50 to-emerald-400/20 border-t border-white/20 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <img src="/logo1.png" alt="Next Sphere" className="h-20 w-40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Next Sphere Product & Technology</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">Empowering businesses with intelligent automation and AI solutions for the future.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-white font-bold text-sm">f</a>
              <a href="#" className="w-10 h-10 bg-black border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors text-white font-bold text-sm">X</a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white font-bold text-sm">in</a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors text-white text-sm">▶</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-cyan-400">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <span>+91-90780 27948</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✉️</span>
                <span>info@nextsphere.co.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📍</span>
                <span>Gurgaon, Haryana, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
          © 2025 Next Sphere Product & Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;