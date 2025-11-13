// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Search, HelpCircle, Book, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight } from 'lucide-react';

// const SupportCenter = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

//   const faqs = [
//     {
//       id: 1,
//       question: 'How does FraudBuster comply with regulatory guidelines?',
//       answer: 'FraudBuster is designed to fully comply with digital payment security guidelines and regulatory requirements. Our system implements multi-factor authentication, real-time transaction monitoring, and maintains detailed audit trails as required by financial regulations. We regularly update our compliance framework to align with the latest regulatory requirements.'
//     },
//     {
//       id: 2,
//       question: 'What is the typical implementation timeline for FraudBuster?',
//       answer: 'Implementation typically takes 4-6 weeks depending on your existing infrastructure. This includes initial assessment (1 week), system integration (2-3 weeks), testing and validation (1 week), and staff training (1 week). Our technical team provides support throughout the process.'
//     },
//     {
//       id: 3,
//       question: 'How does the pricing model work?',
//       answer: 'We offer flexible pricing models including transaction-based pricing, monthly subscriptions, and enterprise packages. Pricing scales based on transaction volume and features required. Contact our sales team for a customized quote.'
//     },
//     {
//       id: 4,
//       question: 'What kind of support is available for financial institution compliance?',
//       answer: 'We provide specialized support for financial institutions including compliance consulting, regulatory reporting assistance, and dedicated account management. Our team includes former regulatory officials and compliance experts who understand the unique requirements of the financial sector.'
//     },
//     {
//       id: 5,
//       question: 'Can FraudBuster integrate with existing core banking systems?',
//       answer: 'Yes, FraudBuster supports integration with all major core banking systems. We provide REST APIs, webhooks, and batch processing capabilities. Our technical team assists with integration planning and implementation.'
//     },
//     {
//       id: 6,
//       question: 'What data residency and privacy measures are in place?',
//       answer: 'We implement end-to-end encryption, role-based access controls, and regular security audits. Our systems are ISO 27001 certified and comply with data protection regulations. Data residency options are available based on regulatory requirements.'
//     }
//   ];

//   const supportChannels = [
//     {
//       icon: Phone,
//       title: 'Phone Support',
//       description: '24/7 technical support hotline',
//       contact: 'Contact via email',
//       availability: 'Available 24/7'
//     },
//     {
//       icon: Mail,
//       title: 'Email Support',
//       description: 'Get detailed assistance via email',
//       contact: 'info@fraudbuster.co.in',
//       availability: 'Response within 2 hours'
//     },
//     {
//       icon: MessageCircle,
//       title: 'Live Chat',
//       description: 'Instant chat with our experts',
//       contact: 'Available on dashboard',
//       availability: 'Mon-Fri: 9 AM - 9 PM IST'
//     },
//     {
//       icon: Book,
//       title: 'Documentation',
//       description: 'Comprehensive technical guides',
//       contact: 'Available online',
//       availability: 'Always available'
//     }
//   ];

//   const quickLinks = [
//     { title: 'API Documentation', description: 'Complete integration guide and API reference' },
//     { title: 'Compliance Checklist', description: 'RBI compliance requirements and verification steps' },
//     { title: 'Implementation Guide', description: 'Step-by-step setup and configuration instructions' },
//     { title: 'Troubleshooting', description: 'Common issues and their solutions' },
//     { title: 'Best Practices', description: 'Recommended configurations and optimization tips' },
//     { title: 'Security Guidelines', description: 'Security implementation and maintenance guidelines' }
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
//               Support Center
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Get the help you need to implement and optimize FraudBuster for your business. 
//               Our expert team is here to support your fraud prevention journey.
//             </p>

//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto relative">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search for help articles, guides, or FAQs..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full bg-white/10 border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Support Channels */}
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
//               Get Support Your Way
//             </h2>
//             <p className="text-xl text-gray-300">
//               Multiple channels to get the help you need, when you need it
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {supportChannels.map((channel, index) => (
//               <motion.div
//                 key={channel.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                   <channel.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
//                 <p className="text-gray-400 mb-4">{channel.description}</p>
//                 <div className="text-cyan-400 font-medium mb-2">{channel.contact}</div>
//                 <div className="text-sm text-gray-500">{channel.availability}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
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
//               Popular Resources
//             </h2>
//             <p className="text-xl text-gray-300">
//               Quick access to the most requested documentation and guides
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {quickLinks.map((link, index) => (
//               <motion.div
//                 key={link.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <ChevronRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
//                       {link.title}
//                     </h3>
//                     <span>Contact via email</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
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
//               Frequently Asked Questions
//             </h2>
//             <p className="text-xl text-gray-300">
//               Find answers to common questions about FraudBuster and our services
//             </p>
//           </motion.div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={faq.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
//               >
//                 <button
//                   onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
//                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
//                 >
//                   <span className="text-lg font-medium text-white">{faq.question}</span>
//                   {expandedFaq === faq.id ? (
//                     <ChevronDown className="h-5 w-5 text-cyan-400" />
//                   ) : (
//                     <ChevronRight className="h-5 w-5 text-cyan-400" />
//                   )}
//                 </button>
                
//                 {expandedFaq === faq.id && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="px-6 pb-4"
//                   >
//                     <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <HelpCircle className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Still Need Help?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Our expert support team is ready to assist you with any questions 
//               or technical challenges you may have.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Contact Support Team
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Schedule a Call
//               </button>
//             </div>
            
//             <div className="mt-8 pt-8 border-t border-white/10">
//               <div className="flex items-center justify-center space-x-8 text-gray-400">
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 mr-2" />
//                   <span>24/7 Support</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Phone className="h-5 w-5 mr-2" />
//                   <span>Contact via email</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SupportCenter;









//<--------------------------------------------------------Design Changed--------------------------------------------------------->










//<---------------------------------------------------------Design Changed--------------------------------------------------------->

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Search, HelpCircle, Book, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight,
  ShieldCheck, Link2, Database, FileCheck, GitBranch, Cloud, Server, TerminalSquare, KeyRound,
  ArrowRight, CheckCircle, Headphones, AlertTriangle, ClipboardList, Bot, Copy, Sparkles
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";
import { Link } from "react-router-dom";

/* =========================================================
   Shared motion system (same palette & effects as IntegrationGuide)
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

/* Magnet */
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

/* Tilt */
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

/* Intersection reveal */
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
    }, { threshold: 0.18 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [containerRefs, enabled]);
}

/* =========================================================
   Support Center (rebuilt with your animated system)
   ========================================================= */
const SupportCenter: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* BG parallax */
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

  /* sections reveal */
  const sectionsRef = useRef<HTMLElement[]>([]);
  useReveals(sectionsRef, !reduced);

  /* Headline typewriter + floating dots */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced) return;
    const tl = createTimeline();

    if (headlineRef.current) {
      const text = "Support that moves at the speed of fraud";
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
      tl.add(sublineRef.current as unknown as Element, {
        opacity: [{ from: 0, to: 1 }],
        translateY: [{ from: 12, to: 0 }],
        duration: 360,
        ease: "out(3)",
      }, "-=180");
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

  /* State: search + FAQ expand + Troubleshooter */
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  /* Data: Support Channels */
  const supportChannels = [
    { icon: Phone, title: "Phone Support", desc: "24/7 technical hotline", contact: "Contact via email", availability: "Always on" },
    { icon: Mail, title: "Email Support", desc: "Detailed help via email", contact: "info@fraudbuster.co.in", availability: "Reply < 2 hrs" },
    { icon: MessageCircle, title: "Live Chat", desc: "Instant chat with experts", contact: "Dashboard chat", availability: "Mon–Fri, 9 AM–9 PM IST" },
    { icon: Book, title: "Documentation", desc: "Comprehensive guides & API", contact: "Online docs", availability: "24/7" },
  ] as const;

  /* Data: Popular resources */
  const quickLinks = [
    { title: "API Reference", subtitle: "Endpoints, headers, evidence schema", icon: Link2 },
    { title: "Integration Checklist", subtitle: "ENV, retries, idempotency, logging", icon: ClipboardList },
    { title: "Compliance Guide", subtitle: "RBI-ready deployment steps", icon: FileCheck },
    { title: "Webhooks & Events", subtitle: "Signed payloads + backoff", icon: GitBranch },
    { title: "Observability Setup", subtitle: "SIEM, JSONL, PII redaction", icon: TerminalSquare },
    { title: "Data Export", subtitle: "Warehouse-ready exports", icon: Database },
  ] as const;

  /* Data: FAQ (marketing-grade clarity + compliance) */
  const faqs = [
    {
      id: 1,
      q: "How does FraudBuster stay compliant with digital payment regulations?",
      a: "We design for compliance from day one: MFA, evidence trails, RBAC, encryption in transit/at rest, and audit-ready logs. Our policies map to ISO 27001, data-minimization, and RBI guidance for fintech and NBFCs.",
    },
    {
      id: 2,
      q: "What’s the typical implementation timeline?",
      a: "Most teams ship a pilot in 7–14 days. SDK-free HTTP flows let you start with a single POST; then add webhooks and dashboards when ready.",
    },
    {
      id: 3,
      q: "Do you integrate with core banking and payment rails?",
      a: "Yes. We provide REST APIs, webhooks, and batch pipes. Banks use adapters to CBS, LOS/LMS, and card rails. Our team helps design safe, staged rollouts.",
    },
    {
      id: 4,
      q: "How do you protect sensitive data & PII?",
      a: "Keys are scoped; secrets live in KMS/Vault; logs are redacted; and evidence-first decisions minimize raw PII footprint. Regular pen-tests & threat modeling back this up.",
    },
    {
      id: 5,
      q: "What response times and accuracy can we expect?",
      a: "Synchronous decisions in ~25–60 ms (p95) for common checks; async enrichment via webhooks. Accuracy depends on policy, but 99%+ explainable detection is typical for mature configs.",
    },
    {
      id: 6,
      q: "How is support delivered day-to-day?",
      a: "You get 24/7 incident help, named integration engineers during onboarding, and weekly office hours for policy tuning and analytics.",
    },
  ];

  /* Smart suggestions from search */
  const allSearchables = [
    ...quickLinks.map((q) => ({ type: "doc", title: q.title, note: q.subtitle })),
    ...faqs.map((f) => ({ type: "faq", title: f.q, note: "FAQ" })),
    { type: "channel", title: "Live Chat", note: "Talk to an expert now" },
    { type: "channel", title: "Email Support", note: "Reply within 2 hours" },
  ];
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const s = searchQuery.toLowerCase();
    return allSearchables
      .filter((i) => i.title.toLowerCase().includes(s))
      .slice(0, 6);
  }, [searchQuery]);

  /* Troubleshooter wizard (guides to the right channel) */
  const [issueType, setIssueType] = useState<"integration" | "decision" | "throughput" | "billing" | "compliance">("integration");
  const [severity, setSeverity] = useState<"low" | "medium" | "high" | "sev1">("medium");
  const [env, setEnv] = useState<"sandbox" | "production">("sandbox");

  const recommendation = useMemo(() => {
    // Simple rules to choose best support path
    if (severity === "sev1" || (env === "production" && severity === "high")) {
      return { channel: "Phone Hotline", eta: "Immediate", note: "Bridge opens with on-call engineer", icon: Phone };
    }
    if (issueType === "integration") {
      return { channel: "Live Chat", eta: "< 10 min", note: "Screen-share & logs triage", icon: MessageCircle };
    }
    if (issueType === "decision") {
      return { channel: "Email Support", eta: "< 2 hrs", note: "Attach evidence JSON & correlation IDs", icon: Mail };
    }
    if (issueType === "throughput") {
      return { channel: "Live Chat", eta: "< 15 min", note: "Scale policy & rate limits review", icon: MessageCircle };
    }
    if (issueType === "compliance") {
      return { channel: "Email Support", eta: "Same day", note: "Checklist & mapping templates", icon: Mail };
    }
    return { channel: "Email Support", eta: "Same day", note: "We’ll route internally", icon: Mail };
  }, [issueType, severity, env]);

  /* CTA magnets */
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1Ref, 20);
  useMagnet(cta2Ref, 16);

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

      {/* Background grid glows */}
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

      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="relative mx-10 w-full max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <ShieldCheck className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Support · 24/7 · Explainable</span>
              </div>

              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Support that moves at the speed of fraud
              </h1>
              <p ref={sublineRef} className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                Get answers in minutes—not days. We pair your team with integration engineers, policy experts,
                and compliance specialists so you can ship safely and scale confidently.
              </p>

              {/* Search */}
              <div className="mt-6 max-w-xl relative" data-reveal>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search docs, FAQs, webhooks, evidence schema..."
                    className="w-full rounded-2xl bg-white/[0.06] border border-white/10 pl-10 pr-3 py-3 outline-none focus:border-[#35E0FF]/60"
                    onFocus={(e) => animate(e.currentTarget, { boxShadow: [{ to: "0 0 0 6px rgba(53,224,255,0.18)" }], duration: 220 })}
                    onBlur={(e) => animate(e.currentTarget, { boxShadow: [{ to: "0 0 0 0 rgba(53,224,255,0)" }], duration: 220 })}
                  />
                </div>
                {!!suggestions.length && (
                  <div className={`absolute mt-2 w-full rounded-xl ${glass} overflow-hidden`}>
                    {suggestions.map((s, i) => (
                      <button
                        key={i}
                        className="w-full text-left px-3 py-2 hover:bg-white/10 transition flex items-center justify-between"
                        onClick={() => {
                          setSearchQuery(s.title);
                          const target = document.querySelector(
                            s.type === "faq" ? "#faq" : s.type === "doc" ? "#resources" : "#channels"
                          );
                          target?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        <span className="text-sm">{s.title}</span>
                        <span className="text-xs text-white/60">{s.note}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Hero metrics */}
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl" data-reveal>
                <HeroMetric icon={Headphones} label="First response" value="&lt; 10 min" />
                <HeroMetric icon={Clock} label="24/7 incidents" value="On-call" />
                <HeroMetric icon={FileCheck} label="Docs & evidence" value="Explainable" />
              </div>
            </div>

            {/* Live status + flow */}
            <div className={`rounded-2xl ${glass} p-6 relative`}>
              <div className="text-sm text-white/60 mb-2">System status</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden">
                <div ref={trailRef} className="absolute inset-0 pointer-events-none" />
                <div className="grid grid-cols-3 gap-3">
                  <StatusPill text="API" ok />
                  <StatusPill text="Webhooks" ok />
                  <StatusPill text="Dashboard" ok />
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <Badge icon={Cloud} text="Global POPs" />
                  <Badge icon={Server} text="p95 45ms" />
                  <Badge icon={GitBranch} text="Events live" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={KeyRound} text="Scoped keys" />
                <Badge icon={TerminalSquare} text="JSONL logs" />
                <Badge icon={FileCheck} text="Audit-ready" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CHANNELS ===================== */}
      <section id="channels" className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Get support your way</h2>
            <p className="text-lg text-white/70" data-reveal>Choose the path that fits your moment—build, debug, or scale.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((c) => (
              <TiltCard key={c.title}>
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] rounded-2xl mb-4 shadow-[0_8px_26px_rgba(53,224,255,0.18)]">
                    <c.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-lg font-semibold">{c.title}</div>
                  <div className="text-white/70 text-sm mt-1">{c.desc}</div>
                  <div className="text-[#35E0FF] text-sm mt-3">{c.contact}</div>
                  <div className="text-white/50 text-xs mt-1">{c.availability}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TROUBLESHOOTER ===================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[1] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Instant troubleshooter</h2>
            <p className="text-lg text-white/70" data-reveal>Answer three questions — get the fastest path to resolution.</p>
          </div>

          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            {/* Controls */}
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="text-sm text-white/60 mb-3">Describe your situation</div>
              <div className="grid gap-4">
                <SelectField
                  label="Issue type"
                  value={issueType}
                  onChange={(v) => setIssueType(v as any)}
                  options={[
                    ["integration", "Integration / onboarding"],
                    ["decision", "Decision output / evidence"],
                    ["throughput", "Throughput / latency"],
                    ["billing", "Billing / invoicing"],
                    ["compliance", "Compliance / audit"],
                  ]}
                />
                <SelectField
                  label="Severity"
                  value={severity}
                  onChange={(v) => setSeverity(v as any)}
                  options={[
                    ["low", "Low"],
                    ["medium", "Medium"],
                    ["high", "High"],
                    ["sev1", "SEV-1 (prod impact)"],
                  ]}
                />
                <SelectField
                  label="Environment"
                  value={env}
                  onChange={(v) => setEnv(v as any)}
                  options={[
                    ["sandbox", "Sandbox"],
                    ["production", "Production"],
                  ]}
                />
              </div>

              <div className="text-xs text-white/60 mt-4">
                Tip: Attach <code className="text-white/80">correlationId</code> and evidence JSON for the fastest triage.
              </div>
            </div>

            {/* Recommendation panel */}
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-white/60">Recommended path</div>
                <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10">
                  <Sparkles className="h-3.5 w-3.5" /> Smart
                </div>
              </div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                    <recommendation.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{recommendation.channel}</div>
                    <div className="text-white/70 text-sm">{recommendation.note}</div>
                  </div>
                  <div className="ml-auto text-[#35E0FF] font-semibold">{recommendation.eta}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <Badge icon={TerminalSquare} text="Attach logs" />
                  <Badge icon={FileCheck} text="Evidence JSON" />
                  <Badge icon={Link2} text="Correlation ID" />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  ref={cta1Ref}
                  to="/contact"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Open a ticket
                </Link>
                <Link
                  ref={cta2Ref}
                  to="/api"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Visit docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESOURCES ===================== */}
      <section id="resources" className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Popular resources</h2>
            <p className="text-lg text-white/70" data-reveal>Jump straight to the most requested guidance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((item) => (
              <ResourceCard key={item.title} Icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>

          {/* marquee partners (21st.dev vibe) */}
          <div className="relative overflow-hidden mt-12">
            <div className="flex gap-4 animate-marquee will-change-transform">
              {[
                { name: "Node + Express", Icon: Server },
                { name: "Python + FastAPI", Icon: Cloud },
                { name: "Java + Spring", Icon: Server },
                { name: "Kafka Events", Icon: GitBranch },
                { name: "Snowflake", Icon: Database },
                { name: "Datadog", Icon: Cloud },
                { name: "Splunk", Icon: Cloud },
              ].map((p, i) => <PartnerPill key={i} Icon={p.Icon} text={p.name} />)}
            </div>
            <style>{`
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .animate-marquee { width: 200%; animation: marquee 22s linear infinite; }
            `}</style>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="py-24" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Frequently asked questions</h2>
            <p className="text-lg text-white/70" data-reveal>Clear, practical answers for security, compliance, and scale.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                id={faq.id}
                question={faq.q}
                answer={faq.a}
                expanded={expandedFaq === faq.id}
                toggle={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24">
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <HelpCircle className="h-16 w-16 text-[#35E0FF] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Need a human right now?</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
              Our on-call engineers can jump on a bridge, read your evidence JSON, and ship a fix or mitigation fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Contact support <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/api"
                className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
              >
                Browse docs
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-8 text-white/70">
              <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5" /> 24/7 incidents</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-5 w-5" /> Hotline via email</span>
              <span className="inline-flex items-center gap-2"><MessageCircle className="h-5 w-5" /> Live chat (business hours)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* =========================================================
   Subcomponents (no hooks-in-loops; each card owns its tilt)
   ========================================================= */
function HeroMetric({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-4 border border-white/10">
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#35E0FF]" />
        <div className="font-semibold" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
    </div>
  );
}

function StatusPill({ text, ok }: { text: string; ok?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    let t = 0;
    const id = setInterval(() => {
      t = (t + 1) % 2;
      el.style.boxShadow = t
        ? "0 0 22px 6px rgba(53,224,255,0.18)"
        : "0 0 0 0 rgba(53,224,255,0)";
    }, 700);
    return () => clearInterval(id);
  }, []);
  return (
    <div ref={ref} className="flex items-center justify-center gap-2 text-xs rounded-lg px-3 py-1.5 bg-white/[0.06] border border-white/10">
      <span className={`h-2.5 w-2.5 rounded-full ${ok ? "bg-emerald-400" : "bg-amber-400"}`} />
      {text}
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

function ResourceCard({ Icon, title, subtitle }:{ Icon: any; title: string; subtitle: string; }) {
  return (
    <TiltCard>
      <div className="flex items-start gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-white/70 text-sm">{subtitle}</div>
          <button
            className="mt-3 inline-flex items-center text-sm text-[#35E0FF] hover:text-white/90 transition"
            onClick={() => {}}
          >
            Open resource <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </TiltCard>
  );
}

function PartnerPill({ Icon, text }:{ Icon: any; text: string }) {
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
      <Icon className="h-4 w-4 text-[#35E0FF]" /> {text}
    </div>
  );
}

function FAQItem({
  id, question, answer, expanded, toggle
}: {
  id: number; question: string; answer: string; expanded: boolean; toggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    if (expanded) {
      el.style.height = "auto";
      const h = el.clientHeight;
      el.style.height = "0px";
      requestAnimationFrame(() => {
        el.style.transition = "height 300ms ease";
        el.style.height = `${h}px`;
      });
    } else {
      el.style.transition = "height 260ms ease";
      el.style.height = "0px";
    }
  }, [expanded]);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300" data-reveal>
      <button onClick={toggle} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
        <span className="text-lg font-medium">{question}</span>
        {expanded ? <ChevronDown className="h-5 w-5 text-[#35E0FF]" /> : <ChevronRight className="h-5 w-5 text-[#35E0FF]" />}
      </button>
      <div ref={bodyRef} className="px-6 overflow-hidden h-0">
        <div className="py-3 text-white/80 leading-relaxed border-t border-white/10">{answer}</div>
      </div>
    </div>
  );
}

function SelectField({
  label, value, onChange, options
}: {
  label: string; value: string; onChange: (v: string) => void; options: [string, string][];
}) {
  return (
    <label className="text-sm">
      <div className="text-white/70 mb-1">{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-white/[0.06] border border-white/10 px-3 py-2 outline-none focus:border-[#35E0FF]/60"
        onFocus={(e) => animate(e.currentTarget, { boxShadow: [{ to: "0 0 0 6px rgba(53,224,255,0.18)" }], duration: 220 })}
        onBlur={(e) => animate(e.currentTarget, { boxShadow: [{ to: "0 0 0 0 rgba(53,224,255,0)" }], duration: 220 })}
      >
        {options.map(([v, lbl]) => <option key={v} value={v}>{lbl}</option>)}
      </select>
    </label>
  );
}

export default SupportCenter;

