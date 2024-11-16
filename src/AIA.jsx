import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import { IoLockClosedOutline } from "react-icons/io5";
import ChallengesGoalsSection from './ChallengesGoalsSection';

const AIA = () => {
  const [activePage, setActivePage] = React.useState('aia');
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
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
          <h1 className="text-6xl font-normal mb-4 leading-tight max-w-3xl">Adobe Acrobat AI Assistant</h1>
          <p className="text-xl font-normal leading mb-8 max-w-2xl">
            Leading the design framework for promotion and discovery of the AI Assistant on mobile. 
          </p>
          <section className="flex items-center gap-8 mb-16 mt-8  rounded-lg">
          <div className="space-y-6">
          <h3 className="text-gray-500 uppercase text-xs font-medium">
            Recognitions
          </h3>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-gray-100 p-4 rounded-lg">
              <img 
                src="Time.png"
                alt="Time logo"
                className="grayscale h-8 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm text-gray-500 font-medium uppercase">
                Award
              </span>
              <div className="flex flex-col">
              
                <span className="text-gray-900">
                  Best Inventions of 2024
                </span>
              </div>
            </div>
          </div>
        </div> 
    </section>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">My Role</h2>
              <p className="text-xl max-w-[320px] break-words">Designing, prototyping, user testing, and user research</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Timeline</h2>
              <p className="text-xl">August 2023 - present</p>
            </div>
          </div>
        </section>
 {/* Add the full bleed image here, outside the container */}
 <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16">
        <img 
          src="AIAthumb.jpg" 
          alt="Sezzle Up" 
          className="w-full h-auto"
        />
      </div>
        

        {/* Outcomes Section */}
         <section className="mb-24">
      <h2 className="text-4xl font-semibold mb-12">Outcome</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="relative bg-white p-12 rounded-3xl shadow-lg overflow-hidden">
          {/* Diffused circle gradient */}
          <div 
            className="absolute w-48 h-48 bottom-0 right-0 rounded-full"
            // style={{
            //   background: 'radial-gradient(circle at center, #E9D5FF 0%, rgba(233, 213, 255, 0) 70%)',
            //   transform: 'translate(-100%, -20%)',
            //   filter: 'blur(40px)'
            // }}
          />
          
          <div className="relative">
            <h3 className="text-4xl font-semibold mb-6">38%</h3>
            <p className="text-xl text-gray-700">Increase in active usage of the AI Assistant after implementing the discovery framework</p>
          </div>
        </div>
        
        <div className="relative bg-white p-12 rounded-3xl shadow-lg overflow-hidden">
          {/* Diffused circle gradient */}
          <div 
            className="absolute w-48 h-48 bottom-0 right-0 rounded-full"
            // style={{
            //   background: 'radial-gradient(circle at center, #E9D5FF 0%, rgba(233, 213, 255, 0) 70%)',
            //   transform: 'translate(20%, 20%)',
            //   filter: 'blur(40px)'
            // }}
          />
          
          <div className="relative">
            <h3 className="text-4xl font-semibold mb-6">32%</h3>
            <p className="text-xl  text-gray-700">Increase in conversion rate when users interacted with all the promotions</p>
          </div>
        </div>
      </div>
    </section>
  
        {/* Context Section
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-8">Context</h2>
          <p className="text-xl">
            As an experience designer for a tool on which more than 400 billion PDFs are opened, 
            I was tasked with <span className="font-bold">designing the discovery and promotion </span> of the AI assistant. 
            Our biggest challenge wasn't just building a new AI Assistant tool that users could rely on — it was ensuring that users 
            could find it easily and understand how to use it in their daily workflow.
          
          </p>
        </section> */}
        
        {/* Problem Statement Box
        <section className="mb-24">
          <div className="relative bg-white p-16 rounded-3xl shadow-lg overflow-hidden">
            {/* Diffused circle gradient 
            <div 
              className="absolute w-48 h-48 bottom-0 right-0 rounded-full"
              // style={{
              //   background: 'radial-gradient(circle at center, #867dff 0%, rgba(233, 213, 255, 0) 70%)',
              //   transform: 'translate(-400%, 20%)',
              //   filter: 'blur(60px)',
              // }}
            />
            
            
            <div className="relative">
              <p className="text-xl font-semibold text-gray-700">
              How might we drive user engagement and build habits around generative AI features so that users can seamlessly integrate them into their daily workflows?
              </p>
            </div>
          </div>
        </section> */}

        <ChallengesGoalsSection />


        {/* Solution Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-medium mb-4">The Framework</h2>
          <p className="text-xl mb-12">
            To make the AI Assistant more discoverable, I introduced the following:
          </p>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Letting users know a new feature is available</h3>
              <p className="text-xl mb-8">
                I designed a push notification to alert users about the AI Assistant's availability. I collaborated with our content designer and our PM to test out 3 different variations in the copy. Testing out the copy would help us understand which messaging resonated more strongly with our users.
              </p>
              <div className="relative">
              <video
                className="w-full rounded-lg shadow-sm"
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
              <div className="absolute bottom-4 left-4 p-8 rounded-lg">
                <div className="w-8 h-0.5 bg-gray-800 rounded-3xl mb-2"></div>
                  <p className="text-lg font-regular text-gray-700">Increasing Awareness</p>
                  <p className="text-lg font-regular text-gray-700">Non-disruptive messaging</p>
                </div>
              </div>
              
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Showing the value proposition upfront</h3>
              <p className="text-xl mb-8">
                The update announcement showed the top 3 features of the AI Assistant along with a video showcasing the Assistant in action. This helped users see the immediate value and possible use cases of the AI Assistant.
              </p>
              <div className="relative">
                <video
                  className="w-full rounded-lg shadow-sm mb-8"
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
                <div className="absolute bottom-4 left-4 p-8 rounded-lg">
                <div className="w-8 h-0.5 bg-gray-800 rounded-3xl mb-2"></div>
                  <p className="text-lg font-regular text-gray-700">Increasing Awareness</p>
                </div>
              </div>
              {/* <p className="text-xl mb-8">
                An additional win that was a byproduct of this update was that we had a new file picking experience that kept users within the AI Assistant panel instead of the old experience that would redirect users to the file picker.
              </p> */}
              
            </div>
            
              {/* Problem-Solution Grid */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-6">
                      <span className="font-emoji text-2xl leading-none">⚠️</span>
                      <span className="text-gray-900">Why splash screen?</span>
                      
                    </h4>
                    <span className="">Acrobat's existing What's New framework could not 
                      communicate everything we wanted to tell the users about the AI Assistant.</span>
                    
                    
                    <img 
                      src="BeforeUA.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="col-span-4 space-y-8 mt-16">
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Insight</h3>
                      <p>
                        During design reviews, we hypothesized that there would be a drop-off between showing users an update announcement and then picking a file. 
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Solution</h3>
                      <p className="text-">
                      Instead of taking users to a file picking menu, I ideated around showing top 3 recent files in the AI Assistant directly after user sees the splash screen.                       </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Impact</h3>
                      <p className="">
                        There was less drop-off between users tapping on "Try now" and picking a file as tapping on 'Try now' led directly to the AI Assistant. 
                      </p>
                    </div>
                  </div>
                </div>
                <img 
                      src="AfterUA.png" 
                      alt="Description" 
                      className="w-full mt-8 rounded-lg"
                    />
              </div>
              
            {/* Problem-Solution Grid */}
            <div className="rounded-xl p-8 bg-gray-50">
                <div className="">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-6 ">
                      <span className="font-emoji text-2xl leading-none">📖</span>
                      <span className="text-gray-900">UI evolution</span>
                    </h4>
                    <p className="mb-8">The Gen AI core design team met twice a week to give design feedback. Through multiple prototypes and iterations on Figma, we landed on a final UI for the splash screen. I then collaborated with our motion designers to create a strong visual video for the splash screen. </p>
                    <img 
                      src="SplashUI.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="col-span-4 space-y-8">
                    
                  </div>
                </div>
              </div>
            
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Nudging users on longer documents</h3>
              <p className="text-xl mb-8">
                Subtle in-app nudges only when users are in a document to educate users on prompts they can use. My goal here was to balance user education with main flow tasks.
              </p>
              <div className="relative">
              <video
                className="w-full rounded-lg shadow-sm mb-8"
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
              <div className="absolute bottom-4 left-4 p-8 rounded-lg">
                <div className="w-8 h-0.5 bg-gray-800 rounded-3xl mb-2"></div>
                  <p className="text-lg font-regular text-gray-700">Non-disruptive messaging</p>
                  <p className="text-lg font-regular text-gray-700">Nudging when users needed it</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">AI powered text contexualization</h3>
              <p className="text-xl mb-8">
                Upon selecting text, users could now ask the AI Assistant a question related to the selected text.  
              </p>
              <div className="relative">
              <video
                className="w-full rounded-lg shadow-sm mb-8"
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
              <div className="absolute bottom-4 left-4 p-8 rounded-lg">
                <div className="w-8 h-0.5 bg-gray-800 rounded-3xl mb-2"></div>
                  <p className="text-lg font-regular text-gray-700">Increasing awareness</p>
                  <p className="text-lg font-regular text-gray-700">Non-disruptive messaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings Section
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12">Key Learnings</h2>
          <div className="text-xl space-y-12">
            <p>
              This framework saw a 32% increase in conversion rate when users interacted with the at least 2 promotions, signalling positive results. Some key takeaways:
            </p>
            
            <div>
              <strong>User Awareness is Critical for New Features:</strong>
              <p className="mt-4">Even the most sophisticated tools can go unnoticed without clear entry points. 
              I learned that designing features is only half the battle—effective promotion and discovery mechanisms are equally essential to maximize impact.</p>
            </div>

            <div>
              <strong>Importance of Contextual, Non-intrusive Prompts:</strong>
              <p className="mt-4">The in-app nudges needed to be informative but not disruptive. Balancing user education with workflow 
              sensitivity was a fine line, teaching me to consider timing, placement, and frequency in design.</p>
            </div>

            <div>
              <strong>Iterative Testing with Real-Time Data:</strong>
              <p className="mt-4">Although user testing was initially limited, leveraging post-launch data 
              gave me insights for rapid adjustments. This experience highlighted the value of being adaptable and responsive to metrics as a form of continuous user feedback.</p>
            </div>

            <div>
              <strong>Collaboration with Cross-functional Teams:</strong>
              <p className="mt-4">Partnering with marketing, product, and engineering allowed us to align on 
              strategies for raising awareness. This project reinforced the impact of multidisciplinary collaboration to address complex challenges.</p>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="mb-24 mt-32 bg-gray-100 p-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8">Want to learn how the decisions were made?</h2>
          <p className="text-xl mb-12">
            Get in touch to learn more about the research, design process, and detailed outcomes of this project.
          </p>
          <div className="flex gap-6">
            <button className="bg-slate-950 text-white px-8 py-4 rounded-lg text-lg">
              Email me
            </button>
            <button className="border-2 border-slate-800 text-slate-600 px-8 py-4 rounded-lg text-lg">
              Schedule a call
            </button>
          </div>
        </section>        
      </main>

      <footer className="w-full bg-transparent pb-8">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} />
      </footer>
    </div>
  );
};

export default AIA;