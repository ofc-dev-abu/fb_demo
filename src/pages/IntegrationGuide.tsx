// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Code, CheckCircle, ArrowRight, Download, Play, Settings, Zap } from 'lucide-react';

// const IntegrationGuide = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const integrationSteps = [
//     {
//       title: 'Get API Credentials',
//       description: 'Obtain your client-id, auth-key, and secret-key from the FraudBuster team',
//       icon: Settings,
//       details: [
//         'Contact Fraud Buster support team',
//         'Provide business verification documents',
//         'Receive your unique API credentials',
//         'Store credentials securely in your environment'
//       ]
//     },
//     {
//       title: 'Set Up Environment',
//       description: 'Configure your development environment with the necessary dependencies',
//       icon: Code,
//       details: [
//         'Install HTTP client library (axios, fetch, etc.)',
//         'Set up environment variables for API credentials',
//         'Configure multipart/form-data handling',
//         'Set up error handling and logging'
//       ]
//     },
//     {
//       title: 'Implement Authentication',
//       description: 'Add the required headers to authenticate your API requests',
//       icon: CheckCircle,
//       details: [
//         'Include client-id in request headers',
//         'Add auth-key for authentication',
//         'Include secret-key for additional security',
//         'Set Content-Type to multipart/form-data'
//       ]
//     },
//     {
//       title: 'Make API Calls',
//       description: 'Start making requests to the FraudBuster API endpoints',
//       icon: Zap,
//       details: [
//         'Prepare form data with required fields',
//         'Handle file uploads for face and card images',
//         'Process API responses and extract data',
//         'Implement retry logic for failed requests'
//       ]
//     }
//   ];

//   const codeExamples = {
//     javascript: `// JavaScript/Node.js Example
// const axios = require('axios');
// const FormData = require('form-data');
// const fs = require('fs');

// const fraudBusterAPI = {
//   baseURL: 'https://api.fraudbuster.in',
//   headers: {
//     'client-id': '<your-client-id>',
//     'auth-key': '<your-auth-key>',
//     'Secret-key': '<your-secret-key>'
//   }
// };

// async function performKYCVerification(userData) {
//   try {
//     const formData = new FormData();
    
//     // Add required fields based on your plan
//     formData.append('mobile', userData.mobile);
    
//     if (userData.bankAccount) {
//       formData.append('bankAccount', userData.bankAccount);
//       formData.append('ifsc', userData.ifsc);
//     }
    
//     if (userData.gstin) {
//       formData.append('gstin', userData.gstin);
//     }
    
//     // Add file uploads for Premium plan
//     if (userData.faceImage) {
//       formData.append('face', fs.createReadStream(userData.faceImage));
//     }
    
//     if (userData.cardImage) {
//       formData.append('card', fs.createReadStream(userData.cardImage));
//     }

//     const response = await axios.post(
//       \`\${fraudBusterAPI.baseURL}/api/v1/fb/user-onboard\`,
//       formData,
//       {
//         headers: {
//           ...fraudBusterAPI.headers,
//           ...formData.getHeaders()
//         }
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('KYC Verification failed:', error.response?.data || error.message);
//     throw error;
//   }
// }

// // Usage example
// const userData = {
//   mobile: '9123456789',
//   bankAccount: '1234567890123',
//   ifsc: 'DEMO0001234',
//   gstin: '29DEMO1234567Z1'
// };

// performKYCVerification(userData)
//   .then(result => {
//     console.log('KYC Verification successful:', result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });`,

//     python: `# Python Example
// import requests
// import json

// class FraudBusterAPI:
//     def __init__(self):
//         self.base_url = "https://api.fraudbuster.in"
//         self.headers = {
//             'client-id': '<your-client-id>',
//             'auth-key': '<your-auth-key>',
//             'Secret-key': '<your-secret-key>'
//         }
    
//     def perform_kyc_verification(self, user_data, files=None):
//         """
//         Perform KYC verification using FraudBuster API
        
//         Args:
//             user_data (dict): User information for verification
//             files (dict): File uploads for face and card images
        
//         Returns:
//             dict: API response
//         """
//         try:
//             # Prepare form data
//             form_data = {
//                 'mobile': user_data.get('mobile')
//             }
            
//             # Add optional fields based on plan
//             if user_data.get('bankAccount'):
//                 form_data['bankAccount'] = user_data['bankAccount']
//                 form_data['ifsc'] = user_data['ifsc']
            
//             if user_data.get('gstin'):
//                 form_data['gstin'] = user_data['gstin']
            
//             # Prepare file uploads
//             file_uploads = {}
//             if files:
//                 if files.get('face'):
//                     file_uploads['face'] = open(files['face'], 'rb')
//                 if files.get('card'):
//                     file_uploads['card'] = open(files['card'], 'rb')
            
//             # Make API request
//             response = requests.post(
//                 f"{self.base_url}/api/v1/fb/user-onboard",
//                 headers=self.headers,
//                 data=form_data,
//                 files=file_uploads
//             )
            
//             # Close file handles
//             for file_handle in file_uploads.values():
//                 file_handle.close()
            
//             response.raise_for_status()
//             return response.json()
            
//         except requests.exceptions.RequestException as e:
//             print(f"API request failed: {e}")
//             if hasattr(e, 'response') and e.response is not None:
//                 print(f"Response: {e.response.text}")
//             raise
//         except Exception as e:
//             print(f"Unexpected error: {e}")
//             raise

// # Usage example
// api = FraudBusterAPI()

// user_data = {
//     'mobile': '9123456789',
//     'bankAccount': '1234567890123',
//     'ifsc': 'DEMO0001234',
//     'gstin': '29DEMO1234567Z1'
// }

// files = {
//     'face': '/path/to/face_image.jpg',
//     'card': '/path/to/id_card.jpg'
// }

// try:
//     result = api.perform_kyc_verification(user_data, files)
//     print("KYC Verification successful:")
//     print(json.dumps(result, indent=2))
// except Exception as e:
//     print(f"Verification failed: {e}")`,

//     curl: `# cURL Example

// # Lite Plan - VPA Lookup only
// curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
//   -H "client-id: <your-client-id>" \\
//   -H "auth-key: <your-auth-key>" \\
//   -H "Secret-key: <your-secret-key>" \\
//   -F "mobile=9123456789"

// # Elite Plan - With Bank Verification
// curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
//   -H "client-id: <your-client-id>" \\
//   -H "auth-key: <your-auth-key>" \\
//   -H "Secret-key: <your-secret-key>" \\
//   -F "mobile=9123456789" \\
//   -F "bankAccount=1234567890123" \\
//   -F "ifsc=DEMO0001234"

// # Premium Plan - Full Verification
// curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
//   -H "client-id: <your-client-id>" \\
//   -H "auth-key: <your-auth-key>" \\
//   -H "Secret-key: <your-secret-key>" \\
//   -F "mobile=9123456789" \\
//   -F "bankAccount=1234567890123" \\
//   -F "ifsc=DEMO0001234" \\
//   -F "gstin=29DEMO1234567Z1" \\
//   -F "face=@/path/to/face_image.jpg" \\
//   -F "card=@/path/to/id_card.jpg"`
//   };

//   const [activeLanguage, setActiveLanguage] = useState('javascript');

//   const bestPractices = [
//     {
//       title: 'Secure Credential Storage',
//       description: 'Store API credentials in environment variables, never in source code',
//       icon: CheckCircle
//     },
//     {
//       title: 'Error Handling',
//       description: 'Implement comprehensive error handling for all API responses',
//       icon: CheckCircle
//     },
//     {
//       title: 'Rate Limiting',
//       description: 'Respect API rate limits and implement exponential backoff',
//       icon: CheckCircle
//     },
//     {
//       title: 'Data Validation',
//       description: 'Validate input data before sending to the API',
//       icon: CheckCircle
//     },
//     {
//       title: 'Logging & Monitoring',
//       description: 'Log API requests and responses for debugging and monitoring',
//       icon: CheckCircle
//     },
//     {
//       title: 'File Size Limits',
//       description: 'Ensure uploaded images are within acceptable size limits',
//       icon: CheckCircle
//     }
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
//               <Code className="h-10 w-10 text-white" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Integration Guide
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Step-by-step guide to integrate FraudBuster API into your application 
//               with code examples and best practices for Indian fintech compliance.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Integration Steps */}
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
//               Integration Steps
//             </h2>
//             <p className="text-xl text-gray-300">
//               Follow these steps to successfully integrate FraudBuster into your application
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-4 gap-8">
//             {integrationSteps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 onClick={() => setActiveStep(index)}
//                 className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
//                   activeStep === index ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10'
//                 }`}
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
//                     activeStep === index 
//                       ? 'bg-cyan-500 text-white' 
//                       : 'bg-white/10 text-cyan-400'
//                   }`}>
//                     <step.icon className="h-6 w-6" />
//                   </div>
//                   <span className="text-2xl font-bold text-cyan-400">{index + 1}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">{step.description}</p>
                
//                 {activeStep === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     transition={{ duration: 0.3 }}
//                     className="space-y-2"
//                   >
//                     {step.details.map((detail, idx) => (
//                       <div key={idx} className="flex items-center text-gray-300 text-sm">
//                         <ArrowRight className="h-3 w-3 mr-2 text-cyan-400" />
//                         {detail}
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Code Examples */}
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
//               Code Examples
//             </h2>
//             <p className="text-xl text-gray-300">
//               Ready-to-use code snippets in popular programming languages
//             </p>
//           </motion.div>

//           {/* Language Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             {Object.keys(codeExamples).map((language) => (
//               <button
//                 key={language}
//                 onClick={() => setActiveLanguage(language)}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
//                   activeLanguage === language
//                     ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
//                     : 'bg-white/10 text-gray-300 hover:bg-white/20'
//                 }`}
//               >
//                 {language}
//               </button>
//             ))}
//           </div>

//           {/* Code Display */}
//           <motion.div
//             key={activeLanguage}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-black/30 rounded-2xl p-6 overflow-x-auto"
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-white capitalize">
//                 {activeLanguage} Implementation
//               </h3>
//               <button
//                 onClick={() => navigator.clipboard.writeText(codeExamples[activeLanguage])}
//                 className="flex items-center bg-white/10 hover:bg-white/20 text-gray-300 px-4 py-2 rounded-lg transition-colors"
//               >
//                 <Download className="h-4 w-4 mr-2" />
//                 Copy Code
//               </button>
//             </div>
//             <pre className="text-sm text-gray-300 overflow-x-auto">
//               <code>{codeExamples[activeLanguage]}</code>
//             </pre>
//           </motion.div>
//         </div>
//       </section>

//       {/* Best Practices */}
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
//               Best Practices
//             </h2>
//             <p className="text-xl text-gray-300">
//               Follow these guidelines for secure and efficient API integration
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {bestPractices.map((practice, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
//                     <practice.icon className="h-5 w-5 text-green-400" />
//                   </div>
//                   <h3 className="text-lg font-semibold text-white">{practice.title}</h3>
//                 </div>
//                 <p className="text-gray-400">{practice.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Support Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Need Integration Support?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Our technical team in Bangalore is ready to help you with integration challenges, 
//               API questions, and compliance requirements.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Contact Technical Support
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Schedule Integration Call
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default IntegrationGuide;







//<-------------------------------------Design changed ------------------------------------------------------------------------------------------------------------------------------








//<-------------------------------------Design changed ------------------------------------------------------------------------------------------------------------------------------


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Code, CheckCircle, ArrowRight, FileCheck, ShieldCheck, Link as LinkIcon,
  Database, KeyRound, Server, Cloud, Globe, GitBranch, TerminalSquare, Copy, Link2
} from "lucide-react";
import { Link } from "react-router-dom";

/* =========================================================================
   Tiny UI primitives (Tailwind only)
   ========================================================================= */
const Badge: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-[3px] text-[11px] font-semibold border-white/15 bg-white/10 text-white ${className}`} {...p} />
);
const UIButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", ...p }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 border border-white/10 bg-white/10 hover:bg-white/20 transition-colors ${className}`} {...p} />
);
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md ${className}`} {...p} />
);
const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`p-4 border-b border-white/10 ${className}`} {...p} />
);
const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = "", ...p }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...p} />
);
const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`p-4 ${className}`} {...p} />
);

/* =========================================================================
   Shared helpers
   ========================================================================= */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

/* prefers-reduced-motion */
function useReducedMotion() {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onChange = () => set(!!mq?.matches);
    onChange();
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/* magnet micro-interaction */
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
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const onLeave = () => { el.style.transform = `translate(0,0)`; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, strength]);
}

/* tilt */
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
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, max]);
}

/* reveal-on-scroll (CSS only) */
function useReveals(refs: React.MutableRefObject<HTMLElement[]>) {
  useEffect(() => {
    const nodes = refs.current || [];
    if (!nodes.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("reveal-on");
        io.unobserve(e.target);
      });
    }, { threshold: 0.18 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [refs]);
}

/* scroll progress bar */
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

/* cursor particles (canvas) */
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
      (ctx as any).globalCompositeOperation = "lighter";
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const parts: P[] = [];
    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.2 + 0.4;
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
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 20, 0, Math.PI * 2); ctx.fill();
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

/* =========================================================================
   Radial Orbital Timeline (no external deps)
   ========================================================================= */
type TimelineItem = {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
};

function RadialOrbitalTimeline({
  timelineData,
  height = "32rem",
}: { timelineData: TimelineItem[]; height?: number | string }) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const reduced = useReducedMotion();

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({}); setActiveNodeId(null); setPulseEffect({}); setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((k) => { if (parseInt(k) !== id) newState[parseInt(k)] = false; });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id); setAutoRotate(false);
        const rel = getRelatedItems(id); const halo: Record<number, boolean> = {};
        rel.forEach((rid) => { halo[rid] = true; });
        setPulseEffect(halo);
        centerOn(id);
      } else {
        setActiveNodeId(null); setAutoRotate(true); setPulseEffect({});
      }
      return newState;
    });
  };

  useEffect(() => {
    if (reduced) return;
    let id: number | undefined;
    if (autoRotate) {
      id = window.setInterval(() => {
        setRotationAngle((p) => Number(((p + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (id) clearInterval(id); };
  }, [autoRotate, reduced]);

  const centerOn = (nodeId: number) => {
    const idx = timelineData.findIndex((item) => item.id === nodeId);
    const total = timelineData.length;
    const target = 270 - (idx / total) * 360;
    // smooth animate rotation
    const start = rotationAngle;
    const end = target;
    const dur = 380;
    let t0 = performance.now();
    const loop = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setRotationAngle(start + (end - start) * eased);
      if (p < 1) requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  };

  const getRelatedItems = (itemId: number) => {
    const current = timelineData.find((i) => i.id === itemId);
    return current ? current.relatedIds : [];
  };
  const isRelatedToActive = (itemId: number) => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed": return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      default: return "text-white bg-black/40 border-white/50";
    }
  };

  const pos = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, zIndex, opacity };
  };

  return (
    <div ref={containerRef} onClick={handleContainerClick} className="relative w-full overflow-hidden rounded-3xl" style={{ height }}>
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.10]" style={{
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "42px 42px",
      }} />
      <div className="absolute inset-0 flex items-center justify-center" ref={orbitRef} style={{ perspective: "1000px" }}>
        {/* nucleus */}
        <div className="relative z-10">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6] animate-pulse flex items-center justify-center">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
          </div>
        </div>
        {/* orbit ring */}
        <div className="absolute w-[24rem] h-[24rem] rounded-full border border-white/10" />
        {/* nodes */}
        {timelineData.map((item, i) => {
          const p = pos(i, timelineData.length);
          const expanded = !!expandedItems[item.id];
          const related = isRelatedToActive(item.id);
          const pulsing = !!pulseEffect[item.id];
          const Icon = item.icon as any;
          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className="absolute transition-all duration-700 cursor-pointer"
              style={{
                transform: `translate(${p.x}px, ${p.y}px)`,
                zIndex: expanded ? 200 : p.zIndex,
                opacity: expanded ? 1 : p.opacity,
              }}
              onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
            >
              {/* energy halo */}
              <div
                className={`absolute rounded-full -inset-1 ${pulsing ? "animate-pulse" : ""}`}
                style={{
                  background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                  width: `${item.energy * 0.5 + 40}px`,
                  height: `${item.energy * 0.5 + 40}px`,
                  left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                }}
              />
              {/* node */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${expanded ? "bg-white text-black" : related ? "bg-white/50 text-black" : "bg-black text-white"}
                  border-2 ${expanded ? "border-white shadow-lg shadow-white/30" : related ? "border-white" : "border-white/40"}
                  transition-all duration-300 transform ${expanded ? "scale-150" : ""}`}>
                <Icon size={16} />
              </div>
              {/* label */}
              <div className={`absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300 ${expanded ? "text-white scale-125" : "text-white/70"}`}>
                {item.title}
              </div>
              {/* expanded card */}
              {expanded && (
                <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-black/90 border-white/30 shadow-xl shadow-white/10 overflow-visible">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge className={`px-2 ${getStatusStyles(item.status)}`}>{item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}</Badge>
                      <span className="text-xs font-mono text-white/50">{item.date}</span>
                    </div>
                    <CardTitle className="text-sm mt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-white/80">
                    <p>{item.content}</p>
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="flex items-center"><TerminalSquare size={10} className="mr-1" /> Priority</span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF]" style={{ width: `${item.energy}%` }} />
                      </div>
                    </div>
                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex items-center mb-2">
                          <LinkIcon size={10} className="text-white/70 mr-1" />
                          <h4 className="text-[10px] uppercase tracking-wider font-medium text-white/70">Connected Nodes</h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((rid) => {
                            const rel = timelineData.find((i) => i.id === rid);
                            return (
                              <UIButton key={rid} className="h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white"
                                onClick={(e) => { e.stopPropagation(); toggleItem(rid); }}>
                                {rel?.title} <ArrowRight size={8} className="ml-1 text-white/60" />
                              </UIButton>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================================
   Page
   ========================================================================= */
const IntegrationGuide: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* BG parallax dots */
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

  /* Scroll progress + particles */
  /* Sections reveal */
  const sectionsRef = useRef<HTMLElement[]>([]);
  useReveals(sectionsRef);

  /* Type-in headline (CSS/JS, no libs) */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const text = "Integrate FraudBuster in hours—not weeks";
    el.innerHTML = "";
    let i = 0;
    const tick = () => {
      el.innerHTML = text.slice(0, i) + (i % 2 === 0 ? "_" : "");
      i++;
      if (i <= text.length) setTimeout(tick, 18);
      else el.innerHTML = text;
    };
    tick();
  }, []);

  /* Flow line: moving dot along path (no morph libs) */
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const path = pathRef.current, dot = dotRef.current;
    if (!path || !dot) return;
    let len = path.getTotalLength();
    let t0 = performance.now();
    let raf = 0;
    const loop = (now: number) => {
      const p = ((now - t0) / 1600) % 1; // 1.6s loop
      const pt = path.getPointAtLength(p * len);
      dot.setAttribute("cx", String(pt.x));
      dot.setAttribute("cy", String(pt.y));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Steps, builder, etc. */
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "Get API Credentials",
      description: "Obtain your client-id, auth-key, and secret-key.",
      icon: KeyRound,
      details: [
        "Request sandbox + production keys",
        "Business verification & contracts",
        "HSM-backed secrets & rotation",
        "Store via Vault/KMS (not source)",
      ],
    },
    {
      title: "Set Up Environment",
      description: "Install dependencies and wire environment variables.",
      icon: Code,
      details: [
        "HTTP client & multipart utilities",
        "ENV vars for keys/endpoints",
        "Retries, backoff, circuit-breaker",
        "PII-safe request/response logs",
      ],
    },
    {
      title: "Implement Authentication",
      description: "Send headers with each request; keep tokens scoped.",
      icon: CheckCircle,
      details: [
        "Headers: client-id, auth-key, Secret-key",
        "Content-Type: multipart/form-data",
        "Short-lived tokens (server-side)",
        "Never expose keys to browsers",
      ],
    },
    {
      title: "Make API Calls",
      description: "Post the form data and handle the response schema.",
      icon: TerminalSquare,
      details: [
        "Mobile; Bank+IFSC; GSTIN",
        "File fields face/card (Premium)",
        "Parse decision + evidence JSON",
        "Optional webhooks for async",
      ],
    },
  ] as const;

  const [plan, setPlan] = useState<"lite"|"elite"|"premium">("elite");
  const [fields, setFields] = useState({
    mobile: "9123456789",
    bankAccount: "1234567890123",
    ifsc: "DEMO0001234",
    gstin: "29DEMO1234567Z1",
  });
  const [files, setFiles] = useState({ face: "/path/to/face.jpg", card: "/path/to/id.jpg" });

  const codeBase = {
    javascript: `// Node.js (no SDK required)
const axios = require('axios');
const FormData = require('form-data');

const api = axios.create({
  baseURL: 'https://api.fraudbuster.in',
  headers: {
    'client-id': process.env.FB_CLIENT_ID,
    'auth-key': process.env.FB_AUTH_KEY,
    'Secret-key': process.env.FB_SECRET_KEY
  },
  timeout: 12000
});

async function userOnboard(payload) {
  const fd = new FormData();
  Object.entries(payload.fields).forEach(([k,v]) => v && fd.append(k, v));
  if (payload.files.face) fd.append('face', require('fs').createReadStream(payload.files.face));
  if (payload.files.card) fd.append('card', require('fs').createReadStream(payload.files.card));
  const res = await api.post('/api/v1/fb/user-onboard', fd, { headers: fd.getHeaders() });
  return res.data;
}`,
    python: `# Python (requests)
import os, requests

API = "https://api.fraudbuster.in/api/v1/fb/user-onboard"
HEADERS = {
  "client-id": os.environ["FB_CLIENT_ID"],
  "auth-key": os.environ["FB_AUTH_KEY"],
  "Secret-key": os.environ["FB_SECRET_KEY"],
}

def user_onboard(fields, files=None):
  fs = {}
  if files:
    if files.get("face"): fs["face"] = open(files["face"], "rb")
    if files.get("card"): fs["card"] = open(files["card"], "rb")
  try:
    r = requests.post(API, headers=HEADERS, data=fields, files=fs, timeout=12)
    r.raise_for_status()
    return r.json()
  finally:
    for h in fs.values(): h.close()`,
    curl: `# cURL (server-side usage recommended)
curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
  -H "client-id: $FB_CLIENT_ID" \\
  -H "auth-key: $FB_AUTH_KEY" \\
  -H "Secret-key: $FB_SECRET_KEY" \\
  -F "mobile=9123456789" \\
  -F "bankAccount=1234567890123" \\
  -F "ifsc=DEMO0001234" \\
  -F "gstin=29DEMO1234567Z1" \\
  -F "face=@/path/face.jpg" \\
  -F "card=@/path/id.jpg"`,
  } as const;

  const [activeLanguage, setActiveLanguage] = useState<keyof typeof codeBase>("javascript");

  const snippet = useMemo(() => {
    const enabled = {
      mobile: true,
      bankAccount: plan !== "lite",
      ifsc: plan !== "lite",
      gstin: plan === "premium",
      face: plan === "premium",
      card: plan === "premium",
    };
    const reqFields = Object.fromEntries(Object.entries(fields).filter(([k]) => enabled[k as keyof typeof enabled]));
    const reqFiles = { face: enabled.face ? files.face : undefined, card: enabled.card ? files.card : undefined };

    const curlFields = Object.entries(reqFields)
      .map(([k,v]) => `  -F "${k}=${v}"`).join(" \\\n");
    const curlFiles = [
      reqFiles.face ? `  -F "face=@${reqFiles.face}"` : "",
      reqFiles.card ? `  -F "card=@${reqFiles.card}"` : ""
    ].filter(Boolean).join(" \\\n");

    const curl = `curl -X POST "https://api.fraudbuster.in/api/v1/fb/user-onboard" \\
  -H "client-id: $FB_CLIENT_ID" \\
  -H "auth-key: $FB_AUTH_KEY" \\
  -H "Secret-key: $FB_SECRET_KEY" \\
${curlFields}${curlFiles ? " \\\n" + curlFiles : ""}`;

    const js = `${codeBase.javascript}

await userOnboard({
  fields: ${JSON.stringify(reqFields, null, 2)},
  files: ${JSON.stringify(reqFiles, null, 2)}
});`;

    const py = `${codeBase.python}

user_onboard(
  ${JSON.stringify(reqFields, null, 2)},
  ${JSON.stringify({ face: reqFiles.face ?? null, card: reqFiles.card ?? null }, null, 2).replace(/null/g, "None")}
)`;

    return { curl, javascript: js, python: py };
  }, [fields, files, plan]);

  /* CTA magnet */
  const cta1 = useRef<HTMLAnchorElement>(null);
  const cta2 = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1, 18);
  useMagnet(cta2, 14);

  /* tilt for step cards */
  const stepRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  stepRefs.forEach((r) => useTilt(r, 8));

  /* Timeline data tailored for integration */
  const timelineData: TimelineItem[] = [
    { id: 1, title: "Provision Keys", date: "Day 0", content: "Sandbox+Prod keys; Vault/KMS storage; rotation policy.", category: "Access", icon: KeyRound, relatedIds: [2,3], status: "completed",   energy: 100 },
    { id: 2, title: "Hello POST",    date: "Day 1", content: "First POST with mobile-only. Verify auth & headers.",     category: "API",    icon: Code,     relatedIds: [1,4], status: "completed",   energy: 90  },
    { id: 3, title: "Sandbox Pilot", date: "Day 2–3", content: "Add Bank+IFSC or GSTIN. Parse decision + evidence.",     category: "Pilot",  icon: Server,   relatedIds: [1,4,5], status: "in-progress", energy: 70  },
    { id: 4, title: "Webhooks",      date: "Day 3–4", content: "Signed webhooks; idempotency; backoff on retries.",      category: "Events", icon: GitBranch, relatedIds: [2,3,6], status: "in-progress", energy: 60  },
    { id: 5, title: "Observability", date: "Day 4–6", content: "Logs → SIEM; PII redaction; request_id correlation.",    category: "Ops",    icon: TerminalSquare, relatedIds: [3,6], status: "pending", energy: 40  },
    { id: 6, title: "Go Live",       date: "Day 7–10",content: "Ramp traffic; thresholds; latency SLO; autoscaling.",    category: "Ship",   icon: Cloud,    relatedIds: [4,5], status: "pending",    energy: 30  },
  ];

  return (
    <div className="pt-16 relative">
      {/* page-only styles for reveal & marquee */}
      <style>{`
        .reveal { opacity: 0; transform: translateY(22px); transition: opacity .5s ease, transform .5s ease; }
        .reveal-on { opacity: 1; transform: translateY(0); }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { width: 200%; animation: marquee 22s linear infinite; }
      `}</style>

      <ScrollProgress />
      <CursorParticles />

      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          ...parallax,
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <ShieldCheck className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Integration · Fast & Explainable</span>
              </div>

              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Integrate FraudBuster in hours—not weeks
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl reveal" ref={(el) => el && (sectionsRef.current[0] = el)}>
                SDK-free, HTTP-first flows. Start with a single POST, then scale to full KYC/KYB with webhooks and dashboards—no rewrites.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/api"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Read API Docs
                </Link>
                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Talk to Integration Team
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl reveal" ref={(el) => el && (sectionsRef.current[1] = el)}>
                <HeroMetric icon={Link2} label="Start with POST" value="1 call" />
                <HeroMetric icon={Database} label="Fields supported" value="Mobile, Bank, GST" />
                <HeroMetric icon={FileCheck} label="Evidence output" value="Explainable" />
              </div>
            </div>

            {/* Flow visual */}
            <div className={`rounded-2xl ${glass} p-6 relative reveal`} ref={(el) => el && (sectionsRef.current[2] = el)}>
              <div className="text-sm text-white/60 mb-2">Onboarding flow (simplified)</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden">
                <svg viewBox="0 0 700 160" className="w-full">
                  <defs>
                    <linearGradient id="ig" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#35E0FF" /><stop offset="100%" stopColor="#6C63FF" />
                    </linearGradient>
                  </defs>
                  <path ref={pathRef} d="M10 80 C 120 40, 240 40, 350 80 S 580 120, 690 80" stroke="url(#ig)" strokeWidth="2.5" fill="none" opacity="0.85" />
                  <circle ref={dotRef} r="5" fill="#35E0FF" />
                </svg>

                <div className="grid grid-cols-3 gap-3 mt-3">
                  <FlowChip icon={Server} text="Your App" />
                  <FlowChip icon={Cloud} text="FraudBuster API" />
                  <FlowChip icon={Globe} text="Signals" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge className="rounded-xl px-3 py-1 bg-white/[0.06] border-white/10 text-xs text-white/80"><KeyRound className="h-3.5 w-3.5 inline mr-1 text-[#35E0FF]" /> Scoped headers</Badge>
                <Badge className="rounded-xl px-3 py-1 bg-white/[0.06] border-white/10 text-xs text-white/80"><FileCheck className="h-3.5 w-3.5 inline mr-1 text-[#35E0FF]" /> Evidence JSON</Badge>
                <Badge className="rounded-xl px-3 py-1 bg-white/[0.06] border-white/10 text-xs text-white/80"><GitBranch className="h-3.5 w-3.5 inline mr-1 text-[#35E0FF]" /> Webhooks</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTEGRATION STEPS ================= */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[3] = el)}>Integration steps</h2>
            <p className="text-lg text-white/70 reveal" ref={(el) => el && (sectionsRef.current[4] = el)}>From credentials to decisions—clean and clear.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <StepCard
                key={s.title}
                index={i}
                Icon={s.icon}
                title={s.title}
                desc={s.description}
                details={s.details}
                active={activeStep === i}
                onClick={() => setActiveStep(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ORBITAL TIMELINE ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[5] = el)}>Integration journey (orbital)</h2>
            <p className="text-lg text-white/70 reveal" ref={(el) => el && (sectionsRef.current[6] = el)}>
              A visual roadmap from Day 0 keys to Day 10 go-live. Click nodes to expand; related nodes pulse.
            </p>
          </div>
          <div className={`${glass} rounded-3xl p-4 reveal`} ref={(el) => el && (sectionsRef.current[7] = el)}>
            <RadialOrbitalTimeline timelineData={timelineData} height="32rem" />
          </div>
        </div>
      </section>

      {/* ================= REQUEST BUILDER ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[8] = el)}>Build your first request</h2>
            <p className="text-lg text-white/70 reveal" ref={(el) => el && (sectionsRef.current[9] = el)}>Toggle plan & fields — see cURL/JS/Python update live.</p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            {/* Controls */}
            <div className={`${glass} rounded-2xl p-6 reveal`} ref={(el) => el && (sectionsRef.current[10] = el)}>
              <div className="text-sm text-white/60 mb-2">Plan & fields</div>
              <div className="flex gap-2 mb-4">
                {(["lite","elite","premium"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlan(p)}
                    className={`rounded-xl px-3 py-2 text-sm border transition capitalize ${
                      plan === p ? "border-[#35E0FF]/60 bg-white/[0.08] shadow-[0_10px_30px_rgba(53,224,255,0.2)]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-3">
                <Field label="Mobile" value={fields.mobile} onChange={(v) => setFields({...fields, mobile: v})} />
                {plan !== "lite" && (
                  <>
                    <Field label="Bank Account" value={fields.bankAccount} onChange={(v) => setFields({...fields, bankAccount: v})} />
                    <Field label="IFSC" value={fields.ifsc} onChange={(v) => setFields({...fields, ifsc: v})} />
                  </>
                )}
                {plan === "premium" && (
                  <>
                    <Field label="GSTIN" value={fields.gstin} onChange={(v) => setFields({...fields, gstin: v})} />
                    <Field label="Face file path" value={files.face} onChange={(v) => setFiles({...files, face: v})} />
                    <Field label="ID file path" value={files.card} onChange={(v) => setFiles({...files, card: v})} />
                  </>
                )}
              </div>

              {/* <div className="mt-4 text-xs text-white/60">
                Tip: use environment vars for keys and never expose them in client-side code.
              </div> */}
            </div>

            {/* Code panel */}
            <div className={`${glass} rounded-2xl p-6 reveal`} ref={(el) => el && (sectionsRef.current[11] = el)}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-white/60">Code</div>
                <div className="flex gap-2">
                  { (["javascript","python","curl"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setActiveLanguage(l)}
                      className={`rounded-xl px-3 py-1.5 text-xs border transition capitalize ${
                        activeLanguage === l ? "border-[#35E0FF]/60 bg-white/[0.08]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden">
                <button
                  onClick={() => navigator.clipboard.writeText(snippet[activeLanguage])}
                  className="absolute right-3 top-3 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/10 hover:bg-white/20 border border-white/10"
                  title="Copy"
                >
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
                <pre className="text-[13px] leading-relaxed whitespace-pre-wrap">{snippet[activeLanguage]}</pre>
              </div>
              <p className="text-white/70 text-sm mt-3">
                The snippet is safe to run from your server. For browser flows, proxy requests via your backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER INTEGRATIONS ================= */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[12] = el)}>Popular integrations</h2>
            <p className="text-lg text-white/70 reveal" ref={(el) => el && (sectionsRef.current[13] = el)}>Plug into your stack with webhooks and simple adapters.</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee will-change-transform">
              {[
                { name: "Node + Express", Icon: Server },
                { name: "Python + FastAPI", Icon: Cloud },
                { name: "Java + Spring", Icon: Server },
                { name: "Go + Chi", Icon: Cloud },
                { name: "Kafka Events", Icon: GitBranch },
                { name: "Snowflake", Icon: Database },
                { name: "BigQuery", Icon: Database },
                { name: "Datadog", Icon: Cloud },
                { name: "Splunk", Icon: Cloud },
              ].map((p, i) => (
                <PartnerPill key={i} Icon={p.Icon} text={p.name} />
              ))}
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <IntegrateCard title="Webhook events" icon={GitBranch} points={["Decision posted to your endpoint", "Retry with exponential backoff", "Signed payload + timestamps"]} />
            <IntegrateCard title="Analytics export" icon={Database} points={["Evidence JSON → warehouse", "BI-ready tables & views", "PII-safe partitioning"]} />
            <IntegrateCard title="Observability" icon={TerminalSquare} points={["JSONL logs to SIEM", "Redaction policies", "Correlation IDs"]} />
          </div>
        </div>
      </section>

      {/* ================= BEST PRACTICES ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[14] = el)}>Best practices</h2>
            <p className="text-lg text-white/70 reveal" ref={(el) => el && (sectionsRef.current[15] = el)}>Secure, resilient, and compliant from day one.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Credential hygiene", desc: "ENV or KMS/Vault; rotate keys; never commit.", Icon: KeyRound },
              { title: "Errors & retries", desc: "Use idempotency keys; backoff/circuit breaker.", Icon: TerminalSquare },
              { title: "Input validation", desc: "Sanitize user inputs; enforce schemas.", Icon: CheckCircle },
              { title: "Rate limits", desc: "Respect quotas; fallbacks for bursts.", Icon: ShieldCheck },
              { title: "Observability", desc: "Correlation IDs; redact PII in logs.", Icon: Database },
              { title: "Privacy-by-design", desc: "Minimize data sent; evidence over raw PII.", Icon: FileCheck },
            ].map((b) => (
              <div
                key={b.title}
                className={`${glass} rounded-2xl p-6 transition will-change-transform hover:shadow-[0_10px_30px_rgba(53,224,255,0.2)]`}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-3">
                  <b.Icon className="h-6 w-6 text-white" />
                </div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-white/70 text-sm mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <h2 className="text-3xl md:text-4xl font-bold reveal" ref={(el) => el && (sectionsRef.current[16] = el)}>Ready to integrate?</h2>
            <p className="text-lg text-white/75 mt-2 mb-7 reveal" ref={(el) => el && (sectionsRef.current[17] = el)}>
              We’ll pair your team with an integration engineer and ship a pilot in days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a ref={cta1} href="/contact" className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
                Start your pilot <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a ref={cta2} href="/api" className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition">
                Browse API reference
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================================
   Small subcomponents
   ========================================================================= */
function HeroMetric({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-4 border border-white/10">
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#35E0FF]" />
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
function FlowChip({ icon: Icon, text }:{ icon: any; text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 text-xs rounded-lg px-3 py-1.5 bg-white/[0.06] border border-white/10">
      <Icon className="h-3.5 w-3.5" /> {text}
    </div>
  );
}
function StepCard({ index, Icon, title, desc, details, active, onClick }:{
  index: number; Icon: any; title: string; desc: string; details: readonly string[]; active: boolean; onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`${glass} rounded-2xl p-5 cursor-pointer will-change-transform transition-all ${active ? "border-[#35E0FF]/60 shadow-[0_12px_40px_rgba(53,224,255,0.25)]" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${active ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF]" : "bg-white/[0.08]"} mb-3`}>
          <Icon className={`h-6 w-6 ${active ? "text-white" : "text-[#35E0FF]"}`} />
        </div>
        <div className="text-2xl font-bold text-[#35E0FF]">{index + 1}</div>
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-1">{desc}</div>
      <div className="mt-3 space-y-2">
        {details.map((d, i) => (
          <div key={i} className="flex items-center text-white/80 text-sm">
            <ArrowRight className="h-3.5 w-3.5 mr-2 text-[#35E0FF]" /> {d}
          </div>
        ))}
      </div>
    </div>
  );
}
function Field({ label, value, onChange }:{ label: string; value: string; onChange: (v: string) => void; }) {
  return (
    <label className="text-sm">
      <div className="text-white/70 mb-1">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:border-[#35E0FF]/60"
      />
    </label>
  );
}
function PartnerPill({ Icon, text }:{ Icon: any; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm`}
      onMouseEnter={() => (ref.current!.style.transform = "scale(1.05)")}
      onMouseLeave={() => (ref.current!.style.transform = "scale(1)")}
    >
      <Icon className="h-4 w-4 text-[#35E0FF]" /> {text}
    </div>
  );
}
function IntegrateCard({ title, icon: Icon, points }:{ title: string; icon: any; points: string[]; }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 6);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-2xl p-6 transition will-change-transform hover:shadow-[0_10px_30px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="font-semibold mb-2">{title}</div>
      <ul className="space-y-2 text-white/80 text-sm">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#35E0FF]" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IntegrationGuide;
