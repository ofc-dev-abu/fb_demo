import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import WhitePapers from './pages/WhitePapers';
import SupportCenter from './pages/SupportCenter';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Compliance from './pages/Compliance';
import Security from './pages/Security';
import ApiDocumentation from './pages/ApiDocumentation';
import IntegrationGuide from './pages/IntegrationGuide';
import SecurityFeatures from './pages/SecurityFeatures';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Partners from './pages/Partners';
import Footer from './components/Footer';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* <div className="min-h-screen bg-gradient-to-br from-indigo-600/95 via-purple-700/90 to-indigo-600/95"> */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/white-papers" element={<WhitePapers />} />
            <Route path="/support" element={<SupportCenter />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/security" element={<Security />} />
            <Route path="/api-docs" element={<ApiDocumentation />} />
            <Route path="/integration" element={<IntegrationGuide />} />
            <Route path="/security-features" element={<SecurityFeatures />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<Press />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;