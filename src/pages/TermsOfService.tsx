import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, Calendar } from 'lucide-react';

const TermsOfService = () => {
  const lastUpdated = '2025-01-15';

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: 'By accessing or using Fraud Buster\'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services. These terms comply with Indian Contract Act, 1872 and Information Technology Act, 2000.'
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: Shield,
      content: 'Fraud Buster provides AI-powered fraud detection and prevention services for financial institutions and fintech companies. Our services include real-time transaction monitoring, risk assessment, compliance reporting, and related fraud prevention tools, all designed to comply with financial regulations.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility and Registration',
      icon: Scale,
      content: 'Our services are available to businesses that are engaged in financial services, including banks, financial institutions, payment service providers, and fintech companies. You must be authorized to enter into this agreement on behalf of your organization and comply with all applicable regulatory requirements.'
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      icon: AlertTriangle,
      content: 'You acknowledge that you are responsible for ensuring your use of our services complies with all applicable laws and regulations, including financial sector regulations. We provide tools to assist with compliance but do not guarantee regulatory compliance, which remains your responsibility.'
    }
  ];

  const detailedSections = [
    {
      title: 'User Obligations and Responsibilities',
      content: [
        {
          subtitle: 'Data Accuracy',
          text: 'You are responsible for ensuring the accuracy and completeness of all data provided to our systems. Inaccurate data may affect the performance of our fraud detection algorithms and your compliance with regulatory requirements.'
        },
        {
          subtitle: 'Security Measures',
          text: 'You must implement appropriate security measures to protect access credentials and prevent unauthorized use of our services. This includes maintaining secure API keys, implementing proper access controls, and following cybersecurity best practices.'
        },
        {
          subtitle: 'Compliance Monitoring',
          text: 'You agree to regularly monitor your use of our services for compliance with applicable regulations and to promptly address any compliance issues that may arise. You must maintain appropriate records and audit trails as required by regulatory authorities.'
        }
      ]
    },
    {
      title: 'Service Level Agreements',
      content: [
        {
          subtitle: 'Availability',
          text: 'We strive to maintain 99.9% uptime for our fraud detection services. Planned maintenance will be scheduled during off-peak hours with advance notice. We provide 24/7 monitoring and support for critical issues.'
        },
        {
          subtitle: 'Response Times',
          text: 'Our fraud detection algorithms are designed to process transactions within 100 milliseconds under normal operating conditions. Response times may vary based on transaction complexity and system load.'
        },
        {
          subtitle: 'Support Services',
          text: 'We provide technical support through multiple channels including phone, email, and live chat. Critical issues are addressed within 2 hours, while general inquiries receive responses within 24 hours during business days.'
        }
      ]
    },
    {
      title: 'Data Protection and Privacy',
      content: [
        {
          subtitle: 'Data Localization',
          text: 'In compliance with data localization requirements, all customer and transaction data is stored and processed in secure data centers with appropriate security measures.'
        },
        {
          subtitle: 'Confidentiality',
          text: 'We maintain strict confidentiality of all customer data and transaction information. Our employees and contractors are bound by confidentiality agreements and undergo regular security training.'
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain transaction data for the minimum period required by regulatory authorities, typically 7 years for financial transaction data. Personal data is retained only as long as necessary for service provision and regulatory compliance.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        {
          subtitle: 'Service Limitations',
          text: 'While our fraud detection services are designed to identify and prevent fraudulent transactions, no system is 100% accurate. We do not guarantee the detection of all fraudulent activities and are not liable for losses resulting from undetected fraud.'
        },
        {
          subtitle: 'Regulatory Changes',
          text: 'We are not liable for any losses or compliance issues resulting from changes in regulatory requirements. We will make reasonable efforts to update our services to comply with new regulations but cannot guarantee immediate compliance.'
        },
        {
          subtitle: 'Third-Party Services',
          text: 'We are not responsible for the performance or availability of third-party services that may be integrated with our platform. This includes but is not limited to core banking systems, payment gateways, and external data providers.'
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
              <Scale className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              These terms govern your use of Fraud Buster's fraud detection services and outline 
              the rights and responsibilities of all parties.
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
            <h2 className="text-2xl font-bold text-white mb-4">Agreement Overview</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Terms of Service agreement ("Agreement") is entered into between Fraud Buster Technologies 
              ("Fraud Buster," 
              "we," "us," or "our") and you or the entity you represent ("Customer," "you," or "your").
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This Agreement governs your access to and use of Fraud Buster's fraud detection and prevention services, 
              including our FraudBuster platform and related services (collectively, the "Services"). The Services are 
              designed to comply with financial regulations and other applicable laws.
            </p>
            <p className="text-gray-300 leading-relaxed">
              By using our Services, you acknowledge that you have read, understood, and agree to be bound by this Agreement 
              and our Privacy Policy. This Agreement is effective as of the date you first access or use the Services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">{section.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Sections */}
          <div className="space-y-12">
            {detailedSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
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

      {/* Additional Terms */}
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
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate this Agreement with 30 days written notice. We may terminate immediately 
                if you breach any terms or fail to comply with regulatory requirements.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Upon termination, you must cease using our Services and we will provide data export capabilities 
                for a period of 90 days, subject to regulatory retention requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This Agreement is governed by applicable laws. Any disputes will be subject to the exclusive 
                jurisdiction of the appropriate courts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We will attempt to resolve disputes through good faith negotiations before pursuing legal action. 
                Mediation and arbitration options are available.
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
            <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-white mb-3">Legal Department</h3>
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
              Contact Legal Team
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;