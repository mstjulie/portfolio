import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-section-padding bg-surface-container-lowest" id="contact">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-16"
        >
          <div className="md:col-span-2 space-y-12">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="font-h2 text-h2">Get in touch today</h2>
              <p className="text-on-surface-variant font-body-lg">Have a project in mind? Let's discuss how we can work together to build something amazing.</p>
            </motion.div>
            
            <div className="space-y-8">
              {[
                { icon: 'mail', title: 'Email Me', value: 'yeasminjulie02@gmail.com', color: 'bg-primary/10 text-primary' },
                { icon: 'call', title: 'Phone', value: '+88 017598806112 ', color: 'bg-secondary/10 text-secondary' },
                { icon: 'location_on', title: 'Location', value: 'Rajshahi, Bangladesh', color: 'bg-tertiary/10 text-tertiary' }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-h3 text-lg">{item.title}</h4>
                    <p className="text-outline">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="surface-container p-10 rounded-[32px] border border-white/5">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-sm text-on-surface/70 ml-2">Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      className="w-full bg-surface-container-high border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-outline/30" 
                      placeholder="Name" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm text-on-surface/70 ml-2">Email Address</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01 }}
                      className="w-full bg-surface-container-high border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-outline/30" 
                      placeholder="Email" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-sm text-on-surface/70 ml-2">Message</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.01 }}
                    className="w-full bg-surface-container-high border-outline-variant rounded-xl p-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-on-surface placeholder:text-outline/30" 
                    placeholder="How can I help you?" 
                    rows="5"
                  ></motion.textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-on-primary py-5 rounded-xl font-h3 text-lg transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2" 
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined">send</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
