// import React, { useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { ArrowRight, Shield, Zap, Globe, TrendingUp, Eye, Lock, CheckCircle, Play, Users, Award, BarChart3, Clock, Star } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
//   const [stats, setStats] = useState({
//     transactions: 0,
//     fraudPrevented: 0,
//     clients: 0,
//     accuracy: 0
//   });

//   // Animated counter effect
//   useEffect(() => {
//     const animateStats = () => {
//       const targets = {
//         transactions: 500,
//         fraudPrevented: 95,
//         clients: 100,
//         accuracy: 99.7
//       };

//       Object.keys(targets).forEach(key => {
//         let current = 0;
//         const target = targets[key];
//         const increment = target / 100;
        
//         const timer = setInterval(() => {
//           current += increment;
//           if (current >= target) {
//             current = target;
//             clearInterval(timer);
//           }
//           setStats(prev => ({ ...prev, [key]: Math.floor(current * 10) / 10 }));
//         }, 20);
//       });
//     };

//     const timer = setTimeout(animateStats, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const features = [
//     {
//       icon: Shield,
//       title: 'Advanced Security',
//       description: 'State-of-the-art fraud detection algorithms protect your transactions 24/7',
//       details: [
//         'Multi-layered security architecture',
//         'Real-time threat detection',
//         'Behavioral analysis algorithms',
//         'Compliance with security standards'
//       ],
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: Zap,
//       title: 'Real-time Processing',
//       description: 'Lightning-fast analysis and decision making in milliseconds',
//       details: [
//         'Sub-100ms response times',
//         'High-throughput processing',
//         'Scalable cloud infrastructure',
//         'Zero-downtime operations'
//       ],
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: Globe,
//       title: 'Global Coverage',
//       description: 'Comprehensive protection across multiple markets and currencies',
//       details: [
//         'Multi-currency support',
//         'Cross-border transaction monitoring',
//         'Localized compliance features',
//         '24/7 global monitoring'
//       ],
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Smart Analytics',
//       description: 'Deep insights and reporting to optimize your fraud prevention strategy',
//       details: [
//         'Advanced dashboard analytics',
//         'Predictive risk modeling',
//         'Custom reporting tools',
//         'Business intelligence insights'
//       ],
//       color: 'from-orange-500 to-red-500'
//     }
//   ];

//   const productFeatures = [
//     {
//       icon: Eye,
//       title: 'Real-time Monitoring',
//       description: 'Continuous surveillance of all transactions with instant alerts',
//       metric: '24/7'
//     },
//     {
//       icon: Lock,
//       title: 'Data Encryption',
//       description: 'Military-grade encryption protecting sensitive information',
//       metric: 'AES-256'
//     },
//     {
//       icon: BarChart3,
//       title: 'Risk Scoring',
//       description: 'AI-powered risk assessment for every transaction',
//       metric: '99.7%'
//     },
//     {
//       icon: Clock,
//       title: 'Response Time',
//       description: 'Ultra-fast processing for seamless user experience',
//       metric: '<100ms'
//     }
//   ];

//   const testimonials = [
//     {
//       quote: "FraudBuster has transformed our security posture. The real-time detection capabilities are outstanding.",
//       author: "Technology Executive",
//       company: "Leading Financial Institution",
//       rating: 5
//     },
//     {
//       quote: "Implementation was seamless and the results were immediate. Highly recommended for any fintech company.",
//       author: "Security Director",
//       company: "Digital Payment Platform",
//       rating: 5
//     },
//     {
//       quote: "The analytics and reporting features provide invaluable insights into our transaction patterns.",
//       author: "Risk Manager",
//       company: "E-commerce Platform",
//       rating: 5
//     }
//   ];

//   const apiPlans = [
//     {
//       name: 'Lite',
//       description: 'Perfect for startups',
//       features: ['VPA Lookup', 'Basic Analytics', 'Email Support'],
//       notApplicable: ['KYC Validation', 'Bank Verification', 'Face Match Auth', 'GST Validation', 'Priority Support', '24/7 Support'],
//       color: 'from-blue-500 to-cyan-500',
//       price: 'Contact for Pricing',
//       freeApiCalls: '100 calls/month'
//     },
//     {
//       name: 'Elite',
//       description: 'For growing businesses',
//       features: ['VPA Lookup', 'Basic Analytics', 'Email Support', 'KYC Validation', 'Bank Verification', 'Priority Support'],
//       notApplicable: ['Face Match Auth', 'GST Validation', '24/7 Support'],
//       color: 'from-purple-500 to-pink-500',
//       popular: true,
//       price: 'Contact for Pricing',
//       freeApiCalls: '500 calls/month'
//     },
//     {
//       name: 'Premium',
//       description: 'Enterprise solution',
//       features: ['VPA Lookup', 'Basic Analytics', 'Email Support', 'KYC Validation', 'Bank Verification', 'Priority Support', 'Face Match Auth', 'GST Validation', '24/7 Support'],
//       notApplicable: [],
//       color: 'from-green-500 to-emerald-500',
//       price: 'Contact for Pricing',
//       freeApiCalls: '1000 calls/month'
//     }
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
//         {/* Animated Background Elements */}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>

//         <div className="relative mx-10 max-w-none py-24 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
//                   <Award className="h-4 w-4 text-cyan-400 mr-2" />
//                   <span className="text-cyan-400 text-sm font-medium">Industry Leading Fraud Detection</span>
//                 </div>
                
//                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
//                   Secure Your
//                   <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                     Financial Future
//                   </span>
//                 </h1>
                
//                 <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                   Fraud Buster revolutionizes fintech security with cutting-edge fraud detection technology.
//                   Protect your business and customers with our advanced AI-powered solutions.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4 mb-12">
//                   <Link
//                     to="/product"
//                     className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
//                   >
//                     <span className="flex items-center justify-center">
//                       Explore FraudBuster
//                       <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </span>
//                   </Link>
                  
//                   <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center">
//                     <Play className="mr-2 h-5 w-5" />
//                     Watch Demo
//                   </button>
//                 </div>

//                 {/* Live Stats */}
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-cyan-400">{stats.transactions}M+</div>
//                     <div className="text-gray-400 text-sm">Transactions Protected</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-cyan-400">{stats.fraudPrevented}%</div>
//                     <div className="text-gray-400 text-sm">Fraud Reduction</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-cyan-400">{stats.clients}+</div>
//                     <div className="text-gray-400 text-sm">Happy Clients</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-cyan-400">{stats.accuracy}%</div>
//                     <div className="text-gray-400 text-sm">Accuracy Rate</div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:rotate-1 transition-transform duration-500">
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                   Live Dashboard
//                 </div>
                
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-white">Threat Level</span>
//                     <span className="text-green-400 font-semibold">LOW</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-white">Active Monitoring</span>
//                     <div className="flex items-center">
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
//                       <span className="text-green-400 font-semibold">ONLINE</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-white">Transactions Today</span>
//                     <span className="text-cyan-400 font-semibold">12,847</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-white">Fraud Blocked</span>
//                     <span className="text-red-400 font-semibold">23</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Features Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Why Choose Fraud Buster?
//             </h2>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Our comprehensive fraud detection platform offers unmatched security and performance
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-4">
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.title}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   onClick={() => setActiveFeature(index)}
//                   className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
//                     activeFeature === index
//                       ? 'bg-white/10 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
//                       : 'bg-white/5 border-white/10 hover:bg-white/10'
//                   }`}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color}`}>
//                       <feature.icon className="h-6 w-6 text-white" />
//                     </div>
//                     <div className="flex-grow">
//                       <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
//                       <p className="text-gray-400">{feature.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.div
//               key={activeFeature}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
//             >
//               {(() => {
//                 const IconComponent = features[activeFeature].icon;
//                 return (
//                   <>
//                     <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${features[activeFeature].color} mb-6`}>
//                       <IconComponent className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
//                     <p className="text-gray-300 mb-6">{features[activeFeature].description}</p>
//                     <ul className="space-y-3">
//                       {features[activeFeature].details.map((detail, idx) => (
//                         <li key={idx} className="flex items-center text-gray-300">
//                           <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 );
//               })()}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Product Features Grid */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Powerful Product Features
//             </h2>
//             <p className="text-xl text-gray-300">
//               Advanced capabilities that set FraudBuster apart from the competition
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {productFeatures.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.05 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                   <feature.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-2xl font-bold text-cyan-400 mb-2">{feature.metric}</div>
//                 <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* API Plans Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Choose Your API Plan
//             </h2>
//             <p className="text-xl text-gray-300">
//               Flexible plans designed to scale with your business needs
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {apiPlans.map((plan, index) => (
//               <motion.div
//                 key={plan.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
//                   plan.popular ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' : 'border-white/10'
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
//                     Most Popular
//                   </div>
//                 )}
                
//                 <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
//                   <Shield className="h-8 w-8 text-white" />
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                 <p className="text-gray-400 mb-6">{plan.description}</p>
                
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-gray-300">
//                       <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                   {plan.notApplicable.map((feature, idx) => (
//                     <li key={`na-${idx}`} className="flex items-center text-gray-500">
//                       <div className="h-5 w-5 mr-3 flex-shrink-0 rounded-full border border-gray-500 flex items-center justify-center">
//                         <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
//                       </div>
//                       <span className="line-through">{feature}</span>
//                       <span className="ml-2 text-xs text-gray-600">(Not Available)</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <div className="mb-6 p-4 bg-white/5 rounded-lg">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-cyan-400 font-semibold">Price:</span>
//                     <span className="text-white">{plan.price}</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-cyan-400 font-semibold">Free API Calls:</span>
//                     <span className="text-white">{plan.freeApiCalls}</span>
//                   </div>
//                 </div>
                
//                 <Link
//                   to="/api-docs"
//                   className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
//                       : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
//                   }`}
//                 >
//                   Learn More
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-300">
//               Trusted by industry leaders worldwide
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <blockquote className="text-gray-300 mb-6 leading-relaxed">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
//                     <Users className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-white font-semibold">{testimonial.author}</div>
//                     <div className="text-gray-400 text-sm">{testimonial.company}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Eliminate Fraud?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Join thousands of businesses that trust Fraud Buster to protect their transactions
//               and maintain customer confidence.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
//               >
//                 Start Your Free Trial
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//               <Link
//                 to="/api-docs"
//                 className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
//               >
//                 View API Documentation
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;











//<-------------------------curent design------------------------------------------------------------------------------------>











//<-----------------------Current design------------------------------------------------------------------------------------>

// import React, { useState, useEffect, useMemo, useRef } from "react";
// import {
//   ArrowRight, Shield, Zap, Globe, TrendingUp, Eye, Lock, CheckCircle,
//   Users, Award, BarChart3, Clock, Star, Database, ShieldCheck, Server,
//   Activity, FileCheck, Globe as GlobeIcon
// } from "lucide-react";
// import { animate, stagger } from "animejs";
// import { Link } from "react-router-dom";

// /* =========================================================
//    Utilities
//    ========================================================= */
// const useReducedMotion = () => {
//   const [reduced, set] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
//     const onChange = () => set(!!mq?.matches);
//     onChange();
//     mq?.addEventListener?.("change", onChange);
//     return () => mq?.removeEventListener?.("change", onChange);
//   }, []);
//   return reduced;
// };

// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

// /* =========================================================
//    Cursor particles + dot
//    ========================================================= */
// function CursorParticles() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   const reduced = useReducedMotion();

//   useEffect(() => {
//     const dot = dotRef.current!;
//     const onMove = (e: MouseEvent) => {
//       dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   useEffect(() => {
//     if (reduced) return;
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     let dpr = Math.max(1, window.devicePixelRatio || 1);

//     const resize = () => {
//       dpr = Math.max(1, window.devicePixelRatio || 1);
//       canvas.width = Math.floor(innerWidth * dpr);
//       canvas.height = Math.floor(innerHeight * dpr);
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//       ctx.globalCompositeOperation = "lighter";
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     type P = { x: number; y: number; vx: number; vy: number; life: number };
//     const parts: P[] = [];
//     const spawn = (x: number, y: number) => {
//       for (let i = 0; i < 4; i++) {
//         const a = Math.random() * Math.PI * 2;
//         const s = Math.random() * 1.4 + 0.5;
//         parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
//       }
//     };
//     const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
//     window.addEventListener("mousemove", onMove);

//     let raf = 0;
//     const loop = () => {
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//       for (let i = parts.length - 1; i >= 0; i--) {
//         const p = parts[i];
//         p.x += p.vx; p.y += p.vy; p.life *= 0.96;
//         const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
//         g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
//         g.addColorStop(1, "rgba(124,92,255,0)");
//         ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 22, 0, Math.PI * 2); ctx.fill();
//         if (p.life < 0.05) parts.splice(i, 1);
//       }
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("resize", resize);
//     };
//   }, [reduced]);

//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10" aria-hidden />
//       <div
//         ref={dotRef}
//         className="pointer-events-none fixed left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
//         style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
//         aria-hidden
//       />
//     </>
//   );
// }

// /* =========================================================
//    Scroll progress bar
//    ========================================================= */
// function ScrollProgress() {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = ref.current!;
//     const onScroll = () => {
//       const p = Math.min(1, (window.scrollY) / (document.body.scrollHeight - window.innerHeight));
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/10">
//       <div ref={ref} className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]" />
//     </div>
//   );
// }

// /* =========================================================
//    Magnetic button hook (Anime v4)
//    ========================================================= */
// function useMagnet(ref: React.RefObject<HTMLElement>, strength = 18) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const rect = () => el.getBoundingClientRect();
//     const onMove = (e: MouseEvent) => {
//       const r = rect();
//       const cx = r.left + r.width / 2;
//       const cy = r.top + r.height / 2;
//       const dx = (e.clientX - cx) / r.width;
//       const dy = (e.clientY - cy) / r.height;
//       animate(el, { translateX: dx * strength, translateY: dy * strength, duration: 120, ease: "out(3)" });
//     };
//     const onLeave = () => animate(el, { translateX: 0, translateY: 0, duration: 200, ease: "out(4)" });
//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
//   }, [ref, strength]);
// }

// /* =========================================================
//    Tilt card hook
//    ========================================================= */
// function useTilt(ref: React.RefObject<HTMLElement>, max = 8) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const onMove = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect();
//       const px = (e.clientX - rect.left) / rect.width;
//       const py = (e.clientY - rect.top) / rect.height;
//       const rx = (py - 0.5) * -max;
//       const ry = (px - 0.5) * max;
//       el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
//     };
//     const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)"; };
//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
//   }, [ref, max]);
// }

// /* Spotlight/ripple card (21st.dev‑style interaction) */
// function CapabilityCard({
//   icon: Icon,
//   title,
//   description,
//   metric
// }: { icon: React.ComponentType<any>, title: string, description: string, metric: string }) {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const onEnter = () => {
//       animate(el, { scale: [{ to: 1.03 }], translateY: [{ to: -4 }], duration: 180, ease: "out(3)" });
//     };
//     const onLeave = () => {
//       animate(el, { scale: [{ to: 1 }], translateY: [{ to: 0 }], duration: 180, ease: "out(3)" });
//     };
//     const onPointerMove = (e: PointerEvent) => {
//       const r = el.getBoundingClientRect();
//       const x = ((e.clientX - r.left) / r.width) * 100;
//       const y = ((e.clientY - r.top) / r.height) * 100;
//       el.style.setProperty("--mx", `${x}%`);
//       el.style.setProperty("--my", `${y}%`);
//     };
//     const onPointerDown = () => {
//       const ring = document.createElement("span");
//       ring.style.position = "absolute";
//       ring.style.left = "var(--mx,50%)";
//       ring.style.top = "var(--my,50%)";
//       ring.style.width = ring.style.height = "6px";
//       ring.style.borderRadius = "999px";
//       ring.style.background = "rgba(53,224,255,.55)";
//       ring.style.transform = "translate(-50%,-50%)";
//       ring.style.pointerEvents = "none";
//       el.appendChild(ring);
//       animate(ring, { scale: [{ to: 24 }], opacity: [{ from: 0.65, to: 0 }], duration: 420, ease: "out(3)" })
//         .then(() => ring.remove());
//     };

//     el.addEventListener("mouseenter", onEnter);
//     el.addEventListener("mouseleave", onLeave);
//     el.addEventListener("pointermove", onPointerMove);
//     el.addEventListener("pointerdown", onPointerDown);

//     return () => {
//       el.removeEventListener("mouseenter", onEnter);
//       el.removeEventListener("mouseleave", onLeave);
//       el.removeEventListener("pointermove", onPointerMove);
//       el.removeEventListener("pointerdown", onPointerDown);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`${glass} relative rounded-2xl p-6 text-center will-change-transform`}
//       style={{
//         backgroundImage:
//           "radial-gradient(240px 240px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.12), transparent 60%)"
//       }}
//     >
//       <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-4">
//         <Icon className="h-8 w-8 text-white" />
//       </div>
//       <div className="text-2xl font-bold text-[#35E0FF] mb-1">{metric}</div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-white/70 mt-1">{description}</p>
//     </div>
//   );
// }

// /* =========================================================
//    Home Page
//    ========================================================= */
// const Home: React.FC = () => {
//   const reduced = useReducedMotion();
//   const [activeFeature, setActiveFeature] = useState(0);

//   /* ------------------- LIVE SIGNALS ------------------- */
//   const [live, setLive] = useState({ checks: 18224, blocked: 31, latency: 452, uptime: 99.98 });
//   useEffect(() => {
//     if (reduced) return;
//     const id = setInterval(() => {
//       setLive((s) => ({
//         checks: s.checks + Math.floor(Math.random() * 40),
//         blocked: s.blocked + (Math.random() > 0.85 ? 1 : 0),
//         latency: Math.max(320, Math.min(540, s.latency + Math.floor((Math.random() * 25) - 12))),
//         uptime: 99.98
//       }));
//     }, 1200);
//     return () => clearInterval(id);
//   }, [reduced]);

//   /* ------------------- COUNTERS ------------------- */
//   const [stats, setStats] = useState({ transactions: 0, fraudPrevented: 0, clients: 0, accuracy: 0 });
//   useEffect(() => {
//     const targets = { transactions: 15.2, fraudPrevented: 97.6, clients: 320, accuracy: 99.7 };
//     const keys = Object.keys(targets) as (keyof typeof targets)[];
//     const start = performance.now();
//     const dur = 1600;

//     const tick = () => {
//       const t = Math.min(1, (performance.now() - start) / dur);
//       const ease = 1 - Math.pow(1 - t, 3);
//       const next: any = {};
//       keys.forEach((k) => { const v = (targets[k] as number) * ease; next[k] = Math.round(v * 10) / 10; });
//       setStats(next);
//       if (t < 1) requestAnimationFrame(tick);
//     };
//     const id = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(id);
//   }, []);

//   /* ------------------- HEADLINE SPLIT + REVEAL ------------------- */
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   useEffect(() => {
//     const el = headlineRef.current;
//     if (!el || reduced) return;

//     const text = el.textContent || "";
//     el.innerHTML = text
//       .split("")
//       .map((c) => `<span class="char inline-block will-change-transform">${c === " " ? "&nbsp;" : c}</span>`)
//       .join("");

//     const nodes = el.querySelectorAll<HTMLElement>(".char");
//     animate(nodes, {
//       translateY: [{ from: 30, to: 0 }],
//       opacity: [{ from: 0, to: 1 }],
//       delay: stagger(18),
//       duration: 760,
//       ease: "out(3)",
//     });

//     // small shimmer pass after reveal
//     setTimeout(() => {
//       animate(nodes, {
//         color: [{ from: "#ffffff", to: "#d9f8ff" }, { to: "#ffffff" }],
//         duration: 650,
//         delay: stagger(6),
//         ease: "inOut(3)",
//       });
//     }, 900);
//   }, [reduced]);

//   /* ------------------- PARALLAX GRID BG ------------------- */
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);
//   const parallax = useMemo(
//     () => ({
//       transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.01}px, ${(mouse.y - window.innerHeight / 2) * 0.01}px, 0)`,
//     }),
//     [mouse.x, mouse.y]
//   );

//   /* ------------------- MAGNETIC CTAs ------------------- */
//   const cta1Ref = useRef<HTMLAnchorElement>(null);
//   const cta2Ref = useRef<HTMLAnchorElement>(null);
//   useMagnet(cta1Ref, 20);
//   useMagnet(cta2Ref, 16);

//   /* ------------------- SECTIONS CONTENT ------------------- */
//   const features = [
//     {
//       icon: ShieldCheck,
//       title: "Advanced Security",
//       description: "Multi-layered identity proofing across PAN, Aadhaar, IFSC, bank accounts & GST.",
//       details: [
//         "Deterministic + ML signals",
//         "Explainable flags & evidence",
//         "Tenant isolation & RBAC",
//         "Audit trails & policy controls",
//       ],
//       color: "from-[#6C63FF] to-[#35E0FF]",
//     },
//     {
//       icon: Zap,
//       title: "Real-time Decisions",
//       description: "Risk decisions in sub-second so user experiences stay silky smooth.",
//       details: [
//         "< 500ms typical response",
//         "Autoscale to burst traffic",
//         "Global, low-latency POPs",
//         "99.9%+ historical uptime",
//       ],
//       color: "from-[#35E0FF] to-[#4AF2C6]",
//     },
//     {
//       icon: Globe,
//       title: "Compliance-ready",
//       description: "Built for Indian KYC/KYB and enterprise security baselines.",
//       details: [
//         "Aadhaar/PAN alignment",
//         "IFSC & bank verification",
//         "GSTIN & filings insight",
//         "SOC 2 paths, data residency",
//       ],
//       color: "from-[#4AF2C6] to-[#6C63FF]",
//     },
//     {
//       icon: TrendingUp,
//       title: "Risk Intelligence",
//       description: "Score, segment & action with explainable analytics.",
//       details: [
//         "Risk scoring & thresholds",
//         "Anomaly & velocity rules",
//         "BI-ready exports",
//         "Custom model hooks",
//       ],
//       color: "from-[#E9B949] to-[#7C5CFF]",
//     },
//   ];

//   const productFeatures = [
//     { icon: Eye, title: "Real-time Monitoring", description: "Continuous checks with instant signals & webhooks.", metric: "24/7" },
//     { icon: Lock, title: "Data Encryption", description: "TLS in transit + AES-256 at rest; scoped keys.", metric: "AES-256" },
//     { icon: BarChart3, title: "Risk Scoring", description: "Blend deterministic & behavioral signals.", metric: "99.7%" },
//     { icon: Clock, title: "Latency", description: "High throughput & sub-second decisions.", metric: "~450ms" },
//   ];

//   const testimonials = [
//     {
//       quote: "FraudBuster became our trust layer—fast, explainable and easy to integrate.",
//       author: "Head of Risk",
//       company: "BNPL Leader",
//       rating: 5,
//     },
//     {
//       quote: "Onboarding dropped 32% in time with fewer false declines. Stellar support.",
//       author: "VP Engineering",
//       company: "Wallet & Payments",
//       rating: 5,
//     },
//     {
//       quote: "KYB (GST) insights were the clincher for our merchant flows.",
//       author: "Risk Manager",
//       company: "Marketplace",
//       rating: 5,
//     },
//   ];

//   const apiPlans = [
//     {
//       name: "Lite",
//       description: "Startups validating early risk controls.",
//       features: ["VPA Lookup", "Basic Analytics", "Email Support"],
//       notApplicable: ["KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority Support", "24/7 Support"],
//       color: "from-[#6C63FF] to-[#35E0FF]",
//       price: "Contact Sales",
//       freeApiCalls: "100 / month",
//     },
//     {
//       name: "Elite",
//       description: "Growing teams scaling onboarding.",
//       features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Priority Support", "Basic Analytics"],
//       notApplicable: ["Face Match", "GST Validation", "24/7 Support"],
//       color: "from-[#35E0FF] to-[#4AF2C6]",
//       popular: true,
//       price: "Contact Sales",
//       freeApiCalls: "500 / month",
//     },
//     {
//       name: "Premium",
//       description: "Enterprises with strict SLAs & compliance.",
//       features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority & 24/7 Support", "Advanced Analytics"],
//       notApplicable: [],
//       color: "from-[#4AF2C6] to-[#6C63FF]",
//       price: "Contact Sales",
//       freeApiCalls: "1000 / month",
//     },
//   ];

//   /* ------------------- TILT REFS FOR FEATURE CARDS ------------------- */
//   const tiltRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
//   tiltRefs.forEach((r) => useTilt(r, 8));

//   /* ------------------- Intersection-based reveals ------------------- */
//   const revealSections = useRef<HTMLElement[]>([]);
//   useEffect(() => {
//     const nodes = revealSections.current;
//     if (!nodes?.length || reduced) return;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (!e.isIntersecting) return;
//           const targets = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
//           animate(targets, {
//             opacity: [{ from: 0, to: 1 }],
//             translateY: [{ from: 24, to: 0 }],
//             delay: stagger(40),
//             duration: 520,
//             ease: "out(3)",
//           });
//           io.unobserve(e.target);
//         });
//       },
//       { threshold: 0.2 }
//     );
//     nodes.forEach((n) => io.observe(n));
//     return () => io.disconnect();
//   }, [reduced]);

//   /* ------------------- Fingerprint scanner — NO Anime timeline ------------------- */
//   const fpWrapRef = useRef<HTMLDivElement>(null);
//   const fpRef = useRef<SVGSVGElement>(null);
//   useEffect(() => {
//     if (reduced || !fpRef.current) return;

//     const getLen = (el: SVGElement) => {
//       // circle/ellipse may not have getTotalLength
//       // try geometry; fallback
//       const tag = el.tagName.toLowerCase();
//       if ((el as any).getTotalLength) {
//         try { return (el as any).getTotalLength(); } catch { /* fall through */ }
//       }
//       if (tag === "circle") {
//         const r = parseFloat((el as SVGCircleElement).getAttribute("r") || "0");
//         return 2 * Math.PI * r;
//       }
//       return 320;
//     };

//     const elements = Array.from(fpRef.current.querySelectorAll<SVGElement>("path, circle"));
//     // prep dashes
//     elements.forEach((el) => {
//       const L = getLen(el);
//       (el.style as any).strokeDasharray = `${L} ${L}`;
//       (el.style as any).strokeDashoffset = `${L}`;
//     });

//     // animate each path with RAF, staggered
//     const startTime = performance.now();
//     const duration = 700;
//     const staggerMs = 70;

//     let raf = 0;
//     const loop = () => {
//       const now = performance.now();
//       let allDone = true;
//       elements.forEach((el, idx) => {
//         const L = getLen(el);
//         const t = Math.max(0, Math.min(1, (now - startTime - idx * staggerMs) / duration));
//         if (t < 1) allDone = false;
//         const eased = t <= 0 ? 0 : 1 - Math.pow(1 - t, 3); // easeOutCubic
//         (el.style as any).strokeDashoffset = `${(1 - eased) * L}`;
//       });
//       if (!allDone) {
//         raf = requestAnimationFrame(loop);
//       } else {
//         // subtle glow on wrapper using WAAPI (won't touch Anime parser)
//         if (fpWrapRef.current?.animate) {
//           fpWrapRef.current.animate(
//             [
//               { boxShadow: "0 0 0 rgba(124,92,255,0)" },
//               { boxShadow: "0 0 16px rgba(124,92,255,0.45)" }
//             ],
//             { duration: 400, easing: "cubic-bezier(0.4,0,0.2,1)" }
//           );
//         }
//       }
//     };
//     raf = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf);
//   }, [reduced]);

//   /* ------------------- Radar sweep (capabilities) ------------------- */
//   const radarRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (reduced || !radarRef.current) return;
//     const sweep = radarRef.current.querySelector<HTMLElement>(".sweep")!;
//     animate(sweep, { rotate: [{ from: 0, to: 360 }], duration: 2800, loop: true, ease: "linear" });
//   }, [reduced]);

//   /* ------------------- Auto-rotating + swipe testimonials ------------------- */
//   const [slide, setSlide] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const N = testimonials.length;

//   const goTo = (n: number, immediate = false) => {
//     const clamped = Math.max(0, Math.min(N - 1, n));
//     setSlide(clamped);
//     const track = trackRef.current;
//     if (!track) return;
//     const w = (track.parentElement?.getBoundingClientRect().width || 0);
//     const toX = -clamped * w;
//     animate(track, { translateX: [{ to: toX }], duration: immediate ? 0 : 520, ease: "out(3)" });
//   };

//   useEffect(() => {
//     const onResize = () => goTo(slide, true);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [slide]);

//   useEffect(() => {
//     const id = window.setInterval(() => setSlide((s) => {
//       const next = (s + 1) % N;
//       const track = trackRef.current;
//       if (track) {
//         const w = (track.parentElement?.getBoundingClientRect().width || 0);
//         animate(track, { translateX: [{ to: -next * w }], duration: 520, ease: "out(3)" });
//       }
//       return next;
//     }), 4200);
//     return () => window.clearInterval(id);
//   }, [N]);

//   // simple swipe detection
//   const swipeData = useRef<{ x: number; t: number } | null>(null);
//   const onPointerDown = (e: React.PointerEvent) => {
//     swipeData.current = { x: e.clientX, t: performance.now() };
//   };
//   const onPointerUp = (e: React.PointerEvent) => {
//     if (!swipeData.current) return;
//     const dx = e.clientX - swipeData.current.x;
//     const dt = performance.now() - swipeData.current.t;
//     swipeData.current = null;
//     if (Math.abs(dx) > 48 && dt < 800) {
//       goTo(dx > 0 ? slide - 1 : slide + 1);
//     } else {
//       goTo(slide); // snap back
//     }
//   };

//   /* ------------------- Headline text ------------------- */
//   const headlineText = "Real-time Fraud Intelligence";

//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />

//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0 opacity-[0.12]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
//             backgroundSize: "42px 42px",
//             ...parallax,
//           }}
//         />
//         <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
//       </div>

//       {/* HERO */}
//       <section className="relative overflow-hidden min-h-[90vh] flex items-center">
//         <div className="relative mx-10 w-full max-w-none py-20">
//           <div className="grid lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
//                 <Award className="h-4 w-4 text-[#35E0FF] mr-2" />
//                 <span className="text-[#35E0FF] text-sm font-medium">KYC · KYB · Risk Scoring · India-ready</span>
//               </div>

//               <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
//                 {headlineText}
//               </h1>

//               <p className="text-lg md:text-xl text-white/75 mt-5 max-w-xl" data-reveal>
//                 Verify identities across <strong>PAN</strong>, <strong>Aadhaar</strong>, <strong>IFSC</strong>, <strong>bank accounts</strong> and <strong>GST</strong>.
//                 Prevent fraud with <em>explainable evidence</em>—without slowing users down.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-3">
//                 <Link
//                   ref={cta1Ref}
//                   to="/demo"
//                   className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
//                 >
//                   Try Live Demo
//                 </Link>
//                 <Link
//                   ref={cta2Ref}
//                   to="/product"
//                   className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
//                 >
//                   Explore Product
//                 </Link>
//               </div>

//               {/* Live stats */}
//               <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-6" data-reveal>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{stats.transactions}M+</div>
//                   <div className="text-white/60 text-sm">Checks Served</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{stats.fraudPrevented}%</div>
//                   <div className="text-white/60 text-sm">Fraud Reduction</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{stats.clients}+</div>
//                   <div className="text-white/60 text-sm">Teams Onboarded</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{stats.accuracy}%</div>
//                   <div className="text-white/60 text-sm">Decision Precision</div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Live panel + fingerprint */}
//             <div className="relative">
//               <div ref={fpWrapRef} className={`${glass} rounded-3xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}>
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF] text-black px-4 py-1.5 rounded-full text-xs font-semibold">
//                   Live Signals
//                 </div>

//                 <div className="space-y-5">
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
//                     <span className="text-white/90 flex items-center gap-2"><Activity className="h-5 w-5" /> Threat Level</span>
//                     <span className="text-[#4AF2C6] font-semibold">LOW</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
//                     <span className="text-white/90 flex items-center gap-2"><Server className="h-5 w-5" /> Monitoring</span>
//                     <span className="flex items-center">
//                       <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#4AF2C6] animate-pulse" />
//                       <span className="text-[#4AF2C6] font-semibold">ONLINE</span>
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
//                     <span className="text-white/90 flex items-center gap-2"><Database className="h-5 w-5" /> Checks/min</span>
//                     <span className="text-[#35E0FF] font-semibold">{Math.floor(live.checks / 60)}</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
//                     <span className="text-white/90 flex items-center gap-2"><Shield className="h-5 w-5" /> Fraud Blocked</span>
//                     <span className="text-rose-400 font-semibold">{live.blocked}</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
//                     <span className="text-white/90 flex items-center gap-2"><Clock className="h-5 w-5" /> Latency</span>
//                     <span className="text-[#35E0FF] font-semibold">{live.latency}ms</span>
//                   </div>
//                 </div>

//                 {/* Fingerprint scanner */}
//                 <div className="mt-6 flex justify-center">
//                   <svg
//                     ref={fpRef}
//                     width="160"
//                     height="160"
//                     viewBox="0 0 160 160"
//                     className="text-[#7C5CFF]"
//                   >
//                     <circle cx="80" cy="80" r="64" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
//                     <path d="M45,95c10,20 60,20 70,0" fill="none" stroke="currentColor" strokeWidth="2" />
//                     <path d="M50,80c8,16 52,16 60,0" fill="none" stroke="currentColor" strokeWidth="2" />
//                     <path d="M55,65c6,12 42,12 50,0" fill="none" stroke="currentColor" strokeWidth="2" />
//                     <path d="M60,52c5,10 32,10 40,0" fill="none" stroke="currentColor" strokeWidth="2" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Compliance chips */}
//           <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Shield className="h-4 w-4" /> SOC 2 pathways</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><FileCheck className="h-4 w-4" /> KYC/KYB ready</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Lock className="h-4 w-4" /> AES-256</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><GlobeIcon className="h-4 w-4" /> Data residency</span>
//           </div>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section
//         className="py-24 bg-white/[0.04]"
//         ref={(el) => el && (revealSections.current[0] = el)}
//       >
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>How FraudBuster Works</h2>
//             <p className="text-lg text-white/70 mt-2" data-reveal>
//               From input → validation → decision → audit. <em>Explainable by design.</em>
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-10">
//             {/* Sticky narrative */}
//             <div className="lg:sticky lg:top-24 h-fit space-y-4">
//               {[
//                 { title: "1) Capture & Consent", desc: "Collect PAN/Aadhaar, GSTIN, bank account & IFSC with explicit user consent." },
//                 { title: "2) Validation & Signals", desc: "Deterministic checks + ML heuristics; VPA, GST filings, bank verification & face match." },
//                 { title: "3) Risk Decision", desc: "Explainable score & flags. Thresholds, policies & webhooks to your systems." },
//                 { title: "4) Audit & Analytics", desc: "Full evidence trails, BI exports & dashboards that your risk team will love." },
//               ].map((s) => (
//                 <div key={s.title} className={`p-5 rounded-2xl ${glass}`} data-reveal>
//                   <div className="text-sm text-[#35E0FF] font-semibold mb-1">{s.title}</div>
//                   <div className="font-semibold">{s.desc}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Visual: Radar */}
//             <div className="relative min-h-[420px]">
//               <div
//                 ref={radarRef}
//                 className="absolute inset-0 grid place-items-center"
//               >
//                 <div className="relative h-[360px] w-[360px] rounded-full border border-white/10">
//                   <div className="absolute inset-6 rounded-full border border-white/10" />
//                   <div className="absolute inset-14 rounded-full border border-white/10" />
//                   <div className="absolute inset-24 rounded-full border border-white/10" />

//                   <div className="sweep absolute left-1/2 top-1/2 h-1/2 w-[2px] origin-top -translate-x-1/2 -translate-y-full bg-gradient-to-b from-[#35E0FF] to-transparent" />
//                   <div className="absolute inset-0">
//                     {["PAN", "Aadhaar", "IFSC", "Bank", "GST", "VPA"].map((t, i) => (
//                       <div
//                         key={t}
//                         style={{
//                           position: "absolute",
//                           left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 38}%`,
//                           top: `${50 + Math.sin((i / 6) * Math.PI * 2) * 38}%`,
//                           transform: "translate(-50%,-50%)",
//                         }}
//                         className="text-xs px-2 py-1 rounded-full bg-white/[0.06] border border-white/10"
//                       >
//                         {t}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="mt-6 text-white/70 text-sm" data-reveal>
//                 Radar shows *signals* FraudBuster sweeps during onboarding & transactions. Configure thresholds to meet your risk appetite.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY FRAUDBUSTER (interactive) */}
//       <section className="py-24" ref={(el) => el && (revealSections.current[1] = el)}>
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Why choose FraudBuster?</h2>
//             <p className="text-lg text-white/70 mt-2" data-reveal>Modern trust layer — fast, explainable, enterprise-ready.</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-10">
//             {/* Interactive cards (tilt) */}
//             <div className="space-y-6">
//               {features.map((f, i) => (
//                 <div
//                   key={f.title}
//                   ref={tiltRefs[i]}
//                   onClick={() => setActiveFeature(i)}
//                   className={`p-6 rounded-2xl transition-all cursor-pointer will-change-transform ${activeFeature === i
//                     ? "bg-white/10 border border-[#35E0FF]/50 shadow-[0_10px_30px_rgba(53,224,255,0.25)]"
//                     : `${glass} hover:bg-white/10`}`}
//                   data-reveal
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${f.color}`}>
//                       <f.icon className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold">{f.title}</h3>
//                       <p className="text-white/70 mt-1">{f.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Detail panel */}
//             <div className={`rounded-3xl p-8 border ${glass}`} data-reveal>
//               {(() => {
//                 const A = features[activeFeature];
//                 return (
//                   <>
//                     <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${A.color} mb-5`}>
//                       <A.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold">{A.title}</h3>
//                     <p className="text-white/75 mt-2 mb-5">{A.description}</p>
//                     <ul className="grid sm:grid-cols-2 gap-3">
//                       {A.details.map((d, idx) => (
//                         <li key={idx} className="flex items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2">
//                           <CheckCircle className="h-5 w-5 text-[#35E0FF] flex-shrink-0" />
//                           <span>{d}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 );
//               })()}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CAPABILITIES (animated, interactive grid) */}
//       <section className="py-24" ref={(el) => el && (revealSections.current[2] = el)}>
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Powerful Capabilities</h2>
//             <p className="text-lg text-white/70" data-reveal>Trust users without friction.</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {productFeatures.map((f) => (
//               <CapabilityCard key={f.title} icon={f.icon} title={f.title} description={f.description} metric={f.metric} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRICING */}
//       <section className="py-24 bg-white/[0.04]" ref={(el) => el && (revealSections.current[3] = el)}>
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Choose Your API Plan</h2>
//             <p className="text-lg text-white/70" data-reveal>Simple pricing that scales with your risk needs.</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {apiPlans.map((p) => (
//               <div
//                 key={p.name}
//                 className={`relative rounded-3xl p-8 border ${glass} ${p.popular ? "border-[#35E0FF]/60 shadow-[0_12px_40px_rgba(53,224,255,0.25)]" : ""}`}
//                 data-reveal
//               >
//                 {p.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black px-4 py-1.5 rounded-full text-xs font-bold">
//                     Most Popular
//                   </div>
//                 )}

//                 <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${p.color} mb-5`}>
//                   <Shield className="h-8 w-8 text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold">{p.name}</h3>
//                 <p className="text-white/70 mt-1 mb-5">{p.description}</p>

//                 <ul className="space-y-3 mb-6">
//                   {p.features.map((f, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-[#35E0FF]" /> <span>{f}</span>
//                     </li>
//                   ))}
//                   {p.notApplicable.map((f, idx) => (
//                     <li key={`na-${idx}`} className="flex items-center gap-2 text-white/50">
//                       <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40">
//                         <span className="h-2 w-2 rounded-full bg-white/40" />
//                       </span>
//                       <span className="line-through">{f}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   to="/api"
//                   className={`block w-full text-center py-3 rounded-xl font-semibold transition ${
//                     p.popular
//                       ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black hover:opacity-95"
//                       : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
//                   }`}
//                 >
//                   Read API Docs
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS (swipeable + animated) */}
//       <section className="py-24" ref={(el) => el && (revealSections.current[4] = el)}>
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>What Our Clients Say</h2>
//             <p className="text-lg text-white/70" data-reveal>Trusted by leaders across fintech, BNPL and marketplaces.</p>
//           </div>

//           <div className="relative" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
//             <div className="overflow-hidden">
//               <div ref={trackRef} className="flex">
//                 {testimonials.map((t, i) => (
//                   <div key={i} className="min-w-full px-2">
//                     <div className={`rounded-2xl p-8 border ${glass}`} data-reveal>
//                       <div className="flex items-center mb-4" aria-label={`${t.rating} out of 5 stars`}>
//                         {Array.from({ length: t.rating }).map((_, j) => (
//                           <Star key={j} className="h-5 w-5 text-[#E9B949] fill-current" />
//                         ))}
//                       </div>
//                       <blockquote className="text-white/80 mb-6 leading-relaxed">“{t.quote}”</blockquote>
//                       <div className="flex items-center gap-3">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] flex items-center justify-center">
//                           <Users className="h-5 w-5 text-white" />
//                         </div>
//                         <div>
//                           <div className="font-semibold">{t.author}</div>
//                           <div className="text-white/60 text-sm">{t.company}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* pagination dots */}
//             <div className="mt-6 flex justify-center gap-2">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goTo(i)}
//                   className={`h-2.5 w-2.5 rounded-full ${i === slide ? "bg-white" : "bg-white/30"}`}
//                   aria-label={`Go to slide ${i + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none text-center">
//           <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`} ref={(el) => el && (revealSections.current[5] = el)}>
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Ready to eliminate fraud?</h2>
//             <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
//               Launch in hours with our sandbox and guided integration. Meet your SLAs with confidence.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
//               >
//                 Talk to Sales <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//               <Link
//                 to="/demo"
//                 className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
//               >
//                 Try the Live Demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



//<--------------------------New Design---------------------------------------------------------------------







//</--------------------------New Design---------------------------------------------------------------------


import React, { useState, useEffect, useMemo, useRef } from "react";
// import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Zap, Globe, TrendingUp, Eye, Lock, CheckCircle,
  Users, Award, BarChart3, Clock, Star, Database, ShieldCheck, Server,
  Activity, FileCheck, Globe as GlobeIcon, Fingerprint as FingerIcon,
  Landmark, CreditCard, Smartphone, IndianRupee
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";
import { Link } from "react-router-dom";


const useReducedMotion = () => {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onChange = () => set(!!mq?.matches);
    onChange();
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
};

const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

/* =========================================================
   Cursor particles + dot
   ========================================================= */
function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current!;
    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = "lighter";
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const parts: P[] = [];
    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 4; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.4 + 0.5;
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
      }
    };
    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx; p.y += p.vy; p.life *= 0.96;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 22, 0, Math.PI * 2); ctx.fill();
        if (p.life < 0.05) parts.splice(i, 1);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10" aria-hidden />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
        aria-hidden
      />
    </>
  );
}

