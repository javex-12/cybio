import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Zap, 
  User, 
  X,
  ChevronRight,
  ShieldCheck,
  Brain
} from 'lucide-react';

import Logo from './Logo';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: any) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate, isOpen, onClose }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'text-blue-600' },
    { id: 'learn', label: 'Curriculum Lab', icon: BookOpen, color: 'text-emerald-600' },
    { id: 'exam', label: 'Practice Hub', icon: Zap, color: 'text-indigo-600' },
    { id: 'profile', label: 'Scholar Profile', icon: User, color: 'text-rose-600' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] md:hidden animate-in fade-in duration-300" onClick={onClose} />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed top-0 left-0 z-[110] h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static flex flex-col shrink-0
      `}>
        {/* Logo Section */}
        <div className="h-20 shrink-0 flex items-center justify-between px-6 border-b border-slate-50 dark:border-white/5">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <div className="flex flex-col">
              <h1 className="font-black uppercase italic tracking-tighter text-base dark:text-white leading-none">Biobite</h1>
              <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest mt-1">Pro Edition</p>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden p-2 text-slate-400 hover:text-slate-900"><X size={20} /></button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); onClose(); }}
                className={`
                  w-full flex items-center justify-between p-4 rounded-2xl transition-all group active:scale-95
                  ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 shadow-sm' : 'hover:bg-slate-50 dark:hover:bg-white/5'}
                `}
              >
                <div className="flex items-center gap-4">
                  <item.icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                  <span className={`text-sm font-bold uppercase italic tracking-tight ${isActive ? 'text-blue-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                    {item.label}
                  </span>
                </div>
                {isActive && <ChevronRight size={16} className="text-blue-600" />}
              </button>
            );
          })}
        </nav>

        {/* Support Section */}
        <div className="p-6 border-t border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <ShieldCheck className="text-emerald-500" size={20} />
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400">System Secure</p>
              <p className="text-[9px] font-bold text-slate-600 dark:text-slate-300">Biometric Verified</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
