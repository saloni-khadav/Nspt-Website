import React from 'react';
import Layout from './Layout';

const Careers = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-6 leading-tight">
            We're building the future — Join us!
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Encourage visitors to become part of the Next Sphere journey by joining a forward-thinking, AI-driven tech company.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-12 hover:bg-white/10 transition-all duration-300">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Current Openings</h2>
              <p className="text-gray-400 text-lg">(can link to HR email or a form)</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-8 text-center">Departments:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Tech
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  HR
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Accounts
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Operations
                </button>
                <button className="bg-gradient-to-r from-blue-500 to-green-500 px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                  Agri Research
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Future Talent Pipeline</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            "Even if we're not hiring right now, drop your resume — we'll reach out when roles open."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all">
              Submit Resume
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 backdrop-blur-md transition-all">
              Join Talent Pool
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;