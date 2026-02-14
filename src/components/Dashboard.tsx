import React from 'react';
import { 
  Zap, 
  ChevronRight, 
  Clock,
  Activity
} from 'lucide-react';
import Logo from './Logo';
import { syllabus } from '../data/syllabus';

interface DashboardProps {
  onStartLearning: () => void;
  onStartExam: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartLearning, onStartExam }) => {
  const levels = ['SS1', 'SS2', 'SS3'] as const;
  
  const getStats = (level: string) => {
    const levelThemes = syllabus.filter(t => t.level === level);
    const chapters = levelThemes.reduce((acc, t) => acc + t.chapters.length, 0);
    return { chapters };
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 pb-32 no-scrollbar scroll-touch">
      
      {/* App Top Bar */}
      <div className="sticky top-0 z-30 px-6 py-6 flex items-center justify-between bg-slate-950/80 backdrop-blur-lg border-b border-slate-900">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <div>
            <h2 className="text-xl font-black text-white leading-none tracking-tight uppercase italic">Biobite</h2>
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mt-1 italic">Scholar Edition</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-slate-800 rounded-xl border-2 border-slate-700 shadow-sm overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8 max-w-lg mx-auto">
        
        {/* Main Action Bar */}
        <div className="grid grid-cols-1 gap-4">
          <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/20 space-y-6 flex flex-col justify-between relative overflow-hidden group active:scale-[0.98] transition-all">
            <div className="relative z-10 space-y-2">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter">Continue Learning</h2>
              <p className="text-sm text-blue-100 opacity-80 leading-relaxed italic">Resume your progress in the scientific modules.</p>
            </div>
            <button 
              onClick={onStartLearning}
              className="relative z-10 w-fit px-8 py-3 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg"
            >
              Open Lab
            </button>
            <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Logo size={200} />
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-xl border border-slate-800 space-y-6 flex flex-col justify-between relative overflow-hidden group active:scale-[0.98] transition-all">
            <div className="relative z-10 space-y-2">
              <h2 className="text-2xl font-black uppercase italic text-blue-400 tracking-tighter">Mock Simulation</h2>
              <p className="text-sm text-slate-400 leading-relaxed italic">Test your knowledge against national standards.</p>
            </div>
            <button 
              onClick={onStartExam}
              className="relative z-10 w-fit px-8 py-3 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-500/20"
            >
              Launch Exam
            </button>
            <div className="absolute right-[-10%] bottom-[-10%] opacity-5 group-hover:rotate-12 transition-transform duration-700">
              <Zap size={200} />
            </div>
          </div>
        </div>

        {/* Pathways */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-2 italic">Curriculum Pathways</h3>
          <div className="space-y-3">
            {levels.map(level => {
              const stats = getStats(level);
              return (
                <div key={level} className="p-5 bg-slate-900 rounded-3xl border border-slate-800 shadow-sm flex items-center justify-between active:scale-[0.98] transition-all cursor-pointer group hover:border-blue-500/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center font-black text-xs italic text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">{level}</div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase italic leading-none">{level} Laboratory</h4>
                      <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">{stats.chapters} Scientific Modules</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-700 group-hover:text-blue-500" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 flex flex-col gap-2">
            <Clock size={20} className="text-emerald-500" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Study Time</p>
            <p className="text-xl font-black text-white italic tracking-tighter">12.4 Hours</p>
          </div>
          <div className="p-6 bg-slate-900 rounded-[2rem] border border-slate-800 flex flex-col gap-2">
            <Activity size={20} className="text-blue-500" />
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Accuracy</p>
            <p className="text-xl font-black text-white italic tracking-tighter">84% Rate</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
