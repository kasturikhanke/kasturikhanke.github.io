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
    <section className="relative py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
         {/* Context Section */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mb-12 mb-6 md:mb-8">
          <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium md:mb-12 mb-3 md:mb-6 text-gray-800">📝 Context</h2>
            </div>
          </div>

          <div className="space-y-4 md:space-y-8">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <p className="text-base sm:text-lg text-gray-700">
                
                
                We launched Acrobat's AI Assistant in May 2024 with capabilities that could revolutionize how users interact with PDFs: instant summarization, intelligent Q&A, citation extraction. But 6 weeks post-launch, adoption remained critically low.</p>
            </div>
          </div>
        </div>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
            
          {/* Challenges Section */}
          <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium md:mb-12 mb-3 md:mb-6 text-gray-800">❗️Insights</h2>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Insight 1 */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Awareness gap</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>90% of users didn't know the AI Assistant existed</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Adoption was critically low</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Existing entry point - FAB was not discoverable</span>
                </li>
              </ul>
            </div>

            {/* Insight 2 */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Mental model problems</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Users who found it asked: "Is this just another chatbot?"</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Value proposition was unclear</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-700">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Users didn't understand when/why to use it</span>
                </li>
              </ul>
            </div>

            {/* Insight 3 */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Notification fatigue</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Users complained about over-messaging throughout the app</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>User research showed coachmark had low completion rates</span>
                </li>
                <li className="flex items-start gap-3 text-base sm:text-lg text-gray-600">
                  <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                  <span>Traditional existing discovery patterns such as a "what's new" modal weren't working</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Goals Section */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mb-12 mb-6 md:mb-8">
          <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
            <div className="max-w-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium md:mb-12 mb-3 md:mb-6 text-gray-800">🎯 Design goals</h2>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Contextual over promotional</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Show value in the moment of need
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Progressive disclosure</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Don't teach everything at once, reveal capabilities through use
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Show, not tell</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Let users use the product instead of reading instructions on how to use it  
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesGoalsSection;