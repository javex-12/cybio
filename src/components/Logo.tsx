import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <div 
      className={`shrink-0 flex items-center justify-center relative ${className}`}
      style={{ 
        width: size, 
        height: size, 
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Background stylized shape */}
        <path
          d="M50 5C22.4 5 0 27.4 0 55C0 82.6 22.4 95 50 95C77.6 95 100 82.6 100 55C100 27.4 77.6 5 50 5Z"
          fill="url(#logo-gradient)"
        />
        
        {/* The "Life" Leaf element */}
        <path
          d="M50 25C35 25 25 40 25 55C25 70 35 75 50 75C65 75 75 70 75 55C75 40 65 25 50 25ZM50 65C42 65 35 60 35 55C35 50 42 45 50 45C58 45 65 50 65 55C65 60 58 65 50 65Z"
          fill="white"
          fillOpacity="0.9"
        />
        
        {/* Neural/Tech nodes */}
        <circle cx="50" cy="55" r="6" fill="white" />
        <path d="M50 35V45M50 65V75M35 55H25M65 55H75" stroke="white" strokeWidth="4" strokeLinecap="round"/>

        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4F46E5" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-white/10 rounded-full pointer-events-none shadow-inner" />
    </div>
  );
};

export default Logo;
