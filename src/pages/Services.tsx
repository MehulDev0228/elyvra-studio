import React from 'react';
import { PageTransition } from '../components/Transition';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { Plus, Box } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <PageTransition>
       <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="mb-20">
          <h1 className="text-[10vw] font-display font-bold tracking-tighter leading-none">
            CAPABILITIES
          </h1>
          <p className="mt-8 text-xl text-secondary max-w-2xl">
            We operate at the intersection of aesthetic brilliance and engineering precision.
          </p>
        </div>

        <div className="border-t border-white/10">
          {SERVICES.map((service, index) => (
            <div key={service.id} className="group border-b border-white/10 py-12 md:py-20 hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-8">
                <div className="md:w-1/3">
                  <span className="font-mono text-accent text-sm mb-2 block">0{index + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-bold font-display">{service.title}</h3>
                </div>
                
                <div className="md:w-1/3">
                  <p className="text-lg text-white/80 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-secondary font-mono">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/4 flex justify-end items-start">
                    <motion.div 
                      className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300"
                      whileHover={{ rotate: 90 }}
                    >
                      <Plus size={28} />
                    </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WebGL / AI Feature Box */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/30 transition-colors duration-700"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold mb-4">AI & LLM Integration</h3>
                    <p className="text-secondary mb-8">
                        We don't just design interfaces; we integrate intelligent agents. From customer support to predictive analytics, our stacks are AI-ready from day one.
                    </p>
                    <span className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full uppercase">Powered by Gemini</span>
                </div>
            </div>

            <div className="p-8 md:p-12 rounded-3xl bg-surface border border-white/10 relative overflow-hidden group">
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                 <h3 className="text-2xl font-display font-bold mb-4">Spatial Web & WebGL</h3>
                 <p className="text-secondary mb-8">
                    Moving beyond the flat web. We build immersive 3D environments using R3F and Three.js that increase engagement and tell better stories.
                 </p>
                 <Box className="text-white/40 group-hover:text-accent transition-colors" size={32} />
            </div>
        </div>

      </section>
    </PageTransition>
  );
};