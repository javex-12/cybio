import React, { useMemo } from 'react';
import { 
  ChevronRight, 
  PlayCircle, BookOpen, Zap, 
  ShieldCheck, CloudLightning
} from 'lucide-react';
import type { RecentTopic, LocalProgress } from '../hooks/useLocalProgress';
import { auth } from '../firebase';

interface DashboardProps {
  onStartLearning: () => void;
  onStartExam: () => void;
  onSignIn: () => void;
  recentTopics: RecentTopic[];
  onResumeTopic: (topic: RecentTopic) => void;
  progress: LocalProgress;
}

const Dashboard: React.FC<DashboardProps> = ({ onStartLearning, onStartExam, onSignIn, recentTopics, onResumeTopic, progress }) => {
  const user = auth.currentUser;

  const stats = useMemo(() => {
    const scores = Object.values(progress.quizScores);
    const avg = scores.length === 0 ? 0 : Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const mins = progress.studyTimeMinutes || 0;
    const timeStr = mins < 60 ? `${mins}m` : `${Math.floor(mins / 60)}h ${mins % 60}m`;
    return { avg, timeStr, completed: progress.completedTopics.length, streak: progress.currentStreak || 0 };
  }, [progress]);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  }, []);

  return (
    <div className="flex flex-col h-full bg-[var(--bg-app)] overflow-y-auto no-scrollbar scroll-smooth">
      <div className="p-6 md:p-10 space-y-8 max-w-[1400px] mx-auto w-full fade-in">
        
        {/* ── Heading Area ── */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div>
              <h1 className="text-3xl font-black text-[var(--text-main)] tracking-tight">
                {user ? `${greeting}, ${user.displayName?.split(' ')[0]}` : `${greeting}, Guest`}
              </h1>
              <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.25em] mt-1">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
           </div>
           
           {!user ? (
             <button 
               onClick={onSignIn}
               className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 rounded-xl text-xs font-bold border border-amber-500/20 hover:bg-amber-500/20 transition-all"
             >
                <CloudLightning size={14} />
                Cloud Sync Offline
             </button>
           ) : (
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 rounded-xl text-xs font-bold border border-emerald-500/20">
                <ShieldCheck size={14} />
                Progress Secured
             </div>
           )}
        </header>

        {/* ── Main Activity Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button 
                onClick={onStartLearning}
                className="group relative h-56 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-[32px] overflow-hidden p-8 text-left transition-all hover:border-[var(--brand)] shadow-sm"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                  <BookOpen size={140} className="text-[var(--text-main)]" />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 bg-[var(--brand)] rounded-2xl flex items-center justify-center text-white shadow-lg"><BookOpen size={24} /></div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--text-main)]">Curriculum</h3>
                    <p className="text-[var(--text-muted)] text-sm mt-1">Access all 120 study modules</p>
                  </div>
                </div>
              </button>

              <button 
                onClick={onStartExam}
                className="group relative h-56 bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-[32px] overflow-hidden p-8 text-left transition-all hover:border-rose-500 shadow-sm"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                  <Zap size={140} className="text-[var(--text-main)]" fill="currentColor" />
                </div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-200"><Zap size={24} fill="currentColor" /></div>
                  <div>
                    <h3 className="text-2xl font-black text-[var(--text-main)]">Simulations</h3>
                    <p className="text-[var(--text-muted)] text-sm mt-1">Timed practice exams</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Resume Section */}
            <div className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-[32px] overflow-hidden shadow-sm">
              <div className="px-8 py-6 border-b border-[var(--border-base)] flex items-center justify-between">
                <h2 className="font-black text-[var(--text-main)] tracking-tight">Recent Activity</h2>
                <button onClick={onStartLearning} className="text-[10px] font-black uppercase tracking-widest text-[var(--brand)] hover:underline">View History</button>
              </div>
              <div className="divide-y divide-[var(--border-subtle)]">
                {recentTopics.length > 0 ? recentTopics.slice(0, 4).map((topic) => (
                  <button
                    key={topic.slug}
                    onClick={() => onResumeTopic(topic)}
                    className="w-full px-8 py-5 hover:bg-[var(--bg-app)] flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-app)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--brand)] transition-all">
                        <PlayCircle size={20} />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-[var(--text-main)]">{topic.title}</h4>
                        <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mt-1">{topic.level} • {topic.chapterTitle}</p>
                      </div>
                    </div>
                    <ChevronRight size={18} className="text-[var(--text-muted)] group-hover:text-[var(--brand)] group-hover:translate-x-1 transition-all" />
                  </button>
                )) : (
                  <div className="px-8 py-16 text-center text-[var(--text-muted)]">
                    <p className="text-sm font-medium opacity-60">Begin your journey to see recent activity.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Widgets (Right) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Core Metrics */}
            <div className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-[32px] p-8 shadow-sm space-y-8">
              <h2 className="font-black text-[var(--text-main)] tracking-tight uppercase tracking-[0.1em] text-xs opacity-60">Session Metrics</h2>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Accuracy</p>
                  <p className="text-3xl font-black text-[var(--text-main)]">{stats.avg}%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Topics</p>
                  <p className="text-3xl font-black text-[var(--text-main)]">{stats.completed}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Focus</p>
                  <p className="text-2xl font-black text-[var(--text-main)] tracking-tighter">{stats.timeStr}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Consistency</p>
                  <p className="text-2xl font-black text-[var(--brand)]">{stats.streak} Days</p>
                </div>
              </div>

              <div className="pt-8 border-t border-[var(--border-base)]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black text-[var(--text-main)] uppercase tracking-widest">Mastery</span>
                  <span className="text-xs font-black text-[var(--brand)]">{Math.round((stats.completed / 120) * 100)}%</span>
                </div>
                <div className="h-2 bg-[var(--bg-app)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--brand)] rounded-full" style={{ width: `${(stats.completed / 120) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Streak Booster Widget */}
            <div className="bg-[var(--brand)] rounded-[32px] p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Zap size={140} fill="currentColor" />
               </div>
               <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                     <Zap size={20} className="text-white" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-black mb-2">Daily Streak</h3>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed mb-6">
                    {stats.streak > 0 
                      ? `You've studied for ${stats.streak} days straight. Keep the momentum going!` 
                      : "Start a study session today to begin your daily consistency streak."}
                  </p>
                  <button onClick={onStartLearning} className="px-6 py-2.5 bg-white text-[var(--brand)] rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-50 transition-all">
                     Continue Study
                  </button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
