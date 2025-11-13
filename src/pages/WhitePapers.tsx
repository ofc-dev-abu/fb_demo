// import React from 'react';
// import { motion } from 'framer-motion';
// import { FileText, Download, Calendar, Eye, TrendingUp, Shield, Users } from 'lucide-react';

// const WhitePapers = () => {
//   const whitePapers = [
//     {
//       id: 1,
//       title: 'Digital Payment Guidelines 2025: Compliance Framework for Fintech Companies',
//       description: 'Comprehensive analysis of latest digital payment security guidelines and implementation strategies for fintech companies.',
//       category: 'Regulatory Compliance',
//       pages: 45,
//       publishDate: '2025-01-15',
//       downloadCount: 2847,
//       featured: true,
//       topics: [
//         'Payment System Vision 2025',
//         'Digital Payment Security Standards',
//         'Compliance Checklist for Fintechs',
//         'Risk Management Framework',
//         'Audit and Reporting Requirements'
//       ],
//       image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 2,
//       title: 'AI-Powered Fraud Detection in Banking: Implementation Guide',
//       description: 'Technical deep-dive into implementing machine learning algorithms for fraud detection in compliance with banking regulations.',
//       category: 'Technology',
//       pages: 38,
//       publishDate: '2025-01-10',
//       downloadCount: 1923,
//       topics: [
//         'Machine Learning Models for Fraud Detection',
//         'Real-time Processing Architecture',
//         'Data Privacy and Security',
//         'Integration with Core Banking Systems',
//         'Performance Optimization Strategies'
//       ],
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 3,
//       title: 'Digital Payment Fraud Landscape 2025: Trends, Threats, and Prevention Strategies',
//       description: 'In-depth analysis of digital payment fraud patterns and comprehensive prevention strategies for businesses and consumers.',
//       category: 'Security Research',
//       pages: 52,
//       publishDate: '2025-01-05',
//       downloadCount: 3156,
//       topics: [
//         'Digital Payment Transaction Flow Security',
//         'Common Fraud Vectors and Attack Patterns',
//         'Behavioral Analytics for Fraud Detection',
//         'Consumer Education and Awareness',
//         'Regulatory Response and Industry Best Practices'
//       ],
//       image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 4,
//       title: 'Financial Institution Digital Transformation: Security and Compliance Roadmap',
//       description: 'Strategic guide for financial institutions transitioning to digital operations while maintaining robust security and regulatory compliance.',
//       category: 'Digital Transformation',
//       pages: 41,
//       publishDate: '2024-12-28',
//       downloadCount: 1654,
//       topics: [
//         'Digital Lending Security Framework',
//         'Customer Onboarding and KYC Automation',
//         'Risk Assessment and Credit Scoring',
//         'Regulatory Technology (RegTech) Solutions',
//         'Change Management and Staff Training'
//       ],
//       image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 5,
//       title: 'Synthetic Identity Fraud: Detection and Prevention Framework',
//       description: 'Comprehensive study on synthetic identity fraud trends in the market and advanced detection methodologies.',
//       category: 'Fraud Research',
//       pages: 35,
//       publishDate: '2024-12-20',
//       downloadCount: 2234,
//       topics: [
//         'Synthetic Identity Creation Techniques',
//         'Detection Algorithms and Data Sources',
//         'Cross-Industry Collaboration Strategies',
//         'Legal and Regulatory Considerations',
//         'Technology Solutions and Implementation'
//       ],
//       image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 6,
//       title: 'Account Aggregator Framework: Security Implementation Guide',
//       description: 'Technical implementation guide for the Account Aggregator framework with focus on data security and privacy.',
//       category: 'Regulatory Technology',
//       pages: 29,
//       publishDate: '2024-12-15',
//       downloadCount: 1876,
//       topics: [
//         'AA Framework Architecture and Components',
//         'Data Security and Encryption Standards',
//         'Consent Management and User Privacy',
//         'API Security and Authentication',
//         'Compliance Monitoring and Reporting'
//       ],
//       image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
//   ];

//   const categories = ['All', 'Regulatory Compliance', 'Technology', 'Security Research', 'Digital Transformation', 'Fraud Research', 'Regulatory Technology'];
//   const [selectedCategory, setSelectedCategory] = React.useState('All');

//   const filteredPapers = selectedCategory === 'All' 
//     ? whitePapers 
//     : whitePapers.filter(paper => paper.category === selectedCategory);

//   const featuredPaper = whitePapers.find(paper => paper.featured);

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
//               Research & White Papers
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               In-depth research and analysis on fintech security, regulatory compliance, 
//               and fraud prevention in the Indian market.
//             </p>
//           </motion.div>

//           {/* Category Filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-3 mb-12"
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
//                   selectedCategory === category
//                     ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
//                     : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured White Paper */}
//       {featuredPaper && selectedCategory === 'All' && (
//         <section className="py-12 bg-black/20">
//           <div className="mx-10 max-w-none">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
//             >
//               <div className="grid lg:grid-cols-2 gap-8">
//                 <div className="relative h-64 lg:h-full">
//                   <img
//                     src={featuredPaper.image}
//                     alt={featuredPaper.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       Featured Research
//                     </span>
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
//                       <div className="flex items-center justify-between text-white text-sm">
//                         <span className="flex items-center">
//                           <FileText className="h-4 w-4 mr-1" />
//                           {featuredPaper.pages} pages
//                         </span>
//                         <span className="flex items-center">
//                           <Download className="h-4 w-4 mr-1" />
//                           {featuredPaper.downloadCount.toLocaleString()} downloads
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-8 flex flex-col justify-center">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
//                       {featuredPaper.category}
//                     </span>
//                     <span className="text-gray-400 text-sm flex items-center">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {featuredPaper.publishDate}
//                     </span>
//                   </div>
                  
//                   <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                     {featuredPaper.title}
//                   </h2>
                  
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {featuredPaper.description}
//                   </p>
                  
//                   <div className="mb-6">
//                     <h4 className="text-white font-semibold mb-3">Key Topics Covered:</h4>
//                     <ul className="space-y-2">
//                       {featuredPaper.topics.slice(0, 3).map((topic, index) => (
//                         <li key={index} className="flex items-center text-gray-300">
//                           <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
//                           {topic}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
//                     <Download className="mr-2 h-5 w-5" />
//                     Download White Paper
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* White Papers Grid */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPapers.map((paper, index) => (
//               <motion.div
//                 key={paper.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={paper.image}
//                     alt={paper.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
//                       {paper.category}
//                     </span>
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
//                       <div className="flex items-center justify-between text-white text-xs">
//                         <span className="flex items-center">
//                           <FileText className="h-3 w-3 mr-1" />
//                           {paper.pages}p
//                         </span>
//                         <span className="flex items-center">
//                           <Eye className="h-3 w-3 mr-1" />
//                           {paper.downloadCount.toLocaleString()}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
//                     <span className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {paper.publishDate}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
//                     {paper.title}
//                   </h3>
                  
//                   <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
//                     {paper.description}
//                   </p>
                  
//                   <div className="mb-4">
//                     <div className="text-xs text-gray-500 mb-2">Key Topics:</div>
//                     <div className="flex flex-wrap gap-1">
//                       {paper.topics.slice(0, 2).map((topic, idx) => (
//                         <span key={idx} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
//                           {topic.length > 20 ? topic.substring(0, 20) + '...' : topic}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm">
//                     <Download className="mr-2 h-4 w-4" />
//                     Download PDF
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Research Impact
//             </h2>
//             <p className="text-xl text-gray-300">
//               Our research drives industry standards and best practices
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-4 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                 <FileText className="h-8 w-8 text-white" />
//               </div>
//               <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
//               <div className="text-gray-300">Research Papers</div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                 <Download className="h-8 w-8 text-white" />
//               </div>
//               <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
//               <div className="text-gray-300">Downloads</div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                 <Users className="h-8 w-8 text-white" />
//               </div>
//               <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
//               <div className="text-gray-300">Industry Citations</div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="text-center"
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4">
//                 <TrendingUp className="h-8 w-8 text-white" />
//               </div>
//               <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
//               <div className="text-gray-300">Implementation Rate</div>
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
//               Stay Informed with Latest Research
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Subscribe to receive notifications about new white papers and research publications.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//               />
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
//                 Subscribe
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default WhitePapers;





//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








//<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->





/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  FileText, Download, Calendar, Eye, TrendingUp, Shield, Users, Filter, Search as SearchIcon,
  X, Award, Copy, CheckCircle2, Image as ImageIcon, Sparkles, Bookmark
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";

/* =========================================================================
   Shared look & motion (keeps IntegrationGuide palette/feel)
   ========================================================================= */
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

/* ============================ Top Progress (Portal) ============================ */
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
  return createPortal(
    <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
      <div
        ref={barRef}
        className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>,
    document.body
  );
}

/* ============================ Cursor Particles (Portal) ============================ */
function CursorParticles({ paused = false }:{ paused?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const savedPaused = useRef(paused);

  useEffect(() => { savedPaused.current = paused; }, [paused]);

  useEffect(() => {
    const dot = dotRef.current!;
    const onMove = (e: MouseEvent) => {
      if (savedPaused.current) return;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    type P = { x:number; y:number; vx:number; vy:number; life:number };
    const parts: P[] = [];
    let raf = 0;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = "lighter";
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x:number, y:number) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.2 + 0.6;
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
      }
    };
    const onMove = (e: MouseEvent) => { if (!savedPaused.current) spawn(e.clientX, e.clientY); };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (!savedPaused.current) {
        for (let i = parts.length - 1; i >= 0; i--) {
          const p = parts[i];
          p.x += p.vx; p.y += p.vy; p.life *= 0.96;
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
          g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
          g.addColorStop(1, "rgba(124,92,255,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
          ctx.fill();
          if (p.life < 0.05) parts.splice(i, 1);
        }
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

  return createPortal(
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden />
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ${paused ? "opacity-0" : "opacity-100"} bg-[#7C5CFF] transition-opacity duration-150`}
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
        aria-hidden
      />
    </>,
    document.body
  );
}

/* ============================ Utilities ============================ */
function useReveals(containerRefs: React.MutableRefObject<HTMLElement[]>, enabled = true) {
  useEffect(() => {
    const nodes = containerRefs.current || [];
    if (!nodes.length || !enabled) return;
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
    }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [containerRefs, enabled]);
}

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
      el.style.willChange = "transform";
      el.style.transform = `translateZ(0) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => { el.style.transform = "translateZ(0) perspective(900px) rotateX(0) rotateY(0)"; el.style.willChange = "auto"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref, max]);
}

/* =========================================================================
   Types & sample data
   ========================================================================= */
type Paper = {
  id: number;
  title: string;
  description: string;
  category: string;
  pages: number;
  publishDate: string;
  downloadCount: number;
  featured?: boolean;
  topics: string[];
  image: string;
};

const SEED_PAPERS: Paper[] = [
  {
    id: 1,
    title: "Digital Payment Guidelines 2025: Compliance Framework for Fintech Companies",
    description: "Comprehensive analysis of the latest digital payment security guidelines and implementation strategies for fintech companies.",
    category: "Regulatory Compliance",
    pages: 45,
    publishDate: "2025-01-15",
    downloadCount: 2847,
    featured: true,
    topics: ["Payment System Vision 2025","Security Standards","Compliance Checklist","Risk Management","Audit & Reporting"],
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "AI-Powered Fraud Detection in Banking: Implementation Guide",
    description: "Technical deep-dive into implementing machine learning for fraud detection while meeting banking regulations.",
    category: "Technology",
    pages: 38,
    publishDate: "2025-01-10",
    downloadCount: 1923,
    topics: ["ML Models","Real-time Architecture","Data Privacy","Core Banking Integration","Performance Tuning"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Digital Payment Fraud Landscape 2025: Trends, Threats, and Prevention",
    description: "Analysis of payment fraud patterns and comprehensive prevention strategies for businesses and consumers.",
    category: "Security Research",
    pages: 52,
    publishDate: "2025-01-05",
    downloadCount: 3156,
    topics: ["Flow Security","Fraud Vectors","Behavioral Analytics","Consumer Awareness","Best Practices"],
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "FI Digital Transformation: Security & Compliance Roadmap",
    description: "Guide for FIs modernizing operations while maintaining robust security and compliance.",
    category: "Digital Transformation",
    pages: 41,
    publishDate: "2024-12-28",
    downloadCount: 1654,
    topics: ["Lending Security","KYC Automation","Risk & Scoring","RegTech","Change Management"],
    image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Synthetic Identity Fraud: Detection & Prevention Framework",
    description: "Study of synthetic identity fraud trends and advanced detection methodologies.",
    category: "Fraud Research",
    pages: 35,
    publishDate: "2024-12-20",
    downloadCount: 2234,
    topics: ["Creation Techniques","Detection Algorithms","Collaboration","Legal","Implementation"],
    image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Account Aggregator Framework: Security Implementation Guide",
    description: "Technical implementation guide for AA framework with a focus on data security and privacy.",
    category: "Regulatory Technology",
    pages: 29,
    publishDate: "2024-12-15",
    downloadCount: 1876,
    topics: ["AA Architecture","Encryption","Consent & Privacy","API Security","Compliance Monitoring"],
    image: "https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

/* =========================================================================
   Page
   ========================================================================= */
const WhitePapers: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Modal open flag (pauses animations & cursor layer) */
  const [modalOpen, setModalOpen] = useState(false);

  /* Parallax (disabled while modal open) */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (!modalOpen) setMouse({ x: e.clientX, y: e.clientY }); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [modalOpen]);
  const parallax = useMemo(
    () => ({
      transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.01}px, ${(mouse.y - window.innerHeight / 2) * 0.01}px, 0)`,
    }),
    [mouse.x, mouse.y]
  );

  /* Section reveals */
  const sectionsRef = useRef<HTMLElement[]>([]);
  useReveals(sectionsRef, !reduced);

  /* Hero type-on */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced) return;
    const tl = createTimeline();

    if (headlineRef.current) {
      const text = "Research & White Papers";
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
      const dots = Array.from({ length: 12 }).map(() => {
        const d = document.createElement("span");
        d.className = "absolute h-1.5 w-1.5 rounded-full bg-[#35E0FF]/60";
        d.style.left = `${Math.random() * 100}%`;
        d.style.top = `${Math.random() * 100}%`;
        trailRef.current!.appendChild(d);
        animate(d, {
          translateY: [{ from: random(-12, 12, 0), to: random(-12, 12, 0) }],
          translateX: [{ from: random(-12, 12, 0), to: random(-12, 12, 0) }],
          direction: "alternate",
          duration: 1600 + Math.random() * 900,
          loop: true,
          ease: "inOut(2)",
        });
        return d;
      });
      return () => { dots.forEach((n) => n.remove()); };
    }
  }, [reduced]);

  /* Data / controls */
  const [papers] = useState<Paper[]>(SEED_PAPERS);
  const categories = ["All", ...Array.from(new Set(papers.map((p) => p.category)))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"new" | "popular" | "pages">("new");
  const [view, setView] = useState<"business" | "tech">("business");

  const filtered = useMemo(() => {
    let list = papers.slice();
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.topics.some((t) => t.toLowerCase().includes(q))
      );
    }
    switch (sort) {
      case "new":
        list.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
        break;
      case "popular":
        list.sort((a, b) => b.downloadCount - a.downloadCount);
        break;
      case "pages":
        list.sort((a, b) => b.pages - a.pages);
        break;
    }
    return list;
  }, [papers, category, query, sort]);

  const featured = useMemo(() => papers.find((p) => p.featured), [papers]);

  /* Modal preview */
  const [preview, setPreview] = useState<Paper | null>(null);
  useEffect(() => { setModalOpen(!!preview); }, [preview]);

  /* Copy email CTA */
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("research@fraudbuster.co");
      setCopied(true);
      setTimeout(() => setCopied(false), 900);
    } catch {}
  };

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles paused={modalOpen} />

      {/* Background (parallax) */}
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

      {/* =========================== HERO =========================== */}
      <section className="relative overflow-hidden min-h-[72vh] flex items-center">
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <Shield className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Research · Evidence & Impact</span>
              </div>
              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Research & White Papers
              </h1>
              <p ref={sublineRef} className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                {view === "business"
                  ? "Clear, ROI-focused guidance for fraud reduction, customer trust, and regulatory wins."
                  : "Reference-grade designs: models, pipelines, evidence schemas, and API patterns."}
              </p>

              <div className="mt-6 flex gap-2" data-reveal>
                <Toggle value={view} onChange={setView} />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl" data-reveal>
                <HeroMetric icon={FileText} label="Papers" value="25+" />
                <HeroMetric icon={Users} label="Citations" value="500+" />
                <HeroMetric icon={TrendingUp} label="Downloads" value="50K+" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <Link
                  to="/contact"
                  className="btn-primary"
                >
                  Request briefing
                </Link>
                <button
                  onClick={copyEmail}
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "research@fraudbuster.co copied!" : "research@fraudbuster.co"}
                </button>
              </div>
            </div>

            {/* Hero visual */}
            <div className={`rounded-2xl ${glass} p-6 relative`}>
              <div className="text-sm text-white/60 mb-2">What’s inside our papers</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden h-[260px]">
                <div ref={trailRef} className="absolute inset-0 pointer-events-none" />
                <ul className="absolute left-5 top-5 text-sm space-y-2 text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Explainable methods</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Regulatory alignment</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Integration patterns</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> KPIs & benchmarks</li>
                </ul>
                <div className="absolute right-6 bottom-6 text-xs text-white/60 inline-flex items-center gap-2">
                  <Award className="h-3.5 w-3.5" /> Peer-referenced
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={Shield} text="Risk science" />
                <Badge icon={TrendingUp} text="ROI models" />
                <Badge icon={Eye} text="Real-world data" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SPOTLIGHT STRIP ===================== */}
      <SpotlightStrip paused={modalOpen} />

      {/* ===================== CONTROLS ===================== */}
      <section className="py-8" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <div className="mx-10 max-w-none" data-reveal>
          <div className={`${glass} rounded-2xl p-4 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between`}>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-white/70" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`chip ${category === c ? "chip-active" : ""}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative min-w-[240px]">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search titles, topics, descriptions…"
                  className="input"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="select"
              >
                <option value="new">Newest</option>
                <option value="popular">Most downloaded</option>
                <option value="pages">Most pages</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED ===================== */}
      {featured && category === "All" && !query && (
        <section className="py-12 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[1] = el)}>
          <div className="mx-10 max-w-none">
            <div className={`${glass} rounded-3xl overflow-hidden`} data-reveal>
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="badge-gradient">Featured</span>
                    <span className="badge">{featured.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-[2px] rounded-lg p-3">
                      <div className="flex items-center justify-between text-white text-sm">
                        <span className="flex items-center"><FileText className="h-4 w-4 mr-1" />{featured.pages} pages</span>
                        <span className="flex items-center"><Download className="h-4 w-4 mr-1" />{featured.downloadCount.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-gray-400 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {featured.publishDate}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{featured.title}</h2>
                  <p className="text-white/80 mt-3">{featured.description}</p>
                  <div className="mt-5">
                    <div className="text-sm text-white/70 mb-2">Key topics</div>
                    <div className="flex flex-wrap gap-2">
                      {featured.topics.slice(0, 4).map((t) => (
                        <span key={t} className="pill">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <PrimaryButton label="Download white paper" icon={Download} onClick={() => downloadWithAnimation(featured.title)} />
                    <GhostButton label="Quick preview" onClick={() => setPreview(featured)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== GRID ===================== */}
      <section className="py-20" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <div className="mx-10 max-w-none">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PaperCard key={p.id} paper={p} onPreview={() => setPreview(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== INSIGHT FLIP CARDS ===================== */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-10" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Key insights at a glance</h2>
            <p className="text-white/70 mt-2">Hover a card to reveal the takeaway.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <InsightFlip
              front={{ icon: Sparkles, title: "94% fraud reduction" }}
              back="Live lenders report 94% drop in high-risk attempts after signal triage + step-up verification."
            />
            <InsightFlip
              front={{ icon: Shield, title: "Explainable decisions" }}
              back="Evidence JSON ties each verdict to signals & thresholds—designed for audits and regulators."
            />
            <InsightFlip
              front={{ icon: TrendingUp, title: "ROI in weeks" }}
              back="Pilot → impact in < 30 days with single POST flows; scale with webhooks and dashboards."
            />
          </div>
        </div>
      </section>

      {/* ===================== IMPACT ===================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[4] = el)}>
        <div className="mx-10 max-w-none" data-reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Research impact</h2>
            <p className="text-lg text-white/70">Our work influences standards and real outcomes.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Impact icon={FileText} metric="25+" label="Papers" />
            <Impact icon={Download} metric="50K+" label="Downloads" delay={0.1} />
            <Impact icon={Users} metric="500+" label="Citations" delay={0.2} />
            <Impact icon={TrendingUp} metric="95%" label="Implementation rate" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[5] = el)}>
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`} data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Stay informed</h2>
            <p className="text-lg text-white/75 mt-2 mb-7">
              Get notified when we publish new research, benchmarks, and implementation guides.
            </p>
            <SubscribeForm />
            <div className="mt-6 text-sm text-white/60">
              For media or analyst briefings, email <button onClick={() => navigator.clipboard.writeText("research@fraudbuster.co")} className="underline hover:text-white">research@fraudbuster.co</button>.
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PREVIEW MODAL ===================== */}
      {preview && (
        <PreviewModal
          paper={preview}
          onClose={() => setPreview(null)}
        />
      )}

      {/* Local styles for shared UI tokens */}
      <style>{`
        .btn-primary {
          display:inline-flex;align-items:center;justify-content:center;gap:.5rem;
          padding:.75rem 1.25rem;border-radius:1rem;
          color:#fff;font-weight:600;
          background:rgba(124,92,255,.9);
          box-shadow:0 12px 40px rgba(124,92,255,.35);
          transition:transform .15s ease, box-shadow .2s ease;
          position:relative;overflow:hidden
        }
        .btn-primary:hover { transform: translateY(1px) }
        .btn-ghost {
          border:1px solid rgba(255,255,255,.15);
          padding:.75rem 1.25rem;border-radius:1rem;font-weight:600;
          transition:background .15s ease
        }
        .btn-ghost:hover { background:rgba(255,255,255,.05) }
        .chip {
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.04);
          border-radius:.75rem;padding:.4rem .75rem;font-size:.875rem;
          transition:background .15s ease, border-color .15s ease
        }
        .chip:hover { background:rgba(255,255,255,.08) }
        .chip-active { border-color:rgba(53,224,255,.6); background:rgba(255,255,255,.08) }
        .input {
          width:100%;border-radius:.75rem;background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.1);padding:.5rem .75rem .5rem 2.25rem;
          outline:none
        }
        .input:focus { border-color:rgba(53,224,255,.6) }
        .select {
          border-radius:.75rem;background:rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.1);padding:.5rem .75rem;outline:none
        }
        .select:focus { border-color:rgba(53,224,255,.6) }
        .badge-gradient {
          background:linear-gradient(90deg,#35E0FF,#6C63FF);
          color:#fff;border-radius:9999px;padding:.25rem .6rem;font-size:.875rem;font-weight:600
        }
        .badge {
          background:rgba(255,255,255,.1); color:rgba(255,255,255,.85);
          border-radius:9999px;padding:.25rem .6rem;font-size:.875rem
        }
        .pill {
          background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.1);
          border-radius:.6rem; padding:.25rem .5rem; font-size:.8rem
        }
      `}</style>
    </div>
  );
};

/* =========================================================================
   Subcomponents
   ========================================================================= */
function Toggle({ value, onChange }:{ value: "business"|"tech"; onChange: (v:"business"|"tech")=>void; }) {
  return (
    <div className="relative inline-flex rounded-2xl border border-white/15 p-1">
      {(["business", "tech"] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`px-3 py-1.5 text-sm rounded-xl transition ${value === v ? "bg-white/[0.08] border border-white/10" : "hover:bg-white/[0.06]"}`}
        >
          {v === "business" ? "Business view" : "Tech view"}
        </button>
      ))}
    </div>
  );
}
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

/* Spotlight section with mouse tracking (paused when modal open) */
function SpotlightStrip({ paused = false }:{ paused?: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = host.current!;
    const move = (e: PointerEvent) => {
      if (paused) return;
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, [paused]);
  return (
    <div className="py-10">
      <div
        ref={host}
        className={`${glass} relative mx-10 max-w-none rounded-2xl overflow-hidden`}
        style={{
          backgroundImage:
            "radial-gradient(240px 240px at var(--x,50%) var(--y,50%), rgba(53,224,255,0.12), transparent 70%)",
        }}
      >
        <div className="grid md:grid-cols-3 gap-6 py-8">
          <SpotlightItem icon={ImageIcon} title="Evidence-first" text="Every claim backed by signals, thresholds, and outcomes." />
          <SpotlightItem icon={Shield} title="Compliance-ready" text="Shaped for audits, regulators, and board updates." />
          <SpotlightItem icon={TrendingUp} title="Measurable ROI" text="Tie controls to loss curves and acceptance rates." />
        </div>
      </div>
    </div>
  );
}
function SpotlightItem({ icon: Icon, title, text }:{ icon:any; title:string; text:string }) {
  return (
    <div className="p-5 rounded-xl bg-white/[0.05] border border-white/10">
      <div className="h-11 w-11 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-1">{text}</div>
    </div>
  );
}

/* Impact metrics */
function Impact({ icon: Icon, metric, label, delay = 0 }:{
  icon: any; metric: string; label: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    animate(el, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 20, to: 0 }], duration: 520, delay: delay * 600, ease: "out(3)" });
  }, [delay]);
  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] rounded-2xl mb-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="text-3xl font-bold text-[#35E0FF] mb-2">{metric}</div>
      <div className="text-white/80">{label}</div>
    </div>
  );
}

/* Paper card with tilt + spotlight + save toggle */
function PaperCard({ paper, onPreview }:{ paper: Paper; onPreview: () => void; }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 6);

  const shellRef = useRef<HTMLDivElement>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const host = shellRef.current!;
    const move = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      host.style.setProperty("--mx", `${x}%`);
      host.style.setProperty("--my", `${y}%`);
    };
    host.addEventListener("pointermove", move);
    return () => host.removeEventListener("pointermove", move);
  }, []);

  const onDownload = () => downloadWithAnimation(paper.title);

  return (
    <div
      ref={ref}
      className={`${glass} rounded-2xl overflow-hidden transition will-change-transform hover:shadow-[0_10px_30px_rgba(53,224,255,0.2)]`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.02 }], duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 160 })}
      data-reveal
    >
      <div
        ref={shellRef}
        className="relative"
        style={{
          backgroundImage:
            "radial-gradient(200px 200px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.08), transparent 70%)",
        }}
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={paper.image}
            alt={paper.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-black/50 backdrop-blur-[2px] text-white px-2.5 py-1 rounded-full text-xs">{paper.category}</span>
          </div>
          <div className="absolute top-3 right-3">
            <button
              onClick={() => setSaved(s => !s)}
              className="rounded-md bg-black/45 hover:bg-black/65 transition p-2"
              title={saved ? "Saved" : "Save"}
            >
              <Bookmark className={`h-4 w-4 ${saved ? "text-[#35E0FF] fill-[#35E0FF]" : "text-white"}`} />
            </button>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-black/45 backdrop-blur-[2px] rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center justify-between">
              <span className="flex items-center"><FileText className="h-3.5 w-3.5 mr-1" /> {paper.pages}p</span>
              <span className="flex items-center"><Eye className="h-3.5 w-3.5 mr-1" /> {paper.downloadCount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center text-xs text-white/60 gap-2 mb-2">
            <Calendar className="h-3.5 w-3.5" /> {paper.publishDate}
          </div>
          <h3 className="text-lg font-semibold line-clamp-2">{paper.title}</h3>
          <p className="text-white/70 text-sm mt-2 line-clamp-3">{paper.description}</p>

          <div className="mt-3">
            <div className="text-xs text-white/60 mb-1">Key topics</div>
            <div className="flex flex-wrap gap-1">
              {paper.topics.slice(0, 3).map((t) => (
                <span key={t} className="bg-white/10 text-white/80 px-2 py-0.5 rounded text-xs">{t.length > 22 ? t.slice(0, 22) + "…" : t}</span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <PrimaryButton small label="Download PDF" icon={Download} onClick={onDownload} />
            <GhostButton small label="Preview" onClick={onPreview} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Flip card (hover) */
function InsightFlip({ front, back }:{ front:{icon:any; title:string}; back:string; }) {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className="relative h-40 rounded-2xl perspective"
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <style>{`
        .perspective{perspective:1000px}
        .flip{transform-style:preserve-3d}
        .backface-hidden{backface-visibility:hidden;-webkit-backface-visibility:hidden}
      `}</style>
      <div className={`flip absolute inset-0 rounded-2xl ${glass} transition-transform duration-500`} style={{ transform: flip ? "rotateY(180deg)" : "rotateY(0deg)" }}>
        <div className="absolute inset-0 backface-hidden p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center">
            <front.icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-xl font-semibold">{front.title}</div>
        </div>
        <div className="absolute inset-0 backface-hidden p-6 rotate-y-180 flex items-center" style={{ transform: "rotateY(180deg)" }}>
          <p className="text-white/80">{back}</p>
        </div>
      </div>
    </div>
  );
}

/* Subscribe form */
function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setOk(true);
    animate(".subscribe-ok", { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 8, to: 0 }], duration: 300, ease: "out(3)" });
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3 outline-none focus:border-[#35E0FF]/60"
      />
      <button className="rounded-xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
        Subscribe
      </button>
      {ok && <div className="subscribe-ok text-sm text-emerald-300 sm:ml-2 self-center">Thanks! You’re on the list.</div>}
    </form>
  );
}

/* Buttons */
function PrimaryButton({ label, icon: Icon, onClick, small }:{ label: string; icon?: any; onClick?: () => void; small?: boolean; }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const enter = () => animate(el, { scale: [{ to: 1.03 }], duration: 120, ease: "out(3)" });
    const leave = () => animate(el, { scale: [{ to: 1 }], duration: 140, ease: "out(3)" });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  }, []);
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7C5CFF]/90 text-white font-semibold shadow-[0_12px_40px_rgba(124,92,255,0.35)] transition ${small ? "px-4 py-2 text-sm" : "px-6 py-3"}`}
    >
      <span className="ripple" />
      {Icon && <Icon className={small ? "h-4 w-4" : "h-5 w-5"} />} {label}
      <style>{`
        .ripple{position:absolute;inset:0;opacity:0;background:radial-gradient(120px 120px at var(--rx,50%) var(--ry,50%), rgba(53,224,255,.18), transparent 60%);transition:opacity .2s}
        button:hover > .ripple{opacity:1}
      `}</style>
    </button>
  );
}
function GhostButton({ label, onClick, small }:{ label: string; onClick?: () => void; small?: boolean; }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const enter = () => animate(el, { scale: [{ to: 1.02 }], duration: 110, ease: "out(3)" });
    const leave = () => animate(el, { scale: [{ to: 1 }], duration: 120, ease: "out(3)" });
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  }, []);
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`rounded-2xl border border-white/15 font-semibold hover:bg-white/5 transition ${small ? "px-4 py-2 text-sm" : "px-6 py-3"}`}
    >
      {label}
    </button>
  );
}

/* Sparkle burst on download */
function downloadWithAnimation(label: string) {
  const el = document.createElement("div");
  el.style.position = "fixed";
  el.style.left = "50%";
  el.style.top = "50%";
  el.style.transform = "translate(-50%,-50%)";
  el.style.pointerEvents = "none";
  el.style.zIndex = "9999";
  el.style.willChange = "transform, opacity";
  document.body.appendChild(el);

  const dots = Array.from({ length: 18 }).map(() => {
    const d = document.createElement("span");
    d.style.position = "absolute";
    d.style.left = "0";
    d.style.top = "0";
    d.style.width = "8px";
    d.style.height = "8px";
    d.style.borderRadius = "9999px";
    d.style.background = "linear-gradient(90deg,#35E0FF,#6C63FF)";
    el.appendChild(d);
    return d;
  });

  animate(dots as unknown as Element[], {
    translateX: Array.from({ length: dots.length }).map(() => ({ to: random(-140, 140, 0) })),
    translateY: Array.from({ length: dots.length }).map(() => ({ to: random(-120, 120, 0) })),
    opacity: [{ from: 1, to: 0 }],
    scale: [{ from: 1, to: 0.4 }],
    duration: 650,
    ease: "out(3)",
    complete: () => { el.remove(); },
  });

  // TODO: wire your actual download logic here
  console.log("Downloading:", label);
}

/* Quick Preview Modal — CENTERED, SCROLL-SAFE, GLITCH-FREE */
function PreviewModal({ paper, onClose }: { paper: Paper; onClose: () => void; }) {
  const [ready, setReady] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  // Body scroll lock
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Preload & decode
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = paper.image;
    img.loading = "eager";
    img.decoding = "async";
    img.decode?.()
      .catch(() => undefined)
      .finally(() => {
        if (cancelled) return;
        setImgSrc(img.src);
        setReady(true);
      });
    return () => { cancelled = true; };
  }, [paper.image]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[9997] flex items-center justify-center p-4" aria-modal role="dialog">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-[2px] will-change-opacity"
        onClick={onClose}
        ref={(el) => {
          if (!el) return;
          el.style.opacity = "0";
          requestAnimationFrame(() => {
            animate(el, { opacity: [{ from: 0, to: 1 }], duration: 160, ease: "out(3)" });
          });
        }}
      />

      {/* Dialog */}
      <div
        className={`relative w-full max-w-[860px] max-h-[85vh] overflow-hidden rounded-2xl ${glass}`}
        ref={(el) => {
          if (!el) return;
          el.style.opacity = "0";
          el.style.transform = "scale(.98)";
          requestAnimationFrame(() => {
            animate(el, { opacity: [{ from: 0, to: 1 }], scale: [{ from: .98, to: 1 }], duration: 180, ease: "out(3)" });
          });
        }}
      >
        {/* Header image */}
        <div className="relative h-48 shrink-0">
          {!ready ? (
            <div className="w-full h-full shimmer" />
          ) : (
            <img
              src={imgSrc!}
              alt={paper.title}
              className="w-full h-full object-cover"
              decoding="async"
            />
          )}
          <button onClick={onClose} className="absolute top-3 right-3 rounded-lg bg-black/55 p-2 hover:bg-black/70 transition">
            <X className="h-5 w-5 text-white" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-[2px] rounded-lg px-3 py-2 text-xs text-white flex items-center justify-between">
            <span className="flex items-center"><FileText className="h-3.5 w-3.5 mr-1" /> {paper.pages} pages</span>
            <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" /> {paper.publishDate}</span>
            <span className="flex items-center"><Eye className="h-3.5 w-3.5 mr-1" /> {paper.downloadCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(85vh - 12rem)" }}>
          <div className="flex items-center gap-2 text-xs">
            <span className="rounded-full bg-white/[0.08] border border-white/10 px-2.5 py-1">{paper.category}</span>
          </div>
          <h3 className="text-xl font-bold mt-2">{paper.title}</h3>
          <p className="text-white/80 mt-2">{paper.description}</p>
          <div className="mt-4">
            <div className="text-sm text-white/70 mb-1">Topics covered</div>
            <div className="flex flex-wrap gap-1.5">
              {paper.topics.map((t) => <span key={t} className="bg-white/10 text-white/80 px-2 py-0.5 rounded text-xs">{t}</span>)}
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <PrimaryButton label="Download PDF" icon={Download} onClick={() => downloadWithAnimation(paper.title)} />
            <GhostButton label="Close" onClick={onClose} />
          </div>
        </div>
      </div>

      {/* shimmer style */}
      <style>{`
        .shimmer{
          background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.1) 37%, rgba(255,255,255,0.06) 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </div>,
    document.body
  );
}

/* =========================================================================
   Export
   ========================================================================= */
export default WhitePapers;
