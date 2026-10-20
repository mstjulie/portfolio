import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "code",
    title: "Frontend Development",
    desc: "I build modern, responsive, and user-friendly interfaces using React, JavaScript, and modern CSS frameworks.",
  },
  {
    icon: "devices",
    title: "Responsive Web Design",
    desc: "I create websites that look beautiful and work smoothly across mobile, tablet, and desktop devices.",
  },
  {
    icon: "web",
    title: "React & Next.js",
    desc: "I develop fast and scalable web applications using React and Next.js with reusable components.",
  },
  {
    icon: "api",
    title: "API Integration",
    desc: "I connect frontend applications with REST APIs to create dynamic and data-driven web experiences.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-6 md:px-10 max-w-[1280px] mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
        >
          Services I Provide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          I provide modern web development solutions focused on performance,
          usability, responsiveness, and clean design.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.25 },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
          >
            {/* Glow Effect */}
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

            {/* Hover Shine */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            {/* Icon */}
            <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="relative z-10 mb-3 text-xl font-semibold text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm leading-7 text-gray-400">
              {service.desc}
            </p>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;