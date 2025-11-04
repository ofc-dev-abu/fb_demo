import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Eye, Lock, CheckCircle, Play, Users, Award, BarChart3, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    transactions: 0,
    fraudPrevented: 0,
    clients: 0,
    accuracy: 0
  });

  // Animated counter effect
  useEffect(() => {
    const animateStats = () => {
      const targets = {
        transactions: 500,
        fraudPrevented: 95,
        clients: 100,
        accuracy: 99.7
      };

      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const increment = target / 100;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setStats(prev => ({ ...prev, [key]: Math.floor(current * 10) / 10 }));
        }, 20);
      });
    };

    const timer = setTimeout(animateStats, 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'State-of-the-art fraud detection algorithms protect your transactions 24/7',
      details: [
        'Multi-layered security architecture',
        'Real-time threat detection',
        'Behavioral analysis algorithms',
        'Compliance with security standards'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast analysis and decision making in milliseconds',
      details: [
        'Sub-100ms response times',
        'High-throughput processing',
        'Scalable cloud infrastructure',
        'Zero-downtime operations'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive protection across multiple markets and currencies',
      details: [
        'Multi-currency support',
        'Cross-border transaction monitoring',
        'Localized compliance features',
        '24/7 global monitoring'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Deep insights and reporting to optimize your fraud prevention strategy',
      details: [
        'Advanced dashboard analytics',
        'Predictive risk modeling',
        'Custom reporting tools',
        'Business intelligence insights'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const productFeatures = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of all transactions with instant alerts',
      metric: '24/7'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'Military-grade encryption protecting sensitive information',
      metric: 'AES-256'
    },
    {
      icon: BarChart3,
      title: 'Risk Scoring',
      description: 'AI-powered risk assessment for every transaction',
      metric: '99.7%'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'Ultra-fast processing for seamless user experience',
      metric: '<100ms'
    }
  ];

  const testimonials = [
    {
      quote: "FraudBuster has transformed our security posture. The real-time detection capabilities are outstanding.",
      author: "Technology Executive",
      company: "Leading Financial Institution",
      rating: 5
    },
    {
      quote: "Implementation was seamless and the results were immediate. Highly recommended for any fintech company.",
      author: "Security Director",
      company: "Digital Payment Platform",
      rating: 5
    },
    {
      quote: "The analytics and reporting features provide invaluable insights into our transaction patterns.",
      author: "Risk Manager",
      company: "E-commerce Platform",
      rating: 5
    }
  ];

  const apiPlans = [
    {
      name: 'Lite',
      description: 'Perfect for startups',
      features: ['VPA Lookup', 'Basic Analytics', 'Email Support'],
      notApplicable: ['KYC Validation', 'Bank Verification', 'Face Match Auth', 'GST Validation', 'Priority Support', '24/7 Support'],
      color: 'from-blue-500 to-cyan-500',
      price: 'Contact for Pricing',
      freeApiCalls: '100 calls/month'
    },
    {
      name: 'Elite',
      description: 'For growing businesses',
      features: ['VPA Lookup', 'Basic Analytics', 'Email Support', 'KYC Validation', 'Bank Verification', 'Priority Support'],
      notApplicable: ['Face Match Auth', 'GST Validation', '24/7 Support'],
      color: 'from-purple-500 to-pink-500',
      popular: true,
      price: 'Contact for Pricing',
      freeApiCalls: '500 calls/month'
    },
    {
      name: 'Premium',
      description: 'Enterprise solution',
      features: ['VPA Lookup', 'Basic Analytics', 'Email Support', 'KYC Validation', 'Bank Verification', 'Priority Support', 'Face Match Auth', 'GST Validation', '24/7 Support'],
      notApplicable: [],
      color: 'from-green-500 to-emerald-500',
      price: 'Contact for Pricing',
      freeApiCalls: '1000 calls/month'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Award className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Industry Leading Fraud Detection</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Secure Your
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Financial Future
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Fraud Buster revolutionizes fintech security with cutting-edge fraud detection technology.
                  Protect your business and customers with our advanced AI-powered solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    to="/product"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="flex items-center justify-center">
                      Explore FraudBuster
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stats.transactions}M+</div>
                    <div className="text-gray-400 text-sm">Transactions Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stats.fraudPrevented}%</div>
                    <div className="text-gray-400 text-sm">Fraud Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stats.clients}+</div>
                    <div className="text-gray-400 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{stats.accuracy}%</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:rotate-1 transition-transform duration-500">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Live Dashboard
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white">Threat Level</span>
                    <span className="text-green-400 font-semibold">LOW</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white">Active Monitoring</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                      <span className="text-green-400 font-semibold">ONLINE</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white">Transactions Today</span>
                    <span className="text-cyan-400 font-semibold">12,847</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <span className="text-white">Fraud Blocked</span>
                    <span className="text-red-400 font-semibold">23</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
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
              Why Choose Fraud Buster?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive fraud detection platform offers unmatched security and performance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveFeature(index)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white/10 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
            >
              {(() => {
                const IconComponent = features[activeFeature].icon;
                return (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
                    <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
                    <ul className="space-y-3">
                      {features[activeFeature].details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features Grid */}
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
              Powerful Product Features
            </h2>
            <p className="text-xl text-gray-300">
              Advanced capabilities that set FraudBuster apart from the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{feature.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Plans Section */}
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
              Choose Your API Plan
            </h2>
            <p className="text-xl text-gray-300">
              Flexible plans designed to scale with your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {apiPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                  <Shield className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.notApplicable.map((feature, idx) => (
                    <li key={`na-${idx}`} className="flex items-center text-gray-500">
                      <div className="h-5 w-5 mr-3 flex-shrink-0 rounded-full border border-gray-500 flex items-center justify-center">
                        <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
                      </div>
                      <span className="line-through">{feature}</span>
                      <span className="ml-2 text-xs text-gray-600">(Not Available)</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-semibold">Price:</span>
                    <span className="text-white">{plan.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-cyan-400 font-semibold">Free API Calls:</span>
                    <span className="text-white">{plan.freeApiCalls}</span>
                  </div>
                </div>
                
                <Link
                  to="/api-docs"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Eliminate Fraud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust Fraud Buster to protect their transactions
              and maintain customer confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/api-docs"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                View API Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;