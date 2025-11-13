// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Code, Copy, CheckCircle, AlertCircle, Key, Shield, Zap, FileText } from 'lucide-react';

// const ApiDocumentation = () => {
//   const [activeTab, setActiveTab] = useState('lite');
//   const [copiedCode, setCopiedCode] = useState('');

//   const copyToClipboard = (text: string, id: string) => {
//     navigator.clipboard.writeText(text);
//     setCopiedCode(id);
//     setTimeout(() => setCopiedCode(''), 2000);
//   };

//   const plans = [
//     {
//       id: 'lite',
//       name: 'Lite',
//       services: ['VPA Lookup'],
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       id: 'elite',
//       name: 'Elite',
//       services: ['PAN (KYC) Validation', 'VPA Lookup', 'Bank Account & IFSC Validation'],
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       id: 'premium',
//       name: 'Premium',
//       services: ['PAN (KYC) Validation', 'VPA Lookup', 'Bank Account & IFSC Validation', 'Face Match Authentication', 'GST Validation'],
//       color: 'from-purple-500 to-pink-500'
//     }
//   ];

//   const headers = {
//     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
//     'client-id': '<Provided from FB Team>',
//     'auth-key': '<Provided from FB Team>',
//     'Secret-key': '<Provided from FB Team>'
//   };

//   const errorCodes = [
//     { code: '200', status: 'OK', description: 'Request successful, data fetched' },
//     { code: '401', status: 'Unauthorized', description: 'Invalid credentials or unauthorized access' },
//     { code: '402', status: 'Payment Required', description: 'Insufficient wallet balance' },
//     { code: '404', status: 'Not Found', description: 'Wrong URL or data not found' }
//   ];

//   const liteResponse = `{
//     "timestamp": "2025-08-15T08:07:32.105Z",
//     "statusCode": 200,
//     "status": "OK",
//     "message": "Data Fetched Successfully",
//     "success": true,
//     "response": {
//         "fetchVPAFromMobile": {
//             "name": "DEMO TECH SOLUTIONS",
//             "upi": [
//                 "9*1****567-demo@paytm",
//                 "9*1****567@phonepe"
//             ]
//         }
//     },
//     "failures": {}
// }`;

//   const eliteResponse = `{
//     "timestamp": "2025-08-15T08:16:27.757Z",
//     "statusCode": 200,
//     "status": "OK",
//     "message": "Data Fetched Successfully",
//     "success": true,
//     "response": {
//         "fetchVPAFromMobile": {
//             "name": "DEMO TECH SOLUTIONS",
//             "upi": [
//                 "912****567-demo@paytm",
//                 "912****567@phonepe"
//             ]
//         },
//         "fetchKYCFromMobile": {
//             "fullName": "DEMO TECH SOLUTIONS"
//         },
//         "verifyBankDetails": {
//             "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD",
//             "address": "TECH PARK, WHITEFIELD MAIN ROAD, INNOVATION HUB",
//             "bankName": "DEMO BANK",
//             "branch": "BANGALORE",
//             "city": "BANGALORE",
//             "district": "Not Available",
//             "ifsc": "DEMO000***1",
//             "phone": "987****123",
//             "pincode": "56***6",
//             "state": "KARNATAKA"
//         }
//     },
//     "failures": {}
// }`;

