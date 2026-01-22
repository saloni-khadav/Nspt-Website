import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    experience: '',
    qualification: ''
  });
  const [selectedApplications, setSelectedApplications] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin-login');
      return;
    }
    fetchApplications();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  const exportToExcel = () => {
    // Create CSV content
    const headers = ['Name', 'Email', 'Position', 'Experience', 'Qualification', 'Date', 'Resume Link'];
    const csvContent = [
      headers.join(','),
      ...applications.map(app => [
        `"${app.fullName}"`,
        `"${app.email}"`,
        `"${app.position}"`,
        `"${app.experience}"`,
        `"${app.qualification}"`,
        `"${new Date(app.submittedAt).toLocaleDateString()}"`,
        `"http://localhost:5000/${app.resumePath}"`
      ].join(','))
    ].join('\n');

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `career_applications_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/careers/applications');
      const data = await response.json();
      setApplications(data);
      setFilteredApplications(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = applications;

    // Date filter
    if (filters.dateFrom) {
      filtered = filtered.filter(app => 
        new Date(app.submittedAt) >= new Date(filters.dateFrom)
      );
    }
    if (filters.dateTo) {
      filtered = filtered.filter(app => 
        new Date(app.submittedAt) <= new Date(filters.dateTo)
      );
    }

    // Experience filter - range based
    if (filters.experience) {
      const expValue = filters.experience.toLowerCase();
      filtered = filtered.filter(app => {
        const appExp = app.experience.toLowerCase();
        const expNum = parseInt(appExp.match(/\d+/)?.[0] || '0');
        const filterNum = parseInt(expValue.match(/\d+/)?.[0] || '0');
        
        // If filter contains range like "2-4" or "2 to 4"
        const rangeMatch = expValue.match(/(\d+)\s*[-to]\s*(\d+)/);
        if (rangeMatch) {
          const minExp = parseInt(rangeMatch[1]);
          const maxExp = parseInt(rangeMatch[2]);
          return expNum >= minExp && expNum <= maxExp;
        }
        
        // If filter is just a number, match exactly that number
        return expNum === filterNum;
      });
    }

    // Qualification filter
    if (filters.qualification) {
      filtered = filtered.filter(app => 
        app.qualification.toLowerCase().includes(filters.qualification.toLowerCase())
      );
    }

    setFilteredApplications(filtered);
  };

  const clearFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      experience: '',
      qualification: ''
    });
    setFilteredApplications(applications);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(filteredApplications.map(app => app._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectApplication = (appId) => {
    if (selectedApplications.includes(appId)) {
      setSelectedApplications(selectedApplications.filter(id => id !== appId));
    } else {
      setSelectedApplications([...selectedApplications, appId]);
    }
  };

  const deleteSelectedApplications = async () => {
    if (selectedApplications.length === 0) {
      alert('Please select applications to delete');
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${selectedApplications.length} application(s)?`)) {
      try {
        const response = await fetch('http://localhost:5000/api/careers/delete-multiple', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: selectedApplications }),
        });

        if (response.ok) {
          // Refresh applications list
          fetchApplications();
          setSelectedApplications([]);
          setSelectAll(false);
          alert('Applications deleted successfully');
        } else {
          alert('Error deleting applications');
        }
      } catch (error) {
        console.error('Error deleting applications:', error);
        alert('Error deleting applications');
      }
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-cyan-400 text-xl">Loading applications...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black/30 via-slate-900/50 to-emerald-600/50 pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-400">Career Applications Dashboard</h1>
            <div className="flex gap-4">
              <button 
                onClick={exportToExcel}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Export to Excel
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
          
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Total Applications: {filteredApplications.length}</h2>
              
              {/* Filter Section */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">From Date</label>
                    <input
                      type="date"
                      value={filters.dateFrom}
                      onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">To Date</label>
                    <input
                      type="date"
                      value={filters.dateTo}
                      onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 2-4 (range), 2 to 5 (range), or 3 (exact)"
                      value={filters.experience}
                      onChange={(e) => setFilters({...filters, experience: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">Qualification</label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech"
                      value={filters.qualification}
                      onChange={(e) => setFilters({...filters, qualification: e.target.value})}
                      className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={applyFilters}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={clearFilters}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
                  >
                    Clear Filters
                  </button>
                  {selectedApplications.length > 0 && (
                    <button
                      onClick={deleteSelectedApplications}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      Delete Selected ({selectedApplications.length})
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-cyan-400 font-semibold py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2"
                      />
                      Select All
                    </th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Name</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Email</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Position</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Experience</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Qualification</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Resume</th>
                    <th className="text-cyan-400 font-semibold py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app, index) => (
                    <tr key={app._id} className="border-b border-gray-700 hover:bg-white/5">
                      <td className="text-gray-300 py-4 px-4">
                        <input
                          type="checkbox"
                          checked={selectedApplications.includes(app._id)}
                          onChange={() => handleSelectApplication(app._id)}
                        />
                      </td>
                      <td className="text-gray-300 py-4 px-4">{app.fullName}</td>
                      <td className="text-gray-300 py-4 px-4">{app.email}</td>
                      <td className="text-gray-300 py-4 px-4">{app.position}</td>
                      <td className="text-gray-300 py-4 px-4">{app.experience}</td>
                      <td className="text-gray-300 py-4 px-4">{app.qualification}</td>
                      <td className="text-gray-300 py-4 px-4">
                        <a 
                          href={`http://localhost:5000/${app.resumePath}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 underline"
                        >
                          View Resume
                        </a>
                      </td>
                      <td className="text-gray-300 py-4 px-4">
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredApplications.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-lg">No applications found matching the filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;