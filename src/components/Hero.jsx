import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import img from '../../assets/julie.png';

const Hero = () => {
  const profileRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    // Floating effect for profile image
    gsap.to(profileRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Rotating tech icons
    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        rotate: 360,
        duration: 8 + i * 2,
        repeat: -1,
        ease: "none"
      });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[921px] flex items-center max-w-[1280px] mx-auto px-8 overflow-visible" id="home">
      <div className="atmospheric-glow -top-20 -left-20"></div>
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 variants={itemVariants} className="font-h1 text-h1">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Karima Yeasmin Julie</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            I am a passionate <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-primary font-bold"
            >MERN Stack Developer</motion.span> who creates fast, simple, and user-friendly websites.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(77, 142, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-h3 text-[18px] transition-all"
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-outline text-on-surface px-8 py-4 rounded-xl font-h3 text-[18px] transition-all"
            >
               Let's Collaborate
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="relative flex justify-center items-center">
          <div className="atmospheric-glow -right-20 -bottom-20"></div>
          <motion.div 
            ref={profileRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary/20 p-4"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
              <img 
                src={img}
                alt="Karima Yeasmin Julie"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Floating Tech Icons */}
          <div ref={el => iconsRef.current[0] = el} className="absolute -top-4 right-0 glass p-3 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-primary">javascript</span>
          </div>
          <div ref={el => iconsRef.current[1] = el} className="absolute top-1/2 -right-8 glass p-3 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-secondary">deployed_code</span>
          </div>
          <div ref={el => iconsRef.current[2] = el} className="absolute bottom-4 left-0 glass p-3 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-tertiary">database</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
