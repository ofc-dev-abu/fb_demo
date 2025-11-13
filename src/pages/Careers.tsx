// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { MapPin, Clock, Users, TrendingUp, Heart, Code, Shield, Briefcase, ArrowRight } from 'lucide-react';

// const Careers = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState('all');

//   const jobOpenings = [
//     {
//       id: 1,
//       title: 'Senior Software Engineer - Fraud Detection',
//       department: 'Engineering',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '4-6 years',
//       description: 'Build and enhance our AI-powered fraud detection algorithms and real-time processing systems.',
//       requirements: [
//         'Strong experience in Python, Java, or Node.js',
//         'Knowledge of machine learning and data analytics',
//         'Experience with microservices architecture',
//         'Understanding of payment systems and security'
//       ],
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Product Manager - Fintech Solutions',
//       department: 'Product',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '5-8 years',
//       description: 'Lead product strategy and roadmap for our fraud prevention solutions in the Indian market.',
//       requirements: [
//         'Experience in fintech or financial services',
//         'Strong understanding of financial regulations',
//         'Product management experience with B2B SaaS',
//         'Data-driven decision making skills'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Compliance Officer - Financial Regulations',
//       department: 'Legal & Compliance',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '6-10 years',
//       description: 'Ensure compliance with financial regulations and guidelines across all products.',
//       requirements: [
//         'Law degree with specialization in banking/finance',
//         'Deep knowledge of financial regulations',
//         'Experience in fintech compliance',
//         'Strong analytical and communication skills'
//       ]
//     },
//     {
//       id: 4,
//       title: 'DevOps Engineer - Security Infrastructure',
//       department: 'Engineering',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '3-5 years',
//       description: 'Manage and secure our cloud infrastructure with focus on data protection and compliance.',
//       requirements: [
//         'Experience with AWS/Azure cloud platforms',
//         'Knowledge of Kubernetes and Docker',
//         'Security best practices and compliance',
//         'Infrastructure as Code (Terraform, CloudFormation)'
//       ]
//     },
//     {
//       id: 5,
//       title: 'Sales Director - Enterprise Solutions',
//       department: 'Sales',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '8-12 years',
//       description: 'Drive enterprise sales for fraud prevention solutions to financial institutions and fintech companies.',
//       requirements: [
//         'Proven track record in B2B enterprise sales',
//         'Experience selling to financial institutions',
//         'Strong network in fintech ecosystem',
//         'Understanding of fraud prevention technologies'
//       ]
//     },
//     {
//       id: 6,
//       title: 'Data Scientist - ML Engineering',
//       department: 'Engineering',
//       location: 'Remote/Hybrid',
//       type: 'Full-time',
//       experience: '3-6 years',
//       description: 'Develop and optimize machine learning models for fraud detection and risk assessment.',
//       requirements: [
//         'PhD/Masters in Data Science or related field',
//         'Experience with Python, TensorFlow, PyTorch',
//         'Knowledge of fraud detection algorithms',
//         'Experience with big data technologies'
//       ]
//     }
//   ];

//   const departments = ['all', 'Engineering', 'Product', 'Sales', 'Legal & Compliance'];

//   const filteredJobs = selectedDepartment === 'all' 
//     ? jobOpenings 
//     : jobOpenings.filter(job => job.department === selectedDepartment);

//   const benefits = [
//     {
//       icon: Heart,
//       title: 'Health & Wellness',
//       description: 'Comprehensive health insurance, mental health support, and wellness programs'
//     },
//     {
//       icon: TrendingUp,
//       title: 'Career Growth',
//       description: 'Learning stipend, conference attendance, and clear career progression paths'
//     },
//     {
//       icon: Users,
//       title: 'Work-Life Balance',
//       description: 'Flexible working hours, remote work options, and generous vacation policy'
//     },
//     {
//       icon: Briefcase,
//       title: 'Competitive Package',
//       description: 'Market-leading salary, equity participation, and performance bonuses'
//     }
//   ];

//   const companyValues = [
//     {
//       title: 'Innovation First',
//       description: 'We constantly push boundaries to create cutting-edge fraud prevention solutions'
//     },
//     {
//       title: 'Security by Design',
//       description: 'Every decision prioritizes the security and privacy of our clients\' data'
//     },
//     {
//       title: 'Customer Success',
//       description: 'Our clients\' success in preventing fraud drives everything we do'
//     },
//     {
//       title: 'Regulatory Excellence',
//       description: 'We maintain the highest standards of compliance with financial regulations'
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
//               Join Our Mission
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Help us build the future of fraud prevention. Join a team of passionate 
//               professionals working to secure the global fintech ecosystem.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 View Open Positions
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Learn About Our Culture
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Company Values */}
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
//               Our Values
//             </h2>
//             <p className="text-xl text-gray-300">
//               The principles that guide our work and culture
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {companyValues.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
//               >
//                 <h3 className="text-lg font-semibold text-cyan-400 mb-3">{value.title}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits */}
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
//               Why Work With Us
//             </h2>
//             <p className="text-xl text-gray-300">
//               Comprehensive benefits and a culture that supports your growth
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                   <benefit.icon className="h-8 w-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
//                 <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Job Openings */}
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
//               Open Positions
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Join our growing team and help shape the future of fintech security
//             </p>

//             {/* Department Filter */}
//             <div className="flex flex-wrap justify-center gap-4">
//               {departments.map((dept) => (
//                 <button
//                   key={dept}
//                   onClick={() => setSelectedDepartment(dept)}
//                   className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
//                     selectedDepartment === dept
//                       ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
//                       : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
//                   }`}
//                 >
//                   {dept === 'all' ? 'All Departments' : dept}
//                 </button>
//               ))}
//             </div>
//           </motion.div>

//           <div className="space-y-6">
//             {filteredJobs.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${
//                   job.featured ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/10'
//                 }`}
//               >
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                   <div className="flex-grow">
//                     <div className="flex items-center mb-4">
//                       {job.featured && (
//                         <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
//                           Featured
//                         </span>
//                       )}
//                       <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm">
//                         {job.department}
//                       </span>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
//                     <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    
//                     <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         {job.location}
//                       </div>
//                       <div className="flex items-center">
//                         <Clock className="h-4 w-4 mr-1" />
//                         {job.type}
//                       </div>
//                       <div className="flex items-center">
//                         <Briefcase className="h-4 w-4 mr-1" />
//                         {job.experience}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
//                       <ul className="space-y-2">
//                         {job.requirements.map((req, idx) => (
//                           <li key={idx} className="flex items-start text-gray-300">
//                             <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                             {req}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <div className="lg:ml-8 flex-shrink-0">
//                     <button className="w-full lg:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
//                       Apply Now
//                       <ArrowRight className="ml-2 h-5 w-5" />
//                     </button>
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
//               Don't See the Right Role?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               We're always looking for talented individuals who share our passion for technology and security. 
//               Send us your resume and let's explore opportunities together.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Send Your Resume
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Learn More About Us
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Careers;





//<-----------------------------Design changed ------------------------------------------------------------------------------------------------------------------->








//<-----------------------------Design changed ------------------------------------------------------------------------------------------------------------------->

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MapPin, Clock, Users, TrendingUp, Heart, Code, Shield, Briefcase, ArrowRight, Search,
  Filter, CheckCircle, Building2, Crown, Star, Target, Cpu, Database, Lock, Zap, Activity, BookOpen, Mail
} from "lucide-react";
import { animate, stagger } from "animejs";
import { Link } from "react-router-dom";

/* =========================================================
   Shared utilities & effects (consistent with Home/Blog)
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
    const onMove = (e: MouseEvent) => { dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
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

/* Spotlight card with ripple (21st.dev style) */
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

/* Intersection reveal */
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

/* Tilt wrapper */
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
   Apply Drawer (Animated)
   ========================================================= */
type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  featured?: boolean;
};

function ApplyDrawer({ job, onClose }: { job: Job; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ from: 0, to: 1 }], duration: 160, ease: "out(3)" });
    if (panelRef.current) animate(panelRef.current, { translateY: [{ from: 24, to: 0 }], opacity: [{ from: 0, to: 1 }], duration: 240, ease: "out(3)" });
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => {
    if (panelRef.current) animate(panelRef.current, { translateY: [{ to: 24 }], opacity: [{ to: 0 }], duration: 180, ease: "out(3)" });
    if (overlayRef.current) animate(overlayRef.current, { opacity: [{ to: 0 }], duration: 120 });
    setTimeout(onClose, 200);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation pulse
    if (!name.trim() || !email.trim()) {
      if (formRef.current) animate(formRef.current, { translateX: [{ to: -6 }, { to: 6 }, { to: 0 }], duration: 260, ease: "out(3)" });
      return;
    }
    if (progressRef.current) animate(progressRef.current, { scaleX: [{ from: 0, to: 1 }], duration: 650, ease: "out(3)" });
    // Reset after a small delay (fake success)
    setTimeout(() => {
      setName(""); setEmail(""); setNote("");
      close();
    }, 720);
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <div ref={overlayRef} className="absolute inset-0 bg-black/60" onClick={close} />
      <div className="absolute inset-x-0 bottom-0 md:inset-y-0 md:right-0 md:left-auto md:w-[680px]">
        <div ref={panelRef} className={`${glass} md:rounded-l-3xl rounded-t-3xl h-full overflow-hidden bg-[#0b0b12]/80`}>
          <div className="relative h-[3px] bg-white/10">
            <div ref={progressRef} className="origin-left h-full bg-gradient-to-r from-[#35E0FF] via-[#6C63FF] to-[#4AF2C6] scale-x-0" />
          </div>

          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] grid place-items-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-[#35E0FF] font-semibold">{job.department} · {job.type}</div>
                <div className="font-semibold">{job.title}</div>
              </div>
            </div>
            <button className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20" onClick={close}>Close</button>
          </div>

          <div className="px-5 pb-5 text-white/75 text-sm">
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#35E0FF]" /> {job.location}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-[#35E0FF]" /> {job.experience}</span>
            </div>
          </div>

          <form ref={formRef} onSubmit={submit} className="p-5 grid gap-4">
            <div className={`${glass} rounded-xl p-4`}>
              <label className="text-sm text-white/70">Full Name</label>
              <input
                value={name} onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full bg-transparent outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div className={`${glass} rounded-xl p-4`}>
              <label className="text-sm text-white/70">Email</label>
              <input
                value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full bg-transparent outline-none"
                placeholder="jane@company.com" type="email"
              />
            </div>
            <div className={`${glass} rounded-xl p-4`}>
              <label className="text-sm text-white/70">Note (optional)</label>
              <textarea
                value={note} onChange={(e) => setNote(e.target.value)}
                className="mt-1 w-full bg-transparent outline-none resize-none" rows={4}
                placeholder="Anything you'd like us to know about your background."
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              <SpotlightCard>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-[#35E0FF]" /> Data kept private
                </div>
              </SpotlightCard>
              <SpotlightCard>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-[#35E0FF]" /> Quick response SLA
                </div>
              </SpotlightCard>
            </div>

            <button className="mt-3 rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Page Component
   ========================================================= */
const Careers: React.FC = () => {
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

  /* Parallax BG */
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallax = useMemo(
    () => ({ transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.01}px, ${(mouse.y - window.innerHeight / 2) * 0.01}px, 0)` }),
    [mouse.x, mouse.y]
  );

  /* Jobs & filters */
  const departments = ["All", "Engineering", "Product", "Sales", "Legal & Compliance"] as const;
  type Dept = typeof departments[number];
  const [selectedDepartment, setSelectedDepartment] = useState<Dept>("All");
  const [q, setQ] = useState("");

  const jobOpenings: Job[] = [
    {
      id: 1,
      title: "Senior Software Engineer — Fraud Detection",
      department: "Engineering",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "4-6 years",
      description: "Own high-throughput services that power deterministic KYC/KYB + behavioral signals. Ship fast, safe, explainable.",
      requirements: [
        "Strong experience in TypeScript/Node.js or Python",
        "Streaming & microservices (Kafka/NATS, gRPC/REST)",
        "Performance profiling & low-latency patterns",
        "Security mindset; least-privilege by default"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Product Manager — Risk & Decisions",
      department: "Product",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "5-8 years",
      description: "Define explainable decisioning with webhooks, thresholds, and evidence trails that auditors love.",
      requirements: [
        "B2B SaaS experience in fintech or payments",
        "Comfort with SLAs, policy engines, and RBAC",
        "Writes crisp PRDs & runs great discovery",
        "Metrics-first; ships instrumented changes"
      ]
    },
    {
      id: 3,
      title: "Compliance Officer — Financial Regulations",
      department: "Legal & Compliance",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "6-10 years",
      description: "Own alignment with Indian KYC/KYB, data residency, and audit readiness across products.",
      requirements: [
        "Deep knowledge of Indian payments & data rules",
        "Hands-on with audits, evidence, and SOPs",
        "Partner with product/infra; pragmatic & precise",
        "Clear writing; calm in incident reviews"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer — Security Infrastructure",
      department: "Engineering",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description: "Harden cloud boundaries, build golden paths, and keep latency rock-solid at scale.",
      requirements: [
        "AWS/Azure, Kubernetes, IaC (Terraform/CDK)",
        "Secrets, KMS, and boundary hardening",
        "Observability: metrics, traces, budgets",
        "Blue/green & zero-downtime releases"
      ]
    },
    {
      id: 5,
      title: "Sales Director — Enterprise",
      department: "Sales",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "8-12 years",
      description: "Sell trust. Help banks, wallets, and lenders deploy explainable fraud defenses.",
      requirements: [
        "B2B enterprise sales to financial institutions",
        "Deep network across fintech ecosystem",
        "Understands fraud/Risk conversations",
        "Forecasting discipline; coachable & candid"
      ]
    },
    {
      id: 6,
      title: "Data Scientist — ML Engineering",
      department: "Engineering",
      location: "Remote/Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      description: "Design features that lift precision without hurting conversion; ship models with guardrails.",
      requirements: [
        "Python, TensorFlow/PyTorch; feature pipelines",
        "Fraud detection, imbalanced learning, AUC/PR",
        "Model explainability & shadow deployments",
        "Partner with infra for fast feedback loops"
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(j => {
    const deptOk = selectedDepartment === "All" || j.department === selectedDepartment;
    const qOk = !q.trim() || [j.title, j.department, j.description, ...j.requirements].join(" ").toLowerCase().includes(q.toLowerCase());
    return deptOk && qOk;
  });

  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>(".job-card");
    if (!items || !items.length) return;
    animate(items, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 12, to: 0 }], delay: stagger(50), duration: 340, ease: "out(3)" });
  }, [selectedDepartment, q, filteredJobs.length]);

  const cta1Ref = useRef<HTMLAnchorElement>(null);
  const cta2Ref = useRef<HTMLAnchorElement>(null);
  useMagnet(cta1Ref, 20);
  useMagnet(cta2Ref, 16);

  const [openJob, setOpenJob] = useState<Job | null>(null);

  /* card pulse */
  const onPulse = (el: HTMLElement) => {
    animate(el, {
      scale: [{ to: 1.03 }, { to: 1 }],
      boxShadow: [
        { to: "0 0 0 0 rgba(53,224,255,0)" },
        { to: "0 0 0 14px rgba(53,224,255,0.18)" },
        { to: "0 0 0 0 rgba(53,224,255,0)" }
      ],
      duration: 460, ease: "out(3)"
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
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-extrabold leading-[1.1]">Join Our Mission</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75" data-reveal>
            Build the trust layer for India’s fintech ecosystem. Ship explainable, compliant, sub-second decisions that stop fraud without blocking users.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3" data-reveal>
            <a
              ref={cta1Ref}
              href="#openings"
              className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
            >
              View Open Positions
            </a>
            <a
              ref={cta2Ref}
              href="#culture"
              className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
            >
              Learn About Our Culture
            </a>
          </div>
        </section>

        {/* VALUES — orbit chips */}
        <section id="culture" className="py-16" data-reveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
            <p className="text-white/75 mt-2">Principles that shape product, process, and people.</p>
          </div>
          <div className="relative px-10 max-w-none h-[360px]">
            <div className="absolute inset-0 grid place-items-center">
              <div className={`${glass} rounded-full px-4 py-2 text-sm`}>Security by Design</div>
            </div>
            {[1,2,3].map((ringIdx) => (
              <div
                key={ringIdx}
                className="absolute rounded-full border-2 border-dotted border-white/20"
                style={{
                  width: `${14 + (ringIdx*6)}rem`,
                  height: `${14 + (ringIdx*6)}rem`,
                  left: "50%", top: "50%", transform: "translate(-50%,-50%)",
                  animation: `spin ${18 + ringIdx*6}s linear infinite`
                }}
              />
            ))}
            {[
              { icon: Shield, label: "Explainable Decisions" },
              { icon: Lock, label: "Least-Privilege Access" },
              { icon: Database, label: "Evidence Trails" },
              { icon: Cpu, label: "Deterministic Rails" },
              { icon: Zap, label: "Sub-second SLAs" },
              { icon: Target, label: "Precision > Volume" },
              { icon: BookOpen, label: "Audit Ready" },
              { icon: Crown, label: "Customer Success" },
            ].map((it, i) => {
              const angle = (i / 8) * 2 * Math.PI;
              const r = 140;
              const x = 50 + (r * Math.cos(angle)) / 3.2;
              const y = 50 + (r * Math.sin(angle)) / 3.2;
              return (
                <div
                  key={it.label}
                  className={`absolute ${glass} rounded-xl px-3 py-1.5 text-xs flex items-center gap-1 will-change-transform`}
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)" }}
                  onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.1 }], duration: 120 })}
                  onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 150 })}
                >
                  <it.icon className="h-3.5 w-3.5" />
                  <span>{it.label}</span>
                </div>
              );
            })}
            <style>{`@keyframes spin{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}`}</style>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-16">
          <div className="text-center mb-10" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Why Work With Us</h2>
            <p className="text-white/75 mt-2">Benefits that back great work and balanced lives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health cover, mental wellness, and family benefits." },
              { icon: TrendingUp, title: "Career Growth", desc: "Learning stipend, conferences, and clear progression ladders." },
              { icon: Users, title: "Work-Life Balance", desc: "Flexible hours, remote-friendly, generous time-off." },
              { icon: Briefcase, title: "Competitive Package", desc: "Market-leading salary, equity participation, bonuses." },
            ].map((b, i) => (
              <SpotlightCard key={b.title}>
                <div className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF]">
                    <b.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-xl font-semibold">{b.title}</div>
                  <div className="mt-2 text-white/75">{b.desc}</div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* CULTURE TIMELINE */}
        <section className="py-16" data-reveal>
          <div className={`${glass} rounded-3xl p-8`}>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "Build with Guardrails", text: "Golden paths, reproducible envs, and fast CI. Security is paved, not bolted on." },
                { icon: Star, title: "Quality is Simplicity", text: "Fewer moving parts. Clear ownership. Observable results." },
                { icon: Building2, title: "Bias for Action", text: "Short RFCs, small PRs, safe deploys. Iterate with evidence." },
              ].map((s, i) => (
                <TiltCard key={s.title} className={`${glass} rounded-2xl p-6`}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF] mb-4">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-semibold">{s.title}</div>
                  <div className="text-white/75 mt-2">{s.text}</div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* OPENINGS */}
        <section id="openings" className="py-16">
          <div className="text-center mb-10" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Open Positions</h2>
            <p className="text-white/75 mt-2">Join a team shipping real impact for customers and regulators alike.</p>
          </div>

          {/* Filters */}
          <div className={`${glass} rounded-2xl p-5 mb-8`} data-reveal>
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <div className={`${glass} rounded-full px-3 py-1.5 inline-flex items-center gap-2 text-white/70`}>
                  <Filter className="h-4 w-4" /> Filter by department
                </div>
                {departments.map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDepartment(d)}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                      selectedDepartment === d ? "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] text-black" : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              <div className={`${glass} rounded-full px-3 py-1.5 flex items-center gap-2`}>
                <Search className="h-4 w-4 text-[#35E0FF]" />
                <input
                  value={q} onChange={(e) => setQ(e.target.value)}
                  className="bg-transparent outline-none placeholder-white/40 w-48"
                  placeholder="Search roles, skills…"
                />
              </div>
            </div>
          </div>

          {/* Jobs grid */}
          <div ref={gridRef} className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className={`${glass} job-card rounded-2xl p-6`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {job.featured && (
                        <span className="rounded-full bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-3 py-1 text-sm font-semibold text-black">
                          Featured
                        </span>
                      )}
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <p className="mt-2 text-white/80">{job.description}</p>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-[#35E0FF]" /> {job.location}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4 text-[#35E0FF]" /> {job.type}</span>
                      <span className="inline-flex items-center gap-1"><Briefcase className="h-4 w-4 text-[#35E0FF]" /> {job.experience}</span>
                    </div>

                    <div className="mt-5">
                      <div className="text-white font-semibold mb-2">Key Requirements</div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {job.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80">
                            <CheckCircle className="h-4 w-4 text-[#35E0FF] mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:ml-6 w-full lg:w-auto">
                    <TiltCard className="w-full lg:w-auto" onClick={(el) => onPulse(el)}>
                      <button
                        onClick={() => setOpenJob(job)}
                        className="w-full rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
                      >
                        Apply Now <ArrowRight className="inline ml-2 h-5 w-5" />
                      </button>
                    </TiltCard>
                  </div>
                </div>
              </div>
            ))}

            {filteredJobs.length === 0 && (
              <div className={`${glass} rounded-2xl p-8 text-center text-white/80`}>
                No roles match your filters. Try a different department or search term.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24" data-reveal>
          <div className={`${glass} rounded-3xl p-10 bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-3xl font-bold">Don’t see the perfect role?</h3>
                <p className="text-white/75 mt-2">
                  We’re always meeting exceptional people. Share your profile — we’ll reach out when there’s a fit.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="#openings" className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition">
                  Explore Roles
                </a>
                <Link to="/contact" className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition">
                  Send Your Resume
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {openJob && <ApplyDrawer job={openJob} onClose={() => setOpenJob(null)} />}
    </div>
  );
};

export default Careers;
