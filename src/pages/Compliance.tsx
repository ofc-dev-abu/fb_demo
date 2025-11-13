// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, CheckCircle, FileText, Award, Building, Users, Lock, TrendingUp } from 'lucide-react';

// const Compliance = () => {
//   const certifications = [
//     {
//       title: 'ISO 27001',
//       description: 'Information Security Management System certification',
//       status: 'Certified',
//       validUntil: '2026-03-15',
//       icon: Shield
//     },
//     {
//       title: 'SOC 2 Type II',
//       description: 'Security, Availability, and Confidentiality controls',
//       status: 'Certified',
//       validUntil: '2025-12-31',
//       icon: Lock
//     },
//     {
//       title: 'PCI DSS Level 1',
//       description: 'Payment Card Industry Data Security Standard',
//       status: 'Compliant',
//       validUntil: '2025-09-30',
//       icon: Award
//     },
//     {
//       title: 'Regulatory Compliance',
//       description: 'Financial regulatory guidelines adherence',
//       status: 'Compliant',
//       validUntil: 'Ongoing',
//       icon: Building
//     }
//   ];

//   const complianceFrameworks = [
//     {
//       title: 'Payment System Security Guidelines',
//       description: 'Full compliance with digital payment security guidelines and data localization requirements',
//       requirements: [
//         'Data localization requirements',
//         'Real-time fraud monitoring',
//         'Audit trail maintenance',
//         'Incident reporting protocols'
//       ]
//     },
//     {
//       title: 'Financial Institution Regulatory Framework',
//       description: 'Specialized compliance support for Financial Institutions',
//       requirements: [
//         'Risk management framework',
//         'Customer due diligence',
//         'Anti-money laundering (AML)',
//         'Know Your Customer (KYC) compliance'
//       ]
//     },
//     {
//       title: 'Information Technology Compliance',
//       description: 'Compliance with cybersecurity and data protection laws',
//       requirements: [
//         'Data protection measures',
//         'Cybersecurity incident response',
//         'Digital signature compliance',
//         'Electronic records management'
//       ]
//     },
//     {
//       title: 'Account Aggregator Framework',
//       description: 'Account Aggregator ecosystem compliance for financial data sharing',
//       requirements: [
//         'Consent management',
//         'Data encryption standards',
//         'API security protocols',
//         'Privacy by design implementation'
//       ]
//     }
//   ];

//   const auditReports = [
//     {
//       title: 'Annual Security Audit 2024',
//       auditor: 'Independent Security Auditor',
//       date: '2024-12-15',
//       status: 'Passed',
//       scope: 'Information Security Management System'
//     },
//     {
//       title: 'Regulatory Compliance Assessment',
//       auditor: 'Compliance Auditor',
//       date: '2024-11-20',
//       status: 'Compliant',
//       scope: 'Payment System Guidelines Adherence'
//     },
//     {
//       title: 'Data Localization Audit',
//       auditor: 'Data Security Auditor',
//       date: '2024-10-10',
//       status: 'Verified',
//       scope: 'Data Storage and Processing Compliance'
//     }
//   ];

