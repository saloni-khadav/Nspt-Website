import React, { useState, useRef, useEffect } from 'react';
import Layout from './Layout';

const HelpCenter = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! How can I assist you today?";
    } else if (msg.includes('service') || msg.includes('what do you do')) {
      return "We offer Web Development, AI & Automation, ERP Solutions, HR Applications, Technology Consulting, and App Development services.";
    } else if (msg.includes('contact') || msg.includes('reach')) {
      return "You can contact us through our Contact page or email us directly. Would you like me to guide you there?";
    } else if (msg.includes('price') || msg.includes('cost')) {
      return "Our pricing varies based on project requirements. Please contact us for a detailed quote.";
    } else if (msg.includes('time') || msg.includes('duration')) {
      return "Project timelines depend on scope and complexity. Most projects are completed within agreed schedules after detailed review.";
    } else if (msg.includes('help')) {
      return "I'm here to help! You can ask me about our services, pricing, contact information, or any general questions.";
    } else {
      return "I'm not sure about that. Please contact our support team for more specific information.";
    }
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { text: getBotResponse(input), sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
            <p className="text-lg text-gray-600">Ask me anything about our services</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
