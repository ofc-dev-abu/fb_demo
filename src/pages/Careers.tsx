import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, TrendingUp, Heart, Code, Shield, Briefcase, ArrowRight } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer - Fraud Detection',
      department: 'Engineering',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Build and enhance our AI-powered fraud detection algorithms and real-time processing systems.',
      requirements: [
        'Strong experience in Python, Java, or Node.js',
        'Knowledge of machine learning and data analytics',
        'Experience with microservices architecture',
        'Understanding of payment systems and security'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Product Manager - Fintech Solutions',
      department: 'Product',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead product strategy and roadmap for our fraud prevention solutions in the Indian market.',
      requirements: [
        'Experience in fintech or financial services',
        'Strong understanding of financial regulations',
        'Product management experience with B2B SaaS',
        'Data-driven decision making skills'
      ]
    },
    {
      id: 3,
      title: 'Compliance Officer - Financial Regulations',
      department: 'Legal & Compliance',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '6-10 years',
      description: 'Ensure compliance with financial regulations and guidelines across all products.',
      requirements: [
        'Law degree with specialization in banking/finance',
        'Deep knowledge of financial regulations',
        'Experience in fintech compliance',
        'Strong analytical and communication skills'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer - Security Infrastructure',
      department: 'Engineering',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Manage and secure our cloud infrastructure with focus on data protection and compliance.',
      requirements: [
        'Experience with AWS/Azure cloud platforms',
        'Knowledge of Kubernetes and Docker',
        'Security best practices and compliance',
        'Infrastructure as Code (Terraform, CloudFormation)'
      ]
    },
    {
      id: 5,
      title: 'Sales Director - Enterprise Solutions',
      department: 'Sales',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '8-12 years',
      description: 'Drive enterprise sales for fraud prevention solutions to financial institutions and fintech companies.',
      requirements: [
        'Proven track record in B2B enterprise sales',
        'Experience selling to financial institutions',
        'Strong network in fintech ecosystem',
        'Understanding of fraud prevention technologies'
      ]
    },
    {
      id: 6,
      title: 'Data Scientist - ML Engineering',
      department: 'Engineering',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Develop and optimize machine learning models for fraud detection and risk assessment.',
      requirements: [
        'PhD/Masters in Data Science or related field',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of fraud detection algorithms',
        'Experience with big data technologies'
      ]
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Sales', 'Legal & Compliance'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Learning stipend, conference attendance, and clear career progression paths'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and generous vacation policy'
    },
    {
      icon: Briefcase,
      title: 'Competitive Package',
      description: 'Market-leading salary, equity participation, and performance bonuses'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We constantly push boundaries to create cutting-edge fraud prevention solutions'
    },
    {
      title: 'Security by Design',
      description: 'Every decision prioritizes the security and privacy of our clients\' data'
    },
    {
      title: 'Customer Success',
      description: 'Our clients\' success in preventing fraud drives everything we do'
    },
    {
      title: 'Regulatory Excellence',
      description: 'We maintain the highest standards of compliance with financial regulations'
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
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of fraud prevention. Join a team of passionate 
              professionals working to secure the global fintech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Learn About Our Culture
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide our work and culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive benefits and a culture that supports your growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
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

      {/* Job Openings */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our growing team and help shape the future of fintech security
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {dept === 'all' ? 'All Departments' : dept}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  job.featured ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center mb-4">
                      {job.featured && (
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          Featured
                        </span>
                      )}
                      <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 flex-shrink-0">
                    <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for technology and security. 
              Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Send Your Resume
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;