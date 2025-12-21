import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, activePage = 'Home' }) => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{
      background: `radial-gradient(circle at 50% 0%, #0e2a47 0%, #071a2d 35%, #050d18 65%, #02070e 100%)`
    }}>
      <Header activePage={activePage} />
      
      {/* Background Effects */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 50% 0%, #0e2a47 0%, #071a2d 35%, #050d18 65%, #02070e 100%)`
      }}></div>
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at 50% 40%, rgba(0,180,255,0.12) 0%, transparent 50%)`
      }}></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(0,180,255,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0,180,255,0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0,180,255,0.04) 0%, transparent 50%)
        `
      }}></div>

      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;