//   const premiumResponse = `{
//     "timestamp": "2025-08-15T08:53:54.204Z",
//     "statusCode": 200,
//     "status": "OK",
//     "message": "Data Fetched Successfully",
//     "success": true,
//     "response": {
//         "fetchVPAFromMobile": {
//             "name": "DEMO TECH SOLUTIONS",
//             "upi": [
//                 "912****567-demo@paytm",
//                 "912****567@phonepe"
//             ]
//         },
//         "performFaceMatch": {
//             "statusCode": 200,
//             "success": true,
//             "timestamp": "2025-08-15T08:53:40.413Z",
//             "transactionId": "demo1234-5678-9abc-def0-123456789abc",
//             "message": "Data fetched successfully",
//             "data": {
//                 "is_same_face": true,
//                 "is_person_image_blurry": false,
//                 "is_card_image_blurry": false,
//                 "same_face_confidence": 0.9876543210987654,
//                 "person_image_correctly_identified": true,
//                 "card_image_correctly_identified": true,
//                 "status": "1"
//             }
//         },
//         "fetchKYCFromMobile": {
//             "fullName": "DEMO USER NAME",
//             "pan": "D*M****12P",
//             "maskedAadhaar": "XXXXXXXX1234",
//             "dob": "1990-01-15"
//         },
//         "verifyBankDetails": {
//             "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD",
//             "address": "TECH PARK, WHITEFIELD MAIN ROAD, INNOVATION HUB",
//             "bankName": "DEMO BANK",
//             "branch": "BANGALORE",
//             "city": "BANGALORE",
//             "district": "Not Available",
//             "ifsc": "DEMO000***1",
//             "phone": "987****123",
//             "pincode": "56***6",
//             "state": "KARNATAKA"
//         },
//         "fetchGSTValidation": {
//             "taxpayerDetails": {
//                 "ntcrbs": "SPO",
//                 "adhrVFlag": "Yes",
//                 "lgnm": "DEMO TECH SOLUTIONS PRIVATE LIMITED",
//                 "stj": "State - Karnataka,Division - DEMO-1, Bengaluru",
//                 "dty": "Regular",
//                 "gstin": "29**DM****1T*CH",
//                 "nba": [
//                     "Software Development",
//                     "Technology Services",
//                     "IT Consulting"
//                 ],
//                 "rgdt": "02/01/2024",
//                 "ctb": "Private Limited Company",
//                 "sts": "Active",
//                 "tradeNam": "DEMO TECH SOLUTIONS PRIVATE LIMITED"
//             }
//         }
//     },
//     "failures": {}
// }`;

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
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
//               Fraud Buster API Documentation
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Comprehensive API documentation for integrating Fraud Buster's KYC and fraud detection
//               services into your applications with support for multiple verification tiers.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* API Overview */}
//       <section className="py-12 bg-black/20">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
//           >
//             <h2 className="text-2xl font-bold text-white mb-6">USER_KYC_RETRIEVAL_API</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-semibold text-cyan-400 mb-3">Purpose</h3>
//                 <p className="text-gray-300 mb-6">
//                   Used to fetch the requested KYC details for the requested payload from the client, 
//                   supporting multiple verification tiers based on your subscription plan.
//                 </p>
                
//                 <h3 className="text-lg font-semibold text-cyan-400 mb-3">Endpoint</h3>
//                 <div className="bg-black/30 rounded-lg p-4 mb-6">
//                   <code className="text-green-400">POST /api/v1/fb/user-onboard</code>
//                 </div>
//               </div>
              
//               <div>
//                 <h3 className="text-lg font-semibold text-cyan-400 mb-3">Required Headers</h3>
//                 <div className="bg-black/30 rounded-lg p-4 space-y-2">
//                   {Object.entries(headers).map(([key, value]) => (
//                     <div key={key} className="flex flex-col">
//                       <span className="text-orange-400">{key}:</span>
//                       <span className="text-gray-300 text-sm ml-4">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Service Plans */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Service Plans & Features
//             </h2>
//             <p className="text-xl text-gray-300">
//               Choose the right plan for your KYC and verification needs
//             </p>
//           </motion.div>

//           {/* Plan Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {plans.map((plan) => (
//               <button
//                 key={plan.id}
//                 onClick={() => setActiveTab(plan.id)}
//                 className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                   activeTab === plan.id
//                     ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
//                     : 'bg-white/10 text-gray-300 hover:bg-white/20'
//                 }`}
//               >
//                 {plan.name}
//               </button>
//             ))}
//           </div>

