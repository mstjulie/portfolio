import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  
  {
    icon: 'web',
    title: 'Frontend Development',
    desc: 'Creating responsive, pixel-perfect, and accessible user interfaces using React and modern CSS frameworks.',
    colorClass: 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary'
  },
  
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section-padding max-w-[1280px] mx-auto px-8" id="services">
      <div className="text-center mb-16 space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-h2 text-h2"
        >
          Services I Provide
        </motion.h2>
        <p className="font-body-md text-outline max-w-2xl mx-auto">Providing high-quality solutions for businesses and individuals aiming for digital growth and efficiency.</p>
      </div>
      <div className="flex justify-center items-center">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            ref={el => cardsRef.current[index] = el}
            whileHover={{ y: -10 }}
            className="surface-container p-card-padding rounded-2xl border border-white/5 hover:bg-surface-container-high transition-all group relative overflow-hidden"
          >
            {/* Hover Sweep Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${service.colorClass}`}>
              <span className="material-symbols-outlined text-3xl">{service.icon}</span>
            </div>
            <h3 className="font-h3 text-h3 mb-4">{service.title}</h3>
            <p className="font-body-md text-on-surface-variant">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
