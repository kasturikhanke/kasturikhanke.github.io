import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';

const SezzleUp = () => {
  const [activePage, setActivePage] = React.useState('sezzle-up');

  const handleNavClick = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else {
      setActivePage(page);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-950 font-sans">
      <header className="w-full bg-transparent">
        <SpinningLogo />
      </header>
      
      

      <main className="container mx-auto px-4 max-w-4xl">
        <section className="mb-8 pt-16">
          <h1 className="text-6xl font-semibold mb-4">Sezzle Up</h1>
          <p className="text-xl font-regular mb-8">First BNPL service to empower users with credit building.</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">My Role</h2>
              <p className="text-xl">Lead UX Designer</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Timeline</h2>
              <p className="text-xl">June 2022 - December 2022</p>
            </div>
          </div>
        </section>

        {/* Add the full bleed image here, outside the container */}
      <div className="relative w-screen -mx-[50vw] left-[50%] right-[50%] mb-16">
        <img 
          src="SezzleUpMock0.jpg" 
          alt="Sezzle Up" 
          className="w-full h-auto"
        />
      </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Outcomes</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">70%</h3>
              <p className="text-xl">Increase in conversion rates of users connecting their bank accounts</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">22%</h3>
              <p className="text-xl">Increase in user satisfaction</p>
            </div>
          
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">4.8</h3>
              <p className="text-xl">App Store rating</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">80</h3>
              <p className="text-xl">Net Promoter Score</p>
            </div>
          </div>
        </section>

        
        

        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Problem Overview</h2>
          <p className="text-xl leading-relaxed">
            Sezzle's main mission is to financially empower the next generation. 
            Nearly 36% of Americans are not financially literate and roughly 28 million Americans have no credit score at all. 
            Sezzle Up stemmed from an idea that users who use Buy Now, Pay Later tools should be able to build credit.<br></br><br></br>

            The goal was to create a user-friendly mobile app that would educate users about 
            financial literacy and help them make better financial decisions. The app needed to 
            be engaging, informative, and easy to use while handling sensitive financial information 
            securely.
          </p>
        </section>


        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Solution</h2>
          <p className="text-xl  mb-16 max-w-3xl">
            Designing Sezzle Up involved creating a highly engaging, secure, and user-friendly interface that translated financial concepts into everyday language. 
            Here's how I achieved it:
          </p>

          <div className="space-y-24">
            {/* Solution 1 */}
            <div className="border-b border-gray-200 pb-16">
              <h3 className="text-3xl font-bold mb-6">1. Educational Onboarding</h3>
              <p className="text-xl  mb-12 max-w-3xl">
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
            <div className="border-b border-gray-200 pb-16">
              <h3 className="text-3xl font-bold mb-6">2. Secure Credit Building Input</h3>
              <p className="text-xl  mb-12 max-w-3xl">
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
            <div className="border-b border-gray-200 pb-16">
              <h3 className="text-3xl font-bold mb-6">3. Linking Bank Account</h3>
              <p className="text-xl text- mb-12 max-w-3xl">
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

        <section className="mb-16">
      <h2 className="text-3xl font-bold mb-2">Defining success</h2>
      <p className=" mb-8">
        It's deeply important to clearly define success so that we have a bar to measure against that the entire team is aligned on. This can be used as a gut check in discussions, for iterations, and ultimately for tracking impact post-launch.
      </p>

      <div className="space-y-6">
        {/* NPS Score */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 border border-gray-200 p-5 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Wanted</h3>
            <p className="text-2xl ">NPS Score greater than 70</p>
          </div>
          
          <div className="col-span-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Achieved</h3>
            <h4 className="text-2xl font-bold text-gray-900">NPS Score of 80</h4>
            <p className=" mt-1">Indicating high user satisfaction</p>
          </div>
        </div>

        {/* Revenue/Conversion */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 border border-gray-200 p-5 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Wanted</h3>
            <p className="text-2xl ">Reduced costs and risks</p>
          </div>
          
          <div className="col-span-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Achieved</h3>
            <h4 className="text-2xl font-bold text-gray-900">70% users converting to bank accounts</h4>
            <p className=" mt-1">Reducing costly card transaction payments for the company</p>
          </div>
        </div>

        {/* Strategic Partnership */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 border border-gray-200 p-5 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Wanted</h3>
            <p className="text-2xl ">Increase in revenue generated</p>
          </div>
          
          <div className="col-span-8 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Achieved</h3>
            <h4 className="text-2xl font-bold text-gray-900">Partnership with Target</h4>
            <p className=" mt-1">Increase in customer base</p>
          </div>
        </div>
      </div>
    </section>
        
        
        
        <h2 className="text-3xl font-bold mb-2">User testimonials</h2>
        <img src="SezzleUpMock2.jpg" alt="Sezzle Up" className="w-full rounded-lg mb-8" />

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Impact & Learnings</h2>
          <p className="text-xl leading-relaxed">
          By combining a user-centered design approach with robust security measures and educational content, Sezzle Up successfully 
          addressed a pressing user need while enhancing Sezzle's brand trust and engagement. The app not only helped users make sound 
          financial decisions but also empowered them with tools to build credit responsibly.


          </p>
        </section>

        <section className="mb-32">
          <a 
            href="/aia" 
            className="block group hover:opacity-90 transition-opacity"
          >
            
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-between">
              <div>
              <span className="text-sm text-gray-500">Next Project</span>
              <span className="text-sm text-gray-500">→</span>
                <h3 className="text-2xl font-bold mb-2 mt-4">Acrobat AI Assistant</h3>
                <p className="text-gray-600">Designing Acrobat's AI Assistant</p>
              </div>
              <img 
                src="AIA.jpg" 
                alt="AI Assistant Preview" 
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>
          </a>
        </section>

        <section className="mb-16 mt-32 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8">Want to learn more?</h2>
          <div className="space-y-8">
            <div>
              <p className="text-xl mb-8">
                Get in touch to learn more about the research, design process, and detailed outcomes of this project.
              </p>
              <div className="flex gap-4">
                <button className="bg-slate-950 text-white px-8 py-3 rounded-lg text-lg">
                  Email me
                </button>
                <button className="border-2 border-slate-800 text-slate-600 px-8 py-3 rounded-lg text-lg">
                  Schedule a call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-transparent">
        <BottomNav activePage={activePage} onNavClick={handleNavClick} />
      </footer>
    </div>
  );
};

export default SezzleUp;