import React, { useEffect } from 'react';

const ChallengesGoalsSection = () => {
  useEffect(() => {
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

  return (
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
                
                
                As an experience designer for a tool on which more than 400 billion PDFs are opened, I took up the challenge of 
                designing the discovery and promotion of the AI assistant. 
                Acrobat's biggest challenge wasn't just building a new AI Assistant tool that users could rely on — 
                it was ensuring that users could find it easily and understand how to use it in their daily workflow.</p>
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
              <p className="text-lg text-gray-700">90% of users were not aware of the AI Assistant and what it did</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <p className="text-lg text-gray-700">The AI Assistant had a very low adoption rate</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <p className="text-lg text-gray-700">Users complained and were unhappy about the over-messaging throughout the app</p>
            </div>
          </div>
        </div>

        {/* Design Goals Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 md:gap-12 md:mb-12 mb-8">
          <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
            <div className="max-w-md">
              <h2 className="text-2xl font-medium md:mb-12 mb-6 text-gray-800">🎯 Design goals</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
            {/* <span className="text-5xl font-extralight text-gray-700">*</span> */}
              <p className="text-lg text-gray-700">Increasing awareness</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
            {/* <span className="text-5xl font-extralight text-gray-700">*</span> */}
              <p className="text-lg text-gray-700">Non-disruptive messaging</p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out flex items-start gap-2">
            {/* <span className="text-5xl font-extralight text-gray-700">*</span> */}
              <p className="text-lg text-gray-700">Nudging when users needed it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesGoalsSection;