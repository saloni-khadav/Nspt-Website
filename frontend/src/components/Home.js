import React from 'react';
import Layout from './Layout';
import FAQ from './FAQ';
import ContactForm from './ContactForm';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-6 h-full flex flex-col justify-between">
              {/* Main Heading Card */}
              <div className="bg-purple-50 rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 flex-1">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Powering<br/>
                  business<br/>
                  with smart<br/>
                  technology
                </h1>
              </div>
              
              {/* Cards Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                {/* Description Card with Contact Button */}
                <div className="bg-purple-50 rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 h-full flex flex-col justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Comprehensive digital solutions for seamless growth, efficiency, and innovation across every industry.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Contact us
                  </button>
                </div>
                
                {/* Trusted by Card */}
                <div className="bg-purple-50 rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 h-full flex flex-col justify-between">
                  <p className="text-gray-500 text-sm mb-4">Trusted by top enterprises</p>
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold">©</span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">LOGO</span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">E</span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">EGGS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative h-64 sm:h-96 lg:h-full flex items-stretch">
              <img 
                src="/hero-section.png" 
                alt="Business meeting" 
                className="w-full h-full object-cover rounded-none shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:ml-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Powering<br/>
                business<br/>
                with smart<br/>
                solutions
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We deliver technology, AI, and<br className="hidden sm:block"/>
                business applications for diverse<br className="hidden sm:block"/>
                industries, trusted by companies<br className="hidden sm:block"/>
                seeking reliable digital transformation.
              </p>
            </div>
            
            {/* Right Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:mr-20">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">LOGO</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-900 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">EGGS</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">THE PAAK</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">IDEA</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-200 rounded"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">IDEA</span>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-10 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">$ ECHOES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section - Dark */}
      <section className="bg-black text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-relaxed">
              Powering business<br/>
              with smart technology
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-4xl mx-auto">
              Discover our key services to streamline your operations, drive efficiency, and support your digital growth.
            </p>
          </div>
          
          <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {/* Website Design */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-64 sm:w-80 flex flex-col">
              <div className="h-64 sm:h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center" 
                  alt="Website Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Website Design</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Custom websites for your business needs.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-4 sm:mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* App Development */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center" 
                  alt="App Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">App Development</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Build scalable mobile and web apps.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* AI Integration */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center" 
                  alt="AI Integration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Enhance workflows with smart automation.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Explore
                </button>
              </div>
            </div>

            {/* ERP Solutions */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center" 
                  alt="ERP Solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">ERP Solutions</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Streamline accounting and operations.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* HR Applications */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center" 
                  alt="HR Applications" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">HR Applications</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Manage teams and processes easily.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* Consulting */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center" 
                  alt="Consulting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">Consulting</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Expert advice for digital growth.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* R&D Services */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center" 
                  alt="R&D Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">R&D Services</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Drive progress with new technologies.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Explore
                </button>
              </div>
            </div>

            {/* Cloud Services */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center" 
                  alt="Cloud Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Secure, scalable cloud solutions.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Learn More
                </button>
              </div>
            </div>

            {/* Support */}
            <div className="bg-black rounded-none overflow-hidden flex-shrink-0 w-80 flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center" 
                  alt="Support" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  Ongoing help for your projects.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm mt-6 self-start">
                  Get Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden animated-border">
        {/* Top border animation */}
        <div className="absolute top-0 left-0 w-full h-2 z-20 animated-border-top pointer-events-none"></div>
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/marks-section.jpg" 
            alt="Modern office workspace background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Metrics<br/>
                that matter<br/>
                most
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Performance data reflecting<br/>
                our technology expertise.
              </p>
            </div>
            
            {/* Center Metric Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-white mb-4">99.9%</div>
              <div className="text-gray-300 text-lg mb-6">System uptime reliability</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Dependable infrastructure for<br/>
                uninterrupted service.
              </p>
            </div>
            
            {/* Right Metric Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-white mb-4">1.2M</div>
              <div className="text-gray-300 text-lg mb-6">Transactions handled monthly</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scalable solutions for growing<br/>
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              What our clients say
            </h2>
            <p className="text-gray-600 text-lg max-w-6xl mx-auto">
              Discover how our technology solutions help businesses streamline operations and achieve measurable results.
            </p>
          </div>
          
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="flex items-start">
              {/* Left - Image */}
              <div className="w-1/3 overflow-hidden">
                <img 
                  src="/girl-img.png" 
                  alt="Client testimonial" 
                  className="w-full h-80 object-contain object-left rounded-none"
                />
              </div>
              
              {/* Right - Content */}
              <div className="w-2/3 space-y-6 p-8 mt-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold">IDEA</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">IDEA</span>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed font-bold">
                  Delivered a robust platform on schedule. The process was efficient and the team's expertise ensured a smooth launch.
                </p>
                
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          
          {/* Client Avatars */}
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px]">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=center" 
                alt="Alex Rivera" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">Alex Rivera</div>
                <div className="text-sm text-gray-500">COO, FinEdge Solutions</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px]">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=center" 
                alt="Taylor Brooks" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">Taylor Brooks</div>
                <div className="text-sm text-gray-500">Head of Operations, BrightPath</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px]">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=center" 
                alt="Morgan Ellis" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">Morgan Ellis</div>
                <div className="text-sm text-gray-500">CTO, Vertex Analytics</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px]">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=center" 
                alt="John Doe" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <ContactForm />
    </Layout>
  );
};

export default Home;