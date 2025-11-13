// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, ExternalLink, Download, Award, TrendingUp, Users } from 'lucide-react';

// const Press = () => {
//   const pressReleases = [
//     {
//       id: 1,
//       title: 'Fraud Buster Raises $15M Series A to Expand Fraud Prevention Solutions',
//       date: '2025-01-10',
//       category: 'Funding',
//       excerpt: 'Leading fintech security company secures funding from prominent VCs to accelerate growth and enhance AI-powered fraud detection capabilities.',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Fraud Buster Partners with Major Financial Institution to Reduce Digital Lending Fraud',
//       date: '2024-12-15',
//       category: 'Partnership',
//       excerpt: 'Strategic partnership results in 94% reduction in fraud attempts and enhanced compliance with regulatory guidelines for digital lending platforms.'
//     },
//     {
//       id: 3,
//       title: 'FraudBuster API Achieves Compliance Certification for Digital Payment Security',
//       date: '2024-11-28',
//       category: 'Product',
//       excerpt: 'Fraud Buster\'s flagship product receives official certification for compliance with digital payment security guidelines.'
//     },
//     {
//       id: 4,
//       title: 'Fraud Buster Expands Team with Key Technology Hires',
//       date: '2024-11-05',
//       category: 'Company',
//       excerpt: 'Company adds 25 new team members including former regulatory officials and fintech veterans to strengthen compliance and product development.'
//     },
//     {
//       id: 5,
//       title: 'Industry Report: Fraud Buster Prevents $100M in Fraudulent Transactions',
//       date: '2024-10-20',
//       category: 'Milestone',
//       excerpt: 'Annual security report reveals significant impact on fintech ecosystem with advanced AI-powered fraud detection technology.'
//     }
//   ];

//   const mediaKit = [
//     {
//       title: 'Company Logo Pack',
//       description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
//       fileSize: '2.5 MB'
//     },
//     {
//       title: 'Product Screenshots',
//       description: 'FraudBuster dashboard and API documentation visuals',
//       fileSize: '8.1 MB'
//     },
//     {
//       title: 'Executive Photos',
//       description: 'Professional headshots of leadership team',
//       fileSize: '4.2 MB'
//     },
//     {
//       title: 'Company Fact Sheet',
//       description: 'Key statistics, milestones, and company information',
//       fileSize: '1.8 MB'
//     }
//   ];

//   const awards = [
//     {
//       title: 'Best Fintech Security Solution 2024',
//       organization: 'Global Fintech Awards',
//       date: '2024-12-01',
//       description: 'Recognized for innovative fraud prevention technology in the market'
//     },
//     {
//       title: 'Innovation Challenge Winner',
//       organization: 'Financial Regulatory Authority',
//       date: '2024-09-15',
//       description: 'Selected as winner for digital payment security innovation challenge'
//     },
//     {
//       title: 'Startup of the Year - Fintech Category',
//       organization: 'Tech Summit',
//       date: '2024-08-20',
//       description: 'Honored for contribution to fintech ecosystem and fraud prevention'
//     }
//   ];

//   const mediaContacts = [
//     {
//       name: 'Media Relations Team',
//       title: 'Head of Communications',
//       email: 'info@fraudbuster.co.in',
//       phone: 'Contact via email'
//     },
//     {
//       name: 'Marketing Team',
//       title: 'VP Marketing',
//       email: 'info@fraudbuster.co.in',
//       phone: 'Contact via email'
//     }
//   ];

//   const companyStats = [
//     { metric: '$500M+', label: 'Fraud Prevented', description: 'Total fraudulent transactions blocked' },
//     { metric: '100+', label: 'Enterprise Clients', description: 'NBFCs and fintech companies served' },
//     { metric: '99.7%', label: 'Detection Accuracy', description: 'AI-powered fraud detection rate' },
//     { metric: '24/7', label: 'Monitoring', description: 'Continuous security operations' }
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
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Press & Media
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Latest news, press releases, and media resources about Fraud Buster's 
//               mission to secure the global fintech ecosystem.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Company Stats */}
//       <section className="py-12 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <div className="grid md:grid-cols-4 gap-8">
//             {companyStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
//                 <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
//                 <div className="text-gray-400 text-sm">{stat.description}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Press Release */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mb-16"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
//               Latest News
//             </h2>
//             <p className="text-xl text-gray-300 text-center">
//               Stay updated with Fraud Buster's latest developments and milestones
//             </p>
//           </motion.div>

