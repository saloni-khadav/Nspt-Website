import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(2);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const teamMembers = [
    { name: "Priya Sharma", role: "DevOps Engineer", emoji: "👩🔧" },
    { name: "David Smith", role: "Business Analyst", emoji: "👨📊" },
    { name: "Tushar Rout", role: "CEO & Founder", emoji: "👨💼" },
    { name: "Sarah Johnson", role: "AI Engineer", emoji: "👩💻" },
    { name: "Mike Chen", role: "Data Scientist", emoji: "👨🔬" },
    { name: "Emily Davis", role: "Product Manager", emoji: "👩💼" },
    { name: "Alex Kumar", role: "Full Stack Developer", emoji: "👨💻" },
    { name: "Lisa Wang", role: "UI/UX Designer", emoji: "👩🎨" }
  ];
  
  const nextMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };
  
  const prevMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };
  
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentTeamIndex + i + teamMembers.length) % teamMembers.length;
      visible.push({ ...teamMembers[index], position: i });
    }
    return visible;
  };
  
  const handleWheel = (e) => {
    e.preventDefault();
    
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (e.deltaY > 0) {
      nextMember();
    } else {
      prevMember();
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-end justify-center pb-10 relative overflow-hidden">
        {/* Background Image */}
        <img 
          src="/nspt.jpg" 
          alt="NSPT Background"
          className="absolute top-20 left-0 right-0 bottom-0 w-full h-[calc(100%-5rem)] object-cover object-center opacity-40"
        />
        

        <div className="text-center max-w-5xl mx-auto px-6 relative z-10 ">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/services" className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all text-center">
              Explore Our Solutions
            </Link>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400/10 backdrop-blur-md transition-all">
              Request a Demo
            </button>
          </div>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-0 leading-relaxed">
            We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </p>
          
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* All Sections Wrapper */}
      <div className="bg-gradient-to-br from-black/30 via-slate-900/50 to-emerald-600/50">
        {/* Quick Stats */}
        <section className="py-20 px-6 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400 ">Quick Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-gray-300 text-lg font-medium">Clients</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">7+</div>
                  <div className="text-gray-300 text-lg font-medium">Farmers Network</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-gray-300 text-lg font-medium">Business Teams</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
              <div className="relative backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/30 rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-blue-600/20 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">3</div>
                  <div className="text-gray-300 text-lg font-medium">Smart Platforms</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Highlights */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Key Features & Highlights</h2>
            <div className="flex gap-6 overflow-x-auto pb-4" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0" style={{width: 'calc(33.333% - 16px)', minWidth: '300px'}}>
                <div className="p-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center" alt="Smart HR" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Smart HR</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">AI-powered HR Automation Platform with attendance tracking, payroll processing, and performance analytics</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">Attendance</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">Payroll</span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">Analytics</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">Learn More →</button>
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0" style={{width: 'calc(33.333% - 16px)', minWidth: '300px'}}>
                <div className="p-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center" alt="NextBook" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">NextBook</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Intelligent Accounting Solution with automated bookkeeping, GST filing, and financial reporting</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">GST Filing</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">Auto Books</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">Reports</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">View Demo →</button>
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0" style={{width: 'calc(33.333% - 16px)', minWidth: '300px'}}>
                <div className="p-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center" alt="AI Analytics" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI & Analytics Solutions</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Smart Decision-Making with predictive analytics, chatbot automation, and sentiment analysis</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Predictive AI</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Chatbots</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Analytics</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">Explore AI →</button>
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0" style={{width: 'calc(33.333% - 16px)', minWidth: '300px'}}>
                <div className="p-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop&crop=center" alt="Agritech Drone" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Agritech Drone Innovation</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Empowering Farmers with drone mapping, soil analysis, crop tracking, and smart irrigation systems</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">Drone Mapping</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">Soil Analysis</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">Smart Irrigation</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">View Projects →</button>
                </div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0" style={{width: 'calc(33.333% - 16px)', minWidth: '300px'}}>
                <div className="p-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-300">
                    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center" alt="Data Security" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">Data Security & Compliance</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">Enterprise-grade Protection with end-to-end encryption, secure cloud storage, and compliance management</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">Encryption</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">Cloud Security</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs">Compliance</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors">Security Details →</button>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-400 text-sm">← Scroll horizontally to view more features →</p>
            </div>
          </div>
        </section>

        {/* Trusted By / Partner Companies */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Trusted By / Partner Companies</h2>
            <div className="overflow-hidden">
              <div className="flex animate-scroll space-x-12">
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/agri.png" alt="Agritech Solutions" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">Agritech Solutions</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/circular.png" alt="DataFlow Systems" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">DataFlow Systems</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/cloud sync.png" alt="CloudSync" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">CloudSync</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/Ai-dynamics.png" alt="AI Dynamics" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">AI Dynamics</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/tech crop.png" alt="TechCrop" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">TechCrop</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/innovation lab.png" alt="InnovateLab" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">InnovateLab</div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/agri.png" alt="Agritech Solutions" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">Agritech Solutions</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/circular.png" alt="DataFlow Systems" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">DataFlow Systems</div>
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                    <img src="/cloud sync.png" alt="CloudSync" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-sm text-gray-300 font-medium">CloudSync</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Founder's Message</h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-6xl text-cyan-400 mb-6 font-serif">"</div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                At Next Sphere, we believe technology should be a catalyst for positive change. Our journey began with a simple vision: to create intelligent automation solutions that not only meet today's challenges but anticipate tomorrow's opportunities. Every AI model we build, every automation we design, is crafted with our client's success in mind.
              </p>
              <div className="text-right max-w-3xl mx-auto">
                <div className="text-lg font-semibold text-cyan-400 mb-1">— Tushar Rout</div>
                <div className="text-gray-400">CEO & Founder</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Our Team</h2>
            <div 
              className="relative flex items-center justify-center h-96 overflow-hidden"
              onWheel={handleWheel}
            >
              <div className="flex items-center justify-center space-x-2">
                {getVisibleMembers().map((member, index) => {
                  const { position } = member;
                  let scale, blur, opacity;
                  
                  if (position === 0) {
                    scale = 'scale-125';
                    blur = '';
                    opacity = 'opacity-100';
                  } else if (Math.abs(position) === 1) {
                    scale = 'scale-100';
                    blur = 'blur-sm';
                    opacity = 'opacity-80';
                  } else {
                    scale = 'scale-90';
                    blur = 'blur-sm';
                    opacity = 'opacity-70';
                  }
                  
                  return (
                    <div key={index} className={`text-center transition-all duration-500 ${scale} ${blur} ${opacity}`}>
                      <div className={`${position === 0 ? 'w-40 h-40 text-6xl shadow-xl shadow-cyan-500/30' : Math.abs(position) === 1 ? 'w-32 h-32 text-4xl' : 'w-28 h-28 text-3xl'} bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                        {member.emoji}
                      </div>
                      <h3 className={`${position === 0 ? 'text-3xl' : Math.abs(position) === 1 ? 'text-xl' : 'text-lg'} font-semibold text-cyan-400 mb-2`}>
                        {member.name}
                      </h3>
                      <p className={`text-gray-300 ${position === 0 ? 'text-xl' : Math.abs(position) === 1 ? 'text-base' : 'text-sm'}`}>
                        {member.role}
                      </p>
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevMember}
                className="absolute left-4 w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 transition-all"
              >
                ←
              </button>
              <button 
                onClick={nextMember}
                className="absolute right-4 w-10 h-10 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-cyan-400 transition-all"
              >
                →
              </button>
            </div>
            <p className="text-center text-gray-400 mt-8 text-lg">Drag to scroll & view more</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;