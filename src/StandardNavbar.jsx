import React from 'react';

const StandardNavbar = () => {
  // External links only
  const externalLinks = [
    { label: 'Resume', url: 'https://drive.google.com/file/d/1dAJ-4VSPawBBLOyyQcjp6Am6y79rM9E9/view?usp=sharing' },
    { label: 'Blog', url: 'https://beyondthefold.substack.com/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kasturikhanke/' }
  ];

  return (
    <nav className="w-full py-4 px-4 md:px-6 flex justify-between items-center">
      {/* Internal links */}
      <div className="flex items-center">
        <a href="/about" className="text-sm font-medium text-stone-800 hover:text-indigo-500 transition-colors duration-200">
          About Me
        </a>
      </div>

      {/* External links */}
      <div className="flex items-center space-x-6">
        {externalLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-800 hover:text-indigo-500 transition-colors duration-200"
            >
              {link.label}
            </a>
            {index < externalLinks.length - 1 && (
              <span className="text-gray-300">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Mobile menu button (simplified, only shows external links) */}
      <button className="md:hidden text-stone-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default StandardNavbar;