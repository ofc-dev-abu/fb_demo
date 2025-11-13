// import React from 'react';
// import { motion } from 'framer-motion';
// import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleLinkClick = (href: string) => {
//     navigate(href);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const footerLinks = {
//     product: [
//       { name: 'Fraud Buster', href: '/product' },
//       { name: 'API Documentation', href: '/api-docs' },
//       { name: 'Integration Guide', href: '/integration' },
//       { name: 'Security Features', href: '/security-features' }
//     ],
//     company: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Careers', href: '/careers' },
//       { name: 'Press', href: '/press' },
//       { name: 'Partners', href: '/partners' }
//     ],
//     resources: [
//       { name: 'Blog', href: '/blog' },
//       { name: 'Case Studies', href: '/case-studies' },
//       { name: 'White Papers', href: '/white-papers' },
//       { name: 'Support Center', href: '/support' }
//     ],
//     legal: [
//       { name: 'Privacy Policy', href: '/privacy' },
//       { name: 'Terms of Service', href: '/terms' },
//       { name: 'Compliance', href: '/compliance' },
//       { name: 'Security', href: '/security' }
//     ]
//   };

//   const socialLinks = [
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Twitter, href: '#', label: 'Twitter' },
//     { icon: Github, href: '#', label: 'GitHub' }
//   ];

//   return (
//     <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Main Footer Content */}
//         <div className="grid lg:grid-cols-6 gap-12 mb-12">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center space-x-2 mb-6">
//                 <div className="relative">
//                   <Shield className="h-8 w-8 text-cyan-400" />
//                   <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
//                 </div>
//                 <span className="text-xl font-bold text-white">Fraud Buster</span>
//               </div>
//               <p className="text-gray-400 leading-relaxed mb-6">
//                 Leading fintech security solutions provider, protecting businesses from fraud with
//                 advanced AI technology and real-time monitoring systems.
//               </p>
              
//               {/* Contact Info */}
//               <div className="space-y-3">
//                 <div className="flex items-center text-gray-400">
//                   <Mail className="h-5 w-5 mr-3 text-cyan-400" />
//                   info@fraudbuster.co.in
//                 </div>
//                 <div className="flex items-center text-gray-400">
//                   <MapPin className="h-5 w-5 mr-3 text-cyan-400" />
//                   Global Operations
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Links Sections */}
//           <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white font-semibold mb-4">Product</h3>
//               <ul className="space-y-3">
//                 {footerLinks.product.map((link) => (
//                   <li key={link.name}>
//                     <button
//                       onClick={() => handleLinkClick(link.href)}
//                       className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white font-semibold mb-4">Company</h3>
//               <ul className="space-y-3">
//                 {footerLinks.company.map((link) => (
//                   <li key={link.name}>
//                     <button
//                       onClick={() => handleLinkClick(link.href)}
//                       className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white font-semibold mb-4">Resources</h3>
//               <ul className="space-y-3">
//                 {footerLinks.resources.map((link) => (
//                   <li key={link.name}>
//                     <button
//                       onClick={() => handleLinkClick(link.href)}
//                       className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-white font-semibold mb-4">Legal</h3>
//               <ul className="space-y-3">
//                 {footerLinks.legal.map((link) => (
//                   <li key={link.name}>
//                     <button
//                       onClick={() => handleLinkClick(link.href)}
//                       className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
//                     >
//                       {link.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-white/10 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-gray-400 text-sm mb-4 md:mb-0"
//             >
//               © 2025 Fraud Buster. All rights reserved. | Securing the future of finance.
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="flex space-x-4"
//             >
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
//                 >
//                   <social.icon className="h-5 w-5" />
//                 </a>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Newsletter Section */}
//       <div className="border-t border-white/10 bg-black/20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row items-center justify-between"
//           >
//             <div className="text-center md:text-left mb-4 md:mb-0">
//               <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
//               <p className="text-gray-400 text-sm">Get the latest news about fraud prevention and fintech security</p>
//             </div>
            
//             <div className="flex w-full max-w-md">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
//               />
//               <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-r-lg font-medium transition-all duration-300">
//                 Subscribe
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






//<----------------------------------------New Design----------------------------------------->//








//<----------------------------------------New Design----------------------------------------->//



// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-ink/70 backdrop-blur-md">
//       <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
//         <div>
//           <div className="mb-2 text-sm uppercase text-white/60">Product</div>
//           <ul className="space-y-1 text-white/70">
//             <li><Link to="/product" className="hover:text-white">Overview</Link></li>
//             <li><Link to="/security" className="hover:text-white">Security</Link></li>
//             <li><Link to="/api" className="hover:text-white">API</Link></li>
//             <li><Link to="/demo" className="hover:text-white">Live Demo</Link></li>
//             <li><Link to="/security-features">Security Features</Link></li>
//           </ul>
//         </div>
//         <div>
//           <div className="mb-2 text-sm uppercase text-white/60">Company</div>
//           <ul className="space-y-1 text-white/70">
//             <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
//             <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
//             <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
//             <li><Link to="/press" className="hover:text-white">Press</Link></li>
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//           </ul>
//         </div>
//         <div>
//           <div className="mb-2 text-sm uppercase text-white/60">Resources</div>
//           <ul className="space-y-1 text-white/70">
//             <li><Link to="/integration-guide" className="hover:text-white">Integration Guide</Link></li>
//             <li><Link to="/support" className="hover:text-white">Support Center</Link></li>
//             <li><Link to="/whitepapers" className="hover:text-white">Whitepapers</Link></li>
//             <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
//           </ul>
//         </div>
//         <div>
//           <div className="mb-2 text-sm uppercase text-white/60">Legal</div>
//           <ul className="space-y-1 text-white/70">
//             <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
//             <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
//             <li><Link to="/compliance" className="hover:text-white">Compliance</Link></li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-white/10 py-4 text-center text-white/50">
//         © {new Date().getFullYear()} FraudBuster. All rights reserved.
//       </div>
//     </footer>
//   );
// }






//<----------------------------------------New Design----------------------------------------->//









