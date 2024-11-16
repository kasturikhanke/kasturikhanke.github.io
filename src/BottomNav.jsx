import React, { useEffect, useRef } from 'react';

const BottomNav = ({ activePage, onNavClick, isTabTap }) => {
  const navContainerRef = useRef(null);
  const highlightRef = useRef(null);

  const updateHighlight = (button, animate = true) => {
    if (!button || !navContainerRef.current || !highlightRef.current) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = navContainerRef.current.getBoundingClientRect();
    
    const highlightWidth = buttonRect.width - 10;
    const highlightLeft = buttonRect.left - containerRect.left;

    highlightRef.current.style.width = `${highlightWidth}px`;
    
    if (animate && !isTabTap) {
      highlightRef.current.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    } else {
      highlightRef.current.style.transition = 'none';
    }

    highlightRef.current.style.transform = `translateX(${highlightLeft}px)`;

    if (!animate || isTabTap) {
      highlightRef.current.offsetHeight; // Force a reflow
      highlightRef.current.style.transition = 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)';
    }
  };

  useEffect(() => {
    const activeButton = navContainerRef.current?.querySelector(`[data-page="${activePage}"]`);
    if (activeButton) {
      updateHighlight(activeButton, !isTabTap);
    }

    const handleResize = () => {
      const activeButton = navContainerRef.current?.querySelector(`[data-page="${activePage}"]`);
      if (activeButton) {
        updateHighlight(activeButton, false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activePage, isTabTap]);

  return (
    <div ref={navContainerRef} className="fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    bg-black/70 backdrop-blur-md rounded-[30px] p-[5px] flex shadow-lg isolate z-50 w-auto max-w-[90%]">
      <div className="absolute inset-[-2px] bg-gradient-to-r from-black/10 to-black/50 rounded-[32px] -z-10 blur-md"></div>
      <div ref={highlightRef} className="nav-highlight absolute top-[5px] left-[5px] h-[calc(100%-10px)] bg-black rounded-[25px] transition-all duration-300 ease-in-out -z-10"></div>
      {['home', 'work', 'craft', 'words','about'].map((page) => (
        <button
          key={page}
          data-page={page}
          className={`px-5 py-2.5 text-sm font-medium rounded-[30px] transition-colors relative z-10 ${
            activePage === page ? 'text-white' : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => onNavClick(page)}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;