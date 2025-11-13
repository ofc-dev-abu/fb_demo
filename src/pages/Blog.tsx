// import React from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, User, ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Blog = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'New Guidelines on Digital Payment Security: What Companies Need to Know',
//       excerpt: 'Understanding the latest regulations and how they impact fraud prevention strategies in the fintech ecosystem.',
//       author: 'Security Expert',
//       date: '2025-01-15',
//       category: 'Regulatory',
//       readTime: '8 min read',
//       image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'AI-Powered Fraud Detection: The Future of Digital Payments',
//       excerpt: 'How machine learning algorithms are revolutionizing fraud prevention in the rapidly growing digital payment landscape.',
//       author: 'AI Specialist',
//       date: '2025-01-12',
//       category: 'Technology',
//       readTime: '6 min read',
//       image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 3,
//       title: 'Digital Payment Fraud Trends in 2025: Prevention Strategies for Businesses',
//       excerpt: 'Analyzing the latest fraud patterns and implementing effective prevention measures for businesses.',
//       author: 'Fraud Prevention Expert',
//       date: '2025-01-10',
//       category: 'Security',
//       readTime: '7 min read',
//       image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 4,
//       title: 'Compliance with Account Aggregator Framework',
//       excerpt: 'A comprehensive guide to implementing Account Aggregator guidelines while maintaining robust fraud detection.',
//       author: 'Compliance Expert',
//       date: '2025-01-08',
//       category: 'Compliance',
//       readTime: '10 min read',
//       image: 'https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 5,
//       title: 'Digital Lending Security: Protecting Against Synthetic Identity Fraud',
//       excerpt: 'Best practices for digital lending platforms to prevent synthetic identity fraud in the market.',
//       author: 'Security Expert',
//       date: '2025-01-05',
//       category: 'Security',
//       readTime: '9 min read',
//       image: 'https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       id: 6,
//       title: 'Financial Institution Compliance: Fraud Prevention in the New Regulatory Landscape',
//       excerpt: 'How financial institutions can align their fraud prevention strategies with evolving regulations and guidelines.',
//       author: 'Compliance Expert',
//       date: '2025-01-03',
//       category: 'Regulatory',
//       readTime: '8 min read',
//       image: 'https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
//   ];

//   const categories = ['All', 'Technology', 'Security', 'Regulatory', 'Compliance'];
//   const [selectedCategory, setSelectedCategory] = React.useState('All');

//   const filteredPosts = selectedCategory === 'All' 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === selectedCategory);

//   const featuredPost = blogPosts.find(post => post.featured);
//   const regularPosts = blogPosts.filter(post => !post.featured);

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
//               Fintech Security Insights
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Stay ahead of fraud trends with expert insights on fintech regulations, 
//               security best practices, and industry developments.
//             </p>
//           </motion.div>

//           {/* Category Filter */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-wrap justify-center gap-4 mb-12"
//           >
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
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

//       {/* Featured Post */}
//       {featuredPost && selectedCategory === 'All' && (
//         <section className="py-12 bg-black/20">
//           <div className="px-10 max-w-none">
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
//                     src={featuredPost.image}
//                     alt={featuredPost.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       Featured
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-8 flex flex-col justify-center">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
//                       {featuredPost.category}
//                     </span>
//                     <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
//                   </div>
//                   <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//                     {featuredPost.title}
//                   </h2>
//                   <p className="text-gray-300 mb-6 leading-relaxed">
//                     {featuredPost.excerpt}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <User className="h-5 w-5 text-cyan-400" />
//                       <span className="text-gray-300">{featuredPost.author}</span>
//                       <Calendar className="h-5 w-5 text-cyan-400 ml-4" />
//                       <span className="text-gray-300">{featuredPost.date}</span>
//                     </div>
//                     <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
//                       Read More <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* Blog Posts Grid */}
//       <section className="py-24">
//         <div className="px-10 max-w-none">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 left-4">
//                     <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
//                     <span className="flex items-center">
//                       <Calendar className="h-4 w-4 mr-1" />
//                       {post.date}
//                     </span>
//                     <span>{post.readTime}</span>
//                   </div>
                  
//                   <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
//                     {post.title}
//                   </h3>
                  
//                   <p className="text-gray-400 mb-4 leading-relaxed">
//                     {post.excerpt}
//                   </p>
                  
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <User className="h-4 w-4 text-cyan-400" />
//                       <span className="text-gray-300 text-sm">{post.author}</span>
//                     </div>
//                     <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
//                       Read More <ArrowRight className="ml-1 h-3 w-3" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter Subscription */}
//       <section className="py-24 bg-black/20">
//         <div className="px-10 max-w-none text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Stay Updated on Fintech Security
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Get the latest insights on regulations, fraud prevention strategies, 
//               and fintech market trends delivered to your inbox.
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

// export default Blog;






//<----------------------------------------------------------------------------------------------------------------





//<-----------------------------------------------------------------------------------------------------------------------------


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Calendar, User, ArrowRight, TrendingUp, Shield, Zap, Filter, Clock, Share2, Copy,
  Bookmark, BookOpen, Eye, Star, CheckCircle, Lock, Globe, Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";

/* =========================================================
   Shared Utilities (same vibe as Home / CaseStudies)
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

/* Tilt on hover */
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

/* Magnetic hover */
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

/* Spotlight card with ripple (21st.dev vibe) */
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

/* Scroll reveal */
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

/* TiltCard wrapper (valid hook placement) */
function TiltCard({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: (el: HTMLElement) => void; }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);
  return (
    <div ref={ref} className={className} onClick={(e) => onClick?.(e.currentTarget as HTMLElement)}>
      {children}
    </div>
  );
}

/* =========================================================
   Article Drawer (in-page reader)
   ========================================================= */
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: "Technology" | "Security" | "Regulatory" | "Compliance";
  readTime: string;
  image: string;
  featured?: boolean;
  body: string[];
  bullets?: string[];
};

function ArticleDrawer({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ from: 0, to: 1 }], duration: 160, ease: "out(3)" });
    if (panelRef.current) animate(panelRef.current, { translateY: [{ from: 24, to: 0 }], opacity: [{ from: 0, to: 1 }], duration: 240, ease: "out(3)" });
    const paras = contentRef.current?.querySelectorAll<HTMLElement>("[data-para]");
    if (paras && paras.length)
      animate(paras, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 12, to: 0 }], delay: stagger(36), duration: 320, ease: "out(3)" });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    const onScroll = () => {
      const el = contentRef.current;
      if (!el || !progressRef.current) return;
      const max = el.scrollHeight - el.clientHeight;
      const sc = Math.min(1, el.scrollTop / Math.max(1, max));
      progressRef.current.style.transform = `scaleX(${sc})`;
    };
    window.addEventListener("keydown", onKey);
    contentRef.current?.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("keydown", onKey);
      contentRef.current?.removeEventListener("scroll", onScroll as any);
    };
  }, []);

  const close = () => {
    if (panelRef.current) animate(panelRef.current, { translateY: [{ to: 24 }], opacity: [{ to: 0 }], duration: 180, ease: "out(3)" });
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ to: 0 }], duration: 120 });
    setTimeout(onClose, 200);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href + `#post-${post.id}`);
      const btn = document.getElementById("copy-btn");
      if (btn) {
        animate(btn, { scale: [{ to: 1.08 }, { to: 1 }], duration: 260, ease: "out(3)" });
      }
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <div ref={overlayRef} className="absolute inset-0 bg-black/60" onClick={close} />
      <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:w-[720px]">
        <div ref={panelRef} className={`${glass} md:rounded-l-3xl rounded-t-3xl h-full overflow-hidden bg-[#0b0b12]/80`}>
          {/* top progress */}
          <div className="relative h-[3px] bg-white/10">
            <div ref={progressRef} className="origin-left h-full bg-gradient-to-r from-[#35E0FF] via-[#6C63FF] to-[#4AF2C6]" />
          </div>

          {/* header */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] grid place-items-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-[#35E0FF] font-semibold">{post.category} · {post.readTime}</div>
                <div className="font-semibold">{post.title}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button id="copy-btn" onClick={copyLink} className="rounded-lg bg-white/10 p-2 hover:bg-white/20"><Copy className="h-4 w-4" /></button>
              <button className="rounded-lg bg-white/10 p-2 hover:bg-white/20"><Share2 className="h-4 w-4" /></button>
              <button className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20" onClick={close}>Close</button>
            </div>
          </div>

          {/* image */}
          <div className="h-48 w-full relative overflow-hidden">
            <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
          </div>

          {/* content */}
          <div ref={contentRef} className="h-[calc(100%-48px-70px)] overflow-y-auto p-6">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><User className="h-4 w-4 text-[#35E0FF]" /> {post.author}</div>
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-[#35E0FF]" /> {post.date}</div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#35E0FF]" /> Reader Mode</div>
            </div>

            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>

            {post.body.map((p, i) => (
              <p key={i} data-para className="mt-4 text-white/80 leading-relaxed">
                {p}
              </p>
            ))}

            {post.bullets && post.bullets.length > 0 && (
              <div className="mt-6 grid gap-3">
                {post.bullets.map((b, i) => (
                  <div key={i} data-para className={`${glass} rounded-xl p-3 text-sm flex items-start gap-2`}>
                    <CheckCircle className="h-4 w-4 text-[#35E0FF] mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <SpotlightCard>
                <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm text-white/70">Built for Risk & Compliance</div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div className="text-sm text-white/70">Sub-second Decisions</div>
              </SpotlightCard>
            </div>

            <div className="mt-10 mb-2 flex items-center justify-center gap-3">
              <button className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"><Bookmark className="h-4 w-4 inline mr-2" /> Save</button>
              <Link to="/api" className="rounded-full bg-[#7C5CFF]/90 px-4 py-2 text-sm text-white hover:opacity-95">
                Explore API <ArrowRight className="h-4 w-4 inline ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Mock data – marketing-grade content for FraudBuster
   ========================================================= */
const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "New Digital Payments Guidelines 2025: What Risk Teams Must Change Now",
    excerpt:
      "A practical breakdown of the latest Indian digital payments guidance and how to align fraud controls without hurting conversion.",
    author: "Security & Compliance Desk",
    date: "2025-01-15",
    category: "Regulatory",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    body: [
      "Regulators are tightening expectations around consented data use, explainability, and auditable outcomes—especially where KYC/KYB, bank verification, and GST insights intersect.",
      "FraudBuster’s posture is to correlate deterministic checks (PAN/Aadhaar/IFSC/GST) with behavioral signals and produce a decision that is both fast and explainable.",
      "This post maps the controls you likely already have to the ones you need next—and how to phase them without burning engineering time."
    ],
    bullets: [
      "Capture explicit consent per flow; store evidence with a retention clock.",
      "Evidence trails: decisions + flags + source signals (auditor-friendly).",
      "Data residency and RBAC: keep tenant boundaries hard by default."
    ]
  },
  {
    id: 2,
    title: "AI-Powered Fraud Detection That Doesn’t Nuke Conversion",
    excerpt:
      "How to apply ML where it matters, keep features minimal-enough to operate, and avoid black-box denials.",
    author: "Risk Engineering",
    date: "2025-01-12",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "You don’t need a 500-feature model to win. You need a defensible subset paired with deterministic rails and sharp thresholds.",
      "FraudBuster blends VPA alignment, bank/IFSC truth, GST consistency, and velocity patterns to catch abuse without blocking the good.",
      "Explainability is a product feature: every score is paired with human-readable evidence so ops can resolve quickly."
    ],
    bullets: [
      "Start with deterministic rails; add ML for lift.",
      "Instrument webhooks for near-real-time feedback loops.",
      "Thresholds → policies → experiment, not big-bang cuts."
    ]
  },
  {
    id: 3,
    title: "Fraud Trends 2025: ATO Rings, Synthetic KYC, and Money Mules",
    excerpt:
      "What we see across wallets, payments, and lending—and which controls deliver outsized results.",
    author: "Fraud Intelligence",
    date: "2025-01-10",
    category: "Security",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "The most effective suppressions right now blend device patterns with VPA/phone alignment. Ring behavior stands out when you correlate across attempts.",
      "KYC leakage is real—so bind biometric face match at the right step to raise the cost of impersonation.",
      "Always couple controls with SLAs: the best system is the one teams use confidently."
    ],
    bullets: [
      "ATO down double-digits with VPA + device correlation.",
      "Synthetic KYC: face match + PAN consistency.",
      "Add velocity limits on payouts and withdraws."
    ]
  },
  {
    id: 4,
    title: "Account Aggregator & KYB: Doing Compliance Without Latency",
    excerpt:
      "A guide to implementing Account Aggregator alignment while keeping user experience silky smooth.",
    author: "Compliance Lab",
    date: "2025-01-08",
    category: "Compliance",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Compliance lift doesn’t have to mean latency spikes. Design your requests and caching layers around the happy path.",
      "FraudBuster exposes webhook events and sandbox payloads so teams can iterate quickly without foot-guns.",
      "Most teams unlock a faster audit when evidence trails ship natively with the decision."
    ],
    bullets: [
      "Cache the deterministic bits; refresh async.",
      "Send auditors the evidence bundle, not screenshots.",
      "Use environment keys and tenant isolation by default."
    ]
  },
  {
    id: 5,
    title: "Digital Lending: Beating Synthetic Identity With Explainability",
    excerpt:
      "Why explainable decisions outperform approvals tuned by gut feel.",
    author: "Decision Science",
    date: "2025-01-05",
    category: "Security",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Lending teams reduce loss ratios fastest when they can reason about a case: what fired, why, and what would change the outcome.",
      "Masking helps, but alignment is king—PAN ↔ Aadhaar ↔ Bank ↔ GST.",
      "Use BI-ready exports and close the loop with your portfolio analytics."
    ],
    bullets: [
      "Expose flags + thresholds in the UI.",
      "Make policy changes auditable (who/when/why).",
      "Review false-positive clusters weekly."
    ]
  },
  {
    id: 6,
    title: "Institutions in a New Rulebook: Shipping Controls That Age Well",
    excerpt:
      "Evolving guidelines demand controls that are easy to prove, not just easy to ship.",
    author: "Enterprise Risk",
    date: "2025-01-03",
    category: "Regulatory",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/6801650/pexels-photo-6801650.jpeg?auto=compress&cs=tinysrgb&w=1200",
    body: [
      "Design for audits on day one: decisions must carry evidence, and access must be least-privileged.",
      "FraudBuster’s RBAC and tenant isolation keep boundaries clear across teams and geographies.",
      "Keep controls observable: build dashboards that highlight precision, not just volume."
    ],
    bullets: [
      "Evidence trails, not ad-hoc logs.",
      "RBAC and data residency per tenant.",
      "Precision and lift as first-class metrics."
    ]
  }
];

/* =========================================================
   Page
   ========================================================= */
const Blog: React.FC = () => {
  const reduced = useReducedMotion();
  useScrollReveal();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Headline split reveal */
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = headlineRef.current;
    if (!el || reduced) return;
    const text = el.textContent || "";
    el.innerHTML = text
      .split("")
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

  /* Category filters */
  const categories = ["All", "Technology", "Security", "Regulatory", "Compliance"] as const;
  type Cat = typeof categories[number];
  const [selectedCategory, setSelectedCategory] = useState<Cat>("All");

  const filteredPosts = selectedCategory === "All" ? POSTS : POSTS.filter(p => p.category === selectedCategory);
  const featuredPost = POSTS.find(p => p.featured);
  const regularPosts = POSTS.filter(p => !p.featured);

  /* Grid reflow animation on filter change */
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>(".blog-card");
    if (!items || !items.length) return;
    animate(items, {
      opacity: [{ from: 0, to: 1 }],
      translateY: [{ from: 12, to: 0 }],
      delay: stagger(60),
      duration: 360,
      ease: "out(3)"
    });
  }, [selectedCategory, filteredPosts.length]);

  /* CTA magnet */
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useMagnet(ctaRef, 18);

  /* Reader drawer */
  const [openPost, setOpenPost] = useState<BlogPost | null>(null);

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

      <div className="px-10 w-full max-w-none">

        {/* HERO */}
        <section className="py-20 text-center">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] mb-6">
            <Activity className="h-10 w-10 text-white" />
          </div>
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.1]">
            Fintech Security Insights
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75" data-reveal>
            Stay ahead of fraud with explainable decisions, sub-second SLAs, and compliance-first design.
            Here’s what FraudBuster is learning across the ecosystem.
          </p>

          {/* Category chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-reveal>
            <div className={`${glass} rounded-full px-3 py-1.5 inline-flex items-center gap-2 text-white/70`}>
              <Filter className="h-4 w-4" /> Browse topics
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* FEATURED (shown irrespective of filter if it's included in filtered set) */}
        {featuredPost && (selectedCategory === "All" || featuredPost.category === selectedCategory) && (
          <section className={`grid gap-8 lg:grid-cols-2 ${glass} rounded-3xl overflow-hidden p-0`} data-reveal>
            <div className="relative h-72 w-full lg:h-auto">
              <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-3 py-1 text-sm font-semibold text-black">Featured</span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-3 text-[#35E0FF] font-semibold">{featuredPost.category} · {featuredPost.readTime}</div>
              <h2 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h2>
              <p className="mt-4 text-white/80">{featuredPost.excerpt}</p>

              {/* live stat chips */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <SpotlightCard>
                  <div className="text-center">
                    <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm text-white/70">Audit-ready evidence</div>
                  </div>
                </SpotlightCard>
                <SpotlightCard>
                  <div className="text-center">
                    <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF]">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-sm text-white/70">Sub-second decisions</div>
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  ref={ctaRef}
                  href="#articles"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-5 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                >
                  Read Articles
                </a>
                <button
                  className="rounded-2xl border border-white/15 px-5 py-3 font-semibold hover:bg-white/5 transition"
                  onClick={() => setOpenPost(featuredPost)}
                >
                  Open Reader
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLES GRID */}
        <section id="articles" className="py-16">
          <div className="mb-8">
            <h3 className="text-3xl font-bold">Latest Posts</h3>
            <p className="mt-2 text-white/70" data-reveal>
              Practical playbooks across Technology · Security · Regulatory · Compliance.
            </p>
          </div>

          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} onOpen={() => setOpenPost(post)} onPulse={onCardClick} />
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-16">
          <div className={`${glass} rounded-3xl p-10 bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`} data-reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-3xl font-bold">Stay Updated on Fintech Security</h3>
                <p className="text-white/75 mt-2">
                  Get new posts on fraud trends, KYC/KYB guidance, and risk engineering in your inbox.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className={`${glass} rounded-3xl p-10`} data-reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-3xl font-bold">Build with FraudBuster</h3>
                <p className="text-white/75 mt-2">
                  Sandbox, webhooks, and explainable decisions—launch in hours, not weeks.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/api"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                >
                  See the API
                </Link>
                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Drawer */}
      {openPost && (
        <ArticleDrawer post={openPost} onClose={() => setOpenPost(null)} />
      )}
    </div>
  );
};

/* =========================================================
   Blog Card
   ========================================================= */
function BlogCard({ post, onOpen, onPulse }: { post: BlogPost; onOpen: () => void; onPulse: (el: HTMLElement) => void; }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 8);

  const onClick = (e: React.MouseEvent) => {
    onPulse(e.currentTarget as HTMLElement);
    onOpen();
  };

  return (
    <div ref={ref} className={`${glass} blog-card group rounded-2xl overflow-hidden will-change-transform`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">{post.category}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-[#35E0FF]" /> {post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg font-semibold transition-colors group-hover:text-[#35E0FF]">{post.title}</h3>
        <p className="mt-2 text-white/70 leading-relaxed">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <User className="h-4 w-4 text-[#35E0FF]" /> {post.author}
          </div>
          <button onClick={onClick} className="inline-flex items-center gap-2 text-sm text-[#35E0FF] hover:opacity-90 transition">
            Read More <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Newsletter Form (micro-interactions)
   ========================================================= */
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const btnRef = useRef<HTMLButtonElement>(null);
  const inpRef = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      if (inpRef.current) animate(inpRef.current, { translateX: [{ to: -6 }, { to: 6 }, { to: 0 }], duration: 260, ease: "out(3)" });
      return;
    }
    if (btnRef.current) animate(btnRef.current, { scale: [{ to: 1.06 }, { to: 1 }], duration: 260, ease: "out(3)" });
    setEmail("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
      <input
        ref={inpRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#35E0FF]"
      />
      <button
        ref={btnRef}
        className="rounded-lg bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-6 py-3 font-semibold text-black hover:opacity-95"
      >
        Subscribe
      </button>
    </form>
  );
}

export default Blog;
