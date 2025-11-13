// import React from 'react';
// import { motion } from 'framer-motion';
// import { Handshake, Shield, TrendingUp, Users, CheckCircle, ArrowRight, Building, Globe } from 'lucide-react';

// const Partners = () => {
//   const partnerTypes = [
//     {
//       title: 'Technology Partners',
//       icon: Shield,
//       description: 'Leading technology companies that integrate with our fraud prevention platform',
//       partners: [
//         { name: 'Cloud Provider A', logo: 'Cloud Infrastructure', category: 'Cloud Services' },
//         { name: 'Cloud Provider B', logo: 'AI & Analytics', category: 'Cloud Platform' },
//         { name: 'Payment Gateway A', logo: 'Payment Gateway', category: 'Payments' },
//         { name: 'Payment Gateway B', logo: 'Payment Solutions', category: 'Payments' }
//       ]
//     },
//     {
//       title: 'Banking Partners',
//       icon: Building,
//       description: 'Banks and financial institutions leveraging our fraud detection solutions',
//       partners: [
//         { name: 'Bank Partner A', logo: 'Digital Banking', category: 'Commercial Bank' },
//         { name: 'Bank Partner B', logo: 'Retail Banking', category: 'Commercial Bank' },
//         { name: 'Financial Institution A', logo: 'Financial Solutions', category: 'Financial Services' },
//         { name: 'Financial Institution B', logo: 'Lending Services', category: 'Financial Services' }
//       ]
//     },
//     {
//       title: 'Fintech Partners',
//       icon: TrendingUp,
//       description: 'Innovative fintech companies using our security infrastructure',
//       partners: [
//         { name: 'Fintech Partner A', logo: 'Digital Payments', category: 'Payments' },
//         { name: 'Fintech Partner B', logo: 'Payment Platform', category: 'Payments' },
//         { name: 'Lending Platform A', logo: 'SME Lending', category: 'Lending' },
//         { name: 'Lending Platform B', logo: 'Business Loans', category: 'Lending' }
//       ]
//     },
//     {
//       title: 'System Integrators',
//       icon: Users,
//       description: 'Professional services partners helping clients implement our solutions',
//       partners: [
//         { name: 'System Integrator A', logo: 'Enterprise Solutions', category: 'IT Services' },
//         { name: 'System Integrator B', logo: 'Digital Transformation', category: 'IT Services' },
//         { name: 'Technology Partner A', logo: 'Technology Services', category: 'IT Services' },
//         { name: 'Technology Partner B', logo: 'System Integration', category: 'IT Services' }
//       ]
//     }
//   ];

//   const partnerPrograms = [
//     {
//       title: 'Technology Integration Program',
//       description: 'Integrate FraudBuster APIs into your platform and offer enhanced security to your customers',
//       benefits: [
//         'Technical integration support',
//         'Co-marketing opportunities',
//         'Revenue sharing model',
//         'Priority technical support'
//       ],
//       ideal: 'Payment gateways, fintech platforms, banking software providers'
//     },
//     {
//       title: 'Reseller Partner Program',
//       description: 'Become an authorized reseller of Fraud Buster solutions in your region or vertical',
//       benefits: [
//         'Competitive margins',
//         'Sales training and certification',
//         'Marketing support and materials',
//         'Lead sharing program'
//       ],
//       ideal: 'System integrators, consultants, technology vendors'
//     },
//     {
//       title: 'Solution Partner Program',
//       description: 'Build comprehensive solutions combining your expertise with our fraud prevention technology',
//       benefits: [
//         'Joint solution development',
//         'Go-to-market collaboration',
//         'Technical architecture support',
//         'Customer success partnership'
//       ],
//       ideal: 'Consulting firms, implementation partners, managed service providers'
//     }
//   ];

//   const partnerBenefits = [
//     {
//       icon: TrendingUp,
//       title: 'Revenue Growth',
//       description: 'Expand your revenue streams with our proven fraud prevention solutions'
//     },
//     {
//       icon: Shield,
//       title: 'Enhanced Security',
//       description: 'Offer your customers best-in-class fraud detection and prevention capabilities'
//     },
//     {
//       icon: Users,
//       title: 'Expert Support',
//       description: 'Access to our technical experts and dedicated partner success team'
//     },
//     {
//       icon: Globe,
//       title: 'Market Expansion',
//       description: 'Enter new markets and verticals with our comprehensive security platform'
//     }
//   ];

//   const partnerRequirements = [
//     'Established business with proven track record in technology or financial services',
//     'Technical expertise in API integration and system implementation',
//     'Commitment to regulatory compliance and financial regulations',
//     'Dedicated resources for partner program participation',
//     'Strong customer relationships in target markets'
//   ];

//   const successStories = [
//     {
//       partner: 'Leading Financial Institution Partner',
//       challenge: 'High fraud rates in digital lending causing regulatory concerns',
//       solution: 'Implemented FraudBuster API with real-time KYC verification',
//       results: [
//         '94% reduction in fraud attempts',
//         '$10M in prevented losses',
//         '50ms average response time',
//         '100% regulatory compliance achieved'
//       ]
//     },
//     {
//       partner: 'Payment Gateway Integration',
//       challenge: 'Need for enhanced fraud detection in merchant transactions',
//       solution: 'Integrated FraudBuster with existing payment processing platform',
//       results: [
//         '99.7% fraud detection accuracy',
//         '40% reduction in false positives',
//         '25% increase in merchant satisfaction',
//         'Seamless API integration in 2 weeks'
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
//               <Handshake className="h-10 w-10 text-white" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
//               Partner Ecosystem
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
//               Join our growing network of technology partners, financial institutions, and system integrators 
//               to deliver comprehensive fraud prevention solutions across the global fintech landscape.
//             </p>
//             <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//               Become a Partner
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Partner Types */}
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
//               Our Partner Network
//             </h2>
//             <p className="text-xl text-gray-300">
//               Collaborating with industry leaders to secure the global financial ecosystem
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {partnerTypes.map((type, index) => (
//               <motion.div
//                 key={type.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
//                     <type.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{type.title}</h3>
//                 </div>
                
//                 <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
//                 <div className="grid grid-cols-2 gap-4">
//                   {type.partners.map((partner, idx) => (
//                     <div key={idx} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
//                       <h4 className="text-white font-medium mb-1">{partner.name}</h4>
//                       <p className="text-gray-400 text-sm mb-2">{partner.logo}</p>
//                       <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
//                         {partner.category}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partner Programs */}
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
//               Partner Programs
//             </h2>
//             <p className="text-xl text-gray-300">
//               Choose the partnership model that best fits your business objectives
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {partnerPrograms.map((program, index) => (
//               <motion.div
//                 key={program.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
//               >
//                 <h3 className="text-xl font-bold text-white mb-4">{program.title}</h3>
//                 <p className="text-gray-300 mb-6 leading-relaxed">{program.description}</p>
                
//                 <div className="mb-6">
//                   <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
//                   <ul className="space-y-2">
//                     {program.benefits.map((benefit, idx) => (
//                       <li key={idx} className="flex items-center text-gray-300">
//                         <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
//                         {benefit}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
                
//                 <div className="mb-6">
//                   <h4 className="text-white font-semibold mb-2">Ideal For:</h4>
//                   <p className="text-gray-400 text-sm">{program.ideal}</p>
//                 </div>
                
//                 <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partner Benefits */}
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
//               Why Partner with Fraud Buster
//             </h2>
//             <p className="text-xl text-gray-300">
//               Unlock new opportunities and drive growth with our partnership benefits
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {partnerBenefits.map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-center"
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

//       {/* Success Stories */}
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
//               Partner Success Stories
//             </h2>
//             <p className="text-xl text-gray-300">
//               Real results from our partnership collaborations
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {successStories.map((story, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
//               >
//                 <h3 className="text-2xl font-bold text-white mb-4">{story.partner}</h3>
                
//                 <div className="mb-6">
//                   <h4 className="text-cyan-400 font-semibold mb-2">Challenge:</h4>
//                   <p className="text-gray-300">{story.challenge}</p>
//                 </div>
                
//                 <div className="mb-6">
//                   <h4 className="text-cyan-400 font-semibold mb-2">Solution:</h4>
//                   <p className="text-gray-300">{story.solution}</p>
//                 </div>
                
//                 <div>
//                   <h4 className="text-green-400 font-semibold mb-3">Results:</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                     {story.results.map((result, idx) => (
//                       <div key={idx} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
//                         <p className="text-green-400 font-semibold text-sm">{result}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partner Requirements */}
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
//               Partner Requirements
//             </h2>
//             <p className="text-xl text-gray-300">
//               Criteria for joining our partner ecosystem
//             </p>
//           </motion.div>

//           <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
//             <div className="space-y-4">
//               {partnerRequirements.map((requirement, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-start"
//                 >
//                   <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
//                   <span className="text-gray-300 leading-relaxed">{requirement}</span>
//                 </motion.div>
//               ))}
//             </div>
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
//               Ready to Partner with Us?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               Join our ecosystem of partners and help secure the global fintech future. 
//               Let's build something amazing together.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
//                 Apply to Become a Partner
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40">
//                 Schedule Partnership Call
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Partners;






//<-- The above code is commented out to prevent execution errors in environments where React and related libraries are not available. To use this code, uncomment it and ensure that the necessary dependencies are installed in your project. ->





//<-----------------------------------------------------------------------------------------------------------------------------------



import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import {
  Handshake, Shield, TrendingUp, Users, CheckCircle, ArrowRight,
  Building, Globe, Sparkles, Zap, Link as LinkIcon, Layers,
  BadgeCheck, Boxes, Rocket, Star, Award, Crown
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* =========================================================================
   Minimal UI primitives (Tailwind only)
   ========================================================================= */
const Pill: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...p }) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-[6px] text-[12px] font-semibold border-white/15 bg-white/10 text-white ${className}`} {...p} />
);

const UIButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", ...p }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 border border-white/10 bg-white/10 hover:bg-white/20 transition-colors ${className}`}
    {...p}
  />
);

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className = "", ...p }, ref) => (
  <div ref={ref} className={`rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md ${className}`} {...p} />
));
Card.displayName = "Card";

/* =========================================================================
   Motion utilities
   ========================================================================= */
function useReducedMotion() {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onChange = () => set(!!mq?.matches);
    onChange();
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/* Scroll progress bar */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.min(1, window.scrollY / max);
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

/* Cursor particles (glow trail) + cursor dot */
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
      (ctx as any).globalCompositeOperation = "lighter";
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
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, 18, 0, Math.PI * 2); ctx.fill();
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

/* Reveal on scroll via anime.js */
function useAnimeReveal(selector: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(e.target as HTMLElement, {
              opacity: [0, 1],
              translateY: [24, 0],
              easing: "cubicBezier(.2,.75,.35,1)",
              duration: 600,
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [selector]);
}

/* Hover lift + glow */
function liftGlow(el: HTMLElement, dir: "enter" | "leave") {
  animate(el, {
    scale: dir === "enter" ? [1, 1.03] : [1.03, 1],
    translateY: dir === "enter" ? [0, -6] : [-6, 0],
    duration: 480,
    easing: "spring(1, 80, 10, 0)",
  });
  animate(el, {
    boxShadow:
      dir === "enter"
        ? ["0px 0px 0px rgba(0,0,0,0)", "0px 18px 50px rgba(53,224,255,0.18)"]
        : ["0px 18px 50px rgba(53,224,255,0.18)", "0px 0px 0px rgba(0,0,0,0)"],
    duration: 500,
    easing: "easeOutQuad",
  });
}

/* Tilt / parallax on pointer */
function enableTilt(el: HTMLElement) {
  const onMove = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / r.width;
    const dy = (e.clientY - cy) / r.height;
    animate(el, {
      rotateX: dy * -6,
      rotateY: dx * 8,
      translateZ: 0,
      duration: 200,
      easing: "easeOutQuad",
    });
  };
  const onLeave = () => {
    animate(el, { rotateX: 0, rotateY: 0, duration: 300, easing: "easeOutQuad" });
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/* SVG dash animation */
function DashAnimate({ selector }: { selector: string }) {
  useEffect(() => {
    const paths = Array.from(document.querySelectorAll(selector)) as SVGPathElement[];
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      animate(p, {
        strokeDashoffset: [len, 0],
        easing: "easeInOutQuad",
        duration: 1200,
        delay: 200,
      });
    });
  }, [selector]);
  return null;
}

/* Floating dots background for CTA */
function AnimatedDots() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const nodes = Array.from(ref.current.children) as HTMLElement[];
    nodes.forEach((node, i) => {
      const dx = (Math.random() * 16 - 8) | 0;
      const dy = (Math.random() * 16 - 8) | 0;
      const dur = 1400 + Math.floor(Math.random() * 600);
      animate(node, {
        translateX: [0, dx],
        translateY: [0, dy],
        direction: "alternate",
        easing: "easeInOutSine",
        duration: dur,
        delay: i * 80,
        loop: true,
      });
    });
  }, []);
  return (
    <div ref={ref} className="absolute inset-0">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 22 + 10}px`,
            height: `${Math.random() * 22 + 10}px`,
            background:
              "radial-gradient(circle, rgba(108,99,255,0.45) 0%, rgba(53,224,255,0.22) 60%, rgba(108,99,255,0) 70%)",
            filter: "blur(0.3px)",
          }}
        />
      ))}
    </div>
  );
}

/* Count-up on reveal (for KPIs) */
function useCountUp(target: number, startWhenSelector: string) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = document.querySelector(startWhenSelector);
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const dur = 1000;
            const loop = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setVal(Math.floor(target * p));
              if (p < 1) requestAnimationFrame(loop);
              else setVal(target);
            };
            requestAnimationFrame(loop);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, startWhenSelector]);
  return val;
}

/* Ripple on click */
function ripple(e: React.MouseEvent) {
  const t = e.currentTarget as HTMLElement;
  const R = document.createElement("span");
  const rect = t.getBoundingClientRect();
  const d = Math.max(rect.width, rect.height);
  R.style.position = "absolute";
  R.style.left = e.clientX - rect.left - d / 2 + "px";
  R.style.top = e.clientY - rect.top - d / 2 + "px";
  R.style.width = R.style.height = d + "px";
  R.style.borderRadius = "9999px";
  R.style.pointerEvents = "none";
  R.style.background = "radial-gradient(circle, rgba(53,224,255,0.35) 10%, rgba(53,224,255,0) 70%)";
  t.style.position = "relative";
  t.appendChild(R);
  animate(R, { opacity: [0.7, 0], scale: [0.7, 2.2], duration: 500, easing: "easeOutQuad" });
  setTimeout(() => R.remove(), 520);
}

/* =========================================================================
   Partners Page
   ========================================================================= */
const Partners: React.FC = () => {
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  useAnimeReveal(".reveal");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Background parallax based on mouse
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallax = {
    transform: `translate3d(${(mouse.x - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * 0.01}px, ${(mouse.y - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * 0.01}px, 0)`,
  };

  // Hero underline + chip reveal
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!heroRef.current || reduced) return;
    const scope = heroRef.current;
    const underline = scope.querySelector<HTMLElement>(".hero-underline");
    const chips = Array.from(scope.querySelectorAll(".hero-chip")) as HTMLElement[];

    if (underline) {
      animate(underline, {
        scaleX: [0, 1],
        duration: 650,
        easing: "easeInOutQuad",
        transformOrigin: "left",
        complete: () => {
          // cascade chips
          animate(chips, {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 500,
            easing: "spring(1, 80, 10, 0)",
            delay: stagger(70),
          });
        },
      });
    }
  }, [reduced]);

  // Tilt for program cards
  const programRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    programRefs.current.forEach((el) => {
      if (el) cleanups.push(enableTilt(el));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  // Content (updated copy: crisper, more marketing)
  const partnerTypes = [
    {
      title: "Technology Partners",
      icon: Shield,
      description:
        "Platforms that embed FraudBuster to modernize risk & trust — clouds, payment processors, analytics engines.",
      partners: [
        { name: "Cloud Provider A", logo: "Cloud Infrastructure", category: "Cloud Services" },
        { name: "Cloud Provider B", logo: "AI & Analytics", category: "Cloud Platform" },
        { name: "Payment Gateway A", logo: "Payment Gateway", category: "Payments" },
        { name: "Payment Gateway B", logo: "Payment Solutions", category: "Payments" },
      ],
    },
    {
      title: "Banking Partners",
      icon: Building,
      description:
        "Banks and NBFCs that operationalize fraud defenses with millisecond scoring & audit-ready evidence.",
      partners: [
        { name: "Bank Partner A", logo: "Digital Banking", category: "Commercial Bank" },
        { name: "Bank Partner B", logo: "Retail Banking", category: "Commercial Bank" },
        { name: "Financial Institution A", logo: "Financial Solutions", category: "Financial Services" },
        { name: "Financial Institution B", logo: "Lending Services", category: "Financial Services" },
      ],
    },
    {
      title: "Fintech Partners",
      icon: TrendingUp,
      description:
        "Card, UPI, and BNPL innovators who ship faster with drop-in APIs and prebuilt risk playbooks.",
      partners: [
        { name: "Fintech Partner A", logo: "Digital Payments", category: "Payments" },
        { name: "Fintech Partner B", logo: "Payment Platform", category: "Payments" },
        { name: "Lending Platform A", logo: "SME Lending", category: "Lending" },
        { name: "Lending Platform B", logo: "Business Loans", category: "Lending" },
      ],
    },
    {
      title: "System Integrators",
      icon: Users,
      description:
        "Implementation specialists aligning security, performance, and compliance across complex estates.",
      partners: [
        { name: "System Integrator A", logo: "Enterprise Solutions", category: "IT Services" },
        { name: "System Integrator B", logo: "Digital Transformation", category: "IT Services" },
        { name: "Technology Partner A", logo: "Technology Services", category: "IT Services" },
        { name: "Technology Partner B", logo: "System Integration", category: "IT Services" },
      ],
    },
  ];

  const partnerPrograms = [
    {
      title: "Technology Integration Program",
      body: "Embed FraudBuster APIs, enrich with webhooks, ship zero-downtime migrations and SLOs.",
      bullets: ["Dedicated solution engineer", "Co-marketing & launch kit", "Revenue share model", "Priority roadmap input"],
      icon: Layers,
    },
    {
      title: "Reseller Partner Program",
      body: "Bundle FraudBuster in your portfolio with margins, enablement, and full sales support.",
      bullets: ["Competitive margins", "Certification tracks", "Regional GTM plays", "Lead exchange"],
      icon: Boxes,
    },
    {
      title: "Solution Partner Program",
      body: "Co-create reference architectures — accelerate regulated launches with shared success metrics.",
      bullets: ["Joint solution design", "Architecture reviews", "Field delivery support", "Customer success playbooks"],
      icon: BadgeCheck,
    },
  ];

  const partnerBenefits = [
    { icon: TrendingUp, title: "Revenue Growth", desc: "Open new lines with proven anti-fraud impact and measurable ROI." },
    { icon: Shield, title: "Enhanced Security", desc: "World-class detection, explainability, and audit-ready evidence." },
    { icon: Users, title: "Expert Support", desc: "Direct access to engineers, test harnesses, and playbooks." },
    { icon: Globe, title: "Market Expansion", desc: "Win new geos and verticals with compliant-by-design APIs." },
  ];

  const successStories = [
    {
      partner: "Leading Financial Institution Partner",
      challenge: "High fraud rates in digital lending causing regulatory concerns",
      solution: "Real-time KYC & bank/IFSC verification with evidence JSON, throttle-aware retries",
      results: ["94% fraud attempt reduction", "$10M prevented losses", "50ms avg response", "100% audit alignment"],
    },
    {
      partner: "Payment Gateway Integration",
      challenge: "Need for enhanced fraud detection in merchant transactions",
      solution: "Inline risk scoring + post-auth webhook controls; false-positive minimization",
      results: ["99.7% detection", "−40% false positives", "+25% merchant satisfaction", "2-week seamless integration"],
    },
  ];

  // Partner logo marquee
  const marqueeItems = useMemo(
    () => [
      "Cloud Provider A", "Cloud Provider B", "Payment Gateway A", "Payment Gateway B",
      "Bank Partner A", "Bank Partner B", "Fintech Partner A", "Fintech Partner B",
      "System Integrator A", "System Integrator B",
    ],
    []
  );

  // KPIs (count-up when section reveals)
  const kpi1 = useCountUp(150, "#kpi-anchor"); // 150+ partners
  const kpi2 = useCountUp(99, "#kpi-anchor");  // 99.7% detection (rounded)
  const kpi3 = useCountUp(50, "#kpi-anchor");  // 50ms
  const kpi4 = useCountUp(25, "#kpi-anchor");  // +25% satisfaction

  return (
    <div className="pt-16 relative">
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); will-change: transform, opacity; }
        .gradient-stroke { background: linear-gradient(90deg,#6C63FF,#35E0FF,#4AF2C6); }
        .marquee {
          display: flex; gap: 24px; white-space: nowrap;
          animation: glide 20s linear infinite;
        }
        @keyframes glide {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
      `}</style>

      <ScrollProgress />
      <CursorParticles />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          ...parallax,
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden min-h-[86vh] flex items-center">
        <div className="relative mx-10 w-full max-w-none py-16" ref={heroRef}>
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-center">
            <div>
              <div className="bg-white/[0.06] border border-white/10 backdrop-blur-md inline-flex items-center rounded-full px-4 py-2 mb-6 hero-chip opacity-0">
                <Rocket className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">Partner · Growth & Security</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Partner Ecosystem
              </h1>
              <div className="mt-2 h-[4px] w-44 origin-left scale-x-0 hero-underline rounded-full gradient-stroke" />

              <p className="text-lg md:text-xl text-white/75 mt-5 max-w-2xl reveal">
                Join technology leaders, banks, and SIs building fraud-resilient experiences.
                Co-sell, co-build, and scale with audit-ready, developer-loved security.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Pill className="hero-chip opacity-0"><Sparkles className="h-3.5 w-3.5 mr-1 text-[#35E0FF]" /> Co-marketing & launches</Pill>
                <Pill className="hero-chip opacity-0"><TrendingUp className="h-3.5 w-3.5 mr-1 text-[#35E0FF]" /> Revenue share</Pill>
                <Pill className="hero-chip opacity-0"><Zap className="h-3.5 w-3.5 mr-1 text-[#35E0FF]" /> Priority engineering</Pill>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <UIButton
                  onClick={(e) => { ripple(e); navigate("/support"); }}
                  className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                  title="Go to Support Center"
                >
                  Talk to Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                </UIButton>
                <UIButton onClick={(e) => { ripple(e); navigate("/integration-guide"); }} className="rounded-2xl">
                  View Integration Guide
                </UIButton>
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-2xl p-6 relative reveal">
              <div className="text-sm text-white/60 mb-3">Recent partner highlights</div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Shield, title: "Fraud APIs", desc: "Inline risk + evidence JSON" },
                  { Icon: Layers, title: "Playbooks", desc: "Ready-to-use flows & rules" },
                  { Icon: BadgeCheck, title: "Compliance", desc: "Controls mapped to RBI" },
                  { Icon: Boxes, title: "Adapters", desc: "CBS / ESB / queue-ready" },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="bg-white/[0.06] border border-white/10 rounded-xl p-4 transition cursor-pointer"
                    onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                    onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-2">
                      <x.Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="font-semibold">{x.title}</div>
                    <div className="text-white/70 text-sm">{x.desc}</div>
                  </div>
                ))}
              </div>

              {/* Animated connector path */}
              <svg viewBox="0 0 600 60" className="w-full mt-5">
                <defs>
                  <linearGradient id="lineg" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#35E0FF" />
                    <stop offset="100%" stopColor="#6C63FF" />
                  </linearGradient>
                </defs>
                <path d="M10 30 C 120 10, 240 10, 350 30 S 580 50, 590 30" stroke="url(#lineg)" strokeWidth="2.5" fill="none" opacity="0.85" className="dash-path" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <DashAnimate selector=".dash-path" />

      {/* ================= TIERS STRIP ================= */}
      <section className="py-12" aria-labelledby="partner-tiers">
        <h2 id="partner-tiers" className="sr-only">Partner Tiers</h2>
        <div className="mx-10 max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Registered", Icon: Star, tone: "from-[#9CA3AF] to-[#D1D5DB]" },
              { title: "Certified", Icon: Award, tone: "from-[#35E0FF] to-[#6C63FF]" },
              { title: "Elite", Icon: Crown, tone: "from-[#4AF2C6] to-[#35E0FF]" },
            ].map((t, i) => (
              <div
                key={t.title}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 cursor-pointer"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                onClick={(e) => ripple(e)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${t.tone} mb-3`}>
                  <t.Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-xl font-semibold">{t.title}</div>
                <p className="text-white/70 text-sm mt-1">
                  Benefits scale with tier: deal reg, MDF, roadmap previews, and field engineering.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <section className="py-8">
        <div className="mx-10 max-w-none">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
            <div className="marquee p-4">
              {[...marqueeItems, ...marqueeItems].map((m, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.06] text-sm text-white/80"
                >
                  <LinkIcon className="inline h-3.5 w-3.5 mr-2 text-[#35E0FF]" />
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER TYPES ================= */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Our Partner Network</h2>
            <p className="text-lg text-white/70 reveal">Collaborating with industry leaders to secure global finance</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.1] transition"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-lg mr-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {type.partners.map((p, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors">
                      <h4 className="text-white font-medium mb-1">{p.name}</h4>
                      <p className="text-gray-400 text-sm mb-2">{p.logo}</p>
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                        {p.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KPI STRIP ================= */}
      <section id="kpi-anchor" className="py-16">
        <div className="mx-10 max-w-none">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Partners", value: kpi1, suffix: "+" },
              { label: "Detection Accuracy", value: kpi2, suffix: ".7%" },
              { label: "Avg Response", value: kpi3, suffix: "ms" },
              { label: "Merchant NPS", value: kpi4, prefix: "+", suffix: "%" },
            ].map((k) => (
              <div key={k.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center">
                <div className="text-3xl font-extrabold">
                  {k.prefix ?? ""}{k.value}{k.suffix ?? ""}
                </div>
                <div className="text-white/70 text-sm mt-1">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Partner Programs</h2>
            <p className="text-lg text-white/70 reveal">Choose a model that fits your motion</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnerPrograms.map((p, i) => (
              <Card
                key={p.title}
                ref={(el) => (programRefs.current[i] = el)}
                className="p-8 hover:bg-white/[0.1] transition will-change-transform"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#35E0FF] mb-5">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/75 mb-5">{p.body}</p>

                <ul className="space-y-2 mb-6">
                  {p.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /> {b}
                    </li>
                  ))}
                </ul>

                <UIButton className="w-full rounded-xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF]" onClick={ripple}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </UIButton>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Why Partner with FraudBuster</h2>
            <p className="text-lg text-white/70 reveal">Unlock growth and resilience — together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((b) => (
              <div
                key={b.title}
                className="group text-center rounded-2xl p-6 cursor-pointer transition border border-white/10 bg-white/[0.06] hover:bg-white/[0.1]"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] rounded-2xl mb-6">
                  <b.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{b.title}</h3>
                <p className="text-gray-300 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STORIES ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Partner Success Stories</h2>
            <p className="text-lg text-white/70 reveal">Proven results with measurable outcomes</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {successStories.map((s, idx) => (
              <div
                key={idx}
                className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.1] transition"
                onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{s.partner}</h3>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300">{s.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Solution</h4>
                  <p className="text-gray-300">{s.solution}</p>
                </div>

                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Results</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {s.results.map((r, i) => (
                      <div key={i} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 text-center">
                        <p className="text-green-400 font-semibold text-sm">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
      <section className="py-24 bg-white/[0.04]">
        <div className="mx-10 max-w-none">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Partner Requirements</h2>
            <p className="text-lg text-white/70 reveal">What we look for in great partners</p>
          </div>

        <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Proven track record in tech or financial services",
                "API integration & implementation capability",
                "Commitment to regulations & data protection",
                "Partner resources for enablement & GTM",
                "Strong customer reach in target markets",
                "Outcome orientation with shared KPIs",
              ].map((req, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-200 leading-relaxed">{req}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="mx-10 max-w-none">
          <Card className="p-0 overflow-hidden relative">
            <div className="grid md:grid-cols-[1.2fr,0.8fr]">
              <div className="p-10 relative">
                <Handshake className="h-14 w-14 text-[#35E0FF] mb-4" />
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Ready to Partner with Us?</h3>
                <p className="text-white/75 text-lg">
                  Let’s co-build secure, scalable, and compliant financial experiences.
                  Tap our engineering, GTM, and compliance support to move faster with confidence.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <UIButton
                    onClick={(e) => { ripple(e); navigate("/support"); }}
                    className="rounded-2xl bg-[#7C5CFF]/90 hover:bg-[#7C5CFF] shadow-[0_12px_40px_rgba(124,92,255,0.35)]"
                  >
                    Apply to Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
                  </UIButton>
                  <UIButton onClick={(e) => { ripple(e); navigate("/security"); }} className="rounded-2xl">
                    See Security Standards
                  </UIButton>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6 text-white/60">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" /> Joint GTM
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" /> Compliance-ready
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" /> Global reach
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden p-10">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <AnimatedDots />
                </div>
                <div className="relative">
                  <div className="bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-xl p-5">
                    <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                      <LinkIcon className="h-4 w-4 text-[#35E0FF]" /> Fast links
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { t: "Partner enablement kit", to: "/support" },
                        { t: "API adapter templates", to: "/integration-guide" },
                        { t: "Co-marketing request", to: "/support" },
                        { t: "Security & compliance pack", to: "/security" },
                      ].map((x) => (
                        <Link
                          key={x.t}
                          to={x.to}
                          className="flex items-center gap-2 text-sm rounded-lg px-3 py-2 border border-white/10 bg-white/[0.06] hover:bg-white/10 transition"
                          onMouseEnter={(e) => liftGlow(e.currentTarget, "enter")}
                          onMouseLeave={(e) => liftGlow(e.currentTarget, "leave")}
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-[#35E0FF]" /> {x.t}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-white/60">
                    Prefer Slack? We can spin up a shared channel for the first 30 days.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Partners;