//           {/* Plan Details */}
//           {plans.map((plan) => (
//             <motion.div
//               key={plan.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ 
//                 opacity: activeTab === plan.id ? 1 : 0,
//                 y: activeTab === plan.id ? 0 : 20,
//                 display: activeTab === plan.id ? 'block' : 'none'
//               }}
//               transition={{ duration: 0.5 }}
//               className="space-y-8"
//             >
//               {/* Services Included */}
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Services Included</h3>
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {plan.services.map((service, index) => (
//                     <div key={index} className="flex items-center bg-white/10 rounded-lg p-4">
//                       <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
//                       <span className="text-gray-300">{service}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Request Parameters */}
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Request Parameters</h3>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left">
//                     <thead>
//                       <tr className="border-b border-white/20">
//                         <th className="pb-3 text-cyan-400">Parameter</th>
//                         <th className="pb-3 text-cyan-400">Type</th>
//                         <th className="pb-3 text-cyan-400">Required</th>
//                         <th className="pb-3 text-cyan-400">Description</th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-gray-300">
//                       <tr className="border-b border-white/10">
//                         <td className="py-3 font-mono text-green-400">mobile</td>
//                         <td className="py-3">Text</td>
//                         <td className="py-3">
//                           <CheckCircle className="h-4 w-4 text-green-400" />
//                         </td>
//                         <td className="py-3">Mobile number for KYC lookup (e.g., 9123456789)</td>
//                       </tr>
//                       <tr className="border-b border-white/10">
//                         <td className="py-3 font-mono text-green-400">bankAccount</td>
//                         <td className="py-3">Text</td>
//                         <td className="py-3">
//                           {plan.id !== 'lite' ? (
//                             <CheckCircle className="h-4 w-4 text-green-400" />
//                           ) : (
//                             <span className="text-gray-500">N/A</span>
//                           )}
//                         </td>
//                         <td className="py-3">Bank account number for verification (e.g., 1234567890)</td>
//                       </tr>
//                       <tr className="border-b border-white/10">
//                         <td className="py-3 font-mono text-green-400">ifsc</td>
//                         <td className="py-3">Text</td>
//                         <td className="py-3">
//                           {plan.id !== 'lite' ? (
//                             <CheckCircle className="h-4 w-4 text-green-400" />
//                           ) : (
//                             <span className="text-gray-500">N/A</span>
//                           )}
//                         </td>
//                         <td className="py-3">IFSC code for bank validation (e.g., DEMO0001234)</td>
//                       </tr>
//                       <tr className="border-b border-white/10">
//                         <td className="py-3 font-mono text-green-400">gstin</td>
//                         <td className="py-3">Text</td>
//                         <td className="py-3">
//                           {plan.id === 'premium' ? (
//                             <CheckCircle className="h-4 w-4 text-green-400" />
//                           ) : (
//                             <span className="text-gray-500">N/A</span>
//                           )}
//                         </td>
//                         <td className="py-3">GST identification number (e.g., 29DEMO1234567Z1)</td>
//                       </tr>
//                       <tr className="border-b border-white/10">
//                         <td className="py-3 font-mono text-green-400">face</td>
//                         <td className="py-3">File</td>
//                         <td className="py-3">
//                           {plan.id === 'premium' ? (
//                             <CheckCircle className="h-4 w-4 text-green-400" />
//                           ) : (
//                             <span className="text-gray-500">N/A</span>
//                           )}
//                         </td>
//                         <td className="py-3">Face image for biometric verification</td>
//                       </tr>
//                       <tr>
//                         <td className="py-3 font-mono text-green-400">card</td>
//                         <td className="py-3">File</td>
//                         <td className="py-3">
//                           {plan.id === 'premium' ? (
//                             <CheckCircle className="h-4 w-4 text-green-400" />
//                           ) : (
//                             <span className="text-gray-500">N/A</span>
//                           )}
//                         </td>
//                         <td className="py-3">ID card image for document verification</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               {/* Response Example */}
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-2xl font-bold text-white">Response Example</h3>
//                   <button
//                     onClick={() => copyToClipboard(
//                       plan.id === 'lite' ? liteResponse : 
//                       plan.id === 'elite' ? eliteResponse : premiumResponse,
//                       `${plan.id}-response`
//                     )}
//                     className="flex items-center bg-white/10 hover:bg-white/20 text-gray-300 px-4 py-2 rounded-lg transition-colors"
//                   >
//                     {copiedCode === `${plan.id}-response` ? (
//                       <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
//                     ) : (
//                       <Copy className="h-4 w-4 mr-2" />
//                     )}
//                     {copiedCode === `${plan.id}-response` ? 'Copied!' : 'Copy'}
//                   </button>
//                 </div>
//                 <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
//                   <pre className="text-sm text-gray-300">
//                     <code>
//                       {plan.id === 'lite' ? liteResponse : 
//                        plan.id === 'elite' ? eliteResponse : premiumResponse}
//                     </code>
//                   </pre>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Error Codes */}
//       <section className="py-24 bg-black/20">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Response Codes
//             </h2>
//             <p className="text-xl text-gray-300">
//               Understanding API response codes and error handling
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {errorCodes.map((error, index) => (
//               <motion.div
//                 key={error.code}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 ${
//                   error.code === '200' 
//                     ? 'border-green-500/30' 
//                     : 'border-red-500/30'
//                 }`}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
//                     error.code === '200' 
//                       ? 'bg-green-500/20' 
//                       : 'bg-red-500/20'
//                   }`}>
//                     {error.code === '200' ? (
//                       <CheckCircle className="h-6 w-6 text-green-400" />
//                     ) : (
//                       <AlertCircle className="h-6 w-6 text-red-400" />
//                     )}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white">{error.code} - {error.status}</h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-300">{error.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Start Guide */}
//       <section className="py-24">
//         <div className="px-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Get Started?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Contact our team to get your API credentials and start integrating Fraud Buster 
//               into your application today.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Get API Access
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 View Integration Guide
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ApiDocumentation;






//<----------------------------------New Design-----------------------------------------------------------------------------






//<----------------------------------New Design-----------------------------------------------------------------------------

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Code, Copy, CheckCircle, AlertCircle, Key, Shield, Zap, FileText,
  Activity, Clock, Boxes, Server, Lock, Terminal, ChevronDown
} from "lucide-react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";

/* =========================================================
   Shared Utilities (ported from Home)
   ========================================================= */
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

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const p = Math.min(1, window.scrollY / (document.body.scrollHeight - window.innerHeight));
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

/* Magnetic buttons (for CTAs) */
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

/* Spotlight + ripple card */
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    const onDown = () => {
      const ring = document.createElement("span");
      Object.assign(ring.style, {
        position: "absolute",
        left: "var(--mx,50%)",
        top: "var(--my,50%)",
        width: "8px",
        height: "8px",
        borderRadius: "999px",
        background: "rgba(53,224,255,.55)",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
      } as CSSStyleDeclaration);
      el.appendChild(ring);
      animate(ring, { scale: [{ to: 28 }], opacity: [{ from: 0.7, to: 0 }], duration: 460, ease: "out(3)" })
        .then(() => ring.remove());
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerdown", onDown);
    return () => { el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerdown", onDown); };
  }, []);
  return (
    <div
      ref={ref}
      className={`${glass} relative rounded-2xl p-6 will-change-transform ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(240px 240px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.12), transparent 60%)"
      }}
    >
      {children}
    </div>
  );
}

/* Code block with copy + animated glow */
function CodeBlock({
  code,
  label = "Response Example",
  id,
}: { code: string; label?: string; id: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
      if (wrapRef.current) {
        animate(wrapRef.current, {
          boxShadow: [
            { to: "0 0 0 rgba(53,224,255,0)" },
            { to: "0 0 32px rgba(53,224,255,0.28)" },
            { to: "0 0 0 rgba(53,224,255,0)" }
          ],
          duration: 480,
          ease: "out(3)"
        });
      }
    } catch { /* ignore */ }
  };

  return (
    <div ref={wrapRef} className={`${glass} rounded-2xl p-5`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white/90">
          <FileText className="h-4 w-4" />
          <span className="font-semibold">{label}</span>
        </div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/20 transition"
        >
          {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="rounded-xl bg-black/30 p-4 overflow-x-auto">
        <pre className="text-[13px] leading-relaxed text-gray-300">
          <code id={id}>{code}</code>
        </pre>
      </div>
    </div>
  );
}

/* Simple accordion (endpoints) */
function Accordion({
  title,
  children,
  defaultOpen = false,
}: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const to = open ? el.scrollHeight : 0;
    animate(el, { height: [{ to }], duration: 260, ease: "out(3)" })
      .then(() => {
        if (open) el.style.height = "auto";
      });
  }, [open]);

  return (
    <div className={`${glass} rounded-2xl`}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between px-5 py-4"
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div ref={contentRef} style={{ height: defaultOpen ? "auto" : 0, overflow: "hidden" }}>
        <div className="px-5 pb-5">{children}</div>
      </div>
    </div>
  );
}

/* =========================================================
   API Documentation Page
   ========================================================= */
const ApiDocumentation: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ---------- Sticky TOC / Scrollspy ---------- */
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "auth", label: "Authentication" },
    { id: "plans", label: "Plans & Services" },
    { id: "endpoints", label: "Endpoints" },
    { id: "errors", label: "Response Codes" },
    { id: "quickstart", label: "Quick Start" },
  ];
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const els = sections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const top = window.scrollY + 120; // offset under header
      let cur = sections[0].id;
      for (const el of els) {
        if (el.offsetTop <= top) cur = el.id;
        else break;
      }
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Hero headline split + reveal ---------- */
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
      translateY: [{ from: 28, to: 0 }],
      opacity: [{ from: 0, to: 1 }],
      delay: stagger(16),
      duration: 720,
      ease: "out(3)",
    });
  }, [reduced]);

  /* ---------- Scroll reveal for elements with data-reveal ---------- */
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length || reduced) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const t = e.target as HTMLElement;
        animate(t, {
          opacity: [{ from: 0, to: 1 }],
          translateY: [{ from: 20, to: 0 }],
          duration: 520,
          ease: "out(3)"
        });
        io.unobserve(t);
      });
    }, { threshold: 0.2 });
    nodes.forEach(n => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);

  /* ---------- Parallax background ---------- */
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

  /* ---------- Stats counters ---------- */
  const [stats, setStats] = useState({ rps: 0, latency: 0, uptime: 0, sdks: 0 });
  useEffect(() => {
    const targets = { rps: 1800, latency: 450, uptime: 99.9, sdks: 3 };
    const keys = Object.keys(targets) as (keyof typeof targets)[];
    const start = performance.now();
    const dur = 1400;

    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / dur);
      const ease = 1 - Math.pow(1 - t, 3);
      const next: any = {};
      keys.forEach((k) => { const v = (targets[k] as number) * ease; next[k] = Math.round(v * 10) / 10; });
      setStats(next);
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  /* ---------- Plans / tabs ---------- */
  const plans = [
    { id: "lite", name: "Lite", color: "from-[#6C63FF] to-[#35E0FF]", services: ["VPA Lookup"] },
    { id: "elite", name: "Elite", color: "from-[#35E0FF] to-[#4AF2C6]", services: ["PAN (KYC) Validation", "VPA Lookup", "Bank + IFSC"] },
    { id: "premium", name: "Premium", color: "from-[#4AF2C6] to-[#6C63FF]", services: ["PAN (KYC)", "VPA Lookup", "Bank + IFSC", "Face Match", "GST Validation"] },
  ];
  const [activePlan, setActivePlan] = useState("elite");

  /* ---------- Playground (client-side demo) ---------- */
  const [mobile, setMobile] = useState("9123456789");
  const [account, setAccount] = useState("1234567890");
  const [ifsc, setIfsc] = useState("DEMO0001234");
  const [gstin, setGstin] = useState("29DEMO1234567Z1");
  const [running, setRunning] = useState(false);
  const [response, setResponse] = useState<string>("");

  const sampleLite = `{
  "timestamp": "2025-08-15T08:07:32.105Z",
  "statusCode": 200,
  "status": "OK",
  "message": "Data Fetched Successfully",
  "success": true,
  "response": {
    "fetchVPAFromMobile": {
      "name": "DEMO TECH SOLUTIONS",
      "upi": ["9*1****567-demo@paytm","9*1****567@phonepe"]
    }
  },
  "failures": {}
}`;
  const sampleElite = `{
  "timestamp": "2025-08-15T08:16:27.757Z",
  "statusCode": 200,
  "status": "OK",
  "message": "Data Fetched Successfully",
  "success": true,
  "response": {
    "fetchVPAFromMobile": {
      "name": "DEMO TECH SOLUTIONS",
      "upi": ["912****567-demo@paytm","912****567@phonepe"]
    },
    "fetchKYCFromMobile": { "fullName": "DEMO TECH SOLUTIONS" },
    "verifyBankDetails": {
      "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD",
      "ifsc": "DEMO000***1", "bankName": "DEMO BANK", "branch": "BANGALORE"
    }
  },
  "failures": {}
}`;
  const samplePremium = `{
  "timestamp": "2025-08-15T08:53:54.204Z",
  "statusCode": 200,
  "status": "OK",
  "message": "Data Fetched Successfully",
  "success": true,
  "response": {
    "fetchVPAFromMobile": {
      "name": "DEMO TECH SOLUTIONS",
      "upi": ["912****567-demo@paytm","912****567@phonepe"]
    },
    "performFaceMatch": { "is_same_face": true, "same_face_confidence": 0.98 },
    "fetchKYCFromMobile": { "fullName": "DEMO USER NAME", "pan": "D*M****12P" },
    "verifyBankDetails": { "nameAtBank": "DEMO TECH SOLUTIONS PVT LTD", "ifsc": "DEMO000***1" },
    "fetchGSTValidation": { "taxpayerDetails": { "lgnm": "DEMO TECH SOLUTIONS PRIVATE LIMITED", "sts": "Active" } }
  },
  "failures": {}
}`;

  const runPlayground = async () => {
    setRunning(true);
    setResponse("");
    // Simulate a little processing with animated dots
    const lines = [
      `➜ Validating inputs...`,
      `➜ Selecting plan: ${activePlan.toUpperCase()}`,
      `➜ Building secure payload...`,
      `➜ Contacting FraudBuster...`,
    ];
    const out: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      out.push(lines[i]);
      setResponse(out.join("\n"));
      await new Promise(r => setTimeout(r, 350));
    }
    await new Promise(r => setTimeout(r, 400));
    setResponse(
      activePlan === "lite" ? sampleLite :
      activePlan === "elite" ? sampleElite : samplePremium
    );
    setRunning(false);
    // pulse glow on result box
    const box = document.getElementById("playground-result");
    if (box) {
      animate(box, {
        boxShadow: [
          { to: "0 0 0 rgba(53,224,255,0)" },
          { to: "0 0 22px rgba(53,224,255,0.24)" },
          { to: "0 0 0 rgba(53,224,255,0)" }
        ],
        duration: 560, ease: "out(3)"
      });
    }
  };

  /* ---------- Header values / endpoint details ---------- */
  const headers = {
    "Content-Type": "multipart/form-data; boundary=<calculated>",
    "client-id": "<Provided from FB Team>",
    "auth-key": "<Provided from FB Team>",
    "Secret-key": "<Provided from FB Team>"
  };

  const errorCodes = [
    { code: "200", status: "OK", description: "Request successful, data fetched" },
    { code: "401", status: "Unauthorized", description: "Invalid credentials or unauthorized access" },
    { code: "402", status: "Payment Required", description: "Insufficient wallet balance" },
    { code: "404", status: "Not Found", description: "Wrong URL or data not found" },
  ];

  /* ---------- CTA magnets ---------- */
  const accessRef = useRef<HTMLButtonElement>(null);
  const guideRef = useRef<HTMLAnchorElement>(null);
  useMagnet(accessRef, 18);
  useMagnet(guideRef, 14);

  return (
    <div className="relative pt-16">
      <ScrollProgress />
      <CursorParticles />

      {/* Background layers */}
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

      {/* Layout: sticky TOC + content */}
      <div className="px-10 grid w-full max-w-none grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="sticky top-24 hidden h-fit lg:block">
          <nav className={`${glass} rounded-2xl p-4`}>
            <div className="mb-2 text-sm font-semibold text-white/80">On this page</div>
            <ul className="space-y-1">
              {sections.map(s => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm transition ${
                      activeId === s.id ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <main className="space-y-24">
          {/* HERO */}
          <section id="overview" className="pt-10">
            <div className="text-center mb-12">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] mb-6">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
                FraudBuster API Documentation
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75" data-reveal>
                Integrate KYC, bank & IFSC, VPA/UPI, face match and GST checks into your flows.
                Built for speed, accuracy and explainability — with enterprise‑grade security.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4" data-reveal>
              <SpotlightCard>
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-[#35E0FF]" />
                  <div>
                    <div className="text-xl font-bold text-white">{Math.floor(stats.rps)}+</div>
                    <div className="text-sm text-white/70">Requests / sec</div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-[#35E0FF]" />
                  <div>
                    <div className="text-xl font-bold text-white">{Math.round(stats.latency)}ms</div>
                    <div className="text-sm text-white/70">Typical latency</div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="flex items-center gap-3">
                  <Server className="h-6 w-6 text-[#35E0FF]" />
                  <div>
                    <div className="text-xl font-bold text-white">{stats.uptime}%</div>
                    <div className="text-sm text-white/70">Historical uptime</div>
                  </div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="flex items-center gap-3">
                  <Boxes className="h-6 w-6 text-[#35E0FF]" />
                  <div>
                    <div className="text-xl font-bold text-white">{Math.round(stats.sdks)}</div>
                    <div className="text-sm text-white/70">SDKs / guides</div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </section>

          {/* AUTHENTICATION */}
          <section id="auth" className="space-y-6">
            <h2 className="text-3xl font-bold">Authentication</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <SpotlightCard>
                <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                  <Key className="h-5 w-5" /> <span className="font-semibold">Headers</span>
                </div>
                <div className="space-y-2">
                  {Object.entries(headers).map(([k, v]) => (
                    <div key={k} className="rounded-lg bg-white/10 px-3 py-2">
                      <div className="text-sm text-[#E9B949]">{k}</div>
                      <div className="text-xs text-white/80">{v}</div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              <SpotlightCard>
                <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                  <Shield className="h-5 w-5" /> <span className="font-semibold">Security Notes</span>
                </div>
                <ul className="list-disc pl-5 text-white/80 space-y-2">
                  <li>Use server‑side storage for credentials.</li>
                  <li>Rotate keys regularly; scope by environment.</li>
                  <li>All traffic over TLS; data encrypted at rest.</li>
                </ul>
              </SpotlightCard>
            </div>
          </section>

          {/* PLANS & SERVICES */}
          <section id="plans">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Plans & Services</h2>
              <p className="mt-2 text-white/70" data-reveal>Pick a tier and see exactly which checks are available.</p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex flex-wrap gap-3">
              {plans.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePlan(p.id)}
                  className={`rounded-xl px-5 py-2 font-semibold transition ${
                    activePlan === p.id
                      ? `bg-gradient-to-r ${p.color} text-black`
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Services grid */}
            <div className="grid gap-5 md:grid-cols-3">
              {plans.find(p => p.id === activePlan)?.services.map(svc => (
                <SpotlightCard key={svc}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#35E0FF]" />
                    <div className="font-medium">{svc}</div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* ENDPOINTS */}
          <section id="endpoints" className="space-y-6">
            <h2 className="text-3xl font-bold">Endpoints</h2>

            <Accordion title="POST /api/v1/fb/user-onboard" defaultOpen>
              <div className="grid gap-6 lg:grid-cols-2">
                <SpotlightCard>
                  <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                    <Terminal className="h-5 w-5" /> <span className="font-semibold">cURL Example</span>
                  </div>
                  <CodeBlock
                    id="curl-example"
                    label="cURL"
                    code={`curl -X POST https://api.fraudbuster.example.com/api/v1/fb/user-onboard \\
  -H "client-id: <CLIENT_ID>" \\
  -H "auth-key: <AUTH_KEY>" \\
  -H "Secret-key: <SECRET_KEY>" \\
  -F "mobile=${mobile}" \\
  -F "bankAccount=${account}" \\
  -F "ifsc=${ifsc}" \\
  -F "gstin=${gstin}" \\
  -F "face=@/path/face.jpg" \\
  -F "card=@/path/card.jpg"`}
                  />
                </SpotlightCard>

                <SpotlightCard>
                  <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                    <Zap className="h-5 w-5" /> <span className="font-semibold">Playground (client‑side demo)</span>
                  </div>

                  <div className="grid gap-3">
                    <div className="grid grid-cols-2 gap-2">
                      <input value={mobile} onChange={e => setMobile(e.target.value)} className="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none" placeholder="mobile" />
                      <select value={activePlan} onChange={e => setActivePlan(e.target.value)} className="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none">
                        {plans.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input value={account} onChange={e => setAccount(e.target.value)} className="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none" placeholder="bankAccount" />
                      <input value={ifsc} onChange={e => setIfsc(e.target.value)} className="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none" placeholder="ifsc" />
                    </div>
                    <input value={gstin} onChange={e => setGstin(e.target.value)} className="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none" placeholder="gstin (premium)" />

                    <div className="flex gap-2">
                      <button
                        onClick={runPlayground}
                        disabled={running}
                        ref={accessRef as any}
                        className="rounded-xl bg-[#7C5CFF]/90 px-4 py-2 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] transition hover:translate-y-[1px] disabled:opacity-50"
                      >
                        {running ? "Running..." : "Run Example"}
                      </button>
                      <Link
                        to="/contact"
                        ref={guideRef as any}
                        className="rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition"
                      >
                        Get API Access
                      </Link>
                    </div>

                    <div id="playground-result" className="rounded-xl bg-black/30 p-3 text-xs text-white/80 whitespace-pre-wrap min-h-[120px]">
                      {response || "Output will appear here..."}
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <SpotlightCard>
                  <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                    <FileText className="h-5 w-5" /> <span className="font-semibold">Request Parameters</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-white/20 text-[#35E0FF]">
                          <th className="py-2">Parameter</th>
                          <th className="py-2">Type</th>
                          <th className="py-2">Required</th>
                          <th className="py-2">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-white/10">
                          <td className="py-2 font-mono text-[#E9B949]">mobile</td>
                          <td>Text</td>
                          <td><CheckCircle className="h-4 w-4 text-green-400" /></td>
                          <td>Mobile number for KYC lookup (e.g., 9123456789)</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 font-mono text-[#E9B949]">bankAccount</td>
                          <td>Text</td>
                          <td>{activePlan !== "lite" ? <CheckCircle className="h-4 w-4 text-green-400" /> : <span className="text-white/50">N/A</span>}</td>
                          <td>Bank account number for verification</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 font-mono text-[#E9B949]">ifsc</td>
                          <td>Text</td>
                          <td>{activePlan !== "lite" ? <CheckCircle className="h-4 w-4 text-green-400" /> : <span className="text-white/50">N/A</span>}</td>
                          <td>IFSC code for bank validation</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="py-2 font-mono text-[#E9B949]">gstin</td>
                          <td>Text</td>
                          <td>{activePlan === "premium" ? <CheckCircle className="h-4 w-4 text-green-400" /> : <span className="text-white/50">N/A</span>}</td>
                          <td>GST identification number</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono text-[#E9B949]">face / card</td>
                          <td>File</td>
                          <td>{activePlan === "premium" ? <CheckCircle className="h-4 w-4 text-green-400" /> : <span className="text-white/50">N/A</span>}</td>
                          <td>Images for biometric & document verification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </SpotlightCard>

                <SpotlightCard>
                  <div className="mb-2 flex items-center gap-2 text-[#35E0FF]">
                    <Lock className="h-5 w-5" /> <span className="font-semibold">Compliance</span>
                  </div>
                  <ul className="list-disc pl-5 text-white/80 space-y-2">
                    <li>SOC 2 pathways, audit trails & data residency options.</li>
                    <li>Data minimization: only what’s required for decisions.</li>
                    <li>Tenant isolation and RBAC for enterprise safety.</li>
                  </ul>
                </SpotlightCard>
              </div>
            </Accordion>
          </section>

          {/* RESPONSE CODES */}
          <section id="errors">
            <div className="mb-8">
              <h2 className="text-3xl font-bold">Response Codes</h2>
              <p className="mt-2 text-white/70" data-reveal>Understand outcomes and handle errors gracefully.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {errorCodes.map((er) => (
                <div
                  key={er.code}
                  className={`${glass} rounded-2xl p-6 will-change-transform`}
                  onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.03 }], translateY: [{ to: -2 }], duration: 160, ease: "out(3)" })}
                  onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], translateY: [{ to: 0 }], duration: 160, ease: "out(3)" })}
                  data-reveal
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${er.code === "200" ? "bg-green-500/20" : "bg-red-500/20"}`}>
                      {er.code === "200" ? <CheckCircle className="h-6 w-6 text-green-400" /> : <AlertCircle className="h-6 w-6 text-red-400" />}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{er.code} — {er.status}</div>
                      <div className="text-white/70 text-sm">{er.description}</div>
                    </div>
                  </div>
                  <div className="text-xs text-white/60">Tip: log both the <em>statusCode</em> and <em>message</em> for diagnostics.</div>
                </div>
              ))}
            </div>
          </section>

          {/* QUICK START */}
          <section id="quickstart" className="pb-24">
            <div className={`${glass} rounded-3xl p-10 bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-2 text-white/75 max-w-3xl">
                Get credentials from our team and integrate the <strong>USER_KYC_RETRIEVAL_API</strong> in minutes.
                Use the playground above to understand payloads, then move to your backend with scoped keys.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  ref={accessRef}
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                >
                  Get API Access
                </button>
                <Link
                  ref={guideRef}
                  to="/product"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition"
                >
                  View Integration Guide
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ApiDocumentation;
