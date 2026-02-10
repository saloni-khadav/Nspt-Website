import React, { useState } from 'react';
import Layout from './Layout';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  const faqs = [
    {
      question: "What technology services do you provide?",
      answer: "We provide comprehensive technology solutions including web development, mobile app development, cloud services, and digital transformation consulting."
    },
    {
      question: "How do I get in touch?",
      answer: "You can reach us through email, phone, or by visiting our office. We're available to discuss your project requirements."
    },
    {
      question: "Can you build custom software?",
      answer: "Yes, we specialize in building custom software solutions tailored to your specific business needs and requirements."
    },
    {
      question: "Which industries do you serve?",
      answer: "We serve various industries including healthcare, finance, e-commerce, education, and manufacturing sectors."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance services to ensure your solutions run smoothly."
    },
    {
      question: "When will I receive a reply?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 font-medium mb-4">GET IN TOUCH</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connect with our experts
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto">
            Contact us for technology solutions, project support, or service inquiries. Our team is ready to assist your business.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Email */}
            <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Drop us a line anytime</p>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextsphere.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors cursor-pointer"
                >
                  info@nextsphere.co.in
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Reach out by phone</p>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                <a href="tel:+919078027948" className="hover:text-blue-700 transition-colors cursor-pointer">+91 9078027948</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your questions, answered fast
            </h2>
            <p className="text-gray-600">
              Browse our most frequently asked questions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full text-left py-4 flex justify-between items-start"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="pb-4">
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Still have questions? Contact our support team.</p>
            <button 
              onClick={() => setShowChatbot(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="py-16 px-4 sm:px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Get in touch with experts
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Contact us for technical help and client and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email our team */}
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-lg">
              <h3 className="font-semibold mb-2">Email our team</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get help from our team and submit a support request from our support portal.
              </p>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@nextsphere.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition-colors cursor-pointer"
                >
                  info@nextsphere.co.in
                </a>
              </p>
            </div>

            {/* Call for support */}
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-lg">
              <h3 className="font-semibold mb-2">Call for support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Contact our support team for assistance or technical support.
              </p>
              <p className="text-blue-600 font-medium text-sm sm:text-base">
                <a href="tel:+919078027948" className="hover:text-blue-700 transition-colors cursor-pointer">+91 9078027948</a>
              </p>
            </div>

            {/* Visit our office */}
            <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-lg">
              <h3 className="font-semibold mb-2">Visit our office</h3>
              <p className="text-sm text-gray-600 mb-4">
                Meet with our specialists during business hours at our office location.
              </p>
              <p className="text-blue-600 font-medium text-sm sm:text-base">Gurugram, Haryana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-md w-full h-96 shadow-lg flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Chat Support</h3>
                </div>
              </div>
              <button 
                onClick={() => setShowChatbot(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold"
              >
                ×
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-bold">N</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-gray-800">Hi! I'm here to help. How can I assist you today?</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
};

export default Contact;
