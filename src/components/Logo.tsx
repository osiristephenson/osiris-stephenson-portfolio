import React from 'react';
import { useDarkMode } from './DarkModeProvider';

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "w-full h-full object-contain", alt = "Osiris Stephenson Logo" }: LogoProps) {
  const { isDarkMode } = useDarkMode();
  
  return (
    <img 
      src={isDarkMode ? "/inverselogo.png" : "/mainlogo.png"}
      alt={alt}
      className={className}
      onError={(e) => {
        console.error('Logo failed to load:', e);
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}