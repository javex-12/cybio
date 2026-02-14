import React, { useState } from 'react';
import { 
  Zap, 
  Play, 
  BookOpen, 
  GraduationCap
} from 'lucide-react';
import { syllabus } from '../data/syllabus';

interface CBTHubProps {
  onStartQuiz: (config: QuizConfig) => void;
}

export interface QuizConfig {
  type: 'global' | 'level' | 'theme' | 'chapter';
  targetId?: string;
  limit: number;
  timeLimit: number;
}

const CBTHub: React.FC<CBTHubProps> = ({ onStartQuiz }) => {
  const [config, setConfig] = useState<QuizConfig>({
    type: 'global',
    limit: 20,
    timeLimit: 15
  });

  const levels = ['SS1', 'SS2', 'SS3'] as const;

  return (
    <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto pb-32 animate-in fade-in duration-500">
      
      <div className="space-y-1">
        <h1 className="text-2xl font-black text-white tracking-tight uppercase italic">Examination Suite</h1>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Launch Atomic Mock Simulations</p>
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-6 md:p-10 border border-slate-800 shadow-2xl space-y-10">
        
        {/* Target Selection */}
        <div className="space-y-4">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 italic">1. Select Target Domain</label>
          <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
            <button 
              onClick={() => setConfig({ ...config, type: 'global', targetId: undefined })}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${config.type === 'global' ? 'border-blue-600 bg-blue-900/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-slate-800 text-slate-400 bg-slate-950/50'}`}
            >
              <div className="flex items-center gap-4">
                <Zap size={20} className={config.type === 'global' ? 'text-blue-400' : 'text-slate-600'} />
                <span className="text-xs font-black uppercase italic tracking-widest">Global Mock (Full Syllabus)</span>
              </div>
            </button>
            
            {levels.map(level => (
              <button 
                key={level}
                onClick={() => setConfig({ ...config, type: 'level', targetId: level })}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${config.type === 'level' && config.targetId === level ? 'border-blue-600 bg-blue-900/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-slate-800 text-slate-400 bg-slate-950/50'}`}
              >
                <div className="flex items-center gap-4">
                  <GraduationCap size={20} className={config.type === 'level' && config.targetId === level ? 'text-blue-400' : 'text-slate-600'} />
                  <span className="text-xs font-black uppercase italic tracking-widest">{level} Comprehensive Final</span>
                </div>
              </button>
            ))}

            {syllabus.map(theme => (
              <button 
                key={theme.id}
                onClick={() => setConfig({ ...config, type: 'theme', targetId: theme.id })}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${config.type === 'theme' && config.targetId === theme.id ? 'border-blue-600 bg-blue-900/20 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'border-slate-800 text-slate-400 bg-slate-950/50'}`}
              >
                <div className="flex items-center gap-4">
                  <BookOpen size={18} className={config.type === 'theme' && config.targetId === theme.id ? 'text-blue-400' : 'text-slate-600'} />
                  <span className="text-[10px] font-black uppercase italic tracking-tight truncate max-w-[200px]">{theme.title}</span>
                </div>
                <span className="text-[8px] font-black opacity-40 px-2 py-1 bg-slate-800 rounded-lg">{theme.level}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Configuration Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 italic">2. Question Quantum</label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 20, 40, 60].map(val => (
                <button key={val} onClick={() => setConfig({ ...config, limit: val })} className={`py-3 rounded-xl text-[10px] font-black transition-all active:scale-90 ${config.limit === val ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500'}`}>{val}</button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 italic">3. Temporal Limit</label>
            <div className="grid grid-cols-4 gap-2">
              {[15, 30, 45, 60].map(val => (
                <button key={val} onClick={() => setConfig({ ...config, timeLimit: val })} className={`py-3 rounded-xl text-[10px] font-black transition-all active:scale-90 ${config.timeLimit === val ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-800 text-slate-500'}`}>{val}m</button>
              ))}
            </div>
          </div>
        </div>

        <button 
          onClick={() => onStartQuiz(config)}
          className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xl italic uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-4 active:scale-95 group"
        >
          <Play size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
          Initiate Session
        </button>
      </div>
    </div>
  );
};

export default CBTHub;