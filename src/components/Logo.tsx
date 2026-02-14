import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Hexagon Background */}
        <path
          d="M50 5L93.3013 30V80L50 105L6.69873 80V30L50 5Z"
          className="fill-blue-600 dark:fill-blue-500"
        />
        {/* Abstract "B" or DNA Strand */}
        <path
          d="M35 25C35 25 65 30 65 50C65 70 35 75 35 75"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="35" cy="25" r="6" fill="white" />
        <circle cx="35" cy="50" r="6" fill="white" />
        <circle cx="35" cy="75" r="6" fill="white" />
        <path
          d="M65 35C65 35 45 40 45 50C45 60 65 65 65 65"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      {/* Decorative pulse element */}
      <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-20 animate-pulse -z-10 blur-md"></div>
    </div>
  );
};

export default Logo;