//   const riskManagement = [
//     {
//       category: 'Operational Risk',
//       measures: [
//         'Business continuity planning',
//         'Disaster recovery procedures',
//         '24/7 system monitoring',
//         'Incident response protocols'
//       ]
//     },
//     {
//       category: 'Cybersecurity Risk',
//       measures: [
//         'Multi-layered security architecture',
//         'Regular penetration testing',
//         'Employee security training',
//         'Threat intelligence monitoring'
//       ]
//     },
//     {
//       category: 'Regulatory Risk',
//       measures: [
//         'Continuous regulatory monitoring',
//         'Compliance officer oversight',
//         'Regular policy updates',
//         'Regulatory change management'
//       ]
//     },
//     {
//       category: 'Data Privacy Risk',
//       measures: [
//         'Privacy by design principles',
//         'Data minimization practices',
//         'Access control mechanisms',
//         'Regular privacy assessments'
//       ]
//     }
//   ];

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
//               <Shield className="h-10 w-10 text-white" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Compliance & Security
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Fraud Buster maintains the highest standards of regulatory compliance and security, 
//               ensuring your business meets all financial regulations and industry best practices.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Certifications */}
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
//               Certifications & Standards
//             </h2>
//             <p className="text-xl text-gray-300">
//               Industry-recognized certifications that validate our security and compliance practices
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {certifications.map((cert, index) => (
//               <motion.div
//                 key={cert.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                   <cert.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
//                 <div className="flex items-center justify-center mb-2">
//                   <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
//                   <span className="text-green-400 font-medium">{cert.status}</span>
//                 </div>
//                 <p className="text-gray-500 text-xs">Valid until: {cert.validUntil}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compliance Frameworks */}
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
//               Regulatory Compliance Frameworks
//             </h2>
//             <p className="text-xl text-gray-300">
//               Comprehensive compliance with financial regulations and international standards
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {complianceFrameworks.map((framework, index) => (
//               <motion.div
//                 key={framework.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
//                 <p className="text-gray-300 mb-6">{framework.description}</p>
//                 <div className="space-y-3">
//                   {framework.requirements.map((requirement, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
//                       <span className="text-gray-300">{requirement}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Risk Management */}
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
//               Risk Management Framework
//             </h2>
//             <p className="text-xl text-gray-300">
//               Comprehensive risk assessment and mitigation strategies across all operational areas
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {riskManagement.map((risk, index) => (
//               <motion.div
//                 key={risk.category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <h3 className="text-lg font-semibold text-cyan-400 mb-4">{risk.category}</h3>
//                 <div className="space-y-3">
//                   {risk.measures.map((measure, idx) => (
//                     <div key={idx} className="flex items-start">
//                       <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                       <span className="text-gray-300 text-sm">{measure}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Audit Reports */}
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
//               Recent Audit Reports
//             </h2>
//             <p className="text-xl text-gray-300">
//               Independent verification of our compliance and security practices
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {auditReports.map((report, index) => (
//               <motion.div
//                 key={report.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <FileText className="h-8 w-8 text-cyan-400" />
//                   <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     report.status === 'Passed' || report.status === 'Compliant' || report.status === 'Verified'
//                       ? 'bg-green-500/20 text-green-400'
//                       : 'bg-yellow-500/20 text-yellow-400'
//                   }`}>
//                     {report.status}
//                   </span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2">{report.title}</h3>
//                 <p className="text-gray-400 text-sm mb-3">{report.scope}</p>
//                 <div className="flex items-center justify-between text-sm">
//                   <span className="text-gray-300">By {report.auditor}</span>
//                   <span className="text-gray-400">{report.date}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Compliance Statistics */}
//       <section className="py-24 bg-black/20">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                 Compliance by the Numbers
//               </h2>
//               <p className="text-xl text-gray-300">
//                 Our commitment to compliance and security excellence
//               </p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Shield className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
//                 <div className="text-gray-300">Regulatory Compliance</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Award className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
//                 <div className="text-gray-300">Certifications</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <Users className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
//                 <div className="text-gray-300">Compliance Monitoring</div>
//               </div>

//               <div className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                   <TrendingUp className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
//                 <div className="text-gray-300">Audit Success Rate</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
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
//               Need Compliance Support?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Our compliance experts are ready to help you navigate financial 
//               regulations and implement robust security measures.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Schedule Compliance Consultation
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Download Compliance Guide
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Compliance;
















//<---------------------------------------------------------------------------------------------------------------------------------------------------------------------







//<---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import {
  Shield, CheckCircle, FileText, Award, Building, Users, Lock, TrendingUp,
  ShieldCheck, Info, Link as LinkIcon, ChevronRight, Download,
  ClipboardCheck, Copy, ListChecks, Sparkles, BadgeCheck, BookOpen, ScrollText, MessageSquare, ExternalLink
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* =============================================================================
   Minimal UI primitives (Tailwind only)
   ============================================================================= */
const Pill: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`inline-flex items-center rounded-full border px-3 py-1 text-[12px] font-semibold border-white/15 bg-white/10 text-white ${className}`} {...p} />
);

const UIButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", ...p }) => (
  <button
    className={`relative overflow-hidden inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 border border-white/10 bg-white/10 hover:bg-white/20 transition-colors ${className}`}
    {...p}
  />
);

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className = "", ...p }, ref) => (
  <div ref={ref} className={`rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md ${className}`} {...p} />
));
Card.displayName = "Card";

/* =============================================================================
   Motion + Effects Utilities (animejs only)
   ============================================================================= */
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

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.min(1, window.scrollY / max);
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

/* Cursor particles + cursor dot */
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
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 16);
        g.addColorStop(0, `rgba(124,92,255,${0.55 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 16, 0, Math.PI * 2); ctx.fill();
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

/* Reveal on scroll via anime.js */
function useAnimeReveal(selector: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement, {
              opacity: [0, 1],
              translateY: [18, 0],
              easing: "cubicBezier(.2,.75,.35,1)",
              duration: 520,
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector]);
}

/* Snappy hover */
function liftGlow(el: HTMLElement, dir: "enter" | "leave") {
  animate(el, {
    scale: dir === "enter" ? [1, 1.02] : [1.02, 1],
    translateY: dir === "enter" ? [0, -4] : [-4, 0],
    duration: dir === "enter" ? 180 : 200,
    easing: "easeOutQuad",
  });
  animate(el, {
    boxShadow:
      dir === "enter"
        ? ["0px 0px 0px rgba(0,0,0,0)", "0px 12px 28px rgba(53,224,255,0.18)"]
        : ["0px 12px 28px rgba(53,224,255,0.18)", "0px 0px 0px rgba(0,0,0,0)"],
    duration: 220,
    easing: "easeOutQuad",
  });
}

/* Ripple */
function ripple(e: React.MouseEvent) {
  const t = e.currentTarget as HTMLElement;
  const R = document.createElement("span");
  const rect = t.getBoundingClientRect();
  const d = Math.max(rect.width, rect.height);
  R.style.position = "absolute";
  R.style.left = e.clientX - rect.left - d / 2 + "px";
  R.style.top = e.clientY - rect.top - d / 2 + "px";
  R.style.width = R.style.height = d + "px";
  R.style.borderRadius = "9999px";
  R.style.pointerEvents = "none";
  R.style.background = "radial-gradient(circle, rgba(53,224,255,0.35) 10%, rgba(53,224,255,0) 70%)";
  t.style.position = "relative";
  t.appendChild(R);
  animate(R, { opacity: [0.7, 0], scale: [0.7, 2.2], duration: 420, easing: "easeOutQuad" });
  setTimeout(() => R.remove(), 430);
}

/* Tilt */
function enableTilt(el: HTMLElement) {
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / r.width;
    const dy = (e.clientY - cy) / r.height;
    animate(el, {
      rotateX: dy * -5,
      rotateY: dx * 6,
      translateZ: 0,
      duration: 140,
      easing: "easeOutQuad",
    });
  };
  const onLeave = () => {
    animate(el, { rotateX: 0, rotateY: 0, duration: 180, easing: "easeOutQuad" });
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/* SVG stroke-draw */
function useDashDraw(selector: string, delay = 0) {
  useEffect(() => {
    const paths = Array.from(document.querySelectorAll(selector)) as SVGPathElement[];
    paths.forEach((p, i) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      animate(p, {
        strokeDashoffset: [len, 0],
        easing: "easeInOutQuad",
        duration: 900,
        delay: delay + i * 80,
      });
    });
  }, [selector, delay]);
}

/* Counter */
function useCountUp(selector: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const to = Number(el.dataset.to || "0");
        const obj = { n: 0 };
        animate(obj, {
          n: to,
          round: 1,
          duration: 900,
          easing: "easeOutQuad",
          update: () => (el.innerText = String(obj.n)),
        });
        io.unobserve(el);
      });
    }, { threshold: 0.3 });
    els.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector]);
}

/* =============================================================================
   Compliance Page
   ============================================================================= */
const Compliance: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  useAnimeReveal(".reveal");
  useCountUp(".countTo");
  useDashDraw(".timeline-path", 200);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    { title: "ISO 27001", description: "Information Security Management System", status: "Certified", validUntil: "2026-03-15", icon: Shield },
    { title: "SOC 2 Type II", description: "Security · Availability · Confidentiality", status: "Certified", validUntil: "2025-12-31", icon: Lock },
    { title: "PCI DSS Level 1", description: "Payment Card Industry Data Security", status: "Compliant", validUntil: "2025-09-30", icon: Award },
    { title: "Regulatory", description: "Financial regulations adherence", status: "Compliant", validUntil: "Ongoing", icon: Building },
  ];

  const frameworks = [
    {
      key: "payments",
      title: "Payment System Security Guidelines",
      description: "Digital payment security and data localization controls.",
      requirements: ["Data localization", "Real-time fraud monitoring", "Audit trails", "Incident reporting"],
      icon: ShieldCheck,
    },
    {
      key: "fi",
      title: "Financial Institution Framework",
      description: "Specialized support for regulated Financial Institutions.",
      requirements: ["Risk management", "CDD / KYC", "AML screening", "Regulatory reporting"],
      icon: Building,
    },
    {
      key: "it",
      title: "Information Technology Compliance",
      description: "Cybersecurity and data protection alignment.",
      requirements: ["Data protection", "Incident response", "Digital signatures", "Records management"],
      icon: Lock,
    },
    {
      key: "aa",
      title: "Account Aggregator Framework",
      description: "Secure, consent-led data sharing in AA ecosystem.",
      requirements: ["Consent management", "Encryption standards", "API security", "Privacy by design"],
      icon: Users,
    },
  ];

  const risks = [
    { category: "Operational Risk", color: "from-orange-500 to-yellow-500", items: ["BCP/DR readiness", "24×7 monitoring", "Incident runbooks"] },
    { category: "Cybersecurity Risk", color: "from-purple-500 to-blue-500", items: ["Defense-in-depth", "Pentesting cadence", "Threat intel feeds"] },
    { category: "Regulatory Risk", color: "from-emerald-500 to-teal-500", items: ["Change tracking", "Control mapping", "Policy updates"] },
    { category: "Data Privacy Risk", color: "from-cyan-500 to-sky-500", items: ["Privacy by design", "Data minimization", "Access governance"] },
  ];

  const audits = [
    { title: "Annual Security Audit 2024", auditor: "Independent Auditor", date: "2024-12-15", status: "Passed", scope: "ISMS Controls" },
    { title: "Regulatory Assessment", auditor: "Compliance Auditor", date: "2024-11-20", status: "Compliant", scope: "Payment Guidelines" },
    { title: "Data Localization Review", auditor: "Data Auditor", date: "2024-10-10", status: "Verified", scope: "Storage & Processing" },
  ];

  /* Parallax backdrop */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallax = {
    transform: `translate3d(${(mouse.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.009}px, ${(mouse.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.009}px, 0)`,
  };

  /* Hero underline + chips */
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!heroRef.current || reduced) return;
    const scope = heroRef.current;
    const underline = scope.querySelector<HTMLElement>(".hero-underline");
    const chips = Array.from(scope.querySelectorAll(".hero-chip")) as HTMLElement[];
    if (underline) {
      animate(underline, {
        scaleX: [0, 1],
        duration: 520,
        easing: "easeInOutQuad",
        transformOrigin: "left",
        complete: () => {
          animate(chips, {
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 360,
            easing: "easeOutQuad",
            delay: stagger(55),
          });
        },
      });
    }
  }, [reduced]);

  /* Tilt for risk cards */
  const riskRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    riskRefs.current.forEach((el) => el && cleanups.push(enableTilt(el)));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* Trust ribbon */
  useEffect(() => {
    const el = document.getElementById("trust-ribbon");
    if (!el) return;
    const loop = () => {
      animate(el, { scale: [1, 1.04, 1], duration: 1400, easing: "easeInOutSine" });
    };
    const id = setInterval(loop, 1800);
    loop();
    return () => clearInterval(id);
  }, []);

  /* TOC (unused state kept for future) */
  const toc = useMemo(
    () => [
      { id: "intro", title: "Compliance & Security" },
      { id: "certs", title: "Certifications" },
      { id: "matrix", title: "Regulatory Matrix" },
      { id: "risks", title: "Risk Framework" },
      { id: "audits", title: "Audits Timeline" },
      { id: "numbers", title: "By the Numbers" },
      { id: "evidence", title: "Evidence JSON" },
      { id: "checklist", title: "Checklist & Consent" },
      { id: "help", title: "Help & Docs" },
    ],
    []
  );

  /* Certifications rail drag */
  const railRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let isDown = false, startX = 0, scrollLeft = 0;
    const down = (e: MouseEvent) => { isDown = true; startX = e.pageX - rail.offsetLeft; scrollLeft = rail.scrollLeft; };
    const leave = () => isDown = false;
    const up = () => isDown = false;
    const move = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.2;
      rail.scrollLeft = scrollLeft - walk;
    };
    rail.addEventListener("mousedown", down);
    rail.addEventListener("mouseleave", leave);
    rail.addEventListener("mouseup", up);
    rail.addEventListener("mousemove", move);
    return () => {
      rail.removeEventListener("mousedown", down);
      rail.removeEventListener("mouseleave", leave);
      rail.removeEventListener("mouseup", up);
      rail.removeEventListener("mousemove", move);
    };
  }, []);

  /* ====== Regulatory Matrix: filter + fresh reveal animation ====== */
  const [filter, setFilter] = useState<string>("all");
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // On each filter change, animate currently rendered cards in the matrix
    const scope = matrixRef.current;
    if (!scope) return;
    const cards = Array.from(scope.querySelectorAll(".matrix-card")) as HTMLElement[];
    // Start state (visible but pre-animated)
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(10px)";
    });
    // Animate in with a quick stagger
    animate(cards, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 320,
      delay: stagger(55),
      easing: "easeOutQuad",
    });
  }, [filter]);

  /* Evidence JSON copy */
  const sample = `// Evidence JSON excerpt
{
  "txn_id": "TXN-9F21",
  "score": 0.87,
  "signals": {
    "kyc_mismatch": true,
    "velocity": { "window_5m": 12, "threshold": 8 },
    "device_fingerprint": "9c12…e5"
  },
  "explain": [
    "KYC name mismatch vs. bank record",
    "High velocity in 5m window (12 > 8)"
  ]
}`;
  const [copied, setCopied] = useState(false);
  const copySample = async () => {
    await navigator.clipboard.writeText(sample);
    setCopied(true); setTimeout(() => setCopied(false), 1200);
  };

  /* Consent */
  const [consented, setConsented] = useState<boolean>(() => localStorage.getItem("compliance_consent") === "1");
  const acceptConsent = () => { setConsented(true); localStorage.setItem("compliance_consent", "1"); };

  return (
    <div className="pt-16 relative">
      <style>{`
        .reveal { opacity: 0; transform: translateY(18px); will-change: transform, opacity; }
        .gradient-stroke { background: linear-gradient(90deg,#6C63FF,#35E0FF,#4AF2C6); }
        .dock a:hover .chev { transform: translateX(4px); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <ScrollProgress />
      <CursorParticles />

      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          ...parallax,
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* Sticky Trust Ribbon */}
      <div className="fixed right-4 top-21 z-40">
        <div id="trust-ribbon" className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur">
          <BadgeCheck className="inline h-3.5 w-3.5 mr-1 text-[#35E0FF]" /> Audited & Certified
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section id="intro" className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="relative px-10 w-full max-w-none py-14" ref={heroRef}>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
            <div>
              <div className="bg-white/[0.06] border border-white/10 backdrop-blur-md inline-flex items-center rounded-full px-4 py-2 mb-5 hero-chip opacity-0">
                <Info className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Compliance · Trust</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Compliance & Security
              </h1>
              <div className="mt-2 h-[4px] w-48 origin-left scale-x-0 hero-underline rounded-full gradient-stroke" />

              <p className="text-lg md:text-xl text-white/75 mt-5 max-w-2xl reveal">
                Controls mapped to regulations, evidence for auditors, and performance built for real-time payments.
              </p>

              <div className="mt-7 flex gap-3">
                <UIButton onClick={(e) => { ripple(e); navigate("/support"); }} className="rounded-2xl">
                  Get Compliance Help
                </UIButton>
                <UIButton
                  onClick={(e) => { ripple(e); navigate("/partners"); }}
                  className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                >
                  Partner with Us <ChevronRight className="ml-1 h-4 w-4" />
                </UIButton>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: ShieldCheck, title: "Mapped Controls", desc: "RBI · IT Act · AA" },
                { Icon: ScrollText, title: "Audit Trails", desc: "Evidence JSON · Retention" },
                { Icon: Lock, title: "Security", desc: "Encryption · RBAC · MFA" },
                { Icon: Building, title: "Governance", desc: "Change logs · Policies" },
              ].map((x) => (
                <Card
                  key={x.title}
                  className="p-4 hover:bg-white/[0.1] transition reveal cursor-default"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-2">
                    <x.Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="font-semibold">{x.title}</div>
                  <div className="text-white/70 text-sm">{x.desc}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick dock */}
      <section className="py-4 dock">
        <div className="px-10 w-full max-w-none">
          <div className="flex flex-wrap gap-2">
            {[
              { to: "/support", label: "Support Center" },
              { to: "/partners", label: "Partners" },
              { to: "/terms", label: "Terms of Service" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center gap-1 text-sm px-3 py-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/10 transition"
              >
                <ChevronRight className="chev h-4 w-4 text-[#35E0FF] transition-transform" />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS (carousel) ================= */}
      <section id="certs" className="py-16 bg-white/[0.04]">
        <div className="px-10 w-full max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Certifications & Standards</h2>
            <p className="text-lg text-white/70 reveal">Industry-recognized validations of our security and compliance</p>
          </div>

          <div ref={railRef} className="overflow-x-auto no-scrollbar">
            <div className="min-w-[900px] grid grid-cols-4 gap-6 pr-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="p-6 text-center hover:bg-white/[0.1] transition reveal"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-2xl mb-4">
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{cert.description}</p>
                  <div className="flex items-center justify-center mb-1">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    <span className="text-green-400 font-medium">{cert.status}</span>
                  </div>
                  <p className="text-white/50 text-xs">Valid until: {cert.validUntil}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= REGULATORY MATRIX ================= */}
      <section id="matrix" className="py-16">
        <div className="px-10 w-full max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Regulatory Compliance Matrix</h2>
            <p className="text-lg text-white/70">Explore controls by framework</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {[
              { k: "all", label: "All" },
              { k: "payments", label: "Payments" },
              { k: "fi", label: "Financial Institutions" },
              { k: "it", label: "IT & Cybersecurity" },
              { k: "aa", label: "Account Aggregator" },
            ].map((f) => (
              <UIButton
                key={f.k}
                onClick={(e) => { ripple(e); setFilter(f.k); }}
                className={`rounded-full ${filter === f.k ? "bg-[#7C5CFF]/90 hover:bg-[#7C5CFF]" : ""}`}
              >
                {f.label}
              </UIButton>
            ))}
          </div>

          {/* IMPORTANT: no `.reveal` on matrix cards; we control their animation via the `filter` effect */}
          <div ref={matrixRef} className="grid lg:grid-cols-2 gap-8">
            {frameworks
              .filter((fw) => filter === "all" || fw.key === filter)
              .map((fw) => (
                <Card key={fw.key} className="matrix-card p-8 hover:bg-white/[0.1] transition"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-lg mr-3">
                      <fw.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{fw.title}</h3>
                  </div>
                  <p className="text-white/80 mb-5">{fw.description}</p>
                  <div className="space-y-2">
                    {fw.requirements.map((r) => (
                      <div key={r} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" /> {r}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* ================= RISK FRAMEWORK ================= */}
      <section id="risks" className="py-16 bg-white/[0.04]">
        <div className="px-10 w-full max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Risk Management Framework</h2>
            <p className="text-lg text-white/70 reveal">Assessment and mitigation across the stack</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {risks.map((r, i) => (
              <Card
                key={r.category}
                ref={(el) => (riskRefs.current[i] = el)}
                className="p-6 hover:bg-white/[0.1] transition reveal"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${r.color} mb-5`}>
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">{r.category}</h3>
                <ul className="text-sm text-white/85 space-y-1">
                  {r.items.map((it) => <li key={it}>• {it}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUDITS TIMELINE ================= */}
      <section id="audits" className="py-16">
        <div className="px-10 w-full max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Audit Timeline</h2>
            <p className="text-lg text-white/70 reveal">Independent verification of our controls</p>
          </div>

          <Card className="p-6 reveal">
            <svg viewBox="0 0 900 120" className="w-full">
              <defs>
                <linearGradient id="lg2" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#35E0FF" />
                  <stop offset="100%" stopColor="#6C63FF" />
                </linearGradient>
              </defs>
              <path className="timeline-path" d="M20 60 C 200 5, 350 5, 520 60 S 820 115, 880 60"
                stroke="url(#lg2)" strokeWidth="3" fill="none" opacity="0.9" />
            </svg>
            <div className="grid lg:grid-cols-3 gap-6 mt-4">
              {audits.map((a) => (
                <Card key={a.title} className="p-5 hover:bg-white/[0.1] transition"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <FileText className="h-5 w-5 text-[#35E0FF]" />
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      a.status === "Passed" || a.status === "Compliant" || a.status === "Verified"
                        ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }`}>{a.status}</span>
                  </div>
                  <div className="font-semibold">{a.title}</div>
                  <div className="text-white/70 text-sm">{a.scope}</div>
                  <div className="flex items-center justify-between text-xs text-white/50 mt-2">
                    <span>By {a.auditor}</span><span>{a.date}</span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section id="numbers" className="py-16 bg-white/[0.04]">
        <div className="px-10 w-full max-w-none">
          <Card className="p-6 reveal">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Compliance by the Numbers</h2>
              <p className="text-lg text-white/70">Real outcomes, continuously measured</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="100">0</span>%</div>
                <div className="text-white/70 text-sm mt-1">Regulatory Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="15">0</span>+</div>
                <div className="text-white/70 text-sm mt-1">Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="24">0</span>/7</div>
                <div className="text-white/70 text-sm mt-1">Monitoring</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="99">0</span>.9%</div>
                <div className="text-white/70 text-sm mt-1">Audit Success Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ================= EVIDENCE JSON ================= */}
      <section id="evidence" className="py-16">
        <div className="px-10 w-full max-w-none">
          <Card className="p-0 overflow-hidden reveal">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#35E0FF]" />
                <div className="font-semibold">Evidence JSON (Explainability)</div>
              </div>
              <UIButton onClick={(e) => { ripple(e); copySample(); }} className="rounded-xl">
                {copied ? <ClipboardCheck className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied" : "Copy"}
              </UIButton>
            </div>
            <pre className="px-6 pb-6 text-sm text-white/90 whitespace-pre-wrap">
{sample}
            </pre>
          </Card>
        </div>
      </section>

      {/* ================= CHECKLIST + HELP ================= */}
      <section id="checklist" className="py-16 bg-white/[0.04]">
        <div className="px-10 w-full max-w-none">
          <div className="grid lg:grid-cols-[1fr,0.9fr] gap-8">
            <Card className="p-6 reveal">
              <div className="flex items-center gap-2 mb-3">
                <ListChecks className="h-5 w-5 text-[#35E0FF]" />
                <h3 className="text-xl font-bold">Go-Live Checklist</h3>
              </div>
              <Checklist />
            </Card>

            <Card className="p-6 reveal">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-[#35E0FF]" />
                <h3 className="text-xl font-bold">Help & Docs</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { to: "/support", label: "Contact Compliance", icon: MessageSquare },
                  { to: "/terms", label: "Terms of Service", icon: ScrollText },
                  { to: "/integration-guide", label: "Integration Guide", icon: ExternalLink },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="flex items-center gap-2 text-sm rounded-lg px-3 py-2 border border-white/10 bg-white/[0.06] hover:bg-white/10 transition"
                    onMouseEnter={(e) => liftGlow(e.currentTarget as unknown as HTMLElement, "enter")}
                    onMouseLeave={(e) => liftGlow(e.currentTarget as unknown as HTMLElement, "leave")}
                  >
                    <l.icon className="h-4 w-4 text-[#35E0FF]" /> {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-xs text-white/60">
                Prefer Slack? We can spin up a shared compliance channel during onboarding.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= STICKY CONSENT ================= */}
      {!consented && (
        <div className="fixed bottom-4 inset-x-0 z-40">
          <div className="px-10 w-full max-w-none">
            <Card className="p-4 border-white/20 bg-black/70 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#35E0FF]" />
                  By continuing, you confirm review and acceptance of our compliance terms.
                </div>
                <div className="flex gap-2">
                  <UIButton onClick={(e) => { ripple(e); navigate("/terms"); }} className="rounded-2xl">View Terms</UIButton>
                  <UIButton
                    onClick={(e) => { ripple(e); acceptConsent(); }}
                    className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                  >
                    I Agree
                  </UIButton>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <section id="help" className="py-12">
        <div className="px-10 w-full max-w-none">
          <div className="flex flex-wrap items-center justify-between gap-4 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">FraudBuster — built for regulated environments.</span>
            </div>
            <div className="flex gap-3">
              <UIButton onClick={(e) => { ripple(e); window.print(); }} className="rounded-2xl">
                <Download className="h-4 w-4 mr-2" /> Save/Print
              </UIButton>
              <UIButton onClick={(e) => { ripple(e); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-2xl">
                Back to top
              </UIButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =============================================================================
   Extra Components
   ============================================================================= */
function Checklist() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("compliance_checklist");
    return saved
      ? (JSON.parse(saved) as boolean[])
      : [false, false, false, false, false];
  });

  useEffect(() => {
    localStorage.setItem("compliance_checklist", JSON.stringify(items));
  }, [items]);

  const toggle = (i: number) => setItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const rows = [
    "Control mapping reviewed (Payments / FI / IT / AA)",
    "RBAC & MFA enforced across environments",
    "Key rotation & secret management configured",
    "Audit evidence (logs/JSON) stored & retained",
    "Incident & dispute SLAs acknowledged",
  ];

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3">
        {rows.map((t, i) => (
          <label
            key={t}
            className={`flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3 cursor-pointer transition ${items[i] ? "bg-white/[0.1]" : ""}`}
            onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
            onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
          >
            <input type="checkbox" className="mt-0.5 accent-[#35E0FF]" checked={items[i]} onChange={() => toggle(i)} />
            <span className="text-sm text-white/85">{t}</span>
          </label>
        ))}
      </div>
      <div className="text-xs text-white/60 mt-2">Your selections are stored locally in your browser.</div>
    </>
  );
}

export default Compliance;
