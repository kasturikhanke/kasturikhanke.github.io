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
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto">
        <div className="">
        <h2 className="text-2xl font-medium mb-2 text-gray-800"> 🛠️ The framework</h2>
        </div>

        <div className="space-y-2">
          {/* Feature 1: Push Notifications */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="pt-16">
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-800">Letting users know a new feature is available</h3>
                  <p className="text-lg text-gray-700">
                    I designed a push notification to alert users about the AI Assistant's availability. I collaborated with our content designer and our PM to test out 3 different variations in the copy. Testing out the copy would help us understand which messaging resonated more strongly with our users.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px]">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="pt-16">
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-800">Showing the value proposition upfront</h3>
                  <p className="text-lg text-gray-700">
                    The update announcement showed the top 3 features of the AI Assistant along with a video showcasing the Assistant in action. This helped users see the immediate value and possible use cases of the AI Assistant.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px]">
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
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-16">
              <div className="border-2 border-gray-100 rounded-xl p-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold">
                      <span className="font-emoji text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-xl font-medium mb-2  text-gray-800">Why splash screen?</span>
                    </h4>
                    <img 
                      src="BeforeUA.png" 
                      alt="Description" 
                      className="w-full rounded-lg mt-8"
                    />
                  </div>
                  <div className="col-span-4 space-y-8 mt-8">
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Insight</h3>
                      <p className="text-gray-700">During design reviews, we hypothesized that there would be a drop-off between showing users an update announcement and then picking a file.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Solution</h3>
                      <p className="text-gray-700">Instead of taking users to a file picking menu, I ideated around showing top 3 recent files in the AI Assistant directly after user sees the splash screen.</p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-gray-800">Impact</h3>
                      <p className="text-gray-700">There was less drop-off between users tapping on "Try now" and picking a file as tapping on 'Try now' led directly to the AI Assistant.</p>
                    </div>
                  </div>
                </div>
                <img 
                  src="AfterUA.png" 
                  alt="Description" 
                  className="w-full mt-8 rounded-lg"
                />
              </div>
            </div>

            {/* UI Evolution */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out mt-16">
              <div className="rounded-xl p-8 border-2 border-gray-100">
                <div>
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-2">
                      <span className="font-emoji text-xl font-medium mb-2  text-gray-800">📖</span>
                      <span className="text-xl font-medium mb-2  text-gray-800">UI evolution</span>
                    </h4>
                    <p className="mb-8 text-gray-700">The Gen AI core design team met twice a week to give design feedback. Through multiple prototypes and iterations on Figma, we landed on a final UI for the splash screen. I then collaborated with our motion designers to create a strong visual video for the splash screen.</p>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="pt-16">
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-800">Nudging users on longer documents</h3>
                  <p className="text-lg text-gray-700">
                    Subtle in-app nudges only when users are in a document to educate users on prompts they can use. My goal here was to balance user education with main flow tasks.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px]">
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

          {/* Feature 4: Text Contextualization */}
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="pt-16">
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-gray-800">AI powered text contexualization</h3>
                  <p className="text-lg text-gray-700">
                    Upon selecting text, users could now ask the AI Assistant a question related to the selected text.
                  </p>
                </div>
              </div>
              <div className="relative h-[600px]">
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