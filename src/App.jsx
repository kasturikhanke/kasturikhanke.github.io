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
import { FaPause, FaPlay } from 'react-icons/fa';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [currentImage, setCurrentImage] = useState("Landing Page.jpg");
  const [selectedImage, setSelectedImage] = useState("Landing page");
  const sectionsRef = useRef({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const imageMap = {
    "AI Assistant Discovery": "Splash.jpg",
    "Overcoming AI Cold Start": "Landing Page.jpg",
    "Credit reporting": "Sezzle Up.jpg",
    "Referral flow optimization": "Referral.jpg",
    "Checkout flow redesign": "Checkout.jpg",
    "Smarter File Selection": "File.jpg",
    "Context-Aware AI": "Contextual.jpg"    
  };

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

      setIsScrolled(window.scrollY > 0);
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

  // Add this new function near the top of the component
  const typeWriter = async (text, delay = 50) => {
    setIsTyping(true);
    setDisplayText("");
    
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, delay));
      setDisplayText(prev => prev + text[i]);
    }
    setIsTyping(false);
  };

  // Modify the existing image rotation useEffect
  useEffect(() => {
    if (isPaused) return; // Don't set interval if paused

    const interval = setInterval(() => {
      const imageKeys = Object.keys(imageMap);
      const currentIndex = imageKeys.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % imageKeys.length;
      const nextImage = imageKeys[nextIndex];
      
      setSelectedImage(nextImage);
      setCurrentImage(imageMap[nextImage]);

      // Start typing animation when image changes - only the last word
      const textMap = {
        "AI Assistant Discovery": "conversion",
        "Overcoming AI Cold Start": "adoption",
        "Credit reporting": "trust",
        "Referral flow optimization": "growth",
        "Checkout flow redesign": "usability",
        "Smarter File Selection": "ease",
        "Context-Aware AI": "intention"
      };
      
      typeWriter(textMap[nextImage]);
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedImage, imageMap, isPaused]);

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
          <div className="h-screen overflow-hidden bg-white text-stone-800 font-sans">
            <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${
              isScrolled ? 'shadow-md' : ''
            }`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
                <SpinningLogo />
                <StandardNavbar
                  activePage={activePage}
                  onNavClick={handleNavClick}
                />
              </div>
            </header>
                 
            <main className="h-screen overflow-hidden container mx-auto px-1 sm:px-2 lg:px-4 max-w-5xl">
              {/* Hero Section */}
              <section 
                id="home" 
                ref={el => sectionsRef.current['home'] = el} 
                className="h-full relative"
              >
                <div className="w-full max-w-[90vw] mx-auto px-2 md:px-8 flex flex-col md:flex-row justify-between items-center absolute top-[40%] -translate-y-1/2">
                  {/* Left column - adjust width */}
                  <div className="flex flex-col justify-right leading-relaxed w-full md:w-[25%] mb-8 md:mb-0 z-10">
                    <div className="relative">
                      <h1 className="text-3xl sm:text-4xl font-medium mb-4 text-stone-800 opacity-0 animate-fade-in-1">
                        <span className="text-base font-sans font-medium sm:text-lg md:text-xl block mb-2 text-stone-800">Kasturi is</span>
                        <span className="font-sans font-bold text-stone-800 leading-none">
                          designing for
                          <br />
                          {isTyping ? (
                            <span className={`inline-block ${isTyping ? 'typing' : ''}`}>{displayText}</span>
                          ) : (
                            <span className={`inline-block ${isTyping ? 'fade-out' : ''}`}>
                              {selectedImage === "AI Assistant Discovery" ? "conversion." :
                               selectedImage === "Overcoming AI Cold Start" ? "adoption." :
                               selectedImage === "Credit reporting" ? "trust." :
                               selectedImage === "Referral flow optimization" ? "growth." :
                               selectedImage === "Checkout flow redesign" ? "usability." :
                               selectedImage === "Smarter File Selection" ? "ease." :
                               selectedImage === "Context-Aware AI" ? "intention." :
                               "what's next."}
                            </span>
                          )}
                        </span>
                      </h1>
                    </div>

                    {/* Dynamic content container */}
                    <div className="h-[240px] mt-4 flex flex-col justify-between">
                      <div className="text-xl md:text-2xl font-medium text-stone-800 h-[120px]">
                        {selectedImage === "AI Assistant Discovery" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">32% ↑ in conversion rate</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Drove discovery and engagement for a newly launched AI assistant through strategic in-product promotion.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Overcoming AI Cold Start" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">4% ↑ in active usage</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Redesigned the assistant's landing experience to help users start faster with contextual quick prompts.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Credit reporting" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">70% ↑ in conversion rate</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Led end-to-end design for the first BNPL credit reporting flow—key to landing a partnership with Target.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Referral flow optimization" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">↑ acquisition via invites</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Simplified and redesigned referral entry points to increase user-driven growth.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Checkout flow redesign" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">↓ time from 14s to 7s</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Cut friction in the purchasing journey by reducing steps from 14 to 7.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Smarter File Selection" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">34% ↑ in active usage</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Enabled seamless file access to improve task initiation inside the AI assistant.
                            </p>
                          </div>
                        )}
                        {selectedImage === "Context-Aware AI" && (
                          <div>
                            <span className="font-sans font-light opacity-0 animate-fade-in-stat whitespace-nowrap">↑ engagement</span>
                            <p className="text-base font-normal mt-2 opacity-0 animate-fade-in-description">
                              Introduced in-document text selection to power more precise, relevant AI conversations.
                            </p>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA button - added mt-8 for more spacing */}
                      <div className="mt-8">
                        <a 
                          href={selectedImage === "AI Assistant Discovery"
                            ? "/aia"
                            : selectedImage === "Overcoming AI Cold Start"
                            ? "/ic"
                            : selectedImage === "Credit reporting"
                            ? "/sezzle-up"
                            : "https://calendly.com/kasturi-khanke/30min"
                          }
                          className="inline-block"
                        >
                          <button className={`px-6 py-3 rounded-full border border-black text-black flex items-center gap-2 text-base hover:bg-black hover:text-white transition-colors duration-300 opacity-0 ${
                            !isTyping ? 'animate-fade-in-3' : ''
                          }`}>             
                            {(selectedImage === "AI Assistant Discovery" || selectedImage === "Overcoming AI Cold Start" || selectedImage === "Credit reporting") 
                              ? "read case study →" 
                              : "get in touch →"
                            }
                          </button>
                        </a>
                      </div>
                    </div>
                    
                  </div>

                  {/* Center image section - adjust width */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[85vh] flex items-center justify-center animate-float">
                    <img 
                      src={currentImage}
                      alt="Profile"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right section - adjust width and add margin */}
                  <div className="hidden md:flex flex-col justify-center space-y-4 w-[25%] z-10 md:-ml-8">
                    {Object.keys(imageMap).map((text) => (
                      <div
                        key={text}
                        className={`text-sm whitespace-nowrap font-medium cursor-pointer transition-all duration-500 ease-in-out ${
                          selectedImage === text 
                            ? 'text-indigo-600 opacity-100 translate-x-2' 
                            : 'text-stone-800 hover:text-stone-600 opacity-50'
                        }`}
                        onClick={() => {
                          setSelectedImage(text);
                          setCurrentImage(imageMap[text]);
                        }}
                      >
                        {text}
                      </div>
                    ))}
                    <div className="flex justify-start mt-2">
                      <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="p-2 text-stone-800 opacity-50 hover:text-stone-600 hover:opacity-50 active:text-indigo-600 active:opacity-100 transition-colors"
                        aria-label={isPaused ? "Resume rotation" : "Pause rotation"}
                      >
                        {isPaused ? <FaPlay size={16} /> : <FaPause size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
          
              {/* Work Section 
              <section 
                id="work" 
                ref={el => sectionsRef.current['work'] = el} 
                className="mt-16 lg:mt-24 mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-2xl md:text-4xl font-sans font-medium mb-12 text-stone-800">Explore my work</h2>
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
              </section>*/}

              {/* Craft Section
              <section 
                id="craft" 
                ref={el => sectionsRef.current['craft'] = el} 
                className="mb-32 scroll-mt-24"
              >
                <div className="mx-8">
                  <h2 className="text-2xl md:text-4xl font-medium mb-12 text-stone-800">Craft</h2>
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
                  <h2 className="text-2xl md:text-4xl font-medium mb-12 text-stone-800">Some thoughts</h2>
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
              
              {/* Impact Section 
              <section 
                id="about"
                ref={el => sectionsRef.current['about'] = el} 
              >
                <ImpactSection impactItems={impactItems} />
              </section>*/}
            </main>

            {/*<section className="bg-gray-950 text-white py-32">
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
            </section>*/}
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