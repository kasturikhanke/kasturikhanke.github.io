import React, { useEffect, useRef, useState } from 'react';

const MenuIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const HomeIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="white" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const BottomNav = ({ activePage, onNavClick, isTabTap, isCaseStudy = false }) => {
  const navContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = isCaseStudy ? ['home'] : ['home', 'work', 'craft', 'words', 'about'];

  const handleNavClick = (page) => {
    onNavClick(page);
    setIsMenuOpen(false);
  };

  const MobileNav = () => {
    // For case studies on mobile, show just a Home icon
    if (isCaseStudy) {
      return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={() => handleNavClick('home')}
            className="bg-black/20 backdrop-blur-md rounded-full p-3 shadow-lg"
            aria-label="Home"
          >
            <HomeIcon />
          </button>
        </div>
      );
    }

    // For non-case studies, show the hamburger menu
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-black/20 backdrop-blur-md rounded-full p-3 shadow-lg"
        >
          <MenuIcon />
        </button>
        {isMenuOpen && (
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-[16px] p-2 shadow-lg w-48">
            {navItems.map((page) => (
              <button
                key={page}
                className={`w-full px-4 py-2 text-sm font-medium rounded-[12px] text-left ${
                  activePage === page ? 'bg-black text-white' : 'text-gray-200 hover:text-gray-300'
                }`}
                onClick={() => handleNavClick(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const DesktopNav = () => (
    <div
      ref={navContainerRef}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-black/70 backdrop-blur-md rounded-[30px] p-[5px] flex shadow-lg isolate z-50 w-auto max-w-[90%]"
    >
      <div className="absolute inset-[-2px] bg-gradient-to-r from-black/10 to-black/50 rounded-[32px] -z-10 blur-md"></div>
      {navItems.map((page) => (
        <button
          key={page}
          data-page={page}
          className={`
            px-5 py-2.5 text-sm font-medium rounded-[25px] relative z-10 
            focus:outline-none active:outline-none select-none touch-none
            ${activePage === page 
              ? `text-white bg-black ${!isTabTap ? 'transition-all duration-500 ease-in-out' : 'transition-none'}`
              : 'text-gray-400 hover:text-gray-300'
            }
          `}
          style={{
            WebkitTapHighlightColor: 'transparent',
            transitionTimingFunction: !isTabTap ? 'cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
            userSelect: 'none'
          }}
          onClick={() => handleNavClick(page)}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </div>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default BottomNav;