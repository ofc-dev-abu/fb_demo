import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileText, Award, Building, Users, Lock, TrendingUp } from 'lucide-react';

const Compliance = () => {
  const certifications = [
    {
      title: 'ISO 27001',
      description: 'Information Security Management System certification',
      status: 'Certified',
      validUntil: '2026-03-15',
      icon: Shield
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security, Availability, and Confidentiality controls',
      status: 'Certified',
      validUntil: '2025-12-31',
      icon: Lock
    },
    {
      title: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      validUntil: '2025-09-30',
      icon: Award
    },
    {
      title: 'Regulatory Compliance',
      description: 'Financial regulatory guidelines adherence',
      status: 'Compliant',
      validUntil: 'Ongoing',
      icon: Building
    }
  ];

  const complianceFrameworks = [
    {
      title: 'Payment System Security Guidelines',
      description: 'Full compliance with digital payment security guidelines and data localization requirements',
      requirements: [
        'Data localization requirements',
        'Real-time fraud monitoring',
        'Audit trail maintenance',
        'Incident reporting protocols'
      ]
    },
    {
      title: 'Financial Institution Regulatory Framework',
      description: 'Specialized compliance support for Financial Institutions',
      requirements: [
        'Risk management framework',
        'Customer due diligence',
        'Anti-money laundering (AML)',
        'Know Your Customer (KYC) compliance'
      ]
    },
    {
      title: 'Information Technology Compliance',
      description: 'Compliance with cybersecurity and data protection laws',
      requirements: [
        'Data protection measures',
        'Cybersecurity incident response',
        'Digital signature compliance',
        'Electronic records management'
      ]
    },
    {
      title: 'Account Aggregator Framework',
      description: 'Account Aggregator ecosystem compliance for financial data sharing',
      requirements: [
        'Consent management',
        'Data encryption standards',
        'API security protocols',
        'Privacy by design implementation'
      ]
    }
  ];

  const auditReports = [
    {
      title: 'Annual Security Audit 2024',
      auditor: 'Independent Security Auditor',
      date: '2024-12-15',
      status: 'Passed',
      scope: 'Information Security Management System'
    },
    {
      title: 'Regulatory Compliance Assessment',
      auditor: 'Compliance Auditor',
      date: '2024-11-20',
      status: 'Compliant',
      scope: 'Payment System Guidelines Adherence'
    },
    {
      title: 'Data Localization Audit',
      auditor: 'Data Security Auditor',
      date: '2024-10-10',
      status: 'Verified',
      scope: 'Data Storage and Processing Compliance'
    }
  ];

  const riskManagement = [
    {
      category: 'Operational Risk',
      measures: [
        'Business continuity planning',
        'Disaster recovery procedures',
        '24/7 system monitoring',
        'Incident response protocols'
      ]
    },
    {
      category: 'Cybersecurity Risk',
      measures: [
        'Multi-layered security architecture',
        'Regular penetration testing',
        'Employee security training',
        'Threat intelligence monitoring'
      ]
    },
    {
      category: 'Regulatory Risk',
      measures: [
        'Continuous regulatory monitoring',
        'Compliance officer oversight',
        'Regular policy updates',
        'Regulatory change management'
      ]
    },
    {
      category: 'Data Privacy Risk',
      measures: [
        'Privacy by design principles',
        'Data minimization practices',
        'Access control mechanisms',
        'Regular privacy assessments'
      ]
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fraud Buster maintains the highest standards of regulatory compliance and security, 
              ensuring your business meets all financial regulations and industry best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-300">
              Industry-recognized certifications that validate our security and compliance practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-medium">{cert.status}</span>
                </div>
                <p className="text-gray-500 text-xs">Valid until: {cert.validUntil}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
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
              Regulatory Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive compliance with financial regulations and international standards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <div className="space-y-3">
                  {framework.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
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
              Risk Management Framework
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive risk assessment and mitigation strategies across all operational areas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskManagement.map((risk, index) => (
              <motion.div
                key={risk.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{risk.category}</h3>
                <div className="space-y-3">
                  {risk.measures.map((measure, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{measure}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Reports */}
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
              Recent Audit Reports
            </h2>
            <p className="text-xl text-gray-300">
              Independent verification of our compliance and security practices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {auditReports.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <FileText className="h-8 w-8 text-cyan-400" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    report.status === 'Passed' || report.status === 'Compliant' || report.status === 'Verified'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {report.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{report.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{report.scope}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">By {report.auditor}</span>
                  <span className="text-gray-400">{report.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statistics */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance by the Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Our commitment to compliance and security excellence
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-gray-300">Regulatory Compliance</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Certifications</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Compliance Monitoring</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Audit Success Rate</div>
              </div>
            </div>
          </motion.div>
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
              Need Compliance Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our compliance experts are ready to help you navigate financial 
              regulations and implement robust security measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Compliance Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Download Compliance Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;