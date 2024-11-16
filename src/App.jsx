import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpinningLogo from './SpinningLogo';
import GridItem from './GridItem';
import WordLink from './WordLink';
import BottomNav from './BottomNav';
import VercelProject from './VercelProject';
import VercelProjectPlay from './VercelProjectPlay';
import DesignSystem from './DesignSystem';
import AIA from './AIA';
import SezzleUp from './SezzleUp';
import ImpactSection from './ImpactSection';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const sectionsRef = useRef({});

  // Scroll handling logic remains the same
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActivePage('words');
        return;
      }

      const sections = ['home', 'work', 'craft', 'words', 'about'];
      
      sections.forEach((section) => {
        const el = sectionsRef.current[section];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 0) {
            setActivePage(section);
          }
        }
      });

      const homeSection = sectionsRef.current['home'];
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        if (rect.top > -50) {
          setActivePage('home');
        }
      }
    };

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    handleScroll();
    
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const handleNavClick = (page) => {
    setActivePage(page);
    const section = sectionsRef.current[page];
    
    if (page === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (section) {
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const workItems = [
    { 
      title: "AI Assistant", 
      className: "col-span-2 row-span-2", 
      image: "AIA.jpg" 
    },
    { 
      title: "Design System", 
      className: "col-span-2 row-span-1 bg-yellow-400 text-white", 
      image: "Designsystem.jpg" 
    },
    { 
      title: "Sezzle Up", 
      className: "col-span-2 row-span-1 bg-purple-500", 
      image: "SezzleUp.jpg" 
    },
    { 
      title: "Prompt Categories", 
      className: "col-span-2 bg-green-400 text-white", 
      image: "Prompts.jpg" 
    },
    { 
      title: "Feedback UX", 
      className: "col-span-2 row-span-1 bg-gradient-to-r from-green-400 via-yellow-500 to-purple-600", 
      image: "Feedback.jpg" 
    }
  ];

  const impactItems = [
    {
      title: "Women Who Design - Founder",
      description: "WWD is a community supporting and empowering women in design",
      icon: "👩‍💻",
      link: "https://www.instagram.com/womenwhodesign.isu/"
    },
    {
      title: "Advisory Council",
      description: "Advising on curriculum and innovation at my alma mater to shape the future of design education",
      icon: "🎓",
      link: "https://www.instagram.com/p/DCR1rQeuELr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      title: "Mentorship",
      description: "Guiding the next generation of designers through 1:1 mentoring",
      icon: "🤝",
      link: "https://adplist.org/mentors/kasturi-khanke"
    }
  ];

  const wordLinks = [
    { 
      text: "The future of conversational interfaces", 
      link: "https://uxbestie.substack.com/p/the-future-of-conversational-interfaces",
      date: "2024-10-09"  // Add your actual publication date
    },
    { 
      text: "The rearview mirror syndrome", 
      link: "https://uxbestie.substack.com/p/the-rearview-mirror-syndrome",
      date: "2023-09-18"  // Add your actual publication date
    },
    { 
      
      text: "Unveiling user insights", 
      link: "https://uxbestie.substack.com/p/unveiling-user-insights",
      date: "2023-06-21"  // Add your actual publication date
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white text-gray-800 font-sans">
            <header className="w-full bg-transparent fixed top-0 z-50">
              <SpinningLogo />
            </header>
                 
            <main className="container mx-auto px-4 max-w-5xl pt-20">
            {/* Hero Section */}
            <section 
              id="home" 
              ref={el => sectionsRef.current['home'] = el} 
              className="h-[64vh] text-black relative container mx-auto px-4 max-w-5xl"
            >
              {/* Bottom left - AI Designer text */}
              <div>
                <h1 className="text-6xl font-normal mb-4 leading-tight max-w-3xl mt-32">
                  Crafting AI experiences that empower creativity
                </h1>
              </div>

              {/* Center right - Main content */}
              <div className="absolute max-w-lg">
                <p className="text-xl font-normal leading mb-8">
                  I specialize in human-centered AI design that bridges technological complexity 
                  with intuitive designs.
                </p>

                {/* Status indicators */}
                <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Currently designing Gen AI for Adobe Acrobat
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Based in San Francisco
                  </div>
                </div>

                <button className="px-8 py-4 bg-black text-white rounded-full text-sm">
                  Let's chat
                </button>
              </div>
            </section>

              {/* Work Section */}
              <section 
                id="work" 
                ref={el => sectionsRef.current['work'] = el} 
                className="mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-4xl font-medium mb-12 text-gray-800">Explore my work ↓</h2>
                  <div className="grid grid-cols-4 gap-6 aspect-square w-full">
                    {workItems.map((item, index) => (
                      <GridItem 
                        key={index} 
                        className={item.className} 
                        image={item.image} 
                        index={index} 
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Craft Section */}
              <section 
                id="craft" 
                ref={el => sectionsRef.current['craft'] = el} 
                className="mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-4xl font-medium mb-12 text-gray-800">Craft</h2>
                  {/* <p className="text-xl text-gray-600 mb-12 max-w-2xl">
                    Exploring fun prototypes without learning how to code created using Claude AI.
                  </p> */}
                  <div className="grid grid-cols-12 grid-rows-8 gap-6">
                    <div className="col-span-6 row-span-4 bg-gray-950 shadow-xl rounded-3xl overflow-hidden">
                      <VercelProject />
                    </div>
                    <div className="col-span-6 row-span-4 bg-gray-950 shadow-xl rounded-3xl overflow-hidden">
                      <VercelProjectPlay />
                    </div>
                    <div className="col-span-6 row-span-4 bg-gray-50 shadow-lg rounded-3xl overflow-hidden p-8">
                      <video 
                        className="w-full h-full object-cover rounded-2xl"
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                      >
                        <source src="wordgenerator.mov" type="video/mp4" />
                      </video>
                    </div>
                    <div className="col-span-6 row-span-4 bg-gray-50 shadow-lg rounded-3xl overflow-hidden">
                    <iframe
                      src="https://cards-wine-chi.vercel.app/"
                      className="w-full h-full border-0"
                      title="Cards Demo"
                      loading="lazy"
                    />
                  </div>
                  </div>
                </div>
              </section>

             {/* Words Section */}
              <section 
                id="words" 
                ref={el => sectionsRef.current['words'] = el} 
                className="mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-4xl font-medium mb-8 text-gray-800">Some thoughts</h2>
                  <div className="space-y-8">
                    {wordLinks.map((link, index) => (
                      <div key={index}>
                        {index > 0 && (
                          <hr className="border-gray-200 my-8" />
                        )}
                        <div className="space-y-2">
                          <time className="text-sm text-gray-500">
                            {new Date(link.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                          <WordLink 
                            text={link.text} 
                            link={link.link} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              
              {/* Impact Section */}
              <section 
              id="about"
              ref={el => sectionsRef.current['about'] = el} 
              >
              <ImpactSection impactItems={impactItems} />
              </section>
              
            </main>


            <section className="bg-gray-950 text-white py-32">
              <div className="container mx-auto px-8">
               <h2 className="text-6xl pl-12 mb-4 max-w-2xl font-normal">
                Let's build something meaningful together
               </h2>
                <p className="text-5xl text-gray-500 pl-12 font-normal">
                Get in touch.
                </p>
              </div>
            </section>

            <footer className="w-full bg-transparent">
              <BottomNav 
                activePage={activePage} 
                onNavClick={handleNavClick} 
              />
            </footer>
          </div>
        } />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/aia" element={<AIA />} />
        <Route path="/sezzle-up" element={<SezzleUp />} />
      </Routes>
    </Router>
  );
};

export default App;