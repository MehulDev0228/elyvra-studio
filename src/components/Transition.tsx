import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

export const PageTransition: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full min-h-screen pt-24 md:pt-32"
    >
      {children}
    </motion.div>
  );
};