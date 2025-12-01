import React from 'react';
import { BRAND_NAME } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 py-12 md:px-12 md:py-20 border-t border-white/10 bg-background relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-md">
          <h2 className="text-[12vw] md:text-[6vw] font-bold font-display leading-[0.8] tracking-tighter opacity-20 select-none">
            {BRAND_NAME}
          </h2>
          <p className="mt-8 text-white/50 text-sm md:text-base max-w-sm">
            Forging the future of digital interaction through intelligence, aesthetics, and engineering.
          </p>
        </div>

        <div className="flex gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Socials</h4>
            {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map((social) => (
              <a key={social} href="#" className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors group">
                {social}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Legal</h4>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 md:mt-24 flex justify-between items-center border-t border-white/5 pt-8">
        <span className="text-xs text-white/30 font-mono">© 2024 {BRAND_NAME} STUDIOS</span>
        <span className="text-xs text-white/30 font-mono">NY — New Delhi, India — TYO</span>
      </div>
    </footer>
  );
};
