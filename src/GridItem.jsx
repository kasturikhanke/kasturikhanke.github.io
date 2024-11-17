import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// Move cursor URL definition outside component to prevent recreation
const lockCursorURL = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="8.5" width="10" height="8" rx="1" stroke="white"/>
    <path d="M7.5 8.5V6.5C7.5 4.567 9.067 3 11 3v0c1.933 0 3.5 1.567 3.5 3.5V8.5"/>
  </g>
</svg>
`)}`;

// Pre-define styles outside component
const baseStyles = {
  transition: 'background-color 0.3s ease',
};

const overlayStyles = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
};

const GridItem = memo(({ title, className, image, index }) => {
  const itemRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const element = itemRef.current;
    
    gsap.set(element, {
      autoAlpha: 0,
      y: 50,
    });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top bottom-=8',
      onEnter: () => {
        gsap.to(element, {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleClick = () => {
    const routes = {
      'Designsystem.jpg': '/design-system',
      'AIA.jpg': '/aia',
      'SezzleUp.jpg': '/sezzle-up'
    };
    const route = routes[image];
    if (route) navigate(route);
  };

  const isNDAItem = image === 'Prompts.jpg' || image === 'Feedback.jpg';
  const isProjectItem = image === 'Designsystem.jpg' || image === 'AIA.jpg' || image === 'SezzleUp.jpg';

  const style = {
    ...baseStyles,
    ...(image && { 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }),
    cursor: isNDAItem ? `url(${lockCursorURL}) 10 10, not-allowed` : 'pointer',
  };

  const projectTitles = {
    'Designsystem.jpg': 'Adobe Acrobat Design System',
    'AIA.jpg': 'Adobe Acrobat AI Assistant',
    'SezzleUp.jpg': 'Sezzle Up'
  };

  return (
    <div 
      ref={itemRef} 
      className={`rounded-3xl flex items-center justify-center p-4 ${className} ${!image ? 'bg-indigo-300' : ''} relative overflow-hidden hover:before:opacity-60`}
      style={style}
      onClick={handleClick}
    >
      {isProjectItem && (
        <div 
          className="opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={overlayStyles}
        >
          <h3 className="text-white text-center font-sans text-2xl">
            {projectTitles[image]}
          </h3>
          <p className="text-white text-center font-sans text-base">
            View Project
          </p>
        </div>
      )}
      
      {isNDAItem && (
        <div 
          className="opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={overlayStyles}
        >
          <h3 className="text-white text-center font-light text-2xl">
            NDA
          </h3>
        </div>
      )}
      
      {(!image || (!isProjectItem && !isNDAItem)) && (
        <h3 className="text-gray-900 text-center font-light">
          {title}
        </h3>
      )}
    </div>
  );
});

GridItem.displayName = 'GridItem';

export default GridItem;