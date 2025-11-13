// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Eye, Lock, FileText, Calendar } from 'lucide-react';

// const PrivacyPolicy = () => {
//   const lastUpdated = '2025-01-15';

//   const sections = [
//     {
//       id: 'information-collection',
//       title: 'Information We Collect',
//       icon: FileText,
//       content: [
//         {
//           subtitle: 'Personal Information',
//           text: 'We collect personal information that you provide directly to us, including name, email address, phone number, company details, and professional information when you register for our services, request information, or communicate with us.'
//         },
//         {
//           subtitle: 'Transaction Data',
//           text: 'In compliance with regulatory guidelines, we collect and process transaction data necessary for fraud detection and prevention. This includes transaction amounts, timestamps, merchant information, and behavioral patterns, all processed in accordance with data protection regulations.'
//         },
//         {
//           subtitle: 'Technical Information',
//           text: 'We automatically collect technical information such as IP addresses, browser types, device information, and usage patterns to improve our services and ensure security compliance as required by cybersecurity guidelines.'
//         }
//       ]
//     },
//     {
//       id: 'data-usage',
//       title: 'How We Use Your Information',
//       icon: Eye,
//       content: [
//         {
//           subtitle: 'Fraud Detection and Prevention',
//           text: 'We use collected data to provide our core fraud detection services, analyze transaction patterns, and prevent fraudulent activities in compliance with digital payment security guidelines.'
//         },
//         {
//           subtitle: 'Service Improvement',
//           text: 'We analyze usage patterns and feedback to enhance our fraud detection algorithms, improve user experience, and develop new features that better serve the fintech ecosystem.'
//         },
//         {
//           subtitle: 'Regulatory Compliance',
//           text: 'We process data as required to comply with financial regulations and guidelines, including maintaining audit trails and generating compliance reports.'
//         }
//       ]
//     },
//     {
//       id: 'data-protection',
//       title: 'Data Protection and Security',
//       icon: Lock,
//       content: [
//         {
//           subtitle: 'Data Localization',
//           text: 'In compliance with data localization requirements, all payment and customer data is stored in secure data centers with appropriate security measures and backup systems.'
//         },
//         {
//           subtitle: 'Encryption and Security',
//           text: 'We implement industry-standard encryption protocols (AES-256) for data at rest and in transit. Our systems are ISO 27001 certified and undergo regular security audits by certified Indian cybersecurity firms.'
//         },
//         {
//           subtitle: 'Access Controls',
//           text: 'We maintain strict access controls with role-based permissions, multi-factor authentication, and regular access reviews. Only authorized personnel with legitimate business needs can access customer data.'
//         }
//       ]
//     },
//     {
//       id: 'data-sharing',
//       title: 'Information Sharing and Disclosure',
//       icon: Shield,
//       content: [
//         {
//           subtitle: 'Service Providers',
//           text: 'We may share information with trusted service providers who assist in delivering our services, including cloud infrastructure providers, security vendors, and compliance consultants, all bound by strict confidentiality agreements.'
//         },
//         {
//           subtitle: 'Regulatory Authorities',
//           text: 'We may disclose information to regulatory authorities and government agencies as required by law or to comply with legal obligations, court orders, or regulatory investigations.'
//         },
//         {
//           subtitle: 'Business Transfers',
//           text: 'In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction, subject to the same privacy protections and regulatory compliance requirements.'
//         }
//       ]
//     },
//     {
//       id: 'user-rights',
//       title: 'Your Rights and Choices',
//       icon: FileText,
//       content: [
//         {
//           subtitle: 'Access and Correction',
//           text: 'You have the right to access, correct, or update your personal information. You can request a copy of your data or make corrections through your account dashboard or by contacting our support team.'
//         },
//         {
//           subtitle: 'Data Portability',
//           text: 'Subject to regulatory requirements and technical feasibility, you may request to export your data in a structured, commonly used format for transfer to another service provider.'
//         },
//         {
//           subtitle: 'Deletion Requests',
//           text: 'You may request deletion of your personal information, subject to our legal obligations to retain certain data for regulatory compliance, audit purposes, and fraud prevention as required by RBI guidelines.'
//         }
//       ]
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
//               Privacy Policy
//             </h1>
//             <p className="text-xl text-gray-300 mb-4">
//               Your privacy and data security are our top priorities. This policy explains how we collect, 
//               use, and protect your information in compliance with Indian regulations.
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
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//           >
//             <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               Fraud Buster ("Fraud Buster," "we," "us," or "our") is committed to protecting 
//               the privacy and security of your personal information. This Privacy Policy describes how we collect, use, 
//               disclose, and safeguard your information when you use our fraud detection services and related products.
//             </p>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               As a fintech company, we comply with all applicable laws and regulations, including 
//               guidelines on data localization, cybersecurity, and payment system regulations. 
//               We are committed to maintaining the highest standards of data protection and privacy.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               By using our services, you consent to the collection and use of your information as described in this Privacy Policy. 
//               If you do not agree with our policies and practices, please do not use our services.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Policy Sections */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <div className="space-y-12">
//             {sections.map((section, index) => (
//               <motion.div
//                 key={section.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
//                     <section.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-white">{section.title}</h2>
//                 </div>
                
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

