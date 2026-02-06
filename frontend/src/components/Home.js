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
                  Businesses<br/>
                  with Intelligent<br/>
                  Technology
                </h1>
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
                Businesses<br/>
                with Intelligent<br/>
                Technology
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                From AI-driven platforms to<br/>
                scalable business applications,<br/>
                we help diverse industries innovate,<br/>
                optimize, and grow with confidence.
              </p>
            </div>
            
            {/* Right Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:mr-20">
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo01.png" alt="Logo 1" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo2.png" alt="Logo 1 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite 1s'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo2.png" alt="Logo 2" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo3.png" alt="Logo 2 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite 2s'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo3.png" alt="Logo 3" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo4.png" alt="Logo 3 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite 3s'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo4.png" alt="Logo 4" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo5.png" alt="Logo 4 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite 4s'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo5.png" alt="Logo 5" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo6.png" alt="Logo 5 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
              <div className="h-28 sm:h-32 perspective-1000" style={{animation: 'cardFlip 8s infinite 5s'}}>
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d flip-card">
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
                    <img src="/logo6.png" alt="Logo 6" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-gray-200 rounded-xl p-2 text-center shadow-md hover:shadow-lg transition-shadow flex items-center justify-center transform rotateY-180">
                    <img src="/logo7.png" alt="Logo 6 Back" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .perspective-1000 {
                perspective: 1000px;
              }
              .transform-style-preserve-3d {
                transform-style: preserve-3d;
              }
              .backface-hidden {
                backface-visibility: hidden;
              }
              .rotateY-180 {
                transform: rotateY(180deg);
              }
              @keyframes cardFlip {
                0%, 45% { transform: rotateY(0deg); }
                50%, 95% { transform: rotateY(180deg); }
                100% { transform: rotateY(0deg); }
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
      <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden animated-border">
        {/* Top border animation */}
        <div className="absolute top-0 left-0 w-full h-2 z-20 animated-border-top pointer-events-none"></div>
        
        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 w-full h-2 z-20 animated-border-bottom pointer-events-none"></div>
        
        <style jsx>{`
          .animated-border-top, .animated-border-bottom {
            background: #fbbf24;
            animation: colorCycle 10s infinite;
          }
          
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[80vh]">
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
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-white mb-4">99.9%</div>
              <div className="text-gray-300 text-lg mb-6">Uptime Assurance</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Engineered for reliability with<br/>
                minimal downtime and maximum<br/>
                performance.
              </p>
            </div>
            
            {/* Right Metric Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-white mb-4">1.2M</div>
              <div className="text-gray-300 text-lg mb-6">Monthly Transactions</div>
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
      <section className="bg-purple-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
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
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">I</span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">IDEA</span>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed font-bold" style={{fontFamily: 'Georgia, serif'}}>
                  "The team at Next Sphere built a reliable, high-performance platform that met our business requirements perfectly. The delivery was on time, and the collaboration was seamless."<br/>
                  <span className="text-gray-500 font-normal">— Technology Manager, IDEA</span>
                </p>
                
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium mt-4 inline-block">
                  View success story
                </a>
              </div>
            </div>
          </div>
          
          {/* Client Avatars */}
          <div className="overflow-x-auto pb-4">
            <div className="flex justify-center items-center space-x-6 min-w-max px-4">
              <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px] flex-shrink-0">
                <img 
                  src="/Sandeep Dutta.png" 
                  alt="Sandeep Dutta" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sandeep Dutta</div>
                  <div className="text-sm text-gray-500">President of India & South Asia, AWS</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px] flex-shrink-0">
                <img 
                  src="/akarsh-gupta.jpg" 
                  alt="Akarsh Gupta" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Akarsh Gupta</div>
                  <div className="text-sm text-gray-500">Foundation Member, Agritek India</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px] flex-shrink-0">
                <img 
                  src="/Sachin-Chawla.jpg" 
                  alt="Sachin Chawla" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sachin Chawla</div>
                  <div className="text-sm text-gray-500">AVP – India and ASEAN, MongoDB</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md min-w-[250px] flex-shrink-0">
                <img 
                  src="/durga-charan-jena.jpg" 
                  alt="Durga Charan Jena" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Durga Charan Jena</div>
                  <div className="text-sm text-gray-500">Founder, Agritek India</div>
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