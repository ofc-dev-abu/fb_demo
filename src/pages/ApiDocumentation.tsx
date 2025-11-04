import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Copy, CheckCircle, AlertCircle, Key, Shield, Zap, FileText } from 'lucide-react';

const ApiDocumentation = () => {
  const [activeTab, setActiveTab] = useState('lite');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const plans = [
    {
      id: 'lite',
      name: 'Lite',
      services: ['VPA Lookup'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'elite',
      name: 'Elite',
      services: ['PAN (KYC) Validation', 'VPA Lookup', 'Bank Account & IFSC Validation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      services: ['PAN (KYC) Validation', 'VPA Lookup', 'Bank Account & IFSC Validation', 'Face Match Authentication', 'GST Validation'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const headers = {
    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
    'client-id': '<Provided from FB Team>',
    'auth-key': '<Provided from FB Team>',
    'Secret-key': '<Provided from FB Team>'
  };

  const errorCodes = [
    { code: '200', status: 'OK', description: 'Request successful, data fetched' },
    { code: '401', status: 'Unauthorized', description: 'Invalid credentials or unauthorized access' },
    { code: '402', status: 'Payment Required', description: 'Insufficient wallet balance' },
    { code: '404', status: 'Not Found', description: 'Wrong URL or data not found' }
  ];

  const liteResponse = `{
    "timestamp": "2025-08-15T08:07:32.105Z",
    "statusCode": 200,
    "status": "OK",
    "message": "Data Fetched Successfully",
    "success": true,
    "response": {
        "fetchVPAFromMobile": {
            "name": "DEMO TECH SOLUTIONS",
            "upi": [
                "9*1****567-demo@paytm",
                "9*1****567@phonepe"
            ]
        }
    },
    "failures": {}
}`;

  const eliteResponse = `{
    "timestamp": "2025-08-15T08:16:27.757Z",
    "statusCode": 200,
    "status": "OK",
    "message": "Data Fetched Successfully",
    "success": true,
    "response": {
        "fetchVPAFromMobile": {
            "name": "DEMO TECH SOLUTIONS",
            "upi": [
                "912****567-demo@paytm",
                "912****567@phonepe"
            ]
        },
        "fetchKYCFromMobile": {
            "fullName": "DEMO TECH SOLUTIONS"
        },
        "verifyBankDetails": {
            "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD",
            "address": "TECH PARK, WHITEFIELD MAIN ROAD, INNOVATION HUB",
            "bankName": "DEMO BANK",
            "branch": "BANGALORE",
            "city": "BANGALORE",
            "district": "Not Available",
            "ifsc": "DEMO000***1",
            "phone": "987****123",
            "pincode": "56***6",
            "state": "KARNATAKA"
        }
    },
    "failures": {}
}`;

  const premiumResponse = `{
    "timestamp": "2025-08-15T08:53:54.204Z",
    "statusCode": 200,
    "status": "OK",
    "message": "Data Fetched Successfully",
    "success": true,
    "response": {
        "fetchVPAFromMobile": {
            "name": "DEMO TECH SOLUTIONS",
            "upi": [
                "912****567-demo@paytm",
                "912****567@phonepe"
            ]
        },
        "performFaceMatch": {
            "statusCode": 200,
            "success": true,
            "timestamp": "2025-08-15T08:53:40.413Z",
            "transactionId": "demo1234-5678-9abc-def0-123456789abc",
            "message": "Data fetched successfully",
            "data": {
                "is_same_face": true,
                "is_person_image_blurry": false,
                "is_card_image_blurry": false,
                "same_face_confidence": 0.9876543210987654,
                "person_image_correctly_identified": true,
                "card_image_correctly_identified": true,
                "status": "1"
            }
        },
        "fetchKYCFromMobile": {
            "fullName": "DEMO USER NAME",
            "pan": "D*M****12P",
            "maskedAadhaar": "XXXXXXXX1234",
            "dob": "1990-01-15"
        },
        "verifyBankDetails": {
            "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD",
            "address": "TECH PARK, WHITEFIELD MAIN ROAD, INNOVATION HUB",
            "bankName": "DEMO BANK",
            "branch": "BANGALORE",
            "city": "BANGALORE",
            "district": "Not Available",
            "ifsc": "DEMO000***1",
            "phone": "987****123",
            "pincode": "56***6",
            "state": "KARNATAKA"
        },
        "fetchGSTValidation": {
            "taxpayerDetails": {
                "ntcrbs": "SPO",
                "adhrVFlag": "Yes",
                "lgnm": "DEMO TECH SOLUTIONS PRIVATE LIMITED",
                "stj": "State - Karnataka,Division - DEMO-1, Bengaluru",
                "dty": "Regular",
                "gstin": "29**DM****1T*CH",
                "nba": [
                    "Software Development",
                    "Technology Services",
                    "IT Consulting"
                ],
                "rgdt": "02/01/2024",
                "ctb": "Private Limited Company",
                "sts": "Active",
                "tradeNam": "DEMO TECH SOLUTIONS PRIVATE LIMITED"
            }
        }
    },
    "failures": {}
}`;

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
              <Code className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fraud Buster API Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating Fraud Buster's KYC and fraud detection
              services into your applications with support for multiple verification tiers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">USER_KYC_RETRIEVAL_API</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Purpose</h3>
                <p className="text-gray-300 mb-6">
                  Used to fetch the requested KYC details for the requested payload from the client, 
                  supporting multiple verification tiers based on your subscription plan.
                </p>
                
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Endpoint</h3>
                <div className="bg-black/30 rounded-lg p-4 mb-6">
                  <code className="text-green-400">POST /api/v1/fb/user-onboard</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Required Headers</h3>
                <div className="bg-black/30 rounded-lg p-4 space-y-2">
                  {Object.entries(headers).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-orange-400">{key}:</span>
                      <span className="text-gray-300 text-sm ml-4">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Plans */}
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
              Service Plans & Features
            </h2>
            <p className="text-xl text-gray-300">
              Choose the right plan for your KYC and verification needs
            </p>
          </motion.div>

          {/* Plan Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === plan.id
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Plan Details */}
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: activeTab === plan.id ? 1 : 0,
                y: activeTab === plan.id ? 0 : 20,
                display: activeTab === plan.id ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Services Included */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Services Included</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {plan.services.map((service, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg p-4">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Parameters */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Request Parameters</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="pb-3 text-cyan-400">Parameter</th>
                        <th className="pb-3 text-cyan-400">Type</th>
                        <th className="pb-3 text-cyan-400">Required</th>
                        <th className="pb-3 text-cyan-400">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-mono text-green-400">mobile</td>
                        <td className="py-3">Text</td>
                        <td className="py-3">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                        </td>
                        <td className="py-3">Mobile number for KYC lookup (e.g., 9123456789)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-mono text-green-400">bankAccount</td>
                        <td className="py-3">Text</td>
                        <td className="py-3">
                          {plan.id !== 'lite' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="py-3">Bank account number for verification (e.g., 1234567890)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-mono text-green-400">ifsc</td>
                        <td className="py-3">Text</td>
                        <td className="py-3">
                          {plan.id !== 'lite' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="py-3">IFSC code for bank validation (e.g., DEMO0001234)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-mono text-green-400">gstin</td>
                        <td className="py-3">Text</td>
                        <td className="py-3">
                          {plan.id === 'premium' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="py-3">GST identification number (e.g., 29DEMO1234567Z1)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 font-mono text-green-400">face</td>
                        <td className="py-3">File</td>
                        <td className="py-3">
                          {plan.id === 'premium' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="py-3">Face image for biometric verification</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-mono text-green-400">card</td>
                        <td className="py-3">File</td>
                        <td className="py-3">
                          {plan.id === 'premium' ? (
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </td>
                        <td className="py-3">ID card image for document verification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Response Example */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Response Example</h3>
                  <button
                    onClick={() => copyToClipboard(
                      plan.id === 'lite' ? liteResponse : 
                      plan.id === 'elite' ? eliteResponse : premiumResponse,
                      `${plan.id}-response`
                    )}
                    className="flex items-center bg-white/10 hover:bg-white/20 text-gray-300 px-4 py-2 rounded-lg transition-colors"
                  >
                    {copiedCode === `${plan.id}-response` ? (
                      <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 mr-2" />
                    )}
                    {copiedCode === `${plan.id}-response` ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>
                      {plan.id === 'lite' ? liteResponse : 
                       plan.id === 'elite' ? eliteResponse : premiumResponse}
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Error Codes */}
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
              Response Codes
            </h2>
            <p className="text-xl text-gray-300">
              Understanding API response codes and error handling
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {errorCodes.map((error, index) => (
              <motion.div
                key={error.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${
                  error.code === '200' 
                    ? 'border-green-500/30' 
                    : 'border-red-500/30'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    error.code === '200' 
                      ? 'bg-green-500/20' 
                      : 'bg-red-500/20'
                  }`}>
                    {error.code === '200' ? (
                      <CheckCircle className="h-6 w-6 text-green-400" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-red-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{error.code} - {error.status}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{error.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to get your API credentials and start integrating Fraud Buster 
              into your application today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get API Access
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                View Integration Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApiDocumentation;