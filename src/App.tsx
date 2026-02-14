import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard,
  BookOpen,
  Zap,
  User,
  Activity
} from 'lucide-react';
import Logo from './components/Logo';
import Dashboard from './components/Dashboard';
import LearnView from './components/LearnView';
import CBTHub, { type QuizConfig } from './components/CBTHub';
import CBTExam from './components/CBTExam';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [view, setView] = useState<'dashboard' | 'learn' | 'exam' | 'profile'>('dashboard');
  const [isInitializing, setIsInitializing] = useState(true);
  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const timer = setTimeout(() => setIsInitializing(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isInitializing) return <LoadingScreen />;

  if (quizConfig) {
    return <CBTExam config={quizConfig} onExit={() => setQuizConfig(null)} />;
  }

  return (
    <div className="flex h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden font-sans antialiased">
      
      <div className="flex-1 flex flex-col min-w-0 h-full relative">
        
        {/* Simple Branded Header */}
        <header className="h-16 shrink-0 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-xl z-[90]">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <div className="flex flex-col leading-none">
              <h1 className="text-base font-black uppercase italic tracking-tighter text-white leading-none">Biobite</h1>
              <p className="text-[7px] font-bold text-blue-400 uppercase tracking-widest mt-0.5">Advanced Learning Suite</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full">
             <Activity size={10} className="text-blue-400 animate-pulse" />
             <span className="text-[8px] font-black text-blue-400 uppercase">Live</span>
          </div>
        </header>

        {/* View Engine */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-touch no-scrollbar relative flex flex-col bg-slate-950">
          {view === 'dashboard' && (
            <Dashboard 
              onStartLearning={() => setView('learn')}
              onStartExam={() => setView('exam')}
            />
          )}
          
          {view === 'learn' && <LearnView />}

          {view === 'exam' && <CBTHub onStartQuiz={(config) => setQuizConfig(config)} />}

          {view === 'profile' && (
            <div className="flex-1 p-8 max-w-lg mx-auto w-full space-y-8 animate-in zoom-in-95 duration-500">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-[2rem] bg-slate-900 border-4 border-slate-800 shadow-2xl p-1 overflow-hidden mb-6">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Scholar`} alt="avatar" className="rounded-3xl" />
                </div>
                <h2 className="text-2xl font-black uppercase italic text-white">Senior Scholar</h2>
                <p className="text-[10px] font-black text-blue-600 uppercase mt-1 italic tracking-widest underline decoration-blue-500 underline-offset-4 decoration-2">Verified Profile</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-sm text-center">
                    <p className="text-[8px] font-black text-slate-500 uppercase">Total XP</p>
                    <p className="text-2xl font-black text-blue-500 italic">4,200</p>
                 </div>
                 <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 shadow-sm text-center">
                    <p className="text-[8px] font-black text-slate-500 uppercase">Rank Index</p>
                    <p className="text-xl font-black text-emerald-500 italic">Elite</p>
                 </div>
              </div>
            </div>
          )}
        </main>

        {/* Global Tab Bar */}
        <nav className="h-16 shrink-0 bg-slate-900/90 backdrop-blur-2xl border-t border-slate-800 flex items-center justify-around z-[100] pb-2 shadow-2xl">
          {[
            { id: 'dashboard', label: 'Dash', icon: LayoutDashboard, color: 'text-blue-500' },
            { id: 'learn', label: 'Learn', icon: BookOpen, color: 'text-emerald-500' },
            { id: 'exam', label: 'Exam', icon: Zap, color: 'text-indigo-500' },
            { id: 'profile', label: 'Me', icon: User, color: 'text-rose-500' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setView(tab.id as any)}
              className={`flex flex-col items-center gap-1 flex-1 transition-all ${view === tab.id ? tab.color + ' scale-110' : 'text-slate-500 opacity-40 hover:opacity-100'}`}
            >
              <tab.icon size={20} fill={view === tab.id ? "currentColor" : "none"} />
              <span className="text-[8px] font-black uppercase tracking-tighter">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default App;
