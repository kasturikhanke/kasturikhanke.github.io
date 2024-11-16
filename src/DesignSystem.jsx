import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';

const DesignSystem = () => {
  const [activePage, setActivePage] = React.useState('design-system');

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className="w-full bg-transparent">
        <SpinningLogo />
      </header>
      
      <main className="container mx-auto px-4 max-w-5xl">
        <section className="mb-16 pt-16">
          <h1 className="text-5xl text-gray-800 font-semibold mb-4">Adobe Acrobat Design System</h1>
          <p className="text-xl font text-gray-600 mb-8">Self initiated project. Creating a comprehensive and flexible mobile design system to improve consistency, and streamline development.</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">My Role</h2>
              <p className="text-xl text-gray-600">Lead Designer</p>
            </div>
            <div>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">Timeline</h2>
              <p className="text-xl text-gray-600">January 2023 - present</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl text-gray-800 font-semibold mb-8 ">Outcomes</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl text-gray-800 font-bold mb-2">2x</h3>
              <p className="text-xl text-gray-600">Faster design time</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl text-gray-800 font-bold mb-2">75%</h3>
              <p className="text-xl text-gray-600">Daily adoption rate</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl text-gray-800 font-bold mb-2">100%</h3>
              <p className="text-xl text-gray-600">Improvement in consistency and efficiency</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-4xl text-gray-800 font-bold mb-2">75%</h3>
              <p className="text-xl text-gray-600">component utilization without detaching instances</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Context</h2>
          <p className="text-xl leading-relaxed">
            
            With the introduction of a new updated company-wide design system, <a href="https://s2.spectrum.adobe.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center underline decoration-1 underline-offset-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
            Spectrum 2.0
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            </a>,
            the first task I identified was creating a list of all the components that the mobile team needed. 
            Recognizing the time-consuming nature and potential inconsistencies
            of creating components from scratch, I collaborated with a Staff Designer and a Senior Designer to develop
            a comprehensive component library. This library was tailored specifically for the
            mobile designers on the Document Cloud team, ensuring consistency, efficiency,
            and a unified design language across all mobile projects.
          </p>
          
        </section>
        <p className="text-xl leading-relaxed">
        Design systems are like building blocks. They are the foundation to any design organization and carry a lot of weight in the efficiency of designing. 
        Here's how I visualize a design system containing atoms, molecules, organisms templates, and pages: 
        </p>
        <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16">
        <img 
          src="DsComp1.png" 
          alt="Sezzle Up" 
          className="w-full h-auto"
        />
      </div>

        <section class="mb-16">
        
        </section>

        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">The Discovery</h2>
        <p className="text-xl leading-relaxed">
          It became clear after interviewing all the members on the team that a design system built out exclusively for 
          Acrobat mobile elements was needed to remove redundancy. 
        </p>

        <div className="relative mt-8 mb-8">
          <img 
          src="Hwww.png" 
          alt="Sezzle Up" 
          className="w-full h-auto"
        />
        </div>
        <p className="text-xl leading-relaxed">
          In order to scale faster, we prioritized building the most essential components like navigation menus, toolbars, and sheets. 
          By prioritizing the most important components first, we could create a timeline for when larger components could be added to the library. 
        </p>
        </section>

       <section className="mb-16"> 
       <h2 className="text-3xl font-semibold mb-8">The Challenges</h2>
        <p className="text-xl leading-relaxed mb-4">
          Some of the challenges I faced were: 
        </p>
        <ul class="text-xl list-disc pl-6">
          <li class="mb-4">
          This project was not a part of the assigned tasks, so I had to find the time to work on it.
          </li>
          <li class="mb-4">
            The mobile team had no centralized design system, so I had to create one from scratch.
          </li>
          <li class="mb-4">
        Only 1/7 designers knew how to use Figma, so creating component documentation and how to use them was a challenge.
          </li>
      </ul>
        </section>

        <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">The Approach</h2>
        What if...
  </section>


        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">What I Did</h2>
          <div className="space-y-8">
            <div>
            
              <h3 className="text-2xl font-semibold mb-2">Migration</h3>
              <p className="text-xl">
                Transitioned design components from Adobe XD to Figma, added auto layout, and optimized components for
                mobile specific use cases.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Library Creation</h3>
              <p className="text-xl">
                Developed a comprehensive Figma library with a wide range of components,
                templates, and interaction patterns.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Continuous Improvement</h3>
              <p className="text-xl">
                Regularly updated the library based on team feedback and evolving project
                requirements, ensuring it remained relevant and useful. Initiated monthly meetings with the core design system team to review the library and make improvements.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 mt-32 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8">Interested in chatting?</h2>
          <div className="space-y-8">
            <div>
              <p className="text-xl  mb-8">
                Get in touch to learn more about this project.
              </p>
              <div className="flex gap-4">
                <button className="bg-slate-950 text-white px-8 py-3 rounded-lg text-lg">
                  Email me
                </button>
                <button className="border-2 border-slate-800 text-slate-600 px-8 py-3 rounded-lg text-lg">
                  Schedule a call
                </button>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="w-full bg-transparent">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} />
      </footer>
    </div>
  );
};

export default DesignSystem;