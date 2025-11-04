import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Building, Globe } from 'lucide-react';

const Partners = () => {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      icon: Shield,
      description: 'Leading technology companies that integrate with our fraud prevention platform',
      partners: [
        { name: 'Cloud Provider A', logo: 'Cloud Infrastructure', category: 'Cloud Services' },
        { name: 'Cloud Provider B', logo: 'AI & Analytics', category: 'Cloud Platform' },
        { name: 'Payment Gateway A', logo: 'Payment Gateway', category: 'Payments' },
        { name: 'Payment Gateway B', logo: 'Payment Solutions', category: 'Payments' }
      ]
    },
    {
      title: 'Banking Partners',
      icon: Building,
      description: 'Banks and financial institutions leveraging our fraud detection solutions',
      partners: [
        { name: 'Bank Partner A', logo: 'Digital Banking', category: 'Commercial Bank' },
        { name: 'Bank Partner B', logo: 'Retail Banking', category: 'Commercial Bank' },
        { name: 'Financial Institution A', logo: 'Financial Solutions', category: 'Financial Services' },
        { name: 'Financial Institution B', logo: 'Lending Services', category: 'Financial Services' }
      ]
    },
    {
      title: 'Fintech Partners',
      icon: TrendingUp,
      description: 'Innovative fintech companies using our security infrastructure',
      partners: [
        { name: 'Fintech Partner A', logo: 'Digital Payments', category: 'Payments' },
        { name: 'Fintech Partner B', logo: 'Payment Platform', category: 'Payments' },
        { name: 'Lending Platform A', logo: 'SME Lending', category: 'Lending' },
        { name: 'Lending Platform B', logo: 'Business Loans', category: 'Lending' }
      ]
    },
    {
      title: 'System Integrators',
      icon: Users,
      description: 'Professional services partners helping clients implement our solutions',
      partners: [
        { name: 'System Integrator A', logo: 'Enterprise Solutions', category: 'IT Services' },
        { name: 'System Integrator B', logo: 'Digital Transformation', category: 'IT Services' },
        { name: 'Technology Partner A', logo: 'Technology Services', category: 'IT Services' },
        { name: 'Technology Partner B', logo: 'System Integration', category: 'IT Services' }
      ]
    }
  ];

  const partnerPrograms = [
    {
      title: 'Technology Integration Program',
      description: 'Integrate FraudBuster APIs into your platform and offer enhanced security to your customers',
      benefits: [
        'Technical integration support',
        'Co-marketing opportunities',
        'Revenue sharing model',
        'Priority technical support'
      ],
      ideal: 'Payment gateways, fintech platforms, banking software providers'
    },
    {
      title: 'Reseller Partner Program',
      description: 'Become an authorized reseller of Fraud Buster solutions in your region or vertical',
      benefits: [
        'Competitive margins',
        'Sales training and certification',
        'Marketing support and materials',
        'Lead sharing program'
      ],
      ideal: 'System integrators, consultants, technology vendors'
    },
    {
      title: 'Solution Partner Program',
      description: 'Build comprehensive solutions combining your expertise with our fraud prevention technology',
      benefits: [
        'Joint solution development',
        'Go-to-market collaboration',
        'Technical architecture support',
        'Customer success partnership'
      ],
      ideal: 'Consulting firms, implementation partners, managed service providers'
    }
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Expand your revenue streams with our proven fraud prevention solutions'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Offer your customers best-in-class fraud detection and prevention capabilities'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to our technical experts and dedicated partner success team'
    },
    {
      icon: Globe,
      title: 'Market Expansion',
      description: 'Enter new markets and verticals with our comprehensive security platform'
    }
  ];

  const partnerRequirements = [
    'Established business with proven track record in technology or financial services',
    'Technical expertise in API integration and system implementation',
    'Commitment to regulatory compliance and financial regulations',
    'Dedicated resources for partner program participation',
    'Strong customer relationships in target markets'
  ];

  const successStories = [
    {
      partner: 'Leading Financial Institution Partner',
      challenge: 'High fraud rates in digital lending causing regulatory concerns',
      solution: 'Implemented FraudBuster API with real-time KYC verification',
      results: [
        '94% reduction in fraud attempts',
        '$10M in prevented losses',
        '50ms average response time',
        '100% regulatory compliance achieved'
      ]
    },
    {
      partner: 'Payment Gateway Integration',
      challenge: 'Need for enhanced fraud detection in merchant transactions',
      solution: 'Integrated FraudBuster with existing payment processing platform',
      results: [
        '99.7% fraud detection accuracy',
        '40% reduction in false positives',
        '25% increase in merchant satisfaction',
        'Seamless API integration in 2 weeks'
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
              <Handshake className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner Ecosystem
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join our growing network of technology partners, financial institutions, and system integrators 
              to deliver comprehensive fraud prevention solutions across the global fintech landscape.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
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
              Our Partner Network
            </h2>
            <p className="text-xl text-gray-300">
              Collaborating with industry leaders to secure the global financial ecosystem
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {type.partners.map((partner, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-1">{partner.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{partner.logo}</p>
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                        {partner.category}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
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
              Partner Programs
            </h2>
            <p className="text-xl text-gray-300">
              Choose the partnership model that best fits your business objectives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Ideal For:</h4>
                  <p className="text-gray-400 text-sm">{program.ideal}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
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
              Why Partner with Fraud Buster
            </h2>
            <p className="text-xl text-gray-300">
              Unlock new opportunities and drive growth with our partnership benefits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Partner Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from our partnership collaborations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{story.partner}</h3>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-300">{story.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-300">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Results:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-semibold text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Requirements */}
      <section className="py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Partner Requirements
            </h2>
            <p className="text-xl text-gray-300">
              Criteria for joining our partner ecosystem
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="space-y-4">
              {partnerRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 leading-relaxed">{requirement}</span>
                </motion.div>
              ))}
            </div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our ecosystem of partners and help secure the global fintech future. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Apply to Become a Partner
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Schedule Partnership Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;