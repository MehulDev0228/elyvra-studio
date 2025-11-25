import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroOverlay: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Timeline:
    // 0s-1s: Init
    // 1s-4s: Liquid Morph
    // 4s-7s: Tagline
    // 7s-10s: Brand
    // 10s: Exit

    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 4500);
    const t3 = setTimeout(() => setStep(3), 7500);
    const t4 = setTimeout(() => onComplete(), 10500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden"
      exit={{ 
        opacity: 0,
        filter: "brightness(2)", 
        transition: { duration: 1.5, ease: "easeInOut" } 
      }}
    >
      {/* Ambient Noise Texture */}
      <div className="absolute inset-0 opacity-[0.15]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center">
        
        {/* Liquid Morphing Animation */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="liquid"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
              transition={{ duration: 1.5 }}
              className="liquid-filter relative w-64 h-64 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  x: [0, 30, -30, 0],
                  y: [0, -30, 30, 0],
                  scale: [1, 1.2, 0.8, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-32 h-32 bg-white rounded-full mix-blend-screen"
              />
              <motion.div 
                animate={{ 
                  x: [0, -40, 40, 0],
                  y: [0, 40, -40, 0],
                  scale: [1, 0.8, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="absolute w-32 h-32 bg-accent rounded-full mix-blend-screen opacity-80"
              />
            </motion.div>
          )}

          {/* Tagline Reveal */}
          {step === 2 && (
            <motion.div
              key="tagline"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-4xl font-display font-light tracking-widest text-white/90 uppercase">
                Where Intelligence <br />
                <span className="text-white/40">Meets Imagination</span>
              </h2>
            </motion.div>
          )}

          {/* Brand Reveal */}
          {step === 3 && (
            <motion.div
              key="brand"
              initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }} // Handled by parent exit
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h1 className="text-[10vw] md:text-[8vw] font-display font-bold tracking-tighter leading-none text-white mix-blend-difference">
                ELYVRA
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-accent font-mono tracking-[0.5em] text-sm md:text-base mt-4 uppercase"
              >
                Studio
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Cinematic Grain/Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] z-20" />
    </motion.div>
  );
};