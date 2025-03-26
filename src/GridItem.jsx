import React, { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

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
      'SezzleUp.jpg': '/sezzle-up',
      'Prompts.jpg': '/ic',
      'Feedback.jpg': '/feedback'
    };
    const route = routes[image];
    if (route) navigate(route);
  };

  const isProjectItem = image === 'Designsystem.jpg' || image === 'AIA.jpg' || image === 'SezzleUp.jpg' || image === 'Prompts.jpg' || image === 'Feedback.jpg';

  const style = {
    ...baseStyles,
    ...(image && { 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    }),
    cursor: 'pointer',
  };

  const projectTitles = {
    'Designsystem.jpg': 'Acrobat Mobile Design System',
    'AIA.jpg': 'Acrobat AI Engagement',
    'SezzleUp.jpg': 'Sezzle Up',
    'Prompts.jpg': 'AI Quick Prompts',
    'Feedback.jpg': 'AI Feedback Discovery'
  };

  return (
    <div 
      ref={itemRef} 
      className={`rounded-xl md:rounded:3xl flex items-center justify-center p-4 ${className} ${!image ? 'bg-indigo-300' : ''} relative overflow-hidden hover:before:opacity-60`}
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
      
      {(!image || !isProjectItem) && (
        <h3 className="text-gray-900 text-center font-light">
          {title}
        </h3>
      )}
    </div>
  );
});

GridItem.displayName = 'GridItem';

export default GridItem;