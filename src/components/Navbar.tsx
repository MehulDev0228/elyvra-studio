import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BRAND_NAME, NAVIGATION } from '../constants';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center pointer-events-none">
      {/* Brand Logo */}
      <NavLink 
        to="/" 
        className="pointer-events-auto text-2xl font-display font-bold tracking-tighter mix-blend-difference text-white"
      >
        {BRAND_NAME}
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 pointer-events-auto glass-panel rounded-full px-2 py-2">
        {NAVIGATION.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${isActive ? 'text-black' : 'text-white/60 hover:text-white'}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden pointer-events-auto text-white p-2 glass-panel rounded-full"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 right-6 w-48 glass-panel rounded-2xl flex flex-col p-4 md:hidden pointer-events-auto"
        >
             {NAVIGATION.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileOpen(false)}
              className="py-3 px-4 text-sm font-medium text-white/80 hover:text-white border-b border-white/5 last:border-none"
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </nav>
  );
};