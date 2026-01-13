import React, { useEffect } from 'react';

const FrameworkSection = () => {
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
    <section className="relative py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Framework</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">The discovery system</h2>
        </div>

        {/* 3-Stage Discovery System Table */}
        <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mb-8 md:mb-12">
          <div>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              I designed a 3 stage discovery system that meets users at different points in their journey while using Acrobat:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Stage 1: Awareness */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-semibold text-lg mb-3">
                    1
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Awareness</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Goal</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Let users know AI Assistant exists</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Touchpoint</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Push-notification</p>
                  </div>
                </div>
              </div>

              {/* Stage 2: Understanding */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 font-semibold text-lg mb-3">
                    2
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Understanding</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Goal</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Show what AI Assistant does and why it's valuable</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Touchpoint</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Update announcement</p>
                  </div>
                </div>
              </div>

              {/* Stage 3: Activation */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 font-semibold text-lg mb-3">
                    3
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">Activation</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Goal</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Prompt usage at the moment of need</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Touchpoints</p>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">Contextual nudge, text selection shortcuts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 md:pt-4  border-gray-200/50">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                Traditional discovery assumes linear adoption where the feature is announced first and the user tries it. Research shows that users need multiple exposures across different contexts before they internalize a new capability. Each stage builds on the last. <span className="text-gray-900">Awareness</span> creates familiarity. <span className="text-gray-900">Understanding</span> creates intent. <span className="text-gray-900">Activation</span> creates habit.
              </p>
            </div>

            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-12">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Why this approach?</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
              We considered onboarding tutorials and proactive AI suggestions, but both created problems: tutorials blocked users from their work, and proactive suggestions felt presumptuous. Progressive contextual discovery won because it worked with user behavior, not against it.              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Feature 1: Push Notifications */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="pt-4 md:pt-16">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs">1</span>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Awareness</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">The Notification Problem</h3>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The challenge:</span> How do you notify users about AI without making it feel like spam?
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">My approach:</span> I collaborated with our Content Strategist and Product Marketing Manager to A/B test 3 message frames:
                    </p>
                    <ul className="space-y-2 text-base md:text-lg text-gray-700 pl-4">
                      <li><span className="font-medium">Version A:</span> "Chat with your docs" — Feature focused</li>
                      <li><span className="font-medium">Version B:</span> "Say hi to AI Assistant" — Feature focused</li>
                      <li><span className="font-medium">Version C:</span> "Ask questions about a document with AI" — Benefit focused</li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">Version C won</span> with the highest open rate.
                    </p>
                    {/* <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">Learning:</span> Users respond to pain points, not feature announcements. Looking back, I wish we had incorporated more variations — a feature focused, benefit focused, and problem focused variation would have provided clearer insights.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px]">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="PN.mov"
                  type="video/quicktime"
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Feature 2: Value Proposition */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="pt-4 md:pt-16">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-600 font-semibold text-xs">2</span>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Understanding</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">The Value Proposition Challenge</h3>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The challenge:</span> Users who tapped the notification needed to understand what AI Assistant does fast or they would leave.
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The solution:</span> Show, don't tell. Instead of describing features, I designed a splash screen that:
                    </p>
                    <ul className="space-y-2 text-base md:text-lg text-gray-700 pl-4">
                      <li>Shows the top 3 use cases</li>
                      <li>Includes a quick 7-second video of AI in action</li>
                      <li>Provides an immediate "Try now" CTA</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px]">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="UA.mov"
                  type="video/quicktime"
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Problem-Solution Grid */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-16">
              <div className="border-2 border-gray-100 rounded-xl p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold">
                      <span className="font-emoji text-xl md:text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-lg md:text-xl font-medium mb-2 text-gray-800">The pivot</span>
                    </h4>
                    <img 
                      src="BeforeUA.png" 
                      alt="Description" 
                      className="w-full rounded-lg mt-4 md:mt-8"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-4 space-y-6 md:space-y-8 mt-4 md:mt-8">
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Insight</h3>
                      <p className="text-sm md:text-base text-gray-700">During design reviews, we identified a drop-off risk: asking users to pick a file creates friction.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Solution</h3>
                      <p className="text-sm md:text-base text-gray-700">"Try now" routes directly to AI Assistant with 3 recent files already loaded in the chat. Users can start asking questions immediately.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Why this worked</h3>
                      <p className="text-sm md:text-base text-gray-700">Removed decision-making friction. Users experienced value before having to commit to learning a new tool.</p>
                    </div>
                  </div>
                </div>
                <img 
                  src="AfterUA.png" 
                  alt="Description" 
                  className="w-full mt-4 md:mt-8 rounded-lg"
                />
              </div>
            </div>

            {/* UI Evolution */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-16">
              <div className="rounded-xl p-4 md:p-8 border-2 border-gray-100">
                <div>
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold mb-2">
                      <span className="font-emoji text-lg md:text-xl font-medium mb-2 text-gray-800">📖</span>
                      <span className="text-lg md:text-xl font-medium mb-2 text-gray-800">UI evolution</span>
                    </h4>
                    <p className="mb-4 md:mb-8 text-sm md:text-base text-gray-700">I worked with the Gen AI design team (bi-weekly critiques) and motion designers to iterate on the splash screen. In version 1, it felt more like a feature list with static image. In version 2, the video was more for a single use case. In the final version, I collaborated with the motion team to incorporate 3 use cases and simplified the UI to have just one primary CTA. </p>
                    <img 
                      src="SplashUI.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: In-app Nudges */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="pt-4 md:pt-16">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 font-semibold text-xs">3</span>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Activation</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Contextual Activation</h3>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The challenge:</span> Splash screens create awareness but not habits. We needed prompts that reminded users AI exists when they actually need it.
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">My approach:</span> Instead of generic "Try AI" messages, I designed nudges that appear based on user behavior:
                    </p>
                    <ul className="space-y-2 text-base md:text-lg text-gray-700 pl-4">
                      <li>Opens document longer than 20 pages → "Summarize this document?"</li>
                      <li>Scrolls to the end of the document → "Want a summary of what you just read?"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px]">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="Chatbubble.mov"
                  type="video/quicktime"
                  preload="auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-8 md:mt-16">
              <div className="border-2 border-gray-100 rounded-xl p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-lg md:text-xl font-bold">
                      <span className="font-emoji text-xl md:text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-lg md:text-xl font-medium mb-2 text-gray-800">Why nudges?</span>
                    </h4>
                    <img
                      src="Nudges.png"
                      alt="Description"
                      className="w-full rounded-lg mt-4 md:mt-8"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-4 space-y-6 md:space-y-8 mt-4 md:mt-8">
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Contextual</h3>
                      <span className="space-y-2 text-sm md:text-base text-gray-700">
                      
                          <span>Nudges appear at the moment of intent (e.g., when opening a long document) and eliminate the "what should I ask?" friction by suggesting relevant actions</span>
                    </span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Insight</h3>
                      <p className="text-sm md:text-base text-gray-700">User research showed coachmarks had low completion rates. Users said that they don't have time to read tooltips.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Solution</h3>
                      <p className="text-sm md:text-base text-gray-700">Prompting users with a subtle nudge based on intent would help the user rather than disrupting their flow.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Impact</h3>
                      <p className="text-sm md:text-base text-gray-700">Users found the subtle nudges more helpful and in line with their task at hand. Users could tap to use the nudges.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Feature 4: Text Contextualization */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="pt-4 md:pt-16">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 font-semibold text-xs">3</span>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Activation</p>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Text selection contextualization</h3>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The insight:</span> When users select text, they signal: "this part matters to me". What if AI could act on that intent?
                    </p>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-bold">The solution:</span> Contextual AI is powerful as it knows exactly what you're asking about. <br>
                      </br>iOS and Android have different text selection systems. I worked with engineers to create a unified experience that felt native to each platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px]">
                <video
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  src="AskAI.mov"
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
    </section>
  );
};

export default FrameworkSection;