import React from 'react';

const VercelProject = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl relative">
      <iframe
        src="https://tabs-kasturis-projects.vercel.app/"
        title="Vercel Project"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <a
        href="https://tabs-sepia.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 text-white text-xs px-2 py-1 rounded-full hover:text-gray-400 transition-all duration-300"
      >
        View prototype
      </a>
    </div>
  );
};

export default VercelProject;