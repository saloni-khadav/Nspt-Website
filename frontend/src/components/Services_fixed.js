import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Services = () => {
  const [activeService, setActiveService] = useState('web');
  const [openFaq, setOpenFaq] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [lastHoveredService, setLastHoveredService] = useState(null);
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/api/promotion/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitMessage('Submitted successfully!');
        setEmail('');
        alert('Submitted successfully!');
      } else {
        setSubmitMessage(data.message || 'Error occurred');
      }
    } catch (error) {
      setSubmitMessage('Error occurred. Please try again.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  };
  
  const serviceKeys = ['web', 'ai', 'erp', 'hr', 'consulting', 'appdev'];
  
  const displayService = hoveredService || activeService;
  
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveService(prev => {
          const currentIndex = serviceKeys.indexOf(prev);
          const nextIndex = (currentIndex + 1) % serviceKeys.length;
          return serviceKeys[nextIndex];
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  
  const faqs = [
    {
      question: "What technology services do you provide?",
      answer: "We offer consulting, web and app development, AI solutions, ERP, HR systems, and R&D services for businesses."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary by project scope. Most are completed within agreed schedules after a detailed review."
    },
    {
      question: "Are your services customizable?",
      answer: "Yes, we tailor every solution to your business needs and objectives."
    },
    {
      question: "What is your project workflow?",
      answer: "We consult, define requirements, plan, deliver, and provide ongoing support as needed."
    },
    {
      question: "How do I begin working with you?",
      answer: "Contact us via form or email. We'll arrange a call to discuss your needs and next steps."
    }
  ];
  
  const services = {
    web: {
      title: 'Custom web platforms',
      description: 'Build responsive, scalable digital experiences for your clients and teams.',
      image: '/service-web-dev.png',
      alt: 'Web development workspace'
    },
    ai: {
      title: 'Smart automation tools',
      description: 'Use AI to simplify operations and boost productivity across your business.',
      image: '/service-ai-auto.avif',
      alt: 'AI automation workspace'
    },
    erp: {
      title: 'Unified ERP systems',
      description: 'Connect finance, inventory, and reporting in one integrated platform.',
      image: '/service-4-ERP-accou.png',
      alt: 'ERP accounting workspace'
    },
    hr: {
      title: 'HR technology solutions',
      description: 'Manage hiring, payroll, and engagement with efficient HR tools.',
      image: '/service-hr-rd.jpg',
      alt: 'HR R&D workspace'
    },
    consulting: {
      title: 'Technology consulting',
      description: 'Expert technology consulting and strategic guidance for your business transformation.',
      image: '/service-techno-consult.avif',
      alt: 'Technology consulting workspace'
    },
    appdev: {
      title: 'App development',
      description: 'Custom mobile and desktop application development tailored to your specific needs.',
      image: '/service-app-dev.png',
      alt: 'App development workspace'
    }
  };

  return (
    <Layout activePage="Services" hideFooter={true}>
      {/* White background overlay for this page */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-6 py-12 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Powering<br />
                business<br />
                with smart<br />
                solutions
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Expert technology consulting and services for web, AI, 
                ERP, and HR. We deliver scalable, efficient solutions 
                to optimize your business and support growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Start now
                </button>
                <button 
                  onClick={() => setShowServicesPopup(true)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Our services
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-96">
                <img 
                  src="/service-1.png" 
                  alt="Business meeting with professionals discussing solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-100 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-yellow-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="relative z-10 py-20 " style={{backgroundColor: '#faf9f2'}}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">OUR TECHNOLOGY EXPERTISE</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Empowering business<br />
              with smart solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our full suite of technology services designed to accelerate 
              growth, improve efficiency, and support your business objectives.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Main Image */}
            <div className="relative">
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-80 lg:h-96">
                <img 
                  src={services[displayService].image}
                  alt={services[displayService].alt}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            </div>
            
            {/* Right - Service Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-80 lg:h-96 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{services[displayService].title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {services[displayService].description}
                </p>
              </div>
              <button className="bg-blue-100 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-200 transition-colors font-medium text-lg self-start">
                Learn more
              </button>
            </div>
          </div>
          
          {/* Bottom Services Row - Interactive Tabs */}
          <div className="mt-16 overflow-hidden">
            {/* Service Sections with Top Lines */}
            <div 
              className="flex space-x-4 sm:space-x-6 animate-scroll" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => { 
                setIsHovered(false); 
                if (hoveredService) {
                  setActiveService(hoveredService);
                  setLastHoveredService(hoveredService);
                }
                setHoveredService(null); 
              }}
              style={{
                animation: 'scroll 20s linear infinite',
                animationPlayState: isHovered ? 'paused' : 'running',
                width: window.innerWidth < 640 ? '700%' : 'calc(200% + 24px)',
                transform: hoveredService ? `translateX(-${serviceKeys.indexOf(hoveredService) * (100 / serviceKeys.length)}%)` : undefined
              }}
            >
              {/* First set of services */}
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('web')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-900' : 'text-gray-400'
                }`}>Web development</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  High-performance websites and apps tailored for your business needs.
                </p>
              </div>
              
              {/* Mobile: Show all services continuously */}
              {(() => {
                const allServices = ['web', 'ai', 'erp', 'hr', 'consulting', 'appdev'];
                
                const serviceData = {
                  web: { title: 'Web development', desc: 'High-performance websites and apps.' },
                  ai: { title: 'AI & automation', desc: 'Automate processes efficiently.' },
                  erp: { title: 'ERP & accounting', desc: 'Streamlined business control.' },
                  hr: { title: 'HR & R&D', desc: 'Modern HR platforms.' },
                  consulting: { title: 'Technology consulting', desc: 'Expert technology guidance.' },
                  appdev: { title: 'App development', desc: 'Custom mobile applications.' }
                };
                
                // Show all services twice for seamless loop
                const doubledServices = [...allServices, ...allServices];
                
                return doubledServices.map((serviceKey, index) => (
                  <div key={`${serviceKey}-${index}`} className="flex-1 cursor-pointer min-w-0 px-1 sm:hidden block" onMouseEnter={() => setHoveredService(serviceKey)}>
                    <div className={`border-t-2 mb-2 transition-colors ${
                      displayService === serviceKey ? 'border-gray-900' : 'border-gray-300'
                    }`}></div>
                    <h4 className={`text-xs font-semibold mb-1 transition-colors ${
                      displayService === serviceKey ? 'text-gray-900' : 'text-gray-400'
                    }`}>{serviceData[serviceKey].title}</h4>
                    <p className={`text-xs transition-colors leading-tight ${
                      displayService === serviceKey ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {serviceData[serviceKey].desc}
                    </p>
                  </div>
                ));
              })()}
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('ai')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-900' : 'text-gray-400'
                }`}>AI & automation</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Automate processes and enhance efficiency with intelligent solutions.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('erp')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-900' : 'text-gray-400'
                }`}>ERP & accounting</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Streamlined ERP and accounting tools for better business control.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('hr')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-900' : 'text-gray-400'
                }`}>HR & R&D</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Modern HR platforms and research-driven innovation for your team.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('consulting')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-900' : 'text-gray-400'
                }`}>Technology consulting</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Expert technology consulting and strategic guidance for business transformation.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('appdev')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-900' : 'text-gray-400'
                }`}>App development</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Custom mobile and desktop application development for your business needs.
                </p>
              </div>
              
              {/* Duplicate set for seamless loop - hidden on mobile */}
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('web')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-900' : 'text-gray-400'
                }`}>Web development</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  High-performance websites and apps tailored for your business needs.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('ai')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-900' : 'text-gray-400'
                }`}>AI & automation</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Automate processes and enhance efficiency with intelligent solutions.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('erp')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-900' : 'text-gray-400'
                }`}>ERP & accounting</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Streamlined ERP and accounting tools for better business control.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('hr')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-900' : 'text-gray-400'
                }`}>HR & R&D</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Modern HR platforms and research-driven innovation for your team.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('consulting')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-900' : 'text-gray-400'
                }`}>Technology consulting</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Expert technology consulting and strategic guidance for business transformation.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0 px-2 sm:block hidden" onMouseEnter={() => setHoveredService('appdev')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-base sm:text-lg font-semibold mb-2 sm:mb-3 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-900' : 'text-gray-400'
                }`}>App development</h4>
                <p className={`text-xs sm:text-sm transition-colors leading-relaxed ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Custom mobile and desktop application development for your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rest of the component remains the same... */}
      
    </Layout>
  );
};

export default Services;