// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

// const Security = () => {
//   const securityFeatures = [
//     {
//       icon: Lock,
//       title: 'End-to-End Encryption',
//       description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
//       details: [
//         'Military-grade encryption standards',
//         'Hardware security modules (HSM)',
//         'Key rotation and management',
//         'Zero-knowledge architecture'
//       ]
//     },
//     {
//       icon: Eye,
//       title: 'Real-time Monitoring',
//       description: '24/7 security operations center with AI-powered threat detection',
//       details: [
//         'Continuous security monitoring',
//         'Automated threat response',
//         'Behavioral anomaly detection',
//         'Incident response protocols'
//       ]
//     },
//     {
//       icon: Server,
//       title: 'Secure Infrastructure',
//       description: 'Multi-layered security architecture with redundancy and failover',
//       details: [
//         'Secure data centers',
//         'Network segmentation',
//         'DDoS protection',
//         'Physical security controls'
//       ]
//     },
//     {
//       icon: Key,
//       title: 'Access Control',
//       description: 'Zero-trust security model with multi-factor authentication',
//       details: [
//         'Role-based access control (RBAC)',
//         'Multi-factor authentication (MFA)',
//         'Privileged access management',
//         'Regular access reviews'
//       ]
//     }
//   ];

//   const securityMeasures = [
//     {
//       category: 'Data Protection',
//       measures: [
//         {
//           title: 'Data Localization',
//           description: 'All data stored within India as per RBI guidelines',
//           status: 'Implemented'
//         },
//         {
//           title: 'Data Classification',
//           description: 'Automated data classification and protection policies',
//           status: 'Active'
//         },
//         {
//           title: 'Data Loss Prevention',
//           description: 'Advanced DLP solutions to prevent data exfiltration',
//           status: 'Monitored'
//         }
//       ]
//     },
//     {
//       category: 'Network Security',
//       measures: [
//         {
//           title: 'Firewall Protection',
//           description: 'Next-generation firewalls with intrusion prevention',
//           status: 'Active'
//         },
//         {
//           title: 'VPN Access',
//           description: 'Secure remote access for authorized personnel',
//           status: 'Implemented'
//         },
//         {
//           title: 'Network Segmentation',
//           description: 'Micro-segmentation to limit lateral movement',
//           status: 'Deployed'
//         }
//       ]
//     },
//     {
//       category: 'Application Security',
//       measures: [
//         {
//           title: 'Secure Development',
//           description: 'Security integrated into development lifecycle',
//           status: 'Ongoing'
//         },
//         {
//           title: 'Code Scanning',
//           description: 'Automated static and dynamic code analysis',
//           status: 'Continuous'
//         },
//         {
//           title: 'Penetration Testing',
//           description: 'Regular security assessments by certified experts',
//           status: 'Quarterly'
//         }
//       ]
//     }
//   ];

//   const threatIntelligence = [
//     {
//       title: 'Advanced Persistent Threats (APT)',
//       description: 'Protection against sophisticated, long-term cyber attacks',
//       mitigation: 'AI-powered behavioral analysis and threat hunting'
//     },
//     {
//       title: 'Insider Threats',
//       description: 'Detection of malicious activities by internal users',
//       mitigation: 'User behavior analytics and privileged access monitoring'
//     },
//     {
//       title: 'Phishing & Social Engineering',
//       description: 'Protection against deceptive attacks targeting employees',
//       mitigation: 'Security awareness training and email security solutions'
//     },
//     {
//       title: 'Zero-Day Exploits',
//       description: 'Defense against unknown vulnerabilities and attacks',
//       mitigation: 'Behavioral detection and virtual patching technologies'
//     }
//   ];

