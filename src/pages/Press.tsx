import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Download, Award, TrendingUp, Users } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      id: 1,
      title: 'Fraud Buster Raises $15M Series A to Expand Fraud Prevention Solutions',
      date: '2025-01-10',
      category: 'Funding',
      excerpt: 'Leading fintech security company secures funding from prominent VCs to accelerate growth and enhance AI-powered fraud detection capabilities.',
      featured: true
    },
    {
      id: 2,
      title: 'Fraud Buster Partners with Major Financial Institution to Reduce Digital Lending Fraud',
      date: '2024-12-15',
      category: 'Partnership',
      excerpt: 'Strategic partnership results in 94% reduction in fraud attempts and enhanced compliance with regulatory guidelines for digital lending platforms.'
    },
    {
      id: 3,
      title: 'FraudBuster API Achieves Compliance Certification for Digital Payment Security',
      date: '2024-11-28',
      category: 'Product',
      excerpt: 'Fraud Buster\'s flagship product receives official certification for compliance with digital payment security guidelines.'
    },
    {
      id: 4,
      title: 'Fraud Buster Expands Team with Key Technology Hires',
      date: '2024-11-05',
      category: 'Company',
      excerpt: 'Company adds 25 new team members including former regulatory officials and fintech veterans to strengthen compliance and product development.'
    },
    {
      id: 5,
      title: 'Industry Report: Fraud Buster Prevents $100M in Fraudulent Transactions',
      date: '2024-10-20',
      category: 'Milestone',
      excerpt: 'Annual security report reveals significant impact on fintech ecosystem with advanced AI-powered fraud detection technology.'
    }
  ];

  const mediaKit = [
    {
      title: 'Company Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      fileSize: '2.5 MB'
    },
    {
      title: 'Product Screenshots',
      description: 'FraudBuster dashboard and API documentation visuals',
      fileSize: '8.1 MB'
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of leadership team',
      fileSize: '4.2 MB'
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company information',
      fileSize: '1.8 MB'
    }
  ];

  const awards = [
    {
      title: 'Best Fintech Security Solution 2024',
      organization: 'Global Fintech Awards',
      date: '2024-12-01',
      description: 'Recognized for innovative fraud prevention technology in the market'
    },
    {
      title: 'Innovation Challenge Winner',
      organization: 'Financial Regulatory Authority',
      date: '2024-09-15',
      description: 'Selected as winner for digital payment security innovation challenge'
    },
    {
      title: 'Startup of the Year - Fintech Category',
      organization: 'Tech Summit',
      date: '2024-08-20',
      description: 'Honored for contribution to fintech ecosystem and fraud prevention'
    }
  ];

  const mediaContacts = [
    {
      name: 'Media Relations Team',
      title: 'Head of Communications',
      email: 'info@fraudbuster.co.in',
      phone: 'Contact via email'
    },
    {
      name: 'Marketing Team',
      title: 'VP Marketing',
      email: 'info@fraudbuster.co.in',
      phone: 'Contact via email'
    }
  ];

  const companyStats = [
    { metric: '$500M+', label: 'Fraud Prevented', description: 'Total fraudulent transactions blocked' },
    { metric: '100+', label: 'Enterprise Clients', description: 'NBFCs and fintech companies served' },
    { metric: '99.7%', label: 'Detection Accuracy', description: 'AI-powered fraud detection rate' },
    { metric: '24/7', label: 'Monitoring', description: 'Continuous security operations' }
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
              Press & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Latest news, press releases, and media resources about Fraud Buster's 
              mission to secure the global fintech ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 text-center">
              Stay updated with Fraud Buster's latest developments and milestones
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-12 hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                  Featured
                </span>
                <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {pressReleases[0].category}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {pressReleases[0].title}
              </h3>
              
              <div className="flex items-center text-gray-400 mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                {pressReleases[0].date}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {pressReleases[0].excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  Read Full Release
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center">
                  Download PDF
                  <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Press Releases Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.slice(1).map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {release.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {release.title}
                </h3>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {release.date}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {release.excerpt}
                </p>
                
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                  Read More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300">
              Industry recognition for our innovation in fintech security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
                <p className="text-cyan-400 font-medium mb-2">{award.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{award.date}</p>
                <p className="text-gray-300 leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Media Kit
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Download high-quality assets, logos, and company information for your stories and articles.
              </p>
              
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-500 text-sm">{item.fileSize}</span>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Media Contacts
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get in touch with our media team for interviews, quotes, and additional information.
              </p>
              
              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{contact.title}</p>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        <span className="font-medium">Email:</span> {contact.email}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Phone:</span> {contact.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Working on a Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help with expert insights on fintech security, fraud prevention, 
              and the digital payments landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Media Team
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Download Media Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Press;