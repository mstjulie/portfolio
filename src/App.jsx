import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
 import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen selection:bg-primary/30">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Cursor />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
         <Testimonials /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
