import React from 'react';
import { LayoutDashboard, BookOpen, Zap, User, Bookmark, X, Sun, Moon } from 'lucide-react';
import type { User as FirebaseUser } from 'firebase/auth';
import Avatar from './Avatar';
import Logo from './Logo';

interface SidebarProps {
  view: string;
  setView: (view: any) => void;
  onSignIn: () => void;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  user: FirebaseUser | null;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NAV = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'learn', label: 'Study', icon: BookOpen },
  { id: 'exam', label: 'Practice', icon: Zap },
  { id: 'saved', label: 'Library', icon: Bookmark },
  { id: 'profile', label: 'Account', icon: User },
] as const;

const Sidebar: React.FC<SidebarProps> = ({ view, setView, onSignIn, className = '', isOpen = false, onClose, user, theme, toggleTheme }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] md:hidden" onClick={onClose} />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[110] w-[260px] bg-[var(--bg-sidebar)] border-r border-[var(--border-base)] flex flex-col transition-all duration-300 md:relative md:translate-x-0 shrink-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${className}
      `}>
        
        <div className="h-16 flex items-center px-6 shrink-0 justify-between">
          <div className="flex items-center gap-2">
            <Logo size={28} />
            <span className="font-black text-[var(--text-main)] text-base tracking-tight">Biobyte</span>
          </div>
          <button onClick={onClose} className="md:hidden p-2 text-[var(--text-muted)]"><X size={20} /></button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto no-scrollbar">
          {NAV.map(item => {
            const isActive = view === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setView(item.id); onClose?.(); }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-bold
                  ${isActive 
                    ? 'bg-[var(--brand)] text-white shadow-lg shadow-blue-500/20' 
                    : 'text-[var(--text-muted)] hover:bg-[var(--bg-input)] hover:text-[var(--text-main)]'
                  }
                `}
              >
                <item.icon size={18} strokeWidth={isActive ? 3 : 2} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--border-base)] bg-[var(--bg-app)] space-y-3">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-base)] hover:border-[var(--brand)] transition-all text-[var(--text-main)] shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-[var(--bg-app)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-500 hover:rotate-45">
               {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </div>
            <span className="text-[11px] font-black uppercase tracking-widest">
              {theme === 'light' ? 'Night Mode' : 'Day Mode'}
            </span>
          </button>

          <button
            onClick={user ? () => setView('profile') : onSignIn}
            className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-[var(--bg-surface)] transition-all text-left group"
          >
            <Avatar 
              src={user?.photoURL} 
              name={user?.displayName || 'Guest'} 
              size={36} 
              className="rounded-xl shadow-sm"
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-[11px] font-black text-[var(--text-main)] truncate">{user?.displayName || 'Guest Scholar'}</p>
              <p className="text-[9px] font-bold text-[var(--brand)] uppercase tracking-widest truncate">
                {user ? 'Cloud Active' : 'Offline Session'}
              </p>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
