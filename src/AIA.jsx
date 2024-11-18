
 import React from 'react';
 import SpinningLogo from './SpinningLogo';
 import BottomNav from './BottomNav';
 import { IoLockClosedOutline } from "react-icons/io5";
 import ChallengesGoalsSection from './ChallengesGoalsSection';
 import FrameworkSection from './FrameworkSection'; 
 const AIA = () => {
    const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'impact', label: 'Impact' },
    { id: 'challenges', label: 'Challenges & Goals' },
    { id: 'framework', label: 'Framework' },
    { id: 'conclusion', label: 'Conclusion' }
    ];

   const [activePage, setActivePage] = React.useState('aia');
   const videoRef = React.useRef(null);
   React.useEffect(() => {
     window.scrollTo(0, 0);
     if (videoRef.current) {
       videoRef.current.play().catch(error => {
         console.log("Video autoplay failed:", error);
       });
     }
   }, []);
   const handleNavClick = (page) => {
     if (page === 'home') {
       window.location.href = '/';
       window.scrollTo(0, 0);
     } else {
       setActivePage(page);
     }
   };

   // Updated navigation handler
  const handleNextProject = () => {
    navigate('/sezzle'); // Update this to your next project's route
  };


   return (
    
     <div className="min-h-screen bg-white text-gray-950 font-sans">
       <header className="w-full bg-transparent pt-8 pb-16">
         <SpinningLogo />
       </header>
    
       <main className="container mx-auto px-4 max-w-4xl">
         {/* Hero Section */}
         <section className="mb-16">
           <h1 className="text-4xl font-normal mb-4 leading-tight max-w-3xl text-gray-800 ">Adobe Acrobat AI Assistant</h1>
           <p className="text-xl font-normal leading mb-8 max-w-2xl text-gray-700">
             Leading the design framework for promotion and discovery of the AI Assistant on mobile to increase retention. 
           </p>
           <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Product Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Won the Time Best Innovation of 2024 Award
                  </div>
                </div>
           
           
         </section>

  {/* <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16">
         <img 
           src="AIAthumb.jpg" 
           alt="Sezzle Up" 
           className="w-full h-auto"
         />
       </div> */}
       








       
      
         {/* Outcomes Section */}
          <section id="impact" className="mb-24">
       <h2 className="text-2xl font-medium mb-8 text-gray-800">📈 Impact</h2>
       <div className="grid grid-cols-2 gap-8">
         <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
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
             <h3 className="text-4xl font-semibold mb-6  text-gray-800">38%</h3>
             <p className="text-lg text-gray-700">Increase in active usage of the AI Assistant after implementing the discovery framework</p>
           </div>
         </div>
      
         <div className="relative bg-white p-12 rounded-3xl border-2 border-gray-100 shadow-sm overflow-hidden">
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
             <h3 className="text-4xl font-semibold mb-6 text-gray-800">32%</h3>
             <p className="text-lg  text-gray-700">Increase in conversion rate when users interacted with all the promotions</p>
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
         <FrameworkSection />
         <section className="mb-32">
          <h2 className="text-2xl font-medium mb-4 text-gray-800">Concluding thoughts</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700">
              This project saw a huge impact on the retention of users. I continue iterating on the framework based on the data we see. I collaborate with my PM and content designer to create new experiements that test out differnt UIs and copy. 
            </p>
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
        
       </main>

        {/* Next Project Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <a 
              href="/sezzle-up"
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
                <h2 className="text-6xl pl-12 mb-4 max-w-2xl font-normal">
                  Want to chat more about this case study?
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
                <p className="text-sm text-gray-500 pl-12 mt-8">
                  Made with ♥ using Claude AI
                </p>
              </div>
            </section>
       <footer className="w-full bg-transparent pb-8">
         <BottomNav activePage={activePage} onNavClick={handleNavClick}
         isCaseStudy={true} />
       </footer>
     </div>
   );
 };
 export default AIA;