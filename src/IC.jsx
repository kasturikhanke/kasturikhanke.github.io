import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import FrameworkSection from './FrameworkSection';

const IC = () => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'impact', label: 'Impact' },
    { id: 'challenges', label: 'Challenges & Goals' },
    { id: 'framework', label: 'Framework' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  const [activePage, setActivePage] = React.useState('ic');
  
  React.useEffect(() => {
    window.scrollTo(0, 0);

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/';
      window.scrollTo(0, 0);
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
          <h1 className="text-3xl md:text-4xl font-normal mb-4 leading-tight max-w-3xl text-gray-800">
            AI Quick Prompts
          </h1>
          <p className="text-lg md:text-xl font-normal leading mb-8 max-w-2xl text-gray-700">
            Redesigning the first time experience for users to avoid the cold start problem.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-500 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Product Design
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Increased usage by 4%
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="mb-16 md:mb-24">
        </section>

        {/* Challenges and Goals Section */}
        <section className="relative py-8">
          <div className="max-w-7xl mx-auto">
            {/* Context Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 md:mb-12 mb-8">
              <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
                <div className="max-w-md">
                  <h2 className="text-2xl font-medium md:mb-12 mb-6 text-gray-800">📝 Context</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                  <p className="text-lg text-gray-700">
                  When users first encounter an AI Assistant, they often face a cold start problem—they're unsure of what to ask or how to begin interacting with the system. 
                  This uncertainty leads to disengagement and missed opportunities for users to leverage the AI effectively.
                  </p>
                </div>
              </div>
            </div>
                
            <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 mb-8">
              {/* Challenges Section */}
              <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
                <div className="max-w-md">
                  <h2 className="text-2xl font-medium md:mb-12 mb-6 text-gray-800">❗️Insights</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                  <p className="text-lg text-gray-700">Lack of user direction: Users didn’t always know what the AI could do.</p>
                </div>

                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                  <p className="text-lg text-gray-700">Unclear value proposition: Users weren’t immediately convinced of the assistant’s usefulness.</p>
                </div>

                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                  <p className="text-lg text-gray-700">High drop-off rates: Without immediate guidance, users were more likely to disengage.</p>
                </div>
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
                  <p className="text-lg text-gray-700">Processing time opportunities: Long processing times could be used to introduce AI value and encourage exploration.</p>
                </div>
              </div>
            </div>

            {/* Design Goals Section */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 md:gap-12 md:mb-12 mb-8">
              <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
                <div className="max-w-md">
                  <h2 className="text-2xl font-medium md:mb-12 mb-6 text-gray-800">🎯 Goals</h2>
                </div>
              </div>

              <div className="space-y-4">
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
                  <p className="text-lg text-gray-700">Increase user engagement: Provide clear entry points to encourage first-time interactions.</p>
                </div>

                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
                  <p className="text-lg text-gray-700">Reduce early drop-off rates: Help users quickly understand what the AI can do.</p>
                </div>

                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
                  <p className="text-lg text-gray-700">Enhance usability: Make AI interactions more intuitive and approachable.</p>
                </div>
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
                  <p className="text-lg text-gray-700">Utilize processing time: Keep users engaged by offering meaningful AI interactions during wait times.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-6 md:mb-8">
          <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
            <h2 className="text-center text-lg md:text-2xl font-medium text-gray-800">
            How might we help users overcome the cold start problem and engage confidently with the AI Assistant?
            </h2>
          </div>
        </section>

       {/* Final Section */}
       <section className="relative py-12"> 
          <div className="space-y-24">
            {/* Solution 1 */}
            <div 
              id="educational-onboarding" 
              className="border-b border-gray-200 pb-16"
              style={{ scrollMarginTop: '8vh'}}               
              >
              <h3 className="text-2xl font-medium mb-8 text-gray-800">The Solution</h3>
              <p className="text-lg text-gray-700">
              We designed AI Quick Prompts as an intuitive way to get users started. These were predefined, actionable prompts grouped into three main categories: Ask, Analyze, and Create.            </p>
              <img src="ICfinal.png" alt="Intuitive Categories solution" className="w-full rounded-xl mb-12" /> 
            </div>

            {/* Solution 2 */}
            <div 
            id="secure-information" 
            className="border-b border-gray-200 pb-16"
            style={{ scrollMarginTop: '8vh'}}   
            >
                
              <h3 className="text-2xl font-medium mb-8 text-gray-800">Design Approach</h3>
              <h3 className="text-2xl font-medium mb-8 text-gray-800">1. Leveraging Existing Research & Insights</h3>
              <p className="text-lg text-gray-700 mb-12">
                Reviewed prior user research and session analytics 
                to understand drop-off points. Synthesized common user behaviors and mapped them to relevant prompt categories.
                </p>
                <h3 className="text-2xl font-medium mb-8 text-gray-800">2. Ideation and Prototyping</h3>
                <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-16">
                <div className="rounded-xl p-4 md:p-8 border-2 border-gray-100">
                <div>
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold mb-2">
                      {/* <span className="font-emoji text-lg md:text-xl font-medium mb-2 text-gray-800">📖</span> */}
                      <span className="text-lg md:text-xl font-medium mb-2 text-gray-800">UI evolution</span>
                    </h4>
                    <p className="mb-4 md:mb-8 text-sm md:text-base text-gray-700">Through a lot of ideation and multiple feedback sessions, I was able to land on a final screen that would be used to replace the current landing page. </p>
                    <img 
                      src="Landingpage.png" 
                      alt="UI Evolution" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-16">
                <div className="rounded-xl p-4 md:p-8 border-2 border-gray-100">
                <div>
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold mb-2">
                      {/* <span className="font-emoji text-lg md:text-xl font-medium mb-2 text-gray-800">📖</span> */}
                      <span className="text-lg md:text-xl font-medium mb-2 text-gray-800">Prototyping an early concept</span>
                    </h4>
                    <p className="mb-4 md:mb-8 text-sm md:text-base text-gray-700">This idea did not make it into the final iteration but was one that I conducted testing on to see how it resonated with users. </p>
                    <div className="relative h-[400px] md:h-[600px]">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="IC.mov"
                  type="video/quicktime"
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
                  </div>
                </div>
              </div>
            </div>
              
              </div>
            </div>

        </section>

        {/* Conclusion Section */}
        <section className="mb-32">
          <h2 className="text-2xl font-medium mb-4 text-gray-800">Concluding thoughts</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700">
            AI Quick Prompts successfully tackled the cold start problem, increasing engagement and reducing drop-off rates by providing structured entry points. 
            By leveraging processing time and refining prompt strategies, we ensured users quickly grasped AI capabilities and stayed engaged. 
            Moving forward, personalizing Quick Prompts, integrating adaptive suggestions, and expanding multimodal input options will enhance user experience and scalability.            
            </p>
          </div>
        </section>
      </main>

      {/* Next Project Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <a 
              href="/feedback"
              className="inline-block px-8 py-2 rounded-full border-2 border-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl md:text-6xl pl-12 mb-4 max-w-2xl font-normal">
            Want to chat more about this case study?
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

export default IC;