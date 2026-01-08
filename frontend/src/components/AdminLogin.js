import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple hardcoded admin credentials
    if (credentials.username === 'admin' && credentials.password === 'nspt2024') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black/30 via-slate-900/50 to-emerald-600/50 flex items-center justify-center py-20 px-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-400 text-center">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AdminLogin;