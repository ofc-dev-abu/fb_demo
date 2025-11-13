// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Brain, Eye, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';

// const Product = () => {
//   const features = [
//     {
//       icon: Brain,
//       title: 'AI-Powered Detection',
//       description: 'Advanced machine learning algorithms that continuously learn and adapt to new fraud patterns',
//       details: ['Real-time pattern recognition', 'Behavioral analysis', 'Adaptive learning systems']
//     },
//     {
//       icon: Eye,
//       title: 'Real-time Monitoring',
//       description: 'Continuous surveillance of all transactions with instant alerts and automated responses',
//       details: ['24/7 monitoring', 'Instant notifications', 'Automated blocking']
//     },
//     {
//       icon: BarChart3,
//       title: 'Advanced Analytics',
//       description: 'Comprehensive reporting and insights to understand fraud trends and optimize prevention',
//       details: ['Detailed dashboards', 'Trend analysis', 'Custom reporting']
//     },
//     {
//       icon: Clock,
//       title: 'Millisecond Response',
//       description: 'Lightning-fast processing ensures legitimate transactions flow smoothly',
//       details: ['Sub-second processing', 'High availability', 'Scalable infrastructure']
//     }
//   ];

//   const benefits = [
//     'Reduce fraud losses by up to 95%',
//     'Improve customer experience with faster processing',
//     'Comprehensive API integration',
//     'Real-time dashboard monitoring',
//     'Advanced machine learning algorithms',
//     '24/7 expert support team'
//   ];

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative py-24">
//         <div className="mx-10 max-w-none">
//           <div className="text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mb-8"
//             >
//               <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
//                 <Shield className="h-10 w-10 text-white" />
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
//                 FraudBuster
//               </h1>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//                 Our flagship fraud detection platform that combines cutting-edge AI technology
//                 with real-time processing to eliminate fraudulent activities before they impact your business.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
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
//               Powerful Features
//             </h2>
//             <p className="text-xl text-gray-300">
//               Everything you need to protect your business from fraud
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={feature.title}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02, rotateY: 5 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//                 style={{ transformStyle: 'preserve-3d' }}
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
//                       <feature.icon className="h-6 w-6 text-white" />
//                     </div>
//                   </div>
//                   <div className="flex-grow">
//                     <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
//                     <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
//                     <ul className="space-y-2">
//                       {feature.details.map((detail, idx) => (
//                         <li key={idx} className="flex items-center text-gray-300">
//                           <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24">
//         <div className="mx-10 max-w-none">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                 Why Industry Leaders Choose FraudBuster
//               </h2>
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 Our proven track record speaks for itself. Join the growing number of businesses
//                 that have eliminated fraud and improved their bottom line.
//               </p>
              
//               <div className="space-y-4">
//                 {benefits.map((benefit, index) => (
//                   <motion.div
//                     key={benefit}
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-center"
//                   >
//                     <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" />
//                     <span className="text-gray-300">{benefit}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="relative"
//             >
//               <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 transform hover:rotate-2 transition-transform duration-500">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
//                     <div className="text-gray-300">Fraud Reduction</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;100ms</div>
//                     <div className="text-gray-300">Response Time</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
//                     <div className="text-gray-300">Uptime</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
//                     <div className="text-gray-300">Support</div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Product;







//<------------------------------New Deisgn---------------------------------------------------------------------






//<------------------------------New Deisgn---------------------------------------------------------------------

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import {
//   Shield, ShieldCheck, Brain, Eye, BarChart3, Clock, Users, CheckCircle,
//   Activity, Server, Lock, Database, FileCheck, Globe as GlobeIcon,
//   Fingerprint as FingerIcon, Landmark, CreditCard, Smartphone,
//   IndianRupee, Sparkles
// } from "lucide-react";
// import { animate, stagger, createTimeline, random } from "animejs";
// import { Link } from "react-router-dom";

// /* ============================== Utilities ============================== */
// const useReducedMotion = () => {
//   const [reduced, set] = useState(false);
//   useEffect(() => {
//     const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
//     const onChange = () => set(!!mq?.matches);
//     onChange();
//     mq?.addEventListener?.("change", onChange);
//     return () => mq?.removeEventListener?.("change", onChange);
//   }, []);
//   return reduced;
// };

// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

// /* ======================== Cursor particles + dot ======================= */
// function CursorParticles() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   const reduced = useReducedMotion();

//   useEffect(() => {
//     const dot = dotRef.current!;
//     const onMove = (e: MouseEvent) => {
//       dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     };
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);

//   useEffect(() => {
//     if (reduced) return;
//     const canvas = canvasRef.current!;
//     const ctx = canvas.getContext("2d")!;
//     let dpr = Math.max(1, window.devicePixelRatio || 1);

//     const resize = () => {
//       dpr = Math.max(1, window.devicePixelRatio || 1);
//       canvas.width = Math.floor(innerWidth * dpr);
//       canvas.height = Math.floor(innerHeight * dpr);
//       canvas.style.width = `${innerWidth}px`;
//       canvas.style.height = `${innerHeight}px`;
//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//       ctx.globalCompositeOperation = "lighter";
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     type P = { x: number; y: number; vx: number; vy: number; life: number };
//     const parts: P[] = [];
//     const spawn = (x: number, y: number) => {
//       for (let i = 0; i < 4; i++) {
//         const a = Math.random() * Math.PI * 2;
//         const s = Math.random() * 1.4 + 0.5;
//         parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
//       }
//     };
//     const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
//     window.addEventListener("mousemove", onMove);

//     let raf = 0;
//     const loop = () => {
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//       for (let i = parts.length - 1; i >= 0; i--) {
//         const p = parts[i];
//         p.x += p.vx; p.y += p.vy; p.life *= 0.96;
//         const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
//         g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
//         g.addColorStop(1, "rgba(124,92,255,0)");
//         ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 22, 0, Math.PI * 2); ctx.fill();
//         if (p.life < 0.05) parts.splice(i, 1);
//       }
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("resize", resize);
//     };
//   }, [reduced]);

//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-10" aria-hidden />
//       <div
//         ref={dotRef}
//         className="pointer-events-none fixed left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
//         style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
//         aria-hidden
//       />
//     </>
//   );
// }

// /* ============================ Scroll progress ========================== */
// function ScrollProgress() {
//   const ref = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = ref.current!;
//     const onScroll = () => {
//       const p = Math.min(1, (window.scrollY) / (document.body.scrollHeight - window.innerHeight));
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/10">
//       <div ref={ref} className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]" />
//     </div>
//   );
// }

// /* ============================== Magnetic hook ========================== */
// function useMagnet(ref: React.RefObject<HTMLElement>, strength = 18) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const rect = () => el.getBoundingClientRect();
//     const onMove = (e: MouseEvent) => {
//       const r = rect();
//       const cx = r.left + r.width / 2;
//       const cy = r.top + r.height / 2;
//       const dx = (e.clientX - cx) / r.width;
//       const dy = (e.clientY - cy) / r.height;
//       animate(el, { translateX: dx * strength, translateY: dy * strength, duration: 120, ease: "out(3)" });
//     };
//     const onLeave = () => animate(el, { translateX: 0, translateY: 0, duration: 200, ease: "out(4)" });
//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
//   }, [ref, strength]);
// }

// /* ================================ Tilt hook ============================ */
// function useTilt(ref: React.RefObject<HTMLElement>, max = 8) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const onMove = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect();
//       const px = (e.clientX - rect.left) / rect.width;
//       const py = (e.clientY - rect.top) / rect.height;
//       const rx = (py - 0.5) * -max;
//       const ry = (px - 0.5) * max;
//       el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
//     };
//     const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)"; };
//     el.addEventListener("mousemove", onMove);
//     el.addEventListener("mouseleave", onLeave);
//     return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
//   }, [ref, max]);
// }

// /* ============================ Intersection reveal ====================== */
// function useReveal(sectionRefs: React.RefObject<HTMLElement[]>, disabled: boolean) {
//   useEffect(() => {
//     const nodes = sectionRefs.current || [];
//     if (!nodes.length || disabled) return;
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (!e.isIntersecting) return;
//           const tgts = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
//           animate(tgts, {
//             opacity: [{ from: 0, to: 1 }],
//             translateY: [{ from: 24, to: 0 }],
//             delay: stagger(40),
//             duration: 520,
//             ease: "out(3)",
//           });
//           io.unobserve(e.target);
//         });
//       },
//       { threshold: 0.2 }
//     );
//     nodes.forEach((n) => io.observe(n));
//     return () => io.disconnect();
//   }, [sectionRefs, disabled]);
// }

// /* ============================== Product Page =========================== */
// const Product: React.FC = () => {
//   const reduced = useReducedMotion();

//   /* ------------ Background parallax ------------- */
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", onMove);
//     return () => window.removeEventListener("mousemove", onMove);
//   }, []);
//   const parallax = useMemo(
//     () => ({
//       transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.01}px, ${(mouse.y - window.innerHeight / 2) * 0.01}px, 0)`,
//     }),
//     [mouse.x, mouse.y]
//   );

//   /* ------------- Headline split + reveal -------------- */
//   const headlineRef = useRef<HTMLHeadingElement>(null);
//   useEffect(() => {
//     const el = headlineRef.current;
//     if (!el || reduced) return;
//     const text = el.textContent || "";
//     el.innerHTML = text
//       .split("")
//       .map((c) => `<span class="char inline-block will-change-transform">${c === " " ? "&nbsp;" : c}</span>`)
//       .join("");
//     const nodes = el.querySelectorAll<HTMLElement>(".char");
//     animate(nodes, {
//       translateY: [{ from: 30, to: 0 }],
//       opacity: [{ from: 0, to: 1 }],
//       delay: stagger(16),
//       ease: "spring(1, 90, 12, 0)",
//       duration: 760
//     });
//   }, [reduced]);

//   /* ---------------- Live Signals in Hero --------------- */
//   const [live, setLive] = useState({ checks: 23180, blocked: 42, latency: 440, uptime: 99.98 });
//   useEffect(() => {
//     if (reduced) return;
//     const id = setInterval(() => {
//       setLive((s) => ({
//         checks: s.checks + Math.floor(Math.random() * 55),
//         blocked: s.blocked + (Math.random() > 0.88 ? 1 : 0),
//         latency: Math.max(320, Math.min(520, s.latency + Math.floor(random(-10, 10, 0)))),
//         uptime: 99.98
//       }));
//     }, 1100);
//     return () => clearInterval(id);
//   }, [reduced]);

//   /* ----------------- CTA magnetics --------------------- */
//   const ctaDocsRef = useRef<HTMLAnchorElement>(null);
//   const ctaDemoRef = useRef<HTMLAnchorElement>(null);
//   useMagnet(ctaDocsRef, 20);
//   useMagnet(ctaDemoRef, 16);

//   /* ----------------- Scanner sweep --------------------- */
//   const sweepRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (reduced || !sweepRef.current) return;
//     animate(sweepRef.current, {
//       rotate: [{ from: 0, to: 360 }],
//       duration: 2600,
//       loop: true,
//       ease: "linear",
//     });
//   }, [reduced]);

//   /* ----------------- Sticky pipeline ------------------- */
//   const pipeRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (reduced || !pipeRef.current) return;
//     const line = pipeRef.current.querySelector<HTMLElement>(".vline");
//     if (!line) return;
//     line.style.height = "0px";
//     const tl = createTimeline();
//     tl.add(line as unknown as Element, {
//       height: { from: 0, to: 320 },
//       duration: 800,
//       ease: "out(3)",
//     });
//   }, [reduced]);

//   /* ----------------- Tabs (capabilities) ---------------- */
//   const [tab, setTab] = useState<"kyc" | "payments" | "compliance">("kyc");
//   const tabBodyRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const el = tabBodyRef.current;
//     if (!el) return;
//     animate(el, {
//       opacity: [{ from: 0, to: 1 }],
//       translateY: [{ from: 10, to: 0 }],
//       duration: 260,
//       ease: "out(3)",
//     });
//   }, [tab]);

//   /* ----------------- Typing API block ------------------- */
//   const [typed, setTyped] = useState("");
//   useEffect(() => {
//     const code =
// `POST /v1/kyc/checks
// {
//   "pan": "ABCDE1234F",
//   "aadhaar": "XXXX-XXXX-XXXX",
//   "bank": { "account": "1234567890", "ifsc": "HDFC0001234" },
//   "vpa": "user@upi"
// }
// // → 200 OK
// // { "score": 0.12, "flags": ["velocity.low","gst.match"], "decision": "allow" }`;
//     let i = 0;
//     const id = setInterval(() => {
//       setTyped(code.slice(0, i += 2));
//       if (i >= code.length) clearInterval(id);
//     }, 12);
//     return () => clearInterval(id);
//   }, []);

//   /* ----------------- Reveal IO across sections ---------- */
//   const sectionsRef = useRef<HTMLElement[]>([]);
//   useReveal(sectionsRef, reduced);

//   /* ----------------- Data (copy & icon config) ---------- */
//   const featureCards = [
//     {
//       icon: Brain,
//       title: "Adaptive Fraud AI",
//       desc: "Deterministic checks fused with ML heuristics for explainable risk.",
//       bullets: ["Pattern & behavioral models", "Velocity & device signals", "Auto-calibrated thresholds"],
//       gradient: "from-[#6C63FF] to-[#35E0FF]",
//     },
//     {
//       icon: Eye,
//       title: "Real-time Monitoring",
//       desc: "Continuous evaluation with webhook push and live evidence.",
//       bullets: ["24/7 streams", "Instant notifications", "Automated actions"],
//       gradient: "from-[#35E0FF] to-[#4AF2C6]",
//     },
//     {
//       icon: BarChart3,
//       title: "Analytics that Explain",
//       desc: "Scores you can defend — evidence, flags and narratives.",
//       bullets: ["Drill-down dashboards", "Export to BI", "Segment & A/B policies"],
//       gradient: "from-[#4AF2C6] to-[#6C63FF]",
//     },
//     {
//       icon: Clock,
//       title: "Sub-second Decisions",
//       desc: "Enterprise throughput without friction to your users.",
//       bullets: ["~450ms typical", "Autoscaling POPs", "99.9%+ historical uptime"],
//       gradient: "from-[#E9B949] to-[#7C5CFF]",
//     },
//   ];

//   const capabilities = {
//     kyc: {
//       icon: FingerIcon,
//       title: "KYC & Identity",
//       points: [
//         "PAN, Aadhaar, Face match",
//         "Bank + IFSC verification",
//         "Proofing with evidence trails"
//       ],
//     },
//     payments: {
//       icon: IndianRupee,
//       title: "Payments & UPI",
//       points: [
//         "VPA name check & risk",
//         "Velocity & anomaly guard",
//         "Chargeback pattern flags"
//       ],
//     },
//     compliance: {
//       icon: GlobeIcon,
//       title: "Compliance & KYB",
//       points: [
//         "GSTIN validity & filings",
//         "Audit-grade logs & RBAC",
//         "Data residency options"
//       ],
//     },
//   } as const;

//   /* ----------------- Card hover helpers ----------------- */
//   const pulse = (el: HTMLElement) => {
//     animate(el, {
//       scale: [{ to: 1.03 }, { to: 1 }],
//       boxShadow: [
//         { to: "0 0 0 0 rgba(53,224,255,0)" },
//         { to: "0 0 0 14px rgba(53,224,255,0.18)" },
//         { to: "0 0 0 0 rgba(53,224,255,0)" }
//       ],
//       duration: 420,
//       ease: "out(3)",
//     });
//   };

//   /* ----------------------------- Render ------------------------------ */
//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />

//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div
//           className="absolute inset-0 opacity-[0.12]"
//           style={{
//             backgroundImage:
//               "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
//             backgroundSize: "42px 42px",
//             ...parallax,
//           }}
//         />
//         <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
//       </div>

//       {/* ============================== HERO ============================== */}
//       <section className="relative overflow-hidden min-h-[88vh] flex items-center">
//         <div className="relative mx-10 w-full max-w-none py-20">
//           <div className="grid lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
//                 <Sparkles className="h-4 w-4 text-[#35E0FF] mr-2" />
//                 <span className="text-[#35E0FF] text-sm font-medium">FraudBuster Platform · KYC · KYB · UPI</span>
//               </div>

//               <h1 ref={headlineRef} className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]">
//                 Product: FraudBuster Platform
//               </h1>

//               <p className="text-lg md:text-xl text-white/75 mt-5 max-w-xl" data-reveal>
//                 A unified risk layer for India — <strong>PAN</strong>, <strong>Aadhaar</strong>, <strong>IFSC</strong>, <strong>bank</strong>, <strong>GST</strong> & <strong>UPI</strong> —
//                 delivering <em>explainable</em> decisions in real-time.
//               </p>

//               <div className="mt-7 flex flex-wrap gap-3">
//                 <Link
//                   ref={ctaDocsRef}
//                   to="/api"
//                   className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
//                 >
//                   Read API Docs
//                 </Link>
//                 <Link
//                   ref={ctaDemoRef}
//                   to="/demo"
//                   className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
//                 >
//                   Try Live Demo
//                 </Link>
//               </div>

//               {/* Live stats */}
//               <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-6" data-reveal>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{Math.floor(live.checks/1000)/10}M+</div>
//                   <div className="text-white/60 text-sm">Checks Served</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{live.latency}ms</div>
//                   <div className="text-white/60 text-sm">Typical Latency</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{live.blocked}</div>
//                   <div className="text-white/60 text-sm">Fraud Blocked (min)</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-[#35E0FF]">{live.uptime}%</div>
//                   <div className="text-white/60 text-sm">Uptime</div>
//                 </div>
//               </div>
//             </div>

//             {/* Scanner Visual */}
//             <div className="relative">
//               <div className={`${glass} rounded-3xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}>
//                 <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#4AF2C6] to-[#35E0FF] text-black px-4 py-1.5 rounded-full text-xs font-semibold">
//                   Scanner & Signals
//                 </div>

//                 <div className="relative h-[360px] grid place-items-center">
//                   <div className="relative h-[300px] w-[300px] rounded-full border border-white/10">
//                     <div className="absolute inset-6 rounded-full border border-white/10" />
//                     <div className="absolute inset-14 rounded-full border border-white/10" />
//                     <div className="absolute inset-24 rounded-full border border-white/10" />
//                     <div ref={sweepRef} className="absolute left-1/2 top-1/2 h-1/2 w-[2px] origin-top -translate-x-1/2 -translate-y-full bg-gradient-to-b from-[#35E0FF] to-transparent" />
//                     {/* chips */}
//                     {[
//                       { label: "PAN", Icon: CreditCard },
//                       { label: "Aadhaar", Icon: FingerIcon },
//                       { label: "IFSC", Icon: Landmark },
//                       { label: "GST", Icon: GlobeIcon },
//                       { label: "VPA", Icon: Smartphone },
//                       { label: "Bank", Icon: CreditCard },
//                     ].map((c, i) => (
//                       <div
//                         key={c.label}
//                         style={{
//                           position: "absolute",
//                           left: `${50 + Math.cos((i / 6) * Math.PI * 2) * 38}%`,
//                           top: `${50 + Math.sin((i / 6) * Math.PI * 2) * 38}%`,
//                           transform: "translate(-50%,-50%)",
//                         }}
//                         className={`text-xs px-2 py-1 rounded-full ${glass} flex items-center gap-1`}
//                         onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.08 }], duration: 120 })}
//                         onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 150 })}
//                       >
//                         <c.Icon className="h-3.5 w-3.5" />
//                         {c.label}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 mt-6">
//                   <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
//                     <span className="flex items-center gap-2"><Activity className="h-5 w-5" /> Threat</span>
//                     <span className="text-[#4AF2C6] font-semibold">LOW</span>
//                   </div>
//                   <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
//                     <span className="flex items-center gap-2"><Server className="h-5 w-5" /> Status</span>
//                     <span className="text-[#4AF2C6] font-semibold">ONLINE</span>
//                   </div>
//                   <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
//                     <span className="flex items-center gap-2"><Database className="h-5 w-5" /> Checks/min</span>
//                     <span className="text-[#35E0FF] font-semibold">{Math.floor(live.checks/60)}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Compliance chips */}
//           <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Shield className="h-4 w-4" /> SOC 2 pathways</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><FileCheck className="h-4 w-4" /> KYC/KYB ready</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Lock className="h-4 w-4" /> AES-256</span>
//             <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><GlobeIcon className="h-4 w-4" /> Data residency</span>
//           </div>
//         </div>
//       </section>

//       {/* ========================== FEATURE CARDS ========================== */}
//       <section
//         className="py-24"
//         ref={(el) => el && (sectionsRef.current[0] = el)}
//       >
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Platform Features</h2>
//             <p className="text-lg text-white/70" data-reveal>Everything you need to stop fraud — without stopping good users.</p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {featureCards.map((f) => {
//               const ref = useRef<HTMLDivElement>(null);
//               useTilt(ref, 8);
//               return (
//                 <div
//                   key={f.title}
//                   ref={ref}
//                   className={`relative ${glass} rounded-2xl p-7 will-change-transform`}
//                   data-reveal
//                   onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.02 }], duration: 160 })}
//                   onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 180 })}
//                   onClick={(e) => pulse(e.currentTarget as HTMLElement)}
//                 >
//                   <div className={`absolute -top-4 -right-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${f.gradient}`}>
//                     <f.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold">{f.title}</h3>
//                   <p className="text-white/70 mt-2">{f.desc}</p>
//                   <ul className="mt-5 space-y-2">
//                     {f.bullets.map((b) => (
//                       <li key={b} className="flex items-center gap-2">
//                         <CheckCircle className="h-5 w-5 text-[#35E0FF]" />
//                         <span>{b}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ===================== HOW IT WORKS (PIPELINE) ===================== */}
//       <section
//         className="py-24 bg-white/[0.04]"
//         ref={(el) => el && (sectionsRef.current[1] = el)}
//       >
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>How the Platform Works</h2>
//             <p className="text-lg text-white/70" data-reveal>From capture → validation → decision → audit.</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             <div className="lg:sticky lg:top-24 h-fit">
//               <div ref={pipeRef} className="relative pl-6">
//                 <div className="absolute left-3 top-4 bottom-4 w-[2px] bg-white/10 rounded-full overflow-hidden">
//                   <div className="vline w-full bg-gradient-to-b from-[#35E0FF] to-[#6C63FF]" style={{ height: 0 }} />
//                 </div>
//                 {[
//                   { title: "Capture & Consent", desc: "Collect PAN/Aadhaar, GSTIN, bank + IFSC with explicit user consent." },
//                   { title: "Validate & Enrich", desc: "Deterministic checks, filings & bank verification; behavioral enrichment." },
//                   { title: "Score & Decide", desc: "Explainable scores, flags & thresholds; webhooks to your stack." },
//                   { title: "Audit & Analyze", desc: "Evidence trails, RBAC, export to BI; compliance-grade logs." },
//                 ].map((s, i) => (
//                   <div key={s.title} className={`mb-5 ${glass} p-5 rounded-xl`} data-reveal style={{ position: "relative" }}>
//                     <div className="absolute left-[-2.5rem] top-5 h-3 w-3 rounded-full bg-[#35E0FF]" />
//                     <div className="text-sm text-[#35E0FF] font-semibold mb-1">{i + 1}.</div>
//                     <div className="font-semibold">{s.title}</div>
//                     <div className="text-white/70">{s.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className={`${glass} rounded-3xl p-7`}>
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     { label: "PAN", Icon: CreditCard },
//                     { label: "Aadhaar", Icon: FingerIcon },
//                     { label: "GSTIN", Icon: GlobeIcon },
//                     { label: "Bank", Icon: CreditCard },
//                     { label: "IFSC", Icon: Landmark },
//                     { label: "VPA", Icon: Smartphone },
//                   ].map((c) => (
//                     <span
//                       key={c.label}
//                       className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-sm"
//                       onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.08 }], duration: 120 })}
//                       onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 150 })}
//                     >
//                       <c.Icon className="h-4 w-4" />
//                       {c.label}
//                     </span>
//                   ))}
//                 </div>

//                 <pre className="mt-6 rounded-xl bg-black/40 p-4 text-[12.5px] leading-relaxed overflow-x-auto border border-white/10">
// {typed}
//                 </pre>
//               </div>
//               <p className="mt-4 text-white/60 text-sm" data-reveal>
//                 SDKs & REST APIs with sandbox. Move fast, stay compliant.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===================== CAPABILITIES TABS ===================== */}
//       <section
//         className="py-24"
//         ref={(el) => el && (sectionsRef.current[2] = el)}
//       >
//         <div className="mx-10 max-w-none">
//           <div className="text-center mb-14">
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Tailored Capabilities</h2>
//             <p className="text-lg text-white/70" data-reveal>Pick your lens — KYC, Payments, or Compliance.</p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {(["kyc", "payments", "compliance"] as const).map((k) => {
//               const active = tab === k;
//               return (
//                 <button
//                   key={k}
//                   type="button"
//                   onClick={(e) => {
//                     setTab(k);
//                     pulse(e.currentTarget as HTMLElement);
//                   }}
//                   className={`px-4 py-2 rounded-xl border ${active ? "bg-white/10 border-[#35E0FF]/60" : "bg-white/[0.04] border-white/10 hover:bg-white/10"}`}
//                 >
//                   {k.toUpperCase()}
//                 </button>
//               );
//             })}
//           </div>

//           <div ref={tabBodyRef} className={`${glass} rounded-3xl p-8`}>
//             {(() => {
//               const data = capabilities[tab];
//               const Icon = data.icon;
//               return (
//                 <div className="grid md:grid-cols-3 gap-8">
//                   <div className="md:col-span-2">
//                     <h3 className="text-2xl font-bold flex items-center gap-2">
//                       <Icon className="h-6 w-6 text-[#35E0FF]" /> {data.title}
//                     </h3>
//                     <ul className="mt-4 grid sm:grid-cols-2 gap-3">
//                       {data.points.map((p) => (
//                         <li key={p} className="flex items-center gap-2 rounded-xl bg-white/[0.05] px-3 py-2" data-reveal>
//                           <CheckCircle className="h-5 w-5 text-[#35E0FF]" />
//                           <span>{p}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="md:col-span-1">
//                     <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
//                       <div className="text-sm text-white/70">Policy preview</div>
//                       <pre className="mt-2 text-[12.5px] leading-relaxed">
// {`rules:
//   velocity:
//     window: 5m
//     threshold: 8
//   score:
//     allow_below: 0.2
//     review_below: 0.6`}
//                       </pre>
//                       <div className="mt-3 text-xs text-white/50">Edit in dashboard → publish via webhook.</div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })()}
//           </div>
//         </div>
//       </section>

//       {/* =============================== CTA =============================== */}
//       <section
//         className="py-24"
//         ref={(el) => el && (sectionsRef.current[3] = el)}
//       >
//         <div className="mx-10 max-w-none text-center">
//           <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15`}>
//             <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Ship a trustworthy user journey</h2>
//             <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
//               Go live in hours with sandbox, SDKs, and guided integration.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
//               >
//                 Talk to Sales
//               </Link>
//               <Link
//                 to="/demo"
//                 className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
//               >
//                 Try the Live Demo
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Local styles */}
//       <style>{`
//         @keyframes orbitspin {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to   { transform: translate(-50%, -50%) rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Product;




//<------------------------New Deisgn ---------------------------------------------------------------------------------------







//<------------------------New Deisgn ---------------------------------------------------------------------------------------


import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles, Shield, ShieldCheck, Brain, Eye, BarChart3, Clock,
  Users, CheckCircle, Activity, Server, Lock, Database, FileCheck,
  Globe as GlobeIcon, Fingerprint as FingerIcon, Landmark, CreditCard,
  Smartphone, IndianRupee, BadgeCheck
} from "lucide-react";
import { animate, stagger, createTimeline, random } from "animejs";
import { Link } from "react-router-dom";

/* ---------- Utilities ---------- */
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

/* ---------- Cursor particles + dot ---------- */
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

/* ---------- Scroll progress ---------- */
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

/* ---------- Magnet micro-interaction ---------- */
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

/* ============================== Product ============================== */
const Product: React.FC = () => {
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Background parallax */
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

  /* Hero micro-anim */
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!heroRef.current || reduced) return;
    const tl = createTimeline();
    const items = heroRef.current.querySelectorAll<HTMLElement>(".cmd-item");
    const cursor = heroRef.current.querySelector<HTMLElement>(".cmd-cursor");
    tl.add(items as unknown as Element[], {
      opacity: [{ from: 0, to: 1 }],
      translateY: [{ from: 8, to: 0 }],
      delay: stagger(70),
      duration: 380,
      ease: "out(3)",
    });
    if (cursor) {
      tl.add(cursor as unknown as Element, { opacity: [{ from: 0, to: 1 }], duration: 200, ease: "out(3)" }, "-=200");
      animate(cursor, { translateX: [{ from: 0, to: 18 }, { to: 0 }], duration: 1200, loop: true, ease: "inOut(3)" });
    }
  }, [reduced]);

  /* Live numbers */
  const [live, setLive] = useState({ latency: 430, checks: 23540, risk: 0.12 });
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setLive((s) => ({
        latency: Math.max(320, Math.min(520, s.latency + Math.floor(random(-8, 8, 0)))),
        checks: s.checks + Math.floor(Math.random() * 50),
        risk: Math.max(0.08, Math.min(0.24, +(s.risk + (Math.random() - 0.5) * 0.02).toFixed(2))),
      }));
    }, 1100);
    return () => clearInterval(id);
  }, [reduced]);

  /* Sections intersection reveals */
  const sectionsRef = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const nodes = sectionsRef.current || [];
    if (!nodes.length || reduced) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const tgts = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
        animate(tgts, {
          opacity: [{ from: 0, to: 1 }],
          translateY: [{ from: 24, to: 0 }],
          delay: stagger(40),
          duration: 520,
          ease: "out(3)",
        });
        io.unobserve(e.target);
      });
    }, { threshold: 0.2 });
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [reduced]);

  /* Typing block */
  const [typed, setTyped] = useState("");
  useEffect(() => {
    const code =
`POST /v1/kyc/checks
{
  "pan": "ABCDE1234F",
  "aadhaar": "XXXX-XXXX-XXXX",
  "bank": { "account": "1234567890", "ifsc": "HDFC0001234" },
  "vpa": "user@upi",
  "gstin": "27ABCDE1234F1Z5"
}
// → 200 OK
// { "score": 0.12, "flags": ["velocity.low","gst.match"], "decision": "allow" }`;
    let i = 0;
    const id = setInterval(() => {
      setTyped(code.slice(0, i += 2));
      if (i >= code.length) clearInterval(id);
    }, 12);
    return () => clearInterval(id);
  }, []);

  const ctaPrimary = useRef<HTMLAnchorElement>(null);
  const ctaSecondary = useRef<HTMLAnchorElement>(null);
  useMagnet(ctaPrimary, 20);
  useMagnet(ctaSecondary, 16);

  const pulse = (el: HTMLElement) => {
    animate(el, {
      scale: [{ to: 1.03 }, { to: 1 }],
      boxShadow: [
        { to: "0 0 0 0 rgba(53,224,255,0)" },
        { to: "0 0 0 14px rgba(53,224,255,0.18)" },
        { to: "0 0 0 0 rgba(53,224,255,0)" }
      ],
      duration: 420,
      ease: "out(3)",
    });
  };

  /* ---------- Flows data ---------- */
  const flows = {
    kyc: [
      { t: "Capture & Consent", d: "PAN/Aadhaar with explicit consent" },
      { t: "Proof & Match", d: "Face/ID match, IFSC+Bank verify" },
      { t: "Decision", d: "Explainable score & flags" },
      { t: "Audit", d: "Evidence retained for disputes" },
    ],
    upi: [
      { t: "VPA Lookup", d: "Resolve VPA & ownership" },
      { t: "Velocity", d: "Rate/amount guardrails" },
      { t: "Anomaly", d: "Behavioral & device signals" },
      { t: "Automate", d: "Block/review webhooks" },
    ],
    kyb: [
      { t: "GSTIN Validate", d: "Status & filings snapshot" },
      { t: "Director Map", d: "Entities / risk linkages" },
      { t: "Score", d: "Threshold policies" },
      { t: "Comply", d: "RBAC, logs, residency" },
    ],
  };

  /* ========================= WHEEL STATE & REFS ========================= */
  const [activeChip, setActiveChip] = useState<number | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  const wheelItems = [
    { label: "PAN", Icon: BadgeCheck, desc: "PAN pattern, issuance & blacklist checks." },
    { label: "Aadhaar", Icon: FingerIcon, desc: "Aadhaar presence with match signals." },
    { label: "IFSC", Icon: Landmark, desc: "IFSC schema & bank branch verification." },
    { label: "Bank", Icon: CreditCard, desc: "Account name match & micro-verify." },
    { label: "VPA", Icon: Smartphone, desc: "UPI VPA resolution & owner signals." },
    { label: "GST", Icon: GlobeIcon, desc: "GSTIN validity and filings snapshot." },
    { label: "Velocity", Icon: Activity, desc: "Rate, repeat, device & network velocity." },
    { label: "Device", Icon: Server, desc: "Fingerprint, environment & consistency." },
  ] as const;

  const placeOnCircle = (i: number, n: number) => {
    const angle = (i / n) * Math.PI * 2;
    const x = 50 + 50 * Math.cos(angle);
    const y = 50 + 50 * Math.sin(angle);
    return { angle, x, y };
  };

  const clearActive = () => {
    setActiveChip(null);
    if (ringRef.current) ringRef.current.style.animationPlayState = "running";
    if (beamRef.current) beamRef.current.style.opacity = "0";
  };

  const focusChip = (i: number) => {
    setActiveChip(i);
    if (ringRef.current) ringRef.current.style.animationPlayState = "paused";

    const n = wheelItems.length;
    const { angle } = placeOnCircle(i, n);

    if (beamRef.current) {
      const beam = beamRef.current;
      beam.style.opacity = "1";
      beam.style.transform = `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg) scaleX(0)`;
      animate(beam, { scaleX: [{ from: 0, to: 1 }], duration: 350, ease: "out(3)" });
    }

    if (centerRef.current) {
      animate(centerRef.current, {
        scale: [{ to: 1.06 }, { to: 1 }],
        boxShadow: [
          { to: "0 0 0 0 rgba(53,224,255,0)" },
          { to: "0 0 60px 10px rgba(53,224,255,0.25)" },
          { to: "0 0 0 0 rgba(53,224,255,0)" }
        ],
        duration: 520,
        ease: "out(3)"
      });
    }

    if (rippleRef.current) {
      const r = rippleRef.current;
      r.style.opacity = "1";
      r.style.transform = "translate(-50%, -50%) scale(0.6)";
      animate(r, {
        scale: [{ from: 0.6, to: 1.2 }],
        opacity: [{ from: 0.35, to: 0 }],
        duration: 600,
        ease: "out(3)"
      });
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") clearActive(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onChipEnter = (el: HTMLElement) => {
    animate(el, {
      scale: [{ to: 1.12 }],
      boxShadow: [{ to: "0 8px 26px rgba(53,224,255,0.25)" }],
      duration: 140,
      ease: "out(3)"
    });
    const tip = el.querySelector<HTMLElement>(".chip-tip");
    if (tip) animate(tip, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 6, to: 0 }], duration: 160, ease: "out(3)" });
  };
  const onChipLeave = (el: HTMLElement) => {
    animate(el, { scale: [{ to: 1 }], boxShadow: [{ to: "0 0 0 rgba(0,0,0,0)" }], duration: 160, ease: "out(3)" });
    const tip = el.querySelector<HTMLElement>(".chip-tip");
    if (tip) animate(tip, { opacity: [{ to: 0 }], translateY: [{ to: 6 }], duration: 120, ease: "out(3)" });
  };

  /* ============================== RENDER ============================== */
  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />

      {/* Background */}
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

      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="relative mx-10 max-w-none py-16">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div>
              <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-6`}>
                <Sparkles className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Product · FraudBuster Platform</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.04]">
                KYC, UPI & KYB—<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]">one explainable risk layer</span>
              </h1>

              <p className="text-lg md:text-xl text-white/75 mt-4 max-w-2xl">
                Built for <strong>Fintech</strong>, <strong>NBFCs</strong> and <strong>Digital Banks</strong>.
                Validate identities, protect UPI, and stay audit-ready—without hurting conversion.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  ref={ctaPrimary}
                  to="/api"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Read API Docs
                </Link>
                <Link
                  ref={ctaSecondary}
                  to="/demo"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Try Sandbox
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { label: "Fintech Apps", Icon: Smartphone },
                  { label: "NBFCs", Icon: Landmark },
                  { label: "Digital Banks", Icon: ShieldCheck },
                  { label: "Marketplaces", Icon: GlobeIcon },
                ].map(({ label, Icon }) => (
                  <span
                    key={label}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${glass} text-sm`}
                    onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.06 }], duration: 120 })}
                    onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 150 })}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Command Palette */}
            <div ref={heroRef} className={`rounded-2xl ${glass} p-6`}>
              <div className="text-xs text-white/60 mb-2">Command Palette</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-3">
                {[
                  { icon: BadgeCheck, text: "Create KYC check (PAN + Aadhaar)" },
                  { icon: Smartphone, text: "Verify UPI VPA & risk signals" },
                  { icon: GlobeIcon, text: "Validate GSTIN & filings snapshot" },
                  { icon: Landmark, text: "IFSC + Bank account verification" },
                  { icon: CreditCard, text: "Merchant onboarding risk score" },
                ].map((row, i) => (
                  <div
                    key={row.text}
                    className={`cmd-item flex items-center gap-2 rounded-lg px-3 py-2 ${i === 0 ? "bg-white/[0.06] border border-white/10" : ""}`}
                    style={{ opacity: 0, transform: "translateY(8px)" }}
                  >
                    <row.icon className="h-4 w-4 text-[#35E0FF]" />
                    <span className="text-sm">{row.text}</span>
                  </div>
                ))}
                <div className="relative mt-3">
                  <div className="text-[11px] text-white/50">Tip: Start typing to search actions…</div>
                  <div className="cmd-cursor absolute left-0 top-1/2 -translate-y-1/2 h-4 w-[2px] bg-white/60 rounded-sm opacity-0" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
                  <span className="flex items-center gap-2"><Activity className="h-5 w-5" /> Latency</span>
                  <span className="text-[#35E0FF] font-semibold">{live.latency}ms</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
                  <span className="flex items-center gap-2"><Database className="h-5 w-5" /> Checks</span>
                  <span className="text-[#35E0FF] font-semibold">{live.checks.toLocaleString()}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.06] flex items-center justify-between">
                  <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Risk</span>
                  <span className="text-emerald-300 font-semibold">{Math.round(live.risk * 100)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance chips */}
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Shield className="h-4 w-4" /> SOC 2 pathways</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><FileCheck className="h-4 w-4" /> KYC/KYB ready</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Lock className="h-4 w-4" /> AES-256</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><GlobeIcon className="h-4 w-4" /> Data residency</span>
          </div>
        </div>
      </section>

      {/* ======================= FLOWS ======================= */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[0] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>How it works — three flows</h2>
            <p className="text-lg text-white/70" data-reveal>Purpose-built for Fintech, NBFCs and Banks in India.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <FlowColumn title="KYC & Identity" Icon={FingerIcon} gradient="from-[#6C63FF] to-[#35E0FF]" steps={[
              { t: "Capture & Consent", d: "PAN/Aadhaar with explicit consent" },
              { t: "Proof & Match", d: "Face/ID match, IFSC+Bank verify" },
              { t: "Decision", d: "Explainable score & flags" },
              { t: "Audit", d: "Evidence retained for disputes" },
            ]} />
            <FlowColumn title="UPI & Payments" Icon={IndianRupee} gradient="from-[#35E0FF] to-[#4AF2C6]" steps={[
              { t: "VPA Lookup", d: "Resolve VPA & ownership" },
              { t: "Velocity", d: "Rate/amount guardrails" },
              { t: "Anomaly", d: "Behavioral & device signals" },
              { t: "Automate", d: "Block/review webhooks" },
            ]} />
            <FlowColumn title="KYB & Compliance" Icon={GlobeIcon} gradient="from-[#4AF2C6] to-[#6C63FF]" steps={[
              { t: "GSTIN Validate", d: "Status & filings snapshot" },
              { t: "Director Map", d: "Entities / risk linkages" },
              { t: "Score", d: "Threshold policies" },
              { t: "Comply", d: "RBAC, logs, residency" },
            ]} />
          </div>
        </div>
      </section>

      {/* ====================== CAPABILITY WHEEL (INTERACTIVE) ====================== */}
      <section
        className="py-24"
        ref={(el) => el && (sectionsRef.current[1] = el)}
        onClick={(e) => {
          if (wheelRef.current && !wheelRef.current.contains(e.target as Node)) clearActive();
        }}
      >
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Capabilities wheel</h2>
            <p className="text-lg text-white/70" data-reveal>Hover or click a chip to inspect. (Esc to reset)</p>
          </div>

          <div ref={wheelRef} className="relative grid place-items-center">
            <div className="relative w-[34rem] h-[34rem] max-w-[90vw] max-h-[90vw]">
              {/* Rotating ring – give it z-index and pointer events */}
              <div
                ref={ringRef}
                className="absolute rounded-full border-2 border-dotted border-white/20 left-1/2 top-1/2 z-20"
                style={{
                  width: "28rem",
                  height: "28rem",
                  transform: "translate(-50%, -50%)",
                  animation: "spin 18s linear infinite",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={(e) => { if (activeChip === null) e.currentTarget.style.animationPlayState = "running"; }}
              >
                {wheelItems.map((cfg, i, arr) => {
                  const { x, y } = placeOnCircle(i, arr.length);
                  const isActive = activeChip === i;
                  return (
                    <button
                      type="button"
                      key={cfg.label}
                      className={`chip absolute ${glass} rounded-xl px-2.5 py-1.5 text-xs flex items-center gap-1 will-change-transform focus:outline-none focus:ring-2 focus:ring-[#35E0FF]`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        boxShadow: isActive ? "0 8px 28px rgba(53,224,255,0.35)" : "none",
                      }}
                      aria-pressed={isActive}
                      tabIndex={0}
                      onMouseEnter={(e) => onChipEnter(e.currentTarget)}
                      onMouseLeave={(e) => onChipLeave(e.currentTarget)}
                      onClick={(e) => { e.stopPropagation(); focusChip(i); }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); focusChip(i); }
                      }}
                    >
                      <cfg.Icon className="h-3.5 w-3.5" />
                      <span>{cfg.label}</span>
                      {/* Tooltip */}
                      <span className="chip-tip pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 whitespace-nowrap">
                        <span className="rounded-md px-2 py-1 text-[11px] bg-black/70 border border-white/10">{cfg.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* BEAM – sits under center and over ring; ignore pointer events */}
              <div
                ref={beamRef}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[2px] w-[13.5rem] origin-left bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] opacity-0 z-10"
                style={{ transform: "translate(-50%, -50%) rotate(0deg) scaleX(0)" }}
              />

              {/* Ripple at center */}
              <div
                ref={rippleRef}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[9rem] w-[9rem] rounded-full border border-[#35E0FF]/40 opacity-0 z-10"
                style={{ transform: "translate(-50%, -50%) scale(0.6)" }}
              />

              {/* Static visual rings – NO pointer events and below ring */}
              <div className="absolute inset-0 grid place-items-center pointer-events-none z-0">
                <div className="relative h-[30rem] w-[30rem] max-w-full max-h-full">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="absolute inset-16 rounded-full border border-white/10" />
                </div>
              </div>

              {/* Center node – container ignores events; the pill accepts them */}
              <div className="absolute inset-0 grid place-items-center pointer-events-none z-30">
                <div
                  ref={centerRef}
                  className={`${glass} rounded-full px-4 py-2 text-sm select-none pointer-events-auto`}
                >
                  {activeChip !== null ? `${wheelItems[activeChip].label} → Risk Engine` : "Risk Engine"}
                </div>
              </div>
            </div>

            <style>{`
              @keyframes spin {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to   { transform: translate(-50%, -50%) rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* ====================== API / SDKs ====================== */}
      <section className="py-24 bg-white/[0.04]" ref={(el) => el && (sectionsRef.current[2] = el)}>
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>SDKs & APIs</h2>
            <p className="text-lg text-white/70" data-reveal>Ship fast. Stay compliant. Explain every decision.</p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div className={`${glass} rounded-2xl p-6`} data-reveal>
              <div className="text-xs text-white/60 mb-2">Request & response (example)</div>
              <pre className="rounded-xl bg-black/40 p-4 text-[12.5px] leading-relaxed overflow-x-auto border border-white/10 min-h-[220px]">
{typed}
              </pre>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                <KeyStat icon={Clock} label="Typical latency" value="~450ms" />
                <KeyStat icon={ShieldCheck} label="Explainers" value="Flags & evidence" />
                <KeyStat icon={Lock} label="Security" value="TLS + AES-256" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Brain, title: "Adaptive models", desc: "Blend rules + ML; defendable outcomes." },
                { icon: Eye, title: "Real-time monitoring", desc: "Streams, alerts & automated actions." },
                { icon: BarChart3, title: "Analytics", desc: "Drill-downs, BI exports, policy A/B." },
              ].map((b) => (
                <div
                  key={b.title}
                  className={`p-5 rounded-2xl ${glass} flex items-start gap-3`}
                  data-reveal
                  onClick={(e) => pulse(e.currentTarget as HTMLElement)}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] grid place-items-center">
                    <b.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{b.title}</div>
                    <div className="text-white/70">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Shield className="h-4 w-4" /> SOC 2 pathways</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><FileCheck className="h-4 w-4" /> KYC/KYB ready</span>
            <span className={`${glass} rounded-full px-3 py-1 inline-flex items-center gap-2`}><Lock className="h-4 w-4" /> Scoped keys</span>
          </div>
        </div>
      </section>

      {/* =============================== CTA =============================== */}
      <section className="py-24" ref={(el) => el && (sectionsRef.current[3] = el)}>
        <div className="mx-10 max-w-none text-center">
          <div className={`rounded-3xl p-12 ${glass} bg-gradient-to-br from-[#6C63FF]/15 via-[#35E0FF]/12 to-[#6C63FF]/15 mx-10 max-w-none`}>
            <h2 className="text-3xl md:text-4xl font-bold" data-reveal>Ready to ship a trustworthy journey?</h2>
            <p className="text-lg text-white/75 mt-2 mb-7" data-reveal>
              Go live in hours with sandbox, SDKs & guided integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-2xl bg-[#7C5CFF]/90 px-7 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition"
              >
                Talk to Sales
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center rounded-2xl border border-white/15 px-7 py-3 font-semibold hover:bg-white/5 transition"
              >
                Try the Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ---------- Subcomponents ---------- */
function KeyStat({ icon: Icon, label, value }:{ icon: any; label: string; value: string; }) {
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

function FlowColumn({
  title, Icon, gradient, steps
}:{
  title: string;
  Icon: any;
  gradient: string;
  steps: { t: string; d: string }[];
}) {
  const colRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = colRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const items = el.querySelectorAll<HTMLElement>(".flow-item");
        animate(items, {
          opacity: [{ from: 0, to: 1 }],
          translateY: [{ from: 10, to: 0 }],
          delay: stagger(70),
          duration: 420,
          ease: "out(3)"
        });
        if (lineRef.current) {
          animate(lineRef.current, {
            height: [{ from: 0, to: 260 }],
            duration: 700,
            ease: "out(3)"
          });
        }
        io.unobserve(el);
      });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={colRef} className={`p-6 rounded-2xl ${glass}`}>
      <div className={`inline-flex h-12 w-12 mb-4 items-center justify-center rounded-xl bg-gradient-to-r ${gradient}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="relative mt-5 pl-5">
        <div className="absolute left-1 top-2 bottom-2 w-[2px] bg-white/10 rounded-full overflow-hidden">
          <div ref={lineRef} className="w-full bg-gradient-to-b from-[#35E0FF] to-[#6C63FF]" style={{ height: 0 }} />
        </div>

        <div className="space-y-3">
          {steps.map((s) => (
            <div
              key={s.t}
              className="flow-item opacity-0 translate-y-[10px] rounded-xl bg-white/[0.05] px-3 py-2"
              onClick={(e) => animate(e.currentTarget, { scale: [{ to: 1.04 }, { to: 1 }], duration: 260 })}
            >
              <div className="text-sm font-semibold">{s.t}</div>
              <div className="text-sm text-white/70">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;

