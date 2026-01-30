import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const ContactInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [filteredInquiries, setFilteredInquiries] = useState([]);
  const [inquiryFilters, setInquiryFilters] = useState({
    date: '',
    helpType: ''
  });
  const [selectedInquiries, setSelectedInquiries] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin-login');
      return;
    }
    fetchInquiries();
  }, [navigate]);

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

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedInquiries([]);
    } else {
      setSelectedInquiries(filteredInquiries.map(inquiry => inquiry._id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectInquiry = (inquiryId) => {
    if (selectedInquiries.includes(inquiryId)) {
      setSelectedInquiries(selectedInquiries.filter(id => id !== inquiryId));
    } else {
      setSelectedInquiries([...selectedInquiries, inquiryId]);
    }
  };

  const deleteSelectedInquiries = async () => {
    if (selectedInquiries.length === 0) {
      alert('Please select inquiries to delete');
      return;
    }

    if (window.confirm(`Are you sure you want to delete ${selectedInquiries.length} inquiry(ies)?`)) {
      try {
        const response = await fetch('http://localhost:5000/api/contact/delete-multiple', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ids: selectedInquiries }),
        });

        if (response.ok) {
          fetchInquiries();
          setSelectedInquiries([]);
          setSelectAll(false);
          alert('Inquiries deleted successfully');
        } else {
          alert('Error deleting inquiries');
        }
      } catch (error) {
        console.error('Error deleting inquiries:', error);
        alert('Error deleting inquiries');
      }
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Inquiries</h1>
              <p className="text-gray-600">Manage customer inquiries and support requests</p>
            </div>
            <button 
              onClick={() => navigate('/admin')}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Back to Dashboard
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-xl p-6">
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
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Selected</h3>
                  <p className="text-3xl font-bold text-green-600">{selectedInquiries.length}</p>
                </div>
                <div className="bg-green-100 rounded-full p-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
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
              {selectedInquiries.length > 0 && (
                <button
                  onClick={deleteSelectedInquiries}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                >
                  Delete Selected ({selectedInquiries.length})
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-black font-bold py-4 px-6">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2"
                      />
                      Select All
                    </th>
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
                      <td className="text-gray-700 py-4 px-6">
                        <input
                          type="checkbox"
                          checked={selectedInquiries.includes(inquiry._id)}
                          onChange={() => handleSelectInquiry(inquiry._id)}
                        />
                      </td>
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
                  ))}}
                </tbody>
              </table>
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
    </Layout>
  );
};

export default ContactInquiries;