// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion'; 
// import Navbar from './components/Navbar'; /
// import Home from './pages/Home'; /
// import Product from './pages/Product'; /
// import Contact from './pages/Contact'; /
// import AboutUs from './pages/AboutUs';
// import Blog from './pages/Blog'; /
// import CaseStudies from './pages/CaseStudies'; /
// import WhitePapers from './pages/WhitePapers'; /
// import SupportCenter from './pages/SupportCenter'; /
// import PrivacyPolicy from './pages/PrivacyPolicy'; /
// import TermsOfService from './pages/TermsOfService'; /
// import Compliance from './pages/Compliance'; /
// import Security from './pages/Security'; /
// import ApiDocumentation from './pages/ApiDocumentation'; /
// import IntegrationGuide from './pages/IntegrationGuide'; /
// import SecurityFeatures from './pages/SecurityFeatures'; /
// import Careers from './pages/Careers'; /
// import Press from './pages/Press'; /
// import Partners from './pages/Partners'; /
// import Footer from './components/Footer'; /

// // Component to handle scroll to top on route change
// function ScrollToTop() {
//   const { pathname } = useLocation();

//   React.useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [pathname]);

//   return null;
// }

// function App() {
//   return (
//     <Router>
//       {/* <div className="min-h-screen bg-gradient-to-br from-indigo-600/95 via-purple-700/90 to-indigo-600/95"> */}
//       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//         <ScrollToTop />
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/white-papers" element={<WhitePapers />} />
//             <Route path="/support" element={<SupportCenter />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<TermsOfService />} />
//             <Route path="/compliance" element={<Compliance />} />
//             <Route path="/security" element={<Security />} />
//             <Route path="/api-docs" element={<ApiDocumentation />} />
//             <Route path="/integration" element={<IntegrationGuide />} />
//             <Route path="/security-features" element={<SecurityFeatures />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/press" element={<Press />} />
//             <Route path="/partners" element={<Partners />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;










//<------------------new design tried----------------------------------------------------->




//<--------------------new design tried----------------------------------------------------->

// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Product from "./pages/Product";
// import ApiDocumentation from "./pages/ApiDocumentation";
// import CaseStudies from "./pages/CaseStudies";
// import Blog from "./pages/Blog";
// import Partners from "./pages/Partners";
// import WhitePapers from "./pages/WhitePapers";
// import Press from "./pages/Press";
// import Security from "./pages/Security";
// import SecurityFeatures from "./pages/SecurityFeatures";
// import Compliance from "./pages/Compliance";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import SupportCenter from "./pages/SupportCenter";
// import IntegrationGuide from "./pages/IntegrationGuide";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import AboutUs from "./pages/AboutUs";
// import Register from "./pages/Register";
// import Login from "./pages/Login";

// // NEW
// import Demo from "./pages/Demo";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="relative min-h-screen overflow-clip aurora">
//         <Navbar />
//         <main className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//             <Route path="/api" element={<ApiDocumentation />} />
//             <Route path="/case-studies" element={<CaseStudies />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/partners" element={<Partners />} />
//             <Route path="/whitepapers" element={<WhitePapers />} />
//             <Route path="/press" element={<Press />} />
//             <Route path="/security" element={<Security />} />
//             <Route path="/security-features" element={<SecurityFeatures />} />
//             <Route path="/compliance" element={<Compliance />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />
//             <Route path="/terms" element={<TermsOfService />} />
//             <Route path="/support" element={<SupportCenter />} />
//             <Route path="/integration-guide" element={<IntegrationGuide />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<AboutUs />} />

//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/demo" element={<Demo />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }










//<------------------new design tried----------------------------------------------------->









//<--------------------new design tried----------------------------------------------------->


// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ApiDocumentation from "./pages/ApiDocumentation";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import WhitePapers from "./pages/WhitePapers";
import Press from "./pages/Press";
import Security from "./pages/Security";
import SecurityFeatures from "./pages/SecurityFeatures";
import Compliance from "./pages/Compliance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SupportCenter from "./pages/SupportCenter";
import IntegrationGuide from "./pages/IntegrationGuide";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Demo from "./pages/Demo";

// NEW wrappers
import { AuthProvider } from "./context/AuthProvider";
// import { CreditsProvider } from "./context/CreditsProvider";
import Protected from "./routes/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <CreditsProvider> */}
          <div className="relative min-h-screen   overflow-clip aurora">
            <Navbar />
            {/* <main className="mx-auto w-full max-w-20xl px-6 pb-24 pt-28"> */}
            <main className="mx-10 w-full max-w-20xl px-6 pb-24 pt-28">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/api" element={<ApiDocumentation />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/whitepapers" element={<WhitePapers />} />
                <Route path="/press" element={<Press />} />
                <Route path="/security" element={<Security />} />
                <Route path="/security-features" element={<SecurityFeatures />} />
                <Route path="/compliance" element={<Compliance />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/support" element={<SupportCenter />} />
                <Route path="/integration-guide" element={<IntegrationGuide />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<AboutUs />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/* Demo requires auth */}
                <Route element={<Protected />}>
                  <Route path="/demo" element={<Demo />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        {/* </CreditsProvider> */}
      </AuthProvider>
    </BrowserRouter>
  );
}
