import React from 'react';

const VercelProjectPlay = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-3xl">
      <iframe
        src="https://play-kasturis-projects.vercel.app/"
        title="Vercel Project Play"
        className="w-full h-full border-none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <a
      href="https://play-lemon-rho.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 right-4 text-white text-xs px-2 py-1 rounded-full hover:text-gray-400 transition-all duration-300"
    >
      View prototype
    </a>
    </div>
  );
};

export default VercelProjectPlay;