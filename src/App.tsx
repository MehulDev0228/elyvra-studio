import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// Components
import { Navbar } from './components/Navbar';
import { Cursor } from './components/Cursor';
import { ParticleField } from './components/ParticleField';
import { Footer } from './components/Footer';
import { IntroOverlay } from './components/IntroOverlay';

// Pages
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <Router>
      <div className="relative min-h-screen text-white selection:bg-accent selection:text-white">
        
        <AnimatePresence>
          {showIntro && (
            <IntroOverlay onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        {/* Background Effects */}
        <div className="fixed inset-0 bg-[#050505] -z-20" />
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10 mix-blend-overlay" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        <ParticleField />
        
        {/* UI Layer - Only visible after intro or fading in during intro exit */}
        <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
          <Cursor />
          <Navbar />
          
          <main className="relative z-0">
            <ScrollToTop />
            <AnimatedRoutes />
          </main>

          <Footer />
          <Analytics />
        </div>
      </div>
    </Router>
  );
};

export default App;