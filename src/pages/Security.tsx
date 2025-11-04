import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
      details: [
        'Military-grade encryption standards',
        'Hardware security modules (HSM)',
        'Key rotation and management',
        'Zero-knowledge architecture'
      ]
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: '24/7 security operations center with AI-powered threat detection',
      details: [
        'Continuous security monitoring',
        'Automated threat response',
        'Behavioral anomaly detection',
        'Incident response protocols'
      ]
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'Multi-layered security architecture with redundancy and failover',
      details: [
        'Secure data centers',
        'Network segmentation',
        'DDoS protection',
        'Physical security controls'
      ]
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Zero-trust security model with multi-factor authentication',
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Privileged access management',
        'Regular access reviews'
      ]
    }
  ];

  const securityMeasures = [
    {
      category: 'Data Protection',
      measures: [
        {
          title: 'Data Localization',
          description: 'All data stored within India as per RBI guidelines',
          status: 'Implemented'
        },
        {
          title: 'Data Classification',
          description: 'Automated data classification and protection policies',
          status: 'Active'
        },
        {
          title: 'Data Loss Prevention',
          description: 'Advanced DLP solutions to prevent data exfiltration',
          status: 'Monitored'
        }
      ]
    },
    {
      category: 'Network Security',
      measures: [
        {
          title: 'Firewall Protection',
          description: 'Next-generation firewalls with intrusion prevention',
          status: 'Active'
        },
        {
          title: 'VPN Access',
          description: 'Secure remote access for authorized personnel',
          status: 'Implemented'
        },
        {
          title: 'Network Segmentation',
          description: 'Micro-segmentation to limit lateral movement',
          status: 'Deployed'
        }
      ]
    },
    {
      category: 'Application Security',
      measures: [
        {
          title: 'Secure Development',
          description: 'Security integrated into development lifecycle',
          status: 'Ongoing'
        },
        {
          title: 'Code Scanning',
          description: 'Automated static and dynamic code analysis',
          status: 'Continuous'
        },
        {
          title: 'Penetration Testing',
          description: 'Regular security assessments by certified experts',
          status: 'Quarterly'
        }
      ]
    }
  ];

  const threatIntelligence = [
    {
      title: 'Advanced Persistent Threats (APT)',
      description: 'Protection against sophisticated, long-term cyber attacks',
      mitigation: 'AI-powered behavioral analysis and threat hunting'
    },
    {
      title: 'Insider Threats',
      description: 'Detection of malicious activities by internal users',
      mitigation: 'User behavior analytics and privileged access monitoring'
    },
    {
      title: 'Phishing & Social Engineering',
      description: 'Protection against deceptive attacks targeting employees',
      mitigation: 'Security awareness training and email security solutions'
    },
    {
      title: 'Zero-Day Exploits',
      description: 'Defense against unknown vulnerabilities and attacks',
      mitigation: 'Behavioral detection and virtual patching technologies'
    }
  ];

  const incidentResponse = [
    {
      phase: 'Detection',
      description: 'Automated threat detection and alert generation',
      timeframe: '< 5 minutes',
      tools: ['SIEM', 'EDR', 'Network Monitoring']
    },
    {
      phase: 'Analysis',
      description: 'Threat assessment and impact evaluation',
      timeframe: '< 15 minutes',
      tools: ['Threat Intelligence', 'Forensics', 'Risk Assessment']
    },
    {
      phase: 'Containment',
      description: 'Immediate threat isolation and damage limitation',
      timeframe: '< 30 minutes',
      tools: ['Automated Response', 'Network Isolation', 'Access Revocation']
    },
    {
      phase: 'Recovery',
      description: 'System restoration and business continuity',
      timeframe: '< 2 hours',
      tools: ['Backup Systems', 'Disaster Recovery', 'Service Restoration']
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
              Enterprise Security
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bank-grade security infrastructure protecting your financial data with advanced threat detection, 
              encryption, and compliance with cybersecurity regulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Features */}
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
              Multi-Layered Security Architecture
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive security controls protecting every aspect of your data and operations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
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
              Comprehensive Security Controls
            </h2>
            <p className="text-xl text-gray-300">
              Detailed security measures across all operational domains
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.measures.map((measure, idx) => (
                    <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{measure.title}</h4>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {measure.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{measure.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
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
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-300">
              Proactive defense against evolving cyber threats and attack vectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {threatIntelligence.map((threat, index) => (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{threat.title}</h3>
                    <p className="text-gray-400 mb-4">{threat.description}</p>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                      <p className="text-cyan-400 text-sm font-medium mb-1">Mitigation Strategy:</p>
                      <p className="text-gray-300 text-sm">{threat.mitigation}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
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
              Incident Response Framework
            </h2>
            <p className="text-xl text-gray-300">
              Rapid response and recovery procedures to minimize impact and restore operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incidentResponse.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{index + 1}</div>
                    <div className="text-sm bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {phase.timeframe}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{phase.phase}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{phase.description}</p>
                  <div className="space-y-1">
                    {phase.tools.map((tool, idx) => (
                      <div key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded inline-block mr-1">
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
                {index < incidentResponse.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Statistics */}
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
                Security Performance Metrics
              </h2>
              <p className="text-xl text-gray-300">
                Measurable security outcomes and threat prevention statistics
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{"< 5min"}</div>
                <div className="text-gray-300">Threat Response Time</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">Zero</div>
                <div className="text-gray-300">Data Breaches</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
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
              Secure Your Financial Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with Fraud Buster to implement enterprise-grade security measures 
              that protect your business and comply with financial regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Security Assessment
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Download Security Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;