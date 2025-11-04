import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, CheckCircle, AlertTriangle, Key, Server } from 'lucide-react';

const SecurityFeatures = () => {
  const securityLayers = [
    {
      title: 'API Security',
      icon: Key,
      features: [
        {
          name: 'Multi-Key Authentication',
          description: 'Triple-layer authentication with client-id, auth-key, and secret-key',
          status: 'Active'
        },
        {
          name: 'Request Signing',
          description: 'Cryptographic signing of all API requests for integrity verification',
          status: 'Active'
        },
        {
          name: 'Rate Limiting',
          description: 'Intelligent rate limiting to prevent abuse and ensure fair usage',
          status: 'Active'
        },
        {
          name: 'IP Whitelisting',
          description: 'Restrict API access to pre-approved IP addresses',
          status: 'Available'
        }
      ]
    },
    {
      title: 'Data Protection',
      icon: Lock,
      features: [
        {
          name: 'End-to-End Encryption',
          description: 'AES-256 encryption for all data in transit and at rest',
          status: 'Active'
        },
        {
          name: 'Data Masking',
          description: 'Automatic masking of sensitive information in API responses',
          status: 'Active'
        },
        {
          name: 'Secure File Upload',
          description: 'Encrypted file uploads with virus scanning and validation',
          status: 'Active'
        },
        {
          name: 'Data Retention Policies',
          description: 'Automated data purging based on regulatory requirements',
          status: 'Active'
        }
      ]
    },
    {
      title: 'Fraud Detection',
      icon: Eye,
      features: [
        {
          name: 'Real-time Monitoring',
          description: 'Continuous monitoring of API usage patterns and anomalies',
          status: 'Active'
        },
        {
          name: 'Behavioral Analysis',
          description: 'AI-powered analysis of user behavior and transaction patterns',
          status: 'Active'
        },
        {
          name: 'Risk Scoring',
          description: 'Dynamic risk assessment for each verification request',
          status: 'Active'
        },
        {
          name: 'Threat Intelligence',
          description: 'Integration with global threat intelligence feeds',
          status: 'Active'
        }
      ]
    },
    {
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        {
          name: 'Cloud Security',
          description: 'Multi-cloud deployment with advanced security controls',
          status: 'Active'
        },
        {
          name: 'Network Segmentation',
          description: 'Isolated network segments for different security zones',
          status: 'Active'
        },
        {
          name: 'DDoS Protection',
          description: 'Advanced DDoS mitigation and traffic filtering',
          status: 'Active'
        },
        {
          name: 'Security Monitoring',
          description: '24/7 security operations center monitoring',
          status: 'Active'
        }
      ]
    }
  ];

  const complianceStandards = [
    {
      title: 'RBI Compliance',
      description: 'Full compliance with Reserve Bank of India guidelines for digital payments',
      requirements: [
        'Data localization within India',
        'Strong customer authentication',
        'Transaction monitoring and reporting',
        'Incident response procedures'
      ],
      status: 'Certified'
    },
    {
      title: 'ISO 27001',
      description: 'International standard for information security management systems',
      requirements: [
        'Information security policies',
        'Risk management framework',
        'Security controls implementation',
        'Continuous improvement process'
      ],
      status: 'Certified'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls verification',
      requirements: [
        'Security control effectiveness',
        'System availability monitoring',
        'Confidentiality measures',
        'Processing integrity controls'
      ],
      status: 'Certified'
    },
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      requirements: [
        'Secure network architecture',
        'Cardholder data protection',
        'Vulnerability management',
        'Access control measures'
      ],
      status: 'Level 1'
    }
  ];

  const securityMetrics = [
    {
      metric: '99.99%',
      label: 'API Uptime',
      description: 'Guaranteed service availability'
    },
    {
      metric: '<100ms',
      label: 'Response Time',
      description: 'Average API response time'
    },
    {
      metric: '256-bit',
      label: 'Encryption',
      description: 'AES encryption standard'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Continuous security monitoring'
    }
  ];

  const threatProtection = [
    {
      threat: 'API Abuse',
      protection: 'Rate limiting, request validation, and behavioral analysis',
      impact: 'Prevents system overload and ensures fair usage'
    },
    {
      threat: 'Data Breaches',
      protection: 'End-to-end encryption, access controls, and audit logging',
      impact: 'Protects sensitive customer information'
    },
    {
      threat: 'Identity Fraud',
      protection: 'Multi-factor verification, biometric matching, and document validation',
      impact: 'Prevents synthetic identity creation and fraud'
    },
    {
      threat: 'Man-in-the-Middle',
      protection: 'TLS 1.3 encryption, certificate pinning, and secure channels',
      impact: 'Ensures data integrity during transmission'
    },
    {
      threat: 'Injection Attacks',
      protection: 'Input validation, parameterized queries, and sanitization',
      impact: 'Prevents malicious code execution'
    },
    {
      threat: 'Credential Theft',
      protection: 'Multi-key authentication, token rotation, and secure storage',
      impact: 'Protects API access credentials'
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
              Security Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security architecture protecting your data and transactions with 
              enterprise-grade controls, compliance standards, and advanced threat protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
                <div className="text-gray-400 text-sm">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
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
              Multi-Layered Security Architecture
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive protection across all layers of our infrastructure and services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                    <layer.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {layer.features.map((feature, idx) => (
                    <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium">{feature.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          feature.status === 'Active' 
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
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
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300">
              Adherence to international security standards and Indian regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{standard.title}</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{standard.description}</p>
                <div className="space-y-3">
                  {standard.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
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
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-300">
              Proactive defense against evolving cyber threats and attack vectors
            </p>
          </motion.div>

          <div className="space-y-6">
            {threatProtection.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="h-6 w-6 text-orange-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{item.threat}</h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-medium mb-2">Protection Measures</h4>
                    <p className="text-gray-300 text-sm">{item.protection}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-medium mb-2">Impact</h4>
                    <p className="text-gray-300 text-sm">{item.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Monitoring */}
      <section className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                24/7 Security Operations Center
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our dedicated security team in Bangalore monitors all systems around the clock, 
                ensuring immediate response to any security incidents or anomalies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Real-time threat detection and response</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Continuous system monitoring and alerting</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Incident response and forensic analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3" />
                  <span className="text-gray-300">Compliance monitoring and reporting</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Security Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-gray-300">Threat Level</span>
                    <span className="text-green-400 font-semibold">LOW</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-gray-300">Active Monitoring</span>
                    <span className="text-green-400 font-semibold">ONLINE</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-gray-300">Last Security Scan</span>
                    <span className="text-cyan-400 font-semibold">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-gray-300">Incidents Today</span>
                    <span className="text-green-400 font-semibold">0</span>
                  </div>
                </div>
              </div>
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
              Experience Enterprise Security
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Protect your business with bank-grade security features and compliance standards 
              designed for the Indian fintech market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Request Security Assessment
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Download Security Datasheet
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityFeatures;