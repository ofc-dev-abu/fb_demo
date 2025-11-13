// import React from 'react';
// import { motion } from 'framer-motion';
// import { Target, Users, Award, Lightbulb, Heart, Shield } from 'lucide-react';

// const AboutUs = () => {
//   const values = [
//     {
//       icon: Shield,
//       title: 'Security First',
//       description: 'We prioritize the highest standards of security in everything we build'
//     },
//     {
//       icon: Heart,
//       title: 'Customer-Centric',
//       description: 'Our customers success drives every decision we make'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Innovation',
//       description: 'Constantly pushing boundaries with cutting-edge technology'
//     },
//     {
//       icon: Award,
//       title: 'Excellence',
//       description: 'Committed to delivering exceptional quality and results'
//     }
//   ];

//   const teamMembers = [
//     {
//       name: 'Chief Executive Officer',
//       role: 'CEO & Founder',
//       bio: 'Technology executive with 15+ years in fraud prevention and fintech'
//     },
//     {
//       name: 'Chief Technology Officer',
//       role: 'CTO',
//       bio: 'AI/ML expert with extensive experience in technology development'
//     },
//     {
//       name: 'Head of Security',
//       role: 'Head of Security',
//       bio: 'Cybersecurity specialist with enterprise and financial sector experience'
//     },
//     {
//       name: 'Head of Sales',
//       role: 'Head of Sales',
//       bio: 'Strategic partnerships and business development leader'
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
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//               About Fraud Buster
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               We're on a mission to make financial transactions safer and more secure for businesses
//               and consumers worldwide through innovative fraud detection technology.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-24 bg-black/20">
//         <div className="mx-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
//                 <Target className="h-8 w-8 text-white" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Our Mission
//               </h2>
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 To empower businesses with intelligent fraud detection technology that protects
//                 revenue, builds customer trust, and enables secure digital commerce at scale.
//               </p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:rotate-1 transition-transform duration-500">
//                 <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
//                 <p className="text-gray-300 leading-relaxed">
//                   Founded in 2020 by a team of fintech veterans and AI experts, Fraud Buster emerged
//                   from the growing need for sophisticated fraud detection in the rapidly evolving
//                   digital payment landscape. We've processed over $10B in transactions and prevented
//                   millions in fraud losses for our clients.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
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
//               Our Values
//             </h2>
//             <p className="text-xl text-gray-300">
//               The principles that guide everything we do
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, rotateY: 5 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                   <value.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
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
//               Meet Our Team
//             </h2>
//             <p className="text-xl text-gray-300">
//               Industry experts dedicated to your security
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05, rotateY: 10 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
//                   <Users className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white mb-2 text-center">{member.name}</h3>
//                 <p className="text-cyan-400 text-sm font-medium mb-3 text-center">{member.role}</p>
//                 <p className="text-gray-400 text-sm leading-relaxed text-center">{member.bio}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
//           >
//             <div className="grid md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">$10B+</div>
//                 <div className="text-gray-300">Transactions Protected</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
//                 <div className="text-gray-300">Happy Clients</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
//                 <div className="text-gray-300">Accuracy Rate</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
//                 <div className="text-gray-300">Support Available</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;









//<-----------------------------------------------------------------------------------------------------------------------------















//<-----------------------------------------------------------------------------------------------------------------------------

// src/pages/AboutUs.tsx
  

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { animate, stagger } from "animejs";
import {
  Shield, Heart, Lightbulb, Award, Globe, Cpu, Zap, LineChart, KeyRound,
  Boxes, Lock, Sparkles, Code2, Server, Workflow, BarChart3, Eye, CheckCircle2, ArrowUpRight,
  Calendar, ArrowUp, Rocket, Building2, MessageSquare, Compass, Infinity, Star
} from "lucide-react";

/* ============================== Design Tokens ============================== */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
const ACCENT = "#35E0FF";

/* ============================== Utilities ============================== */
const clamp = (v:number, min:number, max:number)=>Math.max(min, Math.min(max, v));
const useReducedMotion = ()=> {
  const [pref, setPref] = useState(false);
  useEffect(()=>{
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const sync = ()=> setPref(!!mq?.matches);
    sync();
    mq?.addEventListener?.("change", sync);
    return ()=> mq?.removeEventListener?.("change", sync);
  },[]);
  return pref;
};

/* ============================== Top Scroll Progress ============================== */
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
      <div ref={bar} className={`origin-left h-full ${GRADIENT}`} style={{ transform:"scaleX(0)" }} />
    </div>,
    document.body
  );
}

/* ============================== Cursor Particles (precise to pointer) ============================== */
function CursorParticles({ paused=false }:{ paused?:boolean }){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  useEffect(()=>{ pausedRef.current = paused; }, [paused]);

  // Dot sticks to exact pointer
  useEffect(()=>{
    const dot = dotRef.current!;
    const move = (e: MouseEvent)=>{ if(!pausedRef.current) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
    window.addEventListener("mousemove", move, { passive:true });
    return ()=> window.removeEventListener("mousemove", move);
  },[]);

  // Soft glow particles
  useEffect(()=>{
    type P = { x:number;y:number;vx:number;vy:number;life:number };
    const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
    let raf = 0, dpr = Math.max(1, window.devicePixelRatio || 1);
    const resize = ()=>{
      const w = innerWidth, h = innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      cvs.width = Math.floor(w*dpr); cvs.height = Math.floor(h*dpr);
      cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr);
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
    const onMove = (e:MouseEvent)=>{ if(!pausedRef.current) spawn(e.clientX, e.clientY); };
    window.addEventListener("mousemove", onMove);

    const loop = ()=>{
      ctx.clearRect(0,0,innerWidth,innerHeight);
      if(!pausedRef.current){
        for(let i=parts.length-1;i>=0;i--){
          const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
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
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  },[]);

  return createPortal(
    <>
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9997]" />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
      />
    </>,
    document.body
  );
}

/* ============================== Hooks ============================== */
function useReveals(selector="[data-reveal]", disabled=false){
  useEffect(()=>{
    if(disabled) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        animate(e.target as Element, { opacity: [0,1], transform: ["translateY(18px)", "translateY(0px)"], duration:420, easing:"easeOutCubic" });
        io.unobserve(e.target);
      });
    },{ threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    nodes.forEach(n=>io.observe(n));
    return ()=> io.disconnect();
  },[selector, disabled]);
}
function useTilt(ref: React.RefObject<HTMLElement>, max=8){
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const move = (e:MouseEvent)=>{
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left)/r.width;
      const py = (e.clientY - r.top)/r.height;
      el.style.transform = `perspective(900px) rotateX(${(py-.5)*-max}deg) rotateY(${(px-.5)*max}deg)`;
    };
    const leave = ()=> animate(el, { transform: ["perspective(900px) rotateX(var(--rx,0)) rotateY(var(--ry,0))","perspective(900px) rotateX(0) rotateY(0)"], duration:180 });
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return ()=>{ el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  },[ref, max]);
}
function useMagnet(ref: React.RefObject<HTMLElement>, strength=18){
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    let hover=false;
    const move = (e:MouseEvent)=>{
      if(!hover) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2);
      const dy = e.clientY - (r.top + r.height/2);
      el.style.transform = `translate(${dx/strength}px, ${dy/strength}px)`;
    };
    const enter = ()=>{ hover=true; };
    const leave = ()=>{
      hover=false;
      animate(el, { transform: ["translate(var(--tx,0), var(--ty,0))", "translate(0px,0px)"], duration:180, easing:"easeOutCubic" });
    };
    window.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return ()=>{ window.removeEventListener("mousemove", move); el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); };
  },[ref, strength]);
}

/* ============================== Micro Elements ============================== */
function Pill({ icon: Icon, label }:{ icon:any; label:string }){
  return (
    <span className="rounded-xl border border-white/15 px-3 py-1.5 text-sm inline-flex items-center gap-2">
      <Icon className="h-4 w-4" /> {label}
    </span>
  );
}
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
        style={{ background: "radial-gradient(160px 160px at var(--rx,50%) var(--ry,50%), rgba(53,224,255,.18), transparent 60%)" }} />
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
function Badge({ icon: Icon, text }:{ icon:any; text:string }){
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2 hover:bg-white/[0.08] transition">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
function Chip({ children }:{ children:React.ReactNode }){
  return <span className="text-xs px-2 py-1 rounded-md border border-white/10 bg-white/[0.06]">{children}</span>;
}

/* ============================== Spotlight & Tilt Cards ============================== */
function SpotlightCard({ icon: Icon, title, text }:{ icon:any; title:string; text:string }){
  const ref = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  useTilt(ref, 5);

  useEffect(()=>{
    const el = container.current!;
    const move = (e:PointerEvent)=>{
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left)/r.width)*100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top)/r.height)*100}%`);
    };
    el.addEventListener("pointermove", move);
    return ()=> el.removeEventListener("pointermove", move);
  },[]);

  return (
    <div
      ref={container}
      className={`${glass} relative rounded-2xl p-6 overflow-hidden`}
      style={{ backgroundImage: "radial-gradient(240px 240px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.15), transparent 70%)" }}
    >
      <div ref={ref} className="relative z-10">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-xl font-semibold">{title}</div>
        <p className="mt-2 text-white/75 text-sm">{text}</p>
      </div>
    </div>
  );
}

/* ============================== Animated Counters ============================== */
function CountUp({ to, suffix="" }:{ to:number; suffix?:string }){
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(()=>{
    const el = ref.current!;
    const start = 0; const end = to; const dur = 900;
    const startTime = performance.now();
    let raf=0;
    const tick = (t:number)=>{
      const p = clamp((t - startTime)/dur, 0, 1);
      const val = Math.floor(start + (end - start)*p);
      el.textContent = `${val.toLocaleString()}${suffix}`;
      if(p<1) raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  },[to, suffix]);
  return <span ref={ref} />;
}

/* ============================== Text Split & Reveal ============================== */
function useHeadlineReveal(h1Ref: React.RefObject<HTMLElement>){
  useEffect(()=>{
    const el = h1Ref.current; if(!el) return;
    const text = el.textContent || "";
    el.innerHTML = text.split("").map(c => `<span class="inline-block opacity-0 translate-y-6">${c === " " ? "&nbsp;" : c}</span>`).join("");
    const chars = el.querySelectorAll<HTMLElement>("span");
    animate(chars, { opacity: [0,1], transform: ["translateY(20px)","translateY(0px)"], delay: stagger(20), duration: 460, easing:"easeOutExpo" });
  },[h1Ref]);
}

/* ============================== AboutUs ============================== */
const AboutUs: React.FC = () => {
  const reduced = useReducedMotion();
  const navigate = useNavigate();
  useReveals("[data-reveal]", reduced);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // background parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(()=>{ const m=(e:MouseEvent)=>setMouse({x:e.clientX,y:e.clientY}); window.addEventListener("mousemove", m); return ()=>window.removeEventListener("mousemove", m); },[]);
  const parallax = useMemo(()=>({ transform: `translate3d(${(mouse.x - innerWidth/2)*0.01}px, ${(mouse.y - innerHeight/2)*0.01}px, 0)` }), [mouse.x, mouse.y]);

  // Back to top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(()=>{ const s=()=>setShowTop(scrollY>600); s(); window.addEventListener("scroll", s, { passive:true }); return ()=>window.removeEventListener("scroll", s); },[]);

  // Hero headline reveal
  const headlineRef = useRef<HTMLHeadingElement>(null);
  useHeadlineReveal(headlineRef);

  // Morphing hero blob
  const blobRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el = blobRef.current!;
    const loop = ()=>{
      const r1 = `${40 + Math.random()*30}%`;
      const r2 = `${40 + Math.random()*30}%`;
      const r3 = `${40 + Math.random()*30}%`;
      const r4 = `${40 + Math.random()*30}%`;
      const anim:any = animate(
        el,
        { borderRadius: [`${r1} ${r2} ${r3} ${r4} / ${r2} ${r3} ${r4} ${r1}`], duration: 2800, easing: "easeInOutQuad" }
      );
      if(anim && anim.finished && typeof anim.finished.then === "function"){
        anim.finished.then(loop);
      }else{
        setTimeout(loop, 2800);
      }
    };
    loop();
    const spin:any = animate(el, { transform: ["rotate(0deg) scale(1)", "rotate(360deg) scale(1.04)"], duration:12000, easing:"linear", loop: true });
    return ()=>{ if(spin && typeof spin.cancel==="function") spin.cancel(); };
  },[]);

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

      {/* soft background */}
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

      {/* ============================== Hero ============================== */}
      <section className="relative overflow-hidden">
        <div className="mx-10 max-w-none py-20">
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`} data-reveal>
                <Rocket className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-semibold">FraudBuster — Secure. Explainable. Real-time.</span>
              </div>
              <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                About FraudBuster
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                We help banks, NBFCs, and fintechs defeat fraud with API-first defenses, privacy-preserving ML, and audit-ready evidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <Pill icon={Globe} label="Global-ready · Regional residency" />
                <Pill icon={KeyRound} label="AES-256 at rest · TLS in transit" />
                <Pill icon={Infinity} label="Sub-100ms scoring at scale" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <PrimaryButton label="Talk to us" icon={ArrowUpRight} onClick={()=>navigate("/contact")} />
                <GhostButton label="Explore our API" icon={Code2} onClick={()=>document.getElementById("api")?.scrollIntoView({ behavior:"smooth" })} />
              </div>
            </div>

            <div className={`${glass} rounded-2xl p-6 relative`} data-reveal>
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
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Explainable decisions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Human review tools</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Evidence for audits</li>
                </ul>
                <div className="absolute right-4 bottom-4 text-xs text-white/70 inline-flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5" /> Built for fintech scale
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={Zap} text="<100ms"/>
                <Badge icon={Server} text="99.99%"/>
                <Badge icon={Lock} text="Zero-trust"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== Story Timeline ============================== */}
      <section className="py-16" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">The Journey</h2>
            <p className="text-white/70">From a small team of risk nerds to a platform protecting billions in transactions.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { y:"2020", t:"Founded", d:"Launched FraudBuster with a mission to make fraud defense developer-friendly." },
              { y:"2022", t:"API v2", d:"Introduced explainability, reason codes, & real-time step-up triggers." },
              { y:"2024", t:"Scale", d:"Reached sub-100ms scoring across multi-region clusters with auto-failover." },
              { y:"2025", t:"Now", d:"Privacy-preserving models, audit evidence pipelines, & global partnerships." },
            ].map((n,i)=>(
              <div key={i} className={`${glass} rounded-2xl p-5 hover:bg-white/10 transition`}>
                <div className="text-[#35E0FF] font-semibold">{n.y}</div>
                <div className="text-lg font-semibold mt-1">{n.t}</div>
                <div className="text-white/70 text-sm mt-1">{n.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== Values as Spotlight ============================== */}
      <section className="py-20 bg-black/20" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">What We Stand For</h2>
            <p className="text-white/70">Security, trust, and relentless innovation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard icon={Shield} title="Security First" text="Defense-in-depth, zero-trust, continuous validation." />
            <SpotlightCard icon={Heart} title="Customer-Centric" text="Business outcomes first; configuration not complexity." />
            <SpotlightCard icon={Lightbulb} title="Inventive" text="ML that explains itself; tooling analysts love." />
            <SpotlightCard icon={Award} title="Excellence" text="Reliability SLOs, tight feedback loops, measured impact." />
          </div>
        </div>
      </section>

      {/* ============================== Product Pillars ============================== */}
      <section className="py-20" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Platform Pillars</h2>
            <p className="text-white/70">Everything you need to detect, decide, and deter — fast.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { i:Cpu, t:"Models", d:"Behavior & device signals with drift safeguards." },
              { i:Workflow, t:"Decisioning", d:"Rules + ML, explainable & analyst-friendly." },
              { i:Boxes, t:"Integrations", d:"SDKs, webhooks, and 1-click sinks to SIEMs." },
              { i:LineChart, t:"Observability", d:"Dashboards, alerts, & outcome tracking." },
            ].map((x, idx)=>(
              <div key={idx} className={`${glass} rounded-2xl p-6 hover:bg-white/10 transition group`}>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-4">
                  <x.i className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-semibold">{x.t}</div>
                <div className="text-white/70 text-sm mt-2">{x.d}</div>
                <div className="mt-4 flex gap-2">
                  <Chip>Step-up</Chip><Chip>Reason codes</Chip><Chip>Review queue</Chip>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== API Highlight (Interactive) ============================== */}
      <section id="api" className="py-20 bg-black/20" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">API-first, built for developers</h2>
              <p className="text-white/70">Send us an event; get a decision & reason codes within milliseconds.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge icon={BarChart3} text="Reason codes" />
                <Badge icon={Eye} text="Explainable" />
                <Badge icon={Server} text="mTLS" />
              </div>
              <div className="mt-6 flex gap-3">
                <PrimaryButton label="Get a demo" onClick={()=>useNavigate()("/demo")} />
                <GhostButton label="View docs" icon={ArrowUpRight} onClick={()=>useNavigate()("/api")} />
              </div>
            </div>
            <APIPlayground />
          </div>
        </div>
      </section>

      {/* ============================== Team Snapshot ============================== */}
      <section className="py-20" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Leadership & Culture</h2>
            <p className="text-white/70">Experienced fintech, security, and ML folks who love long-term thinking.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n:"CEO & Founder", r:"Strategy & partnerships", i:Building2 },
              { n:"CTO", r:"ML & platform", i:Cpu },
              { n:"Head of Security", r:"Risk & compliance", i:Shield },
              { n:"Head of Customer", r:"Success & solutions", i:MessageSquare },
            ].map((p, i)=>(
              <LeaderCard key={i} icon={p.i} name={p.n} role={p.r} />
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <CultureCard icon={Compass} title="Clear principles" text="We optimize for trust, velocity, and measurable outcomes." />
            <CultureCard icon={Star} title="High standards" text="Quality over noise; ship with tests & telemetry." />
            <CultureCard icon={Heart} title="Kind & direct" text="We debate ideas, assume good intent, and care deeply." />
          </div>
        </div>
      </section>

      {/* ============================== Impact Metrics ============================== */}
      <section className="py-20 bg-black/20" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-[#35E0FF]"><CountUp to={10000} suffix="+"/></div>
              <div className="text-white/70">Fraud rings disrupted</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#35E0FF]">$<CountUp to={500} suffix="M+"/></div>
              <div className="text-white/70">Losses prevented</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#35E0FF]"><CountUp to={99} suffix=".99%"/></div>
              <div className="text-white/70">Uptime SLO</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#35E0FF]"><CountUp to={100} suffix="+"/></div>
              <div className="text-white/70">Enterprise customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="py-24" data-reveal>
        <div className="mx-10 max-w-none text-center">
          <div className={`${glass} rounded-3xl p-10`}>
            <Calendar className="h-12 w-12 text-[#35E0FF] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to outsmart fraud?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Book a live demo to see how our API, explainability, and analyst tools fit your stack.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <PrimaryButton label="Book a demo" onClick={()=>navigate("/demo")} />
              <GhostButton label="See customer wins" icon={ArrowUpRight} onClick={()=>window.open("#","_blank")} />
            </div>
          </div>
        </div>
      </section>

      {/* Back to top */}
      {createPortal(
        <button
          aria-label="Back to top"
          onClick={()=>window.scrollTo({ top:0, behavior:"smooth" })}
          className={`fixed right-4 bottom-4 z-[9996] rounded-full p-3 ${glass} hover:bg-white/10 transition ${showTop?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>,
        document.body
      )}

      <StyleInjections />
    </div>
  );
};

/* ============================== API Playground ============================== */
function APIPlayground(){
  const card = useRef<HTMLDivElement>(null);
  useTilt(card, 6);

  const [hovered, setHovered] = useState(false);

  const sampleReq = `POST /v1/score HTTP/1.1
Host: api.fraudbuster.co
Authorization: Bearer <token>
Content-Type: application/json

{
  "event": "payment_attempt",
  "amount": 12990,
  "currency": "INR",
  "device": { "fp": "ab39...91" },
  "user": { "id": "u_4821", "email": "a@b.co" }
}`;

  const sampleRes = `200 OK
{
  "decision": "allow",
  "score": 0.87,
  "reasons": ["low_risk_profile", "consistent_device"],
  "actions": []
}`;

  return (
    <div ref={card} className={`${glass} rounded-2xl p-6`}>
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold">Scoring Request</div>
        <div className="flex gap-2">
          <Chip>JSON</Chip>
          <Chip>mTLS</Chip>
          <Chip>Sub-100ms</Chip>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <CodeBlock label="Request" code={sampleReq} />
        <CodeBlock label="Response" code={sampleRes} />
      </div>
      <div className="mt-4 flex items-center gap-3">
        <PlayButton hovered={hovered} setHovered={setHovered} />
        <span className="text-white/70 text-sm">Hover & click to simulate request flow</span>
      </div>
    </div>
  );
}

function CodeBlock({ label, code }:{ label:string; code:string }){
  const host = useRef<HTMLPreElement>(null);
  useEffect(()=>{
    const el = host.current!;
    const lines = el.querySelectorAll<HTMLElement>(".code-line");
    animate(lines, { opacity: [0,1], transform: ["translateY(4px)","translateY(0px)"], delay: stagger(12), duration: 180, easing: "easeOutCubic" });
  },[]);
  return (
    <div className="rounded-xl bg-black/50 border border-white/10 p-4 relative overflow-hidden">
      <div className="text-xs text-white/60 mb-2">{label}</div>
      <pre ref={host} className="text-xs leading-5 whitespace-pre-wrap text-white/85">
        {code.split("\n").map((l,i)=><div key={i} className="code-line opacity-0">{l}</div>)}
      </pre>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(220px 160px at 20% -10%, rgba(53,224,255,0.10), transparent 60%)" }} />
    </div>
  );
}

function PlayButton({ setHovered }:{ hovered:boolean; setHovered:(v:boolean)=>void }){
  const ref = useRef<HTMLButtonElement>(null);
  useMagnet(ref, 14);
  return (
    <button
      ref={ref}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
      onClick={()=>{
        const el = ref.current!;
        const ripple = document.createElement("span");
        ripple.className = "pointer-events-none absolute rounded-full bg-white/15";
        const r = el.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${r.width/2 - size/2}px`;
        ripple.style.top = `${r.height/2 - size/2}px`;
        el.appendChild(ripple);
        animate(ripple, { opacity: [0.35, 0], transform: ["scale(0.8)","scale(1.5)"], duration: 420, easing: "easeOutCubic" });
        setTimeout(()=>ripple.remove(), 430);
      }}
      className="relative rounded-full px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 transition inline-flex items-center gap-2"
    >
      <Sparkles className="h-4 w-4 text-[#35E0FF]" /> Simulate
    </button>
  );
}

/* ============================== Leader & Culture ============================== */
function LeaderCard({ icon: Icon, name, role }:{ icon:any; name:string; role:string }){
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 5);
  return (
    <div ref={ref} className={`${glass} rounded-2xl p-6 hover:bg-white/10 transition`}>
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className="font-semibold">{name}</div>
      <div className="text-[#35E0FF] text-sm">{role}</div>
      <div className="mt-3 text-white/70 text-sm">We mix rigor with speed and keep customers in the loop.</div>
    </div>
  );
}
function CultureCard({ icon: Icon, title, text }:{ icon:any; title:string; text:string }){
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 4);
  return (
    <div ref={ref} className={`${glass} rounded-2xl p-6 hover:bg-white/10 transition`}>
      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-white/70 text-sm mt-1">{text}</div>
    </div>
  );
}

/* ============================== Style Injections ============================== */
function StyleInjections(){
  return <style>{`
    ::selection { background: ${ACCENT}; color: #0b1220; }
    .shadow-brand { box-shadow: 0 20px 60px rgba(124,92,255,0.35); }
  `}</style>;
}

export default AboutUs;
