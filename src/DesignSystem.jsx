import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';

const DesignSystem = () => {
  const [activePage, setActivePage] = React.useState('design-system');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className="w-full bg-transparent pt-8 pb-16">
        <SpinningLogo />
      </header>

      <main className="container mx-auto px-4 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-normal mb-4 leading-tight max-w-3xl text-gray-800">Adobe Acrobat Design System</h1>
          <p className="text-xl font-normal mb-8 max-w-2xl text-gray-700">
            Self initiated project. Creating a comprehensive and flexible mobile design system to improve consistency, and streamline development.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Lead Designer
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Ongoing project
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">📈 Impact</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">2x</h3>
                <p className="text-lg text-gray-700">Faster design time</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">75%</h3>
                <p className="text-lg text-gray-700">Daily adoption rate</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">100%</h3>
                <p className="text-lg text-gray-700">Improvement in consistency and efficiency</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">75%</h3>
                <p className="text-lg text-gray-700">Component utilization without detaching instances</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full bleed image */}
        <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16 bg-gray-50">
          <img 
            src="DScover.png" 
            alt="Design System Components" 
            className="w-full h-auto"
          />
        </div>

        <section className="relative py-8">
          {/* Context Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-2xl font-medium mb-12 text-gray-800">📝 Context</h2>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-gray-700">
                With the introduction of a new updated company-wide design system, <a href="https://s2.spectrum.adobe.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline decoration-1 underline-offset-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Spectrum 2.0
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                </a>, the first task I identified was creating a list of all the components that the mobile team needed.
              </p>
            </div>
          </div>

          {/* Discovery Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-2xl font-medium mb-12 text-gray-800">🔍 Discovery</h2>
              </div>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-gray-700">
                It became clear after interviewing all the members on the team that a design system built out exclusively for 
                Acrobat mobile elements was needed to remove redundancy.
              </p>
              <img src="Hwww.png" alt="Discovery Process" className="w-full rounded-xl mb-8" />
              <p className="text-lg text-gray-700">
                In order to scale faster, we prioritized building the most essential components like navigation menus, toolbars, and sheets.
                By prioritizing the most important components first, we could create a timeline for when larger components could be added to the library.
              </p>
            </div>
          </div>

          {/* Challenges Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-2xl font-medium mb-12 text-gray-800">🚩 Challenges</h2>
              </div>
            </div>
            <div className="space-y-8">
              <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
                <li>This project was not a part of the assigned tasks, so I had to find the time to work on it.</li>
                <li>The mobile team had no centralized design system, so I had to create one from scratch.</li>
                <li>Only 1/7 designers knew how to use Figma, so creating component documentation and how to use them was a challenge.</li>
              </ol>
            </div>
          </div>

          {/* Solution Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
              <div className="max-w-md">
                <h2 className="text-2xl font-medium mb-12 text-gray-800">🛠️ What I Did</h2>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-800">Migration</h3>
                <p className="text-lg text-gray-700">
                  Transitioned design components from Adobe XD to Figma, added auto layout, and optimized components for
                  mobile specific use cases.
                </p>
                <img src="Migration.png" alt="Migration" className="w-full rounded-xl mb-8" />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-800">Library Creation</h3>
                <p className="text-lg text-gray-700">
                  Developed a comprehensive Figma library with a wide range of components,
                  templates, and interaction patterns.
                </p>
                <img src="LibraryCreation.png" alt="Migration" className="w-full rounded-xl mb-8" />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-800">Continuous Improvement</h3>
                <p className="text-lg text-gray-700">
                  Regularly updated the library based on team feedback and evolving project
                  requirements, ensuring it remained relevant and useful.
                </p>
                <img src="Iteration.png" alt="Migration" className="w-full rounded-xl mb-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Section */}
        <section className="py-24">
          <div className="flex justify-end">
            <a 
              href="/aia"
              className="inline-block px-8 py-2 rounded-full border-2 border-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl pl-12 mb-4 max-w-2xl font-normal">
            Wanna chat about this case study?
          </h2>
          <p className="text-5xl text-gray-500 pl-12 font-normal">
            <a 
              href="https://calendly.com/your-calendar-link"
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
          activePage={activePage} 
          onNavClick={handleNavClick}
          isCaseStudy={true} 
        />
      </footer>
    </div>
  );
};

export default DesignSystem;