//       {/* Additional Sections */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-8">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 We retain personal information for as long as necessary to provide our services and comply with legal obligations. 
//                 Transaction data is retained as required by regulatory guidelines.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 When data is no longer needed, we securely delete or anonymize it in accordance with our data retention policy 
//                 and regulatory requirements.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 In compliance with data localization requirements, all payment and customer data is stored and processed 
//                 in secure facilities. Any international data transfers are conducted only with explicit regulatory approval.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 We ensure that any international service providers comply with data protection standards and 
//                 maintain appropriate safeguards.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
//           >
//             <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Privacy Policy?</h2>
//             <p className="text-xl text-gray-300 mb-8">
//               If you have any questions about this Privacy Policy or our data practices, please contact us.
//             </p>
            
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-white mb-3">Data Protection Officer</h3>
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
//               Contact Privacy Team
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPolicy;






//<--------------------------------------------------------------------------------------------------------------------------------------







//<--------------------------------------------------------------------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { animate } from "animejs"; // ✅ Motion One named imports
import {
  Shield, Eye, Lock, FileText, Calendar, KeyRound, Database, Scale, CheckCircle2,
  Copy, X, Download, BookOpenCheck, Globe, Info, Search, ArrowUp,
  ChevronRight, ExternalLink, Activity, Cpu, Waves
} from "lucide-react";

/* ============================== design tokens ============================== */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
const BRAND_GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
const LAST_UPDATED = "2025-01-15";

/* ============================== utils ============================== */
const clamp = (v:number, min:number, max:number)=>Math.max(min, Math.min(max, v));
const useReducedMotion = () => {
  const [reduced, set] = useState(false);
  useEffect(()=>{
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const apply = ()=> set(!!mq?.matches);
    apply();
    mq?.addEventListener?.("change", apply);
    return ()=> mq?.removeEventListener?.("change", apply);
  },[]);
  return reduced;
};

/* ============================== top progress ============================== */
function ScrollProgress(){
  const bar = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = bar.current!;
    const onScroll = ()=>{
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const p = clamp(window.scrollY / max, 0, 1);
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
    window.addEventListener("resize", onScroll);
    return ()=>{
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  },[]);
  return createPortal(
    <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
      <div ref={bar} className={`origin-left h-full ${BRAND_GRADIENT}`} style={{ transform:"scaleX(0)" }} />
    </div>,
    document.body
  );
}

/* ============================== cursor particles (precise) ============================== */
function CursorParticles({ paused=false }:{ paused?: boolean }){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  useEffect(()=>{ pausedRef.current = paused; }, [paused]);

  useEffect(()=>{
    const dot = dotRef.current!;
    const move = (e: MouseEvent)=>{ if (!pausedRef.current) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
    window.addEventListener("mousemove", move, { passive:true });
    return ()=> window.removeEventListener("mousemove", move);
  },[]);

  useEffect(()=>{
    type P = { x:number;y:number;vx:number;vy:number;life:number };
    const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
    let raf = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = ()=>{
      const w = innerWidth, h = innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      cvs.width = Math.floor(w*dpr); cvs.height = Math.floor(h*dpr);
      cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr,dpr);
      ctx.globalCompositeOperation = "lighter";
    };
    resize(); window.addEventListener("resize", resize);
    const parts:P[] = [];
    const spawn = (x:number,y:number)=>{
      for(let i=0;i<3;i++){
        const a = Math.random()*Math.PI*2;
        const s = Math.random()*1.2 + 0.6;
        parts.push({ x,y, vx: Math.cos(a)*s, vy: Math.sin(a)*s, life: 1 });
      }
    };
    const move = (e:MouseEvent)=>{ if (!pausedRef.current) spawn(e.clientX, e.clientY); };
    window.addEventListener("mousemove", move);
    const loop = ()=>{
      ctx.clearRect(0,0,innerWidth,innerHeight);
      if(!pausedRef.current){
        for(let i=parts.length-1;i>=0;i--){
          const p=parts[i];
          p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
          const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
          g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`);
          g.addColorStop(1,"rgba(124,92,255,0)");
          ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
          if(p.life<0.05) parts.splice(i,1);
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return ()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
    };
  },[]);

  return createPortal(
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9998]" />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
      />
    </>,
    document.body
  );
}

/* ============================== hooks ============================== */
function useReveals(selector="[data-reveal]", disabled=false){
  useEffect(()=>{
    if(disabled) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        animate(
          e.target as Element,
          { opacity: [0,1], transform: ["translateY(16px)","translateY(0px)"], duration: 420, easing: "easeOutCubic" }
        );
        io.unobserve(e.target);
      });
    },{ threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(n=>io.observe(n));
    return ()=> io.disconnect();
  },[selector, disabled]);
}
function useScrollSpy(ids:string[], setActive:(id:string)=>void){
  useEffect(()=>{
    const els = ids.map(id=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((es)=>{ es.forEach(e=>{ if(e.isIntersecting) setActive(e.target.id); }); },{ threshold: 0.5 });
    els.forEach(el=>io.observe(el));
    return ()=> io.disconnect();
  },[ids, setActive]);
}
function useTilt(ref: React.RefObject<HTMLElement>, max=8){
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const move = (e:MouseEvent)=>{
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(py-.5)*-max}deg) rotateY(${(px-.5)*max}deg)`;
    };
    const leave = ()=>{ animate(el, { transform: ["perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))","perspective(900px) rotateX(0) rotateY(0)"], duration:180, easing:"easeOutQuad" }); };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return ()=>{ el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  },[ref, max]);
}
function useMagnet(ref: React.RefObject<HTMLElement>, strength=18){
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    let hovering=false;
    const move = (e:MouseEvent)=>{
      if(!hovering) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2);
      const dy = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${dx/strength}px, ${dy/strength}px)`;
    };
    const enter = ()=>{ hovering=true; };
    const leave = ()=>{
      hovering=false;
      animate(el, { transform: ["translate(var(--tx,0), var(--ty,0))","translate(0px,0px)"], duration:180, easing:"easeOutQuad" });
    };
    window.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return ()=>{ window.removeEventListener("mousemove", move); el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  },[ref, strength]);
}

/* ============================== content model ============================== */
type Block = { id: string; icon:any; title:string; items: { subtitle:string; text:string; bullets?:string[] }[]; };

const BLOCKS: Block[] = [
  {
    id: "collect",
    title: "What We Collect",
    icon: FileText,
    items: [
      { subtitle: "Account & Business Profile", text: "Name, work email, role, organization details for onboarding.", bullets: ["SAML/OIDC optional", "MFA recommended", "Role-aware setup"] },
      { subtitle: "Transaction & Risk Signals", text: "Amounts, timestamps, device traits, behavior vectors for fraud detection only.", bullets: ["No ads usage", "Purpose-limited", "Audit evidence JSON"] },
      { subtitle: "Operational Telemetry", text: "Runtime logs & reliability metrics to keep systems resilient.", bullets: ["PII minimization", "Access-log retention", "Anomaly watch"] },
    ],
  },
  {
    id: "use",
    title: "How We Use Data",
    icon: Eye,
    items: [
      { subtitle: "Detect & Prevent Fraud", text: "Score, step-up auth, explainable decisions.", bullets: ["Model drift checks", "Analyst review tools", "Reason codes"] },
      { subtitle: "Improve the Product", text: "Evaluate UX & models with privacy-preserving techniques.", bullets: ["Aggregation", "K-anonymity where viable", "Red-team tests"] },
      { subtitle: "Meet Regulations", text: "DPDP / RBI control mapping with evidence-ready trails.", bullets: ["Immutable logs", "Subject tooling", "Vendor diligence"] },
    ],
  },
  {
    id: "protect",
    title: "How We Protect It",
    icon: Lock,
    items: [
      { subtitle: "Encryption Everywhere", text: "TLS 1.2+ in transit; AES-256 at rest; rotated keys.", bullets: ["mTLS internals", "HSM/KMS", "Cert pinning (mobile)"] },
      { subtitle: "Least-Privilege by Default", text: "RBAC, JIT secrets, periodic access reviews.", bullets: ["Short-lived creds", "Break-glass policy", "SOC playbooks"] },
      { subtitle: "Hardening & Monitoring", text: "Segmentation & 24/7 monitoring to reduce risk.", bullets: ["Egress control", "WAF/RASP options", "SIEM automations"] },
    ],
  },
  {
    id: "share",
    title: "When We Share",
    icon: Shield,
    items: [
      { subtitle: "Vetted Providers", text: "Cloud, security, analytics — all bound by DPAs.", bullets: ["Security reviews", "SCCs where needed", "Right-to-audit"] },
      { subtitle: "Regulatory Disclosures", text: "Only what’s required and proportionate.", bullets: ["Narrow scope", "Notified where lawful", "Governed process"] },
      { subtitle: "Corporate Events", text: "M&A transfers maintain privacy protections.", bullets: ["Continuity safeguards", "Change notice", "Opt-outs where applicable"] },
    ],
  },
  {
    id: "rights",
    title: "Your Privacy Rights",
    icon: BookOpenCheck,
    items: [
      { subtitle: "Access & Rectify", text: "Get a copy; correct inaccuracies via dashboard or request.", bullets: ["ID verification", "SLA timelines", "Machine-readable export"] },
      { subtitle: "Portability", text: "Export in common formats when feasible.", bullets: ["JSON/CSV", "Secure handoff", "Audited delivery"] },
      { subtitle: "Erasure", text: "Deletion requests subject to legal retention for fraud/compliance.", bullets: ["Schedules", "Anonymization", "Confirmations"] },
    ],
  },
];

/* ============================== component ============================== */
const PrivacyPolicy: React.FC = () => {
  const reduced = useReducedMotion();
  const navigate = useNavigate();

  useReveals("[data-reveal]", reduced);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ids = BLOCKS.map(b => b.id);
  const [active, setActive] = useState(ids[0]);
  useScrollSpy(ids, setActive);

  // parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(()=>{ const m=(e:MouseEvent)=>setMouse({x:e.clientX,y:e.clientY}); window.addEventListener("mousemove", m); return ()=>window.removeEventListener("mousemove", m); },[]);
  const parallax = useMemo(()=>({ transform: `translate3d(${(mouse.x - innerWidth/2)*0.01}px, ${(mouse.y - innerHeight/2)*0.01}px,0)` }), [mouse.x, mouse.y]);

  // back to top
  const [showTop, setShowTop] = useState(false);
  useEffect(()=>{ const s=()=>setShowTop(scrollY>600); s(); window.addEventListener("scroll", s, { passive:true }); return ()=>window.removeEventListener("scroll", s); },[]);

  // command palette
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(()=>{
    const k=(e:KeyboardEvent)=>{
      if(e.key==="/" && !paletteOpen){ e.preventDefault(); setPaletteOpen(true); }
      else if(e.key==="Escape" && paletteOpen){ setPaletteOpen(false); }
    };
    window.addEventListener("keydown", k);
    return ()=>window.removeEventListener("keydown", k);
  },[paletteOpen]);

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles paused={paletteOpen} />

      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.10]" style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          ...parallax
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_18%_10%,rgba(124,92,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_82%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
      </div>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div className="mx-10 max-w-none py-20">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb  -6`} data-reveal>
                <Shield className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-semibold">Privacy · Security · Trust</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]" data-reveal>
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                We secure data with encryption, least-privilege access, and audit-ready evidence — aligned to DPDP, RBI guidance, and global best practices.
              </p>

              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <Pill icon={Calendar} label={`Last updated: ${LAST_UPDATED}`} />
                <Pill icon={Globe} label="Data residency options" />
                <Pill icon={KeyRound} label="AES-256 at rest · TLS in transit" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <PrimaryButton label="Contact Privacy Team" icon={ExternalLink} onClick={()=>navigate("/contact")} />
                <GhostButton label="Download PDF" icon={Download} onClick={()=>downloadWithAnimation("FraudBuster_PrivacyPolicy.pdf")} />
                <GhostButton label="Search policy  /" icon={Search} onClick={()=>setPaletteOpen(true)} />
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* toc + content */}
      <section className="py-10">
        <div className="mx-10 max-w-none grid lg:grid-cols-[300px,1fr] gap-8">
          <aside className={`${glass} rounded-2xl p-4 sticky top-20 h-max`} data-reveal>
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-white/70">Jump to</div>
              <span className="pill">DPDP-aligned</span>
            </div>
            <nav className="space-y-1">
              {BLOCKS.map(b=>(
                <a
                  key={b.id}
                  href={`#${b.id}`}
                  className={`block px-3 py-2 rounded-lg transition ${active===b.id ? "bg-white/10 border border-white/10" : "hover:bg-white/5"}`}
                  onClick={(e)=>{ e.preventDefault(); document.getElementById(b.id)?.scrollIntoView({ behavior:"smooth", block:"start" }); }}
                >
                  {b.title}
                </a>
              ))}
            </nav>
            <div className="mt-4 text-xs text-white/60">
              We apply privacy-preserving analytics and provide evidence for audits.
            </div>
          </aside>

          <div className="space-y-10">
            <RevealStrip />

            {BLOCKS.map((block, idx)=>(
              <article id={block.id} key={block.id} className={`${glass} rounded-2xl p-6`} data-reveal>
                <header className="flex items-center gap-3 mb-4">
                  <div className={`h-11 w-11 grid place-items-center rounded-xl ${BRAND_GRADIENT}`}>
                    <block.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">{block.title}</h2>
                </header>

                <div className="grid lg:grid-cols-2 gap-6">
                  {block.items.map((it, i)=>(
                    <FancyAccordion key={i} title={it.subtitle} icon={ChevronRight}>
                      <p className="text-white/85 leading-relaxed mb-3">{it.text}</p>
                      {it.bullets && (
                        <ul className="space-y-2 text-sm text-white/80">
                          {it.bullets.map((b, bi)=>(
                            <li key={bi} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-[2px]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <MicroTag icon={Info} text="Purpose limited" />
                        <MicroTag icon={Lock} text="Secured in transit" />
                        <MicroTag icon={Scale} text="Compliance mapped" />
                      </div>
                    </FancyAccordion>
                  ))}
                </div>

                {idx === 1 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <PrimaryButton label="Request data export" onClick={()=>navigate("/contact")} />
                    <GhostButton label="Read compliance notes" onClick={()=>navigate("/compliance")} />
                  </div>
                )}
              </article>
            ))}

            <article id="retention" className={`${glass} rounded-2xl p-6`} data-reveal>
              <header className="flex items-center gap-3 mb-4">
                <div className={`h-11 w-11 grid place-items-center rounded-xl ${BRAND_GRADIENT}`}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Retention & International Transfers</h2>
              </header>
              <div className="grid md:grid-cols-2 gap-6">
                <InfoCard
                  title="Retention Schedules"
                  points={[
                    "Keep only as long as needed for service, fraud prevention, and legal duties.",
                    "Delete/anonymize after expiry; confirmations upon request."
                  ]}
                />
                <InfoCard
                  title="Cross-Border Controls"
                  points={[
                    "Honor residency; transfers only with safeguards/approvals.",
                    "Vendors bound by DPAs, security reviews, audit rights."
                  ]}
                />
              </div>
            </article>

            <article id="contact" className={`${glass} rounded-2xl p-6`} data-reveal>
              <header className="flex items-center gap-3 mb-4">
                <div className={`h-11 w-11 grid place-items-center rounded-xl ${BRAND_GRADIENT}`}>
                  <Info className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Contact & Requests</h2>
              </header>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5">
                  <div className="text-sm text-white/70 mb-2">Data Protection Officer</div>
                  <div className="text-white font-semibold">FraudBuster DPO</div>
                  <div className="text-white/80">Email: dpo@fraudbuster.co</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <PrimaryButton label="Contact page" onClick={()=>useNavigate()("/contact")} />
                    <GhostButton label="Copy email" icon={Copy} onClick={()=>navigator.clipboard.writeText("dpo@fraudbuster.co")} />
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5">
                  <div className="text-sm text-white/70 mb-2">Registered Office</div>
                  <div className="text-white/80">FraudBuster Technologies</div>
                  <div className="text-white/60">Global Operations Center</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* palette */}
      {paletteOpen && (
        <CommandPalette
          query={query}
          setQuery={setQuery}
          onClose={()=>setPaletteOpen(false)}
          onJump={(id)=>{ setPaletteOpen(false); document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }); }}
        />
      )}

      <BackToTop visible={showTop} />
      <StyleInjections />
    </div>
  );
};

/* ============================== hero visual ============================== */
function HeroVisual(){
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef, 6);

  const blobRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = blobRef.current!;
    const loop = ()=>{
      const r1 = `${40 + Math.random()*30}%`;
      const r2 = `${40 + Math.random()*30}%`;
      const r3 = `${40 + Math.random()*30}%`;
      const r4 = `${40 + Math.random()*30}%`;
      const anim: any = animate(
        el,
        { borderRadius: [`${r1} ${r2} ${r3} ${r4} / ${r2} ${r3} ${r4} ${r1}`], duration: 2800, easing: "easeInOutQuad" }
      );
      // ✅ Safe guard: if finished is missing, fallback to setTimeout
      if (anim && anim.finished && typeof anim.finished.then === "function") {
        anim.finished.then(loop);
      } else {
        setTimeout(loop, 2800);
      }
    };
    loop();

    // continuous spin
    const spin: any = animate(
      el,
      { transform: ["rotate(0deg) scale(1)", "rotate(360deg) scale(1.04)"], duration: 12000, easing: "linear", loop: true } // ✅ Motion One option
    );

    return ()=>{
      if (spin && typeof spin.cancel === "function") spin.cancel();
    };
  },[]);

  return (
    <div className={`${glass} rounded-2xl p-6 relative`} data-reveal ref={cardRef}>
      <div className="relative h-[260px] rounded-xl bg-black/40 border border-white/10 overflow-hidden">
        <div
          ref={blobRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
          style={{
            background: "conic-gradient(from 0deg, #6C63FF, #35E0FF, #4AF2C6, #6C63FF)",
            borderRadius: "58% 42% 60% 40% / 40% 58% 42% 60%",
            filter: "blur(18px) saturate(120%)",
            opacity: 0.9
          }}
        />
        <ul className="absolute left-4 top-4 space-y-2 text-sm text-white/85">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Evidence for audits</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Consent management</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Regional hosting</li>
        </ul>
        <div className="absolute right-4 bottom-4 text-xs text-white/70 inline-flex items-center gap-2">
          <Scale className="h-3.5 w-3.5" /> DPDP-aligned
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        <Badge icon={Database} text="Minimal data" />
        <Badge icon={Lock} text="Hardened infra" />
        <Badge icon={Eye} text="Transparent use" />
      </div>
    </div>
  );
}