//           {/* Featured Article */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-12 hover:bg-white/10 transition-all duration-300"
//           >
//             <div className="p-8">
//               <div className="flex items-center mb-4">
//                 <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
//                   Featured
//                 </span>
//                 <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
//                   {pressReleases[0].category}
//                 </span>
//               </div>
              
//               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                 {pressReleases[0].title}
//               </h3>
              
//               <div className="flex items-center text-gray-400 mb-6">
//                 <Calendar className="h-5 w-5 mr-2" />
//                 {pressReleases[0].date}
//               </div>
              
//               <p className="text-gray-300 text-lg leading-relaxed mb-8">
//                 {pressReleases[0].excerpt}
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
//                   Read Full Release
//                   <ExternalLink className="ml-2 h-4 w-4" />
//                 </button>
//                 <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center">
//                   Download PDF
//                   <Download className="ml-2 h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Press Releases Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {pressReleases.slice(1).map((release, index) => (
//               <motion.div
//                 key={release.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
//                     {release.category}
//                   </span>
//                 </div>
                
//                 <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
//                   {release.title}
//                 </h3>
                
//                 <div className="flex items-center text-gray-400 mb-4">
//                   <Calendar className="h-4 w-4 mr-2" />
//                   {release.date}
//                 </div>
                
//                 <p className="text-gray-300 mb-6 leading-relaxed">
//                   {release.excerpt}
//                 </p>
                
//                 <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
//                   Read More
//                   <ExternalLink className="ml-2 h-4 w-4" />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Awards & Recognition */}
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
//               Awards & Recognition
//             </h2>
//             <p className="text-xl text-gray-300">
//               Industry recognition for our innovation in fintech security
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {awards.map((award, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
//                   <Award className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-3">{award.title}</h3>
//                 <p className="text-cyan-400 font-medium mb-2">{award.organization}</p>
//                 <p className="text-gray-400 text-sm mb-4">{award.date}</p>
//                 <p className="text-gray-300 leading-relaxed">{award.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Media Kit */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-16">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Media Kit
//               </h2>
//               <p className="text-xl text-gray-300 mb-8">
//                 Download high-quality assets, logos, and company information for your stories and articles.
//               </p>
              
//               <div className="space-y-4">
//                 {mediaKit.map((item, index) => (
//                   <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="text-white font-semibold mb-1">{item.title}</h3>
//                         <p className="text-gray-400 text-sm">{item.description}</p>
//                       </div>
//                       <div className="flex items-center space-x-3">
//                         <span className="text-gray-500 text-sm">{item.fileSize}</span>
//                         <button className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-colors">
//                           <Download className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Media Contacts
//               </h2>
//               <p className="text-xl text-gray-300 mb-8">
//                 Get in touch with our media team for interviews, quotes, and additional information.
//               </p>
              
//               <div className="space-y-6">
//                 {mediaContacts.map((contact, index) => (
//                   <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
//                     <h3 className="text-xl font-bold text-white mb-2">{contact.name}</h3>
//                     <p className="text-cyan-400 font-medium mb-4">{contact.title}</p>
//                     <div className="space-y-2">
//                       <p className="text-gray-300">
//                         <span className="font-medium">Email:</span> {contact.email}
//                       </p>
//                       <p className="text-gray-300">
//                         <span className="font-medium">Phone:</span> {contact.phone}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Working on a Story?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               We're here to help with expert insights on fintech security, fraud prevention, 
//               and the digital payments landscape.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Contact Media Team
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Download Media Kit
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Press;









//<--------------------------------------------------------------Design changed---------------------------------------------------------->






//<---------------------------------------------------------------------------------------------------------------------------------------------->


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  Globe, Star, Shield, Newspaper, Award, Users, Mail, Download, ExternalLink,
  Calendar, Filter, Search, Copy, CheckCircle2, Quote, ArrowRight, Image as ImageIcon
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";

/* ------------------------------------------------------------------ */
/* Shared tokens                                                       */
/* ------------------------------------------------------------------ */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

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

/* ------------------------------------------------------------------ */
/* Top load bar — rendered to body to avoid ancestor transforms        */
/* ------------------------------------------------------------------ */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = barRef.current!;
    const onScroll = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight - doc.clientHeight) || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const node = (
    <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
      <div
        ref={barRef}
        className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
  return createPortal(node, document.body);
}

/* ------------------------------------------------------------------ */
/* Cursor particles — rendered to body to keep true fixed positioning  */
/* ------------------------------------------------------------------ */
function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const onMove = (e: MouseEvent) => {
      // absolute CSS pixels following the pointer
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const parts: P[] = [];

    const resize = () => {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);            // now draw in CSS pixels
      ctx.globalCompositeOperation = "lighter";
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.2 + 0.6;
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
      }
    };
    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const loop = () => {
      // clear in CSS pixels (because context is scaled)
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life *= 0.96;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
        ctx.fill();
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
  }, []);

  const node = (
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
        aria-hidden
      />
    </>
  );
  return createPortal(node, document.body);
}

