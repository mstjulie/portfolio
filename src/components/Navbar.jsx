import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-8 h-full">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" 
          href="#"
        >
          JULIE_DEV
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              className={`relative font-sans text-sm tracking-wide font-medium transition-colors ${
                activeSection === link.id ? 'text-blue-400' : 'text-slate-400 hover:text-slate-100'
              }`} 
              href={link.href}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(77, 142, 255, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-sm transition-transform"
          >
            Hire Me
          </motion.button>
        </div>
        
        <button className="md:hidden text-on-surface">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
