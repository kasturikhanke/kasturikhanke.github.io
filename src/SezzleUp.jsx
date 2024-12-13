import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';

const SezzleUp = () => {
  const [activePage, setActivePage] = React.useState('sezzle-up');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means this runs once when component mounts



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
          <h1 className="text-4xl font-normal mb-4 leading-tight max-w-3xl text-gray-800">Sezzle Up</h1>
          <p className="text-xl font-normal mb-8 max-w-2xl text-gray-700">
            First BNPL service to empower users with credit building.
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-500 mb-8">
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
        <section className="mb-24">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">📈 Impact</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">70%</h3>
                <p className="text-lg text-gray-700">Increase in conversion rates of users connecting their bank accounts</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">22%</h3>
                <p className="text-lg text-gray-700">Increase in user satisfaction</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">4.8</h3>
                <p className="text-lg text-gray-700">App Store rating</p>
              </div>
            </div>
            <div className="relative bg-white border-2 border-gray-100 p-12 rounded-3xl shadow-sm overflow-hidden">
              <div className="relative">
                <h3 className="text-4xl font-semibold mb-6 text-gray-800">80</h3>
                <p className="text-lg text-gray-700">Net Promoter Score</p>
              </div>
            </div>
          </div>
        </section>
        {/* Full bleed image */}
        <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16">
          <img 
            src="SezzleUpMock0.jpg" 
            alt="Sezzle Up" 
            className="w-full h-auto"
          />
        </div>

        <section className="relative py-8">
      {/* Context Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
          <div className="max-w-md">
            <h2 className="text-2xl font-medium mb-12 text-gray-800">📝 Context</h2>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Sezzle's main mission is to financially empower the next generation. 
            Nearly 36% of Americans are not financially literate and roughly 28 million Americans have no credit score at all. 
            Sezzle Up stemmed from an idea that users who use Buy Now, Pay Later tools should be able to build credit.
          </p>
        </div>
      </div>

      {/* Goals Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
          <div className="max-w-md">
            <h2 className="text-2xl font-medium mb-12 text-gray-800">🎯 Goals</h2>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            The goal was to create a user-friendly mobile app that would educate users about 
            financial literacy and help them make better financial decisions. The app needed to 
            be engaging, informative, and easy to use while handling sensitive financial information 
            securely.
          </p>
        </div>
      </div>
      {/* Solution Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="lg:sticky lg:top-24" style={{ height: 'min-content' }}>
        <div className="max-w-md">
          <h2 className="text-2xl font-medium mb-12 text-gray-800">🛠️ Solution</h2>
        </div>
      </div>
      <div className="space-y-8">
        <ol className="list-decimal pl-6 space-y-4 text-lg text-gray-700">
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
              className="border-b border-gray-200 pb-16"
              style={{ scrollMarginTop: '8vh'}}               
              >
              <h3 className="text-2xl font-medium mb-8 text-gray-800">1. Educational onboarding</h3>
              <p className="text-lg text-gray-700">
                The onboarding flow was designed to educate users on the value of Sezzle Up and how it can help them build their credit scores. It showed them clear steps on how to enroll for the program.
              </p>
              <img src="SezzleUpMock1.jpg" alt="Sezzle Up" className="w-full rounded-xl mb-12" />
              
              {/* Problem-Solution Grid */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-6">
                      <span className="font-emoji text-2xl leading-none">⚠️</span>
                      <span className="text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SezzleUpMock3.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="col-span-4 space-y-8">
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Insight</h3>
                      <p className="">
                        Users thought the labels were clickable. Google analytics showed an uptick in rage clicks on the labels.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Solution</h3>
                      <p className="">
                        Since there were 3 steps involved in enrolling for Sezzle Up, I created a step-wise checklist of the three items.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Impact</h3>
                      <p className="">
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
            className="border-b border-gray-200 pb-16"
            style={{ scrollMarginTop: '8vh'}}   
            >
              <h3 className="text-2xl font-medium mb-8 text-gray-800">2. Secure personal information collection </h3>
              <p className="text-lg text-gray-700">
                Since users were entering their Social Security Number (SSN) into the form input fields when enrolling for Sezzle Up, handling the input in a secure manner was crucial. 
                Gaining user's trust as they filled out the necessary information to enroll into Sezzle Up was one of the most important steps. We wanted to ensure that user's felt that someone was holding their hand throughout the signing up process in order to avoid them from feeling like they couldn't trust Sezzle.
              </p>
              <img src="SezzleUpMock4.jpg" alt="Sezzle Up" className="w-full rounded-xl mb-12" />
              
              {/* Problem-Solution Grid */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-6">
                      <span className="font-emoji text-2xl leading-none">⚠️</span>
                      <span className="text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SUserProblem2.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="col-span-4 space-y-8">
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Insight</h3>
                      <p className="text-">
                        User testing revealed that users were confused when entering their SSN. There was no way for them to see what number they entered.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Solution</h3>
                      <p className="text-">
                        Instead of entering the number twice which could lead to additional user error, I replaced the two input fields with just 1 and added a hide/show icon for the number entered.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Impact</h3>
                      <p className="text-">
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
            className="border-b border-gray-200 pb-16"
            style={{ scrollMarginTop: '8vh'}}   
            >
              <h3 className="text-2xl font-medium mb-8 text-gray-800">3. Link bank account</h3>
              <p className="text-lg text-gray-700 mb-8">
                Users needed to see all available banking options.
              </p>
              
              {/* Problem-Solution Grid */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-12 gap-8 items-start">
                  <div className="col-span-8">
                    <h4 className="flex items-center gap-2 text-xl font-bold mb-6">
                      <span className="font-emoji text-2xl leading-none">⚠️</span>
                      <span className="text-gray-900">User Problem</span>
                    </h4>
                    <img 
                      src="SezzleUpMock5.png" 
                      alt="Description" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="col-span-4 space-y-8">
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Insight</h3>
                      <p className="text-">
                        Users were not comfortable with sharing bank account details prior to Sezzle Up.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Solution</h3>
                      <p className="">
                        Break down the bank connecting mechanism to make it easier for users to connect their preferred banking system.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2 text-gray-900">Impact</h3>
                      <p className="">
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
        <section className="mb-16 mt-12">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">Mapping out the User Flow</h2>
          <img src="IA.png" alt="User Flow" className="w-full rounded-lg" />
        </section>


        {/* Success Metrics */}
        <section className="mb-8 mt-2">
        <h2 className="text-2xl font-medium mb-2 text-gray-800">Results of key metrics </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto py-12">
      {/* NPS Score Column */}
      
      <div className="flex flex-col">
        <div className="h-20"> {/* Fixed height container for headings */}
          <h3 className="text-2xl font-bold text-gray-800">NPS score of 80</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-gray-700">
            10 point increase in NPS score indicating higher user satisfaction
          </p>
        </div>
      </div>

      {/* Reduced Costs Column */}
      <div className="flex flex-col">
        <div className="h-20"> {/* Fixed height container for headings */}
          <h3 className="text-2xl font-bold text-gray-800">Reduced costs & risks</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-gray-700">
            70% users switched to direct bank account payments as opposed to credit card payments that cost more
          </p>
        </div>
      </div>

      {/* Revenue Column */}
      <div className="flex flex-col">
        <div className="h-20"> {/* Fixed height container for headings */}
          <h3 className="text-2xl font-bold text-gray-800">Increase in revenue</h3>
        </div>
        <div className="flex-1"> {/* Container for paragraph */}
          <p className="text-gray-700">
            Increase in customer base due to partnership with Target
          </p>
        </div>
      </div>
    </div>
    </section>

        {/* User Testimonials */}
        <section className="mb-16 mt-12">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">User testimonials</h2>
          <img src="SezzleUpMock2.jpg" alt="User Testimonials" className="w-full rounded-lg" />
        </section>

        {/* Impact & Learnings */}
        <section className="mb-32">
          <h2 className="text-2xl font-medium mb-8 text-gray-800">Impact & Learnings</h2>
          <div className="space-y-8">
            <p className="text-lg text-gray-700">
              By combining a user-centered design approach with robust security measures and educational content, Sezzle Up successfully 
              addressed a pressing user need while enhancing Sezzle's brand trust and engagement. The app not only helped users make sound 
              financial decisions but also empowered them with tools to build credit responsibly.
            </p>
            
            <div className="space-y-6">


              <div className=" p-6 rounded-xl">
                <ul className="space-y-3 text-gray-700">
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
        <section className="py-24">
          <div className="flex justify-end">
            <a 
              href="/aia"
              className="inline-block px-8 py-2 rounded-full border-2 border-black text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Next Project →
            </a>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section className="bg-gray-950 text-white py-32">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl pl-12 mb-4 max-w-2xl font-normal">
            Want to chat more about this case study?
          </h2>
          <p className="text-5xl text-gray-500 pl-12 font-normal">
            <a 
              href="https://calendly.com/your-calendar-link"
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

export default SezzleUp;