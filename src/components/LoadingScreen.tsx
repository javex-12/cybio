import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const LoadingScreen: React.FC = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setPct(p => (p < 100 ? p + 4 : 100)), 30);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-app)]">
      <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center gap-6">
        <Logo size={64} />
        
        <div className="w-48 h-1 bg-[var(--border-base)] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[var(--brand)] transition-all duration-100 ease-out" 
            style={{ width: `${pct}%` }} 
          />
        </div>
        <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.3em]">Initializing</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
