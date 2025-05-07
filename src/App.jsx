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
  const [currentImage, setCurrentImage] = useState("Landing Page.jpg");
  const [selectedImage, setSelectedImage] = useState("Landing page");
  const sectionsRef = useRef({});
  const [isScrolled, setIsScrolled] = useState(false);

  const imageMap = {
    "Landing page": "Landing Page.jpg",
    "Referral program": "Referral.jpg",
    "Splash screen": "Splash.jpg",
    "Checkout": "Checkout.jpg",
    "File selection": "File.jpg",
    "Contextual selection": "Contextual.jpg"
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

  // Add this near other useEffect hooks
  useEffect(() => {
    const interval = setInterval(() => {
      const imageKeys = Object.keys(imageMap);
      const currentIndex = imageKeys.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % imageKeys.length;
      const nextImage = imageKeys[nextIndex];
      
      setSelectedImage(nextImage);
      setCurrentImage(imageMap[nextImage]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedImage, imageMap]); // Dependencies

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
          <div className="min-h-screen bg-white text-stone-800 font-sans">
            <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${
              isScrolled ? 'shadow-md' : ''
            }`}>
              <div className="container mx-auto px-4 max-w-5xl py-4 flex justify-between items-center">
                <SpinningLogo />
                <StandardNavbar
                  activePage={activePage}
                  onNavClick={handleNavClick}
                />
              </div>
            </header>
                 
            <main className="container mx-auto px-4 max-w-5xl pt-0">
              {/* Hero Section */}
              <section 
                id="home" 
                ref={el => sectionsRef.current['home'] = el} 
                className="h-screen flex items-center"
              >
                <div className="w-full max-w-[90vw] mx-auto px-4 md:px-20 flex justify-between items-center">
                  {/* Left column with text */}
                  <div className="flex flex-col justify-right leading-relaxed max-w-[24%]">
                    <h1 className="text-4xl md:text-5xl font-medium mb-8 text-stone-800">
                      <span className="text-lg md:text-xl block mb-2 text-stone-800">Kasturi is</span>
                      <span className="font-sans font-bold text-stone-800">designing what's&nbsp;next.</span> 
                    </h1>

                    <div className="mt-8">
                      <a 
                        href="https://calendly.com/kasturi-khanke/30min"
                        className="inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-6 py-3 rounded-full border border-black text-black flex items-center gap-2 text-base hover:bg-black hover:text-white transition-colors duration-300">             
                          get in touch →
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* Image and list group */}
                  <div className="flex space-x-0 w-[55%]">
                    {/* Image container */}
                    <div className="flex items-center justify-center w-[70%] h-[80vh]">
                      <img 
                        src={currentImage}
                        alt="Profile"
                        className="w-full h-full object-contain"
                      />
                    </div> 

                    {/* List container */}
                    <div className="flex flex-col justify-center space-y-4 w-[30%]">
                      {Object.keys(imageMap).map((text) => (
                        <div
                          key={text}
                          className={`text-sm font-medium cursor-pointer transition-all duration-500 ease-in-out ${
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
                    </div>
                  </div>
                </div> 
              </section>
          
              {/* Work Section */}
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
              </section>

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