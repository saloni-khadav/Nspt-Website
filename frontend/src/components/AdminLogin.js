import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      <div className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
        <div className="bg-purple-50 border border-gray-200 rounded-2xl p-8 w-full max-w-md shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Admin Login</h1>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 text-gray-900 placeholder-gray-400 transition-colors pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-3 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            
            {error && (
              <div className="text-red-600 text-center">{error}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300"
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