import React, { useState, useMemo, useEffect } from 'react';
import { syllabus, type Theme, type Chapter, type Topic } from '../data/syllabus';
import TopicContent from './TopicContent';
import { Book, CheckCircle } from 'lucide-react';
import { useLocalProgress } from '../hooks/useLocalProgress';

interface LearnViewProps {
  initialTopicSlug?: string | null;
  onClearInitial?: () => void;
}

const LearnView: React.FC<LearnViewProps> = ({ initialTopicSlug, onClearInitial }) => {
  const [activeLevel, setActiveLevel] = useState<'SS1' | 'SS2' | 'SS3'>('SS1');
  const [selectedTopic, setSelectedTopic] = useState<{ theme: Theme; chapter: Chapter; topic: Topic } | null>(null);
  const { addRecentTopic, progress } = useLocalProgress();

  useEffect(() => {
    if (initialTopicSlug) {
      let foundTopic: { theme: Theme; chapter: Chapter; topic: Topic } | null = null;
      syllabus.forEach(t => {
        t.chapters.forEach(c => {
          c.topics.forEach(tp => {
            if (tp.slug === initialTopicSlug) {
              foundTopic = { theme: t, chapter: c, topic: tp };
            }
          });
        });
      });
      
      if (foundTopic) {
        setSelectedTopic(foundTopic);
        setActiveLevel((foundTopic as any).theme.level);
      }
      onClearInitial?.();
    }
  }, [initialTopicSlug, onClearInitial]);

  useEffect(() => {
    if (selectedTopic) {
      addRecentTopic({
        slug: selectedTopic.topic.slug,
        title: selectedTopic.topic.title,
        chapterTitle: selectedTopic.chapter.title,
        level: selectedTopic.theme.level
      });
    }
  }, [selectedTopic, addRecentTopic]);

  const filteredThemes = useMemo(() => syllabus.filter(t => t.level === activeLevel), [activeLevel]);

  const allTopicsFlattened = useMemo(() => {
    const list: Array<{ theme: Theme; chapter: Chapter; topic: Topic }> = [];
    syllabus.forEach(t => {
      t.chapters.forEach(c => {
        c.topics.forEach(tp => {
          list.push({ theme: t, chapter: c, topic: tp });
        });
      });
    });
    return list;
  }, []);

  const goNext = () => {
    if (!selectedTopic) return;
    const idx = allTopicsFlattened.findIndex(t => t.topic.slug === selectedTopic.topic.slug);
    if (idx < allTopicsFlattened.length - 1) setSelectedTopic(allTopicsFlattened[idx + 1]);
  };

  return (
    <div className="flex h-full bg-[var(--bg-app)]">
      
      {/* ── Desktop Lesson Sidebar ── */}
      <div className={`flex flex-col w-full md:w-[320px] lg:w-[380px] border-r border-[var(--border-base)] shrink-0 ${selectedTopic ? 'hidden md:flex' : 'flex'} bg-[var(--bg-sidebar)]`}>
        <div className="h-14 flex items-center px-6 border-b border-[var(--border-base)] bg-[var(--bg-sidebar)] sticky top-0 z-10 shrink-0">
          <div className="flex bg-[var(--bg-app)] rounded-lg p-1 w-full border border-[var(--border-base)]">
             {(['SS1', 'SS2', 'SS3'] as const).map(lvl => (
               <button
                 key={lvl}
                 onClick={() => setActiveLevel(lvl)}
                 className={`flex-1 py-1 text-[10px] font-black rounded-md transition-all ${activeLevel === lvl ? 'bg-[var(--brand)] text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
               >
                 {lvl}
               </button>
             ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto no-scrollbar bg-[var(--bg-app)]/30">
          {filteredThemes.map(theme => {
            const total = theme.chapters.reduce((a, c) => a + c.topics.length, 0);
            const comp = theme.chapters.reduce((a, c) => a + c.topics.filter(tp => progress.completedTopics.includes(tp.slug)).length, 0);
            const pct = Math.round((comp / (total || 1)) * 100);

            return (
              <div key={theme.id} className="p-4 space-y-4">
                <div className="flex items-center justify-between px-2">
                   <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{theme.title}</h3>
                   <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{pct}%</span>
                </div>
                
                <div className="space-y-2">
                  {theme.chapters.map(chapter => (
                    <div key={chapter.id} className="bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl overflow-hidden shadow-sm">
                       <div className="px-4 py-2.5 bg-[var(--bg-app)] border-b border-[var(--border-base)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">
                          {chapter.title}
                       </div>
                       <div className="divide-y divide-[var(--border-base)]">
                        {chapter.topics.map(topic => {
                           const isActive = selectedTopic?.topic.slug === topic.slug;
                           const isComp = progress.completedTopics.includes(topic.slug);
                           return (
                             <button
                               key={topic.slug}
                               onClick={() => setSelectedTopic({ theme, chapter, topic })}
                               className={`w-full text-left px-4 py-3.5 text-sm font-semibold transition-all flex items-center justify-between group ${isActive ? 'bg-[var(--brand)] text-white' : 'text-[var(--text-main)] hover:bg-[var(--bg-app)]'}`}
                             >
                               <span className="truncate flex-1">{topic.title}</span>
                               {isComp && <CheckCircle size={14} className={isActive ? 'text-white' : 'text-emerald-500'} />}
                             </button>
                           );
                        })}
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Reader Stage ── */}
      <div className={`flex-1 bg-[var(--bg-surface)] flex flex-col min-w-0 ${!selectedTopic ? 'hidden md:flex' : 'flex'}`}>
        {selectedTopic ? (
          <div className="flex-1 overflow-hidden relative">
            <TopicContent
              topic={selectedTopic.topic}
              onNext={goNext}
              onClose={() => setSelectedTopic(null)}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-[var(--bg-app)]/20">
            <div className="w-20 h-20 bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-base)] flex items-center justify-center mb-6 shadow-sm">
               <Book size={32} className="text-[var(--text-muted)]" />
            </div>
            <h3 className="text-xl font-black text-[var(--text-main)] mb-2 tracking-tight">Select a Lesson</h3>
            <p className="text-sm text-[var(--text-muted)] max-w-[240px] font-medium leading-relaxed">Choose a biology topic from the sidebar to begin your study session.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnView;
