import React from 'react';
import Layout from './Layout';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import SEO from './SEO';

const Home = () => {
  return (
    <Layout>
      <SEO 
        title="NextSphere Technologies | AI, ERP, HR & Web Development Solutions"
        description="Leading provider of AI solutions, ERP systems, HR applications, web development, and technology consulting. Transform your business with intelligent solutions."
        keywords="web development, AI integration, ERP solutions, HR applications, technology consulting, digital transformation, business automation, app development"
      />
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 h-full flex flex-col justify-between lg:max-w-lg lg:-ml-8">
              {/* Text Card */}
              <div className="bg-purple-50 rounded-lg shadow-md border border-gray-200 flex-1 overflow-hidden flex items-center justify-start p-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-left">
                  Powering<br/>
                  Businesses<br/>
                  with Intelligent<br/>
                  Technology
                </h2>
              </div>
              
              {/* Cards Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-1">
                {/* Description Card with Contact Button */}
                <div className="bg-purple-50 rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 h-full flex flex-col justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Comprehensive digital solutions built for growth, efficiency, and innovation—across startups, enterprises, and future-ready industries.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Contact us
                  </button>
                </div>
                
                {/* Trusted by Card */}
                <div className="bg-purple-50 rounded-lg p-4 sm:p-8 shadow-md border border-gray-200 h-full flex flex-col justify-between">
                  <p className="text-gray-500 text-sm mb-4 font-bold">Trusted by top enterprises</p>
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/Agritek_India.png" 
                      alt="Agritek India" 
                      className="h-16 w-auto object-contain -mt-2"
                    />
                    <img 
                      src="/Amazon_Web_Services-Logo.wine.png" 
                      alt="Amazon Web Services" 
                      className="h-6 w-auto object-contain mt-4"
                    />
                    <img 
                      src="/Mongodb-PNG-Free-Image.png" 
                      alt="MongoDB" 
                      className="h-12 w-auto object-contain"
                    />
                    <img 
                      src="/iit-roorkee.png" 
                      alt="IIT Roorkee" 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Video */}
            <div className="relative w-full lg:w-[50vw] lg:-ml-32 mt-8 lg:mt-0">
              <div className="bg-gray-100 rounded-2xl overflow-hidden" style={{height: '500px', width: '100%'}}>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full"
                  style={{objectFit: 'fill'}}
                >
                  <source src="/Home.mp4" type="video/mp4" />
                </video>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-100 rounded-full opacity-60"></div>
              <div className="absolute top-1/4 -right-6 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
              <div className="absolute bottom-1/4 -left-8 w-6 h-6 bg-yellow-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-purple-50 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4 items-start">
            {/* Left Content */}
            <div className="space-y-4 lg:ml-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Powering<br/>
                Businesses<br/>
                with Intelligent<br/>
                Technology
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                From AI-driven platforms to<br/>
                scalable business applications,<br/>
                we help diverse industries innovate,<br/>
                optimize, and grow with confidence.
              </p>
            </div>
            
            {/* Right Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:mr-8">
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo01.png" alt="Logo 1" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo2.png" alt="Logo 1 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo2.png" alt="Logo 2" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo3.png" alt="Logo 2 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo3.png" alt="Logo 3" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo4.png" alt="Logo 3 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo4.png" alt="Logo 4" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo5.png" alt="Logo 4 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo5.png" alt="Logo 5" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo6.png" alt="Logo 5 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-36 sm:h-40 group cursor-pointer" style={{perspective: '1000px'}}>
                <div className="relative w-full h-full transition-transform duration-700" style={{transformStyle: 'preserve-3d'}}>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden'}}>
                    <img src="/logo6.png" alt="Logo 6" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center" style={{backfaceVisibility: 'hidden', transform: 'rotateY(180deg)'}}>
                    <img src="/logo7.png" alt="Logo 6 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .group:hover > div {
                transform: rotateY(180deg);
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Technology Section - Dark */}
      <section className="bg-black text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-relaxed">
              Powering Businesses<br/>
              with Intelligent Technology
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-4xl mx-auto">
              Explore our core services that help organizations optimize processes, improve efficiency, and achieve scalable digital transformation.
            </p>
          </div>
          
          <div>
            
            <div id="tech-cards-container" className="flex gap-4 sm:gap-8 overflow-x-auto pb-4 scroll-smooth" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {(() => {
                const cards = [
                  {
                    img: "/websiteandapp.jpg",
                    title: "Website & App Solutions",
                    desc: "We design and develop custom websites and applications focused on usability, performance, security, and long-term scalability—tailored to your business goals.",
                    btn: "View Solutions",
                    width: "w-64 sm:w-80",
                    padding: "p-4 sm:p-6",
                    titleSize: "text-lg sm:text-xl",
                    margin: "mt-4 sm:mt-6"
                  },
                  {
                    img: "/Ai&automation.jpg",
                    title: "AI & Automation Tools",
                    desc: "Leverage AI-powered automation and data-driven insights to optimize processes, reduce manual effort, and enhance business decision-making.",
                    btn: "Explore AI Tools",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "/businessmanagement.jpg",
                    title: "Business Management Systems",
                    desc: "Simplify and centralize your business operations with intelligent ERP, HR, and accounting platforms that improve accuracy, control, and growth.",
                    btn: "View Systems",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "/service-4-ERP-accou.png",
                    title: "ERP Solutions",
                    desc: "Streamline finance, operations, inventory, and reporting using comprehensive ERP solutions designed to boost productivity and visibility.",
                    btn: "Learn More",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "/hr-application-img.png",
                    title: "HR Applications",
                    desc: "Manage recruitment, payroll, performance, and employee engagement efficiently with secure and scalable HR applications.",
                    btn: "Learn More",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center",
                    title: "Technology Consulting",
                    desc: "Get expert consulting on digital transformation, technology adoption, system architecture, and process optimization—built for sustainable growth.",
                    btn: "Consult Experts",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "/R-and-D.png",
                    title: "R&D Services",
                    desc: "We provide cutting-edge research and development services to explore emerging technologies and create future-ready digital solutions.",
                    btn: "Explore R&D",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  },
                  {
                    img: "/support.png",
                    title: "Technical Support",
                    desc: "Receive comprehensive technical support and system maintenance to ensure optimal performance, security, and minimal downtime.",
                    btn: "Get Support",
                    width: "w-80",
                    padding: "p-6",
                    titleSize: "text-xl",
                    margin: "mt-6"
                  }
                ];
                
                return [...cards, ...cards, ...cards, ...cards].map((card, index) => (
                  <div key={index} className={`bg-black rounded-none overflow-hidden flex-shrink-0 ${card.width} flex flex-col`}>
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`${card.padding} flex-1 flex flex-col`}>
                      <h3 className={`${card.titleSize} font-semibold mb-3`}>{card.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed flex-1">
                        {card.desc}
                      </p>
                      <button className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm ${card.margin} self-start`}>
                        {card.btn}
                      </button>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden py-40">
        {/* Top border animation */}
        <div className="absolute top-0 left-0 w-full h-2 z-20 pointer-events-none" style={{background: '#fbbf24', animation: 'colorCycle 10s infinite'}}></div>
        
        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 w-full h-2 z-20 pointer-events-none" style={{background: '#fbbf24', animation: 'colorCycle 10s infinite'}}></div>
        
        <style>{`
          @keyframes colorCycle {
            0%, 10% { background: #fbbf24; }
            10%, 20% { background: transparent; }
            20%, 30% { background: #f97316; }
            30%, 40% { background: transparent; }
            40%, 50% { background: #3b82f6; }
            50%, 60% { background: transparent; }
            60%, 70% { background: #8b5cf6; }
            70%, 80% { background: transparent; }
            80%, 90% { background: #ec4899; }
            90%, 100% { background: transparent; }
          }
        `}</style>
        
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Proven Metrics.<br/>
                Real Impact.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our performance metrics showcase<br/>
                the stability, scalability, and trust<br/>
                businesses place in our technology.
              </p>
            </div>
            
            {/* Center Metric Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">99.9%</div>
              <div className="text-gray-300 text-lg mb-4">Uptime Assurance</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineered for reliability with<br/>
                minimal downtime and maximum<br/>
                performance.
              </p>
            </div>
            
            {/* Right Metric Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">1.2M</div>
              <div className="text-gray-300 text-lg mb-4">Monthly Transactions</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built to handle scale securely<br/>
                and efficiently as your business<br/>
                grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-6xl mx-auto">
              Real experiences from organizations that trust us to deliver reliable and scalable technology solutions.
            </p>
          </div>
          
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="flex items-start">
              {/* Left - Image */}
              <div className="w-1/3 overflow-hidden">
                <img 
                  src="/girl-img2.png" 
                  alt="Client testimonial" 
                  className="w-full h-80 object-contain object-left rounded-none"
                />
              </div>
              
              {/* Right - Content */}
              <div className="w-2/3 space-y-6 p-8 mt-0">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/Agritek_India.png" 
                    alt="Agritek India" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed font-bold" style={{fontFamily: 'Georgia, serif'}}>
                  "The team at Next Sphere built a reliable, high-performance platform that met our business requirements perfectly. The delivery was on time, and the collaboration was seamless."<br/>
                  <span className="text-gray-500 font-normal">— Technology Manager, Agritek India</span>
                </p>
                
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
                  View success story
                </a>
              </div>
            </div>
          </div>
          
          {/* Client Avatars */}
          <div className="overflow-x-auto pb-4 mt-6">
            <div className="flex justify-center items-center space-x-4 min-w-max">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md min-w-[220px] flex-shrink-0">
                <img 
                  src="/Sandeep Dutta.png" 
                  alt="Sandeep Dutta" 
                  className="w-20 h-20 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sandeep Dutta</div>
                  <div className="text-xs text-gray-500">President of India & South Asia, AWS</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md min-w-[220px] flex-shrink-0">
                <img 
                  src="/akarsh-gupta.jpg" 
                  alt="Akarsh Gupta" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Akarsh Gupta</div>
                  <div className="text-xs text-gray-500">Foundation Member, Agritek India</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md min-w-[220px] flex-shrink-0">
                <img 
                  src="/Sachin-Chawla.jpg" 
                  alt="Sachin Chawla" 
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sachin Chawla</div>
                  <div className="text-xs text-gray-500">AVP – India and ASEAN, MongoDB</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md min-w-[220px] flex-shrink-0">
                <img 
                  src="/durga-charan-jena.jpg" 
                  alt="Durga Charan Jena" 
                  className="w-20 h-20 rounded-full object-cover object-top"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Durga Charan Jena</div>
                  <div className="text-xs text-gray-500">Founder, Agritek India</div>
                </div>
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
