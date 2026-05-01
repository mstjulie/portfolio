import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { desc } from 'framer-motion/client';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Keen-Keeper',
    desc: 'The project is communication platform. People can communicate his friend.',
    tags: ['React', 'Node.js'],   
    image: 'https://i.ibb.co.com/DDMTb3rd/Screenshot-2026-05-01-070650.png'
  },
  {
    title: 'Book Vibe',
    desc: 'Book vibe is the online library. ',
    tags: ['Next.js','Tailwind'],
    image: 'https://i.ibb.co.com/3YmyCPY1/Screenshot-2026-05-01-062611.png'
  },
  {
    title:'Job Application Tracker',
    desc: 'Job application tracker is job hunting stie.Anyone apply the job application this platform.',
    tags: ['Next.js', 'Tailwind'],
    image: 'https://i.ibb.co.com/5ggXJ85b/Screenshot-2026-05-01-070801.png',
  }, 
  {
    title: 'E-Commerce Demo',
    desc: 'A fully responsive e-commerce platform with Stripe integration, product filtering, and a custom CMS for inventory management.',
    tags: ['Next.js','Tailwind'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4tGywnBeVt0uySvVMJMARDfP6XIESPI_yZveT3dqsZGz4ZDB3QdjQ0Kdz5Y_DCbwksgQaAf5aqTfFUo8jG8yxKjzQvYdxUDPL64QW3Tpg6Ffb0AHHAwXaxhdqpYFy5GoA_pUeZvqDoxRKEQSPxc-3Y1nyaX95pQsuVbyfS6BpEb3eS637c8Q4OpNqu190rUmI_33_eSI0by5mjKFgSwcHm3zqA5Q7CAejqqbyzOnIr6M3wrSmvngprveXPFd5rI-4OSqsy_AQJ8DS'
  }
]; 

const Projects = () => {
  const containerRef = useRef(null);
  const projectCards = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCards.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          clipPath: "inset(100% 0% 0% 0%)",
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-section-padding bg-surface-container-low" id="projects">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-h2 text-h2">Recent Projects</h2>
            <p className="text-outline mt-2">A showcase of my latest work and technical experiments.</p>
          </motion.div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-primary font-label-sm flex items-center gap-2 hover:underline"
          >
            View All <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={el => projectCards.current[index] = el}
              className="group surface-container rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  src={project.image} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              </div>
              <div className="p-8 space-y-6 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="bg-primary/10 text-primary text-[12px] px-3 py-1 rounded-full border border-primary/20">{tag}</span>
                  ))}
                </div>
                <h3 className="font-h3 text-h3">{project.title}</h3>
                <p className="text-on-surface-variant font-body-md">{project.desc}</p>
                <div className="flex gap-4 pt-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-surface-container-high py-3 rounded-xl font-label-sm border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">code</span> GitHub
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">visibility</span> Live Demo
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
