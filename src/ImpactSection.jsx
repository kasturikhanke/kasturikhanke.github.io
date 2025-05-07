import React, { useEffect, useState, useCallback } from 'react';

const ImpactSection = ({ impactItems }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  // Updated to use client coordinates directly
  const handleMouseMove = useCallback((e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY
    });
  }, []);

  const items = [
    {
      ...impactItems[0],
      image: "WWD.jpg"
    },
    {
      ...impactItems[1],
      image: "Advisory.jpg"
    },
    {
      ...impactItems[2],
      image: "Mentor.jpg"
    }
  ];

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sticky */}
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-xl md:text-4xl font-sans font-medium mb-12 text-black">Giving back</h2>
                <p className="text-black font-sans font-medium text-lg md:text-lg">
                  I'm dedicated to giving back to the design community by inspiring, educating, and mentoring the next generation of designers
                </p>
              </div>
            </div>

            {/* Right Column - Scrolling Items */}
            <div className="space-y-8">
              {items.map((item, index) => (
                <div key={index} className="relative">
                  <a
                    href={item.link}
                    className="block relative hover:cursor-alias"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onMouseMove={(e) => {
                      if (hoveredIndex === index) {
                        handleMouseMove(e);
                      }
                    }}
                  >
                    {/* Base Card */}
                    <div
                      className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-300 relative bg-white p-12 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      
                      <div className="relative flex items-start space-x-6">
                        <div className="text-3xl md:text-4xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-4">{item.title}</h3>
                          <p className="text-gray-700 text-base md:text-lg">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Cursor-following Image */}
                    {hoveredIndex === index && (
                      <div 
                        className="fixed pointer-events-none transition-transform duration-100 ease-out"
                        style={{
                          left: `${cursorPosition.x}px`,
                          top: `${cursorPosition.y}px`,
                          transform: 'translate(4px, -4px)',
                          zIndex: 50,
                          width: '300px',
                          height: '200px'
                        }}
                      >
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-pink-50/30 rounded-2xl transform -rotate-1" />
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-2xl shadow-xl transform rotate-1"
                          />
                        </div>
                      </div>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;