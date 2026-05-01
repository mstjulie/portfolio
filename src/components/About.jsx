import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import yeasmin from '../../assets/yeasmin.png'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section-padding max-w-[1280px] mx-auto px-8 overflow-hidden" id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img 
            alt="yeasmin" 
            className="relative rounded-xl w-full h-[500px] object-cover border border-white/10" 
            src={yeasmin}
          />
        </motion.div>
        
        <div ref={textRef} className="space-y-6">
          <h2 className="font-h2 text-h2 text-primary">About Me</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            I am a beginner frontend developer. I specialize in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript. I am currently learning modern tools like React to improve my development skills. I enjoy creating clean designs and interactive web experiences, and my goal is to become a professional frontend developer.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(173, 198, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-surface-container-high border border-outline-variant text-on-surface px-8 py-3 rounded-lg flex items-center gap-2 transition-all font-label-sm"
          >
            <span className="material-symbols-outlined">download</span> Download Resume
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;
