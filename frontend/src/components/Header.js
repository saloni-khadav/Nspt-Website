import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/about') return 'About';
    if (path === '/services') return 'Services';
    if (path === '/projects') return 'Projects';
    if (path === '/contact') return 'Contact';
    if (path === '/careers') return 'Careers';
    return 'Home';
  };
  
  const activePage = getActivePage();
  
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <img src="/logo1.png" alt="Next Sphere" className="h-20 w-40" />
          <div className="hidden md:flex items-center bg-white/5 backdrop-blur-md rounded-full px-6 py-2 border border-white/10">
            <Link to="/" className={`px-4 py-2 transition-colors ${activePage === 'Home' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>Home</Link>
            <span className="text-gray-500">|</span>
            <Link to="/about" className={`px-4 py-2 transition-colors ${activePage === 'About' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>About</Link>
            <span className="text-gray-500">|</span>
            <Link to="/services" className={`px-4 py-2 transition-colors ${activePage === 'Services' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>Services</Link>
            <span className="text-gray-500">|</span>
            <Link to="/projects" className={`px-4 py-2 transition-colors ${activePage === 'Projects' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>Projects</Link>
            <span className="text-gray-500">|</span>
            <Link to="/contact" className={`px-4 py-2 transition-colors ${activePage === 'Contact' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>Contact</Link>
            <span className="text-gray-500">|</span>
            <Link to="/careers" className={`px-4 py-2 transition-colors ${activePage === 'Careers' ? 'text-cyan-400 font-semibold' : 'text-white hover:text-cyan-400'}`}>Careers</Link>
          </div>
          <Link to="/admin-login" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;