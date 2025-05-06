import React, { useState, useEffect } from 'react';

const SpinningLogo = ({ onLogoClick }) => {
  const [isInitialSpin, setIsInitialSpin] = useState(true);

  useEffect(() => {
    setIsInitialSpin(true);
    const timer = setTimeout(() => {
      setIsInitialSpin(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.location.href = 'https://kasturi.live';
    }
  };

  return (
    <div className="p-4">
      <img
        src="/LogoK.png"
        alt="Logo K"
        onClick={handleClick}
        className={`w-8 aspect-square object-contain cursor-pointer ${
          isInitialSpin ? 'animate-spin-three-times' : 'hover:animate-spin-three-times'
        }`}
      />
    </div>
  );
};

export default SpinningLogo;