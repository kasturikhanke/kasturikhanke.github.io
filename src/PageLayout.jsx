import React, { useState, useEffect } from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';

// Reusable side navigation component
const SideNav = ({ sections, activeSectionId }) => {
  return (
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
      {sections.map(section => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`block text-sm transition-colors duration-200 ${
            activeSectionId === section.id 
              ? 'text-gray-900 font-medium' 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};

const PageLayout = ({ 
  children, 
  sections,
  showNextProject = true,
  nextProjectLink = "",
  nextProjectText = "Next Project →"
}) => {
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(section => observer.observe(section));

    return () => sectionElements.forEach(section => observer.unobserve(section));
  }, []);

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/';
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className="w-full bg-transparent pt-8 pb-16">
        <SpinningLogo />
      </header>

      <SideNav sections={sections} activeSectionId={activeSectionId} />
    
      <main className="container mx-auto px-4 max-w-4xl">
        {children}
      </main>

      {showNextProject && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex justify-end">
              <a 
                href={nextProjectLink}
                className="inline-block px-8 py-2 rounded-full border-2 border-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
              >
                {nextProjectText}
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="bg-gray-950 text-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl pl-12 mb-4 max-w-2xl font-normal">
            Wanna chat about this case study?
          </h2>
          <p className="text-5xl text-gray-500 pl-12 font-normal">
            <a 
              href="https://calendly.com/kasturi-khanke/30min?month=2024-11"
              className="transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </p>
        </div>
      </section>

      <footer className="w-full bg-transparent pb-8">
        <BottomNav 
          activePage={null}
          onNavClick={handleNavClick}
          showHomeOnly={true}
          isTabTap={false}
          isCaseStudy={true}
        />
      </footer>
    </div>
  );
};

export default PageLayout;