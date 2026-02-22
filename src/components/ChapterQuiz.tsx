import React, { useState } from 'react';
import type { Topic } from '../data/syllabus';
import { ChevronRight, Trophy, ArrowLeft, X, AlertCircle } from 'lucide-react';

interface ChapterQuizProps {
  topic: Topic;
  onExit: () => void;
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ topic, onExit }) => {
  const questions = topic.data.quiz || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [viewMode, setViewMode] = useState<'quiz' | 'results' | 'review'>('quiz');

  const currentQ = questions[currentIndex];

  const next = () => {
    if (currentIndex + 1 < questions.length) setCurrentIndex(currentIndex + 1);
    else setViewMode('results');
  };

  const getOptions = (q: any): string[] => {
    if (Array.isArray(q.options)) return q.options;
    if (typeof q.options === 'object') {
      return Object.entries(q.options).map(([key, val]) => `${key}: ${val}`);
    }
    return [];
  };

  const isCorrect = (q: any, idx: number) => {
    const options = getOptions(q);
    const chosen = options[idx];
    const correctAns = q.answer;
    if (chosen === correctAns) return true;
    if (correctAns && correctAns.length === 1 && String.fromCharCode(65 + idx) === correctAns) return true;
    if (chosen && (chosen.startsWith(correctAns + ':') || chosen.startsWith(correctAns + ' '))) return true;
    return false;
  };

  const score = () => questions.reduce((a, q, i) => a + (isCorrect(q, userAnswers[i]) ? 1 : 0), 0);

  if (questions.length === 0) return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg-surface)] flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle size={48} className="text-[var(--text-muted)] mb-4 opacity-30" />
      <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">No Quiz Available</h3>
      <p className="text-sm text-[var(--text-muted)] mb-6">This topic doesn't have practice questions yet.</p>
      <button className="btn btn-secondary" onClick={onExit}>Go Back</button>
    </div>
  );

  /* ── RESULTS ── */
  if (viewMode === 'results') {
    const s = score();
    const pct = Math.round((s / questions.length) * 100);
    return (
      <div className="fixed inset-0 z-[100] bg-[var(--bg-app)] flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="bg-[var(--bg-surface)] w-full max-w-md rounded-[32px] shadow-2xl border border-[var(--border-base)] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--brand)]" />
          <div className="w-16 h-16 rounded-3xl bg-[var(--brand-subtle)] text-[var(--brand)] flex items-center justify-center mx-auto mb-6 rotate-3">
            <Trophy size={32} />
          </div>
          <h2 className="text-4xl font-black text-[var(--text-main)] mb-1">{pct}%</h2>
          <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-10">Chapter Mastery</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-base)]">
                <span className="block text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">Score</span>
                <span className="text-2xl font-black text-[var(--text-main)]">{s} / {questions.length}</span>
             </div>
             <div className="p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-base)]">
                <span className="block text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">Status</span>
                <span className={`text-sm font-black uppercase tracking-widest ${pct >= 50 ? 'text-emerald-500' : 'text-rose-500'}`}>{pct >= 50 ? 'Pass' : 'Fail'}</span>
             </div>
          </div>

          <div className="space-y-3">
             <button className="btn btn-primary w-full shadow-lg" onClick={() => setViewMode('review')}>Review Explanations</button>
             <button className="btn btn-ghost w-full" onClick={onExit}>Return to Lesson</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── REVIEW ── */
  if (viewMode === 'review') {
    return (
      <div className="fixed inset-0 z-[100] bg-[var(--bg-app)] flex flex-col animate-in slide-in-from-right-8 duration-300">
        <header className="h-16 bg-[var(--bg-surface)] border-b border-[var(--border-base)] px-6 flex items-center justify-between sticky top-0 shrink-0">
          <div>
            <h3 className="font-black text-[var(--text-main)] tracking-tight">Quiz Analysis</h3>
            <p className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest">Post-Module Review</p>
          </div>
          <button onClick={() => setViewMode('results')} className="p-2 hover:bg-[var(--bg-app)] rounded-xl text-[var(--text-muted)]"><X size={20}/></button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 max-w-3xl mx-auto w-full no-scrollbar">
           {questions.map((q, idx) => {
             const correct = isCorrect(q, userAnswers[idx]);
             return (
               <div key={idx} className={`p-8 bg-[var(--bg-surface)] rounded-[28px] border shadow-sm ${correct ? 'border-emerald-500/20' : 'border-rose-500/20'}`}>
                  <div className="flex items-center gap-3 mb-6">
                     <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                       {idx + 1}
                     </span>
                     <span className={`text-[10px] font-black uppercase tracking-widest ${correct ? 'text-emerald-500' : 'text-rose-500'}`}>
                       {correct ? 'Correct' : 'Incorrect'}
                     </span>
                  </div>
                  <p className="font-bold text-[var(--text-main)] text-lg mb-6 leading-relaxed">{q.question}</p>
                  {q.explanation && (
                    <div className="p-5 bg-[var(--brand-subtle)] border border-[var(--brand)]/10 rounded-2xl text-xs font-medium text-[var(--text-main)] leading-relaxed">
                       <span className="font-black uppercase tracking-widest text-[9px] block mb-2 opacity-60">Study Insight:</span>
                       {q.explanation}
                    </div>
                  )}
               </div>
             );
           })}
        </main>
      </div>
    );
  }

  /* ── ACTIVE QUIZ ── */
  const options = getOptions(currentQ);
  const progress = ((currentIndex + 1) / questions.length) * 100;
  
  return (
    <div className="fixed inset-0 z-[110] bg-[var(--bg-surface)] flex flex-col animate-in slide-in-from-bottom-4 duration-300">
      <header className="h-16 border-b border-[var(--border-base)] px-4 md:px-6 flex items-center justify-between sticky top-0 bg-[var(--bg-surface)] z-20 shrink-0">
         <button onClick={onExit} className="p-2 -ml-2 text-[var(--text-muted)] hover:bg-[var(--bg-app)] rounded-xl transition-colors"><ArrowLeft size={24}/></button>
         <div className="text-center">
            <h3 className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-[0.2em] mb-0.5">Assessment</h3>
            <p className="text-sm font-bold text-[var(--text-main)] tracking-tight">Question {currentIndex + 1} of {questions.length}</p>
         </div>
         <div className="w-10" />
      </header>

      <div className="h-1 bg-[var(--border-base)] w-full shrink-0">
         <div className="h-full bg-[var(--brand)] transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <main className="flex-1 overflow-y-auto p-6 md:p-16 no-scrollbar">
         <div className="max-w-2xl mx-auto pb-24">
            <h2 className="text-2xl md:text-3xl font-black text-[var(--text-main)] leading-snug tracking-tight mb-12 animate-in fade-in slide-in-from-top-2 duration-500">{currentQ.question}</h2>
            
            <div className="space-y-3">
               {options.map((opt, idx) => {
                  const isSelected = userAnswers[currentIndex] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setUserAnswers(p => ({ ...p, [currentIndex]: idx }))}
                      className={`
                        w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-5 group
                        ${isSelected 
                          ? 'border-[var(--brand)] bg-[var(--brand-subtle)] ring-4 ring-[var(--brand)]/5 shadow-xl shadow-blue-500/5' 
                          : 'border-[var(--border-base)] bg-[var(--bg-surface)] hover:bg-[var(--bg-app)]'
                        }
                      `}
                    >
                       <span className={`
                         w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all
                         ${isSelected ? 'bg-[var(--brand)] text-white rotate-6 scale-110' : 'bg-[var(--bg-app)] text-[var(--text-muted)] group-hover:bg-[var(--bg-surface)] group-hover:text-[var(--text-main)]'}
                       `}>
                          {String.fromCharCode(65 + idx)}
                       </span>
                       <span className={`text-base font-bold ${isSelected ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]'}`}>{opt}</span>
                    </button>
                  );
               })}
            </div>
         </div>
      </main>

      <footer className="h-20 border-t border-[var(--border-base)] px-6 flex items-center justify-between shrink-0 bg-[var(--bg-surface)]/80 backdrop-blur-md sticky bottom-0 z-20">
         <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">Progress: {Math.round(progress)}%</span>
         <button
           className="btn btn-primary px-10 h-11 rounded-full shadow-lg shadow-blue-500/20 font-black text-xs uppercase tracking-widest active:scale-95 transition-all"
           onClick={next}
           disabled={userAnswers[currentIndex] === undefined}
         >
           {currentIndex + 1 < questions.length ? 'Next Step' : 'Finish Quiz'} <ChevronRight size={18} className="ml-1" />
         </button>
      </footer>
    </div>
  );
};

export default ChapterQuiz;
