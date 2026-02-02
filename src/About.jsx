import React, { useState, useEffect } from 'react';
import StandardNavbar from './StandardNavbar';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import { motion } from 'framer-motion';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [activePage, setActivePage] = useState('about');
  const [sfTime, setSfTime] = useState('');

  // Update San Francisco time
  useEffect(() => {
    const updateSfTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setSfTime(time);
    };
    updateSfTime();
    const interval = setInterval(updateSfTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/?fromCaseStudy=true';
    } else {
      setActivePage(page);
    }
  };

  const handleLogoClick = () => {
    window.location.href = '/?fromCaseStudy=true';
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-white/20' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
          <SpinningLogo onLogoClick={handleLogoClick} />
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

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Hero Section */}
        <motion.section
          className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-gray-200"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              I've been chasing the same thing my entire career: the ability to close the gap between idea and reality.
            </h1>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sidebar */}
            <motion.aside
              className="lg:col-span-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="lg:sticky lg:top-28">
                <nav className="flex flex-row lg:flex-col gap-4 lg:gap-3 flex-wrap">
                  <a href="#origin" className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                    The Origin
                  </a>
                  <a href="#now" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                    Why AI
                  </a>
                  <a href="#work" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                    Recent Work
                  </a>
                  <a href="#vision" className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors">
                    What I'm After
                  </a>
                </nav>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              className="lg:col-span-9 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {/* Section 1 */}
              <section id="origin" className="mb-12 md:mb-16">
                <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-5">
                  I studied industrial design because I wanted to make things. Real, physical things you could hold. But I learned quickly that making physical things is slow. A single product could take years to ship, and most of what I designed never made it outside the classroom. That gap between the thing in my head and the thing in the world started to feel unbearable.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  So I moved into UX. The loops got faster. I could ship something, see it used, and improve it, all within weeks instead of years. But I still hit a wall. I could see exactly what I wanted to build, but I couldn't make it real on my own. I'd hand off a design and wait. Or worse, I'd watch it get lost in translation.
                </p>
              </section>

              {/* Pull Quote */}
              <div className="my-12 md:my-16 py-8 border-t border-b border-gray-200">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-gray-900">
                  "Wait, I can actually build this myself now?"
                </blockquote>
                <p className="mt-3 text-sm text-gray-500">
                  The moment everything changed.
                </p>
              </div>

              {/* Section 2 */}
              <section id="now" className="mb-12 md:mb-16">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
                  Why AI
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-5">
                  Then AI happened. And honestly, it wasn't some big revelation. It was more like, "wait, I can actually build this myself now?" I'm not an engineer. I never learned to code. But now I can take a screen I designed in Figma, drop it into Cursor, and have a working prototype in ten minutes. That changed everything for me.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  That's why I'm here, working in AI. Not because it's trendy. But because it gave me something I've been chasing my entire career: the ability to close the gap between idea and reality, on my own terms.
                </p>
              </section>

              {/* Section 3 */}
              <section id="work" className="mb-12 md:mb-16">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
                  Recent Work
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  Last year, I led mobile design for collaboration on a product called PDF Spaces—a direct competitor to NotebookLM. We took it from zero to shipped in nine months. That sounds fast, and it was. But it was also messy. Multiple teams. Multiple PMs. VPs in every review cycle. The kind of project where there's nowhere to hide. I learned that I do my best work under that kind of pressure, surrounded by people who are all giving it their 120%.
                </p>
              </section>

              {/* Highlight Card */}
              <div className="my-12 md:my-16 p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  The design problem I want to spend my career on
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Tools that become infrastructure. The kind of software people open every day without thinking, where design decisions shape how millions of people think, write, and create. Not surface-level polish, but the deep stuff. How an interface earns trust. How it builds habits. How it gets out of the way.
                </p>
              </div>

              {/* Section 4 */}
              <section id="vision" className="mb-12 md:mb-16">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-5">
                  What Keeps Me Up at Night
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  The gap between what's possible and who gets to access it. Most AI tools still assume you're an engineer. Git workflows with no visual feedback. No preview mode. No clear undo. I've been using these tools for three years, and I still hit walls. Imagine what it's like for someone on day one who has no prior experience. That friction is keeping an entire generation of creators on the sidelines. I want to be the person who fixes that.
                </p>
              </section>

              {/* CTA Section */}
              <section className="pt-8 border-t border-gray-200">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Let's connect
                </h2>
                <p className="text-base leading-relaxed text-gray-500 mb-6">
                  I'm always open to conversations about design, AI, and building products that matter.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/kasturikhanke"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 text-white rounded-full text-sm sm:text-base font-medium hover:bg-black transition-colors duration-300 flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <span>→</span>
                  </a>
                  <a
                    href="mailto:kasturikhanke@gmail.com"
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-full text-sm sm:text-base font-medium border border-gray-300 hover:border-gray-900 transition-colors duration-300"
                  >
                    Email me
                  </a>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white pt-16 sm:pt-24 md:pt-32 pb-0 overflow-hidden">
        {/* Top Content Area */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* About Column */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">about</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Kasturi is a product designer<br />
                crafting AI-powered experiences<br />
                that drive measurable impact<br />
                and delight users.
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">contact</p>
              <a 
                href="mailto:kasturi.khanke@gmail.com"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
              >
                kasturi.khanke@gmail.com
              </a>
            </div>

            {/* Social Column */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">social</p>
              <a 
                href="https://www.linkedin.com/in/kasturikhanke/"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Large Name - Full Width, Clipped at Bottom */}
        {/* Copyright Bar - Above Name */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl mt-16 sm:mt-24 md:mt-32">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
            <p className="text-sm text-gray-400">
              © 2026 Kasturi Khanke
            </p>
            <p className="text-sm text-gray-400">
              San Francisco, CA · {sfTime}
            </p>
            <p className="text-sm text-gray-400">
              Made with ♥ using Claude + Cursor
            </p>
          </div>
        </div>

        {/* Large Name - Full Width, Clipped at Bottom */}
        <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out overflow-hidden">
          <h3 
            className="text-[12vw] sm:text-[14vw] md:text-[12vw] font-bold tracking-tighter leading-none whitespace-nowrap text-center select-none translate-y-[25%]"
            style={{ color: 'white' }}
          >
            KASTURI KHANKE
          </h3>
        </div>
      </section>

      {/* Bottom Nav */}
      <footer className="w-full bg-gray-950">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} isCaseStudy={true} />
      </footer>
    </div>
  );
};

export default About;
