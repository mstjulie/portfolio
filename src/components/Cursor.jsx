import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="cursor-glow hidden md:block"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
};

export default Cursor;
