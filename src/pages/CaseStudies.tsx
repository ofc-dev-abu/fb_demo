// import React from 'react';
// import { motion } from 'framer-motion';
// import { TrendingUp, Shield, Users, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

// const CaseStudies = () => {
//   const caseStudies = [
//     {
//       id: 1,
//       title: 'Leading Financial Institution Reduces Fraud by 94% with Fraud Buster',
//       client: 'Major Financial Institution',
//       industry: 'Financial Services',
//       challenge: 'High fraud rates in digital lending causing significant losses and regulatory concerns',
//       solution: 'Implemented Fraud Buster\'s AI-powered fraud detection with real-time monitoring',
//       results: [
//         { metric: 'Fraud Reduction', value: '94%', icon: Shield },
//         { metric: 'Cost Savings', value: '₹12 Cr', icon: DollarSign },
//         { metric: 'Processing Speed', value: '50ms', icon: TrendingUp },
//         { metric: 'Customer Satisfaction', value: '98%', icon: Users }
//       ],
//       image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Fintech Startup Achieves Regulatory Compliance with Zero Fraud Incidents',
//       client: 'Fintech Startup',
//       industry: 'Digital Payments',
//       challenge: 'Meeting compliance requirements while scaling operations rapidly',
//       solution: 'Integrated comprehensive fraud prevention system aligned with regulatory guidelines',
//       results: [
//         { metric: 'Compliance Score', value: '100%', icon: CheckCircle },
//         { metric: 'Zero Fraud Days', value: '365+', icon: Shield },
//         { metric: 'Transaction Volume', value: '10x', icon: TrendingUp },
//         { metric: 'Approval Rate', value: '99.2%', icon: Users }
//       ],
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 3,
//       title: 'E-commerce Giant Prevents ₹50 Crore in Fraudulent Transactions',
//       client: 'Top E-commerce Platform',
//       industry: 'E-commerce & Digital Payments',
//       challenge: 'Sophisticated fraud attacks targeting high-value transactions during festival seasons',
//       solution: 'Deployed advanced ML algorithms with behavioral analysis and real-time blocking',
//       results: [
//         { metric: 'Fraud Prevented', value: '₹50 Cr', icon: DollarSign },
//         { metric: 'Detection Accuracy', value: '99.7%', icon: Shield },
//         { metric: 'False Positives', value: '<0.1%', icon: CheckCircle },
//         { metric: 'Response Time', value: '25ms', icon: TrendingUp }
//       ],
//       image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
//   ];

//   const testimonials = [
//     {
//       quote: "Fraud Buster has been instrumental in helping us maintain regulatory compliance while scaling our operations. The real-time fraud detection has saved us millions.",
//       author: "Technology Executive",
//       position: "CTO, Leading Financial Institution",
//       company: "Financial Services"
//     },
//     {
//       quote: "The integration was seamless and the results were immediate. We've seen a 94% reduction in fraud attempts within the first month of implementation.",
//       author: "Risk Management Executive",
//       position: "Head of Risk Management",
//       company: "Fintech Company"
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
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Success Stories
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Discover how leading Indian fintech companies have transformed their fraud prevention 
//               strategies and achieved remarkable results with Fraud Buster.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Case Study */}
//       <section className="py-12 bg-black/20">
//         <div className="px-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
//           >
//             <div className="grid lg:grid-cols-2 gap-8">
//               <div className="relative h-64 lg:h-full">
//                 <img
//                   src={caseStudies[0].image}
//                   alt={caseStudies[0].title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     Featured Case Study
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-8 flex flex-col justify-center">
//                 <div className="mb-4">
//                   <span className="text-cyan-400 font-medium">{caseStudies[0].industry}</span>
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                   {caseStudies[0].title}
//                 </h2>
//                 <p className="text-gray-300 mb-6">
//                   <strong>Challenge:</strong> {caseStudies[0].challenge}
//                 </p>
//                 <p className="text-gray-300 mb-8">
//                   <strong>Solution:</strong> {caseStudies[0].solution}
//                 </p>
                
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   {caseStudies[0].results.map((result, index) => (
//                     <div key={index} className="text-center">
//                       <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-2">
//                         <result.icon className="h-5 w-5 text-white" />
//                       </div>
//                       <div className="text-2xl font-bold text-cyan-400">{result.value}</div>
//                       <div className="text-sm text-gray-400">{result.metric}</div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
//                   Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Case Studies Grid */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-8">
//             {caseStudies.slice(1).map((study, index) => (
//               <motion.div
//                 key={study.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <div className="relative h-48">
//                   <img
//                     src={study.image}
//                     alt={study.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
//                       {study.industry}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
//                     {study.title}
//                   </h3>
                  
//                   <p className="text-gray-400 mb-4 text-sm">
//                     <strong>Challenge:</strong> {study.challenge}
//                   </p>
                  
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     {study.results.map((result, idx) => (
//                       <div key={idx} className="text-center bg-white/5 rounded-lg p-3">
//                         <div className="text-lg font-bold text-cyan-400">{result.value}</div>
//                         <div className="text-xs text-gray-400">{result.metric}</div>
//                       </div>
//                     ))}
//                   </div>
                  
//                   <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
//                     View Details <ArrowRight className="ml-1 h-3 w-3" />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
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
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-300">
//               Hear from industry leaders who trust Fraud Buster to protect their businesses.
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
//                   "{testimonial.quote}"
//                 </blockquote>
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
//                     <Users className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-white font-semibold">{testimonial.author}</div>
//                     <div className="text-gray-400 text-sm">{testimonial.position}</div>
//                     <div className="text-cyan-400 text-sm">{testimonial.company}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
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
//               Ready to Join Our Success Stories?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Transform your fraud prevention strategy and achieve remarkable results like our clients.
//             </p>
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Start Your Success Story
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CaseStudies;




//<-----------------------------------Design new--------------------------------------------------------------------------------------------->














//<-----------------------------------Design new--------------------------------------------------------------------------------------------->

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  TrendingUp, Shield, Users, DollarSign, CheckCircle, ArrowRight, Globe as GlobeIcon,
  Building2, Landmark, CreditCard, Clock, Activity, Star, Filter
} from "lucide-react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";

/* =========================================================
   Shared Utilities (consistent with Home)
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
      <div className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]" ref={ref} />
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

/* 3D tilt on hover (hook) */
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

/* Magnetic CTAs */
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

/* Spotlight + ripple (21st.dev-like) */
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
          "radial-gradient(220px 220px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.12), transparent 60%)"
      }}
    >
      {children}
    </div>
  );
}

/* Scroll reveal using anime v4 */
function useScrollReveal() {
  const reduced = useReducedMotion();
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
}

/* Count up helper */
function useCountUp(target: number, duration = 1000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - start) / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * ease * 10) / 10);
      if (t < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return val;
}

/* TiltCard (valid hook usage) */
function TiltCard({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: (el: HTMLElement) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);
  return (
    <div
      ref={ref}
      className={className}
      onClick={(e) => onClick?.(e.currentTarget as HTMLElement)}
    >
      {children}
    </div>
  );
}

/* Drawer for full case study */
type Result = { metric: string; value: string; icon: any };
type Study = {
  id: number;
  title: string;
  client: string;
  industry: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: Result[];
  image: string;
  featured?: boolean;
};

function StudyDrawer({ study, onClose }: { study: Study; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ from: 0, to: 1 }], duration: 160, ease: "out(3)" });
    if (panelRef.current) animate(panelRef.current, { translateY: [{ from: 24, to: 0 }], opacity: [{ from: 0, to: 1 }], duration: 240, ease: "out(3)" });
    if (listRef.current) {
      const items = listRef.current.querySelectorAll<HTMLElement>("[data-metric]");
      animate(items, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 10, to: 0 }], delay: stagger(40), duration: 300, ease: "out(3)" });
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    if (panelRef.current) animate(panelRef.current, { translateY: [{ to: 24 }], opacity: [{ to: 0 }], duration: 180, ease: "out(3)" });
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ to: 0 }], duration: 120 });
    setTimeout(onClose, 200);
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <div ref={overlayRef} className="absolute inset-0 bg-black/60" onClick={close} />
      <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:w-[560px]">
        <div ref={panelRef} className={`${glass} md:rounded-l-3xl rounded-t-3xl h-full overflow-y-auto p-6 bg-[#0b0b12]/80`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm text-[#35E0FF] font-semibold">{study.industry}</div>
              <h3 className="text-xl md:text-2xl font-bold">{study.title}</h3>
            </div>
            <button onClick={close} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Close</button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags?.map((t, i) => (
              <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs">{t}</span>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <p className="text-white/80"><strong>Client:</strong> {study.client}</p>
            <p className="text-white/80"><strong>Challenge:</strong> {study.challenge}</p>
            <p className="text-white/80"><strong>Solution:</strong> {study.solution}</p>
          </div>

          <div ref={listRef} className="mt-6 grid grid-cols-2 gap-4">
            {study.results.map((r, i) => (
              <div key={i} data-metric className={`${glass} rounded-2xl p-4 text-center`}>
                <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                  <r.icon className="h-5 w-5 text-white" />
                </div>
                <div className="text-xl font-bold text-[#35E0FF]">{r.value}</div>
                <div className="text-xs text-white/60">{r.metric}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-white/70">
            <p>
              <strong>Why it works:</strong> Signals are correlated across PAN/Aadhaar, VPA, bank & IFSC, and GST to
              produce an explainable decision. Velocity & behavioral rules suppress coordinated abuse without hurting conversion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Case Studies (3 only — Banking, Payments, Wallets)
   ========================================================= */
const ALL_CASES: Study[] = [
  {
    id: 1,
    title: "Leading Financial Institution reduces digital‑lending fraud by 94%",
    client: "Major Financial Institution",
    industry: "Banking",
    tags: ["KYC", "Loans", "Underwriting"],
    challenge: "High synthetic identities impacting lending loss ratios and regulatory flags.",
    solution: "FraudBuster KYC + bank verification + velocity rules; explainable flags for underwriting ops.",
    results: [
      { metric: "Fraud Reduction", value: "94%", icon: Shield },
      { metric: "Cost Savings", value: "₹12 Cr", icon: DollarSign },
      { metric: "TAT Improvement", value: "50ms", icon: Clock },
      { metric: "CSAT", value: "98%", icon: Users },
    ],
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
  },
  {
    id: 2,
    title: "Fintech achieves compliance at scale with zero fraud incidents",
    client: "Payments Fintech",
    industry: "Payments",
    tags: ["KYB", "Onboarding", "Compliance"],
    challenge: "Meeting compliance SLAs without hurting conversion during hypergrowth.",
    solution: "KYC + KYB (GST) + bank/IFSC checks + explainable evidence for audit.",
    results: [
      { metric: "Compliance Score", value: "100%", icon: CheckCircle },
      { metric: "Zero Fraud Days", value: "365+", icon: Shield },
      { metric: "Volume Growth", value: "10x", icon: TrendingUp },
      { metric: "Approval Rate", value: "99.2%", icon: Users },
    ],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    title: "Wallet reduces account‑takeover with VPA & device correlation",
    client: "Mobile Wallet",
    industry: "Wallets",
    tags: ["Account Security", "ATO", "VPA"],
    challenge: "ATO rings exploiting weak linking between phone, VPA and bank.",
    solution: "VPA lookup, phone‑bank alignment and device patterning across attempts.",
    results: [
      { metric: "ATO Down", value: "87%", icon: Shield },
      { metric: "User Trust", value: "↑", icon: Users },
      { metric: "Ops Load", value: "-41%", icon: TrendingUp },
      { metric: "Latency", value: "~420ms", icon: Clock },
    ],
    image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

/* =========================================================
   Page Component
   ========================================================= */
const CaseStudies: React.FC = () => {
  const reduced = useReducedMotion();
  useScrollReveal();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Hero headline split */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = headlineRef.current;
    if (!el || reduced) return;
    const text = el.textContent || "";
    el.innerHTML = text.split("")
      .map(c => `<span class="char inline-block will-change-transform">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");
    const nodes = el.querySelectorAll<HTMLElement>(".char");
    animate(nodes, {
      translateY: [{ from: 28, to: 0 }],
      opacity: [{ from: 0, to: 1 }],
      delay: stagger(14),
      duration: 680,
      ease: "out(3)"
    });
  }, [reduced]);

  /* Parallax background */
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

  /* Filters (no E‑commerce) */
  const FILTERS = [
    { id: "all", label: "All", icon: GlobeIcon },
    { id: "Banking", label: "Banking", icon: Landmark },
    { id: "Payments", label: "Payments", icon: CreditCard },
    { id: "Wallets", label: "Wallets", icon: Building2 },
  ];
  const [activeFilter, setActiveFilter] = useState("all");
  const filtered = useMemo(() => {
    if (activeFilter === "all") return ALL_CASES;
    return ALL_CASES.filter(c => c.industry === activeFilter);
  }, [activeFilter]);

  /* CTA magnets */
  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1Ref, 20);
  useMagnet(cta2Ref, 16);

  /* Featured stats (from first featured) */
  const featured = ALL_CASES.find(c => c.featured) || ALL_CASES[0];
  const f1 = useCountUp(94, 1200);
  const f2 = useCountUp(12, 1200);
  const f3 = useCountUp(50, 1200);
  const f4 = useCountUp(98, 1200);

  /* Drawer state */
  const [openStudy, setOpenStudy] = useState<Study | null>(null);

  /* Card grid reflow animation on filter change */
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>(".cs-card");
    if (!items || !items.length) return;
    animate(items, {
      opacity: [{ from: 0, to: 1 }],
      translateY: [{ from: 12, to: 0 }],
      delay: stagger(60),
      duration: 360,
      ease: "out(3)"
    });
  }, [activeFilter, filtered.length]);

  /* Card click pulse */
  const onCardClick = (el: HTMLElement) => {
    animate(el, {
      scale: [{ to: 1.03 }, { to: 1 }],
      boxShadow: [
        { to: "0 0 0 0 rgba(53,224,255,0)" },
        { to: "0 0 0 14px rgba(53,224,255,0.18)" },
        { to: "0 0 0 0 rgba(53,224,255,0)" }
      ],
      duration: 460,
      ease: "out(3)"
    });
  };

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

      {/* Container */}
      <div className="px-10 w-full max-w-none">

        {/* HERO */}
        <section className="py-20 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] mb-6">
            <Star className="h-10 w-10 text-white" />
          </div>
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            Success Stories & Use Cases
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75" data-reveal>
            How Indian fintechs, banks and wallets cut fraud, ship faster and stay compliant with
            <strong> FraudBuster</strong>.
          </p>

          {/* Filter chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3" data-reveal>
            <div className={`${glass} rounded-full px-3 py-1.5 inline-flex items-center gap-2 text-white/70`}>
              <Filter className="h-4 w-4" /> Filter by industry
            </div>
            {[
              { id: "all", label: "All", icon: GlobeIcon },
              { id: "Banking", label: "Banking", icon: Landmark },
              { id: "Payments", label: "Payments", icon: CreditCard },
              { id: "Wallets", label: "Wallets", icon: Building2 },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === f.id
                    ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <f.icon className="h-4 w-4" /> {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section className={`grid gap-8 lg:grid-cols-2 ${glass} rounded-3xl overflow-hidden p-0`} data-reveal>
          <div className="relative h-72 w-full lg:h-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-3 py-1 text-sm font-semibold text-black">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-3 text-[#35E0FF] font-semibold">{featured.industry}</div>
            <h2 className="text-2xl md:text-3xl font-bold">{featured.title}</h2>
            <p className="mt-4 text-white/80"><strong>Challenge:</strong> {featured.challenge}</p>
            <p className="mt-2 text-white/80"><strong>Solution:</strong> {featured.solution}</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {/* live count-ups */}
              <SpotlightCard>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#35E0FF]">{Math.round(f1)}%</div>
                  <div className="text-xs text-white/60">Fraud Reduction</div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#35E0FF]">₹{Math.round(f2)} Cr</div>
                  <div className="text-xs text-white/60">Cost Savings</div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#35E0FF]">{Math.round(f3)}ms</div>
                  <div className="text-xs text-white/60">Response</div>
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="text-center">
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#35E0FF]">{Math.round(f4)}%</div>
                  <div className="text-xs text-white/60">Satisfaction</div>
                </div>
              </SpotlightCard>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                ref={cta1Ref}
                href="#use-cases"
                className="rounded-2xl bg-[#7C5CFF]/90 px-5 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Explore Use Cases
              </a>
              <Link
                ref={cta2Ref}
                to="/api"
                className="rounded-2xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5 transition"
              >
                View API
              </Link>
            </div>
          </div>
        </section>

        {/* CASE STUDIES GRID (3 total) */}
        <section className="py-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold">Case Studies</h3>
            <p className="mt-2 text-white/70" data-reveal>Results across banking, payments and wallets—conversion up, fraud down, audits simplified.</p>
          </div>

          <div ref={gridRef} className="grid gap-8 lg:grid-cols-2">
            {filtered.filter(c => !c.featured).map((study) => (
              <TiltCard
                key={study.id}
                onClick={(el) => onCardClick(el)}
                className={`${glass} cs-card group rounded-2xl overflow-hidden will-change-transform`}
              >
                <div className="relative h-48">
                  <img src={study.image} alt={study.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-black/50 px-3 py-1 text-sm backdrop-blur-sm">{study.industry}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold transition-colors group-hover:text-[#35E0FF]">{study.title}</h4>
                  <p className="mt-3 text-sm text-white/70"><strong>Challenge:</strong> {study.challenge}</p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {study.results.map((r, i) => (
                      <div key={i} className="rounded-lg bg-white/5 p-3 text-center">
                        <div className="mx-auto mb-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                          <r.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="text-lg font-semibold text-[#35E0FF]">{r.value}</div>
                        <div className="text-xs text-white/60">{r.metric}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="mt-5 inline-flex items-center gap-2 text-sm text-[#35E0FF] hover:opacity-90 transition"
                    onClick={(e) => { e.stopPropagation(); setOpenStudy(study); }}
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section id="use-cases" className="py-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold">Where FraudBuster Fits</h3>
            <p className="mt-2 text-white/70" data-reveal>High‑impact checkpoints across the user journey.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Onboarding (KYC)", d: "Verify PAN/Aadhaar quickly with explainable match signals." },
              { t: "Merchant KYB (GST)", d: "Validate GSTIN and filings for trustworthy sellers." },
              { t: "Payouts & Withdrawals", d: "Confirm bank & IFSC to stop misroutes and mule accounts." },
              { t: "Transactions & Limits", d: "Behavioral rules + velocity checks for repeat abusers." },
              { t: "Face Match", d: "Biometric comparison to bind real identity to accounts." },
              { t: "Account Takeover", d: "Correlate device, VPA, and phone to block rings." },
            ].map((u, i) => (
              <SpotlightCard key={i} className="will-change-transform" >
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{u.t}</div>
                    <p className="text-white/70 text-sm mt-1">{u.d}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ROI CALCULATOR — READ-ONLY (auto scenarios, no inputs) */}
        <section className="py-16">
          <div className={`${glass} rounded-3xl p-8`} data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <Activity className="h-6 w-6 text-[#35E0FF]" />
              <h3 className="text-2xl font-bold">ROI Estimator</h3>
            </div>
            <ROIAuto />
          </div>
        </section>

        {/* TESTIMONIALS MARQUEE */}
        <section className="py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">What Clients Say</h3>
            <p className="text-white/70 mt-2" data-reveal>Leaders across banking, payments and wallets trust FraudBuster.</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee will-change-transform">
              {[
                { q: "FraudBuster became our trust layer—fast, explainable, and easy to integrate.", a: "Head of Risk, BNPL" },
                { q: "Compliance without sacrificing conversion.", a: "CTO, Digital Bank" },
                { q: "ATO down double‑digits within weeks.", a: "Security Lead, Wallet" },
                { q: "Audit‑ready evidence made regulators happy.", a: "Head of Compliance, Fintech" },
              ].concat([
                { q: "FraudBuster became our trust layer—fast, explainable, and easy to integrate.", a: "Head of Risk, BNPL" },
                { q: "Compliance without sacrificing conversion.", a: "CTO, Digital Bank" },
                { q: "ATO down double‑digits within weeks.", a: "Security Lead, Wallet" },
                { q: "Audit‑ready evidence made regulators happy.", a: "Head of Compliance, Fintech" },
              ]).map((t, i) => (
                <figure key={i} className={`${glass} min-w-[22rem] max-w-[22rem] rounded-2xl p-6`}>
                  <blockquote className="text-white/80 mb-4">“{t.q}”</blockquote>
                  <figcaption className="text-sm text-white/60">{t.a}</figcaption>
                </figure>
              ))}
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-marquee {
                width: 200%;
                animation: marquee 25s linear infinite;
              }
            `}</style>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className={`${glass} rounded-3xl p-10 bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`} data-reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-3xl font-bold">Ready to write your success story?</h3>
                <p className="text-white/75 mt-2">
                  Launch in hours with our sandbox and guided integration. Audit‑ready from day one.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                >
                  Talk to Sales
                </Link>
                <Link
                  to="/api"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition"
                >
                  See the API
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Drawer */}
      {openStudy && (
        <StudyDrawer
          study={openStudy}
          onClose={() => setOpenStudy(null)}
        />
      )}
    </div>
  );
};

/* =========================================================
   ROI Auto (no user editing, auto-rotating scenarios)
   ========================================================= */
type Scenario = { id: string; label: string; tx: number; rate: number; ticket: number; reduction: number };

const SCENARIOS: Scenario[] = [
  { id: "startup",    label: "Startup",    tx: 200_000, rate: 1.6, ticket: 600,  reduction: 60 },
  { id: "growth",     label: "Growth",     tx: 800_000, rate: 1.9, ticket: 900,  reduction: 70 },
  { id: "enterprise", label: "Enterprise", tx: 2_400_000, rate: 2.1, ticket: 1300, reduction: 75 },
];

function ROIAuto() {
  const [idx, setIdx] = useState(0);
  const scenario = SCENARIOS[idx];
  const [paused, setPaused] = useState(false);

  // Auto-rotate scenarios
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SCENARIOS.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  // Derived numbers (read-only)
  const fraudLoss = useMemo(() => (scenario.tx * (scenario.rate / 100)) * scenario.ticket, [scenario]);
  const saved = useMemo(() => fraudLoss * (scenario.reduction / 100), [fraudLoss, scenario]);

  // Pulse highlight on change
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!cardRef.current) return;
    animate(cardRef.current, {
      boxShadow: [
        { to: "0 0 0 rgba(53,224,255,0)" },
        { to: "0 0 22px rgba(53,224,255,0.24)" },
        { to: "0 0 0 rgba(53,224,255,0)" }
      ],
      duration: 560, ease: "out(3)"
    });
  }, [idx]);

  // Small sparkline bars (visual only)
  const bars = useMemo(() => {
    const base = [12, 18, 10, 16, 14, 22, 13, 19, 15, 21];
    const shift = idx * 3;
    return base.map((v, i) => base[(i + shift) % base.length]);
  }, [idx]);

  return (
    <div
      className="grid gap-6 lg:grid-cols-[1.2fr_1fr]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left: scenario chips + explainer */}
      <div>
        <div className="mb-4 flex flex-wrap gap-2">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIdx(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                idx === i ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black" : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className={`${glass} rounded-2xl p-5`}>
          <div className="text-sm text-white/70">Scenario</div>
          <div className="mt-1 text-lg font-semibold">{scenario.label}</div>

          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-white/60">Monthly transactions</div>
              <div className="font-semibold">~ {scenario.tx.toLocaleString()}</div>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-white/60">Fraud rate</div>
              <div className="font-semibold">{scenario.rate}%</div>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-white/60">Avg ticket</div>
              <div className="font-semibold">₹{scenario.ticket.toLocaleString()}</div>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <div className="text-white/60">Reduction w/ FraudBuster</div>
              <div className="font-semibold">{scenario.reduction}%</div>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex items-end gap-1 h-16">
              {bars.map((h, i) => (
                <div key={i} className="w-2 rounded-t bg-gradient-to-t from-[#6C63FF] to-[#35E0FF]" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="mt-1 text-xs text-white/50">Traffic & risk pulse (illustrative)</div>
          </div>
        </div>
      </div>

      {/* Right: results (read-only, auto calc) */}
      <div ref={cardRef} className={`${glass} rounded-2xl p-6`}>
        <div className="mb-4 text-sm text-white/70">Projected impact</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div className="text-xl font-bold text-[#35E0FF]">₹{Math.round(fraudLoss).toLocaleString()}</div>
            <div className="text-xs text-white/60">Current fraud loss / month</div>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="text-xl font-bold text-[#35E0FF]">₹{Math.round(saved).toLocaleString()}</div>
            <div className="text-xs text-white/60">Saved with FraudBuster</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-white/50">
          * Estimates only. Connect your analytics to validate realized impact.
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
