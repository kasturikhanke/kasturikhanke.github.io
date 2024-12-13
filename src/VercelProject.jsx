// Updated VercelProject component
const VercelProject = () => {
  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="flex-1 min-h-0"> {/* This ensures iframe doesn't overflow */}
        <iframe
          src="https://tabs-kasturis-projects.vercel.app/"
          title="Vercel Project"
          className="w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
        <a
          href="https://tabs-sepia.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="float-right text-white text-xs px-3 py-1.5 rounded-full 
                   hover:text-gray-200 transition-all duration-300
                   bg-gray-800/50 backdrop-blur-sm"
        >
          View prototype
        </a>
      </div>
    </div>
  );
};

export default VercelProject;