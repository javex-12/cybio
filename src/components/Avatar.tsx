import React from 'react';

interface AvatarProps {
  src?: string | null;
  name?: string | null;
  size?: number;
  className?: string;
}

const COLORS = [
  'bg-blue-500', 'bg-indigo-500', 'bg-emerald-500', 
  'bg-rose-500', 'bg-amber-500', 'bg-purple-500'
];

const Avatar: React.FC<AvatarProps> = ({ src, name, size = 40, className = '' }) => {
  // Use name to pick a consistent color from the array
  const colorIndex = name ? name.length % COLORS.length : 0;
  const colorClass = COLORS[colorIndex];
  const initial = name ? name.charAt(0).toUpperCase() : 'G';

  return (
    <div 
      className={`rounded-xl overflow-hidden shrink-0 flex items-center justify-center text-white font-bold border border-white/10 shadow-sm ${colorClass} ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.4 }}
    >
      {src ? (
        <img 
          src={src} 
          alt={name || 'Avatar'} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // If image fails (offline), hide it to show initials
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : (
        <span>{initial}</span>
      )}
    </div>
  );
};

export default Avatar;
