import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = '2025-01-15';

  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: FileText,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect personal information that you provide directly to us, including name, email address, phone number, company details, and professional information when you register for our services, request information, or communicate with us.'
        },
        {
          subtitle: 'Transaction Data',
          text: 'In compliance with regulatory guidelines, we collect and process transaction data necessary for fraud detection and prevention. This includes transaction amounts, timestamps, merchant information, and behavioral patterns, all processed in accordance with data protection regulations.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect technical information such as IP addresses, browser types, device information, and usage patterns to improve our services and ensure security compliance as required by cybersecurity guidelines.'
        }
      ]
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        {
          subtitle: 'Fraud Detection and Prevention',
          text: 'We use collected data to provide our core fraud detection services, analyze transaction patterns, and prevent fraudulent activities in compliance with digital payment security guidelines.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'We analyze usage patterns and feedback to enhance our fraud detection algorithms, improve user experience, and develop new features that better serve the fintech ecosystem.'
        },
        {
          subtitle: 'Regulatory Compliance',
          text: 'We process data as required to comply with financial regulations and guidelines, including maintaining audit trails and generating compliance reports.'
        }
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection and Security',
      icon: Lock,
      content: [
        {
          subtitle: 'Data Localization',
          text: 'In compliance with data localization requirements, all payment and customer data is stored in secure data centers with appropriate security measures and backup systems.'
        },
        {
          subtitle: 'Encryption and Security',
          text: 'We implement industry-standard encryption protocols (AES-256) for data at rest and in transit. Our systems are ISO 27001 certified and undergo regular security audits by certified Indian cybersecurity firms.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We maintain strict access controls with role-based permissions, multi-factor authentication, and regular access reviews. Only authorized personnel with legitimate business needs can access customer data.'
        }
      ]
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Shield,
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share information with trusted service providers who assist in delivering our services, including cloud infrastructure providers, security vendors, and compliance consultants, all bound by strict confidentiality agreements.'
        },
        {
          subtitle: 'Regulatory Authorities',
          text: 'We may disclose information to regulatory authorities and government agencies as required by law or to comply with legal obligations, court orders, or regulatory investigations.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction, subject to the same privacy protections and regulatory compliance requirements.'
        }
      ]
    },
    {
      id: 'user-rights',
      title: 'Your Rights and Choices',
      icon: FileText,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, correct, or update your personal information. You can request a copy of your data or make corrections through your account dashboard or by contacting our support team.'
        },
        {
          subtitle: 'Data Portability',
          text: 'Subject to regulatory requirements and technical feasibility, you may request to export your data in a structured, commonly used format for transfer to another service provider.'
        },
        {
          subtitle: 'Deletion Requests',
          text: 'You may request deletion of your personal information, subject to our legal obligations to retain certain data for regulatory compliance, audit purposes, and fraud prevention as required by RBI guidelines.'
        }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Your privacy and data security are our top priorities. This policy explains how we collect, 
              use, and protect your information in compliance with Indian regulations.
            </p>
            <div className="flex items-center justify-center text-gray-400">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fraud Buster ("Fraud Buster," "we," "us," or "our") is committed to protecting 
              the privacy and security of your personal information. This Privacy Policy describes how we collect, use, 
              disclose, and safeguard your information when you use our fraud detection services and related products.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              As a fintech company, we comply with all applicable laws and regulations, including 
              guidelines on data localization, cybersecurity, and payment system regulations. 
              We are committed to maintaining the highest standards of data protection and privacy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our services, you consent to the collection and use of your information as described in this Privacy Policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">{item.subtitle}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain personal information for as long as necessary to provide our services and comply with legal obligations. 
                Transaction data is retained as required by regulatory guidelines.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policy 
                and regulatory requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In compliance with data localization requirements, all payment and customer data is stored and processed 
                in secure facilities. Any international data transfers are conducted only with explicit regulatory approval.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We ensure that any international service providers comply with data protection standards and 
                maintain appropriate safeguards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Privacy Policy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this Privacy Policy or our data practices, please contact us.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Data Protection Officer</h3>
                <p className="text-gray-300 mb-2">Email: info@fraudbuster.co.in</p>
                <p className="text-gray-300">Contact via email for phone support</p>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Registered Office</h3>
                <p className="text-gray-300 mb-2">Fraud Buster Technologies</p>
                <p className="text-gray-300 mb-2">Technology Hub</p>
                <p className="text-gray-300">Global Operations Center</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Privacy Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;