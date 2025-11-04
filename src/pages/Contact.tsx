import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:info@fraudbuster.co.in?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    
    // Show success message (you could add a toast notification here)
    alert('Thank you for your message! Your email client will open to send the message.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Technology Hub', 'Innovation Center, Floor 12', 'Global Operations Center']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Contact via email for phone support']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fraudbuster.co.in']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 7:00 PM IST', 'Saturday: 10:00 AM - 4:00 PM IST', 'Sunday: Closed']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to secure your business? Contact our team of experts to discuss your fraud prevention needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your fraud prevention needs..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fintech Security Insights
            </h2>
            <p className="text-xl text-gray-300">
              Real-time fraud prevention statistics and industry trends
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Real-time Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Live Fraud Prevention Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <div>
                    <div className="text-2xl font-bold text-green-400">₹2.3 Cr</div>
                    <div className="text-gray-300">Fraud Blocked Today</div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">45,892</div>
                    <div className="text-gray-300">Transactions Processed</div>
                  </div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">99.7%</div>
                    <div className="text-gray-300">Detection Accuracy</div>
                  </div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                  <div>
                    <div className="text-2xl font-bold text-orange-400">23ms</div>
                    <div className="text-gray-300">Avg Response Time</div>
                  </div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </motion.div>

            {/* Industry Trends */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Fintech Security Trends</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Digital Payment Growth</h4>
                  <p className="text-gray-300 text-sm">UPI transactions increased by 76% in 2024, making fraud prevention more critical than ever.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">AI-Powered Detection</h4>
                  <p className="text-gray-300 text-sm">Machine learning models now detect 95% of fraud attempts within milliseconds of transaction initiation.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Regulatory Compliance</h4>
                  <p className="text-gray-300 text-sm">New guidelines require real-time fraud monitoring and automated reporting for all financial institutions.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-lg font-semibold text-orange-400 mb-2">Synthetic Identity Fraud</h4>
                  <p className="text-gray-300 text-sm">Advanced biometric verification reduces synthetic identity fraud by 89% in digital lending platforms.</p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Market Impact</div>
                    <div className="text-lg font-bold text-white">₹500+ Cr Fraud Prevented</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">This Year</div>
                    <div className="text-lg font-bold text-cyan-400">2024</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Interactive CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Fintech Operations?</h3>
            <p className="text-gray-300 mb-6">Join leading financial institutions using FraudBuster to prevent fraud and ensure compliance.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Request Demo
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;