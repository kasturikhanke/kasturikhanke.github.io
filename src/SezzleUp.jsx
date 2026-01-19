import React, { useState, useEffect } from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import StandardNavbar from './StandardNavbar';
import { motion } from 'framer-motion';

const SezzleUp = () => {
  const [activePage, setActivePage] = React.useState('sezzle-up');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [sfTime, setSfTime] = useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when component mounts

  // Update San Francisco time
  useEffect(() => {
    const updateSfTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setSfTime(time);
    };
    updateSfTime();
    const interval = setInterval(updateSfTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation observer
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

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/?fromCaseStudy=true';
    } else {
      setActivePage(page);
    }
  };

  

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-white/20' : 'bg-white'
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-3 md:mb-4 leading-tight max-w-3xl text-gray-900 ">Sezzle Up</h1>
          <p className="text-base sm:text-lg md:text-xl font-normal mb-6 md:mb-8 max-w-2xl text-gray-600">
            First BNPL service to empower users with credit building.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm text-gray-500 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Lead UX Designer
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              June 2022 - December 2022
            </div>
          </div>
        </section>

        

        {/* Impact Section */}
        <section className="mb-12 md:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 md:mb-8 text-gray-900">📈 Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-900">70%</h3>
                <p className="text-base sm:text-lg text-gray-600">Increase in conversion rates of users connecting their bank accounts</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-900">22%</h3>
                <p className="text-base sm:text-lg text-gray-600">Increase in user satisfaction</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-900">4.8</h3>
                <p className="text-base sm:text-lg text-gray-600">App Store rating</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 md:mb-6 text-gray-900">80</h3>
                <p className="text-base sm:text-lg text-gray-600">Net Promoter Score</p>
              </div>
            </div>
          </div>
        </section>
        {/* Full bleed image */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 mb-8 md:mb-16">
          <img
            src="/SezzleUpMock0.jpg"
            alt="Sezzle Up"
            className="w-full h-auto"
          />
        </div>

        <section className="relative py-6 md:py-8">
      {/* Context Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mb-12 mb-6 md:mb-8">
        <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
          <div className="max-w-md">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">📝 Context</h2>
          </div>
        </div>
        <div className="space-y-2 md:space-y-8">
          <p className="text-base sm:text-lg text-gray-600">
            Sezzle's main mission is to financially empower the next generation. 
            Nearly 36% of Americans are not financially literate and roughly 28 million Americans have no credit score at all. 
            Sezzle Up stemmed from an idea that users who use Buy Now, Pay Later tools should be able to build credit.
          </p>
        </div>
      </div>

      {/* Goals Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mb-12 mb-6 md:mb-8">
        <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
          <div className="max-w-md">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">🎯 Goals</h2>
          </div>
        </div>
        <div className="space-y-4 md:space-y-8">
          <p className="text-base sm:text-lg text-gray-600">
            The goal was to create a user-friendly mobile app that would educate users about 
            financial literacy and help them make better financial decisions. The app needed to 
            be engaging, informative, and easy to use while handling sensitive financial information 
            securely.
          </p>
        </div>
      </div>
      {/* Solution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 md:mb-12">
        <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
          <div className="max-w-md">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-8 text-gray-900">🛠️ Solution</h2>
        </div>
      </div>
      <div className="space-y-4 md:space-y-8">
        <ol className="list-decimal pl-5 sm:pl-6 space-y-3 md:space-y-4 text-base sm:text-lg text-gray-600">
        <li>
        <a 
          href="#educational-onboarding" 
          className="hover:text-blue-600 cursor-pointer transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('educational-onboarding')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          Educational onboarding
        </a>
      </li>

      <li>
        <a 
          href="#secure-information" 
          className="hover:text-blue-600 cursor-pointer transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('secure-information')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          Secure personal information collection
        </a>
      </li>
      <li>
        <a 
          href="#link-bank" 
          className="hover:text-blue-600 cursor-pointer transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('link-bank')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          Link bank account
        </a>
      </li>
        </ol>
      </div>
    </div>
    </section>

        {/* Final Section */}
        <section className="relative py-12"> 
          <div className="space-y-24">
            {/* Solution 1 */}
            <div 
              id="educational-onboarding" 
              className="border-b border-gray-200 pb-8 md:pb-16"
              style={{ scrollMarginTop: '8vh'}}               
              >
              <h3 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">1. Educational onboarding</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
                The onboarding flow was designed to educate users on the value of Sezzle Up and how it can help them build their credit scores. It showed them clear steps on how to enroll for the program.
              </p>
              <img src="SezzleUpMock1.jpg" alt="Sezzle Up" className="w-full rounded-xl mb-6 md:mb-12" />
              
              {/* Problem-Solution Grid */}
              <div className="border-2 border-gray-100 rounded-xl p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold">
                      <span className="font-emoji text-lg sm:text-xl md:text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-base sm:text-lg md:text-xl font-medium mb-2 text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SezzleUpMock3.png" 
                      alt="Description" 
                      className="w-full rounded-lg mt-3 md:mt-8"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-4 space-y-4 md:space-y-8 mt-4 md:mt-0">
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Insight</h3>
                      <p className="text-sm sm:text-base">
                        User testing revealed that users thought the labels were clickable. In addition, Google analytics showed an uptick in rage clicks on the labels.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Solution</h3>
                      <p className="text-sm sm:text-base">
                        Since there were 3 steps involved in enrolling for Sezzle Up, I created a step-wise checklist of the three items.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Impact</h3>
                      <p className="text-sm sm:text-base">
                        Users were less frustrated resulting in a 22% increase in user satisfaction with the overall flow for joining Sezzle Up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 2 */}
            <div 
            id="secure-information" 
            className="border-b border-gray-200 pb-8 md:pb-16"
            style={{ scrollMarginTop: '8vh'}}   
            >
              <h3 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">2. Secure personal information collection </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6">
                Since users were entering their Social Security Number (SSN) into the form input fields when enrolling for Sezzle Up, handling the input in a secure manner was crucial. 
                Gaining user's trust as they filled out the necessary information to enroll into Sezzle Up was one of the most important steps. We wanted to ensure that user's felt that someone was holding their hand throughout the signing up process in order to avoid them from feeling like they couldn't trust Sezzle.
              </p>
              <img src="SezzleUpMock4.jpg" alt="Sezzle Up" className="w-full rounded-xl mb-6 md:mb-12" />
              
              {/* Problem-Solution Grid */}
              <div className="border-2 border-gray-100 rounded-xl p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold">
                      <span className="font-emoji text-lg sm:text-xl md:text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-base sm:text-lg md:text-xl font-medium mb-2 text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SUserProblem2.png" 
                      alt="Description" 
                      className="w-full rounded-lg mt-3 md:mt-8"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-4 space-y-4 md:space-y-8 mt-4 md:mt-0">
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Insight</h3>
                      <p className="text-sm sm:text-base">
                        User testing revealed that users were confused when entering their SSN. There was no way for them to see what number they entered.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Solution</h3>
                      <p className="text-sm sm:text-base">
                        Instead of entering the number twice which could lead to additional user error, I replaced the two input fields with just 1 and added a hide/show icon for the number entered.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Impact</h3>
                      <p className="text-sm sm:text-base">
                        Users were less confused and could now verify what information they entered without too many steps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution 3 */}
            <div 
            id="link-bank" 
            className="border-b border-gray-200 pb-8 md:pb-16"
            style={{ scrollMarginTop: '8vh'}}   
            >
              <h3 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">3. Link bank account</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-8">
                Users needed to see all available banking options.
              </p>
              
              {/* Problem-Solution Grid */}
              <div className="border-2 border-gray-100 rounded-xl p-4 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                  <div className="col-span-1 md:col-span-8">
                    <h4 className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold">
                      <span className="font-emoji text-lg sm:text-xl md:text-2xl font-medium mb-2">⚠️</span>
                      <span className="text-base sm:text-lg md:text-xl font-medium mb-2 text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SezzleUpMock5.png" 
                      alt="Description" 
                      className="w-full rounded-lg mt-3 md:mt-8"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-4 space-y-4 md:space-y-8 mt-4 md:mt-0">
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Insight</h3>
                      <p className="text-sm sm:text-base">
                        Users were not comfortable with sharing bank account details prior to Sezzle Up.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Solution</h3>
                      <p className="text-sm sm:text-base">
                        Break down the bank connecting mechanism to make it easier for users to connect their preferred banking system.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-sm sm:text-base text-gray-900">Impact</h3>
                      <p className="text-sm sm:text-base">
                        This resulted in a 70% increase in users connecting their bank accounts with Sezzle which meant a decrease in processing fees for the company.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IA */}
        <section className="mb-12 md:mb-16 mt-8 md:mt-12">
          <h2 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">Mapping out the User Flow</h2>
          <img src="IA.png" alt="User Flow" className="w-full rounded-lg" />
        </section>


        {/* Success Metrics */}
        <section className="mb-6 md:mb-8 mt-2">
        <h2 className="text-xl sm:text-2xl font-medium mb-4 md:mb-2 text-gray-900">Results of key metrics </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-7xl mx-auto py-8 md:py-12">
      {/* NPS Score Column */}
      
      <div className="flex flex-col">
        <div className="min-h-[60px] md:h-20"> {/* Fixed height container for headings */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">NPS score of 80</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-base sm:text-lg text-gray-600">
            10 point increase in NPS score indicating higher user satisfaction
          </p>
        </div>
      </div>

      {/* Reduced Costs Column */}
      <div className="flex flex-col">
        <div className="min-h-[60px] md:h-20"> {/* Fixed height container for headings */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Reduced costs & risks</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-base sm:text-lg text-gray-600">
            70% users switched to direct bank account payments as opposed to credit card payments that cost more
          </p>
        </div>
      </div>

      {/* Revenue Column */}
      <div className="flex flex-col">
        <div className="min-h-[60px] md:h-20"> {/* Fixed height container for headings */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Increase in revenue</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-base sm:text-lg text-gray-600">
            Increase in customer base due to partnership with Target
          </p>
        </div>
      </div>
    </div>
    </section>

        {/* User Testimonials */}
        <section className="mb-12 md:mb-16 mt-8 md:mt-12">
          <h2 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">User testimonials</h2>
          <img src="SezzleUpMock2.jpg" alt="User Testimonials" className="w-full rounded-lg" />
        </section>

        {/* Impact & Learnings */}
        <section className="mb-16 md:mb-32">
          <h2 className="text-xl sm:text-2xl font-medium mb-4 md:mb-8 text-gray-900">Impact & Learnings</h2>
          <div className="space-y-4 md:space-y-8">
            <p className="text-base sm:text-lg text-gray-600">
              By combining a user-centered design approach with robust security measures and educational content, Sezzle Up successfully 
              addressed a pressing user need while enhancing Sezzle's brand trust and engagement. The app not only helped users make sound 
              financial decisions but also empowered them with tools to build credit responsibly.
            </p>
            
            <div className="space-y-6">


              <div className=" p-6 rounded-xl">
                <ul className="space-y-3 text-gray-600">
                  <li>• Security and trust are paramount when handling sensitive financial information</li>
                  <li>• Educational content needs to be both informative and engaging</li>
                  <li>• Step-by-step guidance significantly improves user confidence</li>
                  <li>• Clear value proposition leads to higher user adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Next Project Section */}
        <section className="py-12 md:py-24">
          <div className="flex justify-end">
            <a 
              href="/aia"
              className="inline-block px-6 sm:px-8 py-2 rounded-full border-2 border-black text-base sm:text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white pt-16 sm:pt-24 md:pt-32 pb-0 overflow-hidden">
        {/* Top Content Area */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            
            {/* About Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">about</p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Kasturi is a product designer<br />
                crafting AI-powered experiences<br />
                that drive measurable impact<br />
                and delight users.
              </p>
            </div>

            {/* Contact Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-100">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">contact</p>
              <a 
                href="mailto:kasturi.khanke@gmail.com"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
              >
                kasturi.khanke@gmail.com
              </a>
            </div>

            {/* Social Column */}
            <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out delay-200">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">social</p>
              <a 
                href="https://www.linkedin.com/in/kasturikhanke/"
                className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Large Name - Full Width, Clipped at Bottom */}
        {/* Copyright Bar - Above Name */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-6xl mt-16 sm:mt-24 md:mt-32">
          <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
            <p className="text-sm text-gray-400">
              © 2026 Kasturi Khanke
            </p>
            <p className="text-sm text-gray-400">
              San Francisco, CA · {sfTime}
            </p>
            <p className="text-sm text-gray-400">
              Made with ♥ using Claude + Cursor
            </p>
          </div>
        </div>

        {/* Large Name - Full Width, Clipped at Bottom */}
        <div className="scroll-reveal opacity-0 translate-y-10 transform transition-all duration-700 ease-out overflow-hidden">
          <h3 
            className="text-[15vw] sm:text-[14vw] md:text-[12vw] font-bold tracking-tighter leading-none whitespace-nowrap text-center select-none translate-y-[25%]"
            style={{ color: 'white' }}
          >
            KASTURI KHANKE
          </h3>
        </div>
      </section>
      <footer className="w-full bg-gray-950">
        <BottomNav activePage={activePage} onNavClick={handleNavClick}
        isCaseStudy={true} />
      </footer>
     </div>
  );
};

export default SezzleUp;