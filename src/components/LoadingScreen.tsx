import React, { useEffect, useState } from 'react';
import { Brain, Activity } from 'lucide-react';

import Logo from './Logo';

const LoadingScreen: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      {/* High-End Background: Animated Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Modern Logo */}
      <div className="relative z-10 mb-12">
        <Logo size={80} />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
            Biobite <span className="text-blue-500 not-italic">PRO</span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-slate-700"></div>
            <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.6em] italic">
              Quantum Biological Intelligence
            </p>
            <div className="h-[1px] w-8 bg-slate-700"></div>
          </div>
        </div>

        {/* Professional Progress Indicator */}
        <div className="max-w-[280px] mx-auto w-full space-y-4">
          <div className="flex justify-between items-end">
            <div className="text-left">
              <p className="text-slate-500 font-bold text-[8px] uppercase tracking-widest mb-1 italic">Initializing Lab Modules</p>
              <div className="flex items-center gap-2">
                <Activity size={12} className="text-emerald-500 animate-pulse" />
                <span className="text-white font-black text-[10px] uppercase tracking-tighter">Core System Synchronized</span>
              </div>
            </div>
            <span className="text-blue-500 font-mono font-black text-xl italic">{percent}%</span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 ease-out"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
          <Brain size={20} className="text-slate-400" />
        </div>
        <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.5em]">
          Secondary Education Suite • Edition 2026
        </p>
      </div>

      <style>{`
        @keyframes dna-bounce {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(1.8); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;