//   const incidentResponse = [
//     {
//       phase: 'Detection',
//       description: 'Automated threat detection and alert generation',
//       timeframe: '< 5 minutes',
//       tools: ['SIEM', 'EDR', 'Network Monitoring']
//     },
//     {
//       phase: 'Analysis',
//       description: 'Threat assessment and impact evaluation',
//       timeframe: '< 15 minutes',
//       tools: ['Threat Intelligence', 'Forensics', 'Risk Assessment']
//     },
//     {
//       phase: 'Containment',
//       description: 'Immediate threat isolation and damage limitation',
//       timeframe: '< 30 minutes',
//       tools: ['Automated Response', 'Network Isolation', 'Access Revocation']
//     },
//     {
//       phase: 'Recovery',
//       description: 'System restoration and business continuity',
//       timeframe: '< 2 hours',
//       tools: ['Backup Systems', 'Disaster Recovery', 'Service Restoration']
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
//               Enterprise Security
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Bank-grade security infrastructure protecting your financial data with advanced threat detection, 
//               encryption, and compliance with cybersecurity regulations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Security Features */}
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
//               Multi-Layered Security Architecture
//             </h2>
//             <p className="text-xl text-gray-300">
//               Comprehensive security controls protecting every aspect of your data and operations
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {securityFeatures.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02, rotateY: 5 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                       <feature.icon className="h-6 w-6 text-white" />
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
//                     <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
//                     <ul className="space-y-2">
//                       {feature.details.map((detail, idx) => (
//                         <li key={idx} className="flex items-center text-gray-300">
//                           <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security Measures */}
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
//               Comprehensive Security Controls
//             </h2>
//             <p className="text-xl text-gray-300">
//               Detailed security measures across all operational domains
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {securityMeasures.map((category, index) => (
//               <motion.div
//                 key={category.category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.category}</h3>
//                 <div className="space-y-4">
//                   {category.measures.map((measure, idx) => (
//                     <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="text-white font-medium">{measure.title}</h4>
//                         <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
//                           {measure.status}
//                         </span>
//                       </div>
//                       <p className="text-gray-400 text-sm">{measure.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Threat Intelligence */}
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
//               Advanced Threat Protection
//             </h2>
//             <p className="text-xl text-gray-300">
//               Proactive defense against evolving cyber threats and attack vectors
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {threatIntelligence.map((threat, index) => (
//               <motion.div
//                 key={threat.title}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <AlertTriangle className="h-8 w-8 text-orange-400" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2">{threat.title}</h3>
//                     <p className="text-gray-400 mb-4">{threat.description}</p>
//                     <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
//                       <p className="text-cyan-400 text-sm font-medium mb-1">Mitigation Strategy:</p>
//                       <p className="text-gray-300 text-sm">{threat.mitigation}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Incident Response */}
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
//               Incident Response Framework
//             </h2>
//             <p className="text-xl text-gray-300">
//               Rapid response and recovery procedures to minimize impact and restore operations
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {incidentResponse.map((phase, index) => (
//               <motion.div
//                 key={phase.phase}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="text-2xl font-bold text-cyan-400">{index + 1}</div>
//                     <div className="text-sm bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
//                       {phase.timeframe}
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-semibold text-white mb-3">{phase.phase}</h3>
//                   <p className="text-gray-400 mb-4 text-sm">{phase.description}</p>
//                   <div className="space-y-1">
//                     {phase.tools.map((tool, idx) => (
//                       <div key={idx} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded inline-block mr-1">
//                         {tool}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {index < incidentResponse.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
//                     <Zap className="h-6 w-6 text-cyan-400" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Security Statistics */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                 Security Performance Metrics
//               </h2>
//               <p className="text-xl text-gray-300">
//                 Measurable security outcomes and threat prevention statistics
//               </p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Shield className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">99.99%</div>
//                 <div className="text-gray-300">Threat Detection Rate</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Zap className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">{"< 5min"}</div>
//                 <div className="text-gray-300">Threat Response Time</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Lock className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">Zero</div>
//                 <div className="text-gray-300">Data Breaches</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Eye className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
//                 <div className="text-gray-300">Security Monitoring</div>
//               </div>
//             </div>
//           </motion.div>
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
//               Secure Your Financial Operations
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Partner with Fraud Buster to implement enterprise-grade security measures 
//               that protect your business and comply with financial regulations.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Schedule Security Assessment
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Download Security Whitepaper
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Security;






//<-----------------------------------------New Design------------------------------------------------------------------------------------------------------------










//<-----------------------------------------New Design------------------------------------------------------------------------------------------------------------


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Shield, ShieldCheck, Lock, Eye, Server, Key, AlertTriangle, Zap,
  Activity, Database, Globe as GlobeIcon, FileCheck, Bug, Link2, Wifi,
  TerminalSquare, KeyRound, CheckCircle, Clock, Cpu
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";
import { Link } from "react-router-dom";

/* ========================= Utilities & Shared ========================= */

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

/* Cursor particles + micro dot */
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

/* Top scroll progress */
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

/* Magnet micro-interaction */
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

/* Tilt card micro-interaction */
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

/* ========================= Security Page ========================= */

const Security: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Parallax grid background */
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

  /* Hero: cipher scramble + typewriter + hash rain */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const heroCodeRef = useRef<HTMLPreElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current || reduced) return;
    const el = headlineRef.current;
    const text = el.textContent || "";
    const chars = "!@#$%^&*()_+{}|:<>?~[];,.=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let frame = 0;
    const target = text.split("");
    const scramble = setInterval(() => {
      frame++;
      el.innerHTML = target
        .map((c, i) => {
          if (c === " ") return "&nbsp;";
          if (frame / 2 > i) return c;
          return `<span class="opacity-70">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        })
        .join("");
      if (frame / 2 > target.length) clearInterval(scramble);
    }, 18);
    return () => clearInterval(scramble);
  }, [reduced]);

  useEffect(() => {
    const code =
`# transport
TLS 1.3 + HSTS + OCSP stapling
# storage-at-rest
AES-256 (XTS) + envelope keys (HSM)
# access
Scoped tokens + RBAC + MFA
# audit
Immutable logs + retention + export`;
    let i = 0;
    const id = setInterval(() => {
      if (!heroCodeRef.current) return;
      heroCodeRef.current.textContent = code.slice(0, (i += 2));
      if (i >= code.length) clearInterval(id);
    }, 12);
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
        translateY: [{ from: -160, to: 160 }],
        opacity: [{ from: 0.1, to: 0.45 }, { to: 0.1 }],
        delay: Math.random() * 800,
        duration: 1400 + Math.random() * 800,
        loop: true,
        ease: "inOut(2)"
      });
    }
  }, [reduced]);

  /* Intersection-based reveals */
  const sectionsRef = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const nodes = sectionsRef.current || [];
    if (!nodes.length || reduced) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const tgts = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
        animate(tgts, {
          opacity: [{ from: 0, to: 1 }],
          translateY: [{ from: 22, to: 0 }],
          delay: stagger(36),
          duration: 520,
          ease: "out(3)",
        });
        io.unobserve(e.target);
      });
    }, { threshold: 0.18 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);

  /* Live metrics */
  const [live, setLive] = useState({ incidents: 0, p99: 480, blocked: 0 });
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setLive((s) => ({
        incidents: s.incidents + (Math.random() > 0.9 ? 1 : 0),
        p99: Math.max(360, Math.min(520, s.p99 + Math.floor(random(-8, 8, 0)))),
        blocked: s.blocked + (Math.random() > 0.8 ? 1 : 0),
      }));
    }, 1200);
    return () => clearInterval(id);
  }, [reduced]);

  /* CTA magnets */
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1Ref, 20);
  useMagnet(cta2Ref, 16);

  /* =================== API Security Explainer tabs =================== */
  const tabs = [
    {
      key: "transport",
      title: "Transport",
      Icon: Link2,
      code: `TLS 1.3 everywhere\nHSTS + OCSP stapling\nPerfect forward secrecy (ECDHE)\nStrict ciphers; ALPN/HTTP2`,
      blurb: "In-flight protection with modern TLS and hardened policies.",
      path: "M80,10 L110,40 L110,90 L50,130 L10,80 L40,30 Z" // hex-like
    },
    {
      key: "storage",
      title: "At Rest",
      Icon: Database,
      code: `AES-256 XTS for data files\nEnvelope encryption via HSM\nKey rotation + dual control\nS3/SSE-KMS where applicable`,
      blurb: "Everything encrypted at rest with HSM-backed keys.",
      path: "M80,12 C120,20 130,60 110,100 C92,130 40,130 18,92 C4,68 20,22 80,12 Z" // blob 1
    },
    {
      key: "access",
      title: "Access",
      Icon: KeyRound,
      code: `RBAC with scoped tokens\nMFA for privileged ops\nJust-in-time (JIT) elevation\nIP allowlisting & device checks`,
      blurb: "Least-privilege access with strong authentication.",
      path: "M80,14 C132,18 140,64 112,110 C92,138 44,130 16,88 C-2,60 24,18 80,14 Z" // blob 2
    },
    {
      key: "audit",
      title: "Audit",
      Icon: FileCheck,
      code: `Append-only audit trails\nTamper-evident hashing\nRetention & export controls\nSIEM forwarding (JSONL)`,
      blurb: "Immutable, exportable evidence for every decision.",
      path: "M80,10 L140,70 L80,130 L20,70 Z" // diamond
    }
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["key"]>("transport");
  const activeIdx = tabs.findIndex(t => t.key === activeTab);
  const morphRef = useRef<SVGPathElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (!morphRef.current) return;
    // quick morph: animate d with anime's attribute tween
    animate(morphRef.current, {
      d: [{ to: tabs[activeIdx].path }],
      duration: 420,
      ease: "out(3)",
    });
    if (codeRef.current) {
      animate(codeRef.current, {
        opacity: [{ from: 0, to: 1 }],
        translateY: [{ from: 8, to: 0 }],
        duration: 260,
        ease: "out(3)"
      });
    }
  }, [activeIdx]);

  /* =================== Attack Lab (interactive demo) =================== */
  const attackVectors = [
    { key: "sql", title: "SQL Injection", Icon: Database, desc: "Malicious input tries to break query boundaries." },
    { key: "xss", title: "Cross-Site Scripting", Icon: Bug, desc: "Injected scripts attempt to execute in your app." },
    { key: "ssrf", title: "SSRF", Icon: Link2, desc: "Requests attempt to pivot to internal services." },
    { key: "mitm", title: "Man-in-the-Middle", Icon: Wifi, desc: "Adversary intercepts network traffic on route." },
  ] as const;

  const [running, setRunning] = useState<string | null>(null);
  const [labLog, setLabLog] = useState<string[]>([]);
  const labPanelRef = useRef<HTMLDivElement>(null);

  const runAttack = (key: string) => {
    setRunning(key);
    setLabLog((l) => [`> Simulating ${key.toUpperCase()}...`, ...l].slice(0, 6));
    const defense = {
      sql: "Param binding + allow-list blocked the payload.",
      xss: "Output encoding + CSP neutralized the script.",
      ssrf: "Egress policy & metadata filter denied the target.",
      mitm: "TLS 1.3 + cert pinning protected the session."
    } as Record<string, string>;
    // animate panel pulse
    if (labPanelRef.current) {
      animate(labPanelRef.current, {
        boxShadow: [
          { to: "0 0 0 0 rgba(53,224,255,0)" },
          { to: "0 0 48px 8px rgba(53,224,255,0.25)" },
          { to: "0 0 0 0 rgba(53,224,255,0)" }
        ],
        duration: 520,
        ease: "out(3)"
      });
    }
    setTimeout(() => {
      setLabLog((l) => [`✔ ${defense[key]}`, ...l].slice(0, 8));
      setRunning(null);
    }, 700);
  };

  /* =================== Threat timeline (path draw) =================== */
  const lineRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!timelineRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || !lineRef.current) return;
        const p = lineRef.current;
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len} ${len}`;
        p.style.strokeDashoffset = `${len}`;
        animate(p, { strokeDashoffset: [{ from: len, to: 0 }], duration: 900, ease: "out(2)" });
        io.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    io.observe(timelineRef.current);
    return () => io.disconnect();
  }, []);

  /* ============== Tilt refs for Trust Grid cards ============== */
  const tRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  tRefs.forEach((r) => useTilt(r, 8));

  /* ============================== Render ============================== */

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

      {/* Background grid + gradients */}
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

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div ref={rainRef} className="absolute left-0 right-0 top-10 mx-auto flex h-[220px] w-[80%] max-w-5xl" />
        </div>
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <ShieldCheck className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Security · Enterprise-grade</span>
              </div>

              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.04]">
                Bank-grade security, human-grade clarity
              </h1>

              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                Designed for <strong>Fintech</strong>, <strong>NBFCs</strong>, and <strong>Digital Banks</strong>.
                From transport to audit, your data is protected—and every decision is explainable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <Link
                  ref={cta1Ref}
                  to="/api"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Read Security Docs
                </Link>
                <Link
                  ref={cta2Ref}
                  to="/contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Request Assessment
                </Link>
              </div>

              {/* Live signals */}
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl" data-reveal>
                <Metric icon={Activity} label="p99 (auth)" value={`${live.p99}ms`} />
                <Metric icon={Shield} label="Blocked threats" value={String(live.blocked)} />
                <Metric icon={AlertTriangle} label="Open incidents" value={String(live.incidents)} />
              </div>
            </div>

            <div className={`rounded-2xl ${glass} p-6`}>
              <div className="text-xs text-white/60 mb-2">Security posture (live)</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-3">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/[0.06] border border-white/10">
                  <TerminalSquare className="h-4 w-4 text-[#35E0FF]" />
                  <span className="text-sm">fraudbuster security posture</span>
                </div>
                <pre ref={heroCodeRef} className="mt-3 text-[12.5px] leading-relaxed min-h-[160px]" />
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={Lock} text="TLS 1.3" />
                <Badge icon={Shield} text="SOC 2 Pathways" />
                <Badge icon={FileCheck} text="Audit trails" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== TRUST GRID ======================== */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Trust, engineered</h2>
            <p className="text-lg text-white/70" data-reveal>Security isn’t a feature; it’s the architecture.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "Encryption", desc: "TLS 1.3 in transit; AES-256 at rest; HSM-backed keys." },
              { icon: Key, title: "Access", desc: "RBAC, MFA, JIT elevation, IP allowlists, device checks." },
              { icon: Server, title: "Isolation", desc: "Network segmentation and per-tenant boundaries." },
              { icon: Eye, title: "Observability", desc: "SIEM, anomaly streams, immutable audit trails." },
            ].map((c, i) => (
              <TrustCard key={c.title} refObj={tRefs[i]} Icon={c.icon} title={c.title} desc={c.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* =================== API SECURITY EXPLAINER =================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[1] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>API security — explained</h2>
            <p className="text-lg text-white/70" data-reveal>Choose a layer to see how it works in practice.</p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            {/* Morphing shield */}
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="text-sm text-white/60 mb-2">Security shape</div>
              <div className="relative aspect-square rounded-xl bg-black/40 border border-white/10 grid place-items-center overflow-hidden">
                <svg width="280" height="280" viewBox="0 0 160 160" className="text-[#35E0FF]">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#35E0FF" />
                      <stop offset="100%" stopColor="#6C63FF" />
                    </linearGradient>
                  </defs>
                  <path
                    ref={morphRef}
                    d={tabs[activeIdx].path}
                    fill="url(#g1)"
                    opacity="0.25"
                  />
                  <path
                    d={tabs[activeIdx].path}
                    fill="none"
                    stroke="url(#g1)"
                    strokeWidth="2"
                  />
                </svg>

                {/* pulse on tab change */}
                <div className="absolute inset-0 pointer-events-none">
                  <PulseOnChange value={activeIdx} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 border transition ${
                      t.key === activeTab ? "border-[#35E0FF]/60 bg-white/[0.08] shadow-[0_10px_30px_rgba(53,224,255,0.2)]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    <t.Icon className="h-4 w-4 text-[#35E0FF]" />
                    <span className="text-sm font-medium">{t.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Animated code & copy */}
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="text-sm text-white/60 mb-2">{tabs[activeIdx].title}</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4">
                <pre ref={codeRef} className="text-[13px] leading-relaxed whitespace-pre-wrap">{tabs[activeIdx].code}</pre>
              </div>
              <p className="text-white/75 mt-4">{tabs[activeIdx].blurb}</p>

              <div className="grid sm:grid-cols-3 gap-3 mt-5">
                <SmallStat icon={Shield} label="Hardening" value="CIS + custom" />
                <SmallStat icon={Clock} label="Patch cadence" value="Weekly" />
                <SmallStat icon={Cpu} label="Runtime guards" value="WAF + EDR" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== ATTACK LAB (INTERACTIVE) =================== */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Attack lab — see defenses in action</h2>
            <p className="text-lg text-white/70" data-reveal>Launch a simulated attack to watch what blocks it.</p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="grid grid-cols-2 gap-3">
                {attackVectors.map((v) => (
                  <button
                    key={v.key}
                    onClick={() => runAttack(v.key)}
                    disabled={running !== null}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 border transition ${
                      running ? "opacity-60 cursor-not-allowed" : "hover:translate-y-[1px]"
                    } ${running === v.key ? "border-[#35E0FF]/60 bg-white/[0.08] shadow-[0_10px_30px_rgba(53,224,255,0.2)]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"}`}
                  >
                    <v.Icon className="h-4 w-4 text-[#35E0FF]" />
                    <span className="text-sm font-medium">{v.title}</span>
                  </button>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-3">
                These simulate inputs only. Production uses stricter policies (WAF/EDR/IDS, allow-lists, sanitizer layers).
              </p>
            </div>

            <div ref={labPanelRef} className={`rounded-2xl ${glass} p-6 min-h-[220px]`} data-reveal>
              <div className="text-sm text-white/60 mb-2">Defense log</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 min-h-[160px]">
                {labLog.length === 0 ? (
                  <div className="text-white/50 text-sm">No events yet. Choose an attack vector to simulate.</div>
                ) : (
                  <ul className="space-y-2">
                    {labLog.map((row, i) => (
                      <li key={i} className="text-[13px]">
                        {row.startsWith("✔") ? (
                          <span className="text-emerald-300">{row}</span>
                        ) : (
                          <span className="text-white/80">{row}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================== COMPLIANCE RIBBON =================== */}
      <section className="py-20" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <div className="mx-10 max-w-none">
          <div className="flex flex-wrap gap-3 justify-center" data-reveal>
            {[
              { Icon: Shield, text: "SOC 2 pathways" },
              { Icon: FileCheck, text: "KYC/KYB readiness" },
              { Icon: GlobeIcon, text: "Data residency (IN)" },
              { Icon: Lock, text: "AES-256 & HSM" },
              { Icon: Eye, text: "SIEM + audit export" },
            ].map(({ Icon, text }) => (
              <span key={text} className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2 text-sm`}>
                <Icon className="h-4 w-4" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =================== THREAT TIMELINE =================== */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[4] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Threats we neutralize</h2>
            <p className="text-lg text-white/70" data-reveal>From day-one exploits to insider risks.</p>
          </div>

          <div ref={timelineRef} className="relative">
            <svg viewBox="0 0 1000 160" className="w-full">
              <path
                ref={lineRef}
                d="M20 140 C 180 40, 320 40, 480 140 S 820 240, 980 140"
                stroke="url(#grad1)"
                strokeWidth="3"
                fill="none"
                opacity="0.65"
              />
              <defs>
                <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#35E0FF" />
                  <stop offset="100%" stopColor="#6C63FF" />
                </linearGradient>
              </defs>
            </svg>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {[
                { title: "Zero-days", desc: "Behavioral + virtual patching at the edge." },
                { title: "Insider risks", desc: "Privileged session monitoring & JIT access." },
                { title: "Account takeovers", desc: "Device & velocity checks; 2-step confirms." },
                { title: "Data exfiltration", desc: "DLP controls; scope-bounded tokens." },
              ].map((t) => (
                <div key={t.title} className={`rounded-2xl p-5 ${glass}`} data-reveal>
                  <div className="text-[#35E0FF] font-semibold">{t.title}</div>
                  <div className="text-white/70 text-sm">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================== INCIDENT RESPONSE =================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[5] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Incident response — measured</h2>
            <p className="text-lg text-white/70" data-reveal>Automations backed by humans on call.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "Detect", time: "< 5m", desc: "SIEM + EDR + streams", color: "from-[#35E0FF] to-[#6C63FF]" },
              { step: "Analyze", time: "< 15m", desc: "Triage + forensics", color: "from-[#6C63FF] to-[#4AF2C6]" },
              { step: "Contain", time: "< 30m", desc: "Isolate + revoke", color: "from-[#4AF2C6] to-[#35E0FF]" },
              { step: "Recover", time: "< 2h", desc: "Restore + validate", color: "from-[#35E0FF] to-[#6C63FF]" },
            ].map((s) => (
              <IRCard key={s.step} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* =================== CTA =================== */}
      <section className="py-24">
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Security is a promise we can prove</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
              Sandbox access, policies, and audits—ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Schedule Security Review
              </Link>
              <Link
                to="/api"
                className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
              >
                Read the Security Docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ========================= Subcomponents ========================= */

function Metric({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
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

function Badge({ icon: Icon, text }:{ icon: any; text: string }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function TrustCard({ refObj, Icon, title, desc }:{
  refObj: React.RefObject<HTMLDivElement>;
  Icon: any; title: string; desc: string;
}) {
  useTilt(refObj, 8);
  return (
    <div
      ref={refObj}
      className={`${glass} rounded-2xl p-5 will-change-transform transition-[box-shadow,transform] hover:shadow-[0_12px_40px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.02 }], duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 160 })}
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

/* Morph pulse effect keyed by value changes */
function PulseOnChange({ value }: { value: number }) {
  const r1 = useRef<HTMLDivElement>(null);
  const r2 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = [r1.current, r2.current].filter(Boolean) as HTMLElement[];
    els.forEach((el, idx) => {
      el.style.opacity = "1";
      el.style.transform = "translate(-50%, -50%) scale(0.6)";
      animate(el, {
        scale: [{ from: 0.6, to: 1.2 }],
        opacity: [{ from: 0.3 - idx * 0.1, to: 0 }],
        duration: 600 + idx * 120,
        ease: "out(3)"
      });
    });
  }, [value]);
  return (
    <>
      <div ref={r1} className="absolute left-1/2 top-1/2 h-[9rem] w-[9rem] rounded-full border border-[#35E0FF]/40 opacity-0" />
      <div ref={r2} className="absolute left-1/2 top-1/2 h-[12rem] w-[12rem] rounded-full border border-[#6C63FF]/30 opacity-0" />
    </>
  );
}

function IRCard({ step, time, desc, color }:{
  step: string; time: string; desc: string; color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const bar = el.querySelector<HTMLElement>(".bar");
    if (!bar) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        bar.style.width = "0%";
        animate(bar, { width: [{ from: "0%", to: "100%" }], duration: 700, ease: "out(3)" });
        io.unobserve(el);
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
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

export default Security;
