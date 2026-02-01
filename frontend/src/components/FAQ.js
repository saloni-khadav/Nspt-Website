import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer consulting, web and app development, AI, ERP, HR solutions, and R&D for businesses."
    },
    {
      question: "How can I get started with your services?",
      answer: "Share your project details with us. We'll review your needs and guide you through the next steps."
    },
    {
      question: "Are your solutions customizable?",
      answer: "Yes, our services are customized to match your business requirements and objectives."
    },
    {
      question: "What industries do you work with?",
      answer: "We support finance, healthcare, retail, manufacturing, and other sectors with adaptable solutions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Answers to your top questions
          </h2>
          <p className="text-gray-400 text-lg">
            Quick information about our technology services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 mb-24">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-6 flex justify-between items-center hover:text-gray-300 transition-colors"
              >
                <span className="text-white text-2xl ml-auto">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <p className="text-white text-lg mb-6">
            Have more questions? Contact our team for help.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;