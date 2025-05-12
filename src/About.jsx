import React from 'react';
import StandardNavbar from './StandardNavbar';
import SpinningLogo from './SpinningLogo';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-stone-800 font-sans">
      <header className="sticky top-0 bg-white z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-4 flex justify-between items-center">
          <SpinningLogo />
          <StandardNavbar activePage="about" />
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="prose prose-lg">
            <p className="mb-4">
              I'm a product designer focused on AI, interaction, and UX systems—currently shaping intelligent experiences for PDFs and documents at Adobe within the Acrobat AI incubation team. Previously at Sezzle, where I helped scale a fintech platform from startup to $1.35B through conversion-focused design.
            </p>
            <p className="mb-4">
              I thrive in 0–1 spaces—shipping fast, iterating based on feedback, and bringing products to life with clarity and minimal direction.
            </p>
            <p className="mb-4">
              I believe the best design quietly empowers—solving the right problems, reducing friction, and building trust through every interaction.
            </p>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Let's work together</h2>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="px-4 py-2 border border-stone-800 rounded-full hover:bg-stone-800 hover:text-white transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About; 