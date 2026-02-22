import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { Topic } from '../data/syllabus';
import { 
  ChevronRight, RefreshCw, GraduationCap, Clock, BookOpen, ArrowRight, Sparkles, ArrowLeft
} from 'lucide-react';
import ChapterQuiz from './ChapterQuiz';
import { useLocalProgress } from '../hooks/useLocalProgress';
import { getTopicImage } from '../utils/TopicMedia';

interface TopicContentProps {
  _theme: any;
  topic: Topic;
  onNext: () => void; 
  _onPrevious: () => void;
  onClose: () => void;
}

const scrubContent = (raw: string, topicTitle: string) => {
  if (!raw) return '';
  let text = raw;
  text = text.replace(/<think>[\s\S]*?<\/think>/gi, '');
  text = text.replace(/<think>[\s\S]*/gi, '');
  text = text.replace(/^(.+)\n={3,}/gm, '# $1');
  text = text.replace(/^(.+)\n-{3,}/gm, '## $1');
  const escapedTitle = topicTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const titleRegex = new RegExp(`^#\\s*${escapedTitle}\\s*(\n|$)`, 'im');
  text = text.replace(titleRegex, '');
  text = text.replace(/^#\s*$/gm, '');
  text = text.replace(/^---\s*$/gm, '');
  return text.trim();
};

const renderMarkdown = (md: string) => {
  if (!md) return '';
  let html = md;
  const tableRegex = /^\|(.+)\|\n\|( *:?-+ *:?\|)+\n((\|.+\|\n)*)/gm;
  html = html.replace(tableRegex, (match) => {
    const lines = match.trim().split('\n');
    const header = lines[0].split('|').filter(c => c.trim().length > 0);
    const body = lines.slice(2).map(row => row.split('|').filter(c => c.trim().length > 0));
    const headerHtml = `<thead><tr>${header.map(h => `<th>${h.trim()}</th>`).join('')}</tr></thead>`;
    const bodyHtml = `<tbody>${body.map(row => `<tr>${row.map(c => `<td>${c.trim()}</td>`).join('')}</tr>`).join('')}</tbody>`;
    return `<div class="table-wrap"><table>${headerHtml}${bodyHtml}</table></div>`;
  });

  return html
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^[\*-] (.*$)/gm, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gm, '<li>$1</li>')
    .replace(/\n\n/g, '<br/><br/>');
};

const TopicContent: React.FC<TopicContentProps> = ({ _theme, topic, onNext, _onPrevious, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { markTopicCompleted, addStudyTime } = useLocalProgress();

  useEffect(() => {
    const interval = setInterval(() => { if (!loading && !showQuiz) addStudyTime(1); }, 60000);
    return () => clearInterval(interval);
  }, [loading, showQuiz, addStudyTime]);

  const cleanedContent = useMemo(() => scrubContent(topic.data.content || '', topic.title), [topic.data.content, topic.title]);
  const cleanedDescription = useMemo(() => scrubContent(topic.data.description || '', ''), [topic.data.description]);
  const topicImage = useMemo(() => getTopicImage(topic.slug, topic.title), [topic.slug, topic.title]);

  const modules = useMemo(() => {
    if (!cleanedContent) return [];
    let parts = cleanedContent.split(/(?=## |---|### )/);
    if (parts.length <= 1) {
        const paragraphs = cleanedContent.split('\n\n');
        const chunks: string[] = [];
        let current = "";
        paragraphs.forEach(p => {
            if ((current + p).length > 800) {
                chunks.push(current.trim());
                current = p;
            } else { current += "\n\n" + p; }
        });
        if (current) chunks.push(current.trim());
        parts = chunks;
    }
    return parts.filter(p => p.trim().length > 10);
  }, [cleanedContent]);

  useEffect(() => {
    setLoading(true); setShowQuiz(false); setCurrentPage(0);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [topic.slug]);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = 0; }, [currentPage]);

  const handleFinishTopic = () => { markTopicCompleted(topic.slug); setShowQuiz(true); };

  if (showQuiz) return <ChapterQuiz topic={topic} onExit={() => setShowQuiz(false)} />;

  const renderModuleContent = (md: string) => {
    const parts = md.split(/(```[\s\S]*?```)/g);
    return parts.map((part, i) => {
      if (part.startsWith('```')) {
        const content = part.replace(/```(markdown|text|ascii)?/g, '').replace(/```/g, '').trim();
        return <div key={i} className="diagram-container"><pre className="diagram-pre"><code>{content}</code></pre></div>;
      }
      return <div key={i} dangerouslySetInnerHTML={{ __html: renderMarkdown(part) }} />;
    });
  };

  const isLastPage = currentPage === modules.length - 1;
  const progress = ((currentPage + 1) / modules.length) * 100;

  return (
    <div className="flex flex-col h-full bg-[var(--bg-surface)] relative animate-in fade-in duration-300">
      
      <div className="h-14 border-b border-[var(--border-base)] px-4 flex items-center justify-between bg-[var(--bg-surface)] z-20 sticky top-0">
         <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-2 hover:bg-[var(--bg-app)] rounded-lg text-[var(--text-muted)] transition-colors mr-1"><ArrowLeft size={20} /></button>
            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--brand)] bg-[var(--brand-subtle)] px-2 py-0.5 rounded">Step {currentPage + 1} of {modules.length}</span>
            <div className="h-4 w-px bg-[var(--border-base)] hidden sm:block" />
            <span className="text-xs font-bold text-[var(--text-muted)] truncate max-w-[150px] md:max-w-none">{topic.title}</span>
         </div>
         <div className="hidden lg:flex items-center gap-2 text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest"><Clock size={12} /> ~{Math.ceil(modules.length * 1.5)} min left</div>
      </div>

      <div className="h-1 bg-[var(--border-base)] w-full z-20 sticky top-14"><div className="h-full bg-[var(--brand)] transition-all duration-500 ease-out" style={{ width: `${progress}%` }} /></div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-[var(--bg-surface)]">
        <div className="max-w-3xl mx-auto px-6 py-10 md:py-16 min-h-full flex flex-col">
          {loading ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 gap-4 opacity-40">
              <RefreshCw size={32} className="animate-spin text-[var(--brand)]" />
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[var(--text-muted)]">Building Step...</p>
            </div>
          ) : modules.length > 0 ? (
            <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-2 duration-500 flex-1 prose-content">
              {currentPage === 0 && (
                <div className="mb-12">
                   {topicImage && (
                     <div className="w-full h-64 md:h-80 rounded-[40px] overflow-hidden mb-10 border border-[var(--border-base)] shadow-lg relative group bg-slate-100">
                        <img src={topicImage} alt={topic.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                           <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">{topic.title}</h1>
                        </div>
                     </div>
                   )}
                   {!topicImage && <h1 className="text-4xl md:text-5xl font-black text-[var(--text-main)] tracking-tight leading-tight mb-6">{topic.title}</h1>}

                   <div className="flex items-start gap-4 p-6 bg-[var(--brand-subtle)] rounded-3xl border border-[var(--brand)]/10 text-[var(--brand)]">
                      <BookOpen size={24} className="shrink-0 mt-1" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Module Objective</p>
                        <p className="text-lg font-medium leading-relaxed italic text-[var(--text-main)] opacity-80">{cleanedDescription ? `"${cleanedDescription.split('.')[0]}."` : "Master the core concepts through structured steps."}</p>
                      </div>
                   </div>
                </div>
              )}
              <div className="prose-content selection:bg-[var(--brand-subtle)]">{renderModuleContent(modules[currentPage])}</div>
              {isLastPage && (
                <div className="mt-auto pt-12 animate-in zoom-in-95 duration-700">
                   <div className="p-10 bg-slate-900 dark:bg-slate-800 rounded-[40px] text-white shadow-2xl relative overflow-hidden border border-white/5">
                      <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12"><Sparkles size={120} /></div>
                      <div className="relative z-10 text-center md:text-left">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Topic Completed</div>
                         <h3 className="text-2xl font-black mb-2">Excellent Work!</h3>
                         <p className="text-slate-400 mb-8 leading-relaxed font-medium">You've mastered all the modules for this topic. Ready to prove your knowledge?</p>
                         <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={handleFinishTopic} className="btn bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg active:scale-95 transition-all"><GraduationCap size={20} /> Start Practice Quiz</button>
                            <button onClick={() => { markTopicCompleted(topic.slug); onNext(); }} className="btn border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-slate-300 active:scale-95 transition-all">Next Topic <ArrowRight size={18} /></button>
                         </div>
                      </div>
                   </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {!loading && !isLastPage && (
        <div className="h-20 border-t border-[var(--border-base)] bg-[var(--bg-surface)]/80 backdrop-blur-md px-6 flex items-center justify-between sticky bottom-0 z-20">
           <button onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 0} className="btn btn-ghost px-6 font-black text-xs uppercase tracking-widest disabled:opacity-30"><ArrowLeft size={18} /> Back</button>
           <button onClick={() => setCurrentPage(p => p + 1)} className="btn btn-primary px-10 rounded-full font-black text-xs uppercase tracking-widest active:scale-95 transition-transform shadow-lg shadow-blue-500/20">Next Step <ChevronRight size={18} /></button>
        </div>
      )}
    </div>
  );
};

export default TopicContent;