//<------------------------------------------------------------------------------------------------------

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, stagger } from "animejs";
import {
  ArrowUp,
  Mail,
  Shield,
  FileCheck,
  Globe as GlobeIcon,
  Lock,
  Eye,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

/** Reuse the glass look from your app */
const glass =
  "bg-white/[0.06] border border-white/10 backdrop-blur-md";

/** Simple reduced-motion hook (matches your other pages) */
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

export default function Footer() {
  const reduced = useReducedMotion();

  // Reveal animation for footer columns
  const footerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced || !footerRef.current) return;
    const groups = footerRef.current.querySelectorAll<HTMLElement>("[data-reveal]");
    animate(groups, {
      opacity: [{ from: 0, to: 1 }],
      translateY: [{ from: 16, to: 0 }],
      delay: stagger(40),
      duration: 480,
      ease: "out(3)",
    });
  }, [reduced]);

  // Scroll progress & “Back to top” circle button
  const [progress, setProgress] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, window.scrollY / (max || 1)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (reduced || !circleRef.current) return;
    const C = circleRef.current;
    const r = C.r.baseVal.value;
    const circ = 2 * Math.PI * r;
    C.style.strokeDasharray = String(circ);
    C.style.strokeDashoffset = String(circ * (1 - progress));
  }, [progress, reduced]);

  // Newsletter micro-interaction: focus magnet + send pulse on submit
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (reduced || !btnRef.current) return;
    const el = btnRef.current;
    const rect = () => el.getBoundingClientRect();
    const onMove = (e: MouseEvent) => {
      const r = rect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      animate(el, {
        translateX: dx * 10,
        translateY: dy * 10,
        duration: 120,
        ease: "out(3)",
      });
    };
    const onLeave = () =>
      animate(el, { translateX: 0, translateY: 0, duration: 180, ease: "out(4)" });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reduced) {
      setSent(true);
      return;
    }
    const el = formRef.current;
    if (!el) return;
    // pulse ring + shake success
    const ring = el.querySelector<HTMLElement>(".ring-pulse");
    if (ring) {
      ring.style.opacity = "1";
      animate(ring, {
        scale: [{ from: 0.6, to: 1.25 }],
        opacity: [{ from: 0.35, to: 0 }],
        duration: 520,
        ease: "out(3)",
      });
    }
    animate(el, {
      translateX: [{ to: 2 }, { to: -2 }, { to: 0 }],
      duration: 280,
      ease: "out(2)",
    });
    setTimeout(() => setSent(true), 220);
  };

  // Soft parallax grid behind the footer
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const parallaxStyle = useMemo(
    () => ({
      transform: `translate3d(${(mouse.x - window.innerWidth / 2) * 0.004}px, ${
        (mouse.y - window.innerHeight / 2) * 0.004
      }px, 0)`,
    }),
    [mouse.x, mouse.y]
  );

  return (
    <footer className="relative mt-16">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            ...parallaxStyle,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_10%_0%,rgba(124,92,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_90%_10%,rgba(53,224,255,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
      </div>

      {/* Top CTA ribbon */}
      <div className="mx-auto w-full max-w-7xl px-6">
        <div
          className={`relative ${glass} rounded-3xl overflow-hidden mt-6`}
          data-reveal
        >
          <div className="absolute -inset-px rounded-3xl [mask:linear-gradient(white,transparent)] pointer-events-none" />
          <div className="flex flex-col gap-6 items-start md:flex-row md:items-center md:justify-between p-6 md:p-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-3 py-1 text-xs text-white/70">
                <Shield className="h-3.5 w-3.5 text-[#35E0FF]" />
                Enterprise-grade trust
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
                Ready to integrate FraudBuster with your stack?
              </h3>
              <p className="mt-2 text-white/70">
                Ship KYC/KYB, risk scoring and audit trails—without sacrificing conversion.
              </p>
            </div>

            {/* Newsletter / Early access form */}
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="relative w-full max-w-md"
              aria-label="Join waitlist"
            >
              {!sent ? (
                <div className="flex gap-2">
                  <div className="ring-pulse pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#35E0FF]/40 opacity-0" />
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-white/50" />
                    <input
                      ref={inputRef}
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-xl bg-white/[0.06] border border-white/10 pl-10 pr-3 py-3 outline-none focus:border-[#35E0FF]/60"
                    />
                  </div>
                  <button
                    ref={btnRef}
                    type="submit"
                    className="rounded-xl bg-[#7C5CFF]/90 px-4 py-3 font-semibold text-white shadow-[0_12px_36px_rgba(124,92,255,0.35)] hover:opacity-95 transition will-change-transform"
                  >
                    Join
                  </button>
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-3 text-emerald-200"
                  role="status"
                >
                  <FileCheck className="h-5 w-5" />
                  You’re on the list. We’ll be in touch!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div
        ref={footerRef}
        className="mt-8 border-t border-white/10 bg-ink/60 backdrop-blur-md"
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {/* Brand + social */}
            <div className="col-span-2 md:col-span-1" data-reveal>
              <Link to="/" className="group inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="FraudBuster"
                  className="h-10 w-10 rounded-xl"
                  style={{
                    filter:
                      "brightness(1.3) contrast(1.3) saturate(1.1) drop-shadow(0 0 12px rgba(124,92,255,0.6))",
                  }}
                />
                <div>
                  <div className="font-bold text-lg group-hover:text-cyan-300 transition-colors">
                    FraudBuster
                  </div>
                  <div className="text-xs text-white/60">Security Solutions</div>
                </div>
              </Link>

              <div className="mt-4 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="GitHub"
                  className="group rounded-lg border border-white/10 bg-white/[0.04] p-2 hover:bg-white/[0.10] transition"
                >
                  <Github className="h-4.5 w-4.5 text-white/80 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="group rounded-lg border border-white/10 bg-white/[0.04] p-2 hover:bg-white/[0.10] transition"
                >
                  <Twitter className="h-4.5 w-4.5 text-white/80 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="group rounded-lg border border-white/10 bg-white/[0.04] p-2 hover:bg-white/[0.10] transition"
                >
                  <Linkedin className="h-4.5 w-4.5 text-white/80 group-hover:text-white" />
                </a>
              </div>

              {/* Trust badges inline, aligned with Security page vibe */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                <span className={`${glass} rounded-lg px-2.5 py-1.5 text-xs inline-flex items-center gap-1 text-white/80`}>
                  <Shield className="h-3.5 w-3.5 text-[#35E0FF]" /> SOC 2 pathways
                </span>
                <span className={`${glass} rounded-lg px-2.5 py-1.5 text-xs inline-flex items-center gap-1 text-white/80`}>
                  <Lock className="h-3.5 w-3.5 text-[#35E0FF]" /> AES-256
                </span>
                <span className={`${glass} rounded-lg px-2.5 py-1.5 text-xs inline-flex items-center gap-1 text-white/80`}>
                  <FileCheck className="h-3.5 w-3.5 text-[#35E0FF]" /> Audit trails
                </span>
                <span className={`${glass} rounded-lg px-2.5 py-1.5 text-xs inline-flex items-center gap-1 text-white/80`}>
                  <GlobeIcon className="h-3.5 w-3.5 text-[#35E0FF]" /> Residency (IN)
                </span>
                <span className={`${glass} rounded-lg px-2.5 py-1.5 text-xs inline-flex items-center gap-1 text-white/80`}>
                  <Eye className="h-3.5 w-3.5 text-[#35E0FF]" /> SIEM export
                </span>
              </div>
            </div>

            {/* Columns */}
            <div data-reveal>
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">
                Product
              </div>
              <ul className="space-y-1 text-white/70">
                <li><HoverLink to="/product">Overview</HoverLink></li>
                <li><HoverLink to="/security">Security</HoverLink></li>
                <li><HoverLink to="/api">API</HoverLink></li>
                <li><HoverLink to="/demo">Live Demo</HoverLink></li>
                <li><HoverLink to="/security-features">Security Features</HoverLink></li>
              </ul>
            </div>

            <div data-reveal>
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">
                Company
              </div>
              <ul className="space-y-1 text-white/70">
                <li><HoverLink to="/case-studies">Case Studies</HoverLink></li>
                <li><HoverLink to="/blog">Blog</HoverLink></li>
                <li><HoverLink to="/careers">Careers</HoverLink></li>
                <li><HoverLink to="/press">Press</HoverLink></li>
                <li><HoverLink to="/about">About Us</HoverLink></li>
              </ul>
            </div>

            <div data-reveal>
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">
                Resources
              </div>
              <ul className="space-y-1 text-white/70">
                <li><HoverLink to="/integration-guide">Integration Guide</HoverLink></li>
                <li><HoverLink to="/support">Support Center</HoverLink></li>
                <li><HoverLink to="/whitepapers">Whitepapers</HoverLink></li>
                <li><HoverLink to="/partners">Partners</HoverLink></li>
              </ul>
            </div>

            <div data-reveal>
              <div className="mb-2 text-xs uppercase tracking-wide text-white/60">
                Legal
              </div>
              <ul className="space-y-1 text-white/70">
                <li><HoverLink to="/privacy">Privacy Policy</HoverLink></li>
                <li><HoverLink to="/terms">Terms of Service</HoverLink></li>
                <li><HoverLink to="/compliance">Compliance</HoverLink></li>
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-white/60 md:flex-row">
            <div>© {new Date().getFullYear()} FraudBuster. All rights reserved.</div>

            {/* Scroll to top with progress ring */}
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5"
              aria-label="Back to top"
            >
              <span className="relative grid place-items-center">
                <svg width="26" height="26" viewBox="0 0 36 36" className="-rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14.5"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <circle
                    ref={circleRef}
                    cx="18"
                    cy="18"
                    r="14.5"
                    stroke="url(#grad)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#35E0FF" />
                      <stop offset="100%" stopColor="#6C63FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <ArrowUp className="absolute h-3.5 w-3.5 opacity-80 group-hover:opacity-100 transition" />
              </span>
              <span className="text-sm">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Link with subtle underline grow + hover lift */
function HoverLink({ to, children }: { to: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mouseenter", () => {
      const bar = el.querySelector<HTMLElement>(".bar");
      if (!bar) return;
      animate(bar, { scaleX: [{ from: 0, to: 1 }], duration: 220, ease: "out(3)" });
      animate(el, { translateY: [{ to: -1 }], duration: 120, ease: "out(3)" });
    });
    el.addEventListener("mouseleave", () => {
      const bar = el.querySelector<HTMLElement>(".bar");
      if (!bar) return;
      animate(bar, { scaleX: [{ to: 0 }], duration: 180, ease: "out(3)" });
      animate(el, { translateY: [{ to: 0 }], duration: 120, ease: "out(3)" });
    });
    return () => {
      el.replaceWith(el.cloneNode(true)); // remove listeners safely
    };
  }, []);

  return (
    <Link ref={ref} to={to} className="relative inline-block hover:text-white">
      <span className="relative z-10">{children}</span>
      <span
        className="bar absolute left-0 right-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[#35E0FF] to-[#6C63FF]"
        aria-hidden
      />
    </Link>
  );
}