/* ------------------------------------------------------------------ */
/* Small utilities                                                      */
/* ------------------------------------------------------------------ */
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

type Release = {
  id: number;
  title: string;
  date: string;
  category: "Funding" | "Partnership" | "Product" | "Company" | "Milestone";
  excerpt: string;
  featured?: boolean;
  link?: string;
  pdf?: string;
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const Press: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* BG parallax — apply transform ONLY to the background layer, not the root */
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

  /* Headline typewriter + floating dots */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const tl = createTimeline();

    if (headlineRef.current) {
      const text = "Press & Media — FraudBuster";
      headlineRef.current.innerHTML = "";
      const letters = text.split("").map((c) => (c === " " ? "&nbsp;" : c));
      letters.forEach((c) => {
        const span = document.createElement("span");
        span.className = "inline-block opacity-0 will-change-transform";
        span.innerHTML = c;
        headlineRef.current!.appendChild(span);
      });
      const nodes = headlineRef.current.querySelectorAll("span");
      tl.add(nodes as unknown as Element[], {
        opacity: [{ from: 0, to: 1 }],
        translateY: [{ from: 16, to: 0 }],
        delay: stagger(14),
        duration: 420,
        ease: "out(3)",
      });
    }
    if (sublineRef.current) {
      tl.add(
        sublineRef.current as unknown as Element,
        {
          opacity: [{ from: 0, to: 1 }],
          translateY: [{ from: 12, to: 0 }],
          duration: 360,
          ease: "out(3)",
        },
        "-=180"
      );
    }
    if (trailRef.current) {
      const dots = Array.from({ length: 16 }).map(() => {
        const d = document.createElement("span");
        d.className = "absolute h-1.5 w-1.5 rounded-full bg-[#35E0FF]/60";
        d.style.left = `${Math.random() * 100}%`;
        d.style.top = `${Math.random() * 100}%`;
        trailRef.current!.appendChild(d);
        animate(d, {
          translateY: [{ from: random(-12, 12, 0), to: random(-12, 12, 0) }],
          translateX: [{ from: random(-12, 12, 0), to: random(-12, 12, 0) }],
          direction: "alternate",
          duration: 1800 + Math.random() * 1200,
          loop: true,
          ease: "inOut(2)",
        });
        return d;
      });
      return () => { dots.forEach((n) => n.remove()); };
    }
  }, [reduced]);

  /* Shape morph */
  const [shape, setShape] = useState<"circle" | "triangle" | "square">("circle");
  useEffect(() => {
    const cycle: typeof shape[] = ["circle", "triangle", "square"];
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % cycle.length; setShape(cycle[i]); }, 2600);
    return () => clearInterval(id);
  }, []);

  /* Data */
  const releases: Release[] = [
    {
      id: 1,
      title: "FraudBuster Raises $15M Series A to Expand Fraud Prevention Solutions",
      date: "2025-01-10",
      category: "Funding",
      excerpt: "FraudBuster secures investment from leading fintech VCs to fuel next-gen AI and global expansion across payments, lending, and banking.",
      featured: true, link: "#", pdf: "#",
    },
    {
      id: 2,
      title: "FraudBuster Partners with Major Financial Institution to Reduce Digital Lending Fraud",
      date: "2024-12-15",
      category: "Partnership",
      excerpt: "A strategic collaboration delivers a measurable 94% reduction in fraud attempts, raising the bar for digital lending security.",
      link: "#", pdf: "#",
    },
    {
      id: 3,
      title: "FraudBuster API Achieves Compliance Certification for Digital Payment Security",
      date: "2024-11-28",
      category: "Product",
      excerpt: "Our flagship platform is officially certified for digital payment security guidelines—trusted by enterprise risk teams.",
      link: "#", pdf: "#",
    },
    {
      id: 4,
      title: "FraudBuster Expands Team with Key Technology Hires",
      date: "2024-11-05",
      category: "Company",
      excerpt: "25 new experts join FraudBuster, including fintech veterans and regulatory specialists, strengthening our global scale-up.",
      link: "#", pdf: "#",
    },
    {
      id: 5,
      title: "Industry Report: FraudBuster Prevents $100M in Fraudulent Transactions",
      date: "2024-10-20",
      category: "Milestone",
      excerpt: "Annual impact report reveals over $100M blocked for clients across banking, fintech and payments using our AI engine.",
      link: "#", pdf: "#",
    },
  ];

  const companyStats = [
    { metric: "$500M+", label: "Fraud Prevented", desc: "Total blocked across live deployments" },
    { metric: "100+", label: "Enterprise Clients", desc: "NBFCs, banks & fintechs served" },
    { metric: "99.7%", label: "Detection Accuracy", desc: "Explainable decisions w/ evidence" },
    { metric: "24/7", label: "Monitoring", desc: "Global SOC & incident response" },
  ];

  const mediaKit = [
    { title: "Company Logo Pack", description: "Logos (PNG, SVG, EPS)", fileSize: "2.5 MB" },
    { title: "Product Screenshots", description: "Dashboard & API visuals", fileSize: "8.1 MB" },
    { title: "Executive Photos", description: "Leadership headshots", fileSize: "4.2 MB" },
    { title: "Company Fact Sheet", description: "Stats, milestones, boilerplate", fileSize: "1.8 MB" },
  ];

  const awards = [
    { title: "Best Fintech Security Solution 2024", org: "Global Fintech Awards", date: "2024-12-01", desc: "Pioneering fraud-prevention innovation." },
    { title: "Innovation Challenge Winner", org: "Financial Regulatory Authority", date: "2024-09-15", desc: "Excellence in digital payment security." },
    { title: "Startup of the Year – Fintech", org: "Tech Summit", date: "2024-08-20", desc: "Impact and leadership in fintech security." },
  ];

  /* Filters & search */
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Release["category"] | "All">("All");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return releases.filter(r => {
      const okCat = cat === "All" ? true : r.category === cat;
      const okQ = !s || r.title.toLowerCase().includes(s) || r.excerpt.toLowerCase().includes(s);
      return okCat && okQ;
    });
  }, [q, cat]);

  /* Copy email */
  const [copied, setCopied] = useState(false);
  const copyPressEmail = async () => {
    try {
      await navigator.clipboard.writeText("press@fraudbuster.co");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="pt-16 relative">
      {/* True-fixed overlays */}
      <ScrollProgress />
      <CursorParticles />

      {/* Background (parallax applies here only) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            ...parallax,               // ✅ move transform here
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <Shield className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Press · Trust & Impact</span>
              </div>

              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Press & Media — FraudBuster
              </h1>
              <p ref={sublineRef} className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                We secure digital finance at global scale. Explore our news, milestones, and media resources to tell the story behind safer payments.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl" data-reveal>
                <HeroMetric icon={Globe} label="Markets" value="India · SEA · MENA" />
                <HeroMetric icon={Users} label="Enterprises" value="100+ teams" />
                <HeroMetric icon={Star} label="Impact" value="$500M+ saved" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <Link
                  to="/contact"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                >
                  Contact PR
                </Link>
                <button
                  onClick={copyPressEmail}
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {copied ? "press@fraudbuster.co copied!" : "press@fraudbuster.co"}
                </button>
              </div>
            </div>

            {/* Shape morph + trail */}
            <div className={`rounded-2xl ${glass} p-6 relative`}>
              <div className="text-sm text-white/60 mb-2">Brand pulse</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden h-[220px]">
                <div ref={trailRef} className="absolute inset-0 pointer-events-none" />
                <div className="absolute right-6 top-6 text-xs text-white/60 inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" /> Updated daily
                </div>
                <div className="w-40 h-40 absolute left-8 top-8">
                  <div
                    className={
                      `w-full h-full transition-all duration-700
                      ${shape === "circle" ? "rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF]" :
                        shape === "triangle" ? "bg-gradient-to-r from-[#4AF2C6] to-[#6C63FF]" :
                          "rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]"}`
                    }
                    style={{ clipPath: shape === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : undefined }}
                  />
                </div>
                <ul className="absolute bottom-4 right-4 text-xs space-y-1 text-white/70">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Coverage uptick</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Brand assets refreshed</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> Awards season ready</li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={Newspaper} text="Tier-1 pubs" />
                <Badge icon={Award} text="3× awards" />
                <Badge icon={ExternalLink} text="Verified quotes" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-12 bg-white/[0.04]">
        <div className="mx-10 max-w-none grid md:grid-cols-4 gap-8" data-reveal>
          {companyStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-[#35E0FF] mb-2">{s.metric}</div>
              <div className="text-lg font-semibold">{s.label}</div>
              <div className="text-white/70 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== MEDIA MENTIONS MARQUEE ===================== */}
      <section className="py-16">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>In the media</h2>
            <p className="text-lg text-white/70" data-reveal>Highlights from recent coverage and industry conversations.</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee will-change-transform">
              {[
                { name: "The Fintech Times" }, { name: "Payments Journal" }, { name: "Risk & Compliance" },
                { name: "Economic Daily" }, { name: "Tech Insider" }, { name: "Banking Next" },
              ].map((p, i) => <Pill key={i} text={p.name} />)}
              {[
                { name: "The Fintech Times" }, { name: "Payments Journal" }, { name: "Risk & Compliance" },
                { name: "Economic Daily" }, { name: "Tech Insider" }, { name: "Banking Next" },
              ].map((p, i) => <Pill key={`dupe-${i}`} text={p.name} />)}
            </div>
            <style>{`
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-marquee { width: 200%; animation: marquee 24s linear infinite; }
            `}</style>
          </div>
        </div>
      </section>

      {/* ===================== FILTER + SEARCH ===================== */}
      <section className="py-6">
        <div className="mx-10 max-w-none" data-reveal>
          <div className={`rounded-2xl ${glass} p-4 flex flex-col md:flex-row gap-3 md:items-center md:justify-between`}>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-white/70" />
              <div className="flex gap-2">
                {(["All", "Funding", "Partnership", "Product", "Company", "Milestone"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`rounded-xl px-3 py-1.5 text-sm border transition ${
                      cat === c ? "border-[#35E0FF]/60 bg-white/[0.08]" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative min-w-[260px] md:w-[340px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search press releases…"
                className="w-full rounded-xl bg-white/[0.06] border border-white/10 pl-9 pr-3 py-2 outline-none focus:border-[#35E0FF]/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED + GRID ===================== */}
      <section className="py-20">
        <div className="mx-10 max-w-none">
          {filtered.find((r) => r.featured) && (
            <div className="mb-12" data-reveal>
              <div className={`${glass} rounded-3xl overflow-hidden hover:bg-white/[0.08] transition`}>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-sm">Funding</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{releases[0].title}</h3>
                  <div className="mt-2 flex items-center text-white/60 text-sm gap-2">
                    <Calendar className="h-4 w-4" /> {releases[0].date}
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed mt-5">{releases[0].excerpt}</p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <GhostButton icon={ExternalLink} label="Read full release" />
                    <GhostButton icon={Download} label="Download PDF" />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.filter((r) => !r.featured).map((r) => (<PressCard key={r.id} release={r} />))}
          </div>
        </div>
      </section>

      {/* ===================== QUOTES ===================== */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>What people say</h2>
            <p className="text-lg text-white/70" data-reveal>Analysts, customers, and the press on FraudBuster’s impact.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <QuoteCard
              text="FraudBuster turned our fraud program from reactive to predictive—risk dropped and approvals improved."
              cite="Chief Risk Officer, Digital Lender"
            />
            <QuoteCard
              text="A rare combination of explainable AI and regulatory readiness. FraudBuster is built for banks."
              cite="Industry Analyst"
            />
          </div>
        </div>
      </section>

      {/* ===================== MEDIA KIT & CONTACTS ===================== */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-reveal>
              <div className="flex items-center gap-2 mb-2 text-white/60 text-sm">
                <ImageIcon className="h-4 w-4" /> Brand assets
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Media kit</h2>
              <p className="text-white/75 mb-8">Download logos, screenshots, and our fact sheet for your stories.</p>
              <div className="space-y-4">
                {mediaKit.map((m) => (
                  <div key={m.title} className={`${glass} rounded-xl p-4 flex items-center justify-between hover:bg-white/[0.08] transition`}>
                    <div>
                      <div className="font-semibold">{m.title}</div>
                      <div className="text-white/60 text-sm">{m.description}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/50 text-sm">{m.fileSize}</span>
                      <button className="bg-[#35E0FF] hover:bg-[#4AF2C6] text-black/90 px-3 py-2 rounded-lg transition inline-flex items-center gap-2">
                        <Download className="h-4 w-4" /> Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition">
                  <Download className="h-4 w-4" /> Download all (zip)
                </button>
              </div>
            </div>

            <div data-reveal>
              <div className="flex items-center gap-2 mb-2 text-white/60 text-sm">
                <Mail className="h-4 w-4" /> Get in touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Media contacts</h2>
              <div className="space-y-6">
                {[
                  { name: "Media Relations Team", title: "Head of Communications", email: "press@fraudbuster.co", phone: "Email only" },
                  { name: "Marketing Team", title: "VP Marketing", email: "press@fraudbuster.co", phone: "Email only" },
                ].map((c) => (
                  <div key={c.name} className={`${glass} rounded-2xl p-6 hover:bg-white/[0.08] transition`}>
                    <div className="text-xl font-bold">{c.name}</div>
                    <div className="text-[#35E0FF] font-medium">{c.title}</div>
                    <div className="mt-3 text-white/80"><span className="font-semibold">Email:</span> {c.email}</div>
                    <div className="text-white/80"><span className="font-semibold">Phone:</span> {c.phone}</div>
                    <div className="mt-4 flex gap-2">
                      <Link to="/contact" className="rounded-xl bg-[#7C5CFF]/90 px-4 py-2 text-white text-sm hover:translate-y-[1px] transition inline-flex items-center gap-2">
                        <Mail className="h-4 w-4" /> Contact
                      </Link>
                      <button
                        onClick={copyPressEmail}
                        className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition inline-flex items-center gap-2"
                      >
                        <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy email"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-20" data-reveal>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold">Awards & recognition</h3>
              <p className="text-white/70">Industry validation of our innovation and reliability.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((a) => (
                <TiltCard key={a.title}>
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-2xl mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-semibold">{a.title}</div>
                    <div className="text-[#35E0FF] text-sm mt-1">{a.org}</div>
                    <div className="text-white/50 text-xs">{a.date}</div>
                    <p className="text-white/75 text-sm mt-3">{a.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24">
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Working on a story?</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
              We’ll provide quotes, demos, and data to help you cover how FraudBuster keeps digital finance safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Contact media <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
              >
                Company overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Subcomponents                                                       */
/* ------------------------------------------------------------------ */
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

function Badge({ icon: Icon, text }:{ icon: any; text: string }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function Pill({ text }:{ text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const enter = () => animate(el, { scale: [{ to: 1.05 }], duration: 160 });
    const leave = () => animate(el, { scale: [{ to: 1 }], duration: 160 });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return (
    <div ref={ref} className={`${glass} rounded-full px-4 py-2 inline-flex items-center gap-2 text-sm`}>
      <Newspaper className="h-4 w-4 text-[#35E0FF]" /> {text}
    </div>
  );
}

function PressCard({ release }: { release: Release }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 6);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-2xl p-6 transition will-change-transform hover:shadow-[0_10px_30px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.02 }], duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 160 })}
      data-reveal
    >
      <div className="flex items-center justify-between">
        <span className="bg-white/10 text-white/70 px-3 py-1 rounded-full text-xs">{release.category}</span>
        <span className="flex items-center gap-2 text-white/60 text-xs"><Calendar className="h-3.5 w-3.5" /> {release.date}</span>
      </div>
      <h3 className="text-xl font-bold mt-3">{release.title}</h3>
      <p className="text-white/80 mt-2">{release.excerpt}</p>
      <div className="mt-4 flex gap-2">
        <GhostButton icon={ExternalLink} label="Read more" />
        <GhostButton icon={Download} label="PDF" />
      </div>
    </div>
  );
}

function GhostButton({ icon: Icon, label }:{ icon: any; label: string }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition">
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-2xl p-6 transition will-change-transform hover:shadow-[0_10px_30px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.02 }], duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 160 })}
      data-reveal
    >
      {children}
    </div>
  );
}

function QuoteCard({ text, cite }:{ text: string; cite: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 6);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-2xl p-6 relative overflow-hidden`}
      style={{ backgroundImage: "radial-gradient(260px 260px at 30% 0%, rgba(53,224,255,0.12), transparent 70%)" }}
      data-reveal
    >
      <Quote className="absolute -top-6 -left-6 h-24 w-24 text-[#35E0FF]/20" />
      <p className="text-lg leading-relaxed relative z-10">{text}</p>
      <div className="mt-4 text-white/70 text-sm relative z-10">— {cite}</div>
    </div>
  );
}

export default Press;
