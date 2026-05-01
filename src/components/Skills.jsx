import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { icon: 'code', title: 'Tailwind', desc: 'Utility-First CSS' },
  { icon: 'javascript', title: 'JavaScript', desc: 'ES6+ Programming' },
  { icon: 'rebase_edit', title: 'React', desc: 'Modern UI Dev' },
  { icon: 'settings_input_component', title: 'Node.js', desc: 'Scalable Backend' },
  { icon: 'database', title: 'MongoDB', desc: 'NoSQL Database' },
  { icon: 'html', title: 'HTML5', desc: 'Semantic Markup' }
];

const Skills = () => {
  return (
    <section className="py-section-padding bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="font-h2 text-h2">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                borderColor: "rgba(173, 198, 255, 0.5)",
                boxShadow: "0 10px 30px -10px rgba(173, 198, 255, 0.3)" 
              }}
              className="glass p-8 rounded-2xl border border-primary/20 transition-all group text-center cursor-default"
            >
              <motion.span 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="material-symbols-outlined text-4xl text-primary mb-4 block"
              >
                {skill.icon}
              </motion.span>
              <h4 className="font-h3 text-xl mb-2">{skill.title}</h4>
              <p className="text-label-sm text-outline">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
