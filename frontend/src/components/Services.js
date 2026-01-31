import React, { useState, useEffect } from 'react';
import Layout from './Layout';

const Services = () => {
  const [activeService, setActiveService] = useState('web');
  const [openFaq, setOpenFaq] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [lastHoveredService, setLastHoveredService] = useState(null);
  
  const serviceKeys = ['web', 'ai', 'erp', 'hr', 'cloud', 'consulting', 'appdev'];
  
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
      answer: "Contact us via form or email. We’ll arrange a call to discuss your needs and next steps."
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
    cloud: {
      title: 'Cloud services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      image: '/service-cloud-service.jpg',
      alt: 'Cloud services workspace'
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
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
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
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
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
              className="flex space-x-6 animate-scroll" 
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
                width: 'calc(200% + 24px)',
                transform: hoveredService ? `translateX(-${serviceKeys.indexOf(hoveredService) * (100 / serviceKeys.length)}%)` : undefined
              }}
            >
              {/* First set of services */}
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('web')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-900' : 'text-gray-400'
                }`}>Web development</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  High-performance websites and apps tailored for your business needs.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('ai')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-900' : 'text-gray-400'
                }`}>AI & automation</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Automate processes and enhance efficiency with intelligent solutions.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('erp')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-900' : 'text-gray-400'
                }`}>ERP & accounting</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Streamlined ERP and accounting tools for better business control.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('hr')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-900' : 'text-gray-400'
                }`}>HR & R&D</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Modern HR platforms and research-driven innovation for your team.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('cloud')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'text-gray-900' : 'text-gray-400'
                }`}>Cloud services</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Scalable cloud infrastructure and migration services for modern businesses.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('consulting')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-900' : 'text-gray-400'
                }`}>Technology consulting</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Expert technology consulting and strategic guidance for business transformation.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('appdev')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-900' : 'text-gray-400'
                }`}>App development</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Custom mobile and desktop application development for your business needs.
                </p>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('web')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-900' : 'text-gray-400'
                }`}>Web development</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'web' || (!hoveredService && displayService === 'web') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  High-performance websites and apps tailored for your business needs.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('ai')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-900' : 'text-gray-400'
                }`}>AI & automation</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'ai' || (!hoveredService && displayService === 'ai') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Automate processes and enhance efficiency with intelligent solutions.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('erp')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-900' : 'text-gray-400'
                }`}>ERP & accounting</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'erp' || (!hoveredService && displayService === 'erp') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Streamlined ERP and accounting tools for better business control.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('hr')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-900' : 'text-gray-400'
                }`}>HR & R&D</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'hr' || (!hoveredService && displayService === 'hr') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Modern HR platforms and research-driven innovation for your team.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('cloud')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'text-gray-900' : 'text-gray-400'
                }`}>Cloud services</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'cloud' || (!hoveredService && displayService === 'cloud') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Scalable cloud infrastructure and migration services for modern businesses.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('consulting')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-900' : 'text-gray-400'
                }`}>Technology consulting</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'consulting' || (!hoveredService && displayService === 'consulting') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Expert technology consulting and strategic guidance for business transformation.
                </p>
              </div>
              
              <div className="flex-1 cursor-pointer min-w-0" onMouseEnter={() => setHoveredService('appdev')}>
                <div className={`border-t-2 mb-4 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'border-gray-900' : 'border-gray-300'
                }`}></div>
                <h4 className={`text-lg font-semibold mb-3 transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-900' : 'text-gray-400'
                }`}>App development</h4>
                <p className={`text-sm transition-colors ${
                  hoveredService === 'appdev' || (!hoveredService && displayService === 'appdev') ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  Custom mobile and desktop application development for your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <div className="relative z-10 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-32">
          {/* Testimonial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Quote */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Seamless solutions. Proven impact.
              </h2>
            </div>
            
            {/* Right - Testimonial */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-12">
                The team expertly integrated our ERP system, optimizing workflows and 
                boosting productivity. Communication was clear, timelines were met, and 
                the approach fit our business requirements.
              </p>
            </div>
          </div>
          
          {/* Profile and Company - Below testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                <img 
                  src="/girl-img.png" 
                  alt="Jordan Ellis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-semibold">Jordan Ellis</h4>
                <p className="text-gray-400 text-sm">Head of Business Operations</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 lg:justify-start">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">©</span>
              </div>
              <span className="text-white font-semibold">360LAB</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Statistics Section - White Background */}
      <div className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">200K</h3>
              <p className="text-gray-600 text-sm">Projects launched worldwide</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 text-sm">Client satisfaction achieved</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">1,600</h3>
              <p className="text-gray-600 text-sm">Businesses transformed</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">+3M</h3>
              <p className="text-gray-600 text-sm">Users supported globally</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="relative z-10 py-48 " style={{backgroundColor: '#faf9f2'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - FAQ Header */}
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">FAQ</p>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your<br />
                questions,<br />
                answered<br />
                simply
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get straightforward answers about our technology consulting, project timelines, and tailored solutions to help you make informed choices.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get in touch
              </button>
            </div>
            
            {/* Right - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-200 rounded-lg">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-300 rounded-lg transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative z-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - CTA Content */}
            <div className="rounded-2xl p-8 h-96" style={{backgroundColor: '#3a3a3a'}}>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">READY TO GET STARTED?</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Transform your business today
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Connect with our experts to discover tailored technology solutions for your business. Let's discuss how we can help you achieve your goals.
              </p>
              
              {/* Email Form */}
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-3 bg-gray-600 text-white placeholder-gray-400 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Submit
                </button>
              </div>
            </div>
            
            {/* Right - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-96" style={{backgroundColor: '#3a3a3a'}}>
                <img 
                  src="/service-2-web-dev.png" 
                  alt="Team collaboration meeting with business planning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
     
    </Layout>
  );
};

export default Services;