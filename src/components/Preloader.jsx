import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 1,
      ease: "power3.in"
    })
    .to(loaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power4.inOut"
    });
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="fixed inset-0 z-[100] bg-surface flex items-center justify-center"
    >
      <h2 
        ref={textRef} 
        className="text-4xl md:text-6xl font-h1 font-bold text-primary opacity-0 translate-y-10"
      >
        JULIE_PORTFOLIO
      </h2>
    </div>
  );
};

export default Preloader;
