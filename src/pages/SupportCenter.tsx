import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, Book, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight } from 'lucide-react';

const SupportCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'How does FraudBuster comply with regulatory guidelines?',
      answer: 'FraudBuster is designed to fully comply with digital payment security guidelines and regulatory requirements. Our system implements multi-factor authentication, real-time transaction monitoring, and maintains detailed audit trails as required by financial regulations. We regularly update our compliance framework to align with the latest regulatory requirements.'
    },
    {
      id: 2,
      question: 'What is the typical implementation timeline for FraudBuster?',
      answer: 'Implementation typically takes 4-6 weeks depending on your existing infrastructure. This includes initial assessment (1 week), system integration (2-3 weeks), testing and validation (1 week), and staff training (1 week). Our technical team provides support throughout the process.'
    },
    {
      id: 3,
      question: 'How does the pricing model work?',
      answer: 'We offer flexible pricing models including transaction-based pricing, monthly subscriptions, and enterprise packages. Pricing scales based on transaction volume and features required. Contact our sales team for a customized quote.'
    },
    {
      id: 4,
      question: 'What kind of support is available for financial institution compliance?',
      answer: 'We provide specialized support for financial institutions including compliance consulting, regulatory reporting assistance, and dedicated account management. Our team includes former regulatory officials and compliance experts who understand the unique requirements of the financial sector.'
    },
    {
      id: 5,
      question: 'Can FraudBuster integrate with existing core banking systems?',
      answer: 'Yes, FraudBuster supports integration with all major core banking systems. We provide REST APIs, webhooks, and batch processing capabilities. Our technical team assists with integration planning and implementation.'
    },
    {
      id: 6,
      question: 'What data residency and privacy measures are in place?',
      answer: 'We implement end-to-end encryption, role-based access controls, and regular security audits. Our systems are ISO 27001 certified and comply with data protection regulations. Data residency options are available based on regulatory requirements.'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 technical support hotline',
      contact: 'Contact via email',
      availability: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      contact: 'info@fraudbuster.co.in',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant chat with our experts',
      contact: 'Available on dashboard',
      availability: 'Mon-Fri: 9 AM - 9 PM IST'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Comprehensive technical guides',
      contact: 'Available online',
      availability: 'Always available'
    }
  ];

  const quickLinks = [
    { title: 'API Documentation', description: 'Complete integration guide and API reference' },
    { title: 'Compliance Checklist', description: 'RBI compliance requirements and verification steps' },
    { title: 'Implementation Guide', description: 'Step-by-step setup and configuration instructions' },
    { title: 'Troubleshooting', description: 'Common issues and their solutions' },
    { title: 'Best Practices', description: 'Recommended configurations and optimization tips' },
    { title: 'Security Guidelines', description: 'Security implementation and maintenance guidelines' }
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
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get the help you need to implement and optimize FraudBuster for your business. 
              Our expert team is here to support your fraud prevention journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support Your Way
            </h2>
            <p className="text-xl text-gray-300">
              Multiple channels to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{channel.contact}</div>
                <div className="text-sm text-gray-500">{channel.availability}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Resources
            </h2>
            <p className="text-xl text-gray-300">
              Quick access to the most requested documentation and guides
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {link.title}
                    </h3>
                    <span>Contact via email</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about FraudBuster and our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="h-5 w-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-cyan-400" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <HelpCircle className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is ready to assist you with any questions 
              or technical challenges you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Support Team
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Schedule a Call
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-8 text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Contact via email</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportCenter;