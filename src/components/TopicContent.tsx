import React, { useState, useEffect } from 'react';
import type { Topic, Chapter, Theme } from '../data/syllabus';
import { 
  ChevronRight, 
  ChevronLeft,
  RefreshCw, 
  GraduationCap,
  Zap,
  Info,
  HelpCircle
} from 'lucide-react';

// Atomic Lesson Imports
import { chap1Content } from '../data/lessons/chap1';
import { chap2Content } from '../data/lessons/chap2';
import { chap3Content } from '../data/lessons/chap3';
import { chap4Content } from '../data/lessons/chap4';
import { chap5Content } from '../data/lessons/chap5';
import { chap6Content } from '../data/lessons/chap6';
import { chap7Content } from '../data/lessons/chap7';
import { chap8Content } from '../data/lessons/chap8';
import { chap9Content } from '../data/lessons/chap9';
import { chap10Content } from '../data/lessons/chap10';
import { chap11Content } from '../data/lessons/chap11';
import { chap12Content } from '../data/lessons/chap12';
import { chap13Content } from '../data/lessons/chap13';
import { chap14Content } from '../data/lessons/chap14';
import { chap15Content } from '../data/lessons/chap15';
import { chap16Content } from '../data/lessons/chap16';
import { chap17Content } from '../data/lessons/chap17';
import { chap18Content } from '../data/lessons/chap18';
import { chap19Content } from '../data/lessons/chap19';
import { chap20Content } from '../data/lessons/chap20';
import { chap21Content } from '../data/lessons/chap21';
import { chap22Content } from '../data/lessons/chap22';
import { chap23Content } from '../data/lessons/chap23';
import { chap24Content } from '../data/lessons/chap24';
import { chap25Content } from '../data/lessons/chap25';
import { chap26Content } from '../data/lessons/chap26';
import { chap27Content } from '../data/lessons/chap27';
import { chap28Content } from '../data/lessons/chap28';

import ChapterQuiz from './ChapterQuiz';
import { questionBank } from '../data/questions';

interface TopicContentProps {
  theme: Theme;
  chapter: Chapter;
  topic: Topic;
  onNext: () => void;
  onPrevious: () => void;
}

const contentMap: Record<string, Record<string, string>> = {
  'chap-1': chap1Content, 'chap-2': chap2Content, 'chap-3': chap3Content, 'chap-4': chap4Content,
  'chap-5': chap5Content, 'chap-6': chap6Content, 'chap-7': chap7Content, 'chap-8': chap8Content,
  'chap-9': chap9Content, 'chap-10': chap10Content, 'chap-11': chap11Content, 'chap-12': chap12Content,
  'chap-13': chap13Content, 'chap-14': chap14Content, 'chap-15': chap15Content, 'chap-16': chap16Content,
  'chap-17': chap17Content, 'chap-18': chap18Content, 'chap-19': chap19Content, 'chap-20': chap20Content,
  'chap-21': chap21Content, 'chap-22': chap22Content, 'chap-23': chap23Content, 'chap-24': chap24Content,
  'chap-25': chap25Content, 'chap-26': chap26Content, 'chap-27': chap27Content, 'chap-28': chap28Content,
};

const TopicContent: React.FC<TopicContentProps> = ({ theme, chapter, topic, onNext, onPrevious }) => {
  const [content, setContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [checkpointQ, setCheckpointQ] = useState<any>(null);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowQuiz(false);
    setShowFeedback(false);
    setSelectedAns(null);
    
    const chapterData = contentMap[chapter.id];
    if (chapterData && chapterData[topic.slug]) {
      setContent(chapterData[topic.slug]);
      
      const relatedQ = questionBank.find(q => 
        q.category.toLowerCase().includes(theme.title.split(' ')[0].toLowerCase()) ||
        topic.title.split(' ').some(kw => q.question.toLowerCase().includes(kw.toLowerCase()))
      );
      
      if (relatedQ) {
        const distractors = questionBank
          .filter(other => other.category === relatedQ.category && other.answer !== relatedQ.answer)
          .map(other => other.answer).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [...distractors, relatedQ.answer].sort(() => Math.random() - 0.5);
        setCheckpointQ({ ...relatedQ, options });
      }
    } else {
      setContent(null);
    }
    setTimeout(() => setIsLoading(false), 400);
  }, [chapter.id, topic.slug]);

  const handleCheckpoint = (idx: number) => {
    if (showFeedback) return;
    setSelectedAns(idx);
    setShowFeedback(true);
  };

  if (showQuiz) return <ChapterQuiz chapterId={chapter.id} onExit={() => setShowQuiz(false)} />;

  return (
    <div className="flex flex-col h-full bg-slate-950 overflow-hidden relative">
      <div className="flex-1 overflow-y-auto scroll-touch p-4 sm:p-10 no-scrollbar">
        <div className="max-w-3xl mx-auto space-y-10 pb-40">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-6">
             <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 border border-blue-800 rounded-lg text-[8px] font-black uppercase">{theme.level}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase italic">{chapter.title}</span>
             </div>
          </div>

          <div className="prose prose-invert max-w-none prose-slate prose-sm sm:prose-base leading-relaxed">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-24">
                 <RefreshCw className="animate-spin text-blue-600" size={40} />
                 <p className="mt-6 font-black uppercase text-[8px] text-slate-500">Loading Scientific Data...</p>
              </div>
            ) : content ? (
              <div className="animate-in fade-in duration-700" dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <div className="p-12 bg-slate-900 rounded-[2.5rem] border border-slate-800 text-center">
                 <HelpCircle size={48} className="text-slate-800 mx-auto mb-4" />
                 <h4 className="text-sm font-black text-slate-400 uppercase italic">Calibration Required</h4>
                 <p className="text-[10px] text-slate-600 font-bold uppercase leading-relaxed">This atomic phase is being prepared for the 2026 session.</p>
              </div>
            )}
          </div>

          {!isLoading && checkpointQ && (
            <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-white shadow-2xl border border-white/5 overflow-hidden relative">
               <div className="absolute right-0 top-0 p-4 opacity-5"><Zap size={100} /></div>
               <h4 className="text-[10px] font-black uppercase text-emerald-400 mb-6 italic underline underline-offset-8">Atomic Checkpoint</h4>
               <h3 className="text-base font-black mb-6 italic uppercase leading-tight">{checkpointQ.question}</h3>
               <div className="grid grid-cols-1 gap-2">
                 {checkpointQ.options.map((opt: string, i: number) => {
                   const isCorrect = opt === checkpointQ.answer;
                   const isSelected = selectedAns === i;
                   let style = "bg-white/5 border-white/10";
                   if (showFeedback) {
                     if (isCorrect) style = "bg-emerald-600 border-emerald-400";
                     else if (isSelected) style = "bg-rose-600 border-rose-400";
                     else style = "bg-white/5 border-white/5 opacity-20";
                   }
                   return (
                     <button key={i} onClick={() => handleCheckpoint(i)} disabled={showFeedback} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${style}`}>
                       <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[10px] ${isSelected && !isCorrect ? 'bg-rose-700' : isCorrect && showFeedback ? 'bg-emerald-700' : 'bg-white/10'}`}>{String.fromCharCode(65+i)}</span>
                       <span className="text-xs font-bold uppercase italic tracking-tight">{opt}</span>
                     </button>
                   );
                 })}
               </div>
               {showFeedback && (
                 <div className="mt-6 p-5 bg-blue-600 rounded-2xl text-[11px] font-bold italic leading-relaxed shadow-lg">
                   <div className="flex items-center gap-2 mb-2 uppercase text-[8px] font-black text-blue-100"><Info size={12}/> Scientific Rational</div>
                   {checkpointQ.explanation}
                 </div>
               )}
            </div>
          )}

          {!isLoading && content && (
            <div className="pt-10 flex gap-2">
               <button onClick={onPrevious} className="flex-1 py-4 bg-slate-900 text-slate-500 rounded-xl font-black uppercase text-[9px] flex items-center justify-center gap-2 border border-slate-800 active:scale-95"><ChevronLeft size={16} /> Prev</button>
               {chapter.topics[chapter.topics.length - 1].slug === topic.slug ? (
                 <button onClick={() => setShowQuiz(true)} className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-black uppercase text-[9px] flex items-center justify-center gap-2 active:scale-95 shadow-lg"><GraduationCap size={16} /> Start Quiz</button>
               ) : (
                 <button onClick={onNext} className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-black uppercase text-[9px] flex items-center justify-center gap-2 active:scale-95 shadow-lg">Next <ChevronRight size={16} /></button>
               )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopicContent;