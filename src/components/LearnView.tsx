import React, { useState } from 'react';
import { syllabus, type Theme, type Chapter, type Topic } from '../data/syllabus';
import TopicContent from './TopicContent';
import { 
  ChevronRight, 
  ChevronDown, 
  BookOpen, 
  Layers, 
  ArrowLeft,
  ArrowRight,
  GraduationCap
} from 'lucide-react';

const LearnView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<{theme: Theme, chapter: Chapter, topic: Topic} | null>(null);
  const [activeLevel, setActiveLevel] = useState<'SS1' | 'SS2' | 'SS3'>('SS1');
  const [expandedThemes, setExpandedThemes] = useState<string[]>(['theme-1']);

  const levels = ['SS1', 'SS2', 'SS3'] as const;

  const toggleTheme = (themeId: string) => {
    setExpandedThemes(prev => prev.includes(themeId) ? prev.filter(id => id !== themeId) : [...prev, themeId]);
  };

  const filteredSyllabus = syllabus.filter(t => t.level === activeLevel);

  if (selectedTopic) {
    return (
      <div className="flex flex-col h-full bg-white dark:bg-slate-950 animate-in slide-in-from-right duration-500">
        <header className="h-14 shrink-0 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-4 z-50">
          <button 
            onClick={() => setSelectedTopic(null)}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 active:scale-90"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col">
            <h2 className="text-[8px] font-black text-blue-400 uppercase tracking-widest italic leading-none mb-1">Laboratory Directory</h2>
            <p className="text-xs font-bold text-white truncate max-w-[200px] leading-none uppercase italic">{selectedTopic.topic.title}</p>
          </div>
        </header>
        {/* TopicContent must be scrollable internally */}
        <div className="flex-1 overflow-hidden">
          <TopicContent 
            theme={selectedTopic.theme} 
            chapter={selectedTopic.chapter} 
            topic={selectedTopic.topic} 
            onNext={() => {}}
            onPrevious={() => setSelectedTopic(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-slate-950 animate-in fade-in duration-500 overflow-hidden">
      
      {/* Level Selector Tabs */}
      <div className="shrink-0 p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex gap-2 p-1 bg-slate-800 rounded-2xl">
          {levels.map(level => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeLevel === level ? 'bg-blue-600 text-white shadow-lg scale-105' : 'text-slate-500'}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Content - SCROLLABLE */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32 no-scrollbar scroll-touch">
        <div className="space-y-1 px-2">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Scheme of Work</h3>
          <p className="text-xs font-bold text-white uppercase italic">Academic Year {activeLevel}</p>
        </div>

        <div className="space-y-3">
          {filteredSyllabus.map(theme => (
            <div key={theme.id} className="bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden shadow-2xl">
              <button 
                onClick={() => toggleTheme(theme.id)}
                className="w-full p-5 flex items-center justify-between active:bg-white/5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${expandedThemes.includes(theme.id) ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                    <Layers size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-black text-white uppercase italic leading-none">{theme.title}</h4>
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">{theme.chapters.length} Phases</p>
                  </div>
                </div>
                {expandedThemes.includes(theme.id) ? <ChevronDown size={18} className="text-blue-500" /> : <ChevronRight size={18} className="text-slate-700" />}
              </button>

              {expandedThemes.includes(theme.id) && (
                <div className="px-4 pb-5 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {theme.chapters.map(chapter => (
                    <div key={chapter.id} className="space-y-2">
                      <div className="flex items-center gap-2 px-3 text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
                        <BookOpen size={10} /> {chapter.title}
                      </div>
                      <div className="grid grid-cols-1 gap-1 pl-2">
                        {chapter.topics.map((topic, tIdx) => (
                          <button 
                            key={tIdx}
                            onClick={() => setSelectedTopic({ theme, chapter, topic })}
                            className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-blue-500/20 active:scale-95 transition-all group"
                          >
                            <span className="text-[11px] font-bold text-slate-300 uppercase italic tracking-tight group-hover:text-blue-400">{topic.title}</span>
                            <ArrowRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredSyllabus.length === 0 && (
          <div className="p-10 text-center space-y-4 border-2 border-dashed border-slate-800 rounded-[2rem]">
            <GraduationCap size={48} className="text-slate-800 mx-auto" />
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Expansion Required for this Level</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnView;
