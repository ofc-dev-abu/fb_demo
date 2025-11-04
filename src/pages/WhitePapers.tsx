import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Eye, TrendingUp, Shield, Users } from 'lucide-react';

const WhitePapers = () => {
  const whitePapers = [
    {
      id: 1,
      title: 'Digital Payment Guidelines 2025: Compliance Framework for Fintech Companies',
      description: 'Comprehensive analysis of latest digital payment security guidelines and implementation strategies for fintech companies.',
      category: 'Regulatory Compliance',
      pages: 45,
      publishDate: '2025-01-15',
      downloadCount: 2847,
      featured: true,
      topics: [
        'Payment System Vision 2025',
        'Digital Payment Security Standards',
        'Compliance Checklist for Fintechs',
        'Risk Management Framework',
        'Audit and Reporting Requirements'
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'AI-Powered Fraud Detection in Banking: Implementation Guide',
      description: 'Technical deep-dive into implementing machine learning algorithms for fraud detection in compliance with banking regulations.',
      category: 'Technology',
      pages: 38,
      publishDate: '2025-01-10',
      downloadCount: 1923,
      topics: [
        'Machine Learning Models for Fraud Detection',
        'Real-time Processing Architecture',
        'Data Privacy and Security',
        'Integration with Core Banking Systems',
        'Performance Optimization Strategies'
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Digital Payment Fraud Landscape 2025: Trends, Threats, and Prevention Strategies',
      description: 'In-depth analysis of digital payment fraud patterns and comprehensive prevention strategies for businesses and consumers.',
      category: 'Security Research',
      pages: 52,
      publishDate: '2025-01-05',
      downloadCount: 3156,
      topics: [
        'Digital Payment Transaction Flow Security',
        'Common Fraud Vectors and Attack Patterns',
        'Behavioral Analytics for Fraud Detection',
        'Consumer Education and Awareness',
        'Regulatory Response and Industry Best Practices'
      ],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Financial Institution Digital Transformation: Security and Compliance Roadmap',
      description: 'Strategic guide for financial institutions transitioning to digital operations while maintaining robust security and regulatory compliance.',
      category: 'Digital Transformation',
      pages: 41,
      publishDate: '2024-12-28',
      downloadCount: 1654,
      topics: [
        'Digital Lending Security Framework',
        'Customer Onboarding and KYC Automation',
        'Risk Assessment and Credit Scoring',
        'Regulatory Technology (RegTech) Solutions',
        'Change Management and Staff Training'
      ],
      image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Synthetic Identity Fraud: Detection and Prevention Framework',
      description: 'Comprehensive study on synthetic identity fraud trends in the market and advanced detection methodologies.',
      category: 'Fraud Research',
      pages: 35,
      publishDate: '2024-12-20',
      downloadCount: 2234,
      topics: [
        'Synthetic Identity Creation Techniques',
        'Detection Algorithms and Data Sources',
        'Cross-Industry Collaboration Strategies',
        'Legal and Regulatory Considerations',
        'Technology Solutions and Implementation'
      ],
      image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Account Aggregator Framework: Security Implementation Guide',
      description: 'Technical implementation guide for the Account Aggregator framework with focus on data security and privacy.',
      category: 'Regulatory Technology',
      pages: 29,
      publishDate: '2024-12-15',
      downloadCount: 1876,
      topics: [
        'AA Framework Architecture and Components',
        'Data Security and Encryption Standards',
        'Consent Management and User Privacy',
        'API Security and Authentication',
        'Compliance Monitoring and Reporting'
      ],
      image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const categories = ['All', 'Regulatory Compliance', 'Technology', 'Security Research', 'Digital Transformation', 'Fraud Research', 'Regulatory Technology'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPapers = selectedCategory === 'All' 
    ? whitePapers 
    : whitePapers.filter(paper => paper.category === selectedCategory);

  const featuredPaper = whitePapers.find(paper => paper.featured);

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
              Research & White Papers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In-depth research and analysis on fintech security, regulatory compliance, 
              and fraud prevention in the Indian market.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured White Paper */}
      {featuredPaper && selectedCategory === 'All' && (
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPaper.image}
                    alt={featuredPaper.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured Research
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="flex items-center">
                          <FileText className="h-4 w-4 mr-1" />
                          {featuredPaper.pages} pages
                        </span>
                        <span className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {featuredPaper.downloadCount.toLocaleString()} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {featuredPaper.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPaper.publishDate}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredPaper.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredPaper.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Topics Covered:</h4>
                    <ul className="space-y-2">
                      {featuredPaper.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download White Paper
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* White Papers Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {paper.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="flex items-center justify-between text-white text-xs">
                        <span className="flex items-center">
                          <FileText className="h-3 w-3 mr-1" />
                          {paper.pages}p
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {paper.downloadCount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {paper.publishDate}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
                    {paper.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2">Key Topics:</div>
                    <div className="flex flex-wrap gap-1">
                      {paper.topics.slice(0, 2).map((topic, idx) => (
                        <span key={idx} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                          {topic.length > 20 ? topic.substring(0, 20) + '...' : topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
              Research Impact
            </h2>
            <p className="text-xl text-gray-300">
              Our research drives industry standards and best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">Research Papers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                <Download className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Downloads</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Industry Citations</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Implementation Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Informed with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to receive notifications about new white papers and research publications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;