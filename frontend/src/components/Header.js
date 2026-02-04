import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSupportDropdown(false);
      }
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setSolutionsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo1.png" alt="NextSphere" className="w-25 h-12 cursor-pointer" />
            </Link>
          </div>
          
          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative" ref={solutionsDropdownRef}>
              <div 
                className="flex items-center space-x-1 cursor-pointer" 
                onClick={() => setSolutionsDropdown(!solutionsDropdown)}
              >
                <span className="text-gray-700">Solutions</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {solutionsDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="flex">
                    {/* Left side - Services Grid */}
                    <div className="flex-1 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        {/* WEB DEVELOPMENT */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">WEB DEVELOPMENT</h3>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Website Design</h4>
                                <p className="text-xs text-gray-600">Custom websites for your business needs.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">App Development</h4>
                                <p className="text-xs text-gray-600">Build scalable mobile and web apps.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">AI Integration</h4>
                                <p className="text-xs text-gray-600">Enhance workflows with smart automation.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* BUSINESS TOOLS */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">BUSINESS TOOLS</h3>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">ERP Solutions</h4>
                                <p className="text-xs text-gray-600">Streamline accounting and operations.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">HR Applications</h4>
                                <p className="text-xs text-gray-600">Manage teams and processes easily.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Consulting</h4>
                                <p className="text-xs text-gray-600">Expert advice for digital growth.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* INNOVATION */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">INNOVATION</h3>
                          <div className="space-y-4">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">R&D Services</h4>
                                <p className="text-xs text-gray-600">Drive progress with new technologies.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Cloud Services</h4>
                                <p className="text-xs text-gray-600">Secure, scalable cloud solutions.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center mt-0.5 group-hover:bg-blue-100 transition-colors">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">Support</h4>
                                <p className="text-xs text-gray-600">Ongoing help for your projects.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side - CTA Section */}
                    <div className="w-64 bg-gray-900 text-white rounded-r-lg m-6 self-center">
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2 leading-tight">
                          Transform your business with technology
                        </h3>
                        <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                          Discover tailored solutions for digital success.
                        </p>
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-between group">
                          <span>Contact</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600">Careers</Link>
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center space-x-1 cursor-pointer" 
                onClick={() => setSupportDropdown(!supportDropdown)}
              >
                <span className="text-gray-700">Support</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {supportDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link 
                    to="/help-center" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    onClick={() => setSupportDropdown(false)}
                  >
                    Help Center
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 border-t border-gray-100"
                    onClick={() => setSupportDropdown(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Get Started Button */}
          <div className="flex items-center space-x-4">
            <Link to="/admin-login" className="hidden sm:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get started
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <div>
              <button 
                onClick={() => setSolutionsDropdown(!solutionsDropdown)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 py-2"
              >
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <div className="text-sm text-gray-600">Website Design</div>
                  <div className="text-sm text-gray-600">App Development</div>
                  <div className="text-sm text-gray-600">AI Integration</div>
                  <div className="text-sm text-gray-600">ERP Solutions</div>
                </div>
              )}
            </div>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 py-2">About</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 py-2">Services</Link>
            <Link to="/careers" className="block text-gray-700 hover:text-blue-600 py-2">Careers</Link>
            <div>
              <button 
                onClick={() => setSupportDropdown(!supportDropdown)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 py-2"
              >
                <span>Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {supportDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/help-center" className="block text-sm text-gray-600 hover:text-blue-600">Help Center</Link>
                  <Link to="/contact" className="block text-sm text-gray-600 hover:text-blue-600">Contact Us</Link>
                </div>
              )}
            </div>
            <Link to="/admin-login" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center mt-4">
              Get started
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Header;