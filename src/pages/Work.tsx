import React from 'react';
import { PageTransition } from '../components/Transition';
import { PROJECTS } from '../constants';

export const Work: React.FC = () => {
  return (
    <PageTransition>
      <section className="px-6 md:px-12 py-12 md:py-24">
        <h1 className="text-[10vw] font-display font-bold tracking-tighter leading-none mb-12 opacity-90">
          CASE STUDIES
        </h1>
        
        <div className="flex flex-col gap-24 md:gap-40">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`flex flex-col md:flex-row gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-2/3 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                <div className="relative overflow-hidden rounded-xl aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/3 flex flex-col justify-center">
                <span className="font-mono text-accent text-xs mb-4">0{index + 1} / {project.year}</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{project.title}</h2>
                <p className="text-secondary mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-3 flex-wrap">
                  {['React', 'WebGL', 'AI', 'Design'].map((tag) => (
                    <span key={tag} className="text-xs font-mono border border-white/10 px-3 py-1 rounded-full text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};