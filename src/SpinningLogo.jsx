import React, { useState, useEffect } from 'react';

const SpinningLogo = () => {
  const [isInitialSpin, setIsInitialSpin] = useState(true);

  useEffect(() => {
    setIsInitialSpin(true);
    const timer = setTimeout(() => {
      setIsInitialSpin(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.location.href = 'https://kasturi.live';
  };

  return (
    <div className="p-8 pl-32">
      <img
        src="/LogoK.png"
        alt="Logo K"
        onClick={handleClick}
        className={`w-12 h-12 cursor-pointer ${
          isInitialSpin ? 'animate-spin-three-times' : 'hover:animate-spin-three-times'
        }`}
      />
    </div>
  );
};

export default SpinningLogo;