/* ============================== reveal strip ============================== */
function RevealStrip(){
  const host = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = host.current!;
    const move = (e:PointerEvent)=>{
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", `${((e.clientX - r.left)/r.width)*100}%`);
      el.style.setProperty("--y", `${((e.clientY - r.top)/r.height)*100}%`);
    };
    el.addEventListener("pointermove", move);
    return ()=> el.removeEventListener("pointermove", move);
  },[]);
  return (
    <div
      ref={host}
      className={`${glass} relative rounded-2xl p-5`}
      style={{ backgroundImage: "radial-gradient(220px 220px at var(--x,50%) var(--y,50%), rgba(53,224,255,0.12), transparent 70%)" }}
      data-reveal
    >
      <div className="grid sm:grid-cols-3 gap-4">
        <Highlight icon={Cpu} title="Privacy-preserving ML" text="Aggregate where possible; explainable decisions." />
        <Highlight icon={Activity} title="Live monitoring" text="24/7 security operations & anomaly watch." />
        <Highlight icon={Waves} title="Smooth UX" text="Friction only when risk demands it." />
      </div>
    </div>
  );
}

/* ============================== bits ============================== */
function Pill({ icon: Icon, label }:{ icon:any; label:string }){
  return (
    <span className="rounded-xl border border-white/15 px-3 py-1.5 text-sm inline-flex items-center gap-2">
      <Icon className="h-4 w-4" /> {label}
    </span>
  );
}
function Badge({ icon: Icon, text }:{ icon:any; text:string }){
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2 hover:bg-white/[0.08] transition">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
function Highlight({ icon: Icon, title, text }:{ icon:any; title:string; text:string }){
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 5);
  return (
    <div ref={ref} className="rounded-xl bg-white/[0.05] border border-white/10 p-4 hover:bg-white/[0.07] transition">
      <div className={`h-11 w-11 rounded-lg ${BRAND_GRADIENT} grid place-items-center mb-3`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-1">{text}</div>
    </div>
  );
}

/* ===== MicroTag ===== */
function MicroTag({ icon: Icon, text }:{ icon?: any; text: string }){
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const el = ref.current!;
    const enter = ()=> animate(el, { transform: ["translateY(0px) scale(1)", "translateY(-1px) scale(1.03)"], opacity: [0.9, 1], duration: 160 });
    const leave = ()=> animate(el, { transform: ["translateY(-1px) scale(1.03)","translateY(0px) scale(1)"], opacity: [1, 0.92], duration: 160 });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return ()=>{ el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  },[]);
  return (
    <span
      ref={ref}
      className="inline-flex items-center gap-1.5 text-xs rounded-md px-2 py-1 border border-white/10 bg-white/[0.06]"
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-[#35E0FF]" />} <span className="text-white/85">{text}</span>
    </span>
  );
}

/* ============================== accordion ============================== */
function FancyAccordion({ title, icon: Icon = ChevronRight, children }:{ title:string; icon?:any; children:React.ReactNode }){
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLButtonElement>(null);

  useEffect(()=>{
    const el = bodyRef.current; if(!el) return;
    const inner = el.firstElementChild as HTMLElement | null;
    if(!inner) return;
    const h = open ? `${inner.offsetHeight}px` : "0px";
    el.style.height = h;
  },[open]);

  const onClick = (e:React.MouseEvent)=>{
    setOpen(v=>!v);
    const btn = headRef.current!;
    const ripple = document.createElement("span");
    ripple.className = "pointer-events-none absolute rounded-full bg-white/10";
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - r.left - size/2}px`;
    ripple.style.top = `${e.clientY - r.top - size/2}px`;
    btn.appendChild(ripple);
    animate(ripple, { opacity: [0.3, 0], transform: ["scale(0.8)", "scale(1.4)"], duration: 450, easing: "easeOutCubic" });
    setTimeout(()=>ripple.remove(), 460);
  };

  return (
    <div className="rounded-lg bg-white/[0.04] border border-white/10">
      <button
        ref={headRef}
        className="relative w-full text-left px-4 py-3 flex items-center justify-between hover:bg-white/[0.04] overflow-hidden"
        onClick={onClick}
      >
        <span className="font-medium">{title}</span>
        <Icon className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      <div ref={bodyRef} className="overflow-hidden transition-[height] duration-300 ease-out">
        <div className="px-4 pb-4 pt-1 text-white/85">{children}</div>
      </div>
    </div>
  );
}

/* ============================== info card ============================== */
function InfoCard({ title, points }:{ title:string; points:string[] }){
  return (
    <div className="rounded-xl bg-white/[0.05] border border-white/10 p-5">
      <div className="font-semibold mb-2">{title}</div>
      <ul className="space-y-2 text-white/80 text-sm">
        {points.map((p,i)=>(
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-[2px]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================== command palette ============================== */
function CommandPalette({ query, setQuery, onClose, onJump }:{
  query:string; setQuery:(v:string)=>void; onClose:()=>void; onJump:(id:string)=>void
}){
  const all = BLOCKS.flatMap(b => [{ id: b.id, title: b.title }, ...b.items.map(it => ({ id:b.id, title:`${b.title} — ${it.subtitle}` }))]);
  const results = all.filter(x => x.title.toLowerCase().includes(query.toLowerCase()));

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{ if(e.key==="Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return ()=> window.removeEventListener("keydown", onKey);
  },[onClose]);

  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = panelRef.current; if(!el) return;
    animate(el, { opacity:[0,1], transform:["translateY(8px)","translateY(0px)"], duration:220, easing:"easeOutCubic" });
  },[]);

  return createPortal(
    <div className="fixed inset-0 z-[9997] flex items-start sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />
      <div ref={panelRef} className={`${glass} relative w/full max-w-2xl rounded-2xl p-4`}>
        <div className="flex items-center gap-2 mb-3">
          <Search className="h-5 w-5 text-[#35E0FF]" />
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search in policy…"
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
          <button onClick={onClose} className="rounded-md bg-white/5 p-1.5 hover:bg-white/10">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h[52vh] overflow-auto space-y-1 pr-1">
          {results.length===0 && <div className="text-sm text-white/60 px-2 py-4">No matches.</div>}
          {results.map((r,i)=>(
            <button
              key={i}
              onClick={()=>onJump(r.id)}
              className="w-full text-left rounded-lg px-3 py-2 hover:bg-white/[0.06] flex items-center gap-2"
              onMouseEnter={(e)=>animate(e.currentTarget, { transform:["translateX(0px)","translateX(4px)"], duration:120 })}
              onMouseLeave={(e)=>animate(e.currentTarget, { transform:["translateX(4px)","translateX(0px)"], duration:140 })}
            >
              <ChevronRight className="h-4 w-4" /> {r.title}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ============================== buttons ============================== */
function PrimaryButton({ label, icon: Icon, onClick }:{ label:string; icon?:any; onClick?:()=>void }){
  const ref = useRef<HTMLButtonElement>(null);
  useMagnet(ref, 14);
  return (
    <button
      ref={ref}
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7C5CFF]/90 text-white font-semibold shadow-[0_12px_40px_rgba(124,92,255,0.35)] px-6 py-3 overflow-hidden"
      onMouseMove={(e)=>{
        const r = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
        (e.currentTarget as HTMLElement).style.setProperty("--rx", `${((e.clientX - r.left)/r.width)*100}%`);
        (e.currentTarget as HTMLElement).style.setProperty("--ry", `${((e.clientY - r.top)/r.height)*100}%`);
      }}
    >
      {Icon && <Icon className="h-5 w-5" />} {label}
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ background: "radial-gradient(140px 140px at var(--rx,50%) var(--ry,50%), rgba(53,224,255,.18), transparent 60%)" }} />
    </button>
  );
}
function GhostButton({ label, icon: Icon, onClick }:{ label:string; icon?:any; onClick?:()=>void }){
  const ref = useRef<HTMLButtonElement>(null);
  useMagnet(ref, 16);
  return (
    <button ref={ref} onClick={onClick} className="group rounded-2xl border border-white/15 font-semibold hover:bg-white/5 px-6 py-3 inline-flex items-center gap-2 transition">
      {Icon && <Icon className="h-5 w-5" />} {label}
    </button>
  );
}

/* ============================== back to top ============================== */
function BackToTop({ visible }:{ visible:boolean }){
  return createPortal(
    <button
      aria-label="Back to top"
      onClick={()=>window.scrollTo({ top:0, behavior:"smooth" })}
      className={`fixed right-4 bottom-4 z-[9996] rounded-full p-3 ${glass} hover:bg-white/10 transition ${visible?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>,
    document.body
  );
}

/* ============================== download sparkle ============================== */
function downloadWithAnimation(name:string){
  const host = document.createElement("div");
  host.style.position="fixed"; host.style.left="50%"; host.style.top="50%";
  host.style.transform="translate(-50%,-50%)"; host.style.pointerEvents="none"; host.style.zIndex="9999";
  document.body.appendChild(host);

  const dots = Array.from({ length: 16 }).map(()=>{
    const d = document.createElement("span");
    d.style.position="absolute"; d.style.left="0"; d.style.top="0";
    d.style.width="8px"; d.style.height="8px"; d.style.borderRadius="9999px";
    d.style.background="linear-gradient(90deg,#35E0FF,#6C63FF)";
    host.appendChild(d);
    return d;
  });

  dots.forEach((d,i)=>{
    const tx = (Math.random()*280 - 140);
    const ty = (Math.random()*240 - 120);
    animate(d, { opacity: [0.7,0], transform: ["translate(0px,0px) scale(0.7)", `translate(${tx}px,${ty}px) scale(0.4)`], duration: 650, easing: "easeOutCubic", delay: i*8 });
  });
  setTimeout(()=>host.remove(), 700);
  console.log("Download:", name);
}

/* ============================== style inject ============================== */
function StyleInjections(){
  return <style>{`
    .pill { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.1); border-radius:.6rem; padding:.25rem .5rem; font-size:.8rem }
  `}</style>;
}

/* ============================== exports ============================== */
export default PrivacyPolicy;
