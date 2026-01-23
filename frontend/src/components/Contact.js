import React, { useRef, useState } from 'react';
import Layout from './Layout';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8bkkywl',
        'template_ktacbu7',
        form.current,
        '3yNEnOsW3Dzr4rXKE'
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success('Message sent successfully! ✅', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          console.error('Error sending message:', error);
          toast.error('Failed to send message. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      );
  };
  return (
    <Layout>
      <ToastContainer />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">Get In Touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-400/50"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="bg-gradient-to-br from-teal-500/20 to-green-500/20 border border-teal-400/30 rounded-xl p-8 shadow-lg shadow-teal-500/10">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 text-xl">📞</span>
                    </div>
                    <span className="text-gray-300 text-lg">+91-90780 27948</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 text-xl">✉️</span>
                    </div>
                    <span className="text-gray-300 text-lg">info@nextsphere.co.in</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 text-xl">📍</span>
                    </div>
                    <span className="text-gray-300 text-lg">Gurgaon, Haryana, India</span>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all text-white font-bold">f</a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all text-white font-bold">X</a>
                    <a href="https://www.linkedin.com/company/nsptai/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all text-white font-bold">in</a>
                    <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all text-white">▶</a>
                  </div>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="user_name"
                      placeholder="Enter Your First Name"
                      required
                      className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="last_name"
                      placeholder="Enter Your Last Name"
                      className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Enter Your Company Name"
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Enter Your Email"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors"
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message"
                    placeholder="Write your message..."
                    rows="5"
                    required
                    className="w-full bg-transparent border-b-2 border-gray-600 focus:border-cyan-400 outline-none py-3 text-white placeholder-gray-400 transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all mt-8"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;