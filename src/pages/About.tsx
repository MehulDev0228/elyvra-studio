import React from 'react';
import { PageTransition } from '../components/Transition';
import { BRAND_NAME } from '../constants';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <section className="px-6 md:px-12 py-12 md:py-24">
        <div className="mb-20">
           <h1 className="text-[10vw] font-display font-bold tracking-tighter leading-none mb-8">
              ORIGIN STORY
           </h1>
           <p className="text-accent font-mono tracking-widest uppercase text-sm">Syntra / Evolved</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
                <p className="text-2xl md:text-3xl leading-snug font-medium text-white/90">
                    {BRAND_NAME} represents the next evolution of our journey. Born from the foundations of Syntra, we have evolved into a premier studio for intelligent design.
                </p>
            </div>
            <div className="space-y-8 text-secondary text-lg leading-relaxed">
                <p>
                    We realized that the future of digital products isn't just about clean code or pretty pixels—it's about <strong>Intelligence</strong>. The integration of AI agents, decentralized logic, and immersive motion is no longer optional; it is the baseline for the next generation of unicorns.
                </p>
                <p>
                    Our mission is simple: To provide Clarity in a world of noise, and to engineer digital experiences that feel alive.
                </p>
            </div>
        </div>

        {/* Values Section */}
        <div className="mt-32 border-t border-white/10 pt-20">
            <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-16">Our Core Frequency</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                    { title: 'Clarity', desc: 'We strip away the non-essential to reveal the potent truth of your product.' },
                    { title: 'Precision', desc: 'Pixel-perfect engineering meets military-grade backend architecture.' },
                    { title: 'Emotional Intelligence', desc: 'Technology that understands context, adapts to human intent, and resonates on a deeper level.' },
                    { title: 'Creativity', desc: 'We push the boundaries of what is possible on the web, merging art with computation.' }
                ].map((value, i) => (
                    <div key={i} className="space-y-4">
                        <span className="text-4xl font-display font-bold text-white/20">0{i+1}</span>
                        <h4 className="text-2xl font-medium">{value.title}</h4>
                        <p className="text-secondary max-w-md">{value.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-32">
            <h3 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Alex V.', role: 'Creative Director', img: 'https://picsum.photos/400/500?random=10' },
                    { name: 'Sarah K.', role: 'Head of Engineering', img: 'https://picsum.photos/400/500?random=11' },
                    { name: 'Marcus J.', role: 'AI Strategy', img: 'https://picsum.photos/400/500?random=12' },
                ].map((person) => (
                    <div key={person.name} className="group">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4 bg-gray-900 relative">
                             <div className="absolute inset-0 bg-accent/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
                             <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" />
                        </div>
                        <h4 className="text-xl font-medium">{person.name}</h4>
                        <span className="text-sm text-secondary font-mono">{person.role}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </PageTransition>
  );
};