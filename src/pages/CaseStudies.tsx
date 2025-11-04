import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Users, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Leading Financial Institution Reduces Fraud by 94% with Fraud Buster',
      client: 'Major Financial Institution',
      industry: 'Financial Services',
      challenge: 'High fraud rates in digital lending causing significant losses and regulatory concerns',
      solution: 'Implemented Fraud Buster\'s AI-powered fraud detection with real-time monitoring',
      results: [
        { metric: 'Fraud Reduction', value: '94%', icon: Shield },
        { metric: 'Cost Savings', value: '₹12 Cr', icon: DollarSign },
        { metric: 'Processing Speed', value: '50ms', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '98%', icon: Users }
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Fintech Startup Achieves Regulatory Compliance with Zero Fraud Incidents',
      client: 'Fintech Startup',
      industry: 'Digital Payments',
      challenge: 'Meeting compliance requirements while scaling operations rapidly',
      solution: 'Integrated comprehensive fraud prevention system aligned with regulatory guidelines',
      results: [
        { metric: 'Compliance Score', value: '100%', icon: CheckCircle },
        { metric: 'Zero Fraud Days', value: '365+', icon: Shield },
        { metric: 'Transaction Volume', value: '10x', icon: TrendingUp },
        { metric: 'Approval Rate', value: '99.2%', icon: Users }
      ],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'E-commerce Giant Prevents ₹50 Crore in Fraudulent Transactions',
      client: 'Top E-commerce Platform',
      industry: 'E-commerce & Digital Payments',
      challenge: 'Sophisticated fraud attacks targeting high-value transactions during festival seasons',
      solution: 'Deployed advanced ML algorithms with behavioral analysis and real-time blocking',
      results: [
        { metric: 'Fraud Prevented', value: '₹50 Cr', icon: DollarSign },
        { metric: 'Detection Accuracy', value: '99.7%', icon: Shield },
        { metric: 'False Positives', value: '<0.1%', icon: CheckCircle },
        { metric: 'Response Time', value: '25ms', icon: TrendingUp }
      ],
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      quote: "Fraud Buster has been instrumental in helping us maintain regulatory compliance while scaling our operations. The real-time fraud detection has saved us millions.",
      author: "Technology Executive",
      position: "CTO, Leading Financial Institution",
      company: "Financial Services"
    },
    {
      quote: "The integration was seamless and the results were immediate. We've seen a 94% reduction in fraud attempts within the first month of implementation.",
      author: "Risk Management Executive",
      position: "Head of Risk Management",
      company: "Fintech Company"
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
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how leading Indian fintech companies have transformed their fraud prevention 
              strategies and achieved remarkable results with Fraud Buster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-64 lg:h-full">
                <img
                  src={caseStudies[0].image}
                  alt={caseStudies[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Case Study
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-cyan-400 font-medium">{caseStudies[0].industry}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {caseStudies[0].title}
                </h2>
                <p className="text-gray-300 mb-6">
                  <strong>Challenge:</strong> {caseStudies[0].challenge}
                </p>
                <p className="text-gray-300 mb-8">
                  <strong>Solution:</strong> {caseStudies[0].solution}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {caseStudies[0].results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-2">
                        <result.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{result.value}</div>
                      <div className="text-sm text-gray-400">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center bg-white/5 rounded-lg p-3">
                        <div className="text-lg font-bold text-cyan-400">{result.value}</div>
                        <div className="text-xs text-gray-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    View Details <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Hear from industry leaders who trust Fraud Buster to protect their businesses.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your fraud prevention strategy and achieve remarkable results like our clients.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;