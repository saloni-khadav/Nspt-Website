import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInquiries, setShowInquiries] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [inquiryFilters, setInquiryFilters] = useState({
    date: '',
    helpType: ''
  });
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

  const fetchInquiries = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact/messages');
      const data = await response.json();
      setInquiries(data);
      setFilteredInquiries(data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    }
  };

  const applyInquiryFilters = () => {
    let filtered = inquiries;

    if (inquiryFilters.date) {
      filtered = filtered.filter(inquiry => {
        const inquiryDate = new Date(inquiry.submittedAt).toDateString();
        const filterDate = new Date(inquiryFilters.date).toDateString();
        return inquiryDate === filterDate;
      });
    }
    if (inquiryFilters.helpType) {
      filtered = filtered.filter(inquiry => 
        inquiry.helpType && inquiry.helpType.toLowerCase().includes(inquiryFilters.helpType.toLowerCase())
      );
    }

    setFilteredInquiries(filtered);
  };

  const clearInquiryFilters = () => {
    setInquiryFilters({
      date: '',
      helpType: ''
    });
    setFilteredInquiries(inquiries);
  };

  const handleViewInquiries = () => {
    navigate('/contact-inquiries');
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
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-gray-900 text-xl">Loading applications...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Career Applications Dashboard</h1>
            <div className="flex gap-4">
              <button 
                onClick={handleViewInquiries}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                View Inquiry
              </button>
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
          
          <div className="bg-purple-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Total Applications: {filteredApplications.length}</h2>
              
              {/* Filter Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Filters</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">From Date</label>
                    <input
                      type="date"
                      value={filters.dateFrom}
                      onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">To Date</label>
                    <input
                      type="date"
                      value={filters.dateTo}
                      onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 2-4 (range), 2 to 5 (range), or 3 (exact)"
                      value={filters.experience}
                      onChange={(e) => setFilters({...filters, experience: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2">Qualification</label>
                    <input
                      type="text"
                      placeholder="e.g. B.Tech"
                      value={filters.qualification}
                      onChange={(e) => setFilters({...filters, qualification: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                    />
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={applyFilters}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
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
              <table className="w-full text-left bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-black font-bold py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2"
                      />
                      Select All
                    </th>
                    <th className="text-black font-bold py-3 px-4">Name</th>
                    <th className="text-black font-bold py-3 px-4">Email</th>
                    <th className="text-black font-bold py-3 px-4">Position</th>
                    <th className="text-black font-bold py-3 px-4">Experience</th>
                    <th className="text-black font-bold py-3 px-4">Qualification</th>
                    <th className="text-black font-bold py-3 px-4">Resume</th>
                    <th className="text-black font-bold py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app, index) => (
                    <tr key={app._id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="text-gray-700 py-4 px-4">
                        <input
                          type="checkbox"
                          checked={selectedApplications.includes(app._id)}
                          onChange={() => handleSelectApplication(app._id)}
                        />
                      </td>
                      <td className="text-gray-700 py-4 px-4">{app.fullName}</td>
                      <td className="text-gray-700 py-4 px-4">{app.email}</td>
                      <td className="text-gray-700 py-4 px-4">{app.position}</td>
                      <td className="text-gray-700 py-4 px-4">{app.experience}</td>
                      <td className="text-gray-700 py-4 px-4">{app.qualification}</td>
                      <td className="text-gray-700 py-4 px-4">
                        <a 
                          href={`http://localhost:5000/${app.resumePath}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 underline"
                        >
                          View Resume
                        </a>
                      </td>
                      <td className="text-gray-700 py-4 px-4">
                        {new Date(app.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredApplications.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 text-lg">No applications found matching the filters.</p>
              </div>
            )}
          </div>
        </div>

        {/* Inquiries Modal */}
        {showInquiries && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 pt-20">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Inquiries</h2>
                    <p className="text-gray-600">Manage customer inquiries and support requests</p>
                  </div>
                  <button 
                    onClick={() => setShowInquiries(false)}
                    className="text-gray-400 hover:text-gray-600 text-3xl font-bold transition-colors bg-gray-100 hover:bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    ×
                  </button>
                </div>

                {/* Stats */}
                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Total Inquiries</h3>
                      <p className="text-3xl font-bold text-blue-600">{filteredInquiries.length}</p>
                    </div>
                    <div className="bg-blue-100 rounded-full p-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Inquiry Filters */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-600 mb-4">Inquiry Filters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">Date</label>
                      <input
                        type="date"
                        value={inquiryFilters.date}
                        onChange={(e) => setInquiryFilters({...inquiryFilters, date: e.target.value})}
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm mb-2">Help Type</label>
                      <input
                        type="text"
                        placeholder="e.g. business, technical"
                        value={inquiryFilters.helpType}
                        onChange={(e) => setInquiryFilters({...inquiryFilters, helpType: e.target.value})}
                        className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={applyInquiryFilters}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      Apply Filters
                    </button>
                    <button
                      onClick={clearInquiryFilters}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-black font-bold py-4 px-6">Name</th>
                          <th className="text-black font-bold py-4 px-6">Email</th>
                          <th className="text-black font-bold py-4 px-6">Phone</th>
                          <th className="text-black font-bold py-4 px-6">Help Type</th>
                          <th className="text-black font-bold py-4 px-6">Message</th>
                          <th className="text-black font-bold py-4 px-6">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredInquiries.map((inquiry, index) => (
                          <tr key={inquiry._id || index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="text-gray-700 py-4 px-6 font-medium">{`${inquiry.firstName || ''} ${inquiry.lastName || ''}`.trim()}</td>
                            <td className="text-gray-700 py-4 px-6">{inquiry.email}</td>
                            <td className="text-gray-700 py-4 px-6">{inquiry.phone}</td>
                            <td className="text-gray-700 py-4 px-6">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {inquiry.helpType}
                              </span>
                            </td>
                            <td className="text-gray-700 py-4 px-6 max-w-xs">
                              <div className="truncate" title={inquiry.message}>
                                {inquiry.message}
                              </div>
                            </td>
                            <td className="text-gray-700 py-4 px-6 text-sm">
                              {inquiry.submittedAt ? new Date(inquiry.submittedAt).toLocaleDateString() : 'N/A'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {filteredInquiries.length === 0 && (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4-4-4m0 0l-4 4-4-4" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg font-medium">No inquiries found</p>
                    <p className="text-gray-500 text-sm">Customer inquiries will appear here when submitted</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminDashboard;