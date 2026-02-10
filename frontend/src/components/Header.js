import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './animated-border.css';

const Header = () => {
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [mobileSolutionsDropdown, setMobileSolutionsDropdown] = useState(false);
  const [mobileSupportDropdown, setMobileSupportDropdown] = useState(false);
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
      <div className="max-w-full mx-auto px-16">
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
                <div className="absolute top-full -right-80 mt-2 w-[85vw] lg:w-[1200px] max-w-[1200px] bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[750px] overflow-auto custom-scrollbar">
                  <style jsx>{`
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 8px;
                      height: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: #f1f1f1;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: #ffffff;
                      border-radius: 4px;
                      border: 1px solid #e5e5e5;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: #f5f5f5;
                    }
                  `}</style>
                  <div className="flex min-w-[700px] lg:min-w-[1000px]">
                    {/* Left side - Services Grid */}
                    <div className="flex-1 p-4 lg:p-6 overflow-y-auto max-h-[700px] custom-scrollbar">
                      <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 min-w-[600px] lg:min-w-[800px]">
                        {/* WEB & DIGITAL SOLUTIONS */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Web & Digital Solutions</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Website Design & Development</h4>
                                <p className="text-xs text-gray-600">Custom, responsive websites built for performance, security, and scalability.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">UI/UX Design</h4>
                                <p className="text-xs text-gray-600">User-centric interface and experience design that improves engagement and conversions.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">App Development</h4>
                                <p className="text-xs text-gray-600">Scalable mobile and web applications for modern business needs.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">SEO (Search Engine Optimization)</h4>
                                <p className="text-xs text-gray-600">Technical and content SEO to improve visibility, rankings, and organic growth.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Digital Marketing</h4>
                                <p className="text-xs text-gray-600">Data-driven marketing strategies including social media, paid ads, and content marketing.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* AI, DATA & AUTOMATION */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">AI, Data & Automation</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">AI Integration</h4>
                                <p className="text-xs text-gray-600">Intelligent automation, AI models, and smart workflows tailored to your business.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Data Analytics & Dashboards</h4>
                                <p className="text-xs text-gray-600">Business intelligence dashboards and analytics for informed decision-making.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Process Automation</h4>
                                <p className="text-xs text-gray-600">Automate repetitive tasks using AI, RPA, and workflow tools.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Chatbots & Virtual Assistants</h4>
                                <p className="text-xs text-gray-600">AI-powered customer support and internal assistance solutions.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* BUSINESS & ENTERPRISE SOLUTIONS */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Business & Enterprise Solutions</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">ERP Solutions</h4>
                                <p className="text-xs text-gray-600">Integrated ERP systems for finance, operations, inventory, and reporting.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">HR Applications</h4>
                                <p className="text-xs text-gray-600">Smart HR platforms for recruitment, payroll, performance, and employee management.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">CRM Solutions</h4>
                                <p className="text-xs text-gray-600">Customer relationship management systems to improve sales and customer engagement.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Accounting & Finance Systems</h4>
                                <p className="text-xs text-gray-600">Custom accounting, billing, invoicing, and compliance solutions.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        

                        {/* INNOVATION & ENGINEERING */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Innovation & Engineering</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">R&D Services</h4>
                                <p className="text-xs text-gray-600">Research, prototyping, and development of future-ready technology solutions.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Product Engineering</h4>
                                <p className="text-xs text-gray-600">End-to-end product design, development, and scaling.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">IoT Solutions</h4>
                                <p className="text-xs text-gray-600">Smart device integration and real-time monitoring systems.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* CONSULTING & SUPPORT */}
                        <div>
                          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Consulting & Support</h3>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Technology Consulting</h4>
                                <p className="text-xs text-gray-600">Strategic guidance on digital transformation, architecture, and technology adoption.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">IT Consulting</h4>
                                <p className="text-xs text-gray-600">Infrastructure planning, system audits, and IT modernization.</p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-2 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 group cursor-pointer animated-border-hover">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <div>
                                <h4 className="font-medium text-gray-900 text-xs mb-1 group-hover:text-blue-600 transition-colors">Technical Support & Maintenance</h4>
                                <p className="text-xs text-gray-600">Ongoing support, monitoring, and maintenance to ensure optimal system performance.</p>
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
                        <Link to="/project-consultation" className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-between group">
                          <span>Contact</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
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
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
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
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
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
                onClick={() => setMobileSolutionsDropdown(!mobileSolutionsDropdown)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 py-2"
              >
                <span>Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSolutionsDropdown && (
                <div className="pl-9 mt-2 space-y-3 max-h-64 overflow-y-auto">
                  <div>
                    <div className="text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2">Web & Digital Solutions</div>
                    <div className="space-y-1 pl-2">
                      <div className="text-sm text-gray-600">Website Design & Development</div>
                      <div className="text-sm text-gray-600">UI/UX Design</div>
                      <div className="text-sm text-gray-600">App Development</div>
                      <div className="text-sm text-gray-600">SEO (Search Engine Optimization)</div>
                      <div className="text-sm text-gray-600">Digital Marketing</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2">AI, Data & Automation</div>
                    <div className="space-y-1 pl-2">
                      <div className="text-sm text-gray-600">AI Integration</div>
                      <div className="text-sm text-gray-600">Data Analytics & Dashboards</div>
                      <div className="text-sm text-gray-600">Process Automation</div>
                      <div className="text-sm text-gray-600">Chatbots & Virtual Assistants</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2">Business & Enterprise Solutions</div>
                    <div className="space-y-1 pl-2">
                      <div className="text-sm text-gray-600">ERP Solutions</div>
                      <div className="text-sm text-gray-600">HR Applications</div>
                      <div className="text-sm text-gray-600">CRM Solutions</div>
                      <div className="text-sm text-gray-600">Accounting & Finance Systems</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2">Innovation & Engineering</div>
                    <div className="space-y-1 pl-2">
                      <div className="text-sm text-gray-600">R&D Services</div>
                      <div className="text-sm text-gray-600">Product Engineering</div>
                      <div className="text-sm text-gray-600">IoT Solutions</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-black uppercase tracking-wider mb-2 pl-2">Consulting & Support</div>
                    <div className="space-y-1 pl-2">
                      <div className="text-sm text-gray-600">Technology Consulting</div>
                      <div className="text-sm text-gray-600">IT Consulting</div>
                      <div className="text-sm text-gray-600">Technical Support & Maintenance</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 py-2">About</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 py-2">Services</Link>
            <Link to="/careers" className="block text-gray-700 hover:text-blue-600 py-2">Careers</Link>
            <div>
              <button 
                onClick={() => setMobileSupportDropdown(!mobileSupportDropdown)}
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 py-2"
              >
                <span>Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSupportDropdown && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/help-center" className="block text-sm text-gray-600 hover:text-blue-600">Help Center</Link>
                  <Link to="/contact" className="block text-sm text-gray-600 hover:text-blue-600">Contact Us</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Header;
