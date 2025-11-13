// import React from 'react';
// import { motion } from 'framer-motion';
// import { FileText, Scale, Shield, AlertTriangle, Calendar } from 'lucide-react';

// const TermsOfService = () => {
//   const lastUpdated = '2025-01-15';

//   const sections = [
//     {
//       id: 'acceptance',
//       title: 'Acceptance of Terms',
//       icon: FileText,
//       content: 'By accessing or using Fraud Buster\'s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services. These terms comply with Indian Contract Act, 1872 and Information Technology Act, 2000.'
//     },
//     {
//       id: 'services',
//       title: 'Description of Services',
//       icon: Shield,
//       content: 'Fraud Buster provides AI-powered fraud detection and prevention services for financial institutions and fintech companies. Our services include real-time transaction monitoring, risk assessment, compliance reporting, and related fraud prevention tools, all designed to comply with financial regulations.'
//     },
//     {
//       id: 'eligibility',
//       title: 'Eligibility and Registration',
//       icon: Scale,
//       content: 'Our services are available to businesses that are engaged in financial services, including banks, financial institutions, payment service providers, and fintech companies. You must be authorized to enter into this agreement on behalf of your organization and comply with all applicable regulatory requirements.'
//     },
//     {
//       id: 'compliance',
//       title: 'Regulatory Compliance',
//       icon: AlertTriangle,
//       content: 'You acknowledge that you are responsible for ensuring your use of our services complies with all applicable laws and regulations, including financial sector regulations. We provide tools to assist with compliance but do not guarantee regulatory compliance, which remains your responsibility.'
//     }
//   ];

//   const detailedSections = [
//     {
//       title: 'User Obligations and Responsibilities',
//       content: [
//         {
//           subtitle: 'Data Accuracy',
//           text: 'You are responsible for ensuring the accuracy and completeness of all data provided to our systems. Inaccurate data may affect the performance of our fraud detection algorithms and your compliance with regulatory requirements.'
//         },
//         {
//           subtitle: 'Security Measures',
//           text: 'You must implement appropriate security measures to protect access credentials and prevent unauthorized use of our services. This includes maintaining secure API keys, implementing proper access controls, and following cybersecurity best practices.'
//         },
//         {
//           subtitle: 'Compliance Monitoring',
//           text: 'You agree to regularly monitor your use of our services for compliance with applicable regulations and to promptly address any compliance issues that may arise. You must maintain appropriate records and audit trails as required by regulatory authorities.'
//         }
//       ]
//     },
//     {
//       title: 'Service Level Agreements',
//       content: [
//         {
//           subtitle: 'Availability',
//           text: 'We strive to maintain 99.9% uptime for our fraud detection services. Planned maintenance will be scheduled during off-peak hours with advance notice. We provide 24/7 monitoring and support for critical issues.'
//         },
//         {
//           subtitle: 'Response Times',
//           text: 'Our fraud detection algorithms are designed to process transactions within 100 milliseconds under normal operating conditions. Response times may vary based on transaction complexity and system load.'
//         },
//         {
//           subtitle: 'Support Services',
//           text: 'We provide technical support through multiple channels including phone, email, and live chat. Critical issues are addressed within 2 hours, while general inquiries receive responses within 24 hours during business days.'
//         }
//       ]
//     },
//     {
//       title: 'Data Protection and Privacy',
//       content: [
//         {
//           subtitle: 'Data Localization',
//           text: 'In compliance with data localization requirements, all customer and transaction data is stored and processed in secure data centers with appropriate security measures.'
//         },
//         {
//           subtitle: 'Confidentiality',
//           text: 'We maintain strict confidentiality of all customer data and transaction information. Our employees and contractors are bound by confidentiality agreements and undergo regular security training.'
//         },
//         {
//           subtitle: 'Data Retention',
//           text: 'We retain transaction data for the minimum period required by regulatory authorities, typically 7 years for financial transaction data. Personal data is retained only as long as necessary for service provision and regulatory compliance.'
//         }
//       ]
//     },
//     {
//       title: 'Limitation of Liability',
//       content: [
//         {
//           subtitle: 'Service Limitations',
//           text: 'While our fraud detection services are designed to identify and prevent fraudulent transactions, no system is 100% accurate. We do not guarantee the detection of all fraudulent activities and are not liable for losses resulting from undetected fraud.'
//         },
//         {
//           subtitle: 'Regulatory Changes',
//           text: 'We are not liable for any losses or compliance issues resulting from changes in regulatory requirements. We will make reasonable efforts to update our services to comply with new regulations but cannot guarantee immediate compliance.'
//         },
//         {
//           subtitle: 'Third-Party Services',
//           text: 'We are not responsible for the performance or availability of third-party services that may be integrated with our platform. This includes but is not limited to core banking systems, payment gateways, and external data providers.'
//         }
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
//               <Scale className="h-10 w-10 text-white" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Terms of Service
//             </h1>
//             <p className="text-xl text-gray-300 mb-4">
//               These terms govern your use of Fraud Buster's fraud detection services and outline 
//               the rights and responsibilities of all parties.
//             </p>
//             <div className="flex items-center justify-center text-gray-400">
//               <Calendar className="h-5 w-5 mr-2" />
//               <span>Last updated: {lastUpdated}</span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="py-12 bg-black/20">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//           >
//             <h2 className="text-2xl font-bold text-white mb-4">Agreement Overview</h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               This Terms of Service agreement ("Agreement") is entered into between Fraud Buster Technologies 
//               ("Fraud Buster," 
//               "we," "us," or "our") and you or the entity you represent ("Customer," "you," or "your").
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               This Agreement governs your access to and use of Fraud Buster's fraud detection and prevention services, 
//               including our FraudBuster platform and related services (collectively, the "Services"). The Services are 
//               designed to comply with financial regulations and other applicable laws.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               By using our Services, you acknowledge that you have read, understood, and agree to be bound by this Agreement 
//               and our Privacy Policy. This Agreement is effective as of the date you first access or use the Services.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Sections */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-8 mb-16">
//             {sections.map((section, index) => (
//               <motion.div
//                 key={section.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3">
//                     <section.icon className="h-5 w-5 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold text-white">{section.title}</h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-sm">{section.content}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Detailed Sections */}
//           <div className="space-y-12">
//             {detailedSections.map((section, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
//                 <div className="space-y-6">
//                   {section.content.map((item, idx) => (
//                     <div key={idx}>
//                       <h3 className="text-lg font-semibold text-cyan-400 mb-3">{item.subtitle}</h3>
//                       <p className="text-gray-300 leading-relaxed">{item.text}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Terms */}
//       <section className="py-24 bg-black/20">
//         <div className="px-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 Either party may terminate this Agreement with 30 days written notice. We may terminate immediately 
//                 if you breach any terms or fail to comply with regulatory requirements.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 Upon termination, you must cease using our Services and we will provide data export capabilities 
//                 for a period of 90 days, subject to regulatory retention requirements.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 This Agreement is governed by applicable laws. Any disputes will be subject to the exclusive 
//                 jurisdiction of the appropriate courts.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 We will attempt to resolve disputes through good faith negotiations before pursuing legal action. 
//                 Mediation and arbitration options are available.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
//           >
//             <h2 className="text-3xl font-bold text-white mb-6">Questions About These Terms?</h2>
//             <p className="text-xl text-gray-300 mb-8">
//               If you have any questions about these Terms of Service, please contact our legal team.
//             </p>
            
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-white mb-3">Legal Department</h3>
//                 <p className="text-gray-300 mb-2">Email: info@fraudbuster.co.in</p>
//                 <p className="text-gray-300">Contact via email for phone support</p>
//               </div>
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-white mb-3">Registered Office</h3>
//                 <p className="text-gray-300 mb-2">Fraud Buster Technologies</p>
//                 <p className="text-gray-300 mb-2">Technology Hub</p>
//                 <p className="text-gray-300">Global Operations Center</p>
//               </div>
//             </div>
            
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Contact Legal Team
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TermsOfService;


















//<------------------------------------------------------------------------------------------------------------------------------------------------------














//<------------------------------------------------------------------------------------------------------------------------------------------------------->

import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import {
  FileText, Scale, Shield, AlertTriangle, Calendar,
  CheckCircle, ShieldCheck, Gavel, Lock, ScrollText,
  BookOpen, ArrowRight, Info, Copy, ClipboardCheck,
  Waves, ListChecks, Sparkles, Book, Link as LinkIcon,
  MessageSquare, ExternalLink, ChevronRight, Download
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

/* Scroll reveal via animejs */
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

/* Faster, snappier hover */
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
    duration: dir === "enter" ? 220 : 220,
    easing: "easeOutQuad",
  });
}

