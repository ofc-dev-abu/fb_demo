// /* ================================================================
//    src/pages/Login.tsx
//    Playful Login page with:
//    - Top load bar, precise cursor particles
//    - Owl mascot: covers eyes when you reveal password, peeks when hidden
//    - Input focus & keypress interactions
//    - Subtle “caps lock” warning & tiny shake on wrong attempt (demo)
//    - Navigate to /demo from CTA
//    - Motion One (@motionone/dom)
// ================================================================= */

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import { Mail, Lock, Eye, EyeOff, LogIn, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const ACCENT = "#35E0FF";

// /* Reuse from Register (simplified here to keep file self-contained) */
// function ScrollProgress(){
//   const bar = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const el = bar.current!;
//     const onScroll = ()=>{
//       const d = document.documentElement;
//       const p = Math.max(0, Math.min(1, scrollY / Math.max(1, d.scrollHeight - d.clientHeight)));
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     addEventListener("scroll", onScroll, { passive:true });
//     addEventListener("resize", onScroll);
//     return ()=>{ removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
//   },[]);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
//       <div ref={bar} className={`origin-left h-full ${GRADIENT}`} style={{ transform:"scaleX(0)" }} />
//     </div>
//   );
// }
// function CursorParticles(){
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const dot = dotRef.current!;
//     const move = (e:MouseEvent)=> dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     addEventListener("mousemove", move, { passive:true });
//     return ()=> removeEventListener("mousemove", move);
//   },[]);
//   useEffect(()=>{
//     type P={x:number;y:number;vx:number;vy:number;life:number};
//     const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
//     let raf=0, dpr=Math.max(1, devicePixelRatio||1);
//     const resize=()=>{
//       const w=innerWidth,h=innerHeight;
//       dpr=Math.max(1, devicePixelRatio||1);
//       cvs.width=Math.floor(w*dpr); cvs.height=Math.floor(h*dpr);
//       cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
//       ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr); ctx.globalCompositeOperation="lighter";
//     };
//     resize(); addEventListener("resize", resize);
//     const parts:P[]=[];
//     const spawn=(x:number,y:number)=>{ for(let i=0;i<3;i++){ const a=Math.random()*Math.PI*2,s=Math.random()*1.2+.6; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1}); } };
//     const onMove=(e:MouseEvent)=>spawn(e.clientX,e.clientY);
//     addEventListener("mousemove", onMove);
//     const loop=()=>{
//       ctx.clearRect(0,0,innerWidth,innerHeight);
//       for(let i=parts.length-1;i>=0;i--){
//         const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
//         const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
//         g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`); g.addColorStop(1,"rgba(124,92,255,0)");
//         ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
//         if(p.life<.05) parts.splice(i,1);
//       }
//       raf=requestAnimationFrame(loop);
//     };
//     raf=requestAnimationFrame(loop);
//     return ()=>{ cancelAnimationFrame(raf); removeEventListener("mousemove", onMove); removeEventListener("resize", resize); };
//   },[]);
//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9997]" />
//       <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}/>
//     </>
//   );
// }

// /* Owl mascot (eyes + hands for privacy) */
// function Owl({ cover }:{ cover:boolean }){
//   const pupilsRef = useRef<SVGGElement>(null);
//   const handsRef = useRef<SVGGElement>(null);

//   useEffect(()=>{
//     const eyes = pupilsRef.current!;
//     const onMove=(e:MouseEvent)=>{
//       const svg = eyes.closest("svg")!.getBoundingClientRect();
//       const dx = Math.max(-0.12, Math.min(0.12, (e.clientX - (svg.left + svg.width/2))/svg.width));
//       const dy = Math.max(-0.12, Math.min(0.12, (e.clientY - (svg.top + svg.height/2))/svg.height));
//       eyes.setAttribute("transform", `translate(${dx*16}, ${dy*16})`);
//     };
//     addEventListener("mousemove", onMove, { passive:true });
//     return ()=> removeEventListener("mousemove", onMove);
//   },[]);

//   useEffect(()=>{
//     animate(handsRef.current!, { transform: [ cover ? "translate(0,0)" : "translate(0,-22px)" ] }, { duration:200, easing:"easeOutCubic" });
//   }, [cover]);

//   return (
//     <svg viewBox="0 0 220 140" className="w-full h-auto">
//       <ellipse cx="110" cy="80" rx="64" ry="48" fill="#2b2758"/>
//       <circle cx="80" cy="70" r="24" fill="#fff"/>
//       <circle cx="140" cy="70" r="24" fill="#fff"/>
//       <g ref={pupilsRef}>
//         <circle cx="80" cy="70" r="8" fill="#0b1220"/>
//         <circle cx="140" cy="70" r="8" fill="#0b1220"/>
//       </g>
//       <polygon points="110,82 104,94 116,94" fill="#ffb703"/>
//       <g ref={handsRef} transform="translate(0,-22)">
//         <rect x="64" y="46" rx="8" ry="8" width="24" height="20" fill="#4b3dc8"/>
//         <rect x="132" y="46" rx="8" ry="8" width="24" height="20" fill="#4b3dc8"/>
//       </g>
//     </svg>
//   );
// }

// const Login: React.FC = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pw, setPw] = useState("");
//   const [show, setShow] = useState(false);
//   const [caps, setCaps] = useState(false);

//   // headline reveal
//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent||"";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" "?"&nbsp;":c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(18), duration:300, easing:"easeOutCubic" });
//   },[]);

//   // caps lock detector
//   const onPwKey = (e: React.KeyboardEvent<HTMLInputElement>)=>{
//     // @ts-ignore
//     setCaps(e.getModifierState && e.getModifierState("CapsLock"));
//   };

//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     // playful shake (demo)
//     const card = document.getElementById("login-card");
//     if(card){
//       animate(card, { x:[0,-8,8,-6,6,-4,4,0] }, { duration:420, easing:"easeOutCubic" });
//     }
//     // pretend success → navigate to /demo after tiny delay
//     setTimeout(()=> nav("/demo"), 480);
//   };

//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />

//       {/* background */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 opacity-[0.10]" style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//         }} />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_18%_10%,rgba(124,92,255,0.22),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_82%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
//       </div>

//       <section className="py-12">
//         <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>

//           <div id="login-card" className={`${glass} rounded-3xl p-8`}>
//             <h1 ref={headRef} className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight">
//               Welcome back
//             </h1>
//             <p className="text-white/75 mt-2">Log in to access dashboard, API keys and case reviews.</p>

//             {/* Owl mascot */}
//             <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
//               <Owl cover={show} />
//               <div className="text-xs text-white/60 text-center">Toggle password visibility to make the owl cover eyes 👀</div>
//             </div>

//             <form onSubmit={onSubmit} className="mt-6 space-y-5">
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Mail className="h-4 w-4"/></div>
//                 <input
//                   id="email" name="email" type="email" autoComplete="email"
//                   value={email} onChange={e=>setEmail(e.currentTarget.value)}
//                   className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Lock className="h-4 w-4"/></div>
//                 <input
//                   id="password" name="password" autoComplete="current-password"
//                   type={show ? "text" : "password"}
//                   value={pw} onChange={e=>setPw(e.currentTarget.value)} onKeyUp={onPwKey} onKeyDown={onPwKey}
//                   className="w-full pl-9 pr-10 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                   placeholder="Password"
//                 />
//                 <button type="button" aria-label="Toggle password"
//                   onClick={()=>setShow(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {show ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
//                 </button>
//                 {caps && (
//                   <div className="mt-2 text-xs text-amber-300 inline-flex items-center gap-1">
//                     <AlertTriangle className="h-3.5 w-3.5" /> Caps Lock is ON
//                   </div>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//               >
//                 Log In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition"/>
//               </button>

//               <div className="flex items-center justify-between text-sm">
//                 <Link to="/register" className="text-[#35E0FF] hover:underline inline-flex items-center gap-1">
//                   Create account <ArrowRight className="h-3.5 w-3.5"/>
//                 </Link>
//                 <button type="button" onClick={()=>nav("/demo")} className="text-white/80 hover:text-white">Try a live demo →</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>

//       <style>{`::selection{background:${ACCENT};color:#0b1220}`}</style>
//     </div>
//   );
// };

// export default Login;










//<-------------------------------------------------------------------------------------------------------------------------------------------













//<----------------------------------------------------------------------------------------------------------------------------------------------------




/* =====================================================================
   src/pages/Login.tsx
   FIX: eyes no longer always closed (no mount animation; state-aware)
   Bigger layout retained; pupils freeze when covered
===================================================================== */

// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import { Mail, Lock, Eye, EyeOff, LogIn, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";

// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const clamp = (v:number, lo:number, hi:number)=>Math.max(lo, Math.min(hi, v));

// function ScrollProgress(){
//   const bar = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const el = bar.current!;
//     const onScroll = ()=>{
//       const d = document.documentElement;
//       const p = Math.max(0, Math.min(1, scrollY / Math.max(1, d.scrollHeight - d.clientHeight)));
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     addEventListener("scroll", onScroll, { passive:true });
//     addEventListener("resize", onScroll);
//     return ()=>{ removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
//   },[]);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
//       <div ref={bar} className={`origin-left h-full ${GRADIENT}`} style={{ transform:"scaleX(0)" }} />
//     </div>
//   );
// }
// function CursorParticles(){
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const dot = dotRef.current!;
//     const move = (e:MouseEvent)=> dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     addEventListener("mousemove", move, { passive:true });
//     return ()=> removeEventListener("mousemove", move);
//   },[]);
//   useEffect(()=>{
//     type P={x:number;y:number;vx:number;vy:number;life:number};
//     const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
//     let raf=0, dpr=Math.max(1, devicePixelRatio||1);
//     const resize=()=>{
//       const w=innerWidth,h=innerHeight;
//       dpr=Math.max(1, devicePixelRatio||1);
//       cvs.width=Math.floor(w*dpr); cvs.height=Math.floor(h*dpr);
//       cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
//       ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr); ctx.globalCompositeOperation="lighter";
//     };
//     resize(); addEventListener("resize", resize);
//     const parts:P[]=[];
//     const spawn=(x:number,y:number)=>{ for(let i=0;i<3;i++){ const a=Math.random()*Math.PI*2,s=Math.random()*1.2+.6; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1}); } };
//     const onMove=(e:MouseEvent)=>spawn(e.clientX,e.clientY);
//     addEventListener("mousemove", onMove);
//     const loop=()=>{
//       ctx.clearRect(0,0,innerWidth,innerHeight);
//       for(let i=parts.length-1;i>=0;i--){
//         const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
//         const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
//         g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`); g.addColorStop(1,"rgba(124,92,255,0)");
//         ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
//         if(p.life<.05) parts.splice(i,1);
//       }
//       raf=requestAnimationFrame(loop);
//     };
//     raf=requestAnimationFrame(loop);
//     return ()=>{ cancelAnimationFrame(raf); removeEventListener("mousemove", onMove); removeEventListener("resize", resize); };
//   },[]);
//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9997]" />
//       <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}/>
//     </>
//   );
// }

// /* Owl mascot with rock-solid eyelids logic */
// function Owl({ cover }:{ cover:boolean }){
//   const pupilsRef = useRef<SVGGElement>(null);
//   const lidsRef   = useRef<SVGGElement>(null);
//   const coverRef  = useRef(cover);
//   const prevCover = useRef(cover);
//   const OPEN_T = -22;
//   const CLOSED_T = 0;

//   useEffect(()=>{ coverRef.current = cover; },[cover]);

//   // Initial pose (no animation) -> respect current cover
//   useEffect(()=>{
//     if(lidsRef.current){
//       lidsRef.current.setAttribute("transform", `translate(0,${cover ? CLOSED_T : OPEN_T})`);
//     }
//     if(pupilsRef.current){
//       pupilsRef.current.setAttribute("opacity", cover ? "0" : "1");
//     }
//   },[]);

//   // Animate only when cover toggles
//   useEffect(()=>{
//     if(prevCover.current !== cover){
//       animate(lidsRef.current!, { transform: [`translate(0,${prevCover.current ? CLOSED_T : OPEN_T}px)`, `translate(0,${cover ? CLOSED_T : OPEN_T}px)`] }, { duration:240, easing:"easeOutCubic" });
//       animate(pupilsRef.current!, { opacity: [prevCover.current ? 0 : 1, cover ? 0 : 1] }, { duration:160 });
//       prevCover.current = cover;
//     }
//   }, [cover]);

//   // Eye tracking (freeze when covered)
//   useEffect(()=>{
//     const eyes = pupilsRef.current!;
//     const onMove=(e:MouseEvent)=>{
//       if(coverRef.current) return;
//       const svg = eyes.closest("svg")!.getBoundingClientRect();
//       const dx = clamp((e.clientX - (svg.left + svg.width/2))/svg.width, -0.12, 0.12);
//       const dy = clamp((e.clientY - (svg.top + svg.height/2))/svg.height, -0.12, 0.12);
//       eyes.setAttribute("transform", `translate(${dx*16}, ${dy*16})`);
//     };
//     addEventListener("mousemove", onMove, { passive:true });
//     return ()=> removeEventListener("mousemove", onMove);
//   },[]);

//   return (
//     <svg viewBox="0 0 240 160" className="w-full h-auto">
//       <ellipse cx="120" cy="90" rx="78" ry="56" fill="#2b2758"/>
//       <circle cx="90" cy="82" r="26" fill="#fff"/>
//       <circle cx="150" cy="82" r="26" fill="#fff"/>
//       <g ref={pupilsRef}>
//         <circle cx="90" cy="82" r="8" fill="#0b1220"/>
//         <circle cx="150" cy="82" r="8" fill="#0b1220"/>
//       </g>
//       <polygon points="120,92 112,106 128,106" fill="#ffb703"/>
//       <g ref={lidsRef} transform={`translate(0,${OPEN_T})`}>
//         <rect x="70" y="70" width="40" height="22" rx="11" fill="#2b2758"/>
//         <rect x="130" y="70" width="40" height="22" rx="11" fill="#2b2758"/>
//       </g>
//     </svg>
//   );
// }

// const Login: React.FC = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pw, setPw] = useState("");
//   const [show, setShow] = useState(false);
//   const [caps, setCaps] = useState(false);

//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent||"";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" "?"&nbsp;":c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(18), duration:300, easing:"easeOutCubic" });
//   },[]);

//   const onPwKey = (e: React.KeyboardEvent<HTMLInputElement>)=>{
//     // @ts-ignore
//     setCaps(e.getModifierState && e.getModifierState("CapsLock"));
//   };

//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     const card = document.getElementById("login-card");
//     if(card){ animate(card, { x:[0,-8,8,-6,6,-4,4,0] }, { duration:420, easing:"easeOutCubic" }); }
//     setTimeout(()=> nav("/demo"), 480);
//   };

//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />

//       <section className="py-12">
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>

//           <div id="login-card" className={`${glass} rounded-3xl p-10`}>
//             <h1 ref={headRef} className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
//               Welcome back
//             </h1>
//             <p className="text-white/75 mt-3 text-lg">Access your dashboard, API keys, and case reviews.</p>

//             <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
//               <Owl cover={show} />
//               <div className="text-xs text-white/60 text-center mt-1">Show password → owl covers eyes</div>
//             </div>

//             <form onSubmit={onSubmit} className="mt-8 space-y-6">
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Mail className="h-5 w-5"/></div>
//                 <input
//                   id="email" name="email" type="email" autoComplete="email"
//                   value={email} onChange={e=>setEmail(e.currentTarget.value)}
//                   className="w-full pl-11 pr-3 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Lock className="h-5 w-5"/></div>
//                 <input
//                   id="password" name="password" autoComplete="current-password"
//                   type={show ? "text" : "password"}
//                   value={pw} onChange={e=>setPw(e.currentTarget.value)} onKeyUp={onPwKey} onKeyDown={onPwKey}
//                   className="w-full pl-11 pr-12 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                   placeholder="Password"
//                 />
//                 <button type="button" aria-label="Toggle password"
//                   onClick={()=>setShow(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
//                   {show ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
//                 </button>
//                 {caps && (
//                   <div className="mt-2 text-sm text-amber-300 inline-flex items-center gap-1">
//                     <AlertTriangle className="h-4 w-4" /> Caps Lock is ON
//                   </div>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-7 py-4 font-semibold inline-flex items-center justify-center gap-2 transition text-base"
//               >
//                 Log In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition"/>
//               </button>

//               <div className="flex items-center justify-between text-sm">
//                 <Link to="/register" className="text-[#35E0FF] hover:underline inline-flex items-center gap-1 text-base">
//                   Create account <ArrowRight className="h-4 w-4"/>
//                 </Link>
//                 <button type="button" onClick={()=>nav("/demo")} className="text-white/90 hover:text-white text-base">
//                   Try a live demo →
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Login;






//<-------------------------------------------------------------------------------------------------------------------------------------------















//<----------------------------------------------------------------------------------------------------------------------------------------------------



// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import { Mail, Lock, Eye, EyeOff, LogIn, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";

// /* theme tokens */
// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const clamp = (v:number, lo:number, hi:number)=>Math.max(lo, Math.min(hi, v));

// /* Top load bar */
// function ScrollProgress(){
//   const bar = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const el = bar.current!;
//     const onScroll = ()=>{
//       const d = document.documentElement;
//       const p = Math.max(0, Math.min(1, scrollY / Math.max(1, d.scrollHeight - d.clientHeight)));
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     addEventListener("scroll", onScroll, { passive:true });
//     addEventListener("resize", onScroll);
//     return ()=>{ removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
//   },[]);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
//       <div ref={bar} className={`origin-left h-full ${GRADIENT}`} style={{ transform:"scaleX(0)" }} />
//     </div>
//   );
// }

// /* Cursor particles (precise) */
// function CursorParticles(){
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const dot = dotRef.current!;
//     const move = (e:MouseEvent)=> dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     addEventListener("mousemove", move, { passive:true });
//     return ()=> removeEventListener("mousemove", move);
//   },[]);
//   useEffect(()=>{
//     type P={x:number;y:number;vx:number;vy:number;life:number};
//     const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
//     let raf=0, dpr=Math.max(1, devicePixelRatio||1);
//     const resize=()=>{
//       const w=innerWidth,h=innerHeight;
//       dpr=Math.max(1, devicePixelRatio||1);
//       cvs.width=Math.floor(w*dpr); cvs.height=Math.floor(h*dpr);
//       cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
//       ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr); ctx.globalCompositeOperation="lighter";
//     };
//     resize(); addEventListener("resize", resize);
//     const parts:P[]=[];
//     const spawn=(x:number,y:number)=>{ for(let i=0;i<3;i++){ const a=Math.random()*Math.PI*2,s=Math.random()*1.2+.6; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1}); } };
//     const onMove=(e:MouseEvent)=>spawn(e.clientX,e.clientY);
//     addEventListener("mousemove", onMove);
//     const loop=()=>{
//       ctx.clearRect(0,0,innerWidth,innerHeight);
//       for(let i=parts.length-1;i>=0;i--){
//         const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
//         const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
//         g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`); g.addColorStop(1,"rgba(124,92,255,0)");
//         ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
//         if(p.life<.05) parts.splice(i,1);
//       }
//       raf=requestAnimationFrame(loop);
//     };
//     raf=requestAnimationFrame(loop);
//     return ()=>{ cancelAnimationFrame(raf); removeEventListener("mousemove", onMove); removeEventListener("resize", resize); };
//   },[]);
//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[5]" />
//       <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[6] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}/>
//     </>
//   );
// }

// /* Full-screen code rain (login also) */
// function CodeRain({ color="#35E0FF" }:{ color?:string }){
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const colorRef = useRef(color);
//   useEffect(()=>{ colorRef.current = color; },[color]);

//   useEffect(()=>{
//     const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
//     let raf=0, columns=0, drops:number[]=[];
//     const chars = "01{}[]()<>=+*-/#$&@AISECURE";
//     const dpr = Math.max(1, devicePixelRatio||1);

//     const resize=()=>{
//       const w = innerWidth, h = innerHeight;
//       cvs.width = Math.floor(w*dpr); cvs.height = Math.floor(h*dpr);
//       cvs.style.width = `${w}px`; cvs.style.height = `${h}px`;
//       ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr);
//       const fontSize = 16;
//       columns = Math.max(1, Math.floor(w / fontSize));
//       drops = new Array(columns).fill(0);
//       ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;
//     };
//     resize(); addEventListener("resize", resize);

//     const loop=()=>{
//       const w = innerWidth, h = innerHeight;
//       ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(0,0,w,h);
//       ctx.fillStyle = colorRef.current;
//       for (let i=0;i<drops.length;i++){
//         const t = chars[Math.floor(Math.random()*chars.length)];
//         const x = i * 16; const y = drops[i] * 16;
//         ctx.fillText(t, x, y);
//         if (y > h && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       }
//       raf=requestAnimationFrame(loop);
//     };
//     raf=requestAnimationFrame(loop);
//     return ()=>{ cancelAnimationFrame(raf); removeEventListener("resize", resize); };
//   },[]);

//   return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-[0.6]" />;
// }

// /* Owl with bulletproof eyelids (open again after toggle) */
// function Owl({ cover }:{ cover:boolean }){
//   const pupilsRef = useRef<SVGGElement>(null);
//   const lidsRef   = useRef<SVGGElement>(null);
//   const coverRef  = useRef(cover);
//   const prevCover = useRef(cover);
//   const OPEN_Y = -22;  // up
//   const CLOSED_Y = 0;  // down covering pupils

//   useEffect(()=>{ coverRef.current = cover; },[cover]);

//   // Initialize without animation
//   useEffect(()=>{
//     if(lidsRef.current){
//       (lidsRef.current as any).style.transform = `translateY(${cover ? CLOSED_Y : OPEN_Y}px)`;
//     }
//     if(pupilsRef.current){
//       (pupilsRef.current as any).style.opacity = cover ? "0" : "1";
//     }
//   },[]);

//   // Animate on toggle only (ensures it opens again)
//   useEffect(()=>{
//     if(prevCover.current === cover) return;
//     const lids = lidsRef.current!;
//     const pupils = pupilsRef.current!;
//     // set explicit start
//     (lids as any).style.transform = `translateY(${prevCover.current ? CLOSED_Y : OPEN_Y}px)`;
//     (pupils as any).style.opacity = prevCover.current ? "0" : "1";

//     // animate to target
//     animate(lids, { transform: `translateY(${cover ? CLOSED_Y : OPEN_Y}px)` }, { duration: 240, easing: "easeOutCubic" });
//     animate(pupils, { opacity: cover ? 0 : 1 }, { duration: 160 });

//     prevCover.current = cover;
//   },[cover]);

//   // Eye tracking (freeze when covered)
//   useEffect(()=>{
//     const eyes = pupilsRef.current!;
//     const onMove=(e:MouseEvent)=>{
//       if(coverRef.current) return;
//       const svg = eyes.closest("svg")!.getBoundingClientRect();
//       const dx = clamp((e.clientX - (svg.left + svg.width/2))/svg.width, -0.12, 0.12);
//       const dy = clamp((e.clientY - (svg.top + svg.height/2))/svg.height, -0.12, 0.12);
//       (eyes as any).style.transform = `translate(${dx*16}px, ${dy*16}px)`;
//     };
//     addEventListener("mousemove", onMove, { passive:true });
//     return ()=> removeEventListener("mousemove", onMove);
//   },[]);

//   return (
//     <svg viewBox="0 0 240 160" className="w-full h-auto">
//       <ellipse cx="120" cy="90" rx="78" ry="56" fill="#2b2758"/>
//       <circle cx="90" cy="82" r="26" fill="#fff"/>
//       <circle cx="150" cy="82" r="26" fill="#fff"/>
//       <g ref={pupilsRef}>
//         <circle cx="90" cy="82" r="8" fill="#0b1220"/>
//         <circle cx="150" cy="82" r="8" fill="#0b1220"/>
//       </g>
//       <polygon points="120,92 112,106 128,106" fill="#ffb703"/>
//       <g ref={lidsRef}>
//         <rect x="70" y="70" width="40" height="22" rx="11" fill="#2b2758"/>
//         <rect x="130" y="70" width="40" height="22" rx="11" fill="#2b2758"/>
//       </g>
//     </svg>
//   );
// }

// const Login: React.FC = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pw, setPw] = useState("");
//   const [show, setShow] = useState(false);
//   const [caps, setCaps] = useState(false);

//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent||"";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" "?"&nbsp;":c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(18), duration:300, easing:"easeOutCubic" });
//   },[]);

//   const onPwKey = (e: React.KeyboardEvent<HTMLInputElement>)=>{
//     // @ts-ignore
//     setCaps(e.getModifierState && e.getModifierState("CapsLock"));
//   };

//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     const card = document.getElementById("login-card");
//     if(card){ animate(card, { x:[0,-8,8,-6,6,-4,4,0] }, { duration:420, easing:"easeOutCubic" }); }
//     setTimeout(()=> nav("/demo"), 480);
//   };

//   return (
//     <div className="pt-16 relative">
//       {/* background layers */}
//       <CodeRain />
//       <ScrollProgress />
//       <CursorParticles />

//       <section className="py-12">
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>

//           <div id="login-card" className={`${glass} rounded-3xl p-10`}>
//             <h1 ref={headRef} className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
//               Welcome back
//             </h1>
//             <p className="text-white/75 mt-3 text-lg">Access your dashboard, API keys, and case reviews.</p>

//             <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
//               <Owl cover={show} />
//               <div className="text-xs text-white/60 text-center mt-1">Toggle password → owl covers eyes</div>
//             </div>

//             <form onSubmit={onSubmit} className="mt-8 space-y-6">
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Mail className="h-5 w-5"/></div>
//                 <input
//                   id="email" name="email" type="email" autoComplete="email"
//                   value={email} onChange={e=>setEmail(e.currentTarget.value)}
//                   className="w-full pl-11 pr-3 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div className="relative">
//                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Lock className="h-5 w-5"/></div>
//                 <input
//                   id="password" name="password" autoComplete="current-password"
//                   type={show ? "text" : "password"}
//                   value={pw} onChange={e=>setPw(e.currentTarget.value)} onKeyUp={onPwKey} onKeyDown={onPwKey}
//                   className="w-full pl-11 pr-12 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                   placeholder="Password"
//                 />
//                 <button type="button" aria-label="Toggle password"
//                   onClick={()=>setShow(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white">
//                   {show ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
//                 </button>
//                 {caps && (
//                   <div className="mt-2 text-sm text-amber-300 inline-flex items-center gap-1">
//                     <AlertTriangle className="h-4 w-4" /> Caps Lock is ON
//                   </div>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-7 py-4 font-semibold inline-flex items-center justify-center gap-2 transition text-base"
//               >
//                 Log In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition"/>
//               </button>

//               <div className="flex items-center justify-between text-sm">
//                 <Link to="/register" className="text-[#35E0FF] hover:underline inline-flex items-center gap-1 text-base">
//                   Create account <ArrowRight className="h-4 w-4"/>
//                 </Link>
//                 <button type="button" onClick={()=>nav("/demo")} className="text-white/90 hover:text-white text-base">
//                   Try a live demo →
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;











//<-------------------------------------------------------------------------------------------------------------------------------------------









//<----------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Mail, Lock, Eye, EyeOff, LogIn, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
// import { animate } from "animejs";

// const GLASS = "bg-white/10 border border-white/15 backdrop-blur-md";
// const GRAD = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";

// /* ---------- Top progress bar ---------- */
// function ScrollProgress() {
//   const bar = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const on = () => {
//       const d = document.documentElement;
//       const p =
//         Math.max(0, Math.min(1, window.scrollY / Math.max(1, d.scrollHeight - d.clientHeight)));
//       if (bar.current) bar.current.style.transform = `scaleX(${p})`;
//     };
//     on();
//     addEventListener("scroll", on, { passive: true });
//     addEventListener("resize", on);
//     return () => {
//       removeEventListener("scroll", on);
//       removeEventListener("resize", on);
//     };
//   }, []);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
//       <div ref={bar} className={`origin-left h-full ${GRAD}`} style={{ transform: "scaleX(0)" }} />
//     </div>
//   );
// }

// /* ---------- Full-page Code Rain (top → bottom) ---------- */
// function CodeRain({ color = "#35E0FF" }: { color?: string }) {
//   const ref = useRef<HTMLCanvasElement>(null);
//   const colorRef = useRef(color);
//   useEffect(() => { colorRef.current = color; }, [color]);

//   useEffect(() => {
//     const cvs = ref.current!;
//     const ctx = cvs.getContext("2d")!;
//     const dpr = Math.max(1, window.devicePixelRatio || 1);

//     let cols = 0;
//     let drops: number[] = [];
//     let raf = 0;
//     const CH = "01{}[]()<>=+*-/#$&@AISECURE";

//     const sizeToDocument = () => {
//       const doc = document.documentElement;
//       const w = window.innerWidth;
//       // Use the FULL document height so rain covers entire page
//       const h = Math.max(doc.scrollHeight, window.innerHeight);

//       cvs.width = Math.floor(w * dpr);
//       cvs.height = Math.floor(h * dpr);
//       cvs.style.width = `${w}px`;
//       cvs.style.height = `${h}px`;

//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//       ctx.font = `16px ui-monospace, SFMono-Regular, Menlo, monospace`;

//       cols = Math.max(1, Math.floor(w / 16));
//       drops = new Array(cols).fill(0);
//     };

//     const loop = () => {
//       const w = cvs.width / dpr;
//       const h = cvs.height / dpr;

//       ctx.fillStyle = "rgba(0,0,0,0.18)";
//       ctx.fillRect(0, 0, w, h);

//       ctx.fillStyle = colorRef.current;
//       for (let i = 0; i < drops.length; i++) {
//         const ch = CH[Math.floor(Math.random() * CH.length)];
//         const x = i * 16;
//         const y = drops[i] * 16;
//         ctx.fillText(ch, x, y);
//         if (y > h && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       }
//       raf = requestAnimationFrame(loop);
//     };

//     sizeToDocument();
//     // Watch both window resizes and body layout changes so the canvas tracks page growth/shrink
//     const ro = new ResizeObserver(sizeToDocument);
//     ro.observe(document.body);
//     addEventListener("resize", sizeToDocument);

//     raf = requestAnimationFrame(loop);
//     return () => {
//       cancelAnimationFrame(raf);
//       removeEventListener("resize", sizeToDocument);
//       ro.disconnect();
//     };
//   }, []);

//   // Put the canvas ABOVE the page background but BELOW content
//   return <canvas ref={ref} className="fixed inset-0 z-0 opacity-60 pointer-events-none" />;
// }

// /* ---------- Cursor sparkle ---------- */
// function CursorParticles() {
//   const cvs = useRef<HTMLCanvasElement>(null);
//   const dot = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const n = dot.current!;
//     const mm = (e: MouseEvent) => (n.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`);
//     addEventListener("mousemove", mm, { passive: true });
//     return () => removeEventListener("mousemove", mm);
//   }, []);
//   useEffect(() => {
//     type P = { x: number; y: number; vx: number; vy: number; life: number };
//     const c = cvs.current!, ctx = c.getContext("2d")!;
//     let dpr = Math.max(1, devicePixelRatio || 1);
//     const parts: P[] = [];
//     let raf = 0;
//     const resize = () => {
//       const w = innerWidth, h = innerHeight;
//       c.width = Math.floor(w * dpr);
//       c.height = Math.floor(h * dpr);
//       c.style.width = `${w}px`;
//       c.style.height = `${h}px`;
//       ctx.setTransform(1, 0, 0, 1, 0, 0);
//       ctx.scale(dpr, dpr);
//       ctx.globalCompositeOperation = "lighter";
//     };
//     const spawn = (x: number, y: number) => {
//       for (let i = 0; i < 3; i++) {
//         const a = Math.random() * Math.PI * 2;
//         const s = Math.random() * 1.2 + 0.6;
//         parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
//       }
//     };
//     const move = (e: MouseEvent) => spawn(e.clientX, e.clientY);
//     const loop = () => {
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//       for (let i = parts.length - 1; i >= 0; i--) {
//         const p = parts[i];
//         p.x += p.vx;
//         p.y += p.vy;
//         p.life *= 0.96;
//         const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
//         g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
//         g.addColorStop(1, "rgba(124,92,255,0)");
//         ctx.fillStyle = g;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
//         ctx.fill();
//         if (p.life < 0.05) parts.splice(i, 1);
//       }
//       raf = requestAnimationFrame(loop);
//     };
//     resize();
//     addEventListener("resize", resize);
//     addEventListener("mousemove", move);
//     raf = requestAnimationFrame(loop);
//     return () => {
//       cancelAnimationFrame(raf);
//       removeEventListener("mousemove", move);
//       removeEventListener("resize", resize);
//     };
//   }, []);
//   return (
//     <>
//       <canvas ref={cvs} className="fixed inset-0 z-[5] pointer-events-none" />
//       <div
//         ref={dot}
//         className="fixed left-0 top-0 z-[6] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
//         style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
//       />
//     </>
//   );
// }

// /* ---------- Panda (unchanged) ---------- */
// function Panda({ cover }: { cover: boolean }) {
//   const lids = useRef<SVGGElement>(null);
//   const pupils = useRef<SVGGElement>(null);
//   const ears = useRef<SVGGElement>(null);
//   const nose = useRef<SVGPolygonElement>(null);
//   const covered = useRef(cover);

//   useEffect(() => {
//     if (lids.current) (lids.current as any).style.transform = `translateY(${cover ? 0 : -26}px)`;
//     if (pupils.current) (pupils.current as any).style.opacity = cover ? "0" : "1";
//   }, []);
//   useEffect(() => {
//     covered.current = cover;
//     if (!lids.current || !pupils.current) return;
//     animate(lids.current, { translateY: cover ? 0 : -26, duration: 200, easing: "easeOutCubic" });
//     animate(pupils.current, { opacity: cover ? 0 : 1, duration: 140, easing: "linear" });
//   }, [cover]);
//   useEffect(() => {
//     const on = (e: MouseEvent) => {
//       if (covered.current || !pupils.current) return;
//       const svg = pupils.current.closest("svg")!.getBoundingClientRect();
//       const dx = Math.max(-0.12, Math.min(0.12, (e.clientX - (svg.left + svg.width / 2)) / svg.width));
//       const dy = Math.max(-0.12, Math.min(0.12, (e.clientY - (svg.top + svg.height / 2)) / svg.height));
//       (pupils.current as any).style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
//     };
//     addEventListener("mousemove", on, { passive: true });
//     return () => removeEventListener("mousemove", on);
//   }, []);
//   useEffect(() => {
//     let id: number | undefined;
//     const blink = () => {
//       if (!lids.current || covered.current) {
//         id = window.setTimeout(blink, 1500);
//         return;
//       }
//       animate(lids.current, { translateY: 0, duration: 70, easing: "easeInCubic" });
//       setTimeout(() => {
//         if (!covered.current && lids.current) {
//           animate(lids.current, { translateY: -26, duration: 110, easing: "easeOutCubic" });
//         }
//       }, 90);
//       id = window.setTimeout(blink, 1400 + Math.random() * 1800);
//     };
//     id = window.setTimeout(blink, 1400);
//     return () => {
//       if (id) clearTimeout(id);
//     };
//   }, []);
//   useEffect(() => {
//     if (!nose.current || !ears.current) return;
//     const onClick = () => {
//       animate(ears.current!, { rotate: [-6, 6, -3, 3, 0], duration: 420, easing: "easeInOutCubic" });
//       animate(nose.current!, { scale: [1, 1.12, 1], duration: 240, easing: "easeOutBack" });
//     };
//     nose.current.addEventListener("click", onClick);
//     return () => nose.current?.removeEventListener("click", onClick);
//   }, []);
//   return (
//     <svg viewBox="0 0 260 180" className="w-full h-auto select-none">
//       <g ref={ears}>
//         <circle cx="70" cy="40" r="22" fill="#0b1220" />
//         <circle cx="190" cy="40" r="22" fill="#0b1220" />
//       </g>
//       <ellipse cx="130" cy="95" rx="86" ry="64" fill="#fff" />
//       <ellipse cx="95" cy="90" rx="26" ry="20" fill="#0b1220" />
//       <ellipse cx="165" cy="90" rx="26" ry="20" fill="#0b1220" />
//       <circle cx="95" cy="90" r="16" fill="#fff" />
//       <circle cx="165" cy="90" r="16" fill="#fff" />
//       <g ref={pupils}>
//         <circle cx="95" cy="90" r="6" fill="#0b1220" />
//         <circle cx="165" cy="90" r="6" fill="#0b1220" />
//       </g>
//       <g ref={lids}>
//         <rect x="79" y="78" width="32" height="14" rx="7" fill="#fff" />
//         <rect x="149" y="78" width="32" height="14" rx="7" fill="#fff" />
//       </g>
//       <polygon ref={nose} points="130,108 120,122 140,122" fill="#ffb703" style={{ cursor: "pointer" }} />
//       <path d="M110,130 Q130,142 150,130" stroke="#0b1220" strokeWidth="3" fill="none" opacity=".55" />
//     </svg>
//   );
// }

// const Login: React.FC = () => {
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [pw, setPw] = useState("");
//   const [show, setShow] = useState(false);
//   const [caps, setCaps] = useState(false);
//   const card = useRef<HTMLDivElement>(null);

//   const shake = () => {
//     if (!card.current) return;
//     animate(card.current, { translateX: [-8, 8, -6, 6, -3, 3, 0], duration: 520, easing: "easeOutCubic" });
//   };

//   const onPwKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     // @ts-ignore
//     setCaps(e.getModifierState && e.getModifierState("CapsLock"));
//   };

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     shake();
//     setTimeout(() => nav("/demo"), 520);
//   };

//   useEffect(() => {
//     const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
//     els.forEach((el) => {
//       const io = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((ent) => {
//             if (!ent.isIntersecting) return;
//             animate(el, {
//               opacity: [{ from: 0, to: 1 }],
//               translateY: [{ from: 20, to: 0 }],
//               duration: 600,
//               easing: "easeOutCubic",
//             });
//             io.unobserve(el);
//           });
//         },
//         { threshold: 0.2 }
//       );
//       io.observe(el);
//     });
//   }, []);

//   return (
//     // Give a stacking context so content sits ABOVE the rain (z-10)
//     <div className="pt-16 relative min-h-screen">
//       <CodeRain />
//       <ScrollProgress />
//       <CursorParticles />

//       {/* Foreground content on top of the background rain */}
//       <div className="relative z-10">
//         <section className="py-12">
//           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//             <button onClick={() => nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//               <ArrowLeft className="h-4 w-4" /> Back
//             </button>

//             <div ref={card} className={`${GLASS} rounded-3xl p-10`}>
//               <div className={`${GLASS} inline-flex items-center rounded-full px-4 py-2`} data-reveal>
//                 <span className="text-sm text-[#35E0FF] font-semibold">Secure login</span>
//               </div>
//               <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight mt-4" data-reveal>
//                 Welcome back
//               </h1>
//               <p className="text-white/75 mt-2 text-base" data-reveal>
//                 Panda blinks, tracks your cursor and covers eyes while your password is visible.
//               </p>

//               <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5" data-reveal>
//                 <Panda cover={show} />
//                 <div className="text-xs text-white/60 text-center mt-1">Click the nose for a wiggle 🐼</div>
//               </div>

//               <form onSubmit={onSubmit} className="mt-8 space-y-6">
//                 <div className="relative">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//                     <Mail className="h-5 w-5" />
//                   </div>
//                   <input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.currentTarget.value)}
//                     className="w-full pl-11 pr-3 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                     placeholder="Email address"
//                   />
//                 </div>

//                 <div className="relative">
//                   <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//                     <Lock className="h-5 w-5" />
//                   </div>
//                   <input
//                     id="password"
//                     type={show ? "text" : "password"}
//                     value={pw}
//                     onChange={(e) => setPw(e.currentTarget.value)}
//                     onKeyUp={onPwKey}
//                     onKeyDown={onPwKey}
//                     className="w-full pl-11 pr-12 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
//                     placeholder="Password"
//                   />
//                   <button
//                     type="button"
//                     aria-label="Toggle password"
//                     onClick={() => setShow((v) => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
//                   >
//                     {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                   </button>
//                   {caps && (
//                     <div className="mt-2 text-sm text-amber-300 inline-flex items-center gap-1">
//                       <AlertTriangle className="h-4 w-4" /> Caps Lock is ON
//                     </div>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-7 py-4 font-semibold inline-flex items-center justify-center gap-2 transition text-base"
//                 >
//                   Log In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition" />
//                 </button>

//                 <div className="flex items-center justify-between text-sm">
//                   <Link to="/register" className="text-[#35E0FF] hover:underline inline-flex items-center gap-1 text-base">
//                     Create account <ArrowRight className="h-4 w-4" />
//                   </Link>
//                   <button type="button" onClick={() => nav("/demo")} className="text-white/90 hover:text-white text-base">
//                     Try a live demo →
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Login;











//<----------------------------Api added----------------------------------------------------------------------------------------------------------------








//<----------------------------------------------------------------------------------------------------------------------------------------------------


import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";
import { animate } from "animejs";
import { useAuth } from "../context/AuthProvider"; // ← NEW

const GLASS = "bg-white/10 border border-white/15 backdrop-blur-md";
const GRAD = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";

/* ---------- Top progress bar ---------- */
function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const d = document.documentElement;
      const p = Math.max(0, Math.min(1, window.scrollY / Math.max(1, d.scrollHeight - d.clientHeight)));
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    on();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
      <div ref={bar} className={`origin-left h-full ${GRAD}`} style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

/* ---------- Full-page Code Rain ---------- */
function CodeRain({ color = "#35E0FF" }: { color?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => {
    const cvs = ref.current!, ctx = cvs.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    let cols = 0, drops: number[] = [], raf = 0;
    const CH = "01{}[]()<>=+*-/#$&@AISECURE";
    const sizeToDocument = () => {
      const doc = document.documentElement;
      const w = window.innerWidth;
      const h = Math.max(doc.scrollHeight, window.innerHeight);
      cvs.width = Math.floor(w * dpr); cvs.height = Math.floor(h * dpr);
      cvs.style.width = `${w}px`; cvs.style.height = `${h}px`;
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr);
      ctx.font = `16px ui-monospace, SFMono-Regular, Menlo, monospace`;
      cols = Math.max(1, Math.floor(w / 16)); drops = new Array(cols).fill(0);
    };
    const loop = () => {
      const w = cvs.width / dpr, h = cvs.height / dpr;
      ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(0,0,w,h);
      ctx.fillStyle = colorRef.current;
      for (let i=0;i<drops.length;i++){ const ch=CH[Math.floor(Math.random()*CH.length)]; const x=i*16, y=drops[i]*16; ctx.fillText(ch,x,y); if (y>h && Math.random()>0.975) drops[i]=0; drops[i]++; }
      raf = requestAnimationFrame(loop);
    };
    sizeToDocument();
    const ro = new ResizeObserver(sizeToDocument); ro.observe(document.body);
    addEventListener("resize", sizeToDocument);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", sizeToDocument); ro.disconnect(); };
  }, []);
  return <canvas ref={ref} className="fixed inset-0 z-0 opacity-60 pointer-events-none" />;
}

/* ---------- Cursor sparkle ---------- */
function CursorParticles() {
  const cvs = useRef<HTMLCanvasElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const n = dot.current!; const mm = (e: MouseEvent) => (n.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`);
    addEventListener("mousemove", mm, { passive: true });
    return () => removeEventListener("mousemove", mm);
  }, []);
  useEffect(() => {
    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const c = cvs.current!, ctx = c.getContext("2d")!;
    let dpr = Math.max(1, devicePixelRatio || 1);
    const parts: P[] = []; let raf = 0;
    const resize = () => {
      const w = innerWidth, h = innerHeight;
      c.width = Math.floor(w * dpr); c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`; c.style.height = `${h}px`;
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr); ctx.globalCompositeOperation = "lighter";
    };
    const spawn = (x:number,y:number)=>{ for(let i=0;i<3;i++){ const a=Math.random()*Math.PI*2, s=Math.random()*1.2+0.6; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1}); } };
    const move = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    const loop = () => {
      ctx.clearRect(0,0,innerWidth,innerHeight);
      for (let i=parts.length-1;i>=0;i--){ const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
        g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`); g.addColorStop(1,"rgba(124,92,255,0)");
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill(); if (p.life<0.05) parts.splice(i,1);
      }
      raf = requestAnimationFrame(loop);
    };
    resize(); addEventListener("resize", resize); addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("mousemove", move); removeEventListener("resize", resize); };
  }, []);
  return (
    <>
      <canvas ref={cvs} className="fixed inset-0 z-[5] pointer-events-none" />
      <div ref={dot} className="fixed left-0 top-0 z-[6] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }} />
    </>
  );
}

/* ---------- Panda ---------- */
function Panda({ cover }: { cover: boolean }) {
  const lids = useRef<SVGGElement>(null);
  const pupils = useRef<SVGGElement>(null);
  const ears = useRef<SVGGElement>(null);
  const nose = useRef<SVGPolygonElement>(null);
  const covered = useRef(cover);
  useEffect(() => {
    if (lids.current) (lids.current as any).style.transform = `translateY(${cover ? 0 : -26}px)`;
    if (pupils.current) (pupils.current as any).style.opacity = cover ? "0" : "1";
  }, []);
  useEffect(() => {
    covered.current = cover;
    if (!lids.current || !pupils.current) return;
    animate(lids.current, { translateY: cover ? 0 : -26, duration: 200, easing: "easeOutCubic" });
    animate(pupils.current, { opacity: cover ? 0 : 1, duration: 140, easing: "linear" });
  }, [cover]);
  useEffect(() => {
    const on = (e: MouseEvent) => {
      if (covered.current || !pupils.current) return;
      const svg = pupils.current.closest("svg")!.getBoundingClientRect();
      const dx = Math.max(-0.12, Math.min(0.12, (e.clientX - (svg.left + svg.width / 2)) / svg.width));
      const dy = Math.max(-0.12, Math.min(0.12, (e.clientY - (svg.top + svg.height / 2)) / svg.height));
      (pupils.current as any).style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
    };
    addEventListener("mousemove", on, { passive: true });
    return () => removeEventListener("mousemove", on);
  }, []);
  useEffect(() => {
    let id: number | undefined;
    const blink = () => {
      if (!lids.current || covered.current) { id = window.setTimeout(blink, 1500); return; }
      animate(lids.current, { translateY: 0, duration: 70, easing: "easeInCubic" });
      setTimeout(() => { if (!covered.current && lids.current) { animate(lids.current, { translateY: -26, duration: 110, easing: "easeOutCubic" }); } }, 90);
      id = window.setTimeout(blink, 1400 + Math.random() * 1800);
    };
    id = window.setTimeout(blink, 1400);
    return () => { if (id) clearTimeout(id); };
  }, []);
  useEffect(() => {
    if (!nose.current || !ears.current) return;
    const onClick = () => {
      animate(ears.current!, { rotate: [-6, 6, -3, 3, 0], duration: 420, easing: "easeInOutCubic" });
      animate(nose.current!, { scale: [1, 1.12, 1], duration: 240, easing: "easeOutBack" });
    };
    nose.current.addEventListener("click", onClick);
    return () => nose.current?.removeEventListener("click", onClick);
  }, []);
  return (
    <svg viewBox="0 0 260 180" className="w-full h-auto select-none">
      <g ref={ears}><circle cx="70" cy="40" r="22" fill="#0b1220" /><circle cx="190" cy="40" r="22" fill="#0b1220" /></g>
      <ellipse cx="130" cy="95" rx="86" ry="64" fill="#fff" />
      <ellipse cx="95" cy="90" rx="26" ry="20" fill="#0b1220" />
      <ellipse cx="165" cy="90" rx="26" ry="20" fill="#0b1220" />
      <circle cx="95" cy="90" r="16" fill="#fff" />
      <circle cx="165" cy="90" r="16" fill="#fff" />
      <g ref={pupils}><circle cx="95" cy="90" r="6" fill="#0b1220" /><circle cx="165" cy="90" r="6" fill="#0b1220" /></g>
      <g ref={lids}><rect x="79" y="78" width="32" height="14" rx="7" fill="#fff" /><rect x="149" y="78" width="32" height="14" rx="7" fill="#fff" /></g>
      <polygon ref={nose} points="130,108 120,122 140,122" fill="#ffb703" style={{ cursor: "pointer" }} />
      <path d="M110,130 Q130,142 150,130" stroke="#0b1220" strokeWidth="3" fill="none" opacity=".55" />
    </svg>
  );
}

const Login: React.FC = () => {
  const nav = useNavigate();
  const { state } = useLocation() as { state?: { from?: string } };
  const { login } = useAuth();                // ← NEW

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [caps, setCaps] = useState(false);
  const [loading, setLoading] = useState(false);     // ← NEW
  const [err, setErr] = useState<string | null>(null); // ← NEW
  const card = useRef<HTMLDivElement>(null);

  const shake = () => {
    if (!card.current) return;
    animate(card.current, { translateX: [-8, 8, -6, 6, -3, 3, 0], duration: 520, easing: "easeOutCubic" });
  };

  const onPwKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // @ts-ignore
    setCaps(e.getModifierState && e.getModifierState("CapsLock"));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Please enter a valid email address.");
    if (!pw) return setErr("Please enter your password.");
    try {
      setLoading(true);
      await login(email.trim(), pw);             // ← API CALL
      setTimeout(() => nav(state?.from || "/demo", { replace: true }), 320);
    } catch (e: any) {
      shake();
      setErr(e?.message || "Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    els.forEach((el) => {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((ent) => {
          if (!ent.isIntersecting) return;
          animate(el, { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 20, to: 0 }], duration: 600, easing: "easeOutCubic" });
          io.unobserve(el);
        });
      }, { threshold: 0.2 });
      io.observe(el);
    });
  }, []);

  return (
    <div className="pt-16 relative min-h-screen">
      <CodeRain />
      <ScrollProgress />
      <CursorParticles />

      <div className="relative z-10">
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <div ref={card} className={`${GLASS} rounded-3xl p-10`}>
              <div className={`${GLASS} inline-flex items-center rounded-full px-4 py-2`} data-reveal>
                <span className="text-sm text-[#35E0FF] font-semibold">Secure login</span>
              </div>
              <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight mt-4" data-reveal>
                Welcome back
              </h1>
              <p className="text-white/75 mt-2 text-base" data-reveal>
                Panda blinks, tracks your cursor and covers eyes while your password is visible.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-5" data-reveal>
                <Panda cover={show} />
                <div className="text-xs text-white/60 text-center mt-1">Click the nose for a wiggle 🐼</div>
              </div>

              <form onSubmit={onSubmit} className="mt-8 space-y-6">
                {err && (
                  <div className="rounded-lg border border-white/20 bg-rose/20 text-rose-100 px-3 py-2 text-sm flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" /> {err}
                  </div>
                )}
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    className="w-full pl-11 pr-3 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    id="password"
                    type={show ? "text" : "password"}
                    value={pw}
                    onChange={(e) => setPw(e.currentTarget.value)}
                    onKeyUp={onPwKey}
                    onKeyDown={onPwKey}
                    className="w-full pl-11 pr-12 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    aria-label="Toggle password"
                    onClick={() => setShow((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
                    onMouseEnter={() => (document.body.style.cursor = "pointer")}
                    onMouseLeave={() => (document.body.style.cursor = "default")}
                  >
                    {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  {caps && (
                    <div className="mt-2 text-sm text-amber-300 inline-flex items-center gap-1">
                      <AlertTriangle className="h-4 w-4" /> Caps Lock is ON
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] disabled:opacity-60 text-white px-7 py-4 font-semibold inline-flex items-center justify-center gap-2 transition text-base"
                >
                  {loading ? "Signing in..." : <>Log In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition" /></>}
                </button>

                <div className="flex items-center justify-between text-sm">
                  <Link to="/register" className="text-[#35E0FF] hover:underline inline-flex items-center gap-1 text-base">
                    Create account <ArrowRight className="h-4 w-4" />
                  </Link>
                  {/* <button type="button" onClick={() => nav("/demo")} className="text-white/90 hover:text-white text-base">
                    Try a live demo →
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
