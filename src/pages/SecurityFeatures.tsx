// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Lock, Eye, Zap, CheckCircle, AlertTriangle, Key, Server } from 'lucide-react';

// const SecurityFeatures = () => {
//   const securityLayers = [
//     {
//       title: 'API Security',
//       icon: Key,
//       features: [
//         {
//           name: 'Multi-Key Authentication',
//           description: 'Triple-layer authentication with client-id, auth-key, and secret-key',
//           status: 'Active'
//         },
//         {
//           name: 'Request Signing',
//           description: 'Cryptographic signing of all API requests for integrity verification',
//           status: 'Active'
//         },
//         {
//           name: 'Rate Limiting',
//           description: 'Intelligent rate limiting to prevent abuse and ensure fair usage',
//           status: 'Active'
//         },
//         {
//           name: 'IP Whitelisting',
//           description: 'Restrict API access to pre-approved IP addresses',
//           status: 'Available'
//         }
//       ]
//     },
//     {
//       title: 'Data Protection',
//       icon: Lock,
//       features: [
//         {
//           name: 'End-to-End Encryption',
//           description: 'AES-256 encryption for all data in transit and at rest',
//           status: 'Active'
//         },
//         {
//           name: 'Data Masking',
//           description: 'Automatic masking of sensitive information in API responses',
//           status: 'Active'
//         },
//         {
//           name: 'Secure File Upload',
//           description: 'Encrypted file uploads with virus scanning and validation',
//           status: 'Active'
//         },
//         {
//           name: 'Data Retention Policies',
//           description: 'Automated data purging based on regulatory requirements',
//           status: 'Active'
//         }
//       ]
//     },
//     {
//       title: 'Fraud Detection',
//       icon: Eye,
//       features: [
//         {
//           name: 'Real-time Monitoring',
//           description: 'Continuous monitoring of API usage patterns and anomalies',
//           status: 'Active'
//         },
//         {
//           name: 'Behavioral Analysis',
//           description: 'AI-powered analysis of user behavior and transaction patterns',
//           status: 'Active'
//         },
//         {
//           name: 'Risk Scoring',
//           description: 'Dynamic risk assessment for each verification request',
//           status: 'Active'
//         },
//         {
//           name: 'Threat Intelligence',
//           description: 'Integration with global threat intelligence feeds',
//           status: 'Active'
//         }
//       ]
//     },
//     {
//       title: 'Infrastructure Security',
//       icon: Server,
//       features: [
//         {
//           name: 'Cloud Security',
//           description: 'Multi-cloud deployment with advanced security controls',
//           status: 'Active'
//         },
//         {
//           name: 'Network Segmentation',
//           description: 'Isolated network segments for different security zones',
//           status: 'Active'
//         },
//         {
//           name: 'DDoS Protection',
//           description: 'Advanced DDoS mitigation and traffic filtering',
//           status: 'Active'
//         },
//         {
//           name: 'Security Monitoring',
//           description: '24/7 security operations center monitoring',
//           status: 'Active'
//         }
//       ]
//     }
//   ];

//   const complianceStandards = [
//     {
//       title: 'RBI Compliance',
//       description: 'Full compliance with Reserve Bank of India guidelines for digital payments',
//       requirements: [
//         'Data localization within India',
//         'Strong customer authentication',
//         'Transaction monitoring and reporting',
//         'Incident response procedures'
//       ],
//       status: 'Certified'
//     },
//     {
//       title: 'ISO 27001',
//       description: 'International standard for information security management systems',
//       requirements: [
//         'Information security policies',
//         'Risk management framework',
//         'Security controls implementation',
//         'Continuous improvement process'
//       ],
//       status: 'Certified'
//     },
//     {
//       title: 'SOC 2 Type II',
//       description: 'Security, availability, and confidentiality controls verification',
//       requirements: [
//         'Security control effectiveness',
//         'System availability monitoring',
//         'Confidentiality measures',
//         'Processing integrity controls'
//       ],
//       status: 'Certified'
//     },
//     {
//       title: 'PCI DSS',
//       description: 'Payment Card Industry Data Security Standard compliance',
//       requirements: [
//         'Secure network architecture',
//         'Cardholder data protection',
//         'Vulnerability management',
//         'Access control measures'
//       ],
//       status: 'Level 1'
//     }
//   ];

//   const securityMetrics = [
//     {
//       metric: '99.99%',
//       label: 'API Uptime',
//       description: 'Guaranteed service availability'
//     },
//     {
//       metric: '<100ms',
//       label: 'Response Time',
//       description: 'Average API response time'
//     },
//     {
//       metric: '256-bit',
//       label: 'Encryption',
//       description: 'AES encryption standard'
//     },
//     {
//       metric: '24/7',
//       label: 'Monitoring',
//       description: 'Continuous security monitoring'
//     }
//   ];

