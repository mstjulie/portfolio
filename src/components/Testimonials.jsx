import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor's Degree",
    status: "Ongoing",
    institution: "Rajshahi Homoeopathic Medical College",
    description:
      "Currently pursuing my bachelor's degree and continuously developing my technical and professional skills.",
    icon: "school",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    status: "Completed",
    institution: "Higher Secondary Education",
    description:
      "Successfully completed my Higher Secondary Certificate education.",
    icon: "menu_book",
  },
];

const Testimonials = () => {
  return (
    <section
      id="education"
      className="py-24 px-6 md:px-10"
    >
      <div className="max-w-[1100px] mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 font-medium mb-3">
            My Academic Background
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Educational Qualification
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            My educational journey and current academic background.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]"
            >
              {/* Background Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              {/* Icon + Status */}
              <div className="relative z-10 flex items-center justify-between mb-7">

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <span className="material-symbols-outlined text-3xl">
                    {item.icon}
                  </span>
                </div>

                {/* Status */}
                <span
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    item.status === "Ongoing"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-green-500/10 text-green-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-blue-400 font-medium mb-4">
                  {item.institution}
                </p>

                <p className="text-gray-400 leading-7 text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;