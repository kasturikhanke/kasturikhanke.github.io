import React from 'react';

const WordLink = ({ text, link }) => {
  return (
    <div className="mb-4">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block"
      >
        <div className="group relative cursor-pointer overflow-hidden text-2xl md:text-xl lg:text-xl font-normal text-black">
          <span className="inline-block transition duration-500 ease-out group-hover:-translate-y-[120%]">
            {text}
          </span>
          <span className="absolute left-0 inline-block translate-y-[200%] rotate-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
            {text}
          </span>
        </div>
      </a>
    </div>
  );
};

export default WordLink;