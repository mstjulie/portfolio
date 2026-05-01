import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Jonathan Wright",
    role: "CEO, TechFlow Solutions",
    content: "Julie is an exceptional developer who truly understands modern web paradigms. She turned our complex requirements into a seamless, high-performance application.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHmythQHyiteGYfxqxe419ymnqW_1zNuH5-3eGP2mv5Bcijo6gSjRKHAgyh5VyBjWMl4_RZ8ACZkVKQjBl_4MG2S3Ya7x89n7l53s_lIiVpcfevNm305_4kiDvI1a0DnsSWwjKN8TXS8DtMLMyYaxkYc53ez0-zi9Ys6kjBh1pkkhYeK37Cm1RRSsgTzzwYQMlFj9tjO3GdgTRXbHiWW7gWV6fGAogzVuEBjfu79b6F5naNB9dq96-L8ejg49V9rl5LuyurJNLufPj"
  },
  {
    name: "Sarah Chen",
    role: "Product Manager, InnovateIO",
    content: "Working with Julie was a breeze. Her attention to detail and ability to translate design into pixel-perfect code is unmatched.",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHmythQHyiteGYfxqxe419ymnqW_1zNuH5-3eGP2mv5Bcijo6gSjRKHAgyh5VyBjWMl4_RZ8ACZkVKQjBl_4MG2S3Ya7x89n7l53s_lIiVpcfevNm305_4kiDvI1a0DnsSWwjKN8TXS8DtMLMyYaxkYc53ez0-zi9Ys6kjBh1pkkhYeK37Cm1RRSsgTzzwYQMlFj9tjO3GdgTRXbHiWW7gWV6fGAogzVuEBjfu79b6F5naNB9dq96-L8ejg49V9rl5LuyurJNLufPj"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-section-padding">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass max-w-4xl mx-auto p-12 rounded-[40px] text-center space-y-8 relative overflow-hidden"
        >
        <div>
          <h1 className='text-4xl font-bold'>Educational Qualification</h1>
        </div>
        <div>
          <h3 className='text-2xl '>HSC complete</h3>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
