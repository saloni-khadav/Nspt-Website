import React, { useState, useEffect } from 'react';
import Layout from './Layout';

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
      company: '⊙ 360LAB',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'NextSphere provided a robust solution that streamlined our operations. Their technical knowledge and reliable support ensured a smooth transition for our team.',
      author: 'Riley Bennett',
      position: 'Director of Operations Lead',
      backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      company: ' EGGS',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'The consultancy team guided our application launch with clarity and efficiency. Communication was prompt and the process was well managed from start to finish.',
      author: 'Morgan Patel',
      position: 'IT Project Manager',
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      company: 'THE PAAK',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial: 'Their expertise in HR technology helped us deliver a user-friendly platform on schedule. We valued their attention to detail and proactive communication.',
      author: 'Casey Jordan',
      position: 'People Systems Director',
      backgroundImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      company: ' ECHOES',
      image: '/girl-img.png',
      testimonial: 'From planning to delivery, the team demonstrated professionalism and strong industry insight. We recommend NextSphere for technology-driven projects.',
      author: 'Jamie Brooks',
      position: 'Finance Systems Manager',
      backgroundImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];
  return (
    <Layout>
      {/* Image Grid Section with Center Text */}
      <section className="pt-20 pb-20 px-6 bg-gray-50 relative overflow-hidden" style={{minHeight: 'calc(100vh + 20rem)'}}>
        <div className="max-w-7xl mx-auto relative" style={{minHeight: 'calc(100vh + 20rem)'}}>
          {/* Left Images */}
          <div className="left-images absolute -left-16 top-8 w-[32rem] space-y-6 transition-all duration-1000 ease-in-out z-20">
            {imageSets[currentImageSet].left.map((src, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-700 ease-in-out ${
                index === 1 ? 'middle-left-image' : ''
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
          <div className="right-images absolute -right-16 top-8 w-[32rem] space-y-6 transition-all duration-1000 ease-in-out z-20">
            {imageSets[currentImageSet].right.map((src, index) => (
              <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-700 ease-in-out ${
                index === 1 ? 'middle-right-image' : ''
              }`}>
                <img 
                  src={src}
                  alt={`Team image ${index + 4}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Center Text Content */}
          <div className="relative z-10 text-center py-32 px-8 group flex items-center justify-center" style={{minHeight: 'calc(100vh + 20rem)'}}>
            <div className="hover:cursor-pointer bg-white/90 backdrop-blur-sm rounded-lg p-8 " 
                 onMouseEnter={() => {
                   document.querySelector('.middle-left-image').style.transform = 'translateX(-12rem)';
                   document.querySelector('.middle-right-image').style.transform = 'translateX(12rem)';
                 }}
                 onMouseLeave={() => {
                   document.querySelector('.middle-left-image').style.transform = 'translateX(0)';
                   document.querySelector('.middle-right-image').style.transform = 'translateX(0)';
                 }}>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">OUR STORY AND MISSION</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Technology that drives
                <br />
                business forward
              </h2>
              <p className="text-base text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
                We help organizations adapt and excel with tailored technology solutions. Our expertise spans 
                development, AI, ERP, HR applications, and R&D—delivering practical results for real business needs.
              </p>
              <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium text-sm">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Values, Work Section */}
      <section className="py-32 px-6 bg-amber-25" style={{backgroundColor: '#faf9f2'}}>
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Connect
            </button>
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Avery Lin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Avery Lin</h3>
              <p className="text-gray-600 text-sm">Lead Consultant</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Jordan Ellis" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Jordan Ellis</h3>
              <p className="text-gray-600 text-sm">Project Manager</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Morgan Blake" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Morgan Blake</h3>
              <p className="text-gray-600 text-sm">AI Specialist</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="girl-img.png" 
                  alt="Sydney Rao" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Sydney Rao</h3>
              <p className="text-gray-600 text-sm">ERP Architect</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Quinn Foster" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Quinn Foster</h3>
              <p className="text-gray-600 text-sm">HR Solutions Lead</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Devon Cruz" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Devon Cruz</h3>
              <p className="text-gray-600 text-sm">Full Stack Developer</p>
            </div>

            {/* Team Member 7 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Reese Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Reese Patel</h3>
              <p className="text-gray-600 text-sm">Business Analyst</p>
            </div>

            {/* Team Member 8 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Skyler Hayes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Skyler Hayes</h3>
              <p className="text-gray-600 text-sm">R&D Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 bg-gray-50" style={{backgroundColor: '#faf9f2'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-4">TRUSTED BY 2.5M+ PROFESSIONALS</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
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
            <div className="space-y-8">
              {/* First Row */}
              <div className="flex items-center justify-between space-x-8">
                <div className="text-gray-800 font-bold text-lg">© LOGO</div>
                <div className="text-gray-800 font-bold text-lg"> EGGS</div>
                <div className="text-gray-800 font-bold text-lg border border-gray-800 px-3 py-1">THE PAAK</div>
                <div className="text-gray-800 font-bold text-lg border border-gray-800 px-3 py-1"> IDEA</div>
                <div className="text-gray-800 font-bold text-lg">⊙ 360LAB</div>
              </div>
              
              {/* Second Row */}
              <div className="flex items-center justify-between space-x-8">
                <div className="text-gray-800 font-bold text-lg">© LOGO</div>
                <div className="text-gray-800 font-bold text-lg"> EGGS</div>
                <div className="text-gray-800 font-bold text-lg border border-gray-800 px-3 py-1">THE PAAK</div>
                <div className="text-gray-800 font-bold text-lg border border-gray-800 px-3 py-1"> IDEA</div>
                <div className="text-gray-800 font-bold text-lg">⊙ 360LAB</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Partners Say Section */}
      <section className="py-24 px-6" style={{backgroundColor: '#1a1a1a'}}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-20">
              What our partners say
            </h2>
            
            {/* Company Logos */}
            <div className="flex items-center justify-between gap-4 mb-2">
              {testimonials.map((item, index) => (
                <div 
                  key={index}
                  className={`text-center pb-4 flex-1 cursor-pointer transition-all duration-300 ${
                    selectedTestimonial === index 
                      ? 'border-b-2 border-white' 
                      : 'border-b border-gray-600'
                  }`}
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-6 flex items-center justify-center">
                    <p className={`text-sm font-semibold ${
                      item.company === 'THE PAAK' 
                        ? 'border border-white px-1 py-0.5 text-white' 
                        : 'text-white'
                    }`}>
                      {item.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className="relative rounded-2xl overflow-hidden -mt-20">
            <img 
              src={testimonials[selectedTestimonial].backgroundImage}
              alt="Business meeting" 
              className="w-full h-[700px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
              <div className="p-8 text-white mt-2">
                <p className="text-3xl mb-6 leading-snug max-w-3xl font-semibold" style={{fontFamily: 'Georgia, serif'}}>
                  {testimonials[selectedTestimonial].testimonial}
                </p>
              </div>
              <div className="p-8 text-white">
                <h4 className="font-semibold text-lg">{testimonials[selectedTestimonial].author}</h4>
                <p className="text-gray-300 text-sm">{testimonials[selectedTestimonial].position}</p>
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
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get expert insights and updates. Subscribe for the latest in technology, business tools, and innovation.
              </p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Submit
                </button>
              </div>
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