import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Layers } from 'lucide-react';
import { PageTransition } from '../components/Transition';
import { PROJECTS } from '../constants';
import { MagneticButton } from '../components/MagneticButton';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.9] tracking-tighter"
          >
            INTELLIGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">DESIGN.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <p className="text-lg md:text-xl text-secondary max-w-md font-light">
              We are Elyvra Studio. We build cinematic AI-driven products and immersive digital systems for the next generation of founders.
            </p>
            
            <Link to="/work">
              <MagneticButton className="px-8 py-4 border border-white/20 rounded-full flex items-center gap-2 hover:border-white transition-colors bg-white/5 backdrop-blur-md">
                Start a Project <ArrowRight size={18} />
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">The Elyvra Mindset</span>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-display font-medium leading-tight">
              We don't just build websites. <br/>
              <span className="text-white/40">We engineer digital organisms that breathe, react, and evolve.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mb-4">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-xl font-medium">AI-Native</h3>
                  <p className="text-sm text-secondary">Embedded intelligence in every pixel. From predictive agents to generative UI.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mb-4">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-xl font-medium">Web3 Ready</h3>
                  <p className="text-sm text-secondary">Seamless integration of decentralized protocols with luxury aesthetics.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent mb-4">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-medium">Cinematic Eng</h3>
                  <p className="text-sm text-secondary">Motion-first engineering using WebGL and high-performance stacks.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Selected Work</h2>
          <Link to="/work" className="hidden md:block text-sm font-mono hover:text-accent transition-colors">VIEW ALL PROJECTS</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.slice(0, 2).map((project) => (
            <Link to={`/work`} key={project.id} className="group cursor-none">
              <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-medium mb-1">{project.title}</h3>
                  <p className="text-secondary text-sm">{project.category}</p>
                </div>
                <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded-full">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};