/* Click ripple */
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

/* Tilt on pointer */
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

/* SVG stroke-draw helper */
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

/* Counter on reveal */
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
   Terms of Service Page
   ============================================================================= */
const TermsOfService: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  useAnimeReveal(".reveal");
  useCountUp(".countTo");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = "2025-01-15";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content:
        "By using FraudBuster, you accept these Terms and applicable laws and regulations.",
      legal:
        "Aligned with Indian Contract Act, 1872 and Information Technology Act, 2000.",
    },
    {
      id: "services",
      title: "Description of Services",
      icon: Shield,
      content:
        "AI-powered fraud detection: real-time monitoring, risk scoring, explainable evidence JSON, and compliance reporting.",
      legal:
        "Compliance-aware by design; regulatory conformance remains your obligation.",
    },
    {
      id: "eligibility",
      title: "Eligibility & Registration",
      icon: Scale,
      content:
        "For licensed financial entities and fintechs; you confirm authority to contract for your organization.",
      legal:
        "Maintain sectoral eligibility, licenses, and necessary approvals.",
    },
    {
      id: "compliance",
      title: "Regulatory Compliance",
      icon: AlertTriangle,
      content:
        "Operate controls as per policy. We supply tooling; you ensure lawful use and filings.",
      legal:
        "You are responsible for audits, notices, and regulatory submissions.",
    },
  ];

  const detailed = [
    {
      title: "User Responsibilities",
      icon: ScrollText,
      items: [
        { subtitle: "Data Accuracy", text: "Ensure accurate, complete data. Data quality directly affects detection and compliance." },
        { subtitle: "Security Measures", text: "Protect keys, rotate secrets, enforce RBAC/MFA; adopt least-privilege and secure SDLC." },
        { subtitle: "Compliance Monitoring", text: "Review usage continuously; maintain audit trails; respond to regulator requests promptly." },
      ],
    },
    {
      title: "Service Levels",
      icon: ShieldCheck,
      items: [
        { subtitle: "Availability", text: "Target 99.9% monthly uptime with announced maintenance windows." },
        { subtitle: "Latency", text: "Typical scoring latency ≤100 ms under normal conditions." },
        { subtitle: "Support", text: "Critical issues triaged within 2 hours; other inquiries within 1 business day." },
      ],
    },
    {
      title: "Data Protection & Privacy",
      icon: Lock,
      items: [
        { subtitle: "Data Localization", text: "Regional hosting options; encryption in transit and at rest." },
        { subtitle: "Confidentiality", text: "NDA-bound personnel with logged, reviewed access." },
        { subtitle: "Retention", text: "Transaction data retained per regulation (e.g., 7 years); PII minimized." },
      ],
    },
    {
      title: "Limitations of Liability",
      icon: Gavel,
      items: [
        { subtitle: "Service Limitations", text: "No system is 100% accurate; not liable for losses from undetected fraud." },
        { subtitle: "Regulatory Change", text: "We adapt prudently; not liable for losses from regulatory changes/delays." },
        { subtitle: "Third-Party Dependencies", text: "External provider performance/availability may affect integrations." },
      ],
    },
  ];

  /* ---------------------------------------------
   Sticky TOC + ScrollSpy
  ----------------------------------------------*/
  const toc = useMemo(
    () =>
      sections.map((s) => ({ id: s.id, title: s.title })).concat(
        detailed.map((d, i) => ({ id: `detail-${i}`, title: d.title }))
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || "");
  useEffect(() => {
    const targets: Element[] = [];
    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) targets.push(el);
    });
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [toc]);

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* ---------------------------------------------
   Parallax background
  ----------------------------------------------*/
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallax = {
    transform: `translate3d(${(mouse.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.009}px, ${(mouse.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.009}px, 0)`,
  };

  /* ---------------------------------------------
   Hero underline + chips cascade
  ----------------------------------------------*/
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

  /* ---------------------------------------------
   Tilt on highlight cards
  ----------------------------------------------*/
  const hiRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    hiRefs.current.forEach((el) => el && cleanups.push(enableTilt(el)));
    return () => cleanups.forEach((fn) => fn());
  }, []);

  /* ---------------------------------------------
   Accordions (animejs height/opacity)
  ----------------------------------------------*/
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const accRefs = useRef<Array<HTMLDivElement | null>>([]);
  const toggleAcc = (idx: number) => {
    const el = accRefs.current[idx];
    if (!el) return;
    const isOpen = openIdx === idx;
    setOpenIdx(isOpen ? null : idx);
    if (!isOpen) {
      el.style.display = "block";
      const h = el.scrollHeight;
      el.style.height = "0px";
      animate(el, { height: [0, h], opacity: [0, 1], duration: 300, easing: "easeOutQuad" });
      setTimeout(() => (el.style.height = "auto"), 310);
    } else {
      const h = el.scrollHeight;
      animate(el, { height: [h, 0], opacity: [1, 0], duration: 260, easing: "easeInQuad" });
      setTimeout(() => (el.style.display = "none"), 270);
    }
  };

  /* ---------------------------------------------
   Sticky Consent Bar (localStorage)
  ----------------------------------------------*/
  const [consented, setConsented] = useState<boolean>(() => localStorage.getItem("tos_consent") === "1");
  const acceptConsent = () => {
    setConsented(true);
    localStorage.setItem("tos_consent", "1");
  };

  /* ---------------------------------------------
   Copy code sample
  ----------------------------------------------*/
  const [copied, setCopied] = useState(false);
  const sample = `// Example: verify a transaction
POST /v1/score
{
  "txn_id": "TX123",
  "amount": 9950,
  "payer_ifsc": "HDFC0001234",
  "instrument": "UPI"
}`;

  const copySample = async () => {
    await navigator.clipboard.writeText(sample);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  /* ---------------------------------------------
   Changelog draw
  ----------------------------------------------*/
  useDashDraw(".flow-path", 200);

  return (
    <div className="pt-16 relative">
      <style>{`
        .reveal { opacity: 0; transform: translateY(18px); will-change: transform, opacity; }
        .gradient-stroke { background: linear-gradient(90deg,#6C63FF,#35E0FF,#4AF2C6); }
        .dock a:hover .chev { transform: translateX(4px); }
      `}</style>

      <ScrollProgress />
      <CursorParticles />

      {/* Parallax grid background */}
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

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="relative px-10 w-full max-w-none py-14" ref={heroRef}>
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
            <div>
              <div className="bg-white/[0.06] border border-white/10 backdrop-blur-md inline-flex items-center rounded-full px-4 py-2 mb-5 hero-chip opacity-0">
                <Info className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Legal · Trust & Safety</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Terms of Service
              </h1>
              <div className="mt-2 h-[4px] w-44 origin-left scale-x-0 hero-underline rounded-full gradient-stroke" />

              <p className="text-lg md:text-xl text-white/75 mt-5 max-w-2xl reveal">
                Clear obligations. Practical controls. Measurable performance—built for regulated fintech.
              </p>

              <div className="mt-4 flex items-center text-white/60 reveal">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>

              <div className="mt-7 flex gap-3">
                <UIButton onClick={(e) => { ripple(e); navigate("/privacy"); }} className="rounded-2xl">
                  View Privacy Policy
                </UIButton>
                <UIButton
                  onClick={(e) => { ripple(e); navigate("/integration-guide"); }}
                  className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                >
                  Integration Guide <ArrowRight className="ml-2 h-4 w-4" />
                </UIButton>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { Icon: ShieldCheck, title: "Compliance-aware", desc: "Controls mapped to RBI/IT Act" },
                { Icon: Lock, title: "Secure by design", desc: "Encryption, RBAC, MFA" },
                { Icon: ScrollText, title: "Audit trails", desc: "Evidence JSON, retention" },
                { Icon: BookOpen, title: "Clear SLAs", desc: "Uptime, support, latency" },
              ].map((x, i) => (
                <Card
                  key={x.title}
                  ref={(el) => (hiRefs.current[i] = el)}
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

      {/* ================= QUICK DOCK ================= */}
      <section className="py-4 dock">
        <div className="px-10 w-full max-w-none">
          <div className="flex flex-wrap gap-2">
            {[
              { to: "/support", label: "Support Center" },
              { to: "/partners", label: "Partners" },
              { to: "/privacy", label: "Privacy" },
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

      {/* ================= METRICS ================= */}
      <section className="py-10">
        <div className="px-10 w-full max-w-none">
          <Card className="p-6 reveal">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="99">0</span>.9%</div>
                <div className="text-white/70 text-sm mt-1">Uptime Commitment</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="100">0</span>ms</div>
                <div className="text-white/70 text-sm mt-1">Typical Scoring Latency</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold"><span className="countTo" data-to="2">0</span>h</div>
                <div className="text-white/70 text-sm mt-1">Critical Response Target</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ================= LAYOUT: TOC + CONTENT ================= */}
      <section className="py-8">
        <div className="px-10 w-full max-w-none">
          <div className="grid lg:grid-cols-[280px,1fr] gap-8">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <Card className="p-5 sticky top-[92px]">
                <div className="text-sm text-white/70 mb-2">On this page</div>
                <nav className="space-y-1">
                  {toc.map((t) => (
                    <button
                      key={t.id}
                      onClick={(e) => { ripple(e); smoothScrollTo(t.id); }}
                      className={`w-full text-left px-3 py-2 rounded-md transition border border-transparent ${
                        activeId === t.id
                          ? "bg-white/10 border-white/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <span className="text-sm">{t.title}</span>
                    </button>
                  ))}
                </nav>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link to="/support" className="text-xs px-3 py-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/10 transition">Need help?</Link>
                  <Link to="/integration-guide" className="text-xs px-3 py-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/10 transition">Integrate</Link>
                </div>
              </Card>
            </aside>

            {/* Content */}
            <div className="space-y-10">
              {/* Summary */}
              <Card className="p-6 reveal">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Pill className="hero-chip opacity-0">Legal clarity</Pill>
                  <Pill className="hero-chip opacity-0">Security fundamentals</Pill>
                  <Pill className="hero-chip opacity-0">Operational SLAs</Pill>
                </div>
                <p className="text-white/80">
                  Deploy FraudBuster with confidence—transparent controls, robust auditability, and performance that fits regulated environments.
                </p>
              </Card>

              {/* Key sections */}
              <div className="grid lg:grid-cols-2 gap-6">
                {sections.map((s) => (
                  <Card id={s.id} key={s.id} className="p-6 hover:bg-white/[0.1] transition reveal"
                    onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                    onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                  >
                    <div className="flex items-center mb-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-lg mr-3">
                        <s.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm mb-2">{s.content}</p>
                    <p className="text-white/50 text-xs">{s.legal}</p>
                  </Card>
                ))}
              </div>

              {/* Code sample + copy */}
              <Card className="p-0 overflow-hidden reveal">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-[#35E0FF]" />
                    <div className="font-semibold">Sample Request</div>
                  </div>
                  <UIButton
                    onClick={(e) => { ripple(e); copySample(); }}
                    className="rounded-xl"
                  >
                    {copied ? <ClipboardCheck className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? "Copied" : "Copy"}
                  </UIButton>
                </div>
                <pre className="px-6 pb-6 text-sm text-white/90">
{sample}
                </pre>
              </Card>

              {/* Accordions */}
              <div className="space-y-4">
                {detailed.map((blk, idx) => (
                  <Card id={`detail-${idx}`} key={blk.title} className="p-0 overflow-hidden reveal">
                    <button
                      onClick={(e) => { ripple(e); toggleAcc(idx); }}
                      className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                          <blk.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">{blk.title}</h3>
                      </div>
                      <ArrowRight className={`h-4 w-4 transition-transform ${openIdx === idx ? "rotate-90" : ""}`} />
                    </button>

                    <div
                      ref={(el) => (accRefs.current[idx] = el)}
                      style={{ display: "none", height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-6">
                        {blk.items.map((it, i) => (
                          <div key={i} className="reveal">
                            <h4 className="text-cyan-400 font-semibold mb-2">{it.subtitle}</h4>
                            <p className="text-white/80">{it.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Dispute Flow Illustration */}
              <Card className="p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <Waves className="h-5 w-5 text-[#35E0FF]" />
                  <h3 className="text-xl font-bold">Dispute & Escalation Flow</h3>
                </div>
                <svg viewBox="0 0 800 130" className="w-full">
                  <defs>
                    <linearGradient id="lg1" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#35E0FF" />
                      <stop offset="100%" stopColor="#6C63FF" />
                    </linearGradient>
                  </defs>
                  <path className="flow-path" d="M20 65 C 150 10, 300 10, 430 65 S 700 120, 780 65" stroke="url(#lg1)" strokeWidth="3" fill="none" opacity="0.9" />
                </svg>
                <div className="mt-4 grid md:grid-cols-4 gap-3 text-sm">
                  {["Report", "Triage", "Review", "Resolution"].map((s, i) => (
                    <div key={s} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
                      <div className="text-white font-semibold">{s}</div>
                      <div className="text-white/70">SLA {i === 0 ? "4h" : i === 1 ? "12h" : i === 2 ? "24h" : "48h"}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Termination & Governing Law */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6 reveal"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <h3 className="text-xl font-bold mb-3">Termination</h3>
                  <p className="text-white/80 mb-3">
                    Either party may terminate with 30 days’ notice. We may terminate immediately for breach or unlawful use.
                  </p>
                  <p className="text-white/60 text-sm">
                    Upon termination, we provide data export for 90 days (subject to regulatory retention and lawful requests).
                  </p>
                </Card>
                <Card className="p-6 reveal"
                  onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                  onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                >
                  <h3 className="text-xl font-bold mb-3">Governing Law</h3>
                  <p className="text-white/80 mb-3">
                    This Agreement is governed by applicable laws. Parties will attempt good-faith resolution before legal action.
                  </p>
                  <p className="text-white/60 text-sm">
                    Mediation or arbitration may be used where mutually agreed or required by statute.
                  </p>
                </Card>
              </div>

              {/* Glossary + Links */}
              <Card className="p-6 reveal">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="h-5 w-5 text-[#35E0FF]" />
                  <h3 className="text-xl font-bold">Glossary</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { k: "Evidence JSON", v: "Explainability payload attached to risk decisions" },
                    { k: "Retention", v: "Required storage window for regulated data" },
                    { k: "SLA", v: "Service Level Agreement for uptime/response" },
                    { k: "RBAC", v: "Role-Based Access Control" },
                    { k: "MFA", v: "Multi-Factor Authentication" },
                  ].map((g) => (
                    <div
                      key={g.k}
                      className="group relative"
                      onMouseEnter={(e) => liftGlow(e.currentTarget as HTMLElement, "enter")}
                      onMouseLeave={(e) => liftGlow(e.currentTarget as HTMLElement, "leave")}
                    >
                      <Pill className="cursor-default">{g.k}</Pill>
                      <div className="pointer-events-none absolute left-0 top-8 z-30 hidden min-w-[220px] rounded-lg border border-white/10 bg-black/80 p-3 text-xs text-white/80 group-hover:block">
                        {g.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { to: "/privacy", label: "Privacy Policy", icon: LinkIcon },
                    { to: "/support", label: "Support Center", icon: MessageSquare },
                    { to: "/integration-guide", label: "Integration Guide", icon: ExternalLink },
                  ].map((l) => (
                    <Link key={l.to} to={l.to} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/10 transition">
                      <l.icon className="h-4 w-4 text-[#35E0FF]" /> {l.label}
                    </Link>
                  ))}
                </div>
              </Card>

              {/* Consent Checklist */}
              <Card className="p-6 reveal">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-[#35E0FF]" />
                  <h3 className="text-xl font-bold">Consent Checklist</h3>
                </div>
                <Checklist consented={consented} setConsented={setConsented} />
              </Card>

              {/* Changelog / Version history */}
              <Card className="p-6 reveal">
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="h-5 w-5 text-[#35E0FF]" />
                  <h3 className="text-xl font-bold">Version History</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    { date: "2025-01-15", changes: ["Added dispute timelines", "Clarified data retention"] },
                    { date: "2024-09-01", changes: ["SLA latency updates", "Expanded compliance mapping"] },
                    { date: "2024-05-10", changes: ["Initial public release"] },
                  ].map((v) => (
                    <div key={v.date} className="rounded-lg border border-white/10 bg-white/[0.06] p-4">
                      <div className="text-sm text-white/60">{v.date}</div>
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-white/85">
                        {v.changes.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Contact / CTA */}
              <Card className="p-8 reveal">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Questions about these terms?</h3>
                    <p className="text-white/75">
                      Our legal and security teams can clarify obligations, data flows, and audit artifacts.
                    </p>
                    <div className="flex gap-3 mt-6">
                      <UIButton onClick={(e) => { ripple(e); navigate("/support"); }} className="rounded-2xl">
                        Contact Legal
                      </UIButton>
                      <UIButton
                        onClick={(e) => { ripple(e); navigate("/integration-guide"); }}
                        className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                      >
                        Implementation Help
                      </UIButton>
                      <UIButton onClick={(e) => ripple(e)} className="rounded-2xl">
                        <Download className="h-4 w-4 mr-2" /> Download PDF
                      </UIButton>
                    </div>
                  </div>
                  <FeedbackWidget />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Consent Bar */}
      {!consented && (
        <div className="fixed bottom-4 inset-x-0 z-40">
          <div className="px-10 w-full max-w-none">
            <Card className="p-4 border-white/20 bg-black/70 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-sm text-white/80 flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-[#35E0FF]" />
                  By continuing you confirm you’ve reviewed and accept the Terms of Service.
                </div>
                <div className="flex gap-2">
                  <UIButton onClick={(e) => { ripple(e); navigate("/privacy"); }} className="rounded-2xl">Review Privacy</UIButton>
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

      {/* Footer */}
      <section className="py-12">
        <div className="px-10 w-full max-w-none">
          <div className="flex flex-wrap items-center justify-between gap-4 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">By using FraudBuster, you accept these Terms.</span>
            </div>
            <div className="flex gap-3">
              <UIButton onClick={(e) => ripple(e)} className="rounded-2xl">Print</UIButton>
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

function Checklist({ consented, setConsented }: { consented: boolean; setConsented: (b: boolean) => void }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("tos_checklist");
    return saved ? JSON.parse(saved) as boolean[] : [false, false, false, false];
  });

  useEffect(() => {
    localStorage.setItem("tos_checklist", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (items.every(Boolean) && !consented) {
      // subtle “completed” pulse
      const bar = document.getElementById("checklist-bar");
      if (bar) {
        animate(bar, { scale: [1, 1.04, 1], duration: 380, easing: "easeOutQuad" });
      }
    }
  }, [items, consented]);

  const toggle = (i: number) => {
    setItems((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div>
      <div id="checklist-bar" className="grid sm:grid-cols-2 gap-3">
        {[
          "I am authorized to accept the Agreement.",
          "Our team will implement RBAC/MFA and secure key management.",
          "We will retain and handle data per regulation.",
          "We will follow SLAs for disputes and incident reporting."
        ].map((t, i) => (
          <label
            key={t}
            className={`flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-3 cursor-pointer transition ${items[i] ? "bg-white/[0.1]" : ""}`}
            onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
            onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
          >
            <input
              type="checkbox"
              checked={items[i]}
              onChange={() => toggle(i)}
              className="mt-0.5 accent-[#35E0FF]"
            />
            <span className="text-sm text-white/85">{t}</span>
          </label>
        ))}
      </div>
      <div className="text-xs text-white/60 mt-2">
        Your selections are stored locally in your browser.
      </div>
    </div>
  );
}

function FeedbackWidget() {
  const [choice, setChoice] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const react = (emoji: string) => {
    setChoice(emoji);
    if (!ref.current) return;
    const el = document.createElement("div");
    el.textContent = emoji;
    el.style.position = "absolute";
    el.style.left = "50%";
    el.style.top = "50%";
    el.style.transform = "translate(-50%, -50%)";
    el.style.fontSize = "26px";
    ref.current.appendChild(el);
    animate(el, {
      translateY: [-6, -26],
      opacity: [1, 0],
      duration: 600,
      easing: "easeOutQuad",
      complete: () => el.remove(),
    });
  };
  return (
    <div className="relative">
      <div className="text-sm text-white/70 mb-2">Was this page helpful?</div>
      <div className="flex gap-2">
        {["👍", "👌", "🤔", "👎"].map((e) => (
          <UIButton key={e} onClick={(ev) => { ripple(ev); react(e); }} className="rounded-xl px-3 py-2">
            {e}
          </UIButton>
        ))}
      </div>
      <div ref={ref} className="absolute inset-0 pointer-events-none" />
      {choice && <div className="text-xs text-white/60 mt-2">Thanks for your feedback!</div>}
    </div>
  );
}

export default TermsOfService;