//   const threatProtection = [
//     {
//       threat: 'API Abuse',
//       protection: 'Rate limiting, request validation, and behavioral analysis',
//       impact: 'Prevents system overload and ensures fair usage'
//     },
//     {
//       threat: 'Data Breaches',
//       protection: 'End-to-end encryption, access controls, and audit logging',
//       impact: 'Protects sensitive customer information'
//     },
//     {
//       threat: 'Identity Fraud',
//       protection: 'Multi-factor verification, biometric matching, and document validation',
//       impact: 'Prevents synthetic identity creation and fraud'
//     },
//     {
//       threat: 'Man-in-the-Middle',
//       protection: 'TLS 1.3 encryption, certificate pinning, and secure channels',
//       impact: 'Ensures data integrity during transmission'
//     },
//     {
//       threat: 'Injection Attacks',
//       protection: 'Input validation, parameterized queries, and sanitization',
//       impact: 'Prevents malicious code execution'
//     },
//     {
//       threat: 'Credential Theft',
//       protection: 'Multi-key authentication, token rotation, and secure storage',
//       impact: 'Protects API access credentials'
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
//               <Shield className="h-10 w-10 text-white" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Security Features
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Comprehensive security architecture protecting your data and transactions with 
//               enterprise-grade controls, compliance standards, and advanced threat protection.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Security Metrics */}
//       <section className="py-12 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <div className="grid md:grid-cols-4 gap-8">
//             {securityMetrics.map((metric, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.metric}</div>
//                 <div className="text-lg font-semibold text-white mb-2">{metric.label}</div>
//                 <div className="text-gray-400 text-sm">{metric.description}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security Layers */}
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
//               Multi-Layered Security Architecture
//             </h2>
//             <p className="text-xl text-gray-300">
//               Comprehensive protection across all layers of our infrastructure and services
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {securityLayers.map((layer, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
//                     <layer.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
//                 </div>
                
//                 <div className="space-y-4">
//                   {layer.features.map((feature, idx) => (
//                     <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="text-white font-medium">{feature.name}</h4>
//                         <span className={`text-xs px-2 py-1 rounded-full ${
//                           feature.status === 'Active' 
//                             ? 'bg-green-500/20 text-green-400'
//                             : 'bg-blue-500/20 text-blue-400'
//                         }`}>
//                           {feature.status}
//                         </span>
//                       </div>
//                       <p className="text-gray-400 text-sm">{feature.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compliance Standards */}
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
//               Compliance & Certifications
//             </h2>
//             <p className="text-xl text-gray-300">
//               Adherence to international security standards and Indian regulatory requirements
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {complianceStandards.map((standard, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-xl font-bold text-white">{standard.title}</h3>
//                   <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
//                     {standard.status}
//                   </span>
//                 </div>
//                 <p className="text-gray-400 mb-6">{standard.description}</p>
//                 <div className="space-y-3">
//                   {standard.requirements.map((requirement, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
//                       <span className="text-gray-300 text-sm">{requirement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Threat Protection */}
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
//               Advanced Threat Protection
//             </h2>
//             <p className="text-xl text-gray-300">
//               Proactive defense against evolving cyber threats and attack vectors
//             </p>
//           </motion.div>

//           <div className="space-y-6">
//             {threatProtection.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="grid lg:grid-cols-3 gap-6 items-center">
//                   <div>
//                     <div className="flex items-center mb-3">
//                       <AlertTriangle className="h-6 w-6 text-orange-400 mr-3" />
//                       <h3 className="text-lg font-semibold text-white">{item.threat}</h3>
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-cyan-400 font-medium mb-2">Protection Measures</h4>
//                     <p className="text-gray-300 text-sm">{item.protection}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-green-400 font-medium mb-2">Impact</h4>
//                     <p className="text-gray-300 text-sm">{item.impact}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security Monitoring */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 24/7 Security Operations Center
//               </h2>
//               <p className="text-xl text-gray-300 mb-8">
//                 Our dedicated security team in Bangalore monitors all systems around the clock, 
//                 ensuring immediate response to any security incidents or anomalies.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <Zap className="h-6 w-6 text-cyan-400 mr-3" />
//                   <span className="text-gray-300">Real-time threat detection and response</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Eye className="h-6 w-6 text-cyan-400 mr-3" />
//                   <span className="text-gray-300">Continuous system monitoring and alerting</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Shield className="h-6 w-6 text-cyan-400 mr-3" />
//                   <span className="text-gray-300">Incident response and forensic analysis</span>
//                 </div>
//                 <div className="flex items-center">
//                   <CheckCircle className="h-6 w-6 text-cyan-400 mr-3" />
//                   <span className="text-gray-300">Compliance monitoring and reporting</span>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Security Dashboard</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-gray-300">Threat Level</span>
//                     <span className="text-green-400 font-semibold">LOW</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-gray-300">Active Monitoring</span>
//                     <span className="text-green-400 font-semibold">ONLINE</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-gray-300">Last Security Scan</span>
//                     <span className="text-cyan-400 font-semibold">2 min ago</span>
//                   </div>
//                   <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
//                     <span className="text-gray-300">Incidents Today</span>
//                     <span className="text-green-400 font-semibold">0</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
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
//               Experience Enterprise Security
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Protect your business with bank-grade security features and compliance standards 
//               designed for the Indian fintech market.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Request Security Assessment
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Download Security Datasheet
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SecurityFeatures;








//<--------------------new design tried----------------------------------------------------->








//<------------------new design tried----------------------------------------------------->

// src/pages/SecurityFeatures.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Shield, ShieldCheck, Lock, Eye, Server, Key,
  Activity, Database, Globe as GlobeIcon, FileCheck, Bug, Link2, Wifi,
  TerminalSquare, KeyRound, CheckCircle, Clock, Cpu, Copy, Check, FileCode,
  Gauge, Fingerprint, Camera, Cloud, BarChart3, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

/* ================= animejs import (safe for Vite) ================= */
import * as Anime from "animejs";
const animate: any =
  (Anime as any).animate ??
  (Anime as any).default ??
  (typeof window !== "undefined" ? (window as any).anime : undefined) ??
  ((el: any) => ({ finished: Promise.resolve(el) }));
const stagger: any = (Anime as any).stagger ?? ((gap: number) => (_i: number) => gap);

/* ================= theme & helpers ================= */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
const softCard = `${glass} rounded-2xl border transition shadow-[0_0_0_0_rgba(53,224,255,0)] hover:shadow-[0_18px_42px_rgba(53,224,255,0.18)]`;

const useReducedMotion = () => {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const on = () => set(!!mq?.matches);
    on();
    mq?.addEventListener?.("change", on);
    return () => mq?.removeEventListener?.("change", on);
  }, []);
  return reduced;
};

/** ==== instant reveal (no scroll IO) — animates everything on mount ==== */
const useInstantReveal = (containerRef: React.RefObject<HTMLElement>) => {
  const reduced = useReducedMotion();
  useEffect(() => {
    const root = containerRef.current;
    if (!root || reduced) return;

    // collect all candidates once and animate them all now
    const items = root.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-item]");
    if (!items.length) return;

    animate(items, {
      opacity: [{ value: [0, 1] }],
      translateY: [{ value: [18, 0] }],
      duration: 480,
      easing: "easeOutQuad",
      delay: stagger(18),
    });
  }, [containerRef, reduced]);
};

const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    // simple active logic: set based on scroll position without IO
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      sections.forEach((sec) => {
        if (y >= sec.offsetTop) current = sec.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
};

/* ================= global interactions ================= */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      el.style.transform = `scaleX(${Math.min(1, total > 0 ? (scrollY / total) : 0)})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-white/10">
      <div ref={ref} className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]" />
    </div>
  );
}

/** ===== custom cursor (dot + halo + sparkles) ===== */
function SpotlightCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const halo = useRef<HTMLDivElement>(null);
  const trail = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (matchMedia?.("(pointer: coarse)")?.matches) return;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", move, { passive: true });

    const loop = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      if (dot.current) { dot.current.style.left = x + "px"; dot.current.style.top = y + "px"; }
      if (halo.current) { halo.current.style.left = x + "px"; halo.current.style.top = y + "px"; }
      if (!reduced && trail.current) {
        const s = document.createElement("span");
        s.className = "absolute block w-[2px] h-[8px] bg-[#35E0FF]/50";
        s.style.left = x + "px"; s.style.top = y + "px";
        trail.current.appendChild(s);
        animate(s, {
          translateY: -12, opacity: [{ value: [1, 0] }],
          duration: 320, easing: "easeOutQuad", complete: () => s.remove()
        });
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    const parts: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    let raf = 0;

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

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.2 + 0.4;
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
      }
    };
    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);

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
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[98]" aria-hidden />
      <div ref={trail} className="pointer-events-none fixed inset-0 z-[99]" aria-hidden />
      <div
        ref={halo}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full"
        style={{ background: "radial-gradient(30% 30% at 50% 50%, rgba(53,224,255,0.18), transparent 70%)", mixBlendMode: "screen" }}
        aria-hidden
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[101] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
        aria-hidden
      />
    </>
  );
}

function DynamicBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!gridRef.current) return;
    animate(gridRef.current, {
      translateX: [{ value: [0, 8, 0, -8, 0] }],
      translateY: [{ value: [0, -6, 0, 6, 0] }],
      duration: 10000, easing: "easeInOutSine", loop: true
    });
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div ref={gridRef} className="absolute inset-0 opacity-[0.12]"
           style={{
             backgroundImage:
               "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
             backgroundSize: "42px 42px",
           }}/>
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
    </div>
  );
}

/* ================ micro-interactions ================ */
const useMagnet = (ref: React.RefObject<HTMLElement>, force = 18) => {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const rect = () => el.getBoundingClientRect();
    const onMove = (e: MouseEvent) => {
      const r = rect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
      animate(el, { translateX: dx * force, translateY: dy * force, duration: 100, easing: "easeOutQuad" });
    };
    const onLeave = () => animate(el, { translateX: 0, translateY: 0, duration: 140, easing: "easeOutQuad" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, force]);
};
const useTilt = (ref: React.RefObject<HTMLElement>, max = 8) => {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(py - 0.5) * -max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
    };
    const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, max]);
};

/* ================= page ================= */
const SecurityFeatures: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  useInstantReveal(rootRef); // << no-scroll reveal: animate everything once

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = ["sf-hero","sf-topology","sf-matrix","sf-policy","sf-simulator","sf-observability","sf-numbers","sf-cta"];
  const active = useScrollSpy(sections);

  const [live, setLive] = useState({ p95: 92, blocked: 0, audits: 0 });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setLive(s => ({
        p95: Math.max(70, Math.min(118, s.p95 + (Math.random() > 0.5 ? 1 : -1))),
        blocked: s.blocked + (Math.random() > 0.7 ? 1 : 0),
        audits: s.audits + (Math.random() > 0.82 ? 1 : 0),
      }));
    }, 850);
    return () => clearInterval(id);
  }, [reduced]);

  const c1 = useRef<HTMLAnchorElement>(null);
  const c2 = useRef<HTMLAnchorElement>(null);
  useMagnet(c1, 20); useMagnet(c2, 16);

  // hero typed code (kept), glitch/scramble removed
  const heroCodeRef = useRef<HTMLPreElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const code =
`transport:
  tls: "1.3"
  hsts: true
  ocsp_stapling: true
storage:
  at_rest: "AES-256 (XTS)"
  key_management: "HSM + rotation"
access:
  rbac: true
  mfa: "privileged"
  jit: true
audit:
  append_only: true
  export: "JSONL -> SIEM"`;
    let i = 0;
    const id = setInterval(() => {
      if (!heroCodeRef.current) return;
      heroCodeRef.current.textContent = code.slice(0, (i += 2));
      if (i >= code.length) clearInterval(id);
    }, 9);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduced || !rainRef.current) return;
    const columns = 28;
    const container = rainRef.current;
    container.innerHTML = "";
    for (let i = 0; i < columns; i++) {
      const bar = document.createElement("span");
      bar.className = "block w-[2px] bg-gradient-to-b from-transparent via-[#35E0FF] to-transparent opacity-30";
      bar.style.height = `${Math.random() * 100 + 120}px`;
      bar.style.marginLeft = `${Math.random() * 18 + 8}px`;
      container.appendChild(bar);
      animate(bar, {
        translateY: [{ value: [-160, 160] }],
        opacity: [{ value: [0.1, 0.45] }, { value: 0.1 }],
        delay: Math.random() * 800,
        duration: 1400 + Math.random() * 800,
        loop: true,
        easing: "easeInOutQuad"
      });
    }
  }, [reduced]);

  return (
    <div ref={rootRef} className="relative pt-16 cursor-none">
      <ScrollProgress />
      <SpotlightCursor />
      <DynamicBackground />

      {/* sticky subnav */}
      <div className="sticky top-[80px] z-[60] backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-10 max-w-none py-2 flex gap-3 overflow-x-auto no-scrollbar">
          {[
            { id: "sf-hero", label: "Overview" },
            { id: "sf-topology", label: "Topology" },
            { id: "sf-matrix", label: "Feature Matrix" },
            { id: "sf-policy", label: "Policy Builder" },
            { id: "sf-simulator", label: "Breach Simulator" },
            { id: "sf-observability", label: "Observability" },
            { id: "sf-numbers", label: "Numbers" },
            { id: "sf-cta", label: "Talk to Security" },
          ].map(t => (
            <a key={t.id} href={`#${t.id}`}
               className={`text-sm rounded-full px-3 py-1 border transition-colors ${
                 active === t.id ? "border-[#35E0FF]/60 text-white bg-white/[0.06]" : "border-white/10 text-white/70 hover:text-white hover:bg-white/[0.04]"
               }`}>{t.label}</a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section id="sf-hero" className="relative overflow-hidden min-h-[88vh] flex items-center" data-reveal>
        <div className="absolute inset-0 pointer-events-none">
          <div ref={rainRef} className="absolute left-0 right-0 top-10 mx-auto flex h-[220px] w-[80%] max-w-5xl" />
        </div>
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-start">
            <div data-reveal-item>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`} data-reveal-item>
                <ShieldCheck className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">FraudBuster · Security Features</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.04]" data-reveal-item>
                Ship faster with security that’s audit-ready.
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal-item>
                Layered protection for APIs, data, runtime, and identity. Every control explains itself—
                so your teams and your regulators see the same truth.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal-item>
                <a ref={c1} href="#sf-policy" className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
                  Build a Policy
                </a>
                <a ref={c2} href="#sf-simulator" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition">
                  Run a Breach Simulation
                </a>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl" data-reveal-item>
                <MiniMetric icon={Activity} label="p95 auth latency" value={`${live.p95}ms`} />
                <MiniMetric icon={Shield} label="Threats blocked" value={`${live.blocked}`} />
                <MiniMetric icon={FileCheck} label="Audits passed" value={`${live.audits}`} />
              </div>
            </div>
            <HeroPanel />
          </div>
        </div>
      </section>

      {/* Topology */}
      <section id="sf-topology" className="py-18 pt-8" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Defense topology" subtitle="A layered map of how traffic flows and where controls live." />
          <TopologyMap />
        </div>
      </section>

      {/* Feature Matrix */}
      <section id="sf-matrix" className="py-24 bg-white/[0.04]" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Security feature matrix" subtitle="Filter by surface and see exactly what we ship." />
          <FeatureMatrix />
        </div>
      </section>

      {/* Policy Builder */}
      <section id="sf-policy" className="py-24" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Policy builder" subtitle="Toggle controls and export an auditable policy." />
          <PolicyBuilder />
        </div>
      </section>

      {/* Breach Simulator */}
      <section id="sf-simulator" className="py-24 bg-white/[0.04]" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Breach simulator" subtitle="Launch common attack vectors and watch live defenses." />
          <BreachSimulator />
        </div>
      </section>

      {/* Observability */}
      <section id="sf-observability" className="py-24" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Runtime observability" subtitle="Evidence, not promises: SIEM feeds, EDR, anomaly streams." />
          <ObservabilityPanel />
        </div>
      </section>

      {/* Numbers */}
      <section id="sf-numbers" className="py-24 bg-white/[0.04]" data-reveal>
        <div className="mx-10 max-w-none">
          <Header title="Security by the numbers" subtitle="Outcomes you can take to your board and your regulator." />
          <NumbersGrid />
        </div>
      </section>

      {/* CTA */}
      <section id="sf-cta" className="py-24" data-reveal>
        <div className="mx-10 max-w-none text-center">
          <div className={`${glass} rounded-3xl p-12 bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal-item>Security is a promise we can prove</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal-item>
              Sandbox access, policies, and audits—ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal-item>
              <a href="#sf-policy" className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
                Generate a Policy
              </a>
              <a href="#sf-simulator" className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition">
                Run a Simulation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ================ subcomponents ================ */
function Header({ title, subtitle }:{ title: string; subtitle: string }) {
  return (
    <div className="text-center mb-14" data-reveal-item>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <p className="text-lg text-white/70 mt-2">{subtitle}</p>
    </div>
  );
}
function MiniMetric({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
  return (
    <div className={`${glass} rounded-xl p-4 border`}>
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#35E0FF]" />
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
function HeroPanel() {
  const codeRef = useRef<HTMLPreElement>(null);
  useEffect(() => {
    const code =
`transport:
  tls: "1.3"
  hsts: true
  ocsp_stapling: true
storage:
  at_rest: "AES-256 (XTS)"
  key_management: "HSM + rotation"
access:
  rbac: true
  mfa: "privileged"
  jit: true
audit:
  append_only: true
  export: "JSONL -> SIEM"`;
    let i = 0;
    const id = setInterval(() => {
      if (!codeRef.current) return;
      codeRef.current.textContent = code.slice(0, (i += 2));
      if (i >= code.length) clearInterval(id);
    }, 9);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={`${softCard} p-6`} data-reveal-item>
      <div className="text-xs text-white/60 mb-2">Security posture (live)</div>
      <div className="rounded-xl bg-black/40 border border-white/10 p-3">
        <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/[0.06] border border-white/10">
          <TerminalSquare className="h-4 w-4 text-[#35E0FF]" />
          <span className="text-sm">fraudbuster security posture</span>
        </div>
        <pre ref={codeRef} className="mt-3 text-[12.5px] leading-relaxed min-h-[160px]" />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        <Badge icon={Lock} text="TLS 1.3" />
        <Badge icon={Shield} text="WAF + EDR" />
        <Badge icon={FileCheck} text="Audit trails" />
      </div>
    </div>
  );
}
function Badge({ icon: Icon, text }:{ icon: any; text: string }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

/* Topology */
function TopologyMap() {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef, 8);
  useEffect(() => {
    const lines = document.querySelectorAll<SVGPathElement>("#sf-topology svg path[data-line]");
    lines.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = `${len} ${len}`;
      p.style.strokeDashoffset = `${len}`;
      animate(p, { strokeDashoffset: [{ value: [len, 0] }], duration: 700, delay: 160, easing: "easeOutQuad" });
    });
  }, []);
  return (
    <div id="sf-topology" ref={cardRef} className={`${softCard} p-6`}>
      <div className="grid lg:grid-cols-3 gap-6 items-center">
        <div className="space-y-4">
          {[
            { title: "Transport", desc: "TLS 1.3, HSTS, OCSP stapling, strict ciphers." },
            { title: "Identity & Access", desc: "RBAC, MFA for privileged, JIT elevation, device gates." },
            { title: "Runtime", desc: "Network segmentation, WAF + EDR, anomaly streams." },
            { title: "Data", desc: "AES-256 at rest, HSM keys, rotation + dual control." },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
              <div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-white/70 text-sm">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <svg viewBox="0 0 420 300" className="w-full">
            <defs>
              <linearGradient id="lineg" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#35E0FF" />
                <stop offset="100%" stopColor="#6C63FF" />
              </linearGradient>
            </defs>
            <path data-line d="M75 80 C 140 80, 150 80, 210 80" stroke="url(#lineg)" strokeWidth="3" fill="none" opacity="0.75"/>
            <path data-line d="M210 80 C 260 80, 260 150, 210 150" stroke="url(#lineg)" strokeWidth="3" fill="none" opacity="0.75"/>
            <path data-line d="M210 150 C 160 150, 160 220, 210 220" stroke="url(#lineg)" strokeWidth="3" fill="none" opacity="0.75"/>
            <path data-line d="M210 220 L 330 220" stroke="url(#lineg)" strokeWidth="3" fill="none" opacity="0.75"/>
            <path data-line d="M330 220 L 330 120" stroke="url(#lineg)" strokeWidth="3" fill="none" opacity="0.75"/>
          </svg>
          <div className="absolute left-[10px] top-[60px]"><NodeChip Icon={GlobeIcon} label="Client" tip="Browsers, SDKs, partners" /></div>
          <div className="absolute left-[190px] top-[60px]"><NodeChip Icon={Shield} label="Edge (WAF/CDN)" tip="Rate limit, bot shield, TLS" /></div>
          <div className="absolute left-[190px] top-[130px]"><NodeChip Icon={Link2} label="API Gateway" tip="AuthN/Z, request signing" /></div>
          <div className="absolute left-[190px] top-[200px]"><NodeChip Icon={Server} label="Services" tip="Isolation, health, retries" /></div>
          <div className="absolute left=[310px] top-[200px]"><NodeChip Icon={Database} label="Data (HSM/AES)" tip="XTS @ rest, dual control" /></div>
          <div className="absolute left-[8px] top-[130px]"><NodeChip Icon={BarChart3} label="SIEM/EDR" tip="Forwarded logs, EDR events" /></div>
        </div>
        <div className="space-y-4">
          {[
            { title: "Explainability", desc: "Every decision logs inputs + rationale for audit replay." },
            { title: "Resilience", desc: "Graceful degradation + circuit breakers for noisy deps." },
            { title: "Data Minimalism", desc: "Collect the least, retain the least—by default." },
            { title: "Zero Trust", desc: "Never trust device, network, or source without proof." },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
              <div>
                <div className="font-semibold">{b.title}</div>
                <div className="text-white/70 text-sm">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function NodeChip({ Icon, label, tip }:{ Icon:any; label:string; tip:string }) {
  const ref = useRef<HTMLDivElement>(null);
  useMagnet(ref, 10);
  return (
    <div ref={ref} className={`${glass} rounded-xl px-3 py-2 border inline-flex items-center gap-2`}>
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <div>
        <div className="text-sm font-medium leading-tight">{label}</div>
        <div className="text-[11px] text-white/60 -mt-1">{tip}</div>
      </div>
    </div>
  );
}

/* Feature Matrix */
type Feature = {
  name: string;
  surface: "Transport" | "Access" | "Data" | "Runtime" | "Observability";
  detail: string;
  status: "Active" | "Available" | "Planned";
  icon: any;
};
const ALL_FEATURES: Feature[] = [
  { name: "TLS 1.3 + HSTS", surface: "Transport", detail: "Strict ciphers, PFS, OCSP stapling.", status: "Active", icon: Link2 },
  { name: "Request Signing", surface: "Transport", detail: "Canonical string, SHA-256 HMAC.", status: "Active", icon: Link2 },
  { name: "RBAC + MFA", surface: "Access", detail: "Scoped tokens, privileged MFA, JIT.", status: "Active", icon: KeyRound },
  { name: "Device Gates", surface: "Access", detail: "Device posture & IP allowlists.", status: "Available", icon: Key },
  { name: "AES-256 XTS", surface: "Data", detail: "Envelope keys via HSM; rotation.", status: "Active", icon: Database },
  { name: "Data Masking", surface: "Data", detail: "PII redaction in logs & payloads.", status: "Active", icon: Eye },
  { name: "WAF + EDR", surface: "Runtime", detail: "Edge WAF and endpoint detection.", status: "Active", icon: Shield },
  { name: "Segmentation", surface: "Runtime", detail: "Isolated zones, service mesh.", status: "Active", icon: Server },
  { name: "SIEM Feeds", surface: "Observability", detail: "JSONL export to SIEM.", status: "Active", icon: BarChart3 },
  { name: "Anomaly Streams", surface: "Observability", detail: "Behavioral signals to ops.", status: "Available", icon: Activity },
  { name: "KMS Per-Tenant", surface: "Data", detail: "Customer-managed keys.", status: "Planned", icon: Lock },
];
function FeatureMatrix() {
  const [filters, setFilters] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const toggle = (set: React.Dispatch<React.SetStateAction<string[]>>, k: string) =>
    set(prev => prev.includes(k) ? prev.filter(x => x !== k) : [...prev, k]);
  const filtered = useMemo(() => {
    return ALL_FEATURES.filter(f => {
      const okSurface = filters.length ? filters.includes(f.surface) : true;
      const okStatus = status.length ? status.includes(f.status) : true;
      return okSurface && okStatus;
    });
  }, [filters, status]);
  return (
    <div className={`${softCard} p-6`} data-reveal-item>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {["Transport","Access","Data","Runtime","Observability"].map(s => (
          <button key={s}
                  onClick={() => toggle(setFilters, s)}
                  className={`px-3 py-1 rounded-full border text-sm transition ${filters.includes(s) ? "border-[#35E0FF]/60 bg-white/[0.06]" : "border-white/10 hover:bg-white/[0.04]"}`}>
            {s}
          </button>
        ))}
        <span className="mx-2 text-white/40">•</span>
        {["Active","Available","Planned"].map(s => (
          <button key={s}
                  onClick={() => toggle(setStatus, s)}
                  className={`px-3 py-1 rounded-full border text-sm transition ${status.includes(s) ? "border-[#35E0FF]/60 bg-white/[0.06]" : "border-white/10 hover:bg-white/[0.04]"}`}>
            {s}
          </button>
        ))}
        <button onClick={() => { setFilters([]); setStatus([]); }} className="ml-auto text-sm text-white/70 hover:text-white underline underline-offset-2">
          Reset
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((f, i) => <FeatureCard key={f.name + i} f={f} index={i} />)}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-white/60 py-10">No features match the current filters.</div>
        )}
      </div>
    </div>
  );
}
function FeatureCard({ f, index }:{ f: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    animate(ref.current, { opacity: [{ value: [0,1] }], translateY: [{ value: [12,0] }], duration: 300, delay: 45 * index, easing: "easeOutQuad" });
  }, [index]);
  return (
    <div
      ref={ref}
      className={`${softCard} p-5`}
      onMouseEnter={e => animate(e.currentTarget, { scale: 1.02, duration: 120, easing:"easeOutQuad"})}
      onMouseLeave={e => animate(e.currentTarget, { scale: 1, duration: 130, easing:"easeOutQuad"})}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <f.icon className="h-5 w-5 text-[#35E0FF]" />
          <div className="font-semibold">{f.name}</div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          f.status === "Active" ? "bg-emerald-500/20 text-emerald-300"
            : f.status === "Available" ? "bg-blue-500/20 text-blue-300"
            : "bg-yellow-500/20 text-yellow-300"}`}>
          {f.status}
        </span>
      </div>
      <div className="text-white/70 text-sm">{f.detail}</div>
      <div className="mt-3 text-[12px] text-white/50">Surface: {f.surface}</div>
    </div>
  );
}

/* Policy Builder */
function PolicyBuilder() {
  const [cfg, setCfg] = useState({
    tls: true, requestSigning: true, rbac: true, mfaPriv: true, ipAllow: false,
    masking: true, kms: "HSM", exportSIEM: true, retentionDays: 180,
  });
  const [copied, setCopied] = useState(false);
  const yaml = useMemo(() => ([
    `transport:`, `  tls_1_3: ${cfg.tls}`, `  request_signing: ${cfg.requestSigning}`,
    `access:`, `  rbac: ${cfg.rbac}`, `  mfa_privileged: ${cfg.mfaPriv}`, `  ip_allowlisting: ${cfg.ipAllow}`,
    `data:`, `  masking: ${cfg.masking}`, `  key_management: "${cfg.kms}"`,
    `audit:`, `  export_siem: ${cfg.exportSIEM}`, `  retention_days: ${cfg.retentionDays}`,
  ].join("\n")), [cfg]);
  const copy = async () => { await navigator.clipboard.writeText(yaml); setCopied(true); setTimeout(() => setCopied(false), 1200); };
  return (
    <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-8 items-start">
      <div className={`${softCard} p-6`}>
        <div className="flex items-center gap-2 mb-4"><Gauge className="h-5 w-5 text-[#35E0FF]" /><div className="font-semibold">Controls</div></div>
        <div className="space-y-4">
          <Toggle label="TLS 1.3" checked={cfg.tls} onChange={v => setCfg(s => ({...s, tls:v}))} />
          <Toggle label="Request signing (HMAC-SHA256)" checked={cfg.requestSigning} onChange={v => setCfg(s => ({...s, requestSigning:v}))} />
          <Toggle label="RBAC" checked={cfg.rbac} onChange={v => setCfg(s => ({...s, rbac:v}))} />
          <Toggle label="MFA for privileged" checked={cfg.mfaPriv} onChange={v => setCfg(s => ({...s, mfaPriv:v}))} />
          <Toggle label="IP allowlisting" checked={cfg.ipAllow} onChange={v => setCfg(s => ({...s, ipAllow:v}))} />
          <Toggle label="PII masking" checked={cfg.masking} onChange={v => setCfg(s => ({...s, masking:v}))} />
          <Select label="Key management" value={cfg.kms} onChange={v => setCfg(s => ({...s, kms:v}))} options={["HSM","KMS","Customer-managed"]} />
          <Toggle label="Export to SIEM" checked={cfg.exportSIEM} onChange={v => setCfg(s => ({...s, exportSIEM:v}))} />
          <Slider label="Retention (days)" value={cfg.retentionDays} min={30} max={365} onChange={v => setCfg(s => ({...s, retentionDays:v}))} />
        </div>
      </div>
      <div className={`${softCard} p-6`}>
        <div className="flex items-center gap-2 mb-3"><FileCode className="h-5 w-5 text-[#35E0FF]" /><div className="font-semibold">Generated policy (YAML)</div></div>
        <pre className="rounded-xl bg-black/40 border border-white/10 p-4 text-[13px] leading-relaxed whitespace-pre-wrap">{yaml}</pre>
        <div className="mt-3 flex gap-2">
          <button onClick={copy} className="text-sm inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 hover:bg-white/[0.06]">
            {copied ? (<><Check className="h-4 w-4 text-emerald-300" /> Copied</>) : (<><Copy className="h-4 w-4" /> Copy</>)}
          </button>
        </div>
        <p className="text-white/60 text-sm mt-3">Export to CI/CD or attach to change-control for audits.</p>
      </div>
    </div>
  );
}
function Toggle({ label, checked, onChange }:{ label:string; checked:boolean; onChange:(v:boolean)=>void }) {
  return (
    <label className="flex items-center justify-between cursor-pointer select-none">
      <span className="text-sm">{label}</span>
      <span onClick={() => onChange(!checked)} className={`relative w-12 h-7 rounded-full ${checked ? "bg-[#35E0FF]/40" : "bg-white/10"} border border-white/10 transition-colors`}>
        <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform ${checked ? "translate-x-5" : ""}`} />
      </span>
    </label>
  );
}
function Select({ label, value, onChange, options }:{ label:string; value:string; onChange:(v:string)=>void; options:string[] }) {
  return (
    <label className="block">
      <div className="text-sm mb-1">{label}</div>
      <select value={value} onChange={e=>onChange(e.target.value)} className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-3 py-2">
        {options.map(o => (<option key={o} value={o}>{o}</option>))}
      </select>
    </label>
  );
}
function Slider({ label, value, min, max, onChange }:{ label:string; value:number; min:number; max:number; onChange:(v:number)=>void }) {
  return (
    <label className="block">
      <div className="text-sm mb-1 flex justify-between"><span>{label}</span><span className="text-white/60">{value}</span></div>
      <input type="range" min={min} max={max} value={value} onChange={e=>onChange(parseInt(e.target.value))} className="w-full accent-[#35E0FF]" />
    </label>
  );
}

/* Breach Simulator */
function BreachSimulator() {
  const [running, setRunning] = useState<string | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const panel = useRef<HTMLDivElement>(null);

  const vectors = [
    { key: "sql", title: "SQL Injection", Icon: Database, defense: "Param binding + allow-lists + sanitizer." },
    { key: "xss", title: "Cross-Site Scripting", Icon: Bug, defense: "Output encoding + CSP + sanitizer." },
    { key: "ssrf", title: "SSRF", Icon: Link2, defense: "Egress policy + metadata filter + DNS pin." },
    { key: "mitm", title: "Man-in-the-Middle", Icon: Wifi, defense: "TLS 1.3 + pinning + strict HSTS." },
    { key: "bruteforce", title: "Credential Stuffing", Icon: Fingerprint, defense: "Rate limit + device checks + step-up." },
    { key: "ddos", title: "Volumetric DDoS", Icon: Cloud, defense: "Edge scrubbing + autoscale + circuit breakers." },
  ] as const;

  const burst = (x:number,y:number) => {
    const root = panel.current; if (!root) return;
    for (let i=0;i<12;i++){
      const s = document.createElement("span");
      s.className = "pointer-events-none absolute block h-[2px] w-[14px] bg-[#35E0FF]";
      s.style.left = x+"px"; s.style.top = y+"px";
      root.appendChild(s);
      animate(s, {
        translateX: (Math.random()-0.5)*140, translateY: (Math.random()-0.5)*110,
        rotate: Math.random()*360, opacity: [{ value: [1,0] }], duration: 520, easing: "easeOutCubic",
        complete: () => s.remove()
      });
    }
  };

  const run = (k: string, e: React.MouseEvent) => {
    setRunning(k);
    const rect = panel.current?.getBoundingClientRect();
    if (rect) burst(e.clientX - rect.left, e.clientY - rect.top);
    setLog(l => [`> Simulating ${k.toUpperCase()}...`, ...l].slice(0,8));
    setTimeout(() => {
      const d = vectors.find(v => v.key === k)?.defense || "Defense applied.";
      setLog(l => [`✔ ${d}`, ...l].slice(0,10));
      setRunning(null);
    }, 640);
  };

  return (
    <div className="grid lg:grid-cols-[0.95fr,1.05fr] gap-8 items-start">
      <div className={`${softCard} p-6`}>
        <div className="grid sm:grid-cols-2 gap-3">
          {vectors.map(v => (
            <button key={v.key} disabled={!!running}
              onClick={(e)=>run(v.key, e)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 border ${running ? "opacity-60 cursor-not-allowed" : "hover:bg-white/[0.06]"} border-white/10 transition`}>
              <v.Icon className="h-4 w-4 text-[#35E0FF]" />
              <span className="text-sm font-medium">{v.title}</span>
            </button>
          ))}
        </div>
        <p className="text-white/60 text-sm mt-3">Simulated inputs; production adds IDS/IPS, EDR, and stricter policies.</p>
      </div>
      <div ref={panel} className={`${softCard} relative p-6 min-h-[240px]`}>
        <div className="text-sm text-white/60 mb-2">Defense log</div>
        <div className="rounded-xl bg-black/40 border border-white/10 p-4 min-h-[170px]">
          {log.length === 0 ? (
            <div className="text-white/50 text-sm">No events yet. Choose a vector.</div>
          ) : (
            <ul className="space-y-2">
              {log.map((row, i) => (
                <li key={i} className="text-[13px]">
                  {row.startsWith("✔") ? <span className="text-emerald-300">{row}</span> : <span className="text-white/80">{row}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

/* Observability */
function ObservabilityPanel() {
  const tiles = [
    { Icon: Camera, title: "Immutable audit", desc: "Append-only logs with hash chains and export." },
    { Icon: BarChart3, title: "SIEM forwarding", desc: "JSONL streams to Splunk/ELK/Chronicle." },
    { Icon: Gauge, title: "SLOs that matter", desc: "p95 latency by route; error budgets by surface." },
    { Icon: BookOpen, title: "Explainability", desc: "Each decision stores inputs + rationale." },
  ] as const;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiles.map((t) => (
        <div key={t.title}
             className={`${softCard} p-5`}
             onMouseEnter={e => animate(e.currentTarget, { scale: 1.02, duration: 110, easing:"easeOutQuad"})}
             onMouseLeave={e => animate(e.currentTarget, { scale: 1, duration: 130, easing:"easeOutQuad"})}>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-3">
            <t.Icon className="h-6 w-6 text-white" />
          </div>
          <div className="font-semibold">{t.title}</div>
          <div className="text-white/70 text-sm mt-1">{t.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* Numbers */
function NumbersGrid() {
  const stats = [
    { value: "99.99%", label: "API Uptime", note: "SLA-backed" },
    { value: "<100ms", label: "Median Response", note: "Auth route" },
    { value: "256-bit", label: "Encryption", note: "AES @ rest (XTS)" },
    { value: "24/7", label: "Monitoring", note: "SOC in BLR" },
    { value: "0", label: "Critical Incidents", note: "Last 90 days" },
    { value: "72h", label: "Patch Turnaround", note: "Median" },
  ] as const;
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {stats.map((s) => (
        <div key={s.label}
             className="text-center rounded-xl bg-white/[0.06] p-6 border border-white/10"
             onMouseEnter={e=>animate(e.currentTarget, { scale: 1.02, duration: 110, easing:"easeOutQuad"})}
             onMouseLeave={e=>animate(e.currentTarget, { scale: 1, duration: 130, easing:"easeOutQuad"})}>
          <div className="text-2xl font-extrabold">{s.value}</div>
          <div className="text-white/80 mt-1">{s.label}</div>
          <div className="text-white/60 text-xs mt-1">{s.note}</div>
        </div>
      ))}
    </div>
  );
}

/* util cards */
function TrustCard({ refObj, Icon, title, desc }:{
  refObj: React.RefObject<HTMLDivElement>;
  Icon: any; title: string; desc: string;
}) {
  useTilt(refObj, 8);
  return (
    <div
      ref={refObj}
      className={`${glass} rounded-2xl p-5 will-change-transform transition-[box-shadow,transform] hover:shadow-[0_12px_40px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: 1.02, duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: 1, duration: 160 })}
      data-reveal
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-1">{desc}</div>
    </div>
  );
}
function SmallStat({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
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

/* incident response card (kept for other sections if you add) */
function IRCard({ step, time, desc, color }:{
  step: string; time: string; desc: string; color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bar = el.querySelector<HTMLElement>(".bar");
    if (!bar) return;
    // play once on mount (no scroll gating)
    (bar as HTMLElement).style.width = "0%";
    animate(bar, { width: [{ value: ["0%","100%"] }], duration: 700, easing: "easeOutQuad" });
  }, []);
  return (
    <div ref={ref} className={`rounded-2xl p-6 ${glass}`} data-reveal>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xl font-bold">{step}</div>
        <div className="text-sm bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full">{time}</div>
      </div>
      <div className="text-white/70 text-sm">{desc}</div>
      <div className="h-2 rounded-full bg-white/10 mt-4 overflow-hidden">
        <div className={`bar h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: "0%" }} />
      </div>
    </div>
  );
}

export default SecurityFeatures;
