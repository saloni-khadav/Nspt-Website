import React from 'react';

const QuickStats = () => {
  const stats = [
    { number: '10+', label: 'Clients' },
    { number: '7+', label: 'Farmers Network' },
    { number: '15+', label: 'Business Teams' },
    { number: '3', label: 'Smart Platforms' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Quick Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;