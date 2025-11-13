// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Create mailto link with form data
//     const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
//     const body = encodeURIComponent(
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Company: ${formData.company || 'Not provided'}\n\n` +
//       `Message:\n${formData.message}`
//     );
    
//     const mailtoLink = `mailto:info@fraudbuster.co.in?subject=${subject}&body=${body}`;
    
//     // Open email client
//     window.location.href = mailtoLink;
    
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       company: '',
//       message: ''
//     });
    
//     // Show success message (you could add a toast notification here)
//     alert('Thank you for your message! Your email client will open to send the message.');
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Office Location',
//       details: ['Technology Hub', 'Innovation Center, Floor 12', 'Global Operations Center']
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: ['Contact via email for phone support']
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       details: ['info@fraudbuster.co.in']
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       details: ['Monday - Friday: 9:00 AM - 7:00 PM IST', 'Saturday: 10:00 AM - 4:00 PM IST', 'Sunday: Closed']
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
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Get In Touch
//             </h1>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Ready to secure your business? Contact our team of experts to discuss your fraud prevention needs.
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//                 <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
//                       placeholder="Your Company"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows={6}
//                       required
//                       value={formData.message}
//                       onChange={handleChange}
//                       className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
//                       placeholder="Tell us about your fraud prevention needs..."
//                     />
//                   </div>

//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
//                   >
//                     Send Message
//                     <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                   </motion.button>
//                 </form>
//               </div>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="space-y-8"
//             >
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={info.title}
//                   whileHover={{ scale: 1.02, rotateY: 5 }}
//                   className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//                   style={{ transformStyle: 'preserve-3d' }}
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
//                       <info.icon className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
//                       {info.details.map((detail, idx) => (
//                         <p key={idx} className="text-gray-300">
//                           {detail}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
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
//               Fintech Security Insights
//             </h2>
//             <p className="text-xl text-gray-300">
//               Real-time fraud prevention statistics and industry trends
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Real-time Stats */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h3 className="text-2xl font-bold text-white mb-6">Live Fraud Prevention Stats</h3>
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
//                   <div>
//                     <div className="text-2xl font-bold text-green-400">₹2.3 Cr</div>
//                     <div className="text-gray-300">Fraud Blocked Today</div>
//                   </div>
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
//                   <div>
//                     <div className="text-2xl font-bold text-cyan-400">45,892</div>
//                     <div className="text-gray-300">Transactions Processed</div>
//                   </div>
//                   <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
//                   <div>
//                     <div className="text-2xl font-bold text-purple-400">99.7%</div>
//                     <div className="text-gray-300">Detection Accuracy</div>
//                   </div>
//                   <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
//                   <div>
//                     <div className="text-2xl font-bold text-orange-400">23ms</div>
//                     <div className="text-gray-300">Avg Response Time</div>
//                   </div>
//                   <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Industry Trends */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
//             >
//               <h3 className="text-2xl font-bold text-white mb-6">Fintech Security Trends</h3>
//               <div className="space-y-6">
//                 <div className="border-l-4 border-cyan-500 pl-4">
//                   <h4 className="text-lg font-semibold text-cyan-400 mb-2">Digital Payment Growth</h4>
//                   <p className="text-gray-300 text-sm">UPI transactions increased by 76% in 2024, making fraud prevention more critical than ever.</p>
//                 </div>
                
//                 <div className="border-l-4 border-green-500 pl-4">
//                   <h4 className="text-lg font-semibold text-green-400 mb-2">AI-Powered Detection</h4>
//                   <p className="text-gray-300 text-sm">Machine learning models now detect 95% of fraud attempts within milliseconds of transaction initiation.</p>
//                 </div>
                
//                 <div className="border-l-4 border-purple-500 pl-4">
//                   <h4 className="text-lg font-semibold text-purple-400 mb-2">Regulatory Compliance</h4>
//                   <p className="text-gray-300 text-sm">New guidelines require real-time fraud monitoring and automated reporting for all financial institutions.</p>
//                 </div>
                
//                 <div className="border-l-4 border-orange-500 pl-4">
//                   <h4 className="text-lg font-semibold text-orange-400 mb-2">Synthetic Identity Fraud</h4>
//                   <p className="text-gray-300 text-sm">Advanced biometric verification reduces synthetic identity fraud by 89% in digital lending platforms.</p>
//                 </div>
//               </div>
              
//               <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-sm text-gray-400">Market Impact</div>
//                     <div className="text-lg font-bold text-white">₹500+ Cr Fraud Prevented</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-sm text-gray-400">This Year</div>
//                     <div className="text-lg font-bold text-cyan-400">2024</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
          
//           {/* Interactive CTA */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
//           >
//             <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Fintech Operations?</h3>
//             <p className="text-gray-300 mb-6">Join leading financial institutions using FraudBuster to prevent fraud and ensure compliance.</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Request Demo
//               </button>
//               <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 View Case Studies
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;










//<-------------------------------------------------------------------------------------------------------------------









//<-------------------------------------------------------------------------------------------------------------------

/* src/pages/Contact.tsx
   Hyper-interactive Contact page (v2)
   - Motion One (@motionone/dom): animate, stagger (animejs-style API without default import)
   - Top load bar, precise cursor particles, magnetic buttons, spotlight/tilt cards
   - NEW: Scrollytelling “How your message flows” pipeline (sticky graphic + stepper)
   - NEW: Live Email Simulation (typewriter + mail queue → triage → SLA → calendar)
   - Smooth scroll reveals, hover parallax, morphing blob, back-to-top
   - “Book a demo” buttons navigate to /demo
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { animate } from "animejs";
import {
  Send, MapPin, Phone, Mail, Clock, Shield, MessageSquare, Sparkles, ArrowUpRight,
  Building2, Globe, CheckCircle2, ArrowUp, Calendar, User, Briefcase, FileText, Zap,
  Inbox, Workflow, TimerReset, CalendarClock, MailCheck, ChevronRight
} from "lucide-react";

/* ============================== Design Tokens ============================== */
const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
const ACCENT = "#35E0FF";

/* ============================== Small Utils ============================== */
const clamp = (v:number,min:number,max:number)=>Math.max(min,Math.min(max,v));
const useReducedMotion = ()=>{
  const [pref, setPref] = useState(false);
  useEffect(()=>{
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const sync = ()=> setPref(!!mq?.matches);
    sync(); mq?.addEventListener?.("change", sync);
    return ()=> mq?.removeEventListener?.("change", sync);
  },[]);
  return pref;
};

/* ============================== Scroll Progress ============================== */
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

/* ============================== Cursor Particles (precise) ============================== */
function CursorParticles({ paused=false }:{ paused?:boolean }){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  useEffect(()=>{ pausedRef.current = paused; }, [paused]);

  useEffect(()=>{
    const dot = dotRef.current!;
    const move = (e: MouseEvent)=>{
      if(!pausedRef.current) dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
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
        style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
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
        animate(e.target as Element, { opacity: [0,1], transform: ["translateY(18px)","translateY(0px)"], duration:420, easing:"easeOutCubic" });
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

/* ============================== Micro UI ============================== */
function Pill({ icon: Icon, label }:{ icon:any; label:string }){
  return (
    <span className="rounded-xl border border-white/15 px-3 py-1.5 text-sm inline-flex items-center gap-2">
      <Icon className="h-4 w-4" /> {label}
    </span>
  );
}
function PrimaryButton({ label, icon: Icon, onClick, className="" }:{ label:string; icon?:any; onClick?:()=>void; className?:string }){
  const ref = useRef<HTMLButtonElement>(null);
  useMagnet(ref, 14);
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-[#7C5CFF]/90 text-white font-semibold shadow-[0_12px_40px_rgba(124,92,255,0.35)] px-6 py-3 overflow-hidden ${className}`}
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

/* ============================== Contact Page ============================== */
const Contact: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  useReveals("[data-reveal]", reduced);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // bg parallax
  const [mouse, setMouse] = useState({ x:0, y:0 });
  useEffect(()=>{ const m=(e:MouseEvent)=>setMouse({x:e.clientX,y:e.clientY}); window.addEventListener("mousemove", m); return ()=>window.removeEventListener("mousemove", m); },[]);
  const parallax = useMemo(()=>({ transform:`translate3d(${(mouse.x - innerWidth/2)*0.01}px, ${(mouse.y - innerHeight/2)*0.01}px, 0)` }), [mouse.x, mouse.y]);

  // back-to-top
  const [showTop, setShowTop] = useState(false);
  useEffect(()=>{ const s=()=>setShowTop(scrollY>600); s(); window.addEventListener("scroll", s, { passive:true }); return ()=>window.removeEventListener("scroll", s); },[]);

  // morph hero blob
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
    const spin:any = animate(el, { transform: ["rotate(0deg) scale(1)","rotate(360deg) scale(1.04)"], duration:12000, easing:"linear", repeat: Infinity });
    return ()=>{ if(spin && typeof spin.cancel==="function") spin.cancel(); };
  },[]);

  /* ======= Accordion data ======= */
  // Note: Form functionality is handled by FormBlock component below
  // Unused for now - may be used for FAQ section later
  // @ts-ignore - unused for now but may be used later  
  const _faqs = [
    {
      q: "How quickly can we get a live demo?",
      a: "Same day in most cases. We’ll show scoring, reason codes, step-up actions, and dashboards using sample or redacted data."
    },
    {
      q: "Do you support regional data residency?",
      a: "Yes. We support region pinning and data residency policies with strict network boundaries and audit evidence."
    },
    {
      q: "How does integration work?",
      a: "Drop-in REST APIs, webhooks, and SDKs. Start with a single event type and expand. We include a staging sandbox."
    },
    {
      q: "Can analysts review and override decisions?",
      a: "Yes. Review queue, evidence bundling, notes, and override outcomes feed back into model training."
    },
  ];

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

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

      {/* ============================== Hero ============================== */}
      <section className="relative overflow-hidden">
        <div className="mx-10 max-w-none py-18 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12 items-center">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`} data-reveal>
                <Sparkles className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-semibold">Let’s talk security & outcomes</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight" data-reveal>
                Contact the FraudBuster Team
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl" data-reveal>
                Tell us your risk goals. We’ll map an integration plan and show how our API stops fraud in <b>&lt;100ms</b> with explainable decisions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3" data-reveal>
                <Pill icon={Globe} label="Global-ready · Residency choices" />
                <Pill icon={Shield} label="Zero-trust controls" />
                <Pill icon={Zap} label="Real-time scoring" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <PrimaryButton label="Book a demo" icon={ArrowUpRight} onClick={()=>navigate("/demo")} />
                <GhostButton label="View docs" icon={ArrowUpRight} onClick={()=>navigate("/api")} />
              </div>
            </div>

            {/* Visual */}
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
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Explainable outcomes</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Step-up actions</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Audit evidence</li>
                </ul>
                <div className="absolute right-4 bottom-4 text-xs text-white/70 inline-flex items-center gap-2">
                  <Building2 className="h-3.5 w-3.5" /> Fintech scale
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <MiniStat icon={User} label="Security reviews" value="Included" />
                <MiniStat icon={FileText} label="Policy mapping" value="Yes" />
                <MiniStat icon={Calendar} label="Onboarding" value="2–4w" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== Contact Blocks ============================== */}
      <section className="py-10" data-reveal>
        <div className="mx-10 max-w-none">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard icon={MapPin} title="Office" text={["Technology Hub","Innovation Center, Floor 12","Global Operations Center"]} />
            <SpotlightCard icon={Mail} title="Email" text={["info@fraudbuster.co.in"]} />
            <SpotlightCard icon={Phone} title="Phone" text={["Contact via email for phone support"]} />
            <SpotlightCard icon={Clock} title="Hours" text={["Mon–Fri: 9:00–19:00 IST","Sat: 10:00–16:00 IST","Sun: Closed"]} />
          </div>
        </div>
      </section>

      {/* ============================== Live Email Simulation ============================== */}
      <Simulation />

      {/* ============================== Form + Social Proof ============================== */}
      <section className="py-16 bg-black/20" data-reveal>
        <div className="mx-10 max-w-none grid lg:grid-cols-[1.1fr,0.9fr] gap-14">
          {/* Form */}
          <div className={`${glass} rounded-2xl p-8`}>
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-6 w-6 text-[#35E0FF]" />
              <h2 className="text-2xl font-bold">Send us a message</h2>
            </div>
            <FormBlock onDemo={()=>navigate("/demo")} />
          </div>

          {/* Proof / Insights */}
          <div className="space-y-6">
            <div className={`${glass} rounded-2xl p-6`}>
              <h3 className="text-lg font-semibold mb-3">Live impact snapshot</h3>
              <div className="space-y-4">
                <LiveStat color="emerald" value="₹2.8 Cr" label="Fraud blocked today" />
                <LiveStat color="cyan" value="52,104" label="Transactions processed" />
                <LiveStat color="violet" value="99.7%" label="Detection accuracy" />
                <LiveStat color="orange" value="23ms" label="Avg response time" />
              </div>
            </div>
            <div className={`${glass} rounded-2xl p-6`}>
              <h3 className="text-lg font-semibold mb-3">Why teams choose us</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Explainable decisions & reason codes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> SOC2-style controls & zero-trust patterns</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Sub-100ms scoring with auto-failover</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== Pipeline Scrollytelling ============================== */}
      <HowItFlows />

      {/* ============================== CTA ============================== */}
      <section className="py-20 bg-black/20" data-reveal>
        <div className="mx-10 max-w-none text-center">
          <div className={`${glass} rounded-3xl p-10`}>
            <Calendar className="h-12 w-12 text-[#35E0FF] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to outsmart fraud?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Book a live session—see our API, explainability, and analyst tools fit your stack.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <PrimaryButton label="Schedule live demo" icon={ArrowUpRight} onClick={()=>navigate("/demo")} />
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

/* ============================== Subcomponents ============================== */

function MiniStat({ icon:Icon, label, value }:{ icon:any; label:string; value:string }){
  return (
    <div className="rounded-xl bg-white/[0.06] p-4 border border-white/10 flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <div className="text-xs text-white/70">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

function SpotlightCard({ icon:Icon, title, text }:{ icon:any; title:string; text:string[] }){
  const holder = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  useTilt(card, 6);

  useEffect(()=>{
    const el = holder.current!;
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
      ref={holder}
      className={`${glass} relative rounded-2xl p-6 overflow-hidden`}
      style={{ backgroundImage: "radial-gradient(240px 240px at var(--mx,50%) var(--my,50%), rgba(53,224,255,0.15), transparent 70%)" }}
    >
      <div ref={card} className="relative z-10">
        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center mb-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-xl font-semibold">{title}</div>
        <ul className="mt-2 text-white/75 text-sm space-y-1">
          {text.map((t,i)=><li key={i}>{t}</li>)}
        </ul>
      </div>
    </div>
  );
}

function LiveStat({ color, value, label }:{ color:"emerald"|"cyan"|"violet"|"orange"; value:string; label:string }){
  const colorMap:any = {
    emerald: { from:"from-green-500/20", to:"to-emerald-500/20", border:"border-green-500/30", text:"text-emerald-400", dot:"bg-emerald-400" },
    cyan: { from:"from-cyan-500/20", to:"to-blue-500/20", border:"border-cyan-500/30", text:"text-cyan-400", dot:"bg-cyan-400" },
    violet: { from:"from-purple-500/20", to:"to-pink-500/20", border:"border-purple-500/30", text:"text-purple-400", dot:"bg-purple-400" },
    orange: { from:"from-orange-500/20", to:"to-red-500/20", border:"border-orange-500/30", text:"text-orange-400", dot:"bg-orange-400" },
  };
  const c = colorMap[color];
  return (
    <div className={`flex items-center justify-between p-4 bg-gradient-to-r ${c.from} ${c.to} rounded-lg border ${c.border}`}>
      <div>
        <div className={`text-2xl font-bold ${c.text}`}>{value}</div>
        <div className="text-gray-300">{label}</div>
      </div>
      <div className={`w-3 h-3 ${c.dot} rounded-full animate-pulse`} />
    </div>
  );
}

/* ===== Floating inputs ===== */
function FloatingInput(
  { id, label, value, onChange, icon:Icon, type="text", required=false }:
  { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLInputElement>; icon:any; type?:string; required?:boolean; }
){
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
        <Icon className="h-4 w-4" />
      </div>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        type={type}
        required={required}
        className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200
          ${ (focus || value) ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : "" }`}
      >
        {label}
      </label>
    </div>
  );
}
function FloatingTextarea(
  { id, label, value, onChange, required=false }:
  { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLTextAreaElement>; required?:boolean; }
){
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={()=>setFocus(true)}
        onBlur={()=>setFocus(false)}
        rows={6}
        required={required}
        className="w-full px-3 pt-5 pb-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-3 text-white/50 transition-all duration-200
          ${ (focus || value) ? "top-1 text-xs bg-black/60 px-1 rounded" : "" }`}
      >
        {label}
      </label>
    </div>
  );
}

function FormBlock({ onDemo }:{ onDemo: ()=>void }){
  const [formData, setFormData] = useState({ name:"", email:"", company:"", message:"" });
  const [sending, setSending] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setFormData(s=>({ ...s, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Contact: ${formData.name || "Website"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "—"}\n\nMessage:\n${formData.message}`
    );
    const mailto = `mailto:info@fraudbuster.co.in?subject=${subject}&body=${body}`;
    const btn = document.getElementById("send-btn");
    if(btn){
      const ripple = document.createElement("span");
      ripple.className = "pointer-events-none absolute rounded-full bg-white/15";
      const r = btn.getBoundingClientRect(); const size = Math.max(r.width, r.height);
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${r.width/2 - size/2}px`;
      ripple.style.top = `${r.height/2 - size/2}px`;
      btn.appendChild(ripple);
      animate(ripple, { opacity:[0.35,0], transform:["scale(0.8)","scale(1.5)"], duration:420, easing:"easeOutCubic" });
      setTimeout(()=>ripple.remove(), 420);
    }
    window.location.href = mailto;
    setTimeout(()=>{ setSending(false); setFormData({ name:"", email:"", company:"", message:"" }); }, 200);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <FloatingInput id="name" label="Full Name *" icon={User} value={formData.name} onChange={onChange} required />
        <FloatingInput id="email" label="Email Address *" type="email" icon={Mail} value={formData.email} onChange={onChange} required />
      </div>
      <FloatingInput id="company" label="Company" icon={Briefcase} value={formData.company} onChange={onChange} />
      <FloatingTextarea id="message" label="Message *" value={formData.message} onChange={onChange} required />

      <div className="flex flex-wrap items-center gap-3">
        <button
          id="send-btn"
          type="submit"
          disabled={sending}
          className="relative group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center gap-2 transition disabled:opacity-70"
        >
          {sending ? "Opening email…" : "Send Message"} <Send className="h-5 w-5 group-hover:translate-x-1 transition" />
        </button>
        <GhostButton label="Book a demo" icon={ArrowUpRight} onClick={onDemo} />
      </div>
    </form>
  );
}

/* ===== Accordion (height animation via measure) ===== */
// @ts-ignore - unused for now but may be used later
function _Accordion({ question, answer }:{ question:string; answer:string }){
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const el = bodyRef.current; if(!el) return;
    if(open){
      const h = el.scrollHeight;
      el.style.height = "0px";
      el.style.opacity = "0";
      requestAnimationFrame(()=>{
        el.style.height = `${h}px`;
        animate(el, { opacity:[0,1], duration:220, easing:"easeOutCubic" });
        setTimeout(()=>{
          el.style.height = "auto";
        }, 220);
      });
    }else{
      const h = el.scrollHeight;
      el.style.height = `${h}px`;
      requestAnimationFrame(()=>{
        el.style.height = "0px";
        animate(el, { opacity:[1,0], duration:180, easing:"easeOutCubic" });
      });
    }
  },[open]);

  return (
    <div className={`${glass} rounded-xl overflow-hidden`}>
      <button
        onClick={()=>setOpen(o=>!o)}
        className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-white/5 transition"
      >
        <span className="font-medium">{question}</span>
        <span className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden">
        <div className="px-5 pb-5 text-white/80 text-sm">{answer}</div>
      </div>
    </div>
  );
}

/* ============================== Live Email Simulation ============================== */
function Simulation(){
  const simRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const phases = [
    { icon: Inbox, title: "Your message lands in our secure inbox", sub: "We parse intent and auto-acknowledge in seconds." },
    { icon: Workflow, title: "Smart triage routes to the right squad", sub: "Risk/Compliance, Product, or Integrations." },
    { icon: TimerReset, title: "SLA timer starts", sub: "Severity-based response targets kick in (P1–P3)." },
    { icon: CalendarClock, title: "Calendar slot proposed", sub: "Auto-timezones & invite with agenda." },
    { icon: MailCheck, title: "You get the plan", sub: "Outcomes, next steps, and a live demo link." },
  ];

  // sticky progress + highlight on scroll
  useEffect(()=>{
    const holder = simRef.current!;
    const steps = Array.from(holder.querySelectorAll<HTMLElement>("[data-step]"));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const idx = Number((e.target as HTMLElement).dataset.step || "0");
          setPhase(idx);
          animate(e.target as Element, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"], duration:360, easing:"easeOutCubic" });
        }
      });
    }, { threshold: 0.4 });
    steps.forEach(s=> io.observe(s));
    return ()=> io.disconnect();
  },[]);

  // animate screen whenever phase changes
  useEffect(()=>{
    const scr = screenRef.current!;
    scr.innerHTML = ""; // reset
    const card = document.createElement("div");
    card.className = `${glass} rounded-xl p-4 border-white/10`;
    const header = document.createElement("div");
    header.className = "flex items-center gap-2 mb-2";
    header.innerHTML = `<div class="h-2.5 w-2.5 rounded-full bg-[#35E0FF]"></div><div class="h-2.5 w-2.5 rounded-full bg-[#6C63FF]"></div><div class="h-2.5 w-2.5 rounded-full bg-[#4AF2C6]"></div>`;
    const title = document.createElement("div");
    title.className = "font-semibold";
    title.textContent = phases[phase].title;
    const sub = document.createElement("div");
    sub.className = "text-white/70 text-sm";
    sub.textContent = phases[phase].sub;

    card.appendChild(header);
    card.appendChild(title);
    card.appendChild(sub);
    scr.appendChild(card);

    animate(card, { opacity:[0,1], transform:["translateY(12px)","translateY(0)"], duration:300, easing:"easeOutCubic" });

    // draw flow line progress
    const bar = document.createElement("div");
    bar.className = "mt-3 h-1 rounded-full bg-white/10 overflow-hidden";
    const fill = document.createElement("div");
    fill.className = `h-full ${GRADIENT}`;
    fill.style.width = "0%";
    bar.appendChild(fill); card.appendChild(bar);
    animate(fill, { width: ["0%","100%"], duration: 900, easing: "easeInOutCubic" });

  },[phase]);

  return (
    <section className="py-20" data-reveal>
      <div className="mx-10 max-w-none grid lg:grid-cols-[0.9fr,1.1fr] gap-12">
        {/* Stepper */}
        <div ref={simRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How your contact becomes action</h2>
          {phases.map((p, i)=>(
            <div key={i} data-step={i} className={`${glass} rounded-2xl p-5 flex items-start gap-4`}>
              <div className={`h-11 w-11 rounded-xl grid place-items-center ${i===phase ? "bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]" : "bg-white/10"}`}>
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold flex items-center gap-2">{p.title} {i===phase && <span className="text-xs text-[#35E0FF]">LIVE</span>}</div>
                <div className="text-white/70 text-sm">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky screen */}
        <div className="lg:sticky lg:top-24">
          <div className={`${glass} rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white/70">Simulation screen</span>
              <span className="text-xs text-white/50 inline-flex items-center gap-1">Scroll steps <ChevronRight className="h-3 w-3" /></span>
            </div>
            <div ref={screenRef} className="h-[260px] rounded-xl bg-black/30 border border-white/10 p-4 overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== Pipeline Scrollytelling (sticky graphic) ============================== */
function HowItFlows(){
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(()=>{
    const svg = svgRef.current!;
    const path = svg.querySelector<SVGPathElement>("#flow-path")!;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    const onScroll = ()=>{
      const section = svg.closest("section")!;
      const r = section.getBoundingClientRect();
      const vis = clamp(1 - (r.top + r.height*0.2)/ (r.height + innerHeight*0.6), 0, 1);
      const off = len * (1 - vis);
      path.style.strokeDashoffset = `${off}`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive:true });
    window.addEventListener("resize", onScroll);
    return ()=>{ window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  },[]);

  const items = [
    { icon: Inbox, title: "Inbox", text: "Your request enters our secure queue." },
    { icon: Workflow, title: "Routing", text: "Auto-triage to the right squad." },
    { icon: TimerReset, title: "SLA", text: "P1–P3 timers commit response speed." },
    { icon: CalendarClock, title: "Scheduling", text: "You get slots in your timezone." },
  ];

  return (
    <section className="py-24" data-reveal>
      <div className="mx-10 max-w-none grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The journey from “Send” to “Solved”</h2>
          <p className="text-white/70 mb-6">Scroll to see the flow line animate. Every stage adds context and speeds resolution.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i)=>(
              <div key={i} className={`${glass} rounded-2xl p-5`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center"><it.icon className="h-5 w-5" /></div>
                  <div className="font-semibold">{it.title}</div>
                </div>
                <div className="text-white/70 text-sm">{it.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${glass} rounded-2xl p-6`}>
          <svg ref={svgRef} viewBox="0 0 600 360" className="w-full h-[320px]">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6C63FF"/>
                <stop offset="50%" stopColor="#35E0FF"/>
                <stop offset="100%" stopColor="#4AF2C6"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path id="flow-path" d="M40 300 C 160 260, 160 120, 300 120 S 440 260, 560 220"
              fill="none" stroke="url(#grad)" strokeWidth="6" filter="url(#glow)"/>
            {/* nodes */}
            <circle cx="40" cy="300" r="8" fill="#6C63FF"/>
            <circle cx="300" cy="120" r="8" fill="#35E0FF"/>
            <circle cx="560" cy="220" r="8" fill="#4AF2C6"/>
          </svg>
          <div className="text-xs text-white/60 text-center">Scroll to draw the path →</div>
        </div>
      </div>
    </section>
  );
}

/* ============================== Styles ============================== */
function StyleInjections(){
  return <style>{`
    ::selection { background: ${ACCENT}; color: #0b1220; }
    .shadow-brand { box-shadow: 0 20px 60px rgba(124,92,255,0.35); }
  `}</style>;
}

export default Contact;
