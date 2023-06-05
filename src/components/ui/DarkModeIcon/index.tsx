'use client';

import { useState } from 'react';
import { MoonStars, SunDim } from '@phosphor-icons/react';

const DarkModeIcon = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  return (
    <>
      {!darkMode && (
        <SunDim
          className="cursor-pointer hover:opacity-60"
          onClick={() => setDarkMode((current) => !current)}
          size={42}
          color="#cccccc"
        />
      )}
      {darkMode && (
        <MoonStars
          className="cursor-pointer hover:opacity-60"
          onClick={() => setDarkMode((current) => !current)}
          size={42}
          color="#cccccc"
        />
      )}
    </>
  );
};

export default DarkModeIcon;
