import React, { useState } from 'react';
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
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center max-w-5xl mx-auto px-6">
          <h1 className="mb-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Empowering Businesses with
            </div>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Intelligent Automation
            </div>
          </h1>
          
          <div className="mb-8">
            <div className="text-xl text-emerald-400 mb-2">Next Sphere Product and Technology</div>
            <div className="text-2xl font-semibold text-cyan-400">From Human to AI</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
              Explore Our Solutions
            </button>
            <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400/10 backdrop-blur-md transition-all">
              Request a Demo
            </button>
          </div>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
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
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-gray-300 text-lg">Clients</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">7+</div>
                <div className="text-gray-300 text-lg">Farmers Network</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-gray-300 text-lg">Business Teams</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">3</div>
                <div className="text-gray-300 text-lg">Smart Platforms</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Highlights */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Key Features & Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">👥</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Smart HR</h3>
                <p className="text-gray-300 leading-relaxed">AI-powered HR Automation Platform</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">NextBook</h3>
                <p className="text-gray-300 leading-relaxed">Intelligent Accounting Solution</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI & Analytics Solutions</h3>
                <p className="text-gray-300 leading-relaxed">Smart Decision-Making with AI Insights</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🚁</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Agritech Drone Innovation</h3>
                <p className="text-gray-300 leading-relaxed">Empowering Farmers with Smart Agritech</p>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🔒</div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Data Security & Compliance</h3>
                <p className="text-gray-300 leading-relaxed">Enterprise-grade Protection</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By / Partner Companies */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Trusted By / Partner Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">A</div>
                <div className="text-sm text-gray-300 font-medium">Agritech Solutions</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">D</div>
                <div className="text-sm text-gray-300 font-medium">DataFlow Systems</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">C</div>
                <div className="text-sm text-gray-300 font-medium">CloudSync</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">A</div>
                <div className="text-sm text-gray-300 font-medium">AI Dynamics</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">T</div>
                <div className="text-sm text-gray-300 font-medium">TechCrop</div>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-xl p-6 text-center hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">I</div>
                <div className="text-sm text-gray-300 font-medium">InnovateLab</div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Founder's Message</h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 text-center hover:bg-white/10 transition-all duration-300">
              <div className="text-8xl text-cyan-400 mb-8 font-serif">"</div>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                At Next Sphere, we believe technology should be a catalyst for positive change. Our journey began with a simple vision: to create intelligent automation solutions that not only meet today's challenges but anticipate tomorrow's opportunities. Every AI model we build, every automation we design, is crafted with our client's success in mind.
              </p>
              <div className="text-right max-w-4xl mx-auto">
                <div className="text-xl font-semibold text-cyan-400 mb-2">— Tushar Rout</div>
                <div className="text-gray-400 text-lg">CEO & Founder</div>
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