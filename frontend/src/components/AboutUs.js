import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import SEO from './SEO';

const AboutUs = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [currentImageSet, setCurrentImageSet] = useState(0);
  
  const imageSets = [
    {
      left: [
        "/about-1.png",
        "/about-2.avif",
        "/about-3.avif"
      ],
      right: [
        "/about-4.avif",
        "/about-5.avif",
        "/about-6.avif"
      ]
    },
    {
      left: [
        "/about-2.avif",
        "/about-3.avif",
        "/about-1.png"
      ],
      right: [
        "/about-5.avif",
        "/about-6.avif",
        "/about-4.avif"
      ]
    },
    {
      left: [
        "/about-3.avif",
        "/about-1.png",
        "/about-2.avif"
      ],
      right: [
        "/about-6.avif",
        "/about-4.avif",
        "/about-5.avif"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      company: 'Sandeep Dutta',
      image: '/Sandeep Dutta.png',
      testimonial: 'NextSphere streamlined our operations with robust solutions and reliable support.',
      author: 'Sandeep Dutta',
      position: 'President of India & South Asia, AWS',
      backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      company: 'Akarsh Gupta',
      image: '/akarsh-gupta.jpg',
      testimonial: 'Clear guidance and efficient management from start to finish.',
      author: 'Akarsh Gupta',
      position: 'Foundation Member, Agritek India',
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      company: 'Sachin Chawla',
      image: '/sachin-chawla.jpg',
      testimonial: 'Expert HR technology delivery with attention to detail and proactive communication.',
      author: 'Sachin Chawla',
      position: 'AVP – India and ASEAN, MongoDB',
      backgroundImage: '/business-people.jpg'
    },
    {
      company: 'Durga Charan Jena',
      image: '/durga-charan-jena.jpg',
      testimonial: 'Professional delivery with strong industry insight. Highly recommended.',
      author: 'Durga Charan Jena',
      position: 'Founder, Agritek India',
      backgroundImage: '/about-1.png'
    }
  ];
  return (
    <Layout>
      <SEO 
        title="About Us | NextSphere Technologies - Our Story & Mission"
        description="Learn about NextSphere Technologies' mission to deliver innovative AI, ERP, HR, and web development solutions. Meet our expert team driving business transformation."
        keywords="about nextsphere, technology company, AI experts, ERP consultants, HR solutions team, web development company"
      />
      {/* Image Grid Section with Center Text */}
      <section className="pt-20 pb-12 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Desktop Layout - Images positioned absolutely */}
          <div className="hidden lg:block" style={{minHeight: 'calc(100vh + 20rem)'}}>
            {/* Left Images */}
            <div className="left-images absolute -left-8 top-8 w-[26rem] space-y-6 transition-all duration-1000 ease-in-out z-10">
              {imageSets[currentImageSet].left.map((src, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-700 ease-in-out ${
                  index === 1 ? 'middle-left-image -translate-x-12' : ''
                }`}>
                  <img 
                    src={src}
                    alt={`Team image ${index + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Images */}
            <div className="right-images absolute -right-8 top-8 w-[26rem] space-y-6 transition-all duration-1000 ease-in-out z-10">
              {imageSets[currentImageSet].right.map((src, index) => (
                <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-700 ease-in-out ${
                  index === 1 ? 'middle-right-image translate-x-12' : ''
                }`}>
                  <img 
                    src={src}
                    alt={`Team image ${index + 4}`}
                    className="w-full h-80 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Center Text Content */}
            <div className="absolute left-0 right-0 z-50 flex items-center justify-center" style={{top: 'calc(2rem + 20rem + 1.5rem + 10rem)', transform: 'translateY(-50%)'}}>
              <div className="text-center px-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl max-w-lg">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">OUR STORY AND MISSION</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Technology that drives
                  <br />
                  business forward
                </h2>
                <p className="text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
                  We help organizations adapt & excel with tailored technology solutions. Our expertise spans 
                  development, AI, ERP, HR applications, and R&D—delivering practical results for real business needs.
                </p>
                <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked vertically */}
          <div className="lg:hidden space-y-8">
            {/* Mobile Text Content - Top */}
            <div className="text-center px-4 py-8">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">OUR STORY AND MISSION</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Technology that drives
                <br />
                business forward
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
                We help organizations adapt and excel with tailored technology solutions. Our expertise spans 
                development, AI, ERP, HR applications, and R&D—delivering practical results for real business needs.
              </p>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm">
                Learn more
              </button>
            </div>

            {/* Mobile Images - Bottom */}
            <div className="grid grid-cols-2 gap-3 px-4">
              {imageSets[currentImageSet].left.concat(imageSets[currentImageSet].right).map((src, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={src}
                    alt={`Team image ${index + 1}`}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Work Section */}
      <section className="py-16 px-6 bg-amber-25" style={{backgroundColor: '#faf9f2'}}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technology that drives
              <br />
              business forward
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how our expertise, values, and approach deliver real results for modern organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Mission Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Mission" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-white text-sm font-medium mb-2 uppercase tracking-wide transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">OUR MISSION</p>
                <h3 className="text-white text-xl font-bold leading-tight transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">
                  Enabling growth with tailored tech solutions.
                </h3>
              </div>
            </div>

            {/* Our Values Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img 
                src="/about-1.png" 
                alt="Our Values" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-white text-sm font-medium mb-2 uppercase tracking-wide transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">OUR VALUES</p>
                <h3 className="text-white text-xl font-bold leading-tight transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">
                  Trust, teamwork, and ongoing innovation.
                </h3>
              </div>
            </div>

            {/* How We Work Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="How We Work" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-white text-sm font-medium mb-2 uppercase tracking-wide transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">HOW WE WORK</p>
                <h3 className="text-white text-xl font-bold leading-tight transform transition-transform duration-300 group-hover:translate-y-[-4px] drop-shadow-lg">
                  Flexible, transparent, and outcome-driven.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">KEY ACHIEVEMENTS AT A GLANCE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Driving measurable business outcomes
            </h2>
          </div>
          
          {/* Stats Grid */}
          <div className="space-y-16">
            {/* Stat 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-gray-700 pb-16">
              <div>
                <h3 className="text-6xl md:text-7xl font-bold text-white mb-4">300%</h3>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Increase in client adoption</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A 300% rise in client adoption highlights our ability to deliver effective, scalable technology solutions.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b border-gray-700 pb-16">
              <div>
                <h3 className="text-6xl md:text-7xl font-bold text-white mb-4">20K</h3>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Users supported worldwide</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We provide ongoing support to 20K+ users, ensuring dependable service and seamless operations for every client.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-6xl md:text-7xl font-bold text-white mb-4">+1120</h3>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Projects successfully completed</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Over 1,120 projects delivered, demonstrating our expertise across a wide range of business and technology needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">OUR LEADERSHIP</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              People powering your progress
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Meet the specialists who deliver tailored technology solutions across web, AI, ERP, HR, and R&D for your business.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Connect
            </button>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/tusharsir-img.jpg" 
                  alt="Tusharkant Rout" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Tusharkant Rout</h3>
              <p className="text-gray-600 text-sm">Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/diwakar-tiwari.jpg" 
                  alt="Diwakar Tiwari" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Diwakar Tiwari</h3>
              <p className="text-gray-600 text-sm">Vice President</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Soumya" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Soumya</h3>
              <p className="text-gray-600 text-sm">HR Head</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Aswini Kumar Nath" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Aswini Kumar Nath</h3>
              <p className="text-gray-600 text-sm">R&D Head</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/swati-jain.jpg" 
                  alt="Swati Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Swati Jain</h3>
              <p className="text-gray-600 text-sm">Team Lead</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/saloni-khadav.jpg" 
                  alt="Saloni Khadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Saloni Khadav</h3>
              <p className="text-gray-600 text-sm">Full Stack Developer</p>
            </div>

            {/* Team Member 7 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/nikita-yadav.jpg" 
                  alt="Nikita Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Nikita Yadav</h3>
              <p className="text-gray-600 text-sm">Frontend Developer</p>
            </div>

            {/* Team Member 8 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="/amisha-jat.jpg" 
                  alt="Amisha Jat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Amisha Jat</h3>
              <p className="text-gray-600 text-sm">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 bg-gray-50" style={{backgroundColor: '#faf9f2'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide mb-4">TRUSTED BY 2.5M+ PROFESSIONALS</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Leading
                <br />
                businesses
                <br />
                choose our
                <br />
                solutions
              </h2>
            </div>
            
            {/* Right Logos Grid */}
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              {/* First Row */}
              <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
                <img 
                  src="/agri-logo.png" 
                  alt="Agritek India" 
                  className="h-20 sm:h-24 lg:h-32 xl:h-40 w-auto object-contain justify-self-center"
                />
                <img 
                  src="/Amazon_Web_Services-Logo.wine.png" 
                  alt="Amazon Web Services" 
                  className="h-4 sm:h-6 lg:h-8 w-auto object-contain justify-self-center"
                />
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg border border-gray-800 px-1 sm:px-2 lg:px-3 py-1 text-center">THE PAAK</div>
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg border border-gray-800 px-1 sm:px-2 lg:px-3 py-1 text-center">IDEA</div>
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg text-center">⊙ 360LAB</div>
              </div>
              
              {/* Second Row */}
              <div className="grid grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
                <img 
                  src="/mongo-logo.png" 
                  alt="MongoDB" 
                  className="h-18 sm:h-22 lg:h-30 xl:h-36 w-auto object-contain justify-self-center"
                />
                <img 
                  src="/iit-roorkee.png" 
                  alt="IIT Roorkee" 
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain justify-self-center"
                />
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg border border-gray-800 px-1 sm:px-2 lg:px-3 py-1 text-center">THE PAAK</div>
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg border border-gray-800 px-1 sm:px-2 lg:px-3 py-1 text-center">IDEA</div>
                <div className="text-gray-800 font-bold text-xs sm:text-sm lg:text-lg text-center">⊙ 360LAB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Partners Say Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-20">
              What our partners say
            </h2>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4 mb-2">
              {testimonials.map((item, index) => (
                <div 
                  key={index}
                  className={`text-center pb-3 sm:pb-4 sm:flex-1 sm:min-w-0 cursor-pointer transition-all duration-300 ${
                    selectedTestimonial === index 
                      ? 'border-b-2 border-white' 
                      : 'border-b border-gray-600'
                  }`}
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 rounded-full overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-auto sm:h-6 flex items-center justify-center">
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {item.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className="relative rounded-2xl overflow-hidden -mt-8 sm:-mt-20">
            <img 
              src={testimonials[selectedTestimonial].backgroundImage}
              alt="Business meeting" 
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
              <div className="p-4 sm:p-6 md:p-8 text-white mt-2">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 leading-snug max-w-3xl font-semibold" style={{fontFamily: 'Georgia, serif'}}>
                  {testimonials[selectedTestimonial].testimonial}
                </p>
                <div className="mt-3 sm:mt-4">
                  <h4 className="font-semibold text-base sm:text-lg">{testimonials[selectedTestimonial].author}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">{testimonials[selectedTestimonial].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Let's build your
                <br />
                next solution
              </h2>
            </div>
            
            {/* Right Form */}
            <div>
              <p className="text-black mb-6 leading-relaxed">
                Get expert insights and updates. Subscribe for the latest in technology, business tools, and innovation.
              </p>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const email = e.target.email.value;
                const submitButton = e.target.querySelector('button[type="submit"]');
                const messageDiv = e.target.parentNode.querySelector('.submit-message');
                
                submitButton.disabled = true;
                submitButton.textContent = 'Submitting...';
                
                try {
                  const response = await fetch('http://localhost:5000/api/promotion/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                  });
                  const result = await response.json();
                  if (response.ok) {
                    alert('Successfully submitted!');
                    e.target.reset();
                    if (messageDiv) {
                      messageDiv.textContent = 'Submitted successfully!';
                      messageDiv.className = 'submit-message text-green-400 text-sm mt-2';
                      setTimeout(() => messageDiv.textContent = '', 3000);
                    }
                  } else {
                    alert(result.message);
                    if (messageDiv) {
                      messageDiv.textContent = result.message || 'Error occurred';
                      messageDiv.className = 'submit-message text-red-400 text-sm mt-2';
                      setTimeout(() => messageDiv.textContent = '', 3000);
                    }
                  }
                } catch (error) {
                  alert('Error subscribing. Please try again.');
                  if (messageDiv) {
                    messageDiv.textContent = 'Error occurred. Please try again.';
                    messageDiv.className = 'submit-message text-red-400 text-sm mt-2';
                    setTimeout(() => messageDiv.textContent = '', 3000);
                  }
                }
                
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
              }}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  />
                  <button type="submit" className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap">
                    Submit
                  </button>
                </div>
                <div className="submit-message"></div>
              </form>
              <p className="text-gray-500 text-sm mt-4">
                Questions? Visit our contact page for details.
              </p>
            </div>
          </div>
        </div>
      </section>

     
     
    </Layout>
  );
};

export default AboutUs;