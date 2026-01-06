
 import React, { useState, useEffect } from 'react';
 import SpinningLogo from './SpinningLogo';
 import BottomNav from './BottomNav';
 import StandardNavbar from './StandardNavbar';
 import { IoLockClosedOutline } from "react-icons/io5";
 import ChallengesGoalsSection from './ChallengesGoalsSection';
 import FrameworkSection from './FrameworkSection';
 import { motion } from 'framer-motion'; 
 const AIA = () => {
    const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'impact', label: 'Impact' },
    { id: 'challenges', label: 'Challenges & Goals' },
    { id: 'framework', label: 'Framework' },
    { id: 'conclusion', label: 'Conclusion' }
    ];

   const [activePage, setActivePage] = React.useState('aia');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
   const videoRef = React.useRef(null);
   React.useEffect(() => {
     // Disable browser's automatic scroll restoration
     if ('scrollRestoration' in history) {
       history.scrollRestoration = 'manual';
     }
     window.scrollTo(0, 0);
     if (videoRef.current) {
       videoRef.current.play().catch(error => {
         console.log("Video autoplay failed:", error);
       });
     }
   }, []);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };

     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   const handleNavClick = (page) => {
     if (page === 'home') {
       window.location.href = '/?fromCaseStudy=true';
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
       <header className={`sticky top-0 bg-white z-50 transition-shadow duration-300 ${
         isScrolled ? 'shadow-md' : ''
       }`}>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
           <SpinningLogo />
           <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: showNav ? 0 : 20, opacity: showNav ? 1 : 0 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
           >
             <StandardNavbar />
           </motion.div>
         </div>
       </header>
    
      <main className="container mx-auto px-8 sm:px-6 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3 md:mb-4 leading-tight max-w-3xl text-gray-800">Making AI Discoverable: Adobe Acrobat AI</h1>
          <p className="text-base sm:text-lg md:text-xl font-normal leading mb-6 md:mb-8 max-w-2xl text-gray-700">
            How I designed a contextual discovery system that increased AI Assistant adoption by 38% while reducing notification fatigue.  
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm text-gray-500 mb-6 md:mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Product Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    March '24 to May '24
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Won the Time Best Innovation of 2024 Award
                  </div>
                </div>
           
           
         </section>

     
      
         {/* Outcomes Section */}
         <section id="impact" className="mb-12 md:mb-24">
         <div className="mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Impact</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Measuring success</h2>
          </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
         <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
          
        
           <div className="relative">
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-800">38%</h3>
             <p className="text-base sm:text-lg text-gray-700">Increase in active usage of the AI Assistant after implementing the discovery framework</p>
           </div>
         </div>
      
         <div className="relative bg-white p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-gray-100 shadow-sm overflow-hidden">
           
        
           <div className="relative">
           <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-800">32%</h3>
             <p className="text-base sm:text-lg  text-gray-700">Increase in conversion rate when users interacted with all the promotions</p>
           </div>
         </div>
       </div>
     </section>
         
         <ChallengesGoalsSection />
         <section className="mb-6 md:mb-8">
          <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
          <h2 className="text-center text-base sm:text-lg md:text-2xl font-medium text-gray-800">How might we increase AI awareness without increasing notification fatigue?</h2>
          </div> 
         </section>
         {/* Solution Section */}
         <FrameworkSection />
         {/* <section className="">
          <h2 className="text-2xl text-center font-medium mt-16 text-gray-800">Framework Before</h2>

         <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%]">
          <img 
            src="FrameworkBeforeAIA.png" 
            alt="Framework Before" 
            className="w-full h-auto"
          />
        </div>
        <h2 className="text-2xl font-medium text-center text-gray-800">Framework After</h2>
        <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%]">
          <img 
            src="FrameworkAfterAIA.png" 
            alt="Framework After" 
            className="w-full h-auto"
          />
        </div>
         </section> */}

        <section className="mb-16 md:mb-32">
          <div className="mb-12 md:mb-16">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Learnings</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">What I learned</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Learning 1 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg font-semibold">1</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1.5">Discovery is a system, not a feature</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pl-14">
                Each touchpoint worked because they were designed as an interconnected system, not isolated features.
              </p>
            </div>

            {/* Learning 2 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-lg font-semibold">2</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1.5">AI needs different discovery patterns</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pl-14">
                Traditional "new feature" announcements don't work for AI. Users need to see concrete use cases and experience value immediately.
              </p>
            </div>

            {/* Learning 3 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-lg font-semibold">3</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1.5">Mobile AI requires new interaction patterns</h3>
              </div>
              <ul className="text-base text-gray-600 leading-relaxed pl-14 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Suggested prompts (tap, don't type)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Text selection as primary entry point
                </li>
              </ul>
            </div>

            {/* Learning 4 */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-lg font-semibold">4</span>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pt-1.5">Design for habit formation</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pl-14">
                We focused on discovery and activation, but the next challenge is retention—recurring prompts that turn first-time users into regular users. That's where I'd invest next.
              </p>
            </div>
          </div>

          
        </section>
         
         <section className="mb-16 md:mb-32">
          <div className="mb-8 md:mb-12">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Reflection</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">Concluding thoughts</h2>
          </div>

          <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 max-w-3xl">
            The success of this project lies in its holistic approach—promoting and integrating the AI Assistant seamlessly into the user journey.
          </p>

          {/* Key Takeaways */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-sm text-gray-600">Designed a framework that brought users to AI at the right moment</p>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Value Upfront</h4>
              <p className="text-sm text-gray-600">Users experienced AI's capabilities before committing to learn</p>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-2xl md:rounded-3xl shadow-sm">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mb-4">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">User Satisfaction</h4>
              <p className="text-sm text-gray-600">Increased both adoption and satisfaction metrics</p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            The framework not only addressed immediate challenges but also established a foundation for future feature launches—enabling the team to iterate and innovate rapidly within tight timelines.
          </p>
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
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <a 
              href="/sezzle-up"
              className="inline-block px-6 sm:px-8 py-2 rounded-full border-2 border-black text-base sm:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </div>
      </section>


       {/* Contact Section */}
       <section className="bg-gray-950 text-white py-16 sm:py-24 md:py-32">
              <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pl-0 sm:pl-6 md:pl-12 mb-4 max-w-2xl font-normal">
                  Want to chat more about this case study?
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-500 pl-0 sm:pl-6 md:pl-12 font-normal">
                  <a 
                    href="https://calendly.com/kasturi-khanke/30min?month=2024-11"
                    className="text-xl sm:text-2xl md:text-3xl transition-colors duration-300 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get in touch
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-gray-500 pl-0 sm:pl-6 md:pl-12 mt-4 md:mt-8">
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