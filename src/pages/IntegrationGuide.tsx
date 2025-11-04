import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Download, Play, Settings, Zap } from 'lucide-react';

const IntegrationGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  const integrationSteps = [
    {
      title: 'Get API Credentials',
      description: 'Obtain your client-id, auth-key, and secret-key from the FraudBuster team',
      icon: Settings,
      details: [
        'Contact Fraud Buster support team',
        'Provide business verification documents',
        'Receive your unique API credentials',
        'Store credentials securely in your environment'
      ]
    },
    {
      title: 'Set Up Environment',
      description: 'Configure your development environment with the necessary dependencies',
      icon: Code,
      details: [
        'Install HTTP client library (axios, fetch, etc.)',
        'Set up environment variables for API credentials',
        'Configure multipart/form-data handling',
        'Set up error handling and logging'
      ]
    },
    {
      title: 'Implement Authentication',
      description: 'Add the required headers to authenticate your API requests',
      icon: CheckCircle,
      details: [
        'Include client-id in request headers',
        'Add auth-key for authentication',
        'Include secret-key for additional security',
        'Set Content-Type to multipart/form-data'
      ]
    },
    {
      title: 'Make API Calls',
      description: 'Start making requests to the FraudBuster API endpoints',
      icon: Zap,
      details: [
        'Prepare form data with required fields',
        'Handle file uploads for face and card images',
        'Process API responses and extract data',
        'Implement retry logic for failed requests'
      ]
    }
  ];

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const fraudBusterAPI = {
  baseURL: 'https://api.fraudbuster.in',
  headers: {
    'client-id': '<your-client-id>',
    'auth-key': '<your-auth-key>',
    'Secret-key': '<your-secret-key>'
  }
};

async function performKYCVerification(userData) {
  try {
    const formData = new FormData();
    
    // Add required fields based on your plan
    formData.append('mobile', userData.mobile);
    
    if (userData.bankAccount) {
      formData.append('bankAccount', userData.bankAccount);
      formData.append('ifsc', userData.ifsc);
    }
    
    if (userData.gstin) {
      formData.append('gstin', userData.gstin);
    }
    
    // Add file uploads for Premium plan
    if (userData.faceImage) {
      formData.append('face', fs.createReadStream(userData.faceImage));
    }
    
    if (userData.cardImage) {
      formData.append('card', fs.createReadStream(userData.cardImage));
    }

    const response = await axios.post(
      \`\${fraudBusterAPI.baseURL}/api/v1/fb/user-onboard\`,
      formData,
      {
        headers: {
          ...fraudBusterAPI.headers,
          ...formData.getHeaders()
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('KYC Verification failed:', error.response?.data || error.message);
    throw error;
  }
}

// Usage example
const userData = {
  mobile: '9123456789',
  bankAccount: '1234567890123',
  ifsc: 'DEMO0001234',
  gstin: '29DEMO1234567Z1'
};

performKYCVerification(userData)
  .then(result => {
    console.log('KYC Verification successful:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,

    python: `# Python Example
import requests
import json

class FraudBusterAPI:
    def __init__(self):
        self.base_url = "https://api.fraudbuster.in"
        self.headers = {
            'client-id': '<your-client-id>',
            'auth-key': '<your-auth-key>',
            'Secret-key': '<your-secret-key>'
        }
    
    def perform_kyc_verification(self, user_data, files=None):
        """
        Perform KYC verification using FraudBuster API
        
        Args:
            user_data (dict): User information for verification
            files (dict): File uploads for face and card images
        
        Returns:
            dict: API response
        """
        try:
            # Prepare form data
            form_data = {
                'mobile': user_data.get('mobile')
            }
            
            # Add optional fields based on plan
            if user_data.get('bankAccount'):
                form_data['bankAccount'] = user_data['bankAccount']
                form_data['ifsc'] = user_data['ifsc']
            
            if user_data.get('gstin'):
                form_data['gstin'] = user_data['gstin']
            
            # Prepare file uploads
            file_uploads = {}
            if files:
                if files.get('face'):
                    file_uploads['face'] = open(files['face'], 'rb')
                if files.get('card'):
                    file_uploads['card'] = open(files['card'], 'rb')
            
            # Make API request
            response = requests.post(
                f"{self.base_url}/api/v1/fb/user-onboard",
                headers=self.headers,
                data=form_data,
                files=file_uploads
            )
            
            # Close file handles
            for file_handle in file_uploads.values():
                file_handle.close()
            
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.RequestException as e:
            print(f"API request failed: {e}")
            if hasattr(e, 'response') and e.response is not None:
                print(f"Response: {e.response.text}")
            raise
        except Exception as e:
            print(f"Unexpected error: {e}")
            raise

# Usage example
api = FraudBusterAPI()

user_data = {
    'mobile': '9123456789',
    'bankAccount': '1234567890123',
    'ifsc': 'DEMO0001234',
    'gstin': '29DEMO1234567Z1'
}

files = {
    'face': '/path/to/face_image.jpg',
    'card': '/path/to/id_card.jpg'
}

try:
    result = api.perform_kyc_verification(user_data, files)
    print("KYC Verification successful:")
    print(json.dumps(result, indent=2))
except Exception as e:
    print(f"Verification failed: {e}")`,

    curl: `# cURL Example

# Lite Plan - VPA Lookup only
curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
  -H "client-id: <your-client-id>" \\
  -H "auth-key: <your-auth-key>" \\
  -H "Secret-key: <your-secret-key>" \\
  -F "mobile=9123456789"

# Elite Plan - With Bank Verification
curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
  -H "client-id: <your-client-id>" \\
  -H "auth-key: <your-auth-key>" \\
  -H "Secret-key: <your-secret-key>" \\
  -F "mobile=9123456789" \\
  -F "bankAccount=1234567890123" \\
  -F "ifsc=DEMO0001234"

# Premium Plan - Full Verification
curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
  -H "client-id: <your-client-id>" \\
  -H "auth-key: <your-auth-key>" \\
  -H "Secret-key: <your-secret-key>" \\
  -F "mobile=9123456789" \\
  -F "bankAccount=1234567890123" \\
  -F "ifsc=DEMO0001234" \\
  -F "gstin=29DEMO1234567Z1" \\
  -F "face=@/path/to/face_image.jpg" \\
  -F "card=@/path/to/id_card.jpg"`
  };

  const [activeLanguage, setActiveLanguage] = useState('javascript');

  const bestPractices = [
    {
      title: 'Secure Credential Storage',
      description: 'Store API credentials in environment variables, never in source code',
      icon: CheckCircle
    },
    {
      title: 'Error Handling',
      description: 'Implement comprehensive error handling for all API responses',
      icon: CheckCircle
    },
    {
      title: 'Rate Limiting',
      description: 'Respect API rate limits and implement exponential backoff',
      icon: CheckCircle
    },
    {
      title: 'Data Validation',
      description: 'Validate input data before sending to the API',
      icon: CheckCircle
    },
    {
      title: 'Logging & Monitoring',
      description: 'Log API requests and responses for debugging and monitoring',
      icon: CheckCircle
    },
    {
      title: 'File Size Limits',
      description: 'Ensure uploaded images are within acceptable size limits',
      icon: CheckCircle
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
              <Code className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integration Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step-by-step guide to integrate FraudBuster API into your application 
              with code examples and best practices for Indian fintech compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Steps */}
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
              Integration Steps
            </h2>
            <p className="text-xl text-gray-300">
              Follow these steps to successfully integrate FraudBuster into your application
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  activeStep === index ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeStep === index 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/10 text-cyan-400'
                  }`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                
                {activeStep === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-gray-300 text-sm">
                        <ArrowRight className="h-3 w-3 mr-2 text-cyan-400" />
                        {detail}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
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
              Code Examples
            </h2>
            <p className="text-xl text-gray-300">
              Ready-to-use code snippets in popular programming languages
            </p>
          </motion.div>

          {/* Language Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(codeExamples).map((language) => (
              <button
                key={language}
                onClick={() => setActiveLanguage(language)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  activeLanguage === language
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {language}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <motion.div
            key={activeLanguage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/30 rounded-2xl p-6 overflow-x-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white capitalize">
                {activeLanguage} Implementation
              </h3>
              <button
                onClick={() => navigator.clipboard.writeText(codeExamples[activeLanguage])}
                className="flex items-center bg-white/10 hover:bg-white/20 text-gray-300 px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Copy Code
              </button>
            </div>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{codeExamples[activeLanguage]}</code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
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
              Best Practices
            </h2>
            <p className="text-xl text-gray-300">
              Follow these guidelines for secure and efficient API integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <practice.icon className="h-5 w-5 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{practice.title}</h3>
                </div>
                <p className="text-gray-400">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
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
              Need Integration Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our technical team in Bangalore is ready to help you with integration challenges, 
              API questions, and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Technical Support
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
                Schedule Integration Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationGuide;