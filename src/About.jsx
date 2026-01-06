import React, { useState, useEffect } from 'react';
import StandardNavbar from './StandardNavbar';
import SpinningLogo from './SpinningLogo';
import { motion } from 'framer-motion';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activePage, setActivePage] = useState('about');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowNav(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans">
      <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
          <SpinningLogo />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: showNav ? 0 : 20, opacity: showNav ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <StandardNavbar
              activePage={activePage}
              onNavClick={handleNavClick}
            />
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              Design is my way of reaching people I may never meet.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-4 md:mb-8">
              I care about building with intention, moving fast, and crafting experiences that feel thoughtful not just functional. Design, to me, is quiet impact: making something clear, useful, and delightful without needing to explain why or how.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-stone-600 mb-4 md:mb-8">
              Even when we don't see the people we design for, we feel their presence in every decision. That's what drives me. Knowing that somewhere, someone's day got a little better because of what I built.
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Current Role</h2>
            <p className="text-base sm:text-lg text-stone-600 mb-4 md:mb-6">
              I'm a product designer focused on AI, interaction, and UX systems—currently shaping intelligent experiences for PDFs and documents at Adobe within the Acrobat AI incubation team. Previously at Sezzle, where I helped scale a fintech platform from startup to $1.35B through conversion-focused design.
            </p>
          </div>

          <div className="mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Philosophy</h2>
            <p className="text-base sm:text-lg text-stone-600 mb-3 md:mb-4">
              I thrive in 0–1 spaces—shipping fast, iterating based on feedback, and bringing products to life with clarity and minimal direction.
            </p>
            <p className="text-base sm:text-lg text-stone-600">
              I believe the best design quietly empowers—solving the right problems, reducing friction, and building trust through every interaction.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Let's work together</h2>
            <div className="flex gap-3 md:gap-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors text-sm sm:text-base"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 