/* =========================================================
   Scroll progress bar
   ========================================================= */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const p = Math.min(1, (window.scrollY) / (document.body.scrollHeight - window.innerHeight));
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/10">
      <div ref={ref} className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]" />
    </div>
  );
}

/* =========================================================
   Magnetic button hook (anime v4)
   ========================================================= */
function useMagnet(ref: React.RefObject<HTMLElement>, strength = 18) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = () => el.getBoundingClientRect();
    const onMove = (e: MouseEvent) => {
      const r = rect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      animate(el, { translateX: dx * strength, translateY: dy * strength, duration: 120, ease: "out(3)" });
    };
    const onLeave = () => animate(el, { translateX: 0, translateY: 0, duration: 200, ease: "out(4)" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, strength]);
}

/* =========================================================
   Tilt card hook
   ========================================================= */
function useTilt(ref: React.RefObject<HTMLElement>, max = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -max;
      const ry = (px - 0.5) * max;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };
    const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, max]);
}

/* =========================================================
   Orbiting “Signals & Integrations”
   ========================================================= */
function SignalsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !containerRef.current) return;
    const chips = containerRef.current.querySelectorAll<HTMLElement>(".chip");
    animate(chips, {
      opacity: [{ from: 0, to: 1 }],
      scale: [{ from: 0.8, to: 1 }],
      delay: stagger(60),
      duration: 420,
      ease: "out(3)",
    });
  }, [reduced]);

  const rings = [1, 2, 3];
  const icons = [
    { label: "PAN", Icon: CreditCard },
    { label: "Aadhaar", Icon: FingerIcon },
    { label: "IFSC", Icon: Landmark },
    { label: "Bank", Icon: CreditCard },
    { label: "GST", Icon: GlobeIcon },
    { label: "VPA", Icon: Smartphone },
    { label: "UPI", Icon: IndianRupee },
  ];

  const iconsPerRing = Math.ceil(icons.length / rings.length);

  return (
    <section className="py-20" aria-labelledby="signals-title">
      <div className="mx-10 max-w-none">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 id="signals-title" className="text-3xl md:text-4xl font-bold">Signals & Integrations</h2>
            <p className="text-lg text-white/70 mt-2">
              FraudBuster orchestrates signals across <strong>PAN</strong>, <strong>Aadhaar</strong>, <strong>IFSC</strong>, <strong>Bank</strong>,
              <strong> GST</strong>, <strong>VPA/UPI</strong> and more — unified into an <em>explainable</em> risk decision.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#35E0FF]" /> Webhooks & sandbox for rapid integration</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#35E0FF]" /> Evidence trails for audits & disputes</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-[#35E0FF]" /> Model hooks & policy thresholds</li>
            </ul>
          </div>

          <div ref={containerRef} className="relative h-[24rem]">
            <div className="absolute inset-0 grid place-items-center">
              <div className={`chip ${glass} rounded-full px-4 py-2 text-sm`}>
                Risk Engine
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[34rem] h-[34rem]">
                {[...rings].map((_, ringIdx) => {
                  const size = 18 + ringIdx * 7; // rem
                  const slice = icons.slice(ringIdx * iconsPerRing, ringIdx * iconsPerRing + iconsPerRing);
                  const angleStep = (2 * Math.PI) / Math.max(1, slice.length);

                  return (
                    <div
                      key={ringIdx}
                      className="absolute rounded-full border-2 border-dotted border-white/20"
                      style={{
                        width: `${size}rem`,
                        height: `${size}rem`,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        animation: `spin ${16 + ringIdx * 6}s linear infinite`,
                      }}
                    >
                      {slice.map((cfg, i) => {
                        const angle = i * angleStep;
                        const x = 50 + 50 * Math.cos(angle);
                        const y = 50 + 50 * Math.sin(angle);
                        return (
                          <div
                            key={cfg.label}
                            className={`chip absolute ${glass} rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1 will-change-transform`}
                            style={{
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: "translate(-50%, -50%)",
                            }}
                            onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.1 }], duration: 120 })}
                            onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 150 })}
                          >
                            <cfg.Icon className="h-3.5 w-3.5" />
                            <span>{cfg.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <style>{`
              @keyframes spin {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to   { transform: translate(-50%, -50%) rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Home Page
   ========================================================= */
const Home: React.FC = () => {
  const reduced = useReducedMotion();
  const [activeFeature, setActiveFeature] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ------------------- LIVE SIGNALS ------------------- */
  const [live, setLive] = useState({ checks: 18224, blocked: 31, latency: 452, uptime: 99.98 });
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setLive((s) => ({
        checks: s.checks + Math.floor(Math.random() * 40),
        blocked: s.blocked + (Math.random() > 0.85 ? 1 : 0),
        latency: Math.max(320, Math.min(540, s.latency + Math.floor(random(-12, 12, 0)))),
        uptime: 99.98
      }));
    }, 1200);
    return () => clearInterval(id);
  }, [reduced]);

  /* ------------------- COUNTERS ------------------- */
  const [stats, setStats] = useState({ transactions: 0, fraudPrevented: 0, clients: 0, accuracy: 0 });
  useEffect(() => {
    const targets = { transactions: 15.2, fraudPrevented: 97.6, clients: 320, accuracy: 99.7 };
    const keys = Object.keys(targets) as (keyof typeof targets)[];
    const start = performance.now();
    const dur = 1600;

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      const next: any = {};
      keys.forEach((k) => {
        const v = (targets[k] as number) * ease;
        next[k] = Math.round(v * 10) / 10;
      });
      setStats(next);
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  /* ------------------- HEADLINE SPLIT + REVEAL ------------------- */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = headlineRef.current;
    if (!el || reduced) return;

    const text = el.textContent || "";
    el.innerHTML = text
      .split("")
      .map((c) => `<span class="char inline-block will-change-transform">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");

    const nodes = el.querySelectorAll<HTMLElement>(".char");
    animate(nodes, {
      translateY: [{ from: 30, to: 0 }],
      opacity: [{ from: 0, to: 1 }],
      delay: stagger(18),
      ease: "spring(1, 90, 12, 0)",
      duration: 780
    });
  }, [reduced]);

  /* ------------------- PARALLAX GRID BG ------------------- */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallax = useMemo(
    () => ({
      transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.01}px, ${(mouse.y - window.innerHeight / 2) * 0.01}px, 0)`,
    }),
    [mouse.x, mouse.y]
  );

  /* ------------------- MAGNETIC CTAs ------------------- */
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1Ref, 20);
  useMagnet(cta2Ref, 16);

  /* ------------------- SECTIONS CONTENT ------------------- */
  const features = [
    {
      icon: ShieldCheck,
      title: "Advanced Security",
      description: "Multi-layered identity proofing across PAN, Aadhaar, IFSC, bank accounts & GST.",
      details: [
        "Deterministic + ML signals",
        "Explainable flags & evidence",
        "Tenant isolation & RBAC",
        "Audit trails & policy controls",
      ],
      color: "from-[#6C63FF] to-[#35E0FF]",
    },
    {
      icon: Zap,
      title: "Real-time Decisions",
      description: "Risk decisions in sub-second so user experiences stay silky smooth.",
      details: [
        "< 500ms typical response",
        "Autoscale to burst traffic",
        "Global, low-latency POPs",
        "99.9%+ historical uptime",
      ],
      color: "from-[#35E0FF] to-[#4AF2C6]",
    },
    {
      icon: Globe,
      title: "Compliance-ready",
      description: "Built for Indian KYC/KYB and enterprise security baselines.",
      details: [
        "Aadhaar/PAN alignment",
        "IFSC & bank verification",
        "GSTIN & filings insight",
        "SOC 2 paths, data residency",
      ],
      color: "from-[#4AF2C6] to-[#6C63FF]",
    },
    {
      icon: TrendingUp,
      title: "Risk Intelligence",
      description: "Score, segment & action with explainable analytics.",
      details: [
        "Risk scoring & thresholds",
        "Anomaly & velocity rules",
        "BI-ready exports",
        "Custom model hooks",
      ],
      color: "from-[#E9B949] to-[#7C5CFF]",
    },
  ];

  const productFeatures = [
    { icon: Eye, title: "Real-time Monitoring", description: "Continuous checks with instant signals & webhooks.", metric: "24/7" },
    { icon: Lock, title: "Data Encryption", description: "TLS in transit + AES-256 at rest; scoped keys.", metric: "AES-256" },
    { icon: BarChart3, title: "Risk Scoring", description: "Blend deterministic & behavioral signals.", metric: "99.7%" },
    { icon: Clock, title: "Latency", description: "High throughput & sub-second decisions.", metric: "~450ms" },
  ];

  const testimonials = [
    {
      quote: "FraudBuster became our trust layer—fast, explainable and easy to integrate.",
      author: "Head of Risk",
      company: "BNPL Leader",
      rating: 5,
    },
    {
      quote: "Onboarding dropped 32% in time with fewer false declines. Stellar support.",
      author: "VP Engineering",
      company: "Wallet & Payments",
      rating: 5,
    },
    {
      quote: "KYB (GST) insights were the clincher for our merchant flows.",
      author: "Risk Manager",
      company: "Marketplace",
      rating: 5,
    },
    {
      quote: "We achieved compliance without sacrificing conversion.",
      author: "CTO",
      company: "Digital Bank",
      rating: 5,
    },
  ];

  const apiPlans = [
    {
      name: "Lite",
      description: "Startups validating early risk controls.",
      features: ["VPA Lookup", "Basic Analytics", "Email Support"],
      notApplicable: ["KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority Support", "24/7 Support"],
      color: "from-[#6C63FF] to-[#35E0FF]",
      price: "Contact Sales",
      freeApiCalls: "100 / month",
    },
    {
      name: "Elite",
      description: "Growing teams scaling onboarding.",
      features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Priority Support", "Basic Analytics"],
      notApplicable: ["Face Match", "GST Validation", "24/7 Support"],
      color: "from-[#35E0FF] to-[#4AF2C6]",
      popular: true,
      price: "Contact Sales",
      freeApiCalls: "500 / month",
    },
    {
      name: "Premium",
      description: "Enterprises with strict SLAs & compliance.",
      features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority & 24/7 Support", "Advanced Analytics"],
      notApplicable: [],
      color: "from-[#4AF2C6] to-[#6C63FF]",
      price: "Contact Sales",
      freeApiCalls: "1000 / month",
    },
  ];

  /* ------------------- TILT REFS FOR FEATURE CARDS ------------------- */
  const tiltRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  tiltRefs.forEach((r) => useTilt(r, 8));

  /* ------------------- Intersection-based reveals (anime) ------------------- */
  const revealSections = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const nodes = revealSections.current;
    if (!nodes?.length || reduced) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const tgts = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
          animate(tgts, {
            opacity: [{ from: 0, to: 1 }],
            translateY: [{ from: 24, to: 0 }],
            delay: stagger(40),
            duration: 520,
            ease: "out(3)",
          });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.2 }
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);

  /* ------------------- Fingerprint scanner (SVG stroke) ------------------- */
  const fpRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (reduced || !fpRef.current) return;
    const paths = fpRef.current.querySelectorAll<SVGPathElement | SVGCircleElement>("path, circle");
    paths.forEach((p: any) => {
      const len = p.getTotalLength ? p.getTotalLength() : 320;
      (p as any).style.strokeDasharray = `${len} ${len}`;
      (p as any).style.strokeDashoffset = `${len}`;
    });

    const tl = createTimeline();

    // ✅ FIX: return a plain object, not a keyframes array
    tl.add(paths as unknown as Element[], {
      strokeDashoffset: (el: any) => {
        const len = el.getTotalLength ? el.getTotalLength() : 320;
        return { from: len, to: 0 };
      },
      delay: stagger(70),
      duration: 700,
      ease: "out(3)",
    });

    tl.add(fpRef.current as unknown as Element, {
      filter: [{ from: "drop-shadow(0 0 0 rgba(124,92,255,0))", to: "drop-shadow(0 0 16px rgba(124,92,255,0.45))" }],
      duration: 400,
      ease: "inOut(3)",
    }, "-=300");
  }, [reduced]);

  /* ------------------- Radar sweep (capabilities) ------------------- */
  const radarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced || !radarRef.current) return;
    const sweep = radarRef.current.querySelector<HTMLElement>(".sweep")!;
    animate(sweep, { rotate: [{ from: 0, to: 360 }], duration: 2800, loop: true, ease: "linear" });
  }, [reduced]);

  /* ------------------- Marquee ------------------- */
  const marqueeItems = [...testimonials, ...testimonials];

  const headlineText = "Real-time Fraud Intelligence";

  const onCapabilityClick = (el: HTMLElement) => {
    animate(el, {
      scale: [{ to: 1.04 }, { to: 1 }],
      boxShadow: [
        { to: "0 0 0 0 rgba(53,224,255,0)" },
        { to: "0 0 0 14px rgba(53,224,255,0.18)" },
        { to: "0 0 0 0 rgba(53,224,255,0)" }
      ],
      duration: 450,
      ease: "out(3)"
    });
  };

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            ...parallax,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="relative mx-10 max-w-none py-20">
          <div className="grid lg:grid-cols-2 gap-15 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <Award className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">KYC · KYB · Risk Scoring · India-ready</span>
              </div>

              <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
                {headlineText}
              </h1>

              <p className="text-lg md:text-xl text-white/75 mt-5 max-w-xl" data-reveal>
                Verify identities across <strong>PAN</strong>, <strong>Aadhaar</strong>, <strong>IFSC</strong>, <strong>bank accounts</strong> and <strong>GST</strong>.
                Prevent fraud with <em>explainable evidence</em>—without slowing users down.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/demo"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Try Live Demo
                </Link>
                <Link
                  to="/product"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Explore Product
                </Link>
              </div>

              {/* Live stats */}
              <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-6" data-reveal>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#35E0FF]">{stats.transactions}M+</div>
                  <div className="text-white/60 text-sm">Checks Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#35E0FF]">{stats.fraudPrevented}%</div>
                  <div className="text-white/60 text-sm">Fraud Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#35E0FF]">{stats.clients}+</div>
                  <div className="text-white/60 text-sm">Teams Onboarded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#35E0FF]">{stats.accuracy}%</div>
                  <div className="text-white/60 text-sm">Decision Precision</div>
                </div>
              </div>
            </div>

            {/* Right: Live panel + fingerprint */}
            <div className="relative">
              <div className={`${glass} rounded-3xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}>
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF] text-black px-4 py-1.5 rounded-full text-xs font-semibold">
                  Live Signals
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
                    <span className="text-white/90 flex items-center gap-2"><Activity className="h-5 w-5" /> Threat Level</span>
                    <span className="text-[#4AF2C6] font-semibold">LOW</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
                    <span className="text-white/90 flex items-center gap-2"><Server className="h-5 w-5" /> Monitoring</span>
                    <span className="flex items-center">
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#4AF2C6] animate-pulse" />
                      <span className="text-[#4AF2C6] font-semibold">ONLINE</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
                    <span className="text-white/90 flex items-center gap-2"><Database className="h-5 w-5" /> Checks/min</span>
                    <span className="text-[#35E0FF] font-semibold">{Math.floor(live.checks / 60)}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
                    <span className="text-white/90 flex items-center gap-2"><Shield className="h-5 w-5" /> Fraud Blocked</span>
                    <span className="text-rose-400 font-semibold">{live.blocked}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.06]">
                    <span className="text-white/90 flex items-center gap-2"><Clock className="h-5 w-5" /> Latency</span>
                    <span className="text-[#35E0FF] font-semibold">{live.latency}ms</span>
                  </div>
                </div>

                {/* Fingerprint scanner */}
                <div className="mt-6 flex justify-center">
                  <svg
                    ref={fpRef}
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    className="text-[#7C5CFF]"
                    style={{ filter: "drop-shadow(0 0 0 rgba(124,92,255,0))" }}
                  >
                    <circle cx="80" cy="80" r="64" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
                    <path d="M45,95c10,20 60,20 70,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M50,80c8,16 52,16 60,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M55,65c6,12 42,12 50,0" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M60,52c5,10 32,10 40,0" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance chips */}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Shield className="h-4 w-4" /> SOC 2 pathways</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><FileCheck className="h-4 w-4" /> KYC/KYB ready</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Lock className="h-4 w-4" /> AES-256</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><GlobeIcon className="h-4 w-4" /> Data residency</span>
          </div>
        </div>
      </section>

      {/* Orbit “Signals & Integrations” */}
      <SignalsOrbit />

      {/* HOW IT WORKS */}
      <section
        className="py-24 bg-white/[0.04]"
        ref={(el) => el && (revealSections.current[0] = el)}
      >
        <div className="mx-10 max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>How FraudBuster Works</h2>
            <p className="text-lg text-white/70 mt-2" data-reveal>
              From input → validation → decision → audit. <em>Explainable by design.</em>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="lg:sticky lg:top-24 h-fit space-y-4">
              {[
                { title: "1) Capture & Consent", desc: "Collect PAN/Aadhaar, GSTIN, bank account & IFSC with explicit user consent." },
                { title: "2) Validation & Signals", desc: "Deterministic checks + ML heuristics; VPA, GST filings, bank verification & face match." },
                { title: "3) Risk Decision", desc: "Explainable score & flags. Thresholds, policies & webhooks to your systems." },
                { title: "4) Audit & Analytics", desc: "Full evidence trails, BI exports & dashboards that your risk team will love." },
              ].map((s) => (
                <div key={s.title} className={`p-5 rounded-2xl ${glass}`} data-reveal>
                  <div className="text-sm text-[#35E0FF] font-semibold mb-1">{s.title}</div>
                  <div className="font-semibold">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="relative min-h-[420px]">
              <div
                ref={radarRef}
                className="absolute inset-0 grid place-items-center"
              >
                <div className="relative h-[360px] w-[360px] rounded-full border border-white/10">
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                  <div className="absolute inset-14 rounded-full border border-white/10" />
                  <div className="absolute inset-24 rounded-full border border-white/10" />

                  <div className="sweep absolute left-1/2 top-1/2 h-1/2 w-[2px] origin-top -translate-x-1/2 -translate-y-full bg-gradient-to-b from-[#35E0FF] to-transparent" />
                  <div className="absolute inset-0">
                    {["PAN", "Aadhaar", "IFSC", "Bank", "GST", "VPA"].map((t, i) => (
                      <div
                        key={t}
                        style={{
                          position: "absolute",
                          left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 38}%`,
                          top: `${50 + Math.sin((i / 6) * Math.PI * 2) * 38}%`,
                          transform: "translate(-50%,-50%)",
                        }}
                        className="text-xs px-2 py-1 rounded-full bg-white/[0.06] border border-white/10"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-6 text-white/70 text-sm" data-reveal>
                Radar shows *signals* FraudBuster sweeps during onboarding & transactions. Configure thresholds to meet your risk appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FRAUDBUSTER */}
      <section className="py-24" ref={(el) => el && (revealSections.current[1] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Why choose FraudBuster?</h2>
            <p className="text-lg text-white/70 mt-2" data-reveal>Modern trust layer — fast, explainable, enterprise-ready.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  ref={tiltRefs[i]}
                  onClick={() => setActiveFeature(i)}
                  className={`p-6 rounded-2xl transition-all cursor-pointer will-change-transform ${activeFeature === i
                    ? "bg-white/10 border border-[#35E0FF]/50 shadow-[0_10px_30px_rgba(53,224,255,0.25)]"
                    : `${glass} hover:bg-white/10`}`}
                  data-reveal
                >
                  <div className="flex items-start gap-4">
                    <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r ${f.color}`}>
                      <f.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{f.title}</h3>
                      <p className="text-white/70 mt-1">{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`rounded-3xl p-8 border ${glass}`} data-reveal>
              {(() => {
                const A = features[activeFeature];
                return (
                  <>
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${A.color} mb-5`}>
                      <A.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{A.title}</h3>
                    <p className="text-white/75 mt-2 mb-5">{A.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {A.details.map((d, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2"
                          onClick={(e) => onCapabilityClick(e.currentTarget as HTMLElement)}
                        >
                          <CheckCircle className="h-5 w-5 text-[#35E0FF] flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-24" ref={(el) => el && (revealSections.current[2] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Powerful Capabilities</h2>
            <p className="text-lg text-white/70" data-reveal>Trust users without friction.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productFeatures.map((f) => (
              <div
                key={f.title}
                data-reveal
                className={`group ${glass} rounded-2xl p-6 text-center will-change-transform`}
                onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.03 }], duration: 170 })}
                onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 180 })}
                onClick={(e) => onCapabilityClick(e.currentTarget as HTMLElement)}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-4 group-hover:shadow-[0_10px_30px_rgba(53,224,255,0.25)] transition">
                  <f.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#35E0FF] mb-1">{f.metric}</div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-white/70 mt-1">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (revealSections.current[3] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Choose Your API Plan</h2>
          <p className="text-lg text-white/70" data-reveal>Simple pricing that scales with your risk needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lite",
                description: "Startups validating early risk controls.",
                features: ["VPA Lookup", "Basic Analytics", "Email Support"],
                notApplicable: ["KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority Support", "24/7 Support"],
                color: "from-[#6C63FF] to-[#35E0FF]",
                price: "Contact Sales",
                freeApiCalls: "100 / month",
              },
              {
                name: "Elite",
                description: "Growing teams scaling onboarding.",
                features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Priority Support", "Basic Analytics"],
                notApplicable: ["Face Match", "GST Validation", "24/7 Support"],
                color: "from-[#35E0FF] to-[#4AF2C6]",
                popular: true,
                price: "Contact Sales",
                freeApiCalls: "500 / month",
              },
              {
                name: "Premium",
                description: "Enterprises with strict SLAs & compliance.",
                features: ["VPA Lookup", "KYC Validation", "Bank Verification", "Face Match", "GST Validation", "Priority & 24/7 Support", "Advanced Analytics"],
                notApplicable: [],
                color: "from-[#4AF2C6] to-[#6C63FF]",
                price: "Contact Sales",
                freeApiCalls: "1000 / month",
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border ${glass} ${p.popular ? "border-[#35E0FF]/60 shadow-[0_12px_40px_rgba(53,224,255,0.25)]" : ""}`}
                data-reveal
              >
                {p.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black px-4 py-1.5 rounded-full text-xs font-bold">
                    Most Popular
                  </div>
                )}

                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${p.color} mb-5`}>
                  <Shield className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-white/70 mt-1 mb-5">{p.description}</p>

                <ul className="space-y-3 mb-6">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#35E0FF]" /> <span>{f}</span>
                    </li>
                  ))}
                  {p.notApplicable.map((f, idx) => (
                    <li key={`na-${idx}`} className="flex items-center gap-2 text-white/50">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/40">
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                      </span>
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/api"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition ${
                    p.popular
                      ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black hover:opacity-95"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/15"
                  }`}
                >
                  Read API Docs
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS MARQUEE */}
      <section className="py-24" ref={(el) => el && (revealSections.current[4] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>What Our Clients Say</h2>
            <p className="text-lg text-white/70" data-reveal>Trusted by leaders across fintech, BNPL and marketplaces.</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee will-change-transform">
              {marqueeItems.map((t, i) => (
                <figure key={i} className={`min-w-[22rem] max-w-[22rem] ${glass} rounded-2xl p-6`}>
                  <div className="flex items-center mb-3" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 text-[#E9B949] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-white/80 mb-5">“{t.quote}”</blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.author}</div>
                      <div className="text-xs text-white/60">{t.company}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                width: 200%;
                animation: marquee 25s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15 mx-10 max-w-none`} ref={(el) => el && (revealSections.current[5] = el)}>
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Ready to eliminate fraud?</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
              Launch in hours with our sandbox and guided integration. Meet your SLAs with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Talk to Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
              >
                Try the Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
