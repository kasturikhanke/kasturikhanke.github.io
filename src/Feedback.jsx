import React from 'react';
import SpinningLogo from './SpinningLogo';
import BottomNav from './BottomNav';
import FrameworkSection from './FrameworkSection';

const Feedback = () => {
  

  const [activePage, setActivePage] = React.useState('ic');
  
  React.useEffect(() => {
    window.scrollTo(0, 0);

    // Add intersection observer for scroll animations
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
      window.location.href = '/';
      window.scrollTo(0, 0);
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
          <h1 className="text-3xl md:text-4xl font-normal mb-4 leading-tight max-w-3xl text-gray-800">
            Feedback updates
          </h1>
          <p className="text-lg md:text-xl font-normal leading mb-8 max-w-2xl text-gray-700">
            Redesigning how users can interact with the AI responses.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm text-gray-500 mb-6 md:mb-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Visual Design
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Increased usage by 4%
            </div> */}
          </div>
        </section>
        <h2 className="text-2xl font-medium md:mb-12 mb-6 text-gray-800">🚧 Under Construction</h2>

        </main>

      {/* Next Project Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-end">
            <a 
              href="/AIA"
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
          <h2 className="text-3xl md:text-6xl pl-12 mb-4 max-w-2xl font-normal">
            Want to chat more about this case study?
          </h2>
          <p className="text-5xl text-gray-500 pl-12 font-normal">
            <a 
              href="https://calendly.com/kasturi-khanke/30min?month=2024-11"
              className="text-2xl md:text-3xl transition-colors duration-300 hover:text-white"
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
        <BottomNav 
          activePage={activePage} 
          onNavClick={handleNavClick}
          isCaseStudy={true} 
        />
      </footer>
    </div>
  );
};

export default Feedback;