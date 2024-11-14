import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import { IoLockClosedOutline } from "react-icons/io5";

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
          <h1 className="text-6xl font-semibold mb-6">Adobe Acrobat AI Assistant</h1>
          <p className="text-2xl font-light mb-2">Designing a discovery framework for the AI assistant after 90% of users were unaware of its existence.</p>
          
          <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-8">
          <a href="https://time.com/7094842/adobe-acrobat-ai-assistant/" target="_blank" rel="noopener noreferrer">
        <img 
          src="Time.png" 
          alt="Sezzle Up" 
          className="w-full h-auto"
        />
        </a>
      </div>

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

        

        {/* Outcomes Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12">Outcomes</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg relative">
              <div className="relative">
                <h3 className="text-4xl font-bold mb-4">38%</h3>
                <p className="text-xl">Increase in </p>
              </div>
              {/*<div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center"></div>*/}
              {/*<IoLockClosedOutline className="absolute bottom-6 right-6 text-gray-600" size={22} />*/}
            </div>
              
            <div className="bg-gray-100 p-8 rounded-lg relative">
              <div className="relative">
                <h3 className="text-4xl font-bold mb-4">32%</h3>
                <p className="text-xl">Increase in conversion rate when interacting with the all promotions</p>
              </div>
              {/*<div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-lg flex items-center justify-center"></div>*/}
              {/*<IoLockClosedOutline className="absolute bottom-6 right-6 text-gray-600" size={22} />*/}
            </div>
          </div>
        </section>
  
        {/* Context Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Context</h2>
          <p className="text-xl leading-relaxed">
            As an experience designer for a tool on which more than 400 billion PDFs are opened, 
            I was tasked with <span className="font-bold">designing the discovery and promotion </span> of the AI assistant. 
            Our biggest challenge wasn't just building a new AI Assistant tool that users could rely on — it was ensuring that users 
            could find it easily and understand how to use it in their daily workflow.
          
          </p>
        </section>

        {/* Challenges Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Challenges</h2>
          <p className="text-xl">
            Upon beta testing, we saw that <span className="font-bold">90%</span> of users were not aware of the AI Assistant. Users did not know how to use the AI Assistant. 
            The AI Assistant was <span className="font-bold">not discoverable.</span> Users did not know what value the AI Assistant could provide to them thus leading to  
            <span className="font-bold"> low adoption and usage rates.</span> <br></br> <br></br>
            Low adoption and usage rates meant that the Assistant's core functionality was not being used thus limiting the app's value to users.
          </p>
        </section>

        {/* Goal Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Goal</h2>
          <p className="text-xl">
            The goal was to educate users on the value of the AI Assistant.
            And, it was integrating discovery points into the app's workflow to make it easier for users to find the AI Assistant without disrupting their workflow. 
          </p>
        </section>

        {/* Solution Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-8">Solution</h2>
          <p className="text-xl mb-12">
            To make the AI Assistant more discoverable, I created 3 key elements: 
          </p>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">1. Push Notifications</h3>
              <p className="text-xl mb-8">
                I designed a push notification to alert users about the AI Assistant's availability. I tested 3 different variations in the copy with my PM to understand which messaging resonated strongly with our users.
              </p>
              <video
                className="w-full rounded-lg shadow-lg"
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
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">2. Update Announcements</h3>
              <p className="text-xl mb-8">
                The update announcement showed the top 3 features of the AI Assistant along with a video showcasing the Assistant in action. This helped users see the immediate value and possible use cases of the AI Assistant.
              </p>
              <video
                className="w-full rounded-lg shadow-lg mb-8"
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
              <p className="text-xl mb-8">
                An additional win that was a byproduct of this update was that we had a new file picking experience that kept users within the AI Assistant panel instead of the old experience that would redirect users to the file picker.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">3. In-app Nudges</h3>
              <p className="text-xl mb-8">
                Subtle in-app nudges only when users are in a document to educate users on prompts they can use. My goal here was to balance user education with main flow tasks.
              </p>
              <video
                className="w-full rounded-lg shadow-lg"
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
        </section>

        {/* Key Learnings Section */}
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
        </section>

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