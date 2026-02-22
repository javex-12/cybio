import React, { useState, useEffect } from 'react';
import { Menu, Bookmark, X, LogOut, Sun, Moon, ArrowRight } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import LearnView from './components/LearnView';
import CBTHub, { type QuizConfig } from './components/CBTHub';
import CBTExam from './components/CBTExam';
import LoadingScreen from './components/LoadingScreen';
import OfflineBanner from './components/OfflineBanner';
import SignInModal from './components/SignInModal';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import Avatar from './components/Avatar';
import Logo from './components/Logo';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useLocalProgress, type RecentTopic } from './hooks/useLocalProgress';

const App: React.FC = () => {
  const [view, setView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [resumeSlug, setResumeSlug] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('biobyte_theme') as 'light' | 'dark') || 'light';
  });

  const online = useOnlineStatus();
  const { progress, user, logout } = useLocalProgress();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('biobyte_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const handleResume = (topic: RecentTopic) => {
    setResumeSlug(topic.slug);
    setView('learn');
  };

  if (loading) return <LoadingScreen />;
  if (quizConfig) return <CBTExam config={quizConfig} onExit={() => setQuizConfig(null)} />;

  const avgScore = Math.round(Object.values(progress.quizScores).reduce((a, b) => a + b, 0) / (Object.values(progress.quizScores).length || 1));

  return (
    <div className="app-layout">
      <PWAInstallPrompt />
      
      <Sidebar 
        view={view} 
        setView={(v) => { setView(v); setResumeSlug(null); }} 
        onSignIn={() => setSignInOpen(true)}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        user={user}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="content-chrome">
        <OfflineBanner show={!online} />

        <header className="app-header">
          {/* LEFT: Menu trigger (Mobile only) */}
          <div className="flex items-center md:hidden w-10">
            <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 text-[var(--text-muted)] hover:bg-[var(--bg-app)] rounded-lg">
              <Menu size={20} />
            </button>
          </div>
          
          {/* CENTER: Logo or Context Title */}
          <div className="flex-1 flex items-center justify-center md:justify-start gap-2">
            <div className="md:hidden flex items-center gap-2">
              <Logo size={24} />
              <span className="font-black text-[var(--text-main)] text-sm tracking-tight">Biobyte</span>
            </div>
            
            <div className="hidden md:block">
              <h2 className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.25em]">
                {view === 'dashboard' ? 'Control Center' : view}
              </h2>
            </div>
          </div>
          
          {/* RIGHT: User Profile Pill */}
          <div className="flex items-center justify-end w-10 md:w-auto shrink-0">
             <div 
                className="group flex items-center gap-3 pl-1 pr-1 md:pr-3 py-1 bg-[var(--bg-app)] rounded-xl border border-[var(--border-base)] cursor-pointer hover:border-[var(--brand)] transition-all"
                onClick={() => user ? setView('profile') : setSignInOpen(true)}
             >
                <Avatar 
                  src={user?.photoURL} 
                  name={user?.displayName || 'Guest'} 
                  size={32} 
                />
                <div className="hidden md:block text-left">
                   <p className="text-[10px] font-black text-[var(--text-main)] leading-none mb-0.5 truncate max-w-[80px]">
                     {user?.displayName?.split(' ')[0] || 'Guest'}
                   </p>
                   <p className="text-[8px] font-bold text-[var(--text-muted)] uppercase tracking-wider leading-none">
                     {user ? 'Cloud Active' : 'Offline'}
                   </p>
                </div>
             </div>
          </div>
        </header>

        <main className="scroll-viewport no-scrollbar">
          {view === 'dashboard' && (
            <Dashboard
              onStartLearning={() => setView('learn')}
              onStartExam={() => setView('exam')}
              onSignIn={() => setSignInOpen(true)}
              recentTopics={progress.recentTopics}
              onResumeTopic={handleResume}
              progress={progress}
            />
          )}
          {view === 'learn' && (
            <LearnView 
              initialTopicSlug={resumeSlug} 
              onClearInitial={() => setResumeSlug(null)} 
            />
          )}
          {view === 'exam' && <CBTHub onStartQuiz={cfg => setQuizConfig(cfg)} />}
          
          {view === 'saved' && (
            <div className="p-8 max-w-4xl mx-auto fade-in">
               <h1 className="text-3xl font-black mb-8 tracking-tight text-[var(--text-main)]">Library</h1>
               {Object.keys(progress.notes).length === 0 ? (
                 <div className="py-32 text-center text-[var(--text-muted)] border-2 border-dashed border-[var(--border-base)] rounded-[32px] bg-[var(--bg-app)]/50">
                    <Bookmark size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="font-bold">No notes saved yet.</p>
                 </div>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(progress.notes).map(([slug, note]) => (
                      <div key={slug} className="widget-card group relative">
                        <div className="flex justify-between items-start mb-4">
                          <span className="px-3 py-1 bg-[var(--brand-subtle)] text-[var(--brand)] text-[10px] font-black uppercase tracking-widest rounded-full">{slug}</span>
                          <button className="text-[var(--text-muted)] hover:text-rose-500 transition-colors"><X size={16}/></button>
                        </div>
                        <p className="text-[var(--text-main)] text-sm leading-relaxed line-clamp-3 font-medium">{note}</p>
                      </div>
                    ))}
                 </div>
               )}
            </div>
          )}

          {view === 'profile' && (
            <div className="p-8 max-w-4xl mx-auto fade-in text-[var(--text-main)]">
               <h1 className="text-3xl font-black mb-8 tracking-tight">Account</h1>
               <div className="bg-slate-900 dark:bg-slate-800 p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden mb-12">
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <Avatar 
                      src={user?.photoURL} 
                      name={user?.displayName || 'Guest'} 
                      size={96} 
                      className="rounded-[32px] border-4 border-white/10"
                    />
                    <div className="flex-1">
                      <h2 className="text-3xl font-black mb-2">{user?.displayName || 'Guest Scholar'}</h2>
                      <p className="text-blue-300 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
                        {user ? user.email : 'Local Session Data'} • WAEC 2026
                      </p>
                      {user ? (
                        <button onClick={logout} className="px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-rose-500/20 active:scale-95">Sign Out</button>
                      ) : (
                        <button onClick={() => setSignInOpen(true)} className="px-8 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95">Connect Google Account</button>
                      )}
                    </div>
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Completed', value: progress.completedTopics.length, color: 'text-indigo-500' },
                    { label: 'Accuracy', value: `${avgScore}%`, color: 'text-emerald-500' },
                    { label: 'Streak', value: `${progress.currentStreak} Days`, color: 'text-rose-500' },
                    { label: 'Minutes', value: progress.studyTimeMinutes, color: 'text-amber-500' },
                  ].map(s => (
                    <div key={s.label} className="bg-[var(--bg-surface)] border border-[var(--border-base)] p-6 rounded-[28px] text-center shadow-sm hover:border-[var(--brand)] transition-all group">
                       <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-2 group-hover:text-[var(--brand)] transition-colors">{s.label}</p>
                       <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </main>
      </div>

      <SignInModal isOpen={signInOpen} online={online} onClose={() => setSignInOpen(false)} />
    </div>
  );
};

export default App;
