// /* ================================================================
//    src/pages/Register.tsx
//    Futuristic Register page with:
//    - Top load bar, precise cursor particles
//    - Mascot-bot (SVG) that follows mouse & reacts to password strength
//    - Password strength meter (score + animated bars + tips)
//    - Show/Hide password with playful reactions
//    - Motion One (@motionone/dom): animate, stagger (no default anime import)
//    - Fully self-contained (no undefined refs)
// ================================================================= */

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import {
//   User, Mail, Lock, Shield, ArrowRight, CheckCircle2, AlertCircle, Eye, EyeOff, ArrowLeft
// } from "lucide-react";

// /* --------------------- Design Tokens --------------------- */
// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const ACCENT = "#35E0FF";

// /* --------------------- Utilities --------------------- */
// const clamp = (v:number, min:number, max:number)=>Math.max(min, Math.min(max, v));

// /* --------------------- Top Scroll Progress --------------------- */
// function ScrollProgress(){
//   const bar = useRef<HTMLDivElement>(null);
//   useEffect(()=>{
//     const el = bar.current!;
//     const onScroll = ()=>{
//       const doc = document.documentElement;
//       const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
//       const p = clamp(window.scrollY / max, 0, 1);
//       el.style.transform = `scaleX(${p})`;
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive:true });
//     window.addEventListener("resize", onScroll);
//     return ()=>{ window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
//   },[]);
//   return (
//     <div className="fixed inset-x-0 top-0 z-[9999] h-[3px] bg-white/10 pointer-events-none">
//       <div ref={bar} className={`origin-left h-full ${GRADIENT}`} style={{ transform:"scaleX(0)" }} />
//     </div>
//   );
// }

// /* --------------------- Cursor Particles --------------------- */
// function CursorParticles(){
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const dotRef = useRef<HTMLDivElement>(null);

//   useEffect(()=>{
//     const dot = dotRef.current!;
//     const move = (e: MouseEvent)=>{
//       dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     };
//     window.addEventListener("mousemove", move, { passive:true });
//     return ()=> window.removeEventListener("mousemove", move);
//   },[]);

//   useEffect(()=>{
//     type P = { x:number;y:number;vx:number;vy:number;life:number };
//     const cvs = canvasRef.current!, ctx = cvs.getContext("2d")!;
//     let raf=0, dpr = Math.max(1, window.devicePixelRatio||1);
//     const resize=()=>{
//       const w = innerWidth, h = innerHeight;
//       dpr = Math.max(1, window.devicePixelRatio||1);
//       cvs.width = Math.floor(w*dpr); cvs.height = Math.floor(h*dpr);
//       cvs.style.width=`${w}px`; cvs.style.height=`${h}px`;
//       ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr,dpr);
//       ctx.globalCompositeOperation="lighter";
//     };
//     resize(); window.addEventListener("resize", resize);
//     const parts:P[] = [];
//     const spawn=(x:number,y:number)=>{
//       for(let i=0;i<3;i++){
//         const a=Math.random()*Math.PI*2, s=Math.random()*1.2+0.6;
//         parts.push({ x,y, vx:Math.cos(a)*s, vy:Math.sin(a)*s, life:1 });
//       }
//     };
//     const onMove=(e:MouseEvent)=>spawn(e.clientX, e.clientY);
//     window.addEventListener("mousemove", onMove);
//     const loop=()=>{
//       ctx.clearRect(0,0,innerWidth,innerHeight);
//       for(let i=parts.length-1;i>=0;i--){
//         const p=parts[i]; p.x+=p.vx; p.y+=p.vy; p.life*=0.96;
//         const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
//         g.addColorStop(0,`rgba(124,92,255,${0.5*p.life})`);
//         g.addColorStop(1,"rgba(124,92,255,0)");
//         ctx.fillStyle=g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
//         if(p.life<0.05) parts.splice(i,1);
//       }
//       raf=requestAnimationFrame(loop);
//     };
//     raf=requestAnimationFrame(loop);
//     return ()=>{
//       cancelAnimationFrame(raf);
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("resize", resize);
//     };
//   },[]);

//   return (
//     <>
//       <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9997]" />
//       <div
//         ref={dotRef}
//         className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
//         style={{ filter:"drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
//       />
//     </>
//   );
// }

// /* --------------------- Floating Inputs --------------------- */
// function FloatingInput(
//   { id, label, value, onChange, icon:Icon, type="text", required=false }:
//   { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLInputElement>; icon:any; type?:string; required?:boolean; }
// ){
//   const [focus, setFocus] = useState(false);
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//         <Icon className="h-4 w-4" />
//       </div>
//       <input
//         id={id}
//         name={id}
//         value={value}
//         onChange={onChange}
//         onFocus={()=>setFocus(true)}
//         onBlur={()=>setFocus(false)}
//         type={type}
//         required={required}
//         className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         placeholder={label}
//         autoComplete={id}
//       />
//       <label
//         htmlFor={id}
//         className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200
//           ${ (focus || value) ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : "" }`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// /* --------------------- Strength Heuristics --------------------- */
// type Strength = { score: 0|1|2|3|4; label:string; color:string; tips:string[] };
// function measureStrength(pw:string): Strength {
//   let score: 0|1|2|3|4 = 0;
//   const len = pw.length;
//   const hasLower = /[a-z]/.test(pw);
//   const hasUpper = /[A-Z]/.test(pw);
//   const hasNum = /\d/.test(pw);
//   const hasSym = /[^A-Za-z0-9]/.test(pw);
//   const variety = [hasLower, hasUpper, hasNum, hasSym].filter(Boolean).length;

//   if (len >= 12 && variety >= 3) score = 3;
//   if (len >= 16 && variety >= 3) score = 4;
//   else if (len >= 10 && variety >= 2) score = 2;
//   else if (len >= 6) score = 1;

//   const map: Record<number, Strength> = {
//     0: { score:0, label:"Too weak", color:"#ef4444", tips:["Use 12+ characters","Mix upper/lowercase","Add numbers & symbols"] },
//     1: { score:1, label:"Weak", color:"#f97316", tips:["Add more length","Add symbols like !@#","Avoid common words"] },
//     2: { score:2, label:"Okay", color:"#f59e0b", tips:["Make it 12+","Include UPPERcase","Add a special char"] },
//     3: { score:3, label:"Strong", color:"#22c55e", tips:["Great! Consider 16+ for critical accounts"] },
//     4: { score:4, label:"Excellent", color:"#10b981", tips:["Keep it unique—don’t reuse"] },
//   };
//   return map[score];
// }

// /* --------------------- Mascot Bot (eyes follow, reacts) --------------------- */
// function MascotBot({ mood, hideEyes }:{ mood:"sad"|"neutral"|"happy"|"pro"; hideEyes:boolean }){
//   const faceRef = useRef<SVGCircleElement>(null);
//   const pupilsRef = useRef<SVGGElement>(null);
//   const cheeksRef = useRef<SVGGElement>(null);
//   const handsRef = useRef<SVGGElement>(null);

//   useEffect(()=>{
//     // mood color & subtle bounce
//     const color = mood==="sad" ? "#ef4444" : mood==="neutral" ? "#f59e0b" : mood==="happy" ? "#22c55e" : "#35E0FF";
//     animate(faceRef.current!, { fill: [null, color] }, { duration:250 });
//     animate(cheeksRef.current!, { opacity: [0.15, mood==="happy"||mood==="pro" ? 0.5 : 0.2] }, { duration:250 });
//     animate(pupilsRef.current!, { transform: ["translate(0,0)","translate(0,0)"] }, { duration:150 }); // reset slight
//   }, [mood]);

//   useEffect(()=>{
//     // cover eyes if hideEyes
//     animate(handsRef.current!, { transform: [ hideEyes ? "translate(0,0)" : "translate(0,-22px)" ] }, { duration:220, easing:"easeOutCubic" });
//   }, [hideEyes]);

//   useEffect(()=>{
//     const eyes = pupilsRef.current!;
//     const onMove=(e:MouseEvent)=>{
//       const svg = eyes.closest("svg")!.getBoundingClientRect();
//       const cx = svg.left + svg.width/2;
//       const cy = svg.top + svg.height/2;
//       const dx = clamp((e.clientX - cx)/svg.width, -0.12, 0.12);
//       const dy = clamp((e.clientY - cy)/svg.height, -0.12, 0.12);
//       eyes.setAttribute("transform", `translate(${dx*22}, ${dy*22})`);
//     };
//     window.addEventListener("mousemove", onMove, { passive:true });
//     return ()=> window.removeEventListener("mousemove", onMove);
//   },[]);

//   return (
//     <svg viewBox="0 0 220 140" className="w-full h-auto">
//       {/* face */}
//       <circle ref={faceRef} cx="110" cy="70" r="54" fill="#6C63FF" />
//       {/* eyes */}
//       <g>
//         <circle cx="85" cy="65" r="16" fill="#fff"/>
//         <circle cx="135" cy="65" r="16" fill="#fff"/>
//         <g ref={pupilsRef}>
//           <circle cx="85" cy="65" r="6" fill="#0b1220"/>
//           <circle cx="135" cy="65" r="6" fill="#0b1220"/>
//         </g>
//       </g>
//       {/* mouth */}
//       {mood==="sad" && <path d="M82 95 Q110 80 138 95" stroke="#0b1220" strokeWidth="4" fill="none" />}
//       {mood==="neutral" && <line x1="90" y1="95" x2="130" y2="95" stroke="#0b1220" strokeWidth="4" />}
//       {(mood==="happy" || mood==="pro") && <path d="M82 90 Q110 110 138 90" stroke="#0b1220" strokeWidth="4" fill="none" />}
//       {/* cheeks */}
//       <g ref={cheeksRef} opacity="0.2">
//         <circle cx="70" cy="78" r="8" fill="#ff6b6b" />
//         <circle cx="150" cy="78" r="8" fill="#ff6b6b" />
//       </g>
//       {/* hands to cover eyes */}
//       <g ref={handsRef} transform="translate(0,-22)">
//         <rect x="66" y="38" rx="8" ry="8" width="22" height="20" fill="#4b3dc8"/>
//         <rect x="132" y="38" rx="8" ry="8" width="22" height="20" fill="#4b3dc8"/>
//       </g>
//       {/* badge */}
//       <g>
//         <rect x="98" y="16" rx="6" ry="6" width="24" height="12" fill="#0b1220" />
//         <Shield x="100" y="18" width="10" height="10" />
//       </g>
//     </svg>
//   );
// }

// /* --------------------- Register Page --------------------- */
// const Register: React.FC = () => {
//   const nav = useNavigate();

//   // hero copy char-by-char
//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent || "";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" " ? "&nbsp;" : c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity: [0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(20), duration: 330, easing:"easeOutCubic" });
//   },[]);

//   const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
//   const [showPw, setShowPw] = useState(false);
//   const [showPw2, setShowPw2] = useState(false);

//   const s = measureStrength(form.password);
//   const mood: "sad"|"neutral"|"happy"|"pro" =
//     s.score<=1 ? "sad" : s.score===2 ? "neutral" : s.score===3 ? "happy" : "pro";

//   useEffect(()=>{
//     // animate strength bars
//     const bars = document.querySelectorAll("[data-strength-bar]");
//     bars.forEach((b, i)=>{
//       const active = i < s.score;
//       animate(b as Element, { backgroundColor: [null, active ? s.color : "rgba(255,255,255,0.15)"], scale:[active?0.9:1, active?1:1] }, { duration:220 });
//     });
//     // glow on strength label
//     const lab = document.getElementById("strength-label");
//     if(lab) animate(lab, { color:[null, s.color] }, { duration:200 });
//   }, [s]);

//   // submit (just route to /login after pretend success)
//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     if(form.password !== form.confirm){
//       alert("Passwords do not match.");
//       return;
//     }
//     // playful check mark pulse
//     const check = document.getElementById("reg-check");
//     if(check) animate(check, { scale:[0.8,1.2,1], opacity:[0,1,1] }, { duration:420, easing:"easeOutCubic" });
//     // navigate
//     setTimeout(()=> nav("/login"), 500);
//   };

//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />

//       {/* background grids */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute inset-0 opacity-[0.10]" style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//         }} />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_18%_10%,rgba(124,92,255,0.22),transparent_60%)]" />
//         <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_82%_20%,rgba(53,224,255,0.18),transparent_60%)]" />
//       </div>

//       {/* Hero */}
//       <section className="py-12">
//         <div className="mx-10 max-w-none">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>
//           <div className={`${glass} rounded-3xl p-8 grid lg:grid-cols-[1.05fr,0.95fr] gap-10 items-center`}>
//             <div>
//               <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-4`}>
//                 <Shield className="h-4 w-4 text-[#35E0FF] mr-2" />
//                 <span className="text-sm text-[#35E0FF] font-semibold">Secure account setup</span>
//               </div>
//               <h1 ref={headRef} className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
//                 Create your FraudBuster account
//               </h1>
//               <p className="text-white/75 mt-3">
//                 One account for dashboard, API keys, and audit exports. Our bot will cheer you on as your password gets stronger 💪.
//               </p>

//               {/* Mascot */}
//               <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
//                 <MascotBot mood={mood} hideEyes={showPw} />
//                 <div className="flex items-center gap-2 justify-between">
//                   <div className="text-sm" id="strength-label" style={{ color:s.color }}>
//                     Strength: <span className="font-semibold">{s.label}</span>
//                   </div>
//                   <div className="flex gap-1 w-36">
//                     {Array.from({length:4}).map((_,i)=>(
//                       <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
//                     ))}
//                   </div>
//                 </div>
//                 {s.tips?.length>0 && (
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {s.tips.slice(0,3).map((t,i)=>(
//                       <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">{t}</span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={onSubmit} className="space-y-5">
//               <FloatingInput id="name" label="Full Name" icon={User}
//                 value={form.name} onChange={e=>setForm({...form, name:e.currentTarget.value})} />
//               <FloatingInput id="email" label="Email Address" icon={Mail} type="email"
//                 value={form.email} onChange={e=>setForm({...form, email:e.currentTarget.value})} />
//               {/* Password */}
//               <div className="relative">
//                 <FloatingInput id="password" label="Password" icon={Lock} type={showPw ? "text" : "password"}
//                   value={form.password} onChange={e=>setForm({...form, password:e.currentTarget.value})} />
//                 <button type="button" aria-label="Toggle password" onClick={()=>setShowPw(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
//                 </button>
//               </div>
//               <div className="relative">
//                 <FloatingInput id="confirm" label="Confirm Password" icon={Lock} type={showPw2 ? "text" : "password"}
//                   value={form.confirm} onChange={e=>setForm({...form, confirm:e.currentTarget.value})} />
//                 <button type="button" aria-label="Toggle confirm" onClick={()=>setShowPw2(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw2 ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <div className="inline-flex items-center gap-2 text-white/80">
//                   <CheckCircle2 id="reg-check" className="h-4 w-4 opacity-0" />
//                   Security checks pass automatically as you type
//                 </div>
//                 <Link to="/login" className="text-[#35E0FF] hover:underline">Have an account? Login</Link>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//               >
//                 Continue <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <style>{`::selection{background:${ACCENT};color:#0b1220}`}</style>
//     </div>
//   );
// };

// export default Register;















//<------------------new design tried----------------------------------------------------->












//<--------------------new design tried----------------------------------------------------->

/* =====================================================================
   src/pages/Register.tsx
   RobotBuddy + Code Rain + Strength-synced color + raised open-lids
===================================================================== */

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import { User, Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// /* ---------- tokens ---------- */
// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const clamp = (v:number, lo:number, hi:number)=>Math.max(lo, Math.min(hi, v));

// /* ---------- top scroll bar ---------- */
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

// /* ---------- precise cursor glow + particles ---------- */
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

// /* ---------- Code Rain background (color follows strength) ---------- */
// function CodeRain({ color }:{ color:string }){
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
//       ctx.fillStyle = "rgba(0,0,0,0.16)"; ctx.fillRect(0,0,w,h);
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

//   return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-[0.5]" />;
// }

// /* ---------- Floating Input ---------- */
// function FloatingInput(
//   { id, label, value, onChange, icon:Icon, type="text", required=false }:
//   { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLInputElement>; icon:any; type?:string; required?:boolean; }
// ){
//   const [focus, setFocus] = useState(false);
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//         <Icon className="h-4 w-4" />
//       </div>
//       <input
//         id={id}
//         name={id}
//         value={value}
//         onChange={onChange}
//         onFocus={()=>setFocus(true)}
//         onBlur={()=>setFocus(false)}
//         type={type}
//         required={required}
//         className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         placeholder={label}
//         autoComplete={id}
//       />
//       <label
//         htmlFor={id}
//         className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200
//           ${ (focus || value) ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : "" }`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// /* ---------- Strength via class presence + length weighting ---------- */
// type Strength = { level:0|1|2|3|4; label:string; color:string; tips:string[] };
// function measureStrength(pw:string): Strength {
//   const len = pw.length;
//   const hasLower = /[a-z]/.test(pw);
//   const hasUpper = /[A-Z]/.test(pw);
//   const hasNum   = /\d/.test(pw);
//   const hasSym   = /[^A-Za-z0-9]/.test(pw);

//   const classCount = [hasLower,hasUpper,hasNum,hasSym].filter(Boolean).length; // 0..4
//   const lenPts = len >= 20 ? 4 : len >= 16 ? 3 : len >= 12 ? 2 : len >= 8 ? 1 : 0; // 0..4
//   const total = classCount + lenPts; // 0..8
//   let level:0|1|2|3|4 = 0;
//   if (total >= 7) level = 4;
//   else if (total >= 5) level = 3;
//   else if (total >= 3) level = 2;
//   else if (total >= 1) level = 1;

//   const map: Record<number, Strength> = {
//     0: { level:0, label:"Too weak",  color:"#ef4444", tips:["Use lower+UPPER+digits+symbols","Aim 12+ chars"] },
//     1: { level:1, label:"Weak",      color:"#f97316", tips:["Add symbols like !@#","Increase length"] },
//     2: { level:2, label:"Okay",      color:"#f59e0b", tips:["Include UPPERcase & digits","Go 12–16 chars"] },
//     3: { level:3, label:"Strong",    color:"#22c55e", tips:["Great! Unique per site","Consider 16+"] },
//     4: { level:4, label:"Excellent", color:"#10b981", tips:["Keep it private & unique"] },
//   };
//   return map[level];
// }

// /* ---------- RobotBuddy mascot ----------
//    - Eyes follow cursor; shutters (eyelids) open/close with cover state
//    - Pupils freeze when covered
//    - Antenna wiggles stronger when typing fast; color follows strength
//    - Open lids raised higher (translateY(-30px))
// -------------------------------------------------- */
// function RobotBuddy({ cover, accent, typingImpulse }:{ cover:boolean; accent:string; typingImpulse:number }){
//   const pupilsRef = useRef<SVGGElement>(null);
//   const lidsRef   = useRef<SVGGElement>(null);
//   const antennaRef= useRef<SVGLineElement>(null);
//   const coverRef  = useRef(cover);
//   const prevCover = useRef(cover);
//   const OPEN_T = -30; // raised higher
//   const CLOSED_T = 0;

//   useEffect(()=>{ coverRef.current = cover; },[cover]);

//   // Initial pose (no animation on mount to avoid flicker)
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
//       animate(lidsRef.current!, { transform: [`translate(0,${prevCover.current ? CLOSED_T : OPEN_T}px)`, `translate(0,${cover ? CLOSED_T : OPEN_T}px)`] }, { duration:260, easing:"easeOutCubic" });
//       animate(pupilsRef.current!, { opacity: [prevCover.current ? 0 : 1, cover ? 0 : 1] }, { duration:180 });
//       prevCover.current = cover;
//     }
//   },[cover]);

//   // Eye tracking (frozen when covered)
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

//   // Antenna wiggle
//   useEffect(()=>{
//     const amp = clamp(typingImpulse, 0, 1);
//     animate(antennaRef.current!, { x2:[12-6*amp, 12+6*amp] }, { duration:300, easing:"easeInOutCubic" });
//   }, [typingImpulse]);

//   return (
//     <svg viewBox="0 0 260 180" className="w-full h-auto">
//       {/* head */}
//       <rect x="40" y="40" width="180" height="100" rx="16" fill="#1e1b4b" stroke="rgba(255,255,255,0.15)" />
//       {/* antenna */}
//       <line ref={antennaRef} x1="130" y1="18" x2="130" y2="38" stroke={accent} strokeWidth="4" />
//       <circle cx="130" cy="16" r="6" fill={accent} />
//       {/* eyes frame */}
//       <rect x="60" y="66" width="60" height="36" rx="8" fill="#0b1220"/>
//       <rect x="140" y="66" width="60" height="36" rx="8" fill="#0b1220"/>
//       {/* pupils */}
//       <g ref={pupilsRef}>
//         <rect x="84" y="80" width="12" height="12" rx="3" fill="#35e0ff"/>
//         <rect x="164" y="80" width="12" height="12" rx="3" fill="#35e0ff"/>
//       </g>
//       {/* shutters (eyelids) */}
//       <g ref={lidsRef} transform={`translate(0,${OPEN_T})`}>
//         <rect x="60" y="66" width="60" height="18" rx="8" fill="#1e1b4b"/>
//         <rect x="140" y="66" width="60" height="18" rx="8" fill="#1e1b4b"/>
//       </g>
//       {/* mouth/status */}
//       <rect x="110" y="112" width="40" height="8" rx="4" fill={accent}/>
//     </svg>
//   );
// }

// /* ---------- Page ---------- */
// const Register: React.FC = () => {
//   const nav = useNavigate();

//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent || "";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" " ? "&nbsp;" : c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(20), duration:320, easing:"easeOutCubic" });
//   },[]);

//   const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
//   const [showPw, setShowPw] = useState(false);
//   const [showPw2, setShowPw2] = useState(false);

//   // typing impulse (0..1) to feed robot antenna wiggle
//   const [impulse, setImpulse] = useState(0);
//   const lastKey = useRef<number>(0);
//   const bumpImpulse = ()=>{
//     const now = performance.now();
//     const dt = now - (lastKey.current || now);
//     lastKey.current = now;
//     const val = dt < 120 ? 1 : dt < 240 ? 0.6 : 0.3;
//     setImpulse(val);
//   };
//   useEffect(()=>{
//     if(impulse<=0) return;
//     const id = setTimeout(()=> setImpulse(v=>Math.max(0, v-0.15)), 100);
//     return ()=> clearTimeout(id);
//   }, [impulse]);

//   const strength = measureStrength(form.password);
//   useEffect(()=>{
//     const bars = document.querySelectorAll("[data-strength-bar]");
//     bars.forEach((b, i)=>{
//       const active = i < strength.level;
//       animate(b as Element, { backgroundColor:[null, active ? strength.color : "rgba(255,255,255,0.15)"] }, { duration:220 });
//     });
//     const lab = document.getElementById("strength-label");
//     if(lab) animate(lab, { color:[null, strength.color] }, { duration:200 });
//   }, [strength]);

//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     if(form.password !== form.confirm){
//       alert("Passwords do not match.");
//       return;
//     }
//     const chk = document.getElementById("reg-check");
//     if(chk) animate(chk, { scale:[0.8,1.2,1], opacity:[0,1,1] }, { duration:420, easing:"easeOutCubic" });
//     setTimeout(()=> nav("/login"), 500);
//   };

//   return (
//     <div className="pt-16 relative">
//       <ScrollProgress />
//       <CursorParticles />
//       <CodeRain color={strength.color} />

//       <section className="py-12">
//         <div className="mx-10 max-w-none">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>

//           <div className={`${glass} rounded-3xl p-8 grid xl:grid-cols-[1.1fr,0.9fr] gap-12 items-center`}>
//             <div>
//               <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-4`}>
//                 <span className="text-sm text-[#35E0FF] font-semibold">Create your secure account</span>
//               </div>
//               <h1 ref={headRef} className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
//                 Join FraudBuster
//               </h1>
//               <p className="text-white/75 mt-3">
//                 Meet <b>RobotBuddy</b>—he hides your password with shutter lids and celebrates strong passwords with neon glow.
//                 The code-rain behind adapts to your strength color.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
//                 <RobotBuddy cover={showPw} accent={strength.color} typingImpulse={impulse}/>
//                 <div className="flex items-center gap-2 justify-between mt-2">
//                   <div className="text-sm" id="strength-label" style={{ color: strength.color }}>
//                     Strength: <span className="font-semibold">{strength.label}</span>
//                   </div>
//                   <div className="flex gap-1 w-40">
//                     {Array.from({length:4}).map((_,i)=>(
//                       <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
//                     ))}
//                   </div>
//                 </div>
//                 {strength.tips?.length>0 && (
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {strength.tips.slice(0,3).map((t,i)=>(
//                       <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">{t}</span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <form onSubmit={onSubmit} className="space-y-5" onKeyDown={bumpImpulse}>
//               <FloatingInput id="name" label="Full Name" icon={User}
//                 value={form.name} onChange={e=>setForm({...form, name:e.currentTarget.value})} />
//               <FloatingInput id="email" label="Email Address" icon={Mail} type="email"
//                 value={form.email} onChange={e=>setForm({...form, email:e.currentTarget.value})} />
//               <div className="relative">
//                 <FloatingInput id="password" label="Password" icon={Lock} type={showPw ? "text" : "password"}
//                   value={form.password} onChange={e=>{ setForm({...form, password:e.currentTarget.value}); bumpImpulse(); }} />
//                 <button type="button" aria-label="Toggle password" onClick={()=>setShowPw(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw ? "🙈" : "👀"}
//                 </button>
//               </div>
//               <div className="relative">
//                 <FloatingInput id="confirm" label="Confirm Password" icon={Lock} type={showPw2 ? "text" : "password"}
//                   value={form.confirm} onChange={e=>setForm({...form, confirm:e.currentTarget.value})} />
//                 <button type="button" aria-label="Toggle confirm" onClick={()=>setShowPw2(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw2 ? "🙈" : "👀"}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <div className="inline-flex items-center gap-2 text-white/80">
//                   <CheckCircle2 id="reg-check" className="h-4 w-4 opacity-0" />
//                   Password checks update live
//                 </div>
//                 <Link to="/login" className="text-[#35E0FF] hover:underline">Have an account? Login</Link>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//               >
//                 Continue <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;





//<------------------old design tried----------------------------------------------------->













//<--------------------old design tried----------------------------------------------------->

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { animate, stagger } from "animejs";
// import { User, Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

// /* tokens */
// const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";
// const GRADIENT = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";
// const clamp = (v:number, lo:number, hi:number)=>Math.max(lo, Math.min(hi, v));

// /* top bar */
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

// /* cursor particles */
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

// /* full-screen code rain (strength color) */
// function CodeRain({ color }:{ color:string }){
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

// /* Floating input */
// function FloatingInput(
//   { id, label, value, onChange, icon:Icon, type="text", required=false }:
//   { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLInputElement>; icon:any; type?:string; required?:boolean; }
// ){
//   const [focus, setFocus] = useState(false);
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//         <Icon className="h-4 w-4" />
//       </div>
//       <input
//         id={id}
//         name={id}
//         value={value}
//         onChange={onChange}
//         onFocus={()=>setFocus(true)}
//         onBlur={()=>setFocus(false)}
//         type={type}
//         required={required}
//         className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         placeholder={label}
//         autoComplete={id}
//       />
//       <label
//         htmlFor={id}
//         className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200
//           ${ (focus || value) ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : "" }`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// /* strength calc (classes + length weighted) */
// type Strength = { level:0|1|2|3|4; label:string; color:string; tips:string[] };
// function measureStrength(pw:string): Strength {
//   const len = pw.length;
//   const hasLower = /[a-z]/.test(pw);
//   const hasUpper = /[A-Z]/.test(pw);
//   const hasNum   = /\d/.test(pw);
//   const hasSym   = /[^A-Za-z0-9]/.test(pw);

//   const classCount = [hasLower,hasUpper,hasNum,hasSym].filter(Boolean).length;
//   const lenPts = len >= 20 ? 4 : len >= 16 ? 3 : len >= 12 ? 2 : len >= 8 ? 1 : 0;
//   const total = classCount + lenPts;
//   let level:0|1|2|3|4 = 0;
//   if (total >= 7) level = 4;
//   else if (total >= 5) level = 3;
//   else if (total >= 3) level = 2;
//   else if (total >= 1) level = 1;

//   const map: Record<number, Strength> = {
//     0: { level:0, label:"Too weak",  color:"#ef4444", tips:["Use lower+UPPER+digits+symbols","Aim 12+ chars"] },
//     1: { level:1, label:"Weak",      color:"#f97316", tips:["Add symbols like !@#","Increase length"] },
//     2: { level:2, label:"Okay",      color:"#f59e0b", tips:["Include UPPERcase & digits","Go 12–16 chars"] },
//     3: { level:3, label:"Strong",    color:"#22c55e", tips:["Great! Unique per site","Consider 16+"] },
//     4: { level:4, label:"Excellent", color:"#10b981", tips:["Keep it private & unique"] },
//   };
//   return map[level];
// }

// /* RobotBuddy with raised open lids + LED/antenna pulse & tilt */
// function RobotBuddy({ cover, accent, typingImpulse }:{ cover:boolean; accent:string; typingImpulse:number }){
//   const pupilsRef = useRef<SVGGElement>(null);
//   const lidsRef   = useRef<SVGGElement>(null);
//   const ledRef    = useRef<SVGCircleElement>(null);
//   const stemRef   = useRef<SVGLineElement>(null);
//   const coverRef  = useRef(cover);
//   const prevCover = useRef(cover);
//   const OPEN_Y = -30; // a bit higher (requested)
//   const CLOSED_Y = 0;

//   useEffect(()=>{ coverRef.current = cover; },[cover]);

//   // Initial (no anim)
//   useEffect(()=>{
//     if(lidsRef.current){ (lidsRef.current as any).style.transform = `translateY(${cover ? CLOSED_Y : OPEN_Y}px)`; }
//     if(pupilsRef.current){ (pupilsRef.current as any).style.opacity = cover ? "0" : "1"; }
//   },[]);

//   // Toggle anim
//   useEffect(()=>{
//     if(prevCover.current === cover) return;
//     const lids = lidsRef.current!, pupils=pupilsRef.current!;
//     (lids as any).style.transform = `translateY(${prevCover.current ? CLOSED_Y : OPEN_Y}px)`;
//     (pupils as any).style.opacity = prevCover.current ? "0" : "1";
//     animate(lids, { transform: `translateY(${cover ? CLOSED_Y : OPEN_Y}px)` }, { duration:260, easing:"easeOutCubic" });
//     animate(pupils, { opacity: cover ? 0 : 1 }, { duration:180 });
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

//   // LED pulse & stem tilt on typing
//   useEffect(()=>{
//     const amp = clamp(typingImpulse, 0, 1);
//     animate(ledRef.current!, { r: [6, 6 + 2*amp] }, { duration:220, easing:"easeInOutCubic" });
//     animate(stemRef.current!, { transform: `rotate(${amp*10}deg)` }, { duration:220, easing:"easeInOutCubic" });
//   }, [typingImpulse]);

//   return (
//     <svg viewBox="0 0 260 180" className="w-full h-auto">
//       {/* head */}
//       <rect x="40" y="40" width="180" height="100" rx="16" fill="#1e1b4b" stroke="rgba(255,255,255,0.15)" />
//       {/* antenna: stem tilts; LED pulses & glows */}
//       <g transform="translate(130,28)">
//         <g ref={stemRef} style={{ transformOrigin:"0px 0px" }}>
//           <line x1="0" y1="-10" x2="0" y2="10" stroke={accent} strokeWidth="4" />
//         </g>
//         <circle ref={ledRef} cx="0" cy="-12" r={6} fill={accent} style={{ filter:"drop-shadow(0 0 6px rgba(53,224,255,0.8))" }}/>
//         <circle cx="0" cy="-12" r={10} fill="none" stroke={accent} strokeOpacity={0.35} />
//       </g>
//       {/* eyes frame */}
//       <rect x="60" y="66" width="60" height="36" rx="8" fill="#0b1220"/>
//       <rect x="140" y="66" width="60" height="36" rx="8" fill="#0b1220"/>
//       {/* pupils */}
//       <g ref={pupilsRef}>
//         <rect x="84" y="80" width="12" height="12" rx="3" fill="#35e0ff"/>
//         <rect x="164" y="80" width="12" height="12" rx="3" fill="#35e0ff"/>
//       </g>
//       {/* shutters */}
//       <g ref={lidsRef}>
//         <rect x="60" y="66" width="60" height="18" rx="8" fill="#1e1b4b"/>
//         <rect x="140" y="66" width="60" height="18" rx="8" fill="#1e1b4b"/>
//       </g>
//       {/* mouth/status */}
//       <rect x="110" y="112" width="40" height="8" rx="4" fill={accent}/>
//     </svg>
//   );
// }

// type StrengthType = ReturnType<typeof measureStrength>;

// const Register: React.FC = () => {
//   const nav = useNavigate();

//   const headRef = useRef<HTMLHeadingElement>(null);
//   useEffect(()=>{
//     const el = headRef.current;
//     if(!el) return;
//     const text = el.textContent || "";
//     el.innerHTML = text.split("").map(c=>`<span class="inline-block opacity-0 translate-y-4">${c===" " ? "&nbsp;" : c}</span>`).join("");
//     const spans = el.querySelectorAll("span");
//     animate(spans, { opacity:[0,1], transform:["translateY(16px)","translateY(0)"] }, { delay: stagger(20), duration:320, easing:"easeOutCubic" });
//   },[]);

//   const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
//   const [showPw, setShowPw] = useState(false);
//   const [showPw2, setShowPw2] = useState(false);

//   // typing impulse (0..1) to feed robot antenna wiggle
//   const [impulse, setImpulse] = useState(0);
//   const lastKey = useRef<number>(0);
//   const bumpImpulse = ()=>{
//     const now = performance.now();
//     const dt = now - (lastKey.current || now);
//     lastKey.current = now;
//     const val = dt < 120 ? 1 : dt < 240 ? 0.6 : 0.3;
//     setImpulse(val);
//   };
//   useEffect(()=>{
//     if(impulse<=0) return;
//     const id = setTimeout(()=> setImpulse(v=>Math.max(0, v-0.15)), 100);
//     return ()=> clearTimeout(id);
//   }, [impulse]);

//   const strength:StrengthType = useMemo(()=>measureStrength(form.password), [form.password]);

//   useEffect(()=>{
//     const bars = document.querySelectorAll("[data-strength-bar]");
//     bars.forEach((b, i)=>{
//       const active = i < strength.level;
//       animate(b as Element, { backgroundColor:[null, active ? strength.color : "rgba(255,255,255,0.15)"] }, { duration:220 });
//     });
//     const lab = document.getElementById("strength-label");
//     if(lab) animate(lab, { color:[null, strength.color] }, { duration:200 });
//   }, [strength]);

//   const onSubmit = (e:React.FormEvent)=>{
//     e.preventDefault();
//     if(form.password !== form.confirm){
//       alert("Passwords do not match.");
//       return;
//     }
//     const chk = document.getElementById("reg-check");
//     if(chk) animate(chk, { scale:[0.8,1.2,1], opacity:[0,1,1] }, { duration:420, easing:"easeOutCubic" });
//     setTimeout(()=> nav("/login"), 500);
//   };

//   return (
//     <div className="pt-16 relative">
//       {/* full viewport rain behind content; blur preserved by glass sections */}
//       <CodeRain color={strength.color} />
//       <ScrollProgress />
//       <CursorParticles />

//       <section className="py-12">
//         <div className="mx-10 max-w-none">
//           <button onClick={()=>nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4"/> Back
//           </button>

//           <div className={`${glass} rounded-3xl p-8 grid xl:grid-cols-[1.1fr,0.9fr] gap-12 items-center`}>
//             <div>
//               <div className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-4`}>
//                 <span className="text-sm text-[#35E0FF] font-semibold">Create your secure account</span>
//               </div>
//               <h1 ref={headRef} className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
//                 Join FraudBuster
//               </h1>
//               <p className="text-white/75 mt-3">
//                 Meet <b>RobotBuddy</b>—he hides your password with shutter lids and celebrates strong passwords with a pulsing LED & code rain that adopts your strength color.
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
//                 <RobotBuddy cover={showPw} accent={strength.color} typingImpulse={impulse}/>
//                 <div className="flex items-center gap-2 justify-between mt-2">
//                   <div className="text-sm" id="strength-label" style={{ color: strength.color }}>
//                     Strength: <span className="font-semibold">{strength.label}</span>
//                   </div>
//                   <div className="flex gap-1 w-40">
//                     {Array.from({length:4}).map((_,i)=>(
//                       <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
//                     ))}
//                   </div>
//                 </div>
//                 {strength.tips?.length>0 && (
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {strength.tips.slice(0,3).map((t,i)=>(
//                       <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">{t}</span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <form onSubmit={onSubmit} className="space-y-5" onKeyDown={bumpImpulse}>
//               <FloatingInput id="name" label="Full Name" icon={User}
//                 value={form.name} onChange={e=>setForm({...form, name:e.currentTarget.value})} />
//               <FloatingInput id="email" label="Email Address" icon={Mail} type="email"
//                 value={form.email} onChange={e=>setForm({...form, email:e.currentTarget.value})} />
//               <div className="relative">
//                 <FloatingInput id="password" label="Password" icon={Lock} type={showPw ? "text" : "password"}
//                   value={form.password} onChange={e=>{ setForm({...form, password:e.currentTarget.value}); }} />
//                 <button type="button" aria-label="Toggle password" onClick={()=>setShowPw(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw ? "🙈" : "👀"}
//                 </button>
//               </div>
//               <div className="relative">
//                 <FloatingInput id="confirm" label="Confirm Password" icon={Lock} type={showPw2 ? "text" : "password"}
//                   value={form.confirm} onChange={e=>setForm({...form, confirm:e.currentTarget.value})} />
//                 <button type="button" aria-label="Toggle confirm" onClick={()=>setShowPw2(v=>!v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
//                   {showPw2 ? "🙈" : "👀"}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <div className="inline-flex items-center gap-2 text-white/80">
//                   <CheckCircle2 id="reg-check" className="h-4 w-4 opacity-0" />
//                   Password checks update live
//                 </div>
//                 <Link to="/login" className="text-[#35E0FF] hover:underline">Have an account? Login</Link>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//               >
//                 Continue <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;









//<------------------old design tried----------------------------------------------------->









//<--------------------old design tried----------------------------------------------------->


// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { User, Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
// import { animate, stagger } from "animejs";

// const GLASS = "bg-white/10 border border-white/15 backdrop-blur-md";
// const GRAD = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";

// /* ---------- Top progress ---------- */
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

// /* ---------- Fullscreen Code Rain w/ dynamic color ---------- */
// function CodeRain({ color }: { color: string }) {
//   const ref = useRef<HTMLCanvasElement>(null);
//   const colorRef = useRef(color);
//   useEffect(() => {
//     colorRef.current = color;
//   }, [color]);
//   useEffect(() => {
//     const cvs = ref.current!;
//     const ctx = cvs.getContext("2d")!;
//     const dpr = Math.max(1, devicePixelRatio || 1);
//     let cols = 0;
//     let drops: number[] = [];
//     let raf = 0;
//     const CH = "01{}[]()<>=+*-/#$&@AISECURE";
//     const resize = () => {
//       const w = innerWidth,
//         h = innerHeight;
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
//       const w = innerWidth,
//         h = innerHeight;
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
//     resize();
//     addEventListener("resize", resize);
//     raf = requestAnimationFrame(loop);
//     return () => {
//       cancelAnimationFrame(raf);
//       removeEventListener("resize", resize);
//     };
//   }, []);
//   return <canvas ref={ref} className="fixed inset-0 -z-10 opacity-60 pointer-events-none" />;
// }

// /* ---------- Fireworks when excellent ---------- */
// function Fireworks({ trigger }: { trigger: number }) {
//   const cvs = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     if (!trigger) return;
//     const c = cvs.current!,
//       ctx = c.getContext("2d")!;
//     c.width = innerWidth;
//     c.height = innerHeight;
//     c.style.width = "100%";
//     c.style.height = "100%";
//     let raf = 0;
//     const end = performance.now() + 1800;
//     const parts: { x: number; y: number; vx: number; vy: number; life: number; col: string }[] = [];
//     const cols = ["#10b981", "#22c55e", "#35E0FF", "#6C63FF", "#4AF2C6", "#f59e0b"];
//     const spawn = (x: number, y: number) => {
//       for (let i = 0; i < 50; i++) {
//         const a = Math.random() * Math.PI * 2,
//           s = Math.random() * 2.6 + 0.8;
//         parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, col: cols[(Math.random() * cols.length) | 0] });
//       }
//     };
//     spawn(innerWidth / 2, innerHeight / 2);
//     spawn(innerWidth * 0.25, innerHeight * 0.35);
//     spawn(innerWidth * 0.75, innerHeight * 0.65);
//     const loop = () => {
//       const now = performance.now();
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//       parts.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         p.vy += 0.02;
//         p.life *= 0.96;
//         ctx.globalAlpha = p.life;
//         ctx.fillStyle = p.col;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
//         ctx.fill();
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(loop);
//       if (now > end && parts.every((p) => p.life < 0.05)) cancelAnimationFrame(raf);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf);
//   }, [trigger]);
//   return <canvas ref={cvs} className="fixed inset-0 z-[7] pointer-events-none" />;
// }

// /* ---------- Strength logic ---------- */
// type Strength = { level: 0 | 1 | 2 | 3 | 4; label: string; color: string; tips: string[] };
// function strengthOf(pw: string): Strength {
//   const len = pw.length;
//   const lo = /[a-z]/.test(pw);
//   const up = /[A-Z]/.test(pw);
//   const nu = /\d/.test(pw);
//   const sy = /[^A-Za-z0-9]/.test(pw);
//   const kinds = [lo, up, nu, sy].filter(Boolean).length;
//   const lenPts = len >= 20 ? 4 : len >= 16 ? 3 : len >= 12 ? 2 : len >= 8 ? 1 : 0;
//   const total = kinds + lenPts;
//   let level: 0 | 1 | 2 | 3 | 4 = 0;
//   if (total >= 7) level = 4;
//   else if (total >= 5) level = 3;
//   else if (total >= 3) level = 2;
//   else if (total >= 1) level = 1;
//   const map: Record<number, Strength> = {
//     0: { level: 0, label: "Too weak", color: "#ef4444", tips: ["Use lower+UPPER+digits+symbols", "Aim 12+ chars"] },
//     1: { level: 1, label: "Weak", color: "#f97316", tips: ["Add symbols like !@#", "Increase length"] },
//     2: { level: 2, label: "Okay", color: "#f59e0b", tips: ["Include UPPER & digits", "Go 12–16 chars"] },
//     3: { level: 3, label: "Strong", color: "#22c55e", tips: ["Great! Unique per site", "Consider 16+"] },
//     4: { level: 4, label: "Excellent", color: "#10b981", tips: ["Keep it private & unique"] },
//   };
//   return map[level];
// }

// /* ---------- RobotBuddy ---------- */
// function RobotBuddy({
//   cover,
//   accent,
//   typingImpulse,
//   bigSmile,
// }: {
//   cover: boolean;
//   accent: string;
//   typingImpulse: number;
//   bigSmile: boolean;
// }) {
//   const lids = useRef<SVGGElement>(null);
//   const pupils = useRef<SVGGElement>(null);
//   const led = useRef<SVGCircleElement>(null);
//   const stem = useRef<SVGLineElement>(null);
//   const mouth = useRef<SVGPathElement>(null);
//   const covered = useRef(cover);

//   useEffect(() => {
//     covered.current = cover;
//   }, [cover]);

//   useEffect(() => {
//     if (lids.current) (lids.current as any).style.transform = `translateY(${cover ? 0 : -30}px)`;
//     if (pupils.current) (pupils.current as any).style.opacity = cover ? "0" : "1";
//     if (mouth.current) mouth.current.setAttribute("d", "M110,112 Q130,118 150,112");
//   }, []);

//   useEffect(() => {
//     if (!lids.current || !pupils.current) return;
//     animate(lids.current, { translateY: cover ? 0 : -30, duration: 220, easing: "easeOutCubic" });
//     animate(pupils.current, { opacity: cover ? 0 : 1, duration: 160, easing: "linear" });
//   }, [cover]);

//   // pupils track cursor
//   useEffect(() => {
//     const on = (e: MouseEvent) => {
//       if (covered.current || !pupils.current) return;
//       const svg = pupils.current.closest("svg")!.getBoundingClientRect();
//       const dx = Math.max(-0.12, Math.min(0.12, (e.clientX - (svg.left + svg.width / 2)) / svg.width));
//       const dy = Math.max(-0.12, Math.min(0.12, (e.clientY - (svg.top + svg.height / 2)) / svg.height));
//       (pupils.current as any).style.transform = `translate(${dx * 16}px, ${dy * 16}px)`;
//     };
//     addEventListener("mousemove", on, { passive: true });
//     return () => removeEventListener("mousemove", on);
//   }, []);

//   // LED & stem respond to typing
//   useEffect(() => {
//     const amp = Math.max(0, Math.min(1, typingImpulse));
//     if (led.current) animate(led.current, { r: [6, 6 + 2 * amp], duration: 180, easing: "easeInOutCubic" });
//     if (stem.current) animate(stem.current, { rotate: amp * 10, duration: 180, easing: "easeInOutCubic" });
//   }, [typingImpulse]);

//   // mouth morph
//   useEffect(() => {
//     if (!mouth.current) return;
//     const d = bigSmile ? "M108,112 Q130,136 152,112" : "M110,112 Q130,118 150,112";
//     mouth.current.setAttribute("d", d);
//   }, [bigSmile]);

//   return (
//     <svg viewBox="0 0 260 180" className="w-full h-auto select-none">
//       <rect x="40" y="40" width="180" height="100" rx="16" fill="#1e1b4b" stroke="rgba(255,255,255,0.15)" />
//       <g transform="translate(130,28)">
//         <g ref={stem} style={{ transformOrigin: "0px 0px" }}>
//           <line x1="0" y1="-10" x2="0" y2="10" stroke={accent} strokeWidth="4" />
//         </g>
//         <circle ref={led} cx="0" cy="-12" r={6} fill={accent} style={{ filter: "drop-shadow(0 0 6px rgba(53,224,255,0.8))" }} />
//         <circle cx="0" cy="-12" r={10} fill="none" stroke={accent} strokeOpacity={0.35} />
//       </g>
//       <rect x="60" y="66" width="60" height="36" rx="8" fill="#0b1220" />
//       <rect x="140" y="66" width="60" height="36" rx="8" fill="#0b1220" />
//       <g ref={pupils}>
//         <rect x="84" y="80" width="12" height="12" rx="3" fill={accent} />
//         <rect x="164" y="80" width="12" height="12" rx="3" fill={accent} />
//       </g>
//       <g ref={lids}>
//         <rect x="60" y="66" width="60" height="18" rx="8" fill="#1e1b4b" />
//         <rect x="140" y="66" width="60" height="18" rx="8" fill="#1e1b4b" />
//       </g>
//       <path ref={mouth} d="M110,112 Q130,118 150,112" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
//     </svg>
//   );
// }

// /* ---------- Floating input ---------- */
// function FloatingInput({
//   id,
//   label,
//   value,
//   onChange,
//   icon: Icon,
//   type = "text",
//   required = false,
// }: {
//   id: string;
//   label: string;
//   value: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
//   icon: any;
//   type?: string;
//   required?: boolean;
// }) {
//   const [focus, setFocus] = useState(false);
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
//         <Icon className="h-4 w-4" />
//       </div>
//       <input
//         id={id}
//         name={id}
//         value={value}
//         onChange={onChange}
//         onFocus={() => setFocus(true)}
//         onBlur={() => setFocus(false)}
//         type={type}
//         required={required}
//         className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         placeholder={label}
//         autoComplete={id}
//       />
//       <label
//         htmlFor={id}
//         className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200 ${
//           focus || value ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : ""
//         }`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// const Register: React.FC = () => {
//   const nav = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [impulse, setImpulse] = useState(0);
//   const lastKey = useRef<number>(0);

//   const bump = () => {
//     const now = performance.now();
//     const dt = now - (lastKey.current || now);
//     lastKey.current = now;
//     setImpulse(dt < 120 ? 1 : dt < 240 ? 0.6 : 0.3);
//     setTimeout(() => setImpulse((v) => Math.max(0, v - 0.15)), 100);
//   };

//   const s = useMemo(() => strengthOf(form.password), [form.password]);
//   const excellentPulse = s.level === 4 ? Date.now() : 0;

//   useEffect(() => {
//     // animate bars and label color
//     const bars = document.querySelectorAll("[data-strength-bar]");
//     bars.forEach((b, i) => {
//       const active = i < s.level;
//       animate(b as Element, {
//         backgroundColor: active ? s.color : "rgba(255,255,255,0.15)",
//         duration: 200,
//         easing: "linear",
//       });
//     });
//     const lab = document.getElementById("strength-label");
//     if (lab) animate(lab, { color: s.color, duration: 200, easing: "linear" });
//   }, [s]);

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (form.password !== form.confirm) {
//       alert("Passwords do not match.");
//       return;
//     }
//     animate("#reg-ok", { scale: [0.8, 1.2, 1], opacity: [0, 1, 1], duration: 420, easing: "easeOutCubic" });
//     setTimeout(() => nav("/login"), 520);
//   };

//   // section reveals
//   useEffect(() => {
//     const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
//     els.forEach((el) => {
//       const io = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((ent) => {
//             if (!ent.isIntersecting) return;
//             animate(
//               el,
//               { opacity: [{ from: 0, to: 1 }], translateY: [{ from: 20, to: 0 }], duration: 600, easing: "easeOutCubic" },
//             );
//             io.unobserve(el);
//           });
//         },
//         { threshold: 0.2 }
//       );
//       io.observe(el);
//     });
//   }, []);

//   return (
//     <div className="pt-16 relative">
//       <CodeRain color={s.color} />
//       {s.level === 4 && <Fireworks trigger={excellentPulse} />}
//       <ScrollProgress />

//       <section className="py-12">
//         <div className="mx-10 max-w-none">
//           <button onClick={() => nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//             <ArrowLeft className="h-4 w-4" /> Back
//           </button>

//           <div className={`${GLASS} rounded-3xl p-8 grid xl:grid-cols-[1.1fr,0.9fr] gap-12 items-center`}>
//             <div>
//               <div className={`${GLASS} inline-flex items-center rounded-full px-4 py-2 mb-4`} data-reveal>
//                 <span className="text-sm text-[#35E0FF] font-semibold">Create your secure account</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight" data-reveal>
//                 Join FraudBuster
//               </h1>
//               <p className="text-white/75 mt-3" data-reveal>
//                 Meet <b>RobotBuddy</b>—shutter lids hide your password; the antenna LED pulses while you type.
//                 Get to <b>Excellent</b> and he smiles with fireworks 🎉
//               </p>

//               <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4" data-reveal>
//                 <RobotBuddy cover={show} accent={s.color} typingImpulse={impulse} bigSmile={s.level === 4} />
//                 <div className="flex items-center gap-2 justify-between mt-2">
//                   <div className="text-sm" id="strength-label" style={{ color: s.color }}>
//                     Strength: <span className="font-semibold">{s.label}</span>
//                   </div>
//                   <div className="flex gap-1 w-40">
//                     {Array.from({ length: 4 }).map((_, i) => (
//                       <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
//                     ))}
//                   </div>
//                 </div>
//                 {s.tips.length > 0 && (
//                   <div className="mt-2 flex flex-wrap gap-2">
//                     {s.tips.slice(0, 3).map((t, i) => (
//                       <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <form onSubmit={onSubmit} className="space-y-5" onKeyDown={bump}>
//               <FloatingInput
//                 id="name"
//                 label="Full Name"
//                 icon={User}
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
//               />
//               <FloatingInput
//                 id="email"
//                 label="Email Address"
//                 icon={Mail}
//                 type="email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
//               />
//               <div className="relative">
//                 <FloatingInput
//                   id="password"
//                   label="Password"
//                   icon={Lock}
//                   type={show ? "text" : "password"}
//                   value={form.password}
//                   onChange={(e) => setForm({ ...form, password: e.currentTarget.value })}
//                 />
//                 <button
//                   type="button"
//                   aria-label="Toggle password"
//                   onClick={() => setShow((v) => !v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                 >
//                   {show ? "🙈" : "👀"}
//                 </button>
//               </div>
//               <div className="relative">
//                 <FloatingInput
//                   id="confirm"
//                   label="Confirm Password"
//                   icon={Lock}
//                   type={show2 ? "text" : "password"}
//                   value={form.confirm}
//                   onChange={(e) => setForm({ ...form, confirm: e.currentTarget.value })}
//                 />
//                 <button
//                   type="button"
//                   aria-label="Toggle confirm"
//                   onClick={() => setShow2((v) => !v)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                 >
//                   {show2 ? "🙈" : "👀"}
//                 </button>
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <div className="inline-flex items-center gap-2 text-white/80">
//                   <CheckCircle2 id="reg-ok" className="h-4 w-4 opacity-0" />
//                   Password checks update live
//                 </div>
//                 <Link to="/login" className="text-[#35E0FF] hover:underline">
//                   Have an account? Login
//                 </Link>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//               >
//                 Continue <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;





//<--------------------old design tried----------------------------------------------------->











//<--------------------old design tried----------------------------------------------------->


// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { User, Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
// import { animate } from "animejs";

// const GLASS = "bg-white/10 border border-white/15 backdrop-blur-md";
// const GRAD = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";

// /* ---------- Top progress ---------- */
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
// function CodeRain({ color }: { color: string }) {
//   const ref = useRef<HTMLCanvasElement>(null);
//   const colorRef = useRef(color);
//   useEffect(() => {
//     colorRef.current = color;
//   }, [color]);

//   useEffect(() => {
//     const cvs = ref.current!;
//     const ctx = cvs.getContext("2d")!;
//     const dpr = Math.max(1, devicePixelRatio || 1);
//     let cols = 0;
//     let drops: number[] = [];
//     let raf = 0;
//     const CH = "01{}[]()<>=+*-/#$&@AISECURE";

//     const sizeToDocument = () => {
//       const doc = document.documentElement;
//       const w = window.innerWidth;
//       const h = Math.max(doc.scrollHeight, window.innerHeight); // full page height

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
//         const ch = CH[(Math.random() * CH.length) | 0];
//         const x = i * 16;
//         const y = drops[i] * 16;
//         ctx.fillText(ch, x, y);
//         if (y > h && Math.random() > 0.975) drops[i] = 0;
//         drops[i]++;
//       }
//       raf = requestAnimationFrame(loop);
//     };

//     sizeToDocument();
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

//   // Visible above page background, below content
//   return <canvas ref={ref} className="fixed inset-0 z-0 opacity-60 pointer-events-none" />;
// }

// /* ---------- Cursor sparkle (same as Login) ---------- */
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
//     const dpr = Math.max(1, devicePixelRatio || 1);
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

// /* ---------- Fireworks when excellent ---------- */
// function Fireworks({ trigger }: { trigger: number }) {
//   const cvs = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     if (!trigger) return;
//     const c = cvs.current!, ctx = c.getContext("2d")!;
//     c.width = innerWidth;
//     c.height = innerHeight;
//     c.style.width = "100%";
//     c.style.height = "100%";
//     let raf = 0;
//     const end = performance.now() + 1800;
//     const parts: { x: number; y: number; vx: number; vy: number; life: number; col: string }[] = [];
//     const cols = ["#10b981", "#22c55e", "#35E0FF", "#6C63FF", "#4AF2C6", "#f59e0b"];
//     const spawn = (x: number, y: number) => {
//       for (let i = 0; i < 50; i++) {
//         const a = Math.random() * Math.PI * 2, s = Math.random() * 2.6 + 0.8;
//         parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, col: cols[(Math.random() * cols.length) | 0] });
//       }
//     };
//     spawn(innerWidth / 2, innerHeight / 2);
//     spawn(innerWidth * 0.25, innerHeight * 0.35);
//     spawn(innerWidth * 0.75, innerHeight * 0.65);
//     const loop = () => {
//       const now = performance.now();
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//       parts.forEach((p) => {
//         p.x += p.vx; p.y += p.vy; p.vy += 0.02; p.life *= 0.96;
//         ctx.globalAlpha = p.life;
//         ctx.fillStyle = p.col;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2);
//         ctx.fill();
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(loop);
//       if (now > end && parts.every((p) => p.life < 0.05)) cancelAnimationFrame(raf);
//     };
//     raf = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(raf);
//   }, [trigger]);

//   // keep fireworks ABOVE the content (z-50 > content z-10)
//   return <canvas ref={cvs} className="fixed inset-0 z-[50] pointer-events-none" />;
// }

// /* ---------- Strength logic ---------- */
// type Strength = { level: 0 | 1 | 2 | 3 | 4; label: string; color: string; tips: string[] };
// function strengthOf(pw: string): Strength {
//   const len = pw.length;
//   const lo = /[a-z]/.test(pw);
//   const up = /[A-Z]/.test(pw);
//   const nu = /\d/.test(pw);
//   const sy = /[^A-Za-z0-9]/.test(pw);
//   const kinds = [lo, up, nu, sy].filter(Boolean).length;
//   const lenPts = len >= 20 ? 4 : len >= 16 ? 3 : len >= 12 ? 2 : len >= 8 ? 1 : 0;
//   const total = kinds + lenPts;
//   let level: 0 | 1 | 2 | 3 | 4 = 0;
//   if (total >= 7) level = 4;
//   else if (total >= 5) level = 3;
//   else if (total >= 3) level = 2;
//   else if (total >= 1) level = 1;
//   const map: Record<number, Strength> = {
//     0: { level: 0, label: "Too weak", color: "#ef4444", tips: ["Use lower+UPPER+digits+symbols", "Aim 12+ chars"] },
//     1: { level: 1, label: "Weak", color: "#f97316", tips: ["Add symbols like !@#", "Increase length"] },
//     2: { level: 2, label: "Okay", color: "#f59e0b", tips: ["Include UPPER & digits", "Go 12–16 chars"] },
//     3: { level: 3, label: "Strong", color: "#22c55e", tips: ["Great! Unique per site", "Consider 16+"] },
//     4: { level: 4, label: "Excellent", color: "#10b981", tips: ["Keep it private & unique"] },
//   };
//   return map[level];
// }

// /* ---------- RobotBuddy ---------- */
// function RobotBuddy({
//   cover, accent, typingImpulse, bigSmile,
// }: { cover: boolean; accent: string; typingImpulse: number; bigSmile: boolean; }) {
//   const lids = useRef<SVGGElement>(null);
//   const pupils = useRef<SVGGElement>(null);
//   const led = useRef<SVGCircleElement>(null);
//   const stem = useRef<SVGLineElement>(null);
//   const mouth = useRef<SVGPathElement>(null);
//   const covered = useRef(cover);

//   useEffect(() => { covered.current = cover; }, [cover]);

//   useEffect(() => {
//     if (lids.current) (lids.current as any).style.transform = `translateY(${cover ? 0 : -30}px)`;
//     if (pupils.current) (pupils.current as any).style.opacity = cover ? "0" : "1";
//     if (mouth.current) mouth.current.setAttribute("d", "M110,112 Q130,118 150,112");
//   }, []);

//   useEffect(() => {
//     if (!lids.current || !pupils.current) return;
//     animate(lids.current, { translateY: cover ? 0 : -30, duration: 220, easing: "easeOutCubic" });
//     animate(pupils.current, { opacity: cover ? 0 : 1, duration: 160, easing: "linear" });
//   }, [cover]);

//   useEffect(() => {
//     const on = (e: MouseEvent) => {
//       if (covered.current || !pupils.current) return;
//       const svg = pupils.current.closest("svg")!.getBoundingClientRect();
//       const dx = Math.max(-0.12, Math.min(0.12, (e.clientX - (svg.left + svg.width / 2)) / svg.width));
//       const dy = Math.max(-0.12, Math.min(0.12, (e.clientY - (svg.top + svg.height / 2)) / svg.height));
//       (pupils.current as any).style.transform = `translate(${dx * 16}px, ${dy * 16}px)`;
//     };
//     addEventListener("mousemove", on, { passive: true });
//     return () => removeEventListener("mousemove", on);
//   }, []);

//   useEffect(() => {
//     const amp = Math.max(0, Math.min(1, typingImpulse));
//     if (led.current) animate(led.current, { r: [6, 6 + 2 * amp], duration: 180, easing: "easeInOutCubic" });
//     if (stem.current) animate(stem.current, { rotate: amp * 10, duration: 180, easing: "easeInOutCubic" });
//   }, [typingImpulse]);

//   useEffect(() => {
//     if (!mouth.current) return;
//     const d = bigSmile ? "M108,112 Q130,136 152,112" : "M110,112 Q130,118 150,112";
//     mouth.current.setAttribute("d", d);
//   }, [bigSmile]);

//   return (
//     <svg viewBox="0 0 260 180" className="w-full h-auto select-none">
//       <rect x="40" y="40" width="180" height="100" rx="16" fill="#1e1b4b" stroke="rgba(255,255,255,0.15)" />
//       <g transform="translate(130,28)"><g ref={stem} style={{ transformOrigin: "0px 0px" }}>
//         <line x1="0" y1="-10" x2="0" y2="10" stroke={accent} strokeWidth="4" /></g>
//         <circle ref={led} cx="0" cy="-12" r={6} fill={accent} style={{ filter: "drop-shadow(0 0 6px rgba(53,224,255,0.8))" }} />
//         <circle cx="0" cy="-12" r={10} fill="none" stroke={accent} strokeOpacity={0.35} />
//       </g>
//       <rect x="60" y="66" width="60" height="36" rx="8" fill="#0b1220" />
//       <rect x="140" y="66" width="60" height="36" rx="8" fill="#0b1220" />
//       <g ref={pupils}><rect x="84" y="80" width="12" height="12" rx="3" fill={accent} />
//         <rect x="164" y="80" width="12" height="12" rx="3" fill={accent} /></g>
//       <g ref={lids}><rect x="60" y="66" width="60" height="18" rx="8" fill="#1e1b4b" />
//         <rect x="140" y="66" width="60" height="18" rx="8" fill="#1e1b4b" /></g>
//       <path ref={mouth} d="M110,112 Q130,118 150,112" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
//     </svg>
//   );
// }

// /* ---------- Floating input ---------- */
// function FloatingInput({
//   id, label, value, onChange, icon: Icon, type = "text", required = false,
// }: {
//   id: string;
//   label: string;
//   value: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
//   icon: any;
//   type?: string;
//   required?: boolean;
// }) {
//   const [focus, setFocus] = useState(false);
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Icon className="h-4 w-4" /></div>
//       <input
//         id={id} name={id} value={value} onChange={onChange}
//         onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
//         type={type} required={required}
//         className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
//         placeholder={label} autoComplete={id}
//       />
//       <label
//         htmlFor={id}
//         className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200 ${
//           focus || value ? "-top-2.5 translate-y-0 text-xs bg-black/60 px-1 rounded" : ""
//         }`}
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// const Register: React.FC = () => {
//   const nav = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const [impulse, setImpulse] = useState(0);
//   const lastKey = useRef<number>(0);

//   const bump = () => {
//     const now = performance.now();
//     const dt = now - (lastKey.current || now);
//     lastKey.current = now;
//     setImpulse(dt < 120 ? 1 : dt < 240 ? 0.6 : 0.3);
//     setTimeout(() => setImpulse((v) => Math.max(0, v - 0.15)), 100);
//   };

//   const s = useMemo(() => strengthOf(form.password), [form.password]);
//   const excellentPulse = s.level === 4 ? Date.now() : 0;

//   useEffect(() => {
//     const bars = document.querySelectorAll("[data-strength-bar]");
//     bars.forEach((b, i) => {
//       const active = i < s.level;
//       animate(b as Element, {
//         backgroundColor: active ? s.color : "rgba(255,255,255,0.15)",
//         duration: 200, easing: "linear",
//       });
//     });
//     const lab = document.getElementById("strength-label");
//     if (lab) animate(lab, { color: s.color, duration: 200, easing: "linear" });
//   }, [s]);

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (form.password !== form.confirm) {
//       alert("Passwords do not match.");
//       return;
//     }
//     animate("#reg-ok", { scale: [0.8, 1.2, 1], opacity: [0, 1, 1], duration: 420, easing: "easeOutCubic" });
//     setTimeout(() => nav("/login"), 520);
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
//               duration: 600, easing: "easeOutCubic",
//             });
//             io.unobserve(el);
//           });
//         }, { threshold: 0.2 }
//       );
//       io.observe(el);
//     });
//   }, []);

//   return (
//     // wrapper provides stacking context; content sits above rain
//     <div className="pt-16 relative min-h-screen">
//       <CodeRain color={s.color} />
//       <ScrollProgress />
//       <CursorParticles />

//       {/* CONTENT ON TOP OF RAIN */}
//       <div className="relative z-10">
//         <section className="py-12">
//           <div className="mx-10 max-w-none">
//             <button onClick={() => nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
//               <ArrowLeft className="h-4 w-4" /> Back
//             </button>

//             <div className={`${GLASS} rounded-3xl p-8 grid xl:grid-cols-[1.1fr,0.9fr] gap-12 items-center`}>
//               <div>
//                 <div className={`${GLASS} inline-flex items-center rounded-full px-4 py-2 mb-4`} data-reveal>
//                   <span className="text-sm text-[#35E0FF] font-semibold">Create your secure account</span>
//                 </div>
//                 <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight" data-reveal>
//                   Join FraudBuster
//                 </h1>
//                 <p className="text-white/75 mt-3" data-reveal>
//                   Meet <b>RobotBuddy</b>—shutter lids hide your password; the antenna LED pulses while you type.
//                   Get to <b>Excellent</b> and he smiles with fireworks 🎉
//                 </p>

//                 <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4" data-reveal>
//                   <RobotBuddy cover={show} accent={s.color} typingImpulse={impulse} bigSmile={s.level === 4} />
//                   <div className="flex items-center gap-2 justify-between mt-2">
//                     <div className="text-sm" id="strength-label" style={{ color: s.color }}>
//                       Strength: <span className="font-semibold">{s.label}</span>
//                     </div>
//                     <div className="flex gap-1 w-40">
//                       {Array.from({ length: 4 }).map((_, i) => (
//                         <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
//                       ))}
//                     </div>
//                   </div>
//                   {s.tips.length > 0 && (
//                     <div className="mt-2 flex flex-wrap gap-2">
//                       {s.tips.slice(0, 3).map((t, i) => (
//                         <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <form onSubmit={onSubmit} className="space-y-5" onKeyDown={bump}>
//                 <FloatingInput
//                   id="name" label="Full Name" icon={User}
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.currentTarget.value })}
//                 />
//                 <FloatingInput
//                   id="email" label="Email Address" icon={Mail} type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.currentTarget.value })}
//                 />
//                 <div className="relative">
//                   <FloatingInput
//                     id="password" label="Password" icon={Lock} type={show ? "text" : "password"}
//                     value={form.password}
//                     onChange={(e) => setForm({ ...form, password: e.currentTarget.value })}
//                   />
//                   <button
//                     type="button" aria-label="Toggle password"
//                     onClick={() => setShow((v) => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                   >
//                     {show ? "🙈" : "👀"}
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <FloatingInput
//                     id="confirm" label="Confirm Password" icon={Lock} type={show2 ? "text" : "password"}
//                     value={form.confirm}
//                     onChange={(e) => setForm({ ...form, confirm: e.currentTarget.value })}
//                   />
//                   <button
//                     type="button" aria-label="Toggle confirm"
//                     onClick={() => setShow2((v) => !v)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
//                   >
//                     {show2 ? "🙈" : "👀"}
//                   </button>
//                 </div>

//                 <div className="flex items-center justify-between text-sm">
//                   <div className="inline-flex items-center gap-2 text-white/80">
//                     <CheckCircle2 id="reg-ok" className="h-4 w-4 opacity-0" />
//                     Password checks update live
//                   </div>
//                   <Link to="/login" className="text-[#35E0FF] hover:underline">
//                     Have an account? Login
//                   </Link>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
//                 >
//                   Continue <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>

//       {/* fireworks above everything when Excellent */}
//       {s.level === 4 && <Fireworks trigger={excellentPulse} />}
//     </div>
//   );
// };

// export default Register;







//<------------------------------API integration to be done------------------------------------------------->











//<------------------------------API integration to be done------------------------------------------------->

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, Mail, Lock, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import { animate } from "animejs";
import { useAuth } from "../context/AuthProvider"; // ← NEW

const GLASS = "bg-white/10 border border-white/15 backdrop-blur-md";
const GRAD = "bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]";

/* ---------- Top progress ---------- */
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
function CodeRain({ color }: { color: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const colorRef = useRef(color);
  useEffect(() => { colorRef.current = color; }, [color]);
  useEffect(() => {
    const cvs = ref.current!, ctx = cvs.getContext("2d")!;
    const dpr = Math.max(1, devicePixelRatio || 1);
    let cols = 0, drops: number[] = [], raf = 0;
    const CH = "01{}[]()<>=+*-/#$&@AISECURE";
    const sizeToDocument = () => {
      const doc = document.documentElement;
      const w = innerWidth, h = Math.max(doc.scrollHeight, innerHeight);
      cvs.width = Math.floor(w * dpr); cvs.height = Math.floor(h * dpr);
      cvs.style.width = `${w}px`; cvs.style.height = `${h}px`;
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr, dpr);
      ctx.font = `16px ui-monospace, SFMono-Regular, Menlo, monospace`;
      cols = Math.max(1, Math.floor(w / 16)); drops = new Array(cols).fill(0);
    };
    const loop = () => {
      const w = cvs.width / dpr, h = cvs.height / dpr;
      ctx.fillStyle = "rgba(0,0,0,0.18)"; ctx.fillRect(0,0,w,h);
      ctx.fillStyle = colorRef.current;
      for (let i = 0; i < drops.length; i++) {
        const ch = CH[(Math.random() * CH.length) | 0];
        const x = i * 16, y = drops[i] * 16;
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
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
    const dpr = Math.max(1, devicePixelRatio || 1); const parts: P[] = []; let raf = 0;
    const resize = () => {
      const w = innerWidth, h = innerHeight;
      c.width = Math.floor(w * dpr); c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`; c.style.height = `${h}px`;
      ctx.setTransform(1,0,0,1,0,0); ctx.scale(dpr, dpr); ctx.globalCompositeOperation = "lighter";
    };
    const spawn = (x: number, y: number) => { for (let i=0;i<3;i++){ const a=Math.random()*Math.PI*2, s=Math.random()*1.2+0.6; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1}); } };
    const move = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    const loop = () => {
      ctx.clearRect(0,0,innerWidth,innerHeight);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i]; p.x += p.vx; p.y += p.vy; p.life *= 0.96;
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,22);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`); g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x,p.y,22,0,Math.PI*2); ctx.fill();
        if (p.life < 0.05) parts.splice(i,1);
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
      <div ref={dot} className="fixed left-0 top-0 z-[6] -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]" style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }} />
    </>
  );
}

/* ---------- Fireworks ---------- */
function Fireworks({ trigger }: { trigger: number }) {
  const cvs = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!trigger) return;
    const c = cvs.current!, ctx = c.getContext("2d")!;
    c.width = innerWidth; c.height = innerHeight; c.style.width = "100%"; c.style.height = "100%";
    let raf = 0; const end = performance.now() + 1800;
    const parts: { x: number; y: number; vx: number; vy: number; life: number; col: string }[] = [];
    const cols = ["#10b981", "#22c55e", "#35E0FF", "#6C63FF", "#4AF2C6", "#f59e0b"];
    const spawn = (x: number, y: number) => { for (let i=0;i<50;i++){ const a=Math.random()*Math.PI*2, s=Math.random()*2.6+0.8; parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,col:cols[(Math.random()*cols.length)|0]}); } };
    spawn(innerWidth/2, innerHeight/2); spawn(innerWidth*0.25, innerHeight*0.35); spawn(innerWidth*0.75, innerHeight*0.65);
    const loop = () => {
      const now = performance.now(); ctx.clearRect(0,0,innerWidth,innerHeight);
      parts.forEach((p)=>{ p.x+=p.vx; p.y+=p.vy; p.vy+=0.02; p.life*=0.96; ctx.globalAlpha=p.life; ctx.fillStyle=p.col; ctx.beginPath(); ctx.arc(p.x,p.y,2.2,0,Math.PI*2); ctx.fill(); });
      ctx.globalAlpha=1; raf=requestAnimationFrame(loop);
      if (now> end && parts.every((p)=>p.life<0.05)) cancelAnimationFrame(raf);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [trigger]);
  return <canvas ref={cvs} className="fixed inset-0 z-[50] pointer-events-none" />;
}

/* ---------- Strength ---------- */
type Strength = { level: 0 | 1 | 2 | 3 | 4; label: string; color: string; tips: string[] };
function strengthOf(pw: string): Strength {
  const len = pw.length;
  const lo = /[a-z]/.test(pw), up = /[A-Z]/.test(pw), nu = /\d/.test(pw), sy = /[^A-Za-z0-9]/.test(pw);
  const kinds = [lo, up, nu, sy].filter(Boolean).length;
  const lenPts = len >= 20 ? 4 : len >= 16 ? 3 : len >= 12 ? 2 : len >= 8 ? 1 : 0;
  const total = kinds + lenPts;
  let level: 0 | 1 | 2 | 3 | 4 = 0;
  if (total >= 7) level = 4; else if (total >= 5) level = 3; else if (total >= 3) level = 2; else if (total >= 1) level = 1;
  const map: Record<number, Strength> = {
    0: { level: 0, label: "Too weak", color: "#ef4444", tips: ["Use lower+UPPER+digits+symbols", "Aim 12+ chars"] },
    1: { level: 1, label: "Weak", color: "#f97316", tips: ["Add symbols like !@#", "Increase length"] },
    2: { level: 2, label: "Okay", color: "#f59e0b", tips: ["Include UPPER & digits", "Go 12–16 chars"] },
    3: { level: 3, label: "Strong", color: "#22c55e", tips: ["Great! Unique per site", "Consider 16+"] },
    4: { level: 4, label: "Excellent", color: "#10b981", tips: ["Keep it private & unique"] },
  };
  return map[level];
}

/* ---------- RobotBuddy ---------- */
function RobotBuddy({ cover, accent, typingImpulse, bigSmile }:{ cover:boolean; accent:string; typingImpulse:number; bigSmile:boolean; }) {
  const lids = useRef<SVGGElement>(null), pupils = useRef<SVGGElement>(null), led = useRef<SVGCircleElement>(null), stem = useRef<SVGLineElement>(null), mouth = useRef<SVGPathElement>(null);
  const covered = useRef(cover);
  useEffect(()=>{ covered.current=cover; },[cover]);
  useEffect(()=>{ if(lids.current)(lids.current as any).style.transform=`translateY(${cover?0:-30}px)`; if(pupils.current)(pupils.current as any).style.opacity=cover?"0":"1"; if(mouth.current) mouth.current.setAttribute("d","M110,112 Q130,118 150,112"); },[]);
  useEffect(()=>{ if(!lids.current||!pupils.current) return; animate(lids.current,{translateY:cover?0:-30,duration:220,easing:"easeOutCubic"}); animate(pupils.current,{opacity:cover?0:1,duration:160,easing:"linear"}); },[cover]);
  useEffect(()=>{ const on=(e:MouseEvent)=>{ if(covered.current||!pupils.current) return; const svg=pupils.current.closest("svg")!.getBoundingClientRect(); const dx=Math.max(-0.12,Math.min(0.12,(e.clientX-(svg.left+svg.width/2))/svg.width)); const dy=Math.max(-0.12,Math.min(0.12,(e.clientY-(svg.top+svg.height/2))/svg.height)); (pupils.current as any).style.transform=`translate(${dx*16}px, ${dy*16}px)`; }; addEventListener("mousemove",on,{passive:true}); return ()=>removeEventListener("mousemove",on); },[]);
  useEffect(()=>{ const amp=Math.max(0,Math.min(1,typingImpulse)); if(led.current) animate(led.current,{r:[6,6+2*amp],duration:180,easing:"easeInOutCubic"}); if(stem.current) animate(stem.current,{rotate:amp*10,duration:180,easing:"easeInOutCubic"}); },[typingImpulse]);
  useEffect(()=>{ if(!mouth.current) return; const d=bigSmile?"M108,112 Q130,136 152,112":"M110,112 Q130,118 150,112"; mouth.current.setAttribute("d", d); },[bigSmile]);
  return (
    <svg viewBox="0 0 260 180" className="w-full h-auto select-none">
      <rect x="40" y="40" width="180" height="100" rx="16" fill="#1e1b4b" stroke="rgba(255,255,255,0.15)" />
      <g transform="translate(130,28)"><g ref={stem} style={{ transformOrigin:"0px 0px" }}>
        <line x1="0" y1="-10" x2="0" y2="10" stroke={accent} strokeWidth="4" /></g>
        <circle ref={led} cx="0" cy="-12" r={6} fill={accent} style={{ filter:"drop-shadow(0 0 6px rgba(53,224,255,0.8))" }} />
        <circle cx="0" cy="-12" r={10} fill="none" stroke={accent} strokeOpacity={0.35} />
      </g>
      <rect x="60" y="66" width="60" height="36" rx="8" fill="#0b1220" />
      <rect x="140" y="66" width="60" height="36" rx="8" fill="#0b1220" />
      <g ref={pupils}><rect x="84" y="80" width="12" height="12" rx="3" fill={accent} /><rect x="164" y="80" width="12" height="12" rx="3" fill={accent} /></g>
      <g ref={lids}><rect x="60" y="66" width="60" height="18" rx="8" fill="#1e1b4b" /><rect x="140" y="66" width="60" height="18" rx="8" fill="#1e1b4b" /></g>
      <path d="M110,112 Q130,118 150,112" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Floating input ---------- */
function FloatingInput({
  id, label, value, onChange, icon: Icon, type = "text", required = false,
}: { id:string; label:string; value:string; onChange:React.ChangeEventHandler<HTMLInputElement>; icon:any; type?:string; required?:boolean; }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"><Icon className="h-4 w-4" /></div>
      <input
        id={id} name={id} value={value} onChange={onChange}
        onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
        type={type} required={required}
        className="w-full pl-9 pr-3 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder={label} autoComplete={id}
      />
      <label htmlFor={id} className={`pointer-events-none absolute left-9 top-1/2 -translate-y-1/2 text-white/50 transition-all duration-200 ${focus || value ? "-top-2.5 translate-y-4 text-xs bg-black/60 px-1 rounded" : ""}`}>
        {label}
      </label>
    </div>
  );
}

const Register: React.FC = () => {
  const nav = useNavigate();
  const { state } = useLocation() as { state?: { from?: string } };
  const { register } = useAuth();                 // ← NEW

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [impulse, setImpulse] = useState(0);
  const [loading, setLoading] = useState(false);  // ← NEW
  const [err, setErr] = useState<string | null>(null); // ← NEW
  const lastKey = useRef<number>(0);

  const bump = () => {
    const now = performance.now();
    const dt = now - (lastKey.current || now);
    lastKey.current = now;
    setImpulse(dt < 120 ? 1 : dt < 240 ? 0.6 : 0.3);
    setTimeout(() => setImpulse((v) => Math.max(0, v - 0.15)), 100);
  };

  const s = useMemo(() => strengthOf(form.password), [form.password]);
  const excellentPulse = s.level === 4 ? Date.now() : 0;

  useEffect(() => {
    const bars = document.querySelectorAll("[data-strength-bar]");
    bars.forEach((b, i) => {
      const active = i < s.level;
      animate(b as Element, { backgroundColor: active ? s.color : "rgba(255,255,255,0.15)", duration: 200, easing: "linear" });
    });
    const lab = document.getElementById("strength-label");
    if (lab) animate(lab, { color: s.color, duration: 200, easing: "linear" });
  }, [s]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!form.name.trim()) return setErr("Please enter your full name.");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setErr("Please enter a valid email address.");
    if (form.password !== form.confirm) return setErr("Passwords do not match.");
    try {
      setLoading(true);
      await register(form.name.trim(), form.email.trim(), form.password); // ← API CALL
      animate("#reg-ok", { scale: [0.8, 1.2, 1], opacity: [0, 1, 1], duration: 420, easing: "easeOutCubic" });
      setTimeout(() => nav(state?.from || "/demo", { replace: true }), 520);
    } catch (e: any) {
      setErr(e?.message || "Registration failed. Please try again.");
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
      <CodeRain color={s.color} />
      <ScrollProgress />
      <CursorParticles />

      <div className="relative z-10">
        <section className="py-12">
          <div className="mx-10 max-w-none">
            <button onClick={() => nav(-1)} className="text-white/70 hover:text-white inline-flex items-center gap-2 mb-4">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            <div className={`${GLASS} rounded-3xl p-8 grid xl:grid-cols-[1.1fr,0.9fr] gap-12 items-center`}>
              <div>
                <div className={`${GLASS} inline-flex items-center rounded-full px-4 py-2 mb-4`} data-reveal>
                  <span className="text-sm text-[#35E0FF] font-semibold">Create your secure account</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight" data-reveal>
                  Join FraudBuster
                </h1>
                <p className="text-white/75 mt-3" data-reveal>
                  Meet <b>RobotBuddy</b>—shutter lids hide your password; the antenna LED pulses while you type.
                  Get to <b>Excellent</b> and he smiles with fireworks 🎉
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4" data-reveal>
                  <RobotBuddy cover={show} accent={s.color} typingImpulse={impulse} bigSmile={s.level === 4} />
                  <div className="flex items-center gap-2 justify-between mt-2">
                    <div className="text-sm" id="strength-label" style={{ color: s.color }}>
                      Strength: <span className="font-semibold">{s.label}</span>
                    </div>
                    <div className="flex gap-1 w-40">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} data-strength-bar className="h-2 flex-1 rounded bg-white/15" />
                      ))}
                    </div>
                  </div>
                  {s.tips.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {s.tips.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs rounded-lg px-2 py-1 border border-white/10 bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-5" onKeyDown={bump}>
                {err && (
                  <div className="rounded-lg border border-white/20 bg-rose/20 text-rose-100 px-3 py-2 text-sm flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" /> {err}
                  </div>
                )}
                <FloatingInput id="name" label="Full Name" icon={User} value={form.name} onChange={(e) => setForm({ ...form, name: e.currentTarget.value })} required />
                <FloatingInput id="email" label="Email Address" icon={Mail} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.currentTarget.value })} required />
                <div className="relative">
                  <FloatingInput id="password" label="Password" icon={Lock} type={show ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.currentTarget.value })} required />
                  <button type="button" aria-label="Toggle password" onClick={() => setShow((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                    {show ? "🙈" : "👀"}
                  </button>
                </div>
                <div className="relative">
                  <FloatingInput id="confirm" label="Confirm Password" icon={Lock} type={show2 ? "text" : "password"} value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.currentTarget.value })} required />
                  <button type="button" aria-label="Toggle confirm" onClick={() => setShow2((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                    {show2 ? "🙈" : "👀"}
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="inline-flex items-center gap-2 text-white/80">
                    <CheckCircle2 id="reg-ok" className="h-4 w-4 opacity-0" />
                    Password checks update live
                  </div>
                  <Link to="/login" className="text-[#35E0FF] hover:underline">Have an account? Login</Link>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] hover:from-[#3EE0FF] hover:to-[#7C5CFF] disabled:opacity-60 text-white px-6 py-3 font-semibold inline-flex items-center justify-center gap-2 transition"
                >
                  {loading ? "Creating..." : "Continue"} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {s.level === 4 && <Fireworks trigger={excellentPulse} />}
    </div>
  );
};

export default Register;
