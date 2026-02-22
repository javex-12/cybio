import React, { useState, useMemo } from 'react';
import { Zap, BookOpen, Play, Layout, CheckCircle2, Clock, ListChecks, Target, BarChart3, ChevronRight, Globe } from 'lucide-react';
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

const levels = ['SS1', 'SS2', 'SS3'] as const;
const qOptions = [10, 20, 40, 60, 100];
const tOptions = [15, 30, 45, 60, 90, 120];

const CBTHub: React.FC<CBTHubProps> = ({ onStartQuiz }) => {
  const [activeLevel, setActiveLevel] = useState<'SS1' | 'SS2' | 'SS3' | 'ALL'>('SS1');
  const [config, setConfig] = useState<QuizConfig>({ type: 'level', targetId: 'SS1', limit: 40, timeLimit: 30 });

  const filteredModules = useMemo(() => {
    if (activeLevel === 'ALL') return [];
    return syllabus.filter(t => t.level === activeLevel);
  }, [activeLevel]);

  const isSel = (type: QuizConfig['type'], id?: string) =>
    config.type === type && config.targetId === id;

  const selectLevel = (lvl: 'SS1' | 'SS2' | 'SS3' | 'ALL') => {
    setActiveLevel(lvl);
    if (lvl === 'ALL') {
      setConfig({ ...config, type: 'global', targetId: undefined });
    } else {
      setConfig({ ...config, type: 'level', targetId: lvl });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[var(--bg-app)] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-[var(--bg-surface)] border-b border-[var(--border-base)] px-6 py-4 flex flex-col md:flex-row md:items-center justify-between sticky top-0 z-10 gap-4">
        <div>
           <h1 className="text-xl font-black text-[var(--text-main)]">Practice Simulations</h1>
           <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mt-0.5">WAEC Standard Readiness</p>
        </div>
        <div className="flex bg-[var(--bg-app)] p-1 rounded-xl border border-[var(--border-base)]">
           {(['SS1', 'SS2', 'SS3', 'ALL'] as const).map(lvl => (
             <button
               key={lvl}
               onClick={() => selectLevel(lvl)}
               className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${
                 activeLevel === lvl 
                 ? 'bg-[var(--brand)] text-white shadow-md' 
                 : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
               }`}
             >
               {lvl === 'ALL' ? 'All Classes' : lvl}
             </button>
           ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Selection */}
          <div className="lg:col-span-2 space-y-8">
            
            {activeLevel === 'ALL' ? (
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em] flex items-center gap-2">
                  <Globe size={14} /> Comprehensive Mode
                </h3>
                <button
                  onClick={() => setConfig({ ...config, type: 'global' })}
                  className={`
                    w-full p-8 rounded-[32px] border-2 text-left transition-all group relative overflow-hidden
                    ${config.type === 'global' 
                      ? 'border-[var(--brand)] bg-[var(--brand-subtle)] ring-4 ring-[var(--brand)]/5' 
                      : 'border-[var(--border-base)] bg-[var(--bg-surface)] hover:border-[var(--brand)]'
                    }
                  `}
                >
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--brand)] text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                         <Globe size={24} />
                      </div>
                      <h4 className="font-black text-2xl text-[var(--text-main)] mb-2">Global Mock Simulation</h4>
                      <p className="text-sm text-[var(--text-muted)] font-medium max-w-sm">
                        A full-length practice exam drawing questions from SS1, SS2, and SS3 curriculums simultaneously.
                      </p>
                   </div>
                   {config.type === 'global' && <CheckCircle2 size={32} className="absolute top-8 right-8 text-[var(--brand)]" />}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em] flex items-center gap-2">
                  <Layout size={14} /> Available Modules
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <button
                     onClick={() => setConfig({ ...config, type: 'level', targetId: activeLevel })}
                     className={`
                       relative p-6 rounded-[24px] border-2 text-left transition-all group
                       ${isSel('level', activeLevel) 
                         ? 'border-[var(--brand)] bg-[var(--brand-subtle)]' 
                         : 'border-[var(--border-base)] bg-[var(--bg-surface)] hover:border-[var(--brand)]'
                       }
                     `}
                   >
                      <div className="flex justify-between items-start mb-4">
                         <div className={`p-2 rounded-xl ${isSel('level', activeLevel) ? 'bg-[var(--brand)] text-white' : 'bg-[var(--bg-app)] text-[var(--text-muted)]'}`}>
                            <Target size={20} />
                         </div>
                         {isSel('level', activeLevel) && <CheckCircle2 size={20} className="text-[var(--brand)]" />}
                      </div>
                      <h4 className="font-black text-[var(--text-main)]">Full {activeLevel} Mock</h4>
                      <p className="text-xs text-[var(--text-muted)] font-bold mt-1 uppercase tracking-tight">Level Certification</p>
                   </button>

                   {filteredModules.map(module => (
                     <button
                       key={module.id}
                       onClick={() => setConfig({ ...config, type: 'theme', targetId: module.id })}
                       className={`
                         relative p-6 rounded-[24px] border-2 text-left transition-all group
                         ${isSel('theme', module.id) 
                           ? 'border-[var(--brand)] bg-[var(--brand-subtle)]' 
                           : 'border-[var(--border-base)] bg-[var(--bg-surface)] hover:border-[var(--brand)]'
                         }
                       `}
                     >
                        <div className="flex justify-between items-start mb-4">
                           <div className={`p-2 rounded-xl ${isSel('theme', module.id) ? 'bg-[var(--brand)] text-white' : 'bg-[var(--bg-app)] text-[var(--text-muted)]'}`}>
                              <BookOpen size={20} />
                           </div>
                           {isSel('theme', module.id) && <CheckCircle2 size={20} className="text-[var(--brand)]" />}
                        </div>
                        <h4 className="font-black text-[var(--text-main)] truncate">{module.title}</h4>
                        <p className="text-xs text-[var(--text-muted)] font-bold mt-1 uppercase tracking-tight">{module.chapters.length} Chapters</p>
                     </button>
                   ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Config */}
          <div className="lg:col-span-1">
             <div className="bg-[var(--bg-surface)] rounded-[32px] border border-[var(--border-base)] p-8 sticky top-10 shadow-sm">
                <div className="mb-8">
                   <h3 className="font-black text-[var(--text-main)] text-lg">Simulator Settings</h3>
                   <div className="h-1 w-10 bg-[var(--brand)] mt-2 rounded-full" />
                </div>

                <div className="space-y-8">
                   <div>
                      <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em] mb-4 block">Question Volume</label>
                      <div className="grid grid-cols-5 gap-2">
                         {qOptions.map(num => (
                            <button
                              key={num}
                              onClick={() => setConfig({ ...config, limit: num })}
                              className={`
                                h-10 rounded-xl text-xs font-black border transition-all ${
                                  config.limit === num
                                  ? 'border-[var(--brand)] bg-[var(--brand)] text-white shadow-lg shadow-blue-500/20'
                                  : 'border-[var(--border-base)] text-[var(--text-muted)] hover:bg-[var(--bg-app)]'
                                }
                              `}
                            >
                              {num}
                            </button>
                         ))}
                      </div>
                   </div>

                   <div>
                      <label className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em] mb-4 block">Chronometer (Min)</label>
                      <div className="grid grid-cols-3 gap-2">
                         {tOptions.map(min => (
                            <button
                              key={min}
                              onClick={() => setConfig({ ...config, timeLimit: min })}
                              className={`
                                h-10 rounded-xl text-xs font-black border transition-all ${
                                  config.timeLimit === min
                                  ? 'border-[var(--brand)] bg-[var(--brand)] text-white shadow-lg shadow-blue-500/20'
                                  : 'border-[var(--border-base)] text-[var(--text-muted)] hover:bg-[var(--bg-app)]'
                                }
                              `}
                            >
                              {min}m
                            </button>
                         ))}
                      </div>
                   </div>

                   <button
                     onClick={() => onStartQuiz(config)}
                     className="w-full py-4 rounded-2xl bg-[var(--text-main)] text-[var(--bg-surface)] font-black text-sm hover:bg-[var(--brand)] transition-all shadow-lg flex items-center justify-center gap-3 mt-4 active:scale-95"
                   >
                      Launch Simulation <Play size={18} fill="currentColor" />
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CBTHub;
