import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import ContactInquiries from './ContactInquiries';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('careers'); // New state for sidebar navigation
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [filteredPromotions, setFilteredPromotions] = useState([]);
  const [selectedPromotions, setSelectedPromotions] = useState([]);
  const [selectAllPromotions, setSelectAllPromotions] = useState(false);
  const [promotionFilters, setPromotionFilters] = useState({
    dateFrom: '',
    dateTo: '',
    position: ''
  });
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
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectMessage, setRejectMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin-login');
      return;
    }
    fetchApplications();
    if (activeSection === 'inquiries') {
      fetchInquiries();
    }
    if (activeSection === 'promotions') {
      fetchPromotions();
    }
  }, [navigate, activeSection]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin-login');
  };

  const exportPromotionsToExcel = () => {
    const headers = ['Email', 'Position', 'Date'];
    const csvContent = [
      headers.join(','),
      ...promotions.map(promo => [
        `"${promo.email}"`,
        `"${promo.position || 'N/A'}"`,
        `"${new Date(promo.subscribedAt).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `promotions_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const applyPromotionFilters = () => {
    let filtered = promotions;

    if (promotionFilters.dateFrom) {
      filtered = filtered.filter(promo => {
        const promoDate = new Date(promo.subscribedAt).toDateString();
        const filterDate = new Date(promotionFilters.dateFrom).toDateString();
        return promoDate === filterDate;
      });
    }
    if (promotionFilters.position) {
      filtered = filtered.filter(promo => 
        promo.position && promo.position.toLowerCase().includes(promotionFilters.position.toLowerCase())
      );
    }

    setFilteredPromotions(filtered);
  };

  const clearPromotionFilters = () => {
    setPromotionFilters({
      dateFrom: '',
      dateTo: '',
      position: ''
    });
    setFilteredPromotions(promotions);
  };

  const handleSelectAllPromotions = () => {
    if (selectAllPromotions) {
      setSelectedPromotions([]);
    } else {
      setSelectedPromotions(filteredPromotions.map(promo => promo._id));
    }
    setSelectAllPromotions(!selectAllPromotions);
  };

  const handleSelectPromotion = (promoId) => {
    if (selectedPromotions.includes(promoId)) {
      setSelectedPromotions(selectedPromotions.filter(id => id !== promoId));
    } else {
      setSelectedPromotions([...selectedPromotions, promoId]);
    }
  };

  const deleteSelectedPromotions = async () => {
    if (selectedPromotions.length === 0) {
      alert('Please select promotions to delete');
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${selectedPromotions.length} promotion(s)?`)) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/promotion/delete-multiple`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: selectedPromotions }),
        });

        if (response.ok) {
          fetchPromotions();
          setSelectedPromotions([]);
          setSelectAllPromotions(false);
          alert('Promotions deleted successfully');
        } else {
          alert('Error deleting promotions');
        }
      } catch (error) {
        console.error('Error deleting promotions:', error);
        alert('Error deleting promotions');
      }
    }
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
        `"${process.env.REACT_APP_API_URL}/${app.resumePath}"`
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

  const fetchPromotions = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/promotion/all`);
      const data = await response.json();
      setPromotions(data);
      setFilteredPromotions(data);
    } catch (error) {
      console.error('Error fetching promotions:', error);
    }
  };

  const fetchApplications = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/careers/applications`);
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact/messages`);
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
    setActiveSection('inquiries');
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

  const sendRejectionEmails = async () => {
    if (selectedApplications.length === 0) {
      alert('Please select applications to send rejection emails');
      return;
    }
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/careers/send-rejection`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ids: selectedApplications,
          message: rejectMessage.trim() || undefined
        }),
      });
      
      if (response.ok) {
        const result = await response.json();
        alert(`Rejection emails sent to ${result.count} candidates`);
        setShowRejectModal(false);
        setRejectMessage('');
        setSelectedApplications([]);
        setSelectAll(false);
      } else {
        alert('Error sending rejection emails');
      }
    } catch (error) {
      console.error('Error sending rejection emails:', error);
      alert('Error sending rejection emails');
    }
  };

  const deleteSelectedApplications = async () => {
    if (selectedApplications.length === 0) {
      alert('Please select applications to delete');
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${selectedApplications.length} application(s)?`)) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/careers/delete-multiple`, {
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
      <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
        <div className="flex items-center justify-center h-64">
          <div className="text-gray-900 text-xl">Loading applications...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout activeSection={activeSection} setActiveSection={setActiveSection}>
      {activeSection === 'careers' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Total Applications: {filteredApplications.length}</h3>
            </div>
            <button 
              onClick={exportToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
            >
              Export to Excel
            </button>
          </div>
          
          {/* Filter Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Filters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2">From Date</label>
                <input
                  type="date"
                  value={filters.dateFrom}
                  onChange={(e) => setFilters({...filters, dateFrom: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">To Date</label>
                <input
                  type="date"
                  value={filters.dateTo}
                  onChange={(e) => setFilters({...filters, dateTo: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Experience</label>
                <input
                  type="text"
                  placeholder="e.g. 2-4 years"
                  value={filters.experience}
                  onChange={(e) => setFilters({...filters, experience: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Qualification</label>
                <input
                  type="text"
                  placeholder="e.g. B.Tech"
                  value={filters.qualification}
                  onChange={(e) => setFilters({...filters, qualification: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
              <button
                onClick={applyFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors text-sm"
              >
                Clear Filters
              </button>
              {selectedApplications.length > 0 && (
                <>
                  <button
                    onClick={() => setShowRejectModal(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition-colors text-sm"
                  >
                    <span className="hidden sm:inline">Send Rejection Email</span>
                    <span className="sm:hidden">Reject</span> ({selectedApplications.length})
                  </button>
                  <button
                    onClick={deleteSelectedApplications}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm"
                  >
                    <span className="hidden sm:inline">Delete Selected</span>
                    <span className="sm:hidden">Delete</span> ({selectedApplications.length})
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <table className="w-full text-left min-w-[700px]">
                  <thead className="sticky top-0 bg-gray-50 z-10">
                    <tr className="border-b border-gray-200">
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          className="mr-0"
                        />
                        <span className="hidden sm:inline">Select All</span>
                        <span className="sm:hidden">All</span>
                      </th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Name</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Email</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Position</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Experience</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Qualification</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Resume</th>
                      <th className="text-black font-bold py-2 sm:py-3 px-0 sm:px-4 text-[10px] sm:text-sm">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((app, index) => (
                      <tr key={app._id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4">
                          <input
                            type="checkbox"
                            checked={selectedApplications.includes(app._id)}
                            onChange={() => handleSelectApplication(app._id)}
                          />
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">
                          <div className="max-w-[60px] sm:max-w-none truncate" title={app.fullName}>
                            {app.fullName}
                          </div>
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">
                          <div className="max-w-[80px] sm:max-w-none truncate" title={app.email}>
                            {app.email}
                          </div>
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">
                          <div className="max-w-[60px] sm:max-w-none truncate" title={app.position}>
                            {app.position}
                          </div>
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">{app.experience}</td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">
                          <div className="max-w-[60px] sm:max-w-none truncate" title={app.qualification}>
                            {app.qualification}
                          </div>
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4">
                          {app.resumePath ? (
                            <a 
                              href={`${process.env.REACT_APP_API_URL}/api/careers/resume/${app.resumePath}`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-700 underline text-[10px] sm:text-sm"
                            >
                              View
                            </a>
                          ) : (
                            <span className="text-gray-400 text-[10px] sm:text-sm">No file</span>
                          )}
                        </td>
                        <td className="text-gray-700 py-2 sm:py-4 px-0 sm:px-4 text-[10px] sm:text-sm">
                          <div className="whitespace-nowrap">
                            {new Date(app.submittedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: window.innerWidth < 640 ? '2-digit' : 'numeric'
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredApplications.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 text-sm sm:text-lg">No applications found matching the filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'promotions' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Total Promotions: {filteredPromotions.length}</h3>
            <button 
              onClick={exportPromotionsToExcel}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Export to Excel
            </button>
          </div>
          
          {/* Filter Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Filters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2">Date</label>
                <input
                  type="date"
                  value={promotionFilters.dateFrom}
                  onChange={(e) => setPromotionFilters({...promotionFilters, dateFrom: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2">Position</label>
                <input
                  type="text"
                  placeholder="e.g. Services Page CTA"
                  value={promotionFilters.position}
                  onChange={(e) => setPromotionFilters({...promotionFilters, position: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
              <button
                onClick={applyPromotionFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm"
              >
                Apply Filters
              </button>
              <button
                onClick={clearPromotionFilters}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors text-sm"
              >
                Clear Filters
              </button>
              {selectedPromotions.length > 0 && (
                <button
                  onClick={deleteSelectedPromotions}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm"
                >
                  Delete Selected ({selectedPromotions.length})
                </button>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-200">
                    <th className="text-black font-bold py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectAllPromotions}
                        onChange={handleSelectAllPromotions}
                        className="mr-2"
                      />
                      Select All
                    </th>
                    <th className="text-black font-bold py-3 px-4">Email</th>
                    <th className="text-black font-bold py-3 px-4">Position</th>
                    <th className="text-black font-bold py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPromotions.map((promo, index) => (
                    <tr key={promo._id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="text-gray-700 py-4 px-4">
                        <input
                          type="checkbox"
                          checked={selectedPromotions.includes(promo._id)}
                          onChange={() => handleSelectPromotion(promo._id)}
                        />
                      </td>
                      <td className="text-gray-700 py-4 px-4">{promo.email}</td>
                      <td className="text-gray-700 py-4 px-4">{promo.position || 'N/A'}</td>
                      <td className="text-gray-700 py-4 px-4">
                        {new Date(promo.subscribedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredPromotions.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-600">No promotions found matching the filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'inquiries' && (
        <div>
          <ContactInquiries />
        </div>
      )}


        
        {/* Rejection Email Modal */}
        {showRejectModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
            <div className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full shadow-xl">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Send Rejection Email</h2>
                  <button 
                    onClick={() => setShowRejectModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Sending rejection email to {selectedApplications.length} selected candidate(s)
                </p>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Custom Message (Optional - Leave blank for default message)
                  </label>
                  <textarea
                    value={rejectMessage}
                    onChange={(e) => setRejectMessage(e.target.value)}
                    placeholder="Enter custom rejection message or leave blank for default message..."
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none h-32 resize-none"
                  />
                </div>
                
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setShowRejectModal(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendRejectionEmails}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition-colors"
                  >
                    Send Emails
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </AdminLayout>
  );
};

export default AdminDashboard;