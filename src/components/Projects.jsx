import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Keen-Keeper",
    desc: "A communication platform where people can connect and communicate with their friends.",
    tags: ["React", "Node.js"],
    image:
      "https://i.ibb.co.com/23rhfJRG/Screenshot-2026-10-19-231721.png",
    github: "https://github.com/mstjulie/keen-keeper.git",
    live: "https://keen-keeper-gold-eight.vercel.app/",
  },

  {
    title: "Movie World",
    desc: "A movie discovery website where users can explore movies and view detailed information.",
    tags: ["React", "API", "Tailwind"],
    image:
      "https://i.ibb.co.com/DfTMKSv7/Screenshot-2026-10-19-231651.png",
    github: "https://github.com/mstjulie/Movie-World.git",
    live: "https://movie-world-pi.vercel.app/movies",
  },

  {
    title: "Dragon News",
    desc: "A modern news platform where users can browse news articles by different categories.",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    image:
      "https://i.ibb.co.com/B5XvgnCn/Screenshot-2026-10-19-231609.png",
    github: "https://github.com/mstjulie/Dragon-news.git",
    live: "https://dragon-news-brown.vercel.app/category/0",
  },

  {
    title: "Book Borrow",
    desc: "An online book borrowing platform where users can explore, borrow, and manage books.",
    tags: ["React", "MongoDB", "BetterAuth"],
    image:
      "https://i.ibb.co.com/v4yTL7pn/Screenshot-2026-10-19-231545.png",
    github: "https://github.com/mstjulie/Book-Borrow.git",
    live: "https://book-borrow-yzbu.vercel.app/",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const projectCards = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      projectCards.current.forEach((card) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          clipPath: "inset(100% 0% 0% 0%)",
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-section-padding bg-surface-container-low"
      id="projects"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-h2 text-h2">Recent Projects</h2>

            <p className="text-outline mt-2">
              A showcase of my latest work and technical experiments.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ x: 5 }}
            className="text-primary font-label-sm flex items-center gap-2 hover:underline"
          >
            View All
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </motion.button>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (projectCards.current[index] = el)}
              className="group surface-container rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all flex flex-col"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-8 space-y-6 flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="bg-primary/10 text-primary text-[12px] px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-h3 text-h3">{project.title}</h3>

                {/* Description */}
                <p className="text-on-surface-variant font-body-md">
                  {project.desc}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  {/* GitHub */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-surface-container-high py-3 rounded-xl font-label-sm border border-outline-variant hover:bg-surface-variant transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">
                      code
                    </span>
                    GitHub
                  </motion.a>

                  {/* Live Demo */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary text-on-primary py-3 rounded-xl font-label-sm hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">
                      visibility
                    </span>
                    Live Demo
                  </motion.a>
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