import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpinningLogo from './SpinningLogo';
import GridItem from './GridItem';
import WordLink from './WordLink';
import StandardNavbar from './StandardNavbar'; // Import the standard navbar component
import VercelProject from './VercelProject';
import VercelProjectPlay from './VercelProjectPlay';
import DesignSystem from './DesignSystem';
import AIA from './AIA';
import SezzleUp from './SezzleUp';
import ImpactSection from './ImpactSection';
import IC from './ic';
import AppRoutes from './AppRoutes';
import './assets/fonts.css';
import Feedback from './Feedback';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const sectionsRef = useRef({});

  // Scroll handling logic remains the same
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        setActivePage('about');
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
      title: "Sezzle Up", 
      className: "col-span-2 row-span-1 bg-purple-500", 
      image: "SezzleUp.jpg" 
    },
    { 
      title: "Design System", 
      className: "col-span-2 row-span-1 bg-yellow-400 text-white", 
      image: "Designsystem.jpg" 
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
      link: "https://beyondthefold.substack.com/p/the-future-of-conversational-interfaces",
      date: "2024-10-09"
    },
    { 
      text: "The rearview mirror syndrome", 
      link: "https://beyondthefold.substack.com/p/the-rearview-mirror-syndrome",
      date: "2023-09-18"
    },
    { 
      text: "Unveiling user insights", 
      link: "https://beyondthefold.substack.com/p/unveiling-user-insights",
      date: "2023-06-21"
    }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white text-gray-800 font-sans">
            <header className="w-full bg-white border-b border-gray-100 flex items-center py-2">
              <SpinningLogo />
              <StandardNavbar
                activePage={activePage}
                onNavClick={handleNavClick}
              />
            </header>
                 
            <main className="container mx-auto px-4 max-w-5xl pt-0">
              {/* Hero Section */}
              <section 
                id="home" 
                ref={el => sectionsRef.current['home'] = el} 
                className="min-h-[600px] py-4 text-black relative container mx-auto px-4 max-w-5xl flex items-center"
              >
                {/* Main content container - changing grid-cols-3 to grid-cols-5 */}
                <div className="grid grid-cols-7 gap-8 w-full">
                  {/* Left column with text */}
                  <div className="col-span-5 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl font-medium mb-8 leading-tight font-serif text-gray-900">
                      <span className="text-xl md:text-2xl block mb-2 text-gray-900">Hi, I'm Kasturi!</span>
                      A <span className="font-sans font-bold text-gray-900">creative technologist</span> shipping 0→1 impact driven <span className="font-sans font-bold text-gray-900">AI Products</span>
                    </h1>

                    <div className="mt-8">
                      <a 
                        href="https://calendly.com/kasturi-khanke/30min"
                        className="transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-8 py-2 rounded-full border-2 border-gray-900 flex items-center gap-2 text-lg font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300">             
                          get in touch →
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Middle column with image
                  <div className="col-span-2 flex items-center justify-center">
                    <img 
                      src="hw__bpmis1v46k2u_medium_2x.png"
                      alt="Profile"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div> */}

                  {/* New right column with text items
                  <div className="col-span-2 flex flex-col justify-center space-y-8">
                    <div className="text-sm font-medium text-gray-800">Growth</div>
                    <div className="text-sm font-medium text-gray-800">Referral program</div>
                    <div className="text-sm font-medium text-gray-800">Prototype</div>
                    <div className="text-sm font-medium text-gray-800">Landing page</div>
                    <div className="text-sm font-medium text-gray-800">Splash screen</div>
                    <div className="text-sm font-medium text-gray-800">Discovery</div>
                    <div className="text-sm font-medium text-gray-800">File selection</div>
                  </div>*/}
                </div> 
              </section>
          
              {/* Work Section */}
              <section 
                id="work" 
                ref={el => sectionsRef.current['work'] = el} 
                className="mt-16 lg:mt-24 mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-2xl md:text-4xl font-sans font-medium mb-12 text-gray-800">Explore my work ↓</h2>
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

              {/* Craft Section
              <section 
                id="craft" 
                ref={el => sectionsRef.current['craft'] = el} 
                className="mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-2xl md:text-4xl font-medium mb-12 text-gray-800">Craft</h2>
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
              </section> */}

              {/* Words Section
              <section 
                id="words" 
                ref={el => sectionsRef.current['words'] = el} 
                className="mb-16 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-2xl md:text-4xl font-medium mb-12 text-gray-800">Some thoughts</h2>
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
              </section> */}
              
              {/* Impact Section */}
              <section 
                id="about"
                ref={el => sectionsRef.current['about'] = el} 
              >
                <ImpactSection impactItems={impactItems} />
              </section>
            </main>

            <section className="bg-gray-950 text-white py-32">
              <div className="container mx-auto md:px-8">
                <h2 className="text-3xl md:text-6xl pl-12 mb-4 max-w-2xl font-normal">
                  Let's build the future of AI design together
                </h2>
                <p className="text-5xl text-gray-500 pl-12 font-normal">
                  <a 
                    href="https://calendly.com/kasturi-khanke/30min?month=2024-11"
                    className="text-2xl md:text-3xl transition-colors duration-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in touch
                  </a>
                </p>
                <p className="text-sm text-gray-500 pl-12 mt-8">
                  Made with ♥ using Claude AI
                </p>
              </div>
            </section>
          </div>
        } />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/aia" element={<AIA />} />
        <Route path="/sezzle-up" element={<SezzleUp />} />
        <Route path="/ic" element={<IC />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;