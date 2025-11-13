// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Shield, Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { ShieldCheckIcon } from '@heroicons/react/24/solid';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Product', path: '/product' },
//     { name: 'About Us', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   const handleNavClick = (path: string) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setIsOpen(false);
//   };
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <motion.div 
//             className="flex items-center space-x-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 17 }}
//           >
//             <div className="relative">
//               <ShieldCheckIcon className="h-10 w-10 text-cyan-400" />
//               <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full"></div>
//             </div>
//             <button onClick={() => handleNavClick('/')} className="text-xl font-bold text-white">
//               Fraud Buster
//             </button>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.path)}
//                   className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
//                     isActive(item.path)
//                       ? 'text-cyan-400 bg-cyan-400/10'
//                       : 'text-white hover:text-cyan-400 hover:bg-white/10'
//                   }`}
//                 >
//                   {item.name}
//                   {isActive(item.path) && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
//                       layoutId="navbar-underline"
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/20 transition-colors"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 p-4"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.path)}
//                   className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                     isActive(item.path)
//                       ? 'text-cyan-400 bg-cyan-400/10'
//                       : 'text-white hover:text-cyan-400 hover:bg-white/10'
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





//<--------------------------------New Design--------------------------------------------------------------------







//<--------------------------------New Design--------------------------------------------------------------------

// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import clsx from "clsx";

// const links = [
//   { to: "/product", label: "Product" },
//   { to: "/api", label: "API" },
//   { to: "/case-studies", label: "Case Studies" },
//   { to: "/security", label: "Security" },
//   { to: "/demo", label: "Demo" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const NavItem = ({ to, label }: { to: string; label: string }) => (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         clsx(
//           "px-3 py-2 rounded-xl hover:bg-white/5 transition",
//           isActive && "bg-white/10 text-white"
//         )
//       }
//       onClick={() => setOpen(false)}
//     >
//       {label}
//     </NavLink>
//   );

//   return (
//     <header className="fixed inset-x-0 top-0 z-50">
//       <div className="mx-10 mt-3 w-[96%] max-w-17xl">
//         <div className="glass hairline flex items-center justify-between rounded-2xl px-4 py-3">
//           {/* <Link to="/" className="flex items-center gap-2">
//             <div className="h-7 w-7 rounded-xl bg-accent/90 shadow-glow" />
//             <span className="font-semibold">FraudBuster</span>
//           </Link> */}
//           <Link to="/" className="flex items-center gap-3 group">
//             {/* <div className="relative h-16 w-16 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"> */}
//               <img 
//                 src="/logo.png" 
//                 alt="FraudBuster Logo" 
//                 // className="h-full w-full object-contain bg-white/5 rounded-xl p-1 backdrop-blur-sm"
//                 className="relative h-16 w-16 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
//                 style={{
//                   filter: 'brightness(1.4) contrast(1.5) saturate(1.2) drop-shadow(0 0 15px rgba(124,92,255,0.9)) drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
//                   imageRendering: 'crisp-edges'
//                 }}
//               />
//               {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-400/30 rounded-xl blur opacity-50 -z-10 group-hover:opacity-70 transition-opacity"></div>
//               <div className="absolute inset-0 ring-1 ring-white/20 rounded-xl"></div> */}
//             {/* </div> */}
//             <div className="flex flex-col">
//               <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">FraudBuster</span>
//               <span className="text-xs text-white/70 font-medium tracking-wide">Security Solutions</span>
//             </div>
//           </Link>

//           <nav className="hidden items-center  gap-1 md:flex">
//             {links.map((l) => <NavItem key={l.to} {...l}  />)}
//           </nav>

//           <div className="hidden md:block">
//             <Link
//               to="/contact"
//               className="rounded-xl bg-accent/90 px-4 py-2 text-sm font-medium text-white shadow-glow hover:translate-y-[1px] transition"
//             >
//               Talk to Sales
//             </Link>
//           </div>

//           <button
//             className="md:hidden rounded-xl border border-white/10 px-3 py-2"
//             onClick={() => setOpen((v) => !v)}
//             aria-label="Open menu"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile sheet */}
//         {open && (
//           <div className="mt-2 rounded-2xl border border-white/10 bg-ink/90 p-3 backdrop-blur-md md:hidden">
//             <div className="grid gap-1">
//               {links.map((l) => (
//                 <NavItem key={l.to} {...l} />
//               ))}
//               <Link
//                 to="/contact"
//                 className="mt-2 rounded-xl bg-accent/90 px-4 py-2 text-sm font-medium text-white shadow-glow text-center"
//                 onClick={() => setOpen(false)}
//               >
//                 Talk to Sales
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }




//<------------------new design tried----------------------------------------------------->





//<--------------------new design tried----------------------------------------------------->

// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";

const links = [
  { to: "/product", label: "Product" },
  { to: "/api", label: "API" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/security", label: "Security" },
  { to: "/demo", label: "Demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Base style the desktop & mobile items will share
  const baseItem =
    "rounded-xl transition-colors px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70";

  // Responsive type scale + subtle polish (applies on desktop bar)
  const desktopText =
    "text-sm sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.15rem] font-medium tracking-wide";

  // Lighter default color, glow on hover, solid when active
  const desktopIdle =
    "text-white/80 hover:text-cyan-300 hover:bg-white/[0.06]";

  const NavItem = ({
    to,
    label,
    className,
  }: {
    to: string;
    label: string;
    className?: string;
  }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          baseItem,
          className,
          isActive
            ? "bg-white/10 text-white"
            : desktopIdle
        )
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Full-width container; remove hard margins so it breathes edge-to-edge */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 mt-3 w-full">
        <div className="glass hairline flex items-center justify-between rounded-2xl px-3 sm:px-4 md:px-5 py-2.5 md:py-3">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="FraudBuster Logo"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{
                filter:
                  "brightness(1.4) contrast(1.5) saturate(1.2) drop-shadow(0 0 15px rgba(124,92,255,0.9)) drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
                imageRendering: "crisp-edges",
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg md:text-xl text-white group-hover:text-cyan-300 transition-colors">
                FraudBuster
              </span>
              <span className="text-[10px] sm:text-xs text-white/70 font-medium tracking-wide">
                Security Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {links.map((l) => (
              <NavItem
                key={l.to}
                {...l}
                className={clsx(baseItem, desktopText)}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={clsx(
                "rounded-2xl px-4 py-2 font-semibold text-white shadow-[0_10px_30px_rgba(53,224,255,0.35)]",
                "bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF]",
                "text-sm sm:text-[0.95rem]"
              )}
            >
              Talk to Sales
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            className="md:hidden rounded-xl border border-white/10 px-3 py-2 text-white/90 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            ☰
          </button>
        </div>

        {/* Mobile Sheet */}
        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-ink/90 p-3 backdrop-blur-md md:hidden">
            <div className="grid gap-1">
              {links.map((l) => (
                <NavItem
                  key={l.to}
                  {...l}
                  className="w-full text-[0.95rem] font-medium hover:bg-white/[0.06]"
                />
              ))}
              <Link
                to="/contact"
                className="mt-2 rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-4 py-2 text-sm font-semibold text-white text-center shadow-[0_10px_30px_rgba(124,92,255,0.35)]"
                onClick={() => setOpen(false)}
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
