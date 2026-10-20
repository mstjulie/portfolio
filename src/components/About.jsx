import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import yeasmin from "../../assets/yeasmin.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // =========================
  // 3D Tilt Effect
  // =========================

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["15deg", "-15deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-15deg", "15deg"]
  );

  // =========================
  // Mouse Move
  // =========================

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

  // =========================
  // Mouse Leave
  // =========================

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // =========================
  // GSAP Scroll Animation
  // =========================

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.15,
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
      id="about"
      className="py-section-padding max-w-[1280px] mx-auto px-8 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* =========================
            Profile Image
        ========================= */}

        <motion.div
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative group cursor-pointer"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Image */}
          <img
            src={yeasmin}
            alt="Julie"
            className="relative rounded-2xl w-full h-[500px] object-cover border border-white/10 shadow-2xl"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* =========================
            About Content
        ========================= */}

        <div ref={textRef} className="space-y-6">

          {/* Small Heading */}
          <p className="text-secondary font-medium tracking-wider uppercase">
            About Me
          </p>

          {/* Main Heading */}
          <h2 className="font-h2 text-h2 text-primary">
            Passionate Frontend Developer
          </h2>

          {/* Description */}
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-8">
            I am a frontend developer passionate about creating modern,
            responsive, and user-friendly web experiences. I enjoy turning
            ideas and designs into clean, interactive, and functional
            websites.
          </p>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-8">
            I work with HTML, CSS, JavaScript, React, Next.js, and Tailwind
            CSS. I am continuously learning and improving my skills to become
            a professional frontend developer.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              JavaScript
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              React
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              Next.js
            </span>

            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
              Tailwind CSS
            </span>
          </div>

          {/* Download Resume */}
          <motion.a
            href="/Karima_Frontend_Resume.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(173, 198, 255, 0.3)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-flex items-center gap-2 bg-surface-container-high border border-outline-variant text-on-surface px-8 py-3 rounded-lg transition-all font-label-sm cursor-pointer"
          >
            <span className="material-symbols-outlined">
              download
            </span>

            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;