import React, { useState } from 'react';
import { PageTransition } from '../components/Transition';
import { MagneticButton } from '../components/MagneticButton';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle submission
        alert("Thank you for your inquiry. We will be in touch shortly.");
    };

  return (
    <PageTransition>
      <section className="px-6 md:px-12 py-12 md:py-24 min-h-screen flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="md:w-1/2">
            <h1 className="text-[10vw] md:text-[6vw] font-display font-bold tracking-tighter leading-none mb-8">
                LET'S TALK<br/>FUTURE.
            </h1>
            <p className="text-xl text-secondary max-w-md mb-12">
                Have a vision? We have the engineering and design prowess to build it.
            </p>

            <div className="space-y-8">
                <div>
                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Email</h4>
                    <a href="mailto:hello@elyvra.com" className="text-2xl font-medium hover:text-accent transition-colors">hello@elyvra.com</a>
                </div>
                <div>
                    <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-2">Studio</h4>
                    <p className="text-xl font-medium text-white/80">
                        100 Lafayette St,<br/>
                        SoHo, New York
                    </p>
                </div>
            </div>
        </div>

        <div className="md:w-1/2 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                    <label className="text-sm font-mono text-white/60">NAME</label>
                    <input 
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-mono text-white/60">EMAIL</label>
                    <input 
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors"
                        placeholder="john@company.com"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-mono text-white/60">MESSAGE</label>
                    <textarea 
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        required
                    />
                </div>

                <div className="pt-8">
                    <MagneticButton className="w-full bg-white text-black py-4 rounded-full font-bold flex flex-row justify-center items-center gap-3 hover:bg-gray-200 transition-colors whitespace-nowrap">
                        <span>SEND INQUIRY</span> <Send size={18} />
                    </MagneticButton>
                </div>
            </form>
        </div>

      </section>
    </PageTransition>
  );
};