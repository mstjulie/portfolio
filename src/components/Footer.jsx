import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-slate-950 w-full py-12 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="space-y-4 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg font-bold text-slate-200"
          >
            JULIE_PORTFOLIO
          </motion.h2>
          <p className="font-sans text-xs uppercase tracking-widest text-slate-500">© 2024 JULIE_PORTFOLIO. All rights reserved. Built with precision.</p>
        </div>
        
        <div className="flex gap-8">
          {['code', 'link', 'message', 'person'].map((icon, index) => (
            <motion.a 
              key={index} 
              whileHover={{ y: -5, color: "#60a5fa" }}
              className="text-slate-600 transition-colors duration-200" 
              href="#"
            >
              <span className="material-symbols-outlined scale-110">{icon}</span>
            </motion.a>
          ))}
        </div>
        
        <div className="flex gap-6">
          {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
            <motion.a 
              key={social} 
              whileHover={{ y: -2, color: "#60a5fa" }}
              className="text-slate-500 transition-colors" 
              href="#"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
