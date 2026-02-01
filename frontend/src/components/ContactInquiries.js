import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const exportToExcel = () => {
    const headers = ['Name', 'Email', 'Phone', 'Help Type', 'Message', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredInquiries.map(inquiry => [
        `"${inquiry.firstName || ''} ${inquiry.lastName || ''}"`.trim(),
        `"${inquiry.email}"`,
        `"${inquiry.phone}"`,
        `"${inquiry.helpType}"`,
        `"${inquiry.message}"`,
        `"${inquiry.submittedAt ? new Date(inquiry.submittedAt).toLocaleDateString() : 'N/A'}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `contact_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 min-w-[700px] sm:min-w-0">
      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Total Inquiries: {filteredInquiries.length}</h3>
        </div>
        <button 
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
        >
          Export to Excel
        </button>
      </div>

      {/* Inquiry Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Inquiry Filters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Date</label>
            <input
              type="date"
              value={inquiryFilters.date}
              onChange={(e) => setInquiryFilters({...inquiryFilters, date: e.target.value})}
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Help Type</label>
            <input
              type="text"
              placeholder="e.g. business, technical"
              value={inquiryFilters.helpType}
              onChange={(e) => setInquiryFilters({...inquiryFilters, helpType: e.target.value})}
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:border-blue-600 outline-none text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
          <button
            onClick={applyInquiryFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors text-sm"
          >
            Apply Filters
          </button>
          <button
            onClick={clearInquiryFilters}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors text-sm"
          >
            Clear Filters
          </button>
          {selectedInquiries.length > 0 && (
            <button
              onClick={deleteSelectedInquiries}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors text-sm"
            >
              <span className="hidden sm:inline">Delete Selected</span>
              <span className="sm:hidden">Delete</span> ({selectedInquiries.length})
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table className="w-full text-left min-w-[700px]">
              <thead className="sticky top-0 bg-gray-50 z-10">
                <tr className="border-b border-gray-200">
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="mr-1 sm:mr-2"
                    />
                    <span className="hidden sm:inline">Select All</span>
                    <span className="sm:hidden">All</span>
                  </th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Name</th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Email</th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Phone</th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Help Type</th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Message</th>
                  <th className="text-black font-bold py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inquiry, index) => (
                  <tr key={inquiry._id || index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4">
                      <input
                        type="checkbox"
                        checked={selectedInquiries.includes(inquiry._id)}
                        onChange={() => handleSelectInquiry(inquiry._id)}
                      />
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="max-w-[80px] sm:max-w-none truncate" title={`${inquiry.firstName || ''} ${inquiry.lastName || ''}`.trim()}>
                        {`${inquiry.firstName || ''} ${inquiry.lastName || ''}`.trim()}
                      </div>
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="max-w-[100px] sm:max-w-none truncate" title={inquiry.email}>
                        {inquiry.email}
                      </div>
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="max-w-[80px] sm:max-w-none truncate" title={inquiry.phone}>
                        {inquiry.phone}
                      </div>
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="max-w-[70px] sm:max-w-none truncate" title={inquiry.helpType}>
                        {inquiry.helpType}
                      </div>
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="max-w-[100px] sm:max-w-xs truncate" title={inquiry.message}>
                        {inquiry.message}
                      </div>
                    </td>
                    <td className="text-gray-700 py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                      <div className="whitespace-nowrap">
                        {inquiry.submittedAt ? new Date(inquiry.submittedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: window.innerWidth < 640 ? '2-digit' : 'numeric'
                        }) : 'N/A'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredInquiries.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-600 text-sm sm:text-lg">No inquiries found matching the filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInquiries;