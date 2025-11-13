// import { useState } from "react";
// import { motion } from "framer-motion";

// type DemoForm = {
//   mobile?: string;
//   gstin?: string;
//   bankAccount?: string;
//   ifsc?: string;
//   face?: File | null;
//   card?: File | null;
// };

// type ApiResponse = {
//   timestamp: string;
//   statusCode: number;
//   status: string;
//   message: string;
//   success: boolean;
//   response: any;
//   failures: Record<string, unknown>;
// };

// const fieldCls = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:bg-white/[0.06] transition";

// function Label({ children }: { children: React.ReactNode }) {
//   return <label className="mb-1 block text-sm text-white/70">{children}</label>;
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="glass hairline rounded-3xl p-5">
//       <div className="mb-3 text-lg font-semibold">{title}</div>
//       {children}
//     </div>
//   );
// }

// function KV({ k, v }: { k: string; v: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.03] p-3">
//       <div className="text-white/60">{k}</div>
//       <div className="col-span-2 break-words">{v}</div>
//     </div>
//   );
// }

// export default function Demo() {
//   const [form, setForm] = useState<DemoForm>({});
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const onChange = (k: keyof DemoForm, v: any) => setForm((f) => ({ ...f, [k]: v }));

//   const callBackend = async (f: DemoForm): Promise<ApiResponse> => {
//     // MOCK MODE — Replace with your server proxy endpoint e.g. /api/user-onboard
//     // const fd = new FormData();
//     // Object.entries(f).forEach(([k, val]) => val && fd.append(k, val as any));
//     // const res = await fetch("/api/user-onboard", { method: "POST", body: fd });
//     // if (!res.ok) throw new Error("Request failed");
//     // return await res.json();

//     // SAMPLE payload you provided:
//     const sample: ApiResponse = {
//       "timestamp": "2025-11-03T14:40:29.581Z",
//       "statusCode": 200,
//       "status": "OK",
//       "message": "Data Fetched Successfully",
//       "success": true,
//       "response": {
//         "fetchVPAFromMobile": {
//           "name": "SAMPATH  KUMAR K M",
//           "upi": [ "8105790928@ybl", "8105790928@ibl", "8105790928@axl" ]
//         },
//         "performFaceMatch": {
//           "is_same_face": true,
//           "is_person_image_blurry": false,
//           "is_card_image_blurry": false,
//           "same_face_confidence": 0.9892606353759765,
//           "person_image_correctly_identified": true,
//           "card_image_correctly_identified": true
//         },
//         "fetchKYCFromMobile": {
//           "fullName": "Sampath Kumar K M",
//           "pan": "NLTPS3194E",
//           "maskedAadhaar": "XXXXXXXX9172",
//           "dob": "2000-10-30"
//         },
//         "verifyBankDetails": {
//           "nameAtBank": "M/S. CHIKKI ENTERPRISES",
//           "address": "basavanahalli main road, opp. rangana choultry, next to taluk office",
//           "bankName": "axis bank",
//           "branch": "chickmagalur",
//           "city": "chickmagalur",
//           "district": "chickmagalur",
//           "ifsc": "UTIB0000539",
//           "phone": "",
//           "pincode": "",
//           "state": "karnataka"
//         },
//         "fetchGSTValidation": {
//           "taxpayerDetails": {
//             "ntcrbs": "TRD:TWD",
//             "adhrVFlag": "Yes",
//             "lgnm": "MANJU PRADEEPA",
//             "stj": "State - Karnataka,Division - DGSTO-6, Bengaluru, LOCAL GST Office - LGSTO 066- Bengaluru",
//             "dty": "Regular",
//             "cxdt": "17/09/2025",
//             "gstin": "29FJOPP6066H1ZE",
//             "nba": ["Others","Retail Business"],
//             "ekycVFlag": "Not Applicable",
//             "cmpRt": "NA",
//             "rgdt": "15/02/2024",
//             "ctb": "Proprietorship",
//             "pradr": { "adr": "No.5, Sri Umapathy Nilaya, Kavin layout, Near Nethra Apartment, Chikkabanavara, Bengaluru, Bengaluru Urban, Karnataka, 560090" },
//             "sts": "Cancelled on application of Taxpayer",
//             "tradeNam": "SP Enterprises",
//             "isFieldVisitConducted": "No",
//             "adhrVdt": "29/10/2024",
//             "ctj": "State - CBIC,Zone - BENGALURU,Commissionerate - BENGALURU-NORTH WEST,Division - NORTH WEST DIVISION-3,Range - RANGE-CNWD3 (Jurisdictional Office)",
//             "einvoiceStatus": "No"
//           },
//           "taxpayerReturnDetails": { "filingStatus": [] },
//           "goods_service": {}
//         }
//       },
//       "failures": {}
//     };
//     return new Promise((r)=>setTimeout(()=>r(sample), 600));
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); setError(null);
//     try {
//       const res = await callBackend(form);
//       setData(res);
//     } catch (err:any) {
//       setError(err?.message || "Something went wrong");
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const R = data?.response;

//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-4xl font-bold">Live Demo</h1>
//         <p className="mt-2 max-w-2xl text-white/70">
//           Submit sample identifiers to see how FraudBuster correlates PAN, Aadhaar, IFSC, GST, VPA and biometric signals.
//           <span className="ml-2 text-white/50">This sandbox uses mock data. Contact Sales for full sandbox access.</span>
//         </p>
//       </div>

//       <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
//         <Section title="Identity">
//           <Label>Mobile</Label>
//           <input className={fieldCls} placeholder="e.g. 8105790928"
//                  onChange={(e)=>onChange("mobile", e.target.value)} />

//           <div className="mt-4 grid grid-cols-2 gap-3">
//             <div>
//               <Label>GSTIN</Label>
//               <input className={fieldCls} placeholder="e.g. 29FJOPP6066H1ZE"
//                      onChange={(e)=>onChange("gstin", e.target.value)} />
//             </div>
//             <div>
//               <Label>IFSC</Label>
//               <input className={fieldCls} placeholder="e.g. UTIB0000539"
//                      onChange={(e)=>onChange("ifsc", e.target.value)} />
//             </div>
//           </div>
//         </Section>

//         <Section title="Banking">
//           <Label>Bank Account</Label>
//           <input className={fieldCls} placeholder="e.g. 920020056085360"
//                  onChange={(e)=>onChange("bankAccount", e.target.value)} />

//           <div className="mt-4 grid grid-cols-2 gap-3">
//             <div>
//               <Label>Face Image</Label>
//               <input type="file" accept="image/*" className={fieldCls}
//                      onChange={(e)=>onChange("face", e.target.files?.[0] || null)} />
//             </div>
//             <div>
//               <Label>ID Card Image</Label>
//               <input type="file" accept="image/*" className={fieldCls}
//                      onChange={(e)=>onChange("card", e.target.files?.[0] || null)} />
//             </div>
//           </div>
//         </Section>

//         <div className="md:col-span-2">
//           <button
//             className="w-full rounded-2xl bg-accent/90 px-6 py-3 font-semibold shadow-glow hover:translate-y-[1px] transition disabled:opacity-60"
//             disabled={loading}
//           >
//             {loading ? "Checking..." : "Run Fraud Checks"}
//           </button>
//         </div>
//       </form>

//       {/* RESULTS */}
//       {error && (
//         <div className="rounded-2xl bg-rose/20 p-4 text-rose">
//           {error}
//         </div>
//       )}

//       {R && (
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* VPA */}
//           {R.fetchVPAFromMobile && (
//             <Section title="UPI / VPA from Mobile">
//               <KV k="Name" v={R.fetchVPAFromMobile.name} />
//               <div className="mt-3 grid gap-2">
//                 {R.fetchVPAFromMobile.upi?.map((u:string)=>(
//                   <div key={u} className="rounded-xl bg-white/[0.03] p-3">{u}</div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* KYC */}
//           {R.fetchKYCFromMobile && (
//             <Section title="KYC from Mobile">
//               <KV k="Full Name" v={R.fetchKYCFromMobile.fullName} />
//               <KV k="PAN" v={R.fetchKYCFromMobile.pan} />
//               <KV k="Aadhaar" v={R.fetchKYCFromMobile.maskedAadhaar} />
//               <KV k="DOB" v={R.fetchKYCFromMobile.dob} />
//             </Section>
//           )}

//           {/* Bank */}
//           {R.verifyBankDetails && (
//             <Section title="Bank Verification (IFSC + Account)">
//               {["nameAtBank","bankName","branch","city","state","ifsc","address"].map((k)=>(
//                 <KV key={k} k={k} v={R.verifyBankDetails[k]} />
//               ))}
//             </Section>
//           )}

//           {/* GST */}
//           {R.fetchGSTValidation?.taxpayerDetails && (
//             <Section title="GSTIN / KYB">
//               {[
//                 ["Legal Name","lgnm"],
//                 ["Trade Name","tradeNam"],
//                 ["Status","sts"],
//                 ["Constitution","ctb"],
//                 ["Registered On","rgdt"],
//                 ["Jurisdiction","ctj"],
//                 ["Office","stj"],
//                 ["Aadhaar Verified","adhrVFlag"],
//               ].map(([label, key]) => (
//                 <KV key={key} k={label} v={R.fetchGSTValidation.taxpayerDetails[key as keyof any] as any} />
//               ))}
//               <div className="mt-3">
//                 <div className="mb-2 text-white/60">Address</div>
//                 <div className="rounded-xl bg-white/[0.03] p-3">
//                   {R.fetchGSTValidation.taxpayerDetails.pradr?.adr}
//                 </div>
//               </div>
//             </Section>
//           )}

//           {/* Face Match */}
//           {R.performFaceMatch && (
//             <Section title="Biometric Match">
//               <KV k="Same Person" v={R.performFaceMatch.is_same_face ? "Yes" : "No"} />
//               <KV k="Confidence" v={`${(R.performFaceMatch.same_face_confidence*100).toFixed(2)}%`} />
//               <KV k="Person Image OK" v={R.performFaceMatch.person_image_correctly_identified ? "Yes" : "Check"} />
//               <KV k="Card Image OK" v={R.performFaceMatch.card_image_correctly_identified ? "Yes" : "Check"} />
//             </Section>
//           )}
//         </div>
//       )}

//       <div className="text-sm text-white/50">
//         Need server integration? We’ll wire this form to <code>/api/user-onboard</code> (serverless) where headers are added securely.
//       </div>
//     </div>
//   );
// }
















//<------------------new design tried----------------------------------------------------->












//<--------------------new design tried----------------------------------------------------->



// src/pages/Demo.tsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { animate, stagger } from "animejs"; // as requested
// import { fbUserOnboard } from "../api/fraudbuster";
// import { verifyKYC } from "../api/kyc";
// import { useAuth } from "../context/AuthProvider";
// import { useCredits } from "../context/CreditsProvider";
// import { toMessage } from "../api/client";
// import { Link, useNavigate } from "react-router-dom";

// type DemoForm = {
//   mobile?: string;
//   gstin?: string;
//   bankAccount?: string;
//   ifsc?: string;
//   face?: File | null;
//   card?: File | null;
// };

// type ApiResponse = {
//   timestamp: string;
//   statusCode: number;
//   status: string;
//   message: string;
//   success: boolean;
//   response: any;
//   failures: Record<string, unknown>;
// };

// const fieldCls =
//   "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:bg-white/[0.06] transition";

// function Label({ children }: { children: React.ReactNode }) {
//   return <label className="mb-1 block text-sm text-white/70">{children}</label>;
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="glass hairline rounded-3xl p-5">
//       <div className="mb-3 text-lg font-semibold">{title}</div>
//       {children}
//     </div>
//   );
// }

// function KV({ k, v }: { k: string; v: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.03] p-3">
//       <div className="text-white/60">{k}</div>
//       <div className="col-span-2 break-words">{v}</div>
//     </div>
//   );
// }

// export default function Demo() {
//   const nav = useNavigate();
//   const { user } = useAuth();
//   const { serverCredits, refreshServerCredits, demoHitsLeft, incDemoHit } = useCredits();

//   const [form, setForm] = useState<DemoForm>({});
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [log, setLog] = useState<string[]>([]);

//   const onChange = (k: keyof DemoForm, v: any) => setForm((f) => ({ ...f, [k]: v }));
//   const push = (s: string) => setLog((v) => [s, ...v]);

//   // Run INTERNAL verify to demonstrate server credits
//   const runInternalVerify = async () => {
//     try {
//       setLoading(true);
//       const res = await verifyKYC({
//         payload: { idNumber: "DEMO123456", country: "UAE", firstName: "Demo", lastName: "User" },
//       });
//       push(`[INTERNAL] status: ${"status" in res ? res.status : "?"}`);
//       await refreshServerCredits();
//       animate("#creditsBadge", { scale: [0.95, 1.08, 1], duration: 420, easing: "easeOutCubic" });
//     } catch (e) {
//       push(`[INTERNAL] ${toMessage(e)}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Submit external FraudBuster (3-hit local cap)
//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setData(null);

//     if (!user) {
//       setError("Please log in to use the demo.");
//       nav("/login");
//       return;
//     }
//     if (demoHitsLeft <= 0) {
//       setError("Demo limit reached. Please contact our team.");
//       nav("/contact");
//       return;
//     }
//     if (!form.mobile || !form.gstin || !form.bankAccount || !form.ifsc || !form.face || !form.card) {
//       setError("Please fill all fields and attach both images.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await fbUserOnboard({
//         mobile: form.mobile!,
//         gstin: form.gstin!,
//         bankAccount: form.bankAccount!,
//         ifsc: form.ifsc!,
//         face: form.face!,
//         card: form.card!,
//       });
//       setData(res);
//       push(`[FB] ${res.message} — success=${res.success}`);
//       incDemoHit();
//       animate("#hitsBadge", { scale: [0.95, 1.08, 1], duration: 420, easing: "easeOutCubic" });

//       // Fancy reveal for result cards
//       const cards = document.querySelectorAll("[data-result-card]");
//       animate(cards as any, { opacity: [0, 1], translateY: [14, 0], delay: stagger(60), duration: 380, easing: "easeOutCubic" });
//     } catch (err) {
//       const msg = toMessage(err);
//       setError(msg);
//       push(`[FB] ${msg}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const R = data?.response;

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between gap-4 flex-wrap">
//         <div>
//           <h1 className="text-4xl font-bold">Live Demo</h1>
//           <p className="mt-2 max-w-2xl text-white/70">
//             Submit sample identifiers to see how FraudBuster correlates PAN, Aadhaar, IFSC, GST, VPA and biometric signals.
//             <span className="ml-2 text-white/50">Keys are secured via <code>.env</code>. Only 3 external hits per user.</span>
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <div id="creditsBadge" className="rounded-xl bg-white/10 border border-white/15 px-3 py-2">
//             Server credits: <b>{serverCredits ?? "—"}</b>
//           </div>
//           <div id="hitsBadge" className="rounded-xl bg-white/10 border border-white/15 px-3 py-2">
//             External hits left: <b>{demoHitsLeft}</b>/3
//           </div>
//         </div>
//       </div>

//       {/* INTERNAL verify quick action */}
//       <div className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
//         <div className="text-white/80">
//           <b>Internal KYC verify</b> (consumes server credits)
//         </div>
//         <button
//           onClick={runInternalVerify}
//           disabled={loading || (serverCredits ?? 0) <= 0}
//           className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 disabled:opacity-60"
//         >
//           Run Internal Verify
//         </button>
//       </div>

//       <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
//         <Section title="Identity">
//           <Label>Mobile</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 8105790928"
//             onChange={(e) => onChange("mobile", e.target.value)}
//           />

//           <div className="mt-4 grid grid-cols-2 gap-3">
//             <div>
//               <Label>GSTIN</Label>
//               <input
//                 className={fieldCls}
//                 placeholder="e.g. 29FJOPP6066H1ZE"
//                 onChange={(e) => onChange("gstin", e.target.value)}
//               />
//             </div>
//             <div>
//               <Label>IFSC</Label>
//               <input
//                 className={fieldCls}
//                 placeholder="e.g. UTIB0000539"
//                 onChange={(e) => onChange("ifsc", e.target.value)}
//               />
//             </div>
//           </div>
//         </Section>

//         <Section title="Banking">
//           <Label>Bank Account</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 920020056085360"
//             onChange={(e) => onChange("bankAccount", e.target.value)}
//           />

//           <div className="mt-4 grid grid-cols-2 gap-3">
//             <div>
//               <Label>Face Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("face", e.target.files?.[0] || null)}
//               />
//             </div>
//             <div>
//               <Label>ID Card Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("card", e.target.files?.[0] || null)}
//               />
//             </div>
//           </div>
//         </Section>

//         <div className="md:col-span-2 flex flex-col gap-3">
//           <button
//             className="w-full rounded-2xl bg-accent/90 px-6 py-3 font-semibold shadow-glow hover:translate-y-[1px] transition disabled:opacity-60"
//             disabled={loading}
//           >
//             {loading ? "Checking..." : "Run Fraud Checks"}
//           </button>
//           {demoHitsLeft <= 0 && (
//             <div className="text-sm">
//               No external hits remaining. <Link to="/contact" className="text-cyan-400 underline">Contact sales →</Link>
//             </div>
//           )}
//         </div>
//       </form>

//       {/* ERRORS */}
//       {error && <div className="rounded-2xl bg-rose/20 p-4 text-rose">{error}</div>}

//       {/* RESULTS */}
//       {R && (
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* VPA */}
//           {R.fetchVPAFromMobile && (
//             <Section title="UPI / VPA from Mobile">
//               <div data-result-card>
//                 <KV k="Name" v={R.fetchVPAFromMobile.name} />
//                 <div className="mt-3 grid gap-2">
//                   {R.fetchVPAFromMobile.upi?.map((u: string) => (
//                     <div key={u} className="rounded-xl bg-white/[0.03] p-3">
//                       {u}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Section>
//           )}

//           {/* KYC */}
//           {R.fetchKYCFromMobile && (
//             <Section title="KYC from Mobile">
//               <div data-result-card>
//                 <KV k="Full Name" v={R.fetchKYCFromMobile.fullName} />
//                 <KV k="PAN" v={R.fetchKYCFromMobile.pan} />
//                 <KV k="Aadhaar" v={R.fetchKYCFromMobile.maskedAadhaar} />
//                 <KV k="DOB" v={R.fetchKYCFromMobile.dob} />
//               </div>
//             </Section>
//           )}

//           {/* Bank */}
//           {R.verifyBankDetails && (
//             <Section title="Bank Verification (IFSC + Account)">
//               <div data-result-card>
//                 {["nameAtBank", "bankName", "branch", "city", "state", "ifsc", "address"].map((k) => (
//                   <KV key={k} k={k} v={R.verifyBankDetails[k]} />
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* GST */}
//           {R.fetchGSTValidation?.taxpayerDetails && (
//             <Section title="GSTIN / KYB">
//               <div data-result-card>
//                 {[
//                   ["Legal Name", "lgnm"],
//                   ["Trade Name", "tradeNam"],
//                   ["Status", "sts"],
//                   ["Constitution", "ctb"],
//                   ["Registered On", "rgdt"],
//                   ["Jurisdiction", "ctj"],
//                   ["Office", "stj"],
//                   ["Aadhaar Verified", "adhrVFlag"],
//                 ].map(([label, key]) => (
//                   <KV
//                     key={key}
//                     k={label}
//                     v={R.fetchGSTValidation.taxpayerDetails[key as keyof any] as any}
//                   />
//                 ))}
//                 <div className="mt-3">
//                   <div className="mb-2 text-white/60">Address</div>
//                   <div className="rounded-xl bg-white/[0.03] p-3">
//                     {R.fetchGSTValidation.taxpayerDetails.pradr?.adr}
//                   </div>
//                 </div>
//               </div>
//             </Section>
//           )}

//           {/* Face Match */}
//           {R.performFaceMatch && (
//             <Section title="Biometric Match">
//               <div data-result-card>
//                 <KV k="Same Person" v={R.performFaceMatch.is_same_face ? "Yes" : "No"} />
//                 <KV
//                   k="Confidence"
//                   v={`${(R.performFaceMatch.same_face_confidence * 100).toFixed(2)}%`}
//                 />
//                 <KV
//                   k="Person Image OK"
//                   v={R.performFaceMatch.person_image_correctly_identified ? "Yes" : "Check"}
//                 />
//                 <KV
//                   k="Card Image OK"
//                   v={R.performFaceMatch.card_image_correctly_identified ? "Yes" : "Check"}
//                 />
//               </div>
//             </Section>
//           )}
//         </div>
//       )}

//       {/* LOG */}
//       {log.length > 0 && (
//         <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
//           <div className="font-semibold mb-2">Log</div>
//           <ul className="space-y-1 text-white/80">
//             {log.map((l, i) => (
//               <li key={i}>{l}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="text-sm text-white/50">
//         Need server proxying for the external call? Add a secure `/api/user-onboard` route; this UI will work unchanged.
//       </div>
//     </div>
//   );
// }




//<--------------------------------------------------------------------------------------------------------------------------------------






//<----------------------------------------------------------------------------------------------------------------------------------


// src/pages/Demo.tsx
// import { useEffect, useMemo, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
// import { api, toMessage } from "../api/client";

// type DemoForm = {
//   mobile?: string;
//   gstin?: string;
//   bankAccount?: string;
//   ifsc?: string;
//   face?: File | null;
//   card?: File | null;
// };

// type ApiResponse = {
//   timestamp?: string;
//   statusCode?: number;
//   status?: string;
//   message?: string;
//   success?: boolean;
//   response?: any;
//   failures?: Record<string, unknown>;
//   demoCount?: number; // backend returns updated demoCount
// };

// const fieldCls =
//   "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:bg-white/[0.06] transition";

// function Label({ children }: { children: React.ReactNode }) {
//   return <label className="mb-1 block text-sm text-white/70">{children}</label>;
// }

// function Section({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="glass hairline rounded-3xl p-5">
//       <div className="mb-3 text-lg font-semibold">{title}</div>
//       {children}
//     </div>
//   );
// }

// function KV({ k, v }: { k: string; v: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.03] p-3">
//       <div className="text-white/60">{k}</div>
//       <div className="col-span-2 break-words">{v}</div>
//     </div>
//   );
// }

// export default function Demo() {
//   const nav = useNavigate();
//   const { user, logout, refreshMe } = useAuth();

//   const [form, setForm] = useState<DemoForm>({});
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [hitsLeft, setHitsLeft] = useState<number>(3);

//   const onChange = (k: keyof DemoForm, v: any) => setForm((f) => ({ ...f, [k]: v }));

//   // Which services are valid (filled) right now?
//   const svc = useMemo(() => {
//     const identity = !!form.mobile?.trim();
//     const bank = !!form.bankAccount?.trim() && !!form.ifsc?.trim();
//     const gst = !!form.gstin?.trim();
//     const face = !!form.face && !!form.card;
//     const any = identity || bank || gst || face;
//     return { identity, bank, gst, face, any };
//   }, [form]);

//   // Initialize hits from server
//   useEffect(() => {
//     (async () => {
//       const demoCount = user?.demoCount ?? (await refreshMe())?.user?.demoCount ?? 0;
//       setHitsLeft(Math.max(0, 3 - (demoCount || 0)));
//     })();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setData(null);

//     if (!user) {
//       setError("Please log in to use the demo.");
//       nav("/login", { replace: true });
//       return;
//     }
//     if (!svc.any) {
//       setError("Fill at least one service: Mobile, GSTIN, Bank (Account+IFSC) or Face+Card.");
//       return;
//     }
//     if (hitsLeft <= 0) {
//       setError("Demo limit reached. Please contact our team.");
//       nav("/contact", { replace: true });
//       return;
//     }

//     try {
//       setLoading(true);

//       const fd = new FormData();
//       if (svc.identity) fd.append("mobile", form.mobile!.trim());
//       if (svc.gst) fd.append("gstin", form.gstin!.trim());
//       if (svc.bank) {
//         fd.append("bankAccount", form.bankAccount!.trim());
//         fd.append("ifsc", form.ifsc!.trim());
//       }
//       if (svc.face) {
//         fd.append("face", form.face!);
//         fd.append("card", form.card!);
//       }

//       const res = await api.post<ApiResponse>("/user-onboard", fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       const payload = res.data || {};
//       setData(payload);

//       // If backend returned updated demoCount, prefer that; otherwise refreshMe
//       if (typeof payload.demoCount === "number") {
//         setHitsLeft(Math.max(0, 3 - payload.demoCount));
//       } else {
//         const me = await refreshMe();
//         const demoCount = me?.user?.demoCount ?? 0;
//         setHitsLeft(Math.max(0, 3 - demoCount));
//       }
//     } catch (err) {
//       setError(toMessage(err, "Something went wrong"));
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const R = data?.response;

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between gap-3 flex-wrap">
//         <div>
//           <h1 className="text-4xl font-bold">Live Demo</h1>
//           <p className="mt-2 max-w-2xl text-white/70">
//             Submit any of the services below (one is enough). Server enforces <b>3 external hits</b> per user.
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           <div className="rounded-xl bg-white/10 border border-white/15 px-3 py-2">
//             Hits left: <b>{hitsLeft}</b>/3
//           </div>
//           {user ? (
//             <button
//               onClick={() => {
//                 logout();
//                 nav("/login", { replace: true });
//               }}
//               className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>

//       <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
//         {/* Identity */}
//         <Section title="Identity (Phone)">
//           <Label>Mobile</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 8105790928"
//             onChange={(e) => onChange("mobile", e.target.value)}
//           />
//         </Section>

//         {/* Bank */}
//         <Section title="Bank Identity">
//           <Label>Bank Account</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 920020056085360"
//             onChange={(e) => onChange("bankAccount", e.target.value)}
//           />
//           <div className="mt-4">
//             <Label>IFSC</Label>
//             <input
//               className={fieldCls}
//               placeholder="e.g. UTIB0000539"
//               onChange={(e) => onChange("ifsc", e.target.value)}
//             />
//           </div>
//         </Section>

//         {/* GST */}
//         <Section title="GST">
//           <Label>GSTIN</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 29FJOPP6066H1ZE"
//             onChange={(e) => onChange("gstin", e.target.value)}
//           />
//         </Section>

//         {/* Face Match */}
//         <Section title="Biometric (Face Match)">
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <Label>Face Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("face", e.target.files?.[0] || null)}
//               />
//             </div>
//             <div>
//               <Label>ID Card Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("card", e.target.files?.[0] || null)}
//               />
//             </div>
//           </div>
//         </Section>

//         <div className="md:col-span-2">
//           <button
//             className="w-full rounded-2xl bg-accent/90 px-6 py-3 font-semibold shadow-glow hover:translate-y-[1px] transition disabled:opacity-60"
//             disabled={loading || hitsLeft <= 0 || !svc.any}
//           >
//             {loading ? "Checking..." : "Run Fraud Checks"}
//           </button>
//           {!svc.any && (
//             <div className="mt-2 text-sm text-white/60">
//               Fill at least one service (Mobile, GSTIN, Bank+IFSC, or Face+Card).
//             </div>
//           )}
//           {hitsLeft <= 0 && (
//             <div className="mt-2 text-sm">
//               No external hits remaining. <Link to="/contact" className="text-cyan-400 underline">Contact sales →</Link>
//             </div>
//           )}
//         </div>
//       </form>

//       {/* ERRORS */}
//       {error && <div className="rounded-2xl bg-rose/20 p-4 text-rose">{error}</div>}

//       {/* RESULTS */}
//       {R && (
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* VPA */}
//           {R.fetchVPAFromMobile && (
//             <Section title="UPI / VPA from Mobile">
//               <KV k="Name" v={R.fetchVPAFromMobile.name} />
//               <div className="mt-3 grid gap-2">
//                 {R.fetchVPAFromMobile.upi?.map((u: string) => (
//                   <div key={u} className="rounded-xl bg-white/[0.03] p-3">{u}</div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* KYC */}
//           {R.fetchKYCFromMobile && (
//             <Section title="KYC from Mobile">
//               <KV k="Full Name" v={R.fetchKYCFromMobile.fullName} />
//               <KV k="PAN" v={R.fetchKYCFromMobile.pan} />
//               <KV k="Aadhaar" v={R.fetchKYCFromMobile.maskedAadhaar} />
//               <KV k="DOB" v={R.fetchKYCFromMobile.dob} />
//             </Section>
//           )}

//           {/* Bank */}
//           {R.verifyBankDetails && (
//             <Section title="Bank Verification (IFSC + Account)">
//               {["nameAtBank","bankName","branch","city","state","ifsc","address"].map((k) => (
//                 <KV key={k} k={k} v={R.verifyBankDetails[k]} />
//               ))}
//             </Section>
//           )}

//           {/* GST */}
//           {R.fetchGSTValidation?.taxpayerDetails && (
//             <Section title="GSTIN / KYB">
//               {[
//                 ["Legal Name","lgnm"],
//                 ["Trade Name","tradeNam"],
//                 ["Status","sts"],
//                 ["Constitution","ctb"],
//                 ["Registered On","rgdt"],
//                 ["Jurisdiction","ctj"],
//                 ["Office","stj"],
//                 ["Aadhaar Verified","adhrVFlag"],
//               ].map(([label, key]) => (
//                 <KV key={key} k={label} v={R.fetchGSTValidation.taxpayerDetails[key as keyof any] as any} />
//               ))}
//               <div className="mt-3">
//                 <div className="mb-2 text-white/60">Address</div>
//                 <div className="rounded-xl bg-white/[0.03] p-3">
//                   {R.fetchGSTValidation.taxpayerDetails.pradr?.adr}
//                 </div>
//               </div>
//             </Section>
//           )}

//           {/* Face Match */}
//           {R.performFaceMatch && (
//             <Section title="Biometric Match">
//               <KV k="Same Person" v={R.performFaceMatch.is_same_face ? "Yes" : "No"} />
//               <KV k="Confidence" v={`${(R.performFaceMatch.same_face_confidence * 100).toFixed(2)}%`} />
//               <KV k="Person Image OK" v={R.performFaceMatch.person_image_correctly_identified ? "Yes" : "Check"} />
//               <KV k="Card Image OK" v={R.performFaceMatch.card_image_correctly_identified ? "Yes" : "Check"} />
//             </Section>
//           )}
//         </div>
//       )}

//       <div className="text-sm text-white/50">
//         This page calls <code>/api/user-onboard</code> securely. Secrets are never exposed to the browser.
//       </div>
//     </div>
//   );
// }




//<----------------------------------------------------------------------------------------------------------------------------------->







//<----------------------------------------------------------------------------------------------------------------------------------->

// src/pages/Demo.tsx
// src/pages/Demo.tsx
// import { useEffect, useMemo, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthProvider";
// import { api, toMessage } from "../api/client";

// type DemoForm = {
//   mobile?: string;
//   gstin?: string;
//   bankAccount?: string;
//   ifsc?: string;
//   face?: File | null;
//   card?: File | null;
// };

// type UpstreamPayload = {
//   success?: boolean;
//   response?: any;
//   message?: string;
//   status?: string;
//   statusCode?: number;
//   // counters echoed from backend
//   role?: "user" | "admin";
//   demoAllocated?: number;
//   demoUsed?: number;
//   demoRemaining?: number;
// };

// const fieldCls =
//   "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:bg-white/[0.06] transition";

// function Label({ children }: { children: React.ReactNode }) {
//   return <label className="mb-1 block text-sm text-white/70">{children}</label>;
// }
// function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="glass hairline rounded-3xl p-5">
//       <div className="mb-3 text-lg font-semibold">{title}</div>
//       {children}
//     </div>
//   );
// }
// function KV({ k, v }: { k: string; v: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.03] p-3">
//       <div className="text-white/60">{k}</div>
//       <div className="col-span-2 break-words">{v}</div>
//     </div>
//   );
// }

// /** ---------- Admin section (inline on Demo page) ---------- */
// type AdminListUser = {
//   id: string;
//   name: string;
//   email: string;
//   role: "user" | "admin";
//   demoAllocated: number;
//   demoUsed: number;
//   demoRemaining: number;
//   createdAt: string;
// };

// function AdminUserManager() {
//   const [q, setQ] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [rows, setRows] = useState<AdminListUser[]>([]);
//   const [err, setErr] = useState<string | null>(null);
//   const [dirty, setDirty] = useState<Record<string, Partial<AdminListUser>>>({});

//   const load = async () => {
//     setErr(null);
//     setLoading(true);
//     try {
//       const { data } = await api.get<{ users: AdminListUser[] }>(
//         "/admin/users",
//         { params: q ? { search: q } : {} }
//       );
//       setRows(data.users || []);
//       setDirty({});
//     } catch (e) {
//       setErr(toMessage(e));
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const onChange = (id: string, patch: Partial<AdminListUser>) => {
//     setRows((prev) =>
//       prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
//     );
//     setDirty((d) => ({ ...d, [id]: { ...(d[id] || {}), ...patch } }));
//   };

//   const save = async (u: AdminListUser) => {
//     const patch = dirty[u.id];
//     if (!patch || Object.keys(patch).length === 0) return;
//     try {
//       const body: any = {};
//       if (patch.demoAllocated !== undefined) body.demoAllocated = patch.demoAllocated;
//       if (patch.demoUsed !== undefined) body.demoUsed = patch.demoUsed;
//       if (patch.role !== undefined) body.role = patch.role;

//       await api.patch(`/admin/users/${u.id}`, body);
//       // Reload this row (simplest is reload list)
//       await load();
//     } catch (e) {
//       alert(toMessage(e, "Update failed"));
//     }
//   };

//   return (
//     <div className="space-y-4">
//       <div className="flex items-end justify-between gap-3 flex-wrap">
//         <div>
//           <div className="text-xl font-semibold">Admin: Users & Quotas</div>
//           <div className="text-white/60 text-sm">
//             Search by name or email. Adjust Allocated or Used and press Update.
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <input
//             className={fieldCls}
//             placeholder="Search name or email…"
//             value={q}
//             onChange={(e) => setQ(e.target.value)}
//           />
//           <button
//             onClick={load}
//             className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15"
//           >
//             {loading ? "Searching…" : "Search"}
//           </button>
//         </div>
//       </div>

//       {err && <div className="rounded-xl bg-rose/20 p-3 text-rose">{err}</div>}

//       <div className="overflow-x-auto rounded-2xl border border-white/10">
//         <table className="min-w-full text-sm">
//           <thead className="bg-white/[0.04]">
//             <tr className="[&>th]:text-left [&>th]:px-3 [&>th]:py-2">
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Allocated</th>
//               <th>Used</th>
//               <th>Remaining</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody className="[&>tr]:border-b [&>tr]:border-white/10">
//             {rows.map((u) => {
//               const isDirty = !!dirty[u.id];
//               return (
//                 <tr key={u.id} className="[&>td]:px-3 [&>td]:py-2 align-middle">
//                   <td className="whitespace-nowrap">{u.name}</td>
//                   <td className="whitespace-nowrap text-white/80">{u.email}</td>
//                   <td>
//                     <select
//                       className="rounded-lg bg-white/5 border border-white/10 px-2 py-1"
//                       value={u.role}
//                       onChange={(e) =>
//                         onChange(u.id, { role: e.target.value as any })
//                       }
//                     >
//                       <option value="user">user</option>
//                       <option value="admin">admin</option>
//                     </select>
//                   </td>
//                   <td>
//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
//                         onClick={() =>
//                           onChange(u.id, {
//                             demoAllocated: Math.max(0, (u.demoAllocated || 0) - 1),
//                           })
//                         }
//                       >
//                         −
//                       </button>
//                       <input
//                         type="number"
//                         className="w-24 rounded bg-white/5 border border-white/10 px-2 py-1 text-right"
//                         value={u.demoAllocated}
//                         onChange={(e) =>
//                           onChange(u.id, { demoAllocated: Math.max(0, Number(e.target.value || 0)) })
//                         }
//                       />
//                       <button
//                         type="button"
//                         className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
//                         onClick={() =>
//                           onChange(u.id, { demoAllocated: (u.demoAllocated || 0) + 1 })
//                         }
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
//                         onClick={() =>
//                           onChange(u.id, {
//                             demoUsed: Math.max(0, (u.demoUsed || 0) - 1),
//                           })
//                         }
//                       >
//                         −
//                       </button>
//                       <input
//                         type="number"
//                         className="w-20 rounded bg-white/5 border border-white/10 px-2 py-1 text-right"
//                         value={u.demoUsed}
//                         onChange={(e) =>
//                           onChange(u.id, { demoUsed: Math.max(0, Number(e.target.value || 0)) })
//                         }
//                       />
//                       <button
//                         type="button"
//                         className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
//                         onClick={() =>
//                           onChange(u.id, { demoUsed: (u.demoUsed || 0) + 1 })
//                         }
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="text-center">{u.demoRemaining}</td>
//                   <td>
//                     <button
//                       disabled={!isDirty}
//                       onClick={() => save(u)}
//                       className="rounded-lg bg-cyan-500/80 hover:bg-cyan-500 text-black font-semibold px-3 py-1 disabled:opacity-50"
//                     >
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//             {rows.length === 0 && !loading && (
//               <tr>
//                 <td colSpan={7} className="px-3 py-6 text-center text-white/60">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// /** ---------- Main Demo page ---------- */
// export default function Demo() {
//   const nav = useNavigate();
//   const { user, logout, refreshMe } = useAuth();

//   const [form, setForm] = useState<DemoForm>({});
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<UpstreamPayload | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // Counters we show to non-admin users
//   const [allocated, setAllocated] = useState<number>(3);
//   const [hitsLeft, setHitsLeft] = useState<number>(3);

//   const isAdmin = user?.role === "admin";

//   const onChange = (k: keyof DemoForm, v: any) =>
//     setForm((f) => ({ ...f, [k]: v }));

//   const svc = useMemo(() => {
//     const identity = !!form.mobile?.trim();
//     const bank = !!form.bankAccount?.trim() && !!form.ifsc?.trim();
//     const gst = !!form.gstin?.trim();
//     const face = !!form.face && !!form.card;
//     const any = identity || bank || gst || face;
//     return { identity, bank, gst, face, any };
//   }, [form]);

//   // Initialize counters from /auth/me
//   useEffect(() => {
//     (async () => {
//       const me = user ? { user } : await refreshMe();
//       const u = me?.user;
//       if (u && u.role !== "admin") {
//         setAllocated(u.demoAllocated ?? 3);
//         setHitsLeft(u.demoRemaining ?? Math.max(0, (u.demoAllocated ?? 3) - (u.demoUsed ?? 0)));
//       }
//     })();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setData(null);

//     if (!user) {
//       setError("Please log in to use the demo.");
//       nav("/login", { replace: true });
//       return;
//     }
//     if (!svc.any) {
//       setError(
//         "Fill at least one service: Mobile, GSTIN, Bank (Account+IFSC) or Face+Card."
//       );
//       return;
//     }
//     if (!isAdmin && hitsLeft <= 0) {
//       setError("Demo limit reached. Please contact our team.");
//       nav("/contact", { replace: true });
//       return;
//     }

//     try {
//       setLoading(true);

//       const fd = new FormData();
//       if (svc.identity) fd.append("mobile", form.mobile!.trim());
//       if (svc.gst) fd.append("gstin", form.gstin!.trim());
//       if (svc.bank) {
//         fd.append("bankAccount", form.bankAccount!.trim());
//         fd.append("ifsc", form.ifsc!.trim());
//       }
//       if (svc.face) {
//         fd.append("face", form.face!);
//         fd.append("card", form.card!);
//       }

//       const res = await api.post<UpstreamPayload>("/user-onboard", fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       const payload = res.data || {};
//       setData(payload);

//       // Update counters from backend echo
//       if (!isAdmin) {
//         if (
//           typeof payload.demoAllocated === "number" &&
//           typeof payload.demoRemaining === "number"
//         ) {
//           setAllocated(payload.demoAllocated);
//           setHitsLeft(payload.demoRemaining);
//         } else {
//           // fallback to /auth/me
//           const me = await refreshMe();
//           if (me?.user) {
//             setAllocated(me.user.demoAllocated);
//             setHitsLeft(me.user.demoRemaining);
//           }
//         }
//       } else {
//         // keep showing "Admin (unlimited)" — but still refresh user silently
//         await refreshMe();
//       }
//     } catch (err) {
//       setError(toMessage(err, "Something went wrong"));
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const R = data?.response;

//   return (
//     <div className="space-y-10">
//       <div className="flex items-center justify-between gap-3 flex-wrap">
//         <div>
//           <h1 className="text-4xl font-bold">Live Demo</h1>
//           <p className="mt-2 max-w-2xl text-white/70">
//             Submit any of the services below (one is enough).{" "}
//             {isAdmin ? (
//               <b>Admin has unlimited hits.</b>
//             ) : (
//               <>Server enforces <b>{allocated}</b> external hits per user.</>
//             )}
//           </p>
//         </div>

//         <div className="flex items-center gap-2">
//           {!isAdmin && (
//             <div className="rounded-xl bg-white/10 border border-white/15 px-3 py-2">
//               Hits left: <b>{hitsLeft}</b>/{allocated}
//             </div>
//           )}
//           {user ? (
//             <button
//               onClick={() => {
//                 logout();
//                 nav("/login", { replace: true });
//               }}
//               className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/login"
//               className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       </div>

//       <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
//         {/* Identity */}
//         <Section title="Identity (Phone)">
//           <Label>Mobile</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 8105790928"
//             onChange={(e) => onChange("mobile", e.target.value)}
//           />
//         </Section>

//         {/* Bank */}
//         <Section title="Bank Identity">
//           <Label>Bank Account</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 920020056085360"
//             onChange={(e) => onChange("bankAccount", e.target.value)}
//           />
//           <div className="mt-4">
//             <Label>IFSC</Label>
//             <input
//               className={fieldCls}
//               placeholder="e.g. UTIB0000539"
//               onChange={(e) => onChange("ifsc", e.target.value)}
//             />
//           </div>
//         </Section>

//         {/* GST */}
//         <Section title="GST">
//           <Label>GSTIN</Label>
//           <input
//             className={fieldCls}
//             placeholder="e.g. 29FJOPP6066H1ZE"
//             onChange={(e) => onChange("gstin", e.target.value)}
//           />
//         </Section>

//         {/* Face Match */}
//         <Section title="Biometric (Face Match)">
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <Label>Face Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("face", e.target.files?.[0] || null)}
//               />
//             </div>
//             <div>
//               <Label>ID Card Image</Label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className={fieldCls}
//                 onChange={(e) => onChange("card", e.target.files?.[0] || null)}
//               />
//             </div>
//           </div>
//         </Section>

//         {/* Submit */}
//         <div className="md:col-span-2">
//           <button
//             className="w-full rounded-2xl bg-accent/90 px-6 py-3 font-semibold shadow-glow hover:translate-y-[1px] transition disabled:opacity-60"
//             disabled={loading || !svc.any || (!isAdmin && hitsLeft <= 0)}
//           >
//             {loading ? "Checking..." : "Run Fraud Checks"}
//           </button>
//           {!svc.any && (
//             <div className="mt-2 text-sm text-white/60">
//               Fill at least one service (Mobile, GSTIN, Bank+IFSC, or Face+Card).
//             </div>
//           )}
//           {!isAdmin && hitsLeft <= 0 && (
//             <div className="mt-2 text-sm">
//               No external hits remaining.{" "}
//               <Link to="/contact" className="text-cyan-400 underline">
//                 Contact sales →
//               </Link>
//             </div>
//           )}
//         </div>
//       </form>

//       {/* ERRORS */}
//       {error && <div className="rounded-2xl bg-rose/20 p-4 text-rose">{error}</div>}

//       {/* RESULTS */}
//       {R && (
//         <div className="grid gap-6 md:grid-cols-2">
//           {/* VPA */}
//           {R.fetchVPAFromMobile && (
//             <Section title="UPI / VPA from Mobile">
//               <KV k="Name" v={R.fetchVPAFromMobile.name} />
//               <div className="mt-3 grid gap-2">
//                 {R.fetchVPAFromMobile.upi?.map((u: string) => (
//                   <div key={u} className="rounded-xl bg-white/[0.03] p-3">
//                     {u}
//                   </div>
//                 ))}
//               </div>
//             </Section>
//           )}

//           {/* KYC */}
//           {R.fetchKYCFromMobile && (
//             <Section title="KYC from Mobile">
//               <KV k="Full Name" v={R.fetchKYCFromMobile.fullName} />
//               <KV k="PAN" v={R.fetchKYCFromMobile.pan} />
//               <KV k="Aadhaar" v={R.fetchKYCFromMobile.maskedAadhaar} />
//               <KV k="DOB" v={R.fetchKYCFromMobile.dob} />
//             </Section>
//           )}

//           {/* Bank */}
//           {R.verifyBankDetails && (
//             <Section title="Bank Verification (IFSC + Account)">
//               {["nameAtBank", "bankName", "branch", "city", "state", "ifsc", "address"].map(
//                 (k) => (
//                   <KV key={k} k={k} v={R.verifyBankDetails[k]} />
//                 )
//               )}
//             </Section>
//           )}

//           {/* GST */}
//           {R.fetchGSTValidation?.taxpayerDetails && (
//             <Section title="GSTIN / KYB">
//               {[
//                 ["Legal Name", "lgnm"],
//                 ["Trade Name", "tradeNam"],
//                 ["Status", "sts"],
//                 ["Constitution", "ctb"],
//                 ["Registered On", "rgdt"],
//                 ["Jurisdiction", "ctj"],
//                 ["Office", "stj"],
//                 ["Aadhaar Verified", "adhrVFlag"],
//               ].map(([label, key]) => (
//                 <KV
//                   key={key}
//                   k={label}
//                   v={R.fetchGSTValidation.taxpayerDetails[key as keyof any] as any}
//                 />
//               ))}
//               <div className="mt-3">
//                 <div className="mb-2 text-white/60">Address</div>
//                 <div className="rounded-xl bg-white/[0.03] p-3">
//                   {R.fetchGSTValidation.taxpayerDetails.pradr?.adr}
//                 </div>
//               </div>
//             </Section>
//           )}

//           {/* Face Match */}
//           {R.performFaceMatch && (
//             <Section title="Biometric Match">
//               <KV
//                 k="Same Person"
//                 v={R.performFaceMatch.is_same_face ? "Yes" : "No"}
//               />
//               <KV
//                 k="Confidence"
//                 v={`${(R.performFaceMatch.same_face_confidence * 100).toFixed(
//                   2
//                 )}%`}
//               />
//               <KV
//                 k="Person Image OK"
//                 v={
//                   R.performFaceMatch.person_image_correctly_identified
//                     ? "Yes"
//                     : "Check"
//                 }
//               />
//               <KV
//                 k="Card Image OK"
//                 v={
//                   R.performFaceMatch.card_image_correctly_identified
//                     ? "Yes"
//                     : "Check"
//                 }
//               />
//             </Section>
//           )}
//         </div>
//       )}

//       {/* ADMIN PANEL */}
//       {isAdmin && (
//         <Section title="Admin Panel">
//           <AdminUserManager />
//         </Section>
//       )}

//       <div className="text-sm text-white/50">
//         This page calls <code>/api/user-onboard</code> securely. Secrets are never exposed to the browser.
//       </div>
//     </div>
//   );
// }







//<--------------------------------Design changed fully and----------------------------------------------------------------------------------------------------------------------------------------------






//<----------------------------------------------------------------------------------------------------------------------------------->

// src/pages/Demo.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animate, stagger } from "animejs";
import { Shield, Phone, Landmark, FileText, ScanFace, Activity, Zap, CheckCircle2, AlertTriangle, Search, User as UserIcon, Mail, Crown,
} from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import { api, toMessage } from "../api/client";


const glass = "bg-white/[0.06] border border-white/10 backdrop-blur-md";

const useReducedMotion = () => {
  const [reduced, set] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const on = () => set(!!mq?.matches);
    on();
    mq?.addEventListener?.("change", on);
    return () => mq?.removeEventListener?.("change", on);
  }, []);
  return reduced;
};

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    const on = () => {
      const p = Math.min(
        1,
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
      );
      el.style.transform = `scaleX(${p})`;
    };
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-[3px] bg-white/10">
      <div
        ref={ref}
        className="origin-left h-full bg-gradient-to-r from-[#6C63FF] via-[#35E0FF] to-[#4AF2C6]"
      />
    </div>
  );
}

function CursorParticles() {
  const cvs = useRef<HTMLCanvasElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const d = dot.current!;
    const mm = (e: MouseEvent) => {
      d.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    addEventListener("mousemove", mm, { passive: true });
    return () => removeEventListener("mousemove", mm);
  }, []);
  useEffect(() => {
    if (reduced) return;
    const c = cvs.current!,
      ctx = c.getContext("2d")!;
    let dpr = Math.max(1, devicePixelRatio || 1);
    const resize = () => {
      dpr = Math.max(1, devicePixelRatio || 1);
      c.width = Math.floor(innerWidth * dpr);
      c.height = Math.floor(innerHeight * dpr);
      c.style.width = `${innerWidth}px`;
      c.style.height = `${innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.globalCompositeOperation = "lighter";
    };
    resize();
    addEventListener("resize", resize);
    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const parts: P[] = [];
    const spawn = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = Math.random() * 1.2 + 0.6;
        parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 });
      }
    };
    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life *= 0.96;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
        g.addColorStop(0, `rgba(124,92,255,${0.5 * p.life})`);
        g.addColorStop(1, "rgba(124,92,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
        ctx.fill();
        if (p.life < 0.05) parts.splice(i, 1);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", resize);
    };
  }, [reduced]);
  return (
    <>
      <canvas ref={cvs} className="fixed inset-0 z-10 pointer-events-none" />
      <div
        ref={dot}
        className="fixed left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#7C5CFF]"
        style={{ filter: "drop-shadow(0 0 14px rgba(124,92,255,0.6))" }}
      />
    </>
  );
}

function useTilt(ref: React.RefObject<HTMLElement>, max = 8) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (py - 0.5) * -max;
      const ry = (px - 0.5) * max;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };
    const off = () => {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
    };
    el.addEventListener("mousemove", on);
    el.addEventListener("mouseleave", off);
    return () => {
      el.removeEventListener("mousemove", on);
      el.removeEventListener("mouseleave", off);
    };
  }, [ref, max]);
}

/* =========================================================
   Types & API payloads
   ========================================================= */
type DemoForm = {
  mobile?: string;
  gstin?: string;
  bankAccount?: string;
  ifsc?: string;
  face?: File | null;
  card?: File | null;
};

type UpstreamPayload = {
  success?: boolean;
  response?: any;
  message?: string;
  status?: string;
  statusCode?: number;
  role?: "user" | "admin";
  demoAllocated?: number;
  demoUsed?: number;
  demoRemaining?: number;
};

type AdminListUser = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  demoAllocated: number;
  demoUsed: number;
  demoRemaining: number;
  createdAt: string;
};

/* =========================================================
   Visual atoms used below
   ========================================================= */
const fieldCls =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder-white/40 focus:bg-white/[0.06] transition";

function Label({ children }: { children: React.ReactNode }) {
  return <label className="mb-1 block text-sm text-white/70">{children}</label>;
}

function Section({
  title,
  Icon,
  children,
  accent = "#35E0FF",
}: {
  title: string;
  Icon?: any;
  children: React.ReactNode;
  accent?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref, 6);
  return (
    <div
      ref={ref}
      className={`${glass} rounded-3xl p-5 transition-[box-shadow,transform] hover:shadow-[0_14px_40px_rgba(53,224,255,0.22)] will-change-transform`}
      onMouseEnter={(e) => animate(e.currentTarget, { scale: [{ to: 1.01 }], duration: 140 })}
      onMouseLeave={(e) => animate(e.currentTarget, { scale: [{ to: 1 }], duration: 160 })}
      data-reveal
    >
      <div className="mb-3 flex items-center gap-2 text-lg font-semibold">
        {Icon && (
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(108,99,255,0.25), rgba(53,224,255,0.2))",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Icon className="h-4 w-4" style={{ color: accent }} />
          </span>
        )}
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/[0.03] p-3">
      <div className="text-white/60">{k}</div>
      <div className="col-span-2 break-words">{v}</div>
    </div>
  );
}

/* =========================================================
   ADMIN: Users & Quotas (with self-admin hidden)
   ========================================================= */
function AdminUserManager() {
  const { user: current } = useAuth();
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<AdminListUser[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [dirty, setDirty] = useState<Record<string, Partial<AdminListUser>>>({});

  const load = async () => {
    setErr(null);
    setLoading(true);
    try {
      const { data } = await api.get<{ users: AdminListUser[] }>("/admin/users", {
        params: q ? { search: q } : {},
      });
      // Filter: hide the logged-in admin's own email in the list
      const filtered =
        (data.users || []).filter((u) => u.email !== current?.email) ?? [];
      setRows(filtered);
      setDirty({});
      // subtle reveal animation
      const t = document.querySelectorAll<HTMLElement>("[data-row]");
      animate(t, {
        opacity: [{ from: 0, to: 1 }],
        translateY: [{ from: 8, to: 0 }],
        delay: stagger(24),
        duration: 380,
        easing: "easeOutCubic",
      });
    } catch (e) {
      setErr(toMessage(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (id: string, patch: Partial<AdminListUser>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
    setDirty((d) => ({ ...d, [id]: { ...(d[id] || {}), ...patch } }));
  };

  const save = async (u: AdminListUser) => {
    const patch = dirty[u.id];
    if (!patch || Object.keys(patch).length === 0) return;
    try {
      const body: any = {};
      if (patch.demoAllocated !== undefined) body.demoAllocated = patch.demoAllocated;
      if (patch.demoUsed !== undefined) body.demoUsed = patch.demoUsed;
      if (patch.role !== undefined) body.role = patch.role;

      await api.patch(`/admin/users/${u.id}`, body);

      // pulse row on success
      const row = document.getElementById(`row-${u.id}`);
      if (row) {
        animate(row, {
          boxShadow: [
            { value: "0 0 0 0 rgba(53,224,255,0)" },
            { value: "0 0 40px 8px rgba(53,224,255,0.20)" },
            { value: "0 0 0 0 rgba(53,224,255,0)" },
          ],
          duration: 650,
          easing: "easeOutCubic",
        });
      }

      await load();
    } catch (e) {
      alert(toMessage(e, "Update failed"));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-3 flex-wrap">
        <div>
          <div className="text-xl font-semibold flex items-center gap-2">
            <Crown className="h-5 w-5 text-[#35E0FF]" /> Admin · Users & Quotas
          </div>
          <div className="text-white/60 text-sm">
            Filter by name/email. Adjust <b>Allocated</b> or <b>Used</b>, then press{" "}
            <b>Update</b>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Search className="h-4 w-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className={`${fieldCls} pl-9 w-[260px]`}
              placeholder="Search name or email…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <button
            onClick={load}
            className="rounded-xl bg-white/10 border border-white/15 px-4 py-2 hover:bg-white/15"
          >
            {loading ? "Searching…" : "Search"}
          </button>
        </div>
      </div>

      {err && (
        <div className="rounded-xl bg-rose/20 p-3 text-rose inline-flex items-center gap-2">
          <AlertTriangle className="h-4 w-4" /> {err}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/[0.04]">
            <tr className="[&>th]:text-left [&>th]:px-3 [&>th]:py-2">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Allocated</th>
              <th>Used</th>
              <th>Remaining</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="[&>tr]:border-b [&>tr]:border-white/10">
            {rows.map((u) => {
              const isDirty = !!dirty[u.id];
              return (
                <tr
                  id={`row-${u.id}`}
                  key={u.id}
                  data-row
                  className="[&>td]:px-3 [&>td]:py-2 align-middle"
                >
                  <td className="whitespace-nowrap">
                    <div className="inline-flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                        <UserIcon className="h-4 w-4 text-white/70" />
                      </span>
                      {u.name}
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-white/80">{u.email}</td>
                  <td>
                    <select
                      className="rounded-lg bg-white/5 border border-white/10 px-2 py-1"
                      value={u.role}
                      onChange={(e) => onChange(u.id, { role: e.target.value as any })}
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td>
                    <Stepper
                      value={u.demoAllocated}
                      onChange={(val) => onChange(u.id, { demoAllocated: Math.max(0, val) })}
                    />
                  </td>
                  <td>
                    <Stepper
                      value={u.demoUsed}
                      onChange={(val) => onChange(u.id, { demoUsed: Math.max(0, val) })}
                    />
                  </td>
                  <td className="text-center">{u.demoRemaining}</td>
                  <td>
                    <button
                      disabled={!isDirty}
                      onClick={() => save(u)}
                      className="rounded-lg bg-cyan-500/80 hover:bg-cyan-500 text-black font-semibold px-3 py-1 disabled:opacity-50"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && !loading && (
              <tr>
                <td colSpan={7} className="px-3 py-6 text-center text-white/60">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const dec = () => onChange(Math.max(0, value - 1));
  const inc = () => onChange(value + 1);
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
        onClick={dec}
      >
        −
      </button>
      <input
        type="number"
        className="w-24 rounded bg-white/5 border border-white/10 px-2 py-1 text-right"
        value={value}
        onChange={(e) => onChange(Number(e.target.value || 0))}
      />
      <button
        type="button"
        className="px-2 py-1 rounded bg-white/10 hover:bg-white/15"
        onClick={inc}
      >
        +
      </button>
    </div>
  );
}

/* =========================================================
   MAIN DEMO PAGE (marketing + interactive demo)
   ========================================================= */
export default function Demo() {
  const nav = useNavigate();
  const { user, logout, refreshMe } = useAuth();
  const reduced = useReducedMotion();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState<DemoForm>({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UpstreamPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Counters we show to non-admin users
  const [allocated, setAllocated] = useState<number>(3);
  const [hitsLeft, setHitsLeft] = useState<number>(3);
  const isAdmin = user?.role === "admin";

  const onChange = (k: keyof DemoForm, v: any) => setForm((f) => ({ ...f, [k]: v }));

  const svc = useMemo(() => {
    const identity = !!form.mobile?.trim();
    const bank = !!form.bankAccount?.trim() && !!form.ifsc?.trim();
    const gst = !!form.gstin?.trim();
    const face = !!form.face && !!form.card;
    const any = identity || bank || gst || face;
    return { identity, bank, gst, face, any };
  }, [form]);

  // First paint: animate headline and counters
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (reduced) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const tgts = e.target.querySelectorAll<HTMLElement>("[data-reveal-item]");
          const target = tgts.length ? tgts : [e.target as HTMLElement];
          animate(target, {
            opacity: [{ from: 0, to: 1 }],
            translateY: [{ from: 18, to: 0 }],
            delay: stagger(28),
            duration: 520,
            easing: "easeOutCubic",
          });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reduced]);

  // Initialize counters from /auth/me
  useEffect(() => {
    (async () => {
      const me = user ? { user } : await refreshMe();
      const u = me?.user;
      if (u && u.role !== "admin") {
        setAllocated(u.demoAllocated ?? 3);
        setHitsLeft(u.demoRemaining ?? Math.max(0, (u.demoAllocated ?? 3) - (u.demoUsed ?? 0)));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setData(null);

    if (!user) {
      setError("Please log in to use the demo.");
      nav("/login", { replace: true });
      return;
    }
    if (!svc.any) {
      setError(
        "Fill at least one service: Mobile, GSTIN, Bank (Account+IFSC) or Face+Card."
      );
      return;
    }
    if (!isAdmin && hitsLeft <= 0) {
      setError("Demo limit reached. Please contact our team.");
      nav("/contact", { replace: true });
      return;
    }

    try {
      setLoading(true);

      const fd = new FormData();
      if (svc.identity) fd.append("mobile", form.mobile!.trim());
      if (svc.gst) fd.append("gstin", form.gstin!.trim());
      if (svc.bank) {
        fd.append("bankAccount", form.bankAccount!.trim());
        fd.append("ifsc", form.ifsc!.trim());
      }
      if (svc.face) {
        fd.append("face", form.face!);
        fd.append("card", form.card!);
      }

      const res = await api.post<UpstreamPayload>("/user-onboard", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const payload = res.data || {};
      setData(payload);

      // Button pulse on success
      const btn = document.getElementById("run-btn");
      if (btn) {
        animate(btn, {
          scale: [{ value: 1.02 }, { value: 1 }],
          duration: 180,
          easing: "easeOutCubic",
        });
      }

      // Update counters from backend echo
      if (!isAdmin) {
        if (
          typeof payload.demoAllocated === "number" &&
          typeof payload.demoRemaining === "number"
        ) {
          setAllocated(payload.demoAllocated);
          setHitsLeft(payload.demoRemaining);
        } else {
          const me = await refreshMe();
          if (me?.user) {
            setAllocated(me.user.demoAllocated);
            setHitsLeft(me.user.demoRemaining);
          }
        }
      } else {
        await refreshMe();
      }
    } catch (err) {
      setError(toMessage(err, "Something went wrong"));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const R = data?.response;

  /* ---------- Decorative background parallax dots ---------- */
  const bgParallax = (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_20%_0%,rgba(124,92,255,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(53,224,255,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_100%,rgba(74,242,198,0.12),transparent_60%)]" />
    </div>
  );

  return (
    <div className="pt-16 relative">
      <ScrollProgress />
      <CursorParticles />
      {bgParallax}

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center" data-reveal>
        <div className="relative mx-10 w-full max-w-none py-10">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div>
              <div
                className={`${glass} inline-flex items-center rounded-full px-4 py-2 mb-5`}
                data-reveal-item
              >
                <Shield className="h-4 w-4 text-[#35E0FF] mr-2" />
                <span className="text-[#35E0FF] text-sm font-medium">
                  FraudBuster · Live KYC/KYB Demo
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.04]" data-reveal-item>
                Verify identities in seconds—beautifully.
              </h1>
              <p className="text-lg md:text-xl text-white/75 mt-3 max-w-2xl" data-reveal-item>
                Phone KYC, bank account verification, GST validation, and biometric matching—
                all in one sleek workflow. Your quota, guardrails, and audit trail included.
              </p>

              {/* Live signals */}
              <div className="mt-6 grid grid-cols-3 gap-4 max-w-xl" data-reveal-item>
                <Metric icon={Activity} label="API p99" value="~480ms" />
                <Metric icon={Zap} label="Checks today" value="1,204" />
                <Metric
                  icon={CheckCircle2}
                  label={isAdmin ? "Admin" : "Hits left"}
                  value={isAdmin ? "Unlimited" : `${hitsLeft}/${allocated}`}
                />
              </div>

              <div className="mt-6 flex gap-3" data-reveal-item>
                <Link
                  to="/api"
                  className="rounded-2xl bg-[#7C5CFF]/90 px-6 py-3 font-semibold text-white shadow-[0_12px_40px_rgba(124,92,255,0.35)] hover:translate-y-[1px] transition will-change-transform"
                >
                  Read API Docs
                </Link>
                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/5 transition will-change-transform"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Quick explainer card */}
            <div className={`rounded-2xl ${glass} p-6`} data-reveal-item>
              <div className="text-xs text-white/60 mb-2">How it works</div>
              <div className="rounded-xl bg-black/40 border border-white/10 p-4">
                <ul className="space-y-2 text-sm">
                  <li>• Choose one or more services below (Phone, Bank, GST or Face+Card)</li>
                  <li>• We securely proxy to FraudBuster upstream (keys on server)</li>
                  <li>• Your quota updates live—admins have unlimited</li>
                  <li>• See parsed results and ready-to-log fields instantly</li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-5">
                <Badge icon={Phone} text="Phone KYC" />
                <Badge icon={Landmark} text="Bank verify" />
                <Badge icon={FileText} text="GST check" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DEMO FORM & RESULTS ===================== */}
      <div className="mx-10 w-full max-w-none">
        <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2" data-reveal>
          {/* Identity */}
          <Section title="Identity (Phone)" Icon={Phone}>
            <Label>Mobile</Label>
            <input
              className={fieldCls}
              placeholder="e.g. 810XXXXXXX0"
              onChange={(e) => onChange("mobile", e.target.value)}
            />
          </Section>

          {/* Bank */}
          <Section title="Bank Identity" Icon={Landmark}>
            <Label>Bank Account</Label>
            <input
              className={fieldCls}
              placeholder="e.g. 920023XXXXXXXXX"
              onChange={(e) => onChange("bankAccount", e.target.value)}
            />
            <div className="mt-4">
              <Label>IFSC</Label>
              <input
                className={fieldCls}
                placeholder="e.g. UTIXXXXXXXX"
                onChange={(e) => onChange("ifsc", e.target.value)}
              />
            </div>
          </Section>

          {/* GST */}
          <Section title="GST" Icon={FileText}>
            <Label>GSTIN</Label>
            <input
              className={fieldCls}
              placeholder="e.g. 29FJOXXXXXXXXXX"
              onChange={(e) => onChange("gstin", e.target.value)}
            />
          </Section>

          {/* Face */}
          <Section title="Biometric (Face Match)" Icon={ScanFace}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Face Image</Label>
                <input
                  type="file"
                  accept="image/*"
                  className={fieldCls}
                  onChange={(e) => onChange("face", e.target.files?.[0] || null)}
                />
              </div>
              <div>
                <Label>ID Card Image</Label>
                <input
                  type="file"
                  accept="image/*"
                  className={fieldCls}
                  onChange={(e) => onChange("card", e.target.files?.[0] || null)}
                />
              </div>
            </div>
          </Section>

          {/* Submit */}
          <div className="md:col-span-2" data-reveal>
            <button
              id="run-btn"
              className="w-full rounded-2xl bg-gradient-to-r from-[#35E0FF] to-[#6C63FF] px-6 py-3 font-semibold shadow-[0_18px_60px_rgba(53,224,255,0.25)] hover:translate-y-[1px] transition disabled:opacity-60"
              disabled={loading || !svc.any || (!isAdmin && hitsLeft <= 0)}
            >
              {loading ? "Checking..." : "Run Fraud Checks"}
            </button>
            {!svc.any && (
              <div className="mt-2 text-sm text-white/60">
                Fill at least one service (Mobile, GSTIN, Bank+IFSC, or Face+Card).
              </div>
            )}
            {!isAdmin && hitsLeft <= 0 && (
              <div className="mt-2 text-sm">
                No external hits remaining.{" "}
                <Link to="/contact" className="text-cyan-400 underline">
                  Contact sales →
                </Link>
              </div>
            )}
          </div>
        </form>

        {/* ERRORS */}
        {error && (
          <div className="rounded-2xl bg-rose/20 p-4 text-rose mt-6 inline-flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" /> {error}
          </div>
        )}

        {/* RESULTS */}
        {R && (
          <div className="grid gap-6 md:grid-cols-2 mt-8" data-reveal>
            {/* VPA */}
            {R.fetchVPAFromMobile && (
              <Section title="UPI / VPA from Mobile">
                <KV k="Name" v={R.fetchVPAFromMobile.name} />
                <div className="mt-3 grid gap-2">
                  {R.fetchVPAFromMobile.upi?.map((u: string) => (
                    <div key={u} className="rounded-xl bg-white/[0.03] p-3">
                      {u}
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* KYC */}
            {R.fetchKYCFromMobile && (
              <Section title="KYC from Mobile">
                <KV k="Full Name" v={R.fetchKYCFromMobile.fullName} />
                <KV k="PAN" v={R.fetchKYCFromMobile.pan} />
                <KV k="Aadhaar" v={R.fetchKYCFromMobile.maskedAadhaar} />
                <KV k="DOB" v={R.fetchKYCFromMobile.dob} />
              </Section>
            )}

            {/* Bank */}
            {R.verifyBankDetails && (
              <Section title="Bank Verification (IFSC + Account)">
                {["nameAtBank", "bankName", "branch", "city", "state", "ifsc", "address"].map(
                  (k) => (
                    <KV key={k} k={k} v={R.verifyBankDetails[k]} />
                  )
                )}
              </Section>
            )}

            {/* GST */}
            {R.fetchGSTValidation?.taxpayerDetails && (
              <Section title="GSTIN / KYB">
                {[
                  ["Legal Name", "lgnm"],
                  ["Trade Name", "tradeNam"],
                  ["Status", "sts"],
                  ["Constitution", "ctb"],
                  ["Registered On", "rgdt"],
                  ["Jurisdiction", "ctj"],
                  ["Office", "stj"],
                  ["Aadhaar Verified", "adhrVFlag"],
                ].map(([label, key]) => (
                  <KV
                    key={key}
                    k={label}
                    v={R.fetchGSTValidation.taxpayerDetails[key as keyof any] as any}
                  />
                ))}
                <div className="mt-3">
                  <div className="mb-2 text-white/60">Address</div>
                  <div className="rounded-xl bg-white/[0.03] p-3">
                    {R.fetchGSTValidation.taxpayerDetails.pradr?.adr}
                  </div>
                </div>
              </Section>
            )}

            {/* Face Match */}
            {R.performFaceMatch && (
              <Section title="Biometric Match">
                <KV k="Same Person" v={R.performFaceMatch.is_same_face ? "Yes" : "No"} />
                <KV
                  k="Confidence"
                  v={`${(R.performFaceMatch.same_face_confidence * 100).toFixed(2)}%`}
                />
                <KV
                  k="Person Image OK"
                  v={R.performFaceMatch.person_image_correctly_identified ? "Yes" : "Check"}
                />
                <KV
                  k="Card Image OK"
                  v={R.performFaceMatch.card_image_correctly_identified ? "Yes" : "Check"}
                />
              </Section>
            )}
          </div>
        )}

        {/* ADMIN PANEL */}
        {isAdmin && (
          <div className="mt-10" data-reveal>
            <div className="mb-3 text-lg font-semibold flex items-center gap-2">
              <Crown className="h-5 w-5 text-[#35E0FF]" />
              <span>Admin Panel</span>
            </div>
            <Section title="Manage Users & Quotas">
              <AdminUserManager />
            </Section>
          </div>
        )}

        {/* Footer hint */}
        {/* <div className="text-sm text-white/50 mt-10" data-reveal>
          This page calls <code>/api/user-onboard</code> securely. Secrets are never exposed to the
          browser.
        </div> */}
      </div>

      {/* Sticky user bar */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className={`${glass} rounded-2xl px-4 py-2 flex items-center gap-3`}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <Mail className="h-4 w-4 text-white/80" />
          </span>
          <div className="leading-tight">
            <div className="text-xs text-white/60">Signed in</div>
            <div className="text-sm">
              {user ? user.email : <span className="text-white/60">Guest</span>}
            </div>
          </div>
          {user ? (
            <button
              onClick={() => {
                logout();
                nav("/login", { replace: true });
              }}
              className="ml-2 rounded-lg bg-white/10 border border-white/15 px-3 py-1.5 hover:bg-white/15 text-sm"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-2 rounded-lg bg-white/10 border border-white/15 px-3 py-1.5 hover:bg-white/15 text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Small visual bits
   ========================================================= */
function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-4 border border-white/10" data-reveal-item>
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#35E0FF]" />
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Badge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="rounded-xl bg-white/[0.06] p-3 border border-white/10 flex items-center gap-2">
      <Icon className="h-4 w-4 text-[#35E0FF]" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
