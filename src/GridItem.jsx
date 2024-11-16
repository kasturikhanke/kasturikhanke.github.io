import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { IoLockClosed } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

// Create an improved lock cursor data URL
const lockCursorURL = `data:image/svg+xml;base64,${btoa(`
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
  <g fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="6" y="8.5" width="10" height="8" rx="1" stroke="white"/>
    <path d="M7.5 8.5V6.5C7.5 4.567 9.067 3 11 3v0c1.933 0 3.5 1.567 3.5 3.5V8.5"/>
  </g>
</svg>
`)}`;



const GridItem = ({ title, className, image, index }) => {
  const itemRef = useRef(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = itemRef.current;

    gsap.set(element, {
      autoAlpha: 0,
      y: 50,
    });

    ScrollTrigger.create({
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
  }, []);

  const handleClick = () => {
    if (image === 'Designsystem.jpg') {
      navigate('/design-system');
    } else if (image === 'AIA.jpg') {
      navigate('/aia');
    } else if (image === 'SezzleUp.jpg') {
      navigate('/sezzle-up');
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isNDAItem = image === 'Prompts.jpg' || image === 'Feedback.jpg';
  const isProjectItem = image === 'Designsystem.jpg' || image === 'AIA.jpg' || image === 'SezzleUp.jpg';

  const style = {
    ...(image ? { 
      backgroundImage: `url(${image})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
    } : {}),
    cursor: isNDAItem ? `url(${lockCursorURL}) 10 10, not-allowed` : 'pointer',
  };

  return (
    <div 
      ref={itemRef} 
      className={`rounded-3xl flex items-center justify-center p-4 ${className} ${!image ? 'bg-indigo-300' : ''} relative overflow-hidden`}
      style={style}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isProjectItem && isHovered && (
        <div className="absolute font-light inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300 gap-2">
          <h3 className="text-white text-center font-sans text-2xl">
            {image === 'Designsystem.jpg' ? 'Adobe Acrobat Design System' : 
             image === 'AIA.jpg' ? 'Adobe Acrobat AI Assistant' : 'Sezzle Up'}
          </h3>
          <p className="text-white text-center font-sans text-base">View Project</p>
        </div>
      )}
      {isNDAItem && isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center transition-opacity duration-300 gap-2">
        
          <h3 className="text-white text-center font-light text-2xl">NDA</h3>
        </div>
      )}
      {(!image || (!isProjectItem && !isNDAItem)) && (
        <h3 className="text-gray-900 text-center font-light">{title}</h3>
      )}
    </div>
  );
};

export default GridItem;