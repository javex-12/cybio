import React, { useState, useEffect } from 'react';
import {
  ChevronLeft, ChevronRight, Clock, Menu, X, CheckCircle2, XCircle, AlertCircle, Trophy
} from 'lucide-react';
import { syllabus } from '../data/syllabus';
import type { QuizConfig } from './CBTHub';
import AtomicModal from './AtomicModal';
import { useLocalProgress } from '../hooks/useLocalProgress';

export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

interface CBTExamProps {
  config: QuizConfig;
  onExit: () => void;
}

const CBTExam: React.FC<CBTExamProps> = ({ config, onExit }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(config.timeLimit * 60);
  const [submitted, setSubmitted] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewMode, setViewMode] = useState<'results' | 'review'>('results');
  const { saveQuizScore } = useLocalProgress();

  useEffect(() => {
    let allQs: Question[] = [];
    syllabus.forEach(theme => {
      if (config.type === 'level' && theme.level !== config.targetId) return;
      if (config.type === 'theme' && theme.id !== config.targetId) return;
      
      theme.chapters.forEach(chapter => {
        chapter.topics.forEach(topic => {
          if (topic.data.quiz) {
            topic.data.quiz.forEach((q, qi) => {
              const options = Array.isArray(q.options) 
                ? q.options 
                : Object.entries(q.options).map(([k, v]) => `${k}: ${v}`);
              
              let finalAnswer = q.answer;
              if (q.answer.length === 1 && !Array.isArray(q.options)) {
                const optVal = (q.options as any)[q.answer];
                if (optVal) finalAnswer = optVal;
              }

              allQs.push({
                id: `${topic.slug}-${qi}`,
                category: theme.title,
                question: q.question,
                options: options,
                answer: finalAnswer,
                explanation: q.explanation
              });
            });
          }
        });
      });
    });

    setQuestions(allQs.sort(() => Math.random() - 0.5).slice(0, config.limit));
  }, [config]);

  useEffect(() => {
    if (submitted || timeLeft <= 0) return;
    const t = setInterval(() =>
      setTimeLeft(p => { if (p <= 1) { handleAutoSubmit(); return 0; } return p - 1; }), 1000);
    return () => clearInterval(t);
  }, [submitted, timeLeft]);

  const handleAutoSubmit = () => {
    const s = score();
    const pct = Math.round((s / questions.length) * 100);
    saveQuizScore(config.targetId || 'global', pct);
    setSubmitted(true);
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  
  const isCorrect = (q: Question, idx: number) => {
    const chosen = q.options[idx];
    if (chosen === q.answer) return true;
    if (chosen && chosen.includes(': ')) {
      const parts = chosen.split(': ');
      if (parts[0] === q.answer || parts[1] === q.answer) return true;
    }
    return false;
  };

  const score = () => questions.reduce((a, q, i) => a + (isCorrect(q, answers[i]) ? 1 : 0), 0);

  const handleSubmit = () => {
    const s = score();
    const pct = Math.round((s / questions.length) * 100);
    saveQuizScore(config.targetId || 'global', pct);
    setShowConfirm(false);
    setSubmitted(true);
  };

  if (questions.length === 0) return (
    <div className="fixed inset-0 bg-[var(--bg-app)] flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle size={48} className="text-[var(--text-muted)] mb-4" />
      <p className="text-lg font-black text-[var(--text-main)] mb-4">No questions found.</p>
      <button className="btn btn-secondary px-8" onClick={onExit}>Return to Safety</button>
    </div>
  );

  /* ── RESULTS ── */
  if (submitted && viewMode === 'results') {
    const s = score();
    const pct = Math.round((s / questions.length) * 100);
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--bg-app)] animate-in fade-in duration-300 px-4">
        <div className="bg-[var(--bg-surface)] w-full max-w-md rounded-[32px] shadow-2xl border border-[var(--border-base)] overflow-hidden text-center p-10 relative">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--brand)]" />
          <div className="w-20 h-20 rounded-[24px] bg-[var(--brand-subtle)] text-[var(--brand)] flex items-center justify-center mx-auto mb-6 rotate-3">
             <Trophy size={40} />
          </div>
          <h2 className="text-4xl font-black text-[var(--text-main)] mb-2">{pct}%</h2>
          <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-10">Simulation Performance</p>
          <div className="grid grid-cols-2 gap-4 mb-10">
             <div className="p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-base)]">
                <span className="block text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">Score</span>
                <span className="text-2xl font-black text-[var(--text-main)]">{s} / {questions.length}</span>
             </div>
             <div className="p-4 bg-[var(--bg-app)] rounded-2xl border border-[var(--border-base)]">
                <span className="block text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">Duration</span>
                <span className="text-2xl font-black text-[var(--text-main)]">{fmt(config.timeLimit * 60 - timeLeft)}</span>
             </div>
          </div>
          <div className="space-y-3">
             <button onClick={() => setViewMode('review')} className="btn btn-primary w-full shadow-lg">Detailed Review</button>
             <button onClick={onExit} className="btn btn-ghost w-full">Back to Base</button>
          </div>
        </div>
      </div>
    );
  }

  /* ── REVIEW ── */
  if (submitted && viewMode === 'review') {
    return (
      <div className="fixed inset-0 z-[200] bg-[var(--bg-app)] flex flex-col animate-in slide-in-from-right-8 duration-300">
        <header className="h-16 flex items-center justify-between px-6 bg-[var(--bg-surface)] border-b border-[var(--border-base)] shrink-0 sticky top-0 z-10">
          <div>
            <h2 className="font-black text-[var(--text-main)] tracking-tight">Review Session</h2>
            <p className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest">Analytics Mode</p>
          </div>
          <button onClick={() => setViewMode('results')} className="p-2 hover:bg-[var(--bg-app)] rounded-xl text-[var(--text-muted)]"><X size={20}/></button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6 max-w-3xl mx-auto w-full no-scrollbar">
          {questions.map((q, idx) => {
            const correct = q.options?.[answers[idx]] === q.answer;
            return (
              <div key={idx} className={`p-8 bg-[var(--bg-surface)] rounded-[28px] border shadow-sm ${correct ? 'border-emerald-500/20' : 'border-rose-500/20'}`}>
                 <div className="flex items-center gap-3 mb-6">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                      {idx + 1}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${correct ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {correct ? 'Success' : 'Incorrect'}
                    </span>
                 </div>
                 <p className="font-bold text-[var(--text-main)] text-lg mb-6 leading-relaxed">{q.question}</p>
                 <div className="space-y-2 mb-6">
                    {q.options?.map((opt, oIdx) => {
                       const isSelected = answers[idx] === oIdx;
                       const isAnswer = opt === q.answer;
                       let style = "bg-[var(--bg-app)] text-[var(--text-muted)] border-transparent";
                       if (isAnswer) style = "bg-emerald-500/10 text-emerald-800 border-emerald-500/20 font-bold";
                       else if (isSelected) style = "bg-rose-500/10 text-rose-800 border-rose-500/20";
                       return (
                         <div key={oIdx} className={`px-4 py-3 rounded-xl border text-sm flex gap-3 items-center ${style}`}>
                            {isAnswer && <CheckCircle2 size={16} />}
                            {isSelected && !isAnswer && <XCircle size={16} />}
                            <span className="flex-1">{opt}</span>
                         </div>
                       );
                    })}
                 </div>
                 {q.explanation && (
                    <div className="p-5 bg-[var(--brand-subtle)] rounded-2xl text-xs font-medium leading-relaxed text-[var(--text-main)] border border-[var(--brand)]/10">
                       <span className="font-black uppercase tracking-widest text-[9px] block mb-2 opacity-60">Logic Breakdown</span>
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

  /* ── ACTIVE EXAM ── */
  const q = questions[currentIdx];
  const progressPercent = ((currentIdx + 1) / questions.length) * 100;
  const lowTime = timeLeft < 120;

  return (
    <div className="fixed inset-0 z-[150] bg-[var(--bg-app)] flex flex-col animate-in fade-in duration-300">
      <header className="h-16 flex items-center justify-between px-6 bg-[var(--bg-surface)] border-b border-[var(--border-base)] shrink-0 z-20">
         <div className="flex items-center gap-4">
            <button onClick={() => setPaletteOpen(true)} className="p-2 -ml-2 text-[var(--text-muted)] hover:bg-[var(--bg-app)] rounded-xl"><Menu size={20} /></button>
            <div className="h-4 w-px bg-[var(--border-base)]" />
            <span className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">
               Quest <span className="text-[var(--text-main)]">{currentIdx + 1}</span> / {questions.length}
            </span>
         </div>
         
         <div className="flex items-center gap-4">
            <div className={`
              flex items-center gap-2 px-4 py-1.5 rounded-full font-mono font-black text-xs border transition-all
              ${lowTime ? 'bg-red-50 text-red-600 border-red-100 animate-pulse' : 'bg-[var(--bg-app)] text-[var(--text-main)] border-[var(--border-base)]'}
            `}>
               <Clock size={14} className={lowTime ? 'text-red-600' : 'text-[var(--brand)]'} /> {fmt(timeLeft)}
            </div>
            <button onClick={() => setShowConfirm(true)} className="btn btn-primary h-9 px-6 rounded-full text-[10px] font-black tracking-widest uppercase">
              Finish
            </button>
         </div>
      </header>

      <div className="h-1 bg-[var(--border-base)] w-full">
         <div className="h-full bg-[var(--brand)] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
      </div>

      <main className="flex-1 overflow-y-auto p-6 md:p-16 no-scrollbar">
         <div className="max-w-3xl mx-auto pb-32">
            <div className="mb-12">
               <span className="text-[10px] font-black text-[var(--brand)] uppercase tracking-widest mb-4 block">{q.category}</span>
               <h2 className="text-2xl md:text-3xl font-black text-[var(--text-main)] leading-snug tracking-tight">{q.question}</h2>
            </div>
            <div className="space-y-3">
               {q.options?.map((option, idx) => {
                  const selected = answers[currentIdx] === idx;
                  return (
                     <button key={idx} onClick={() => setAnswers(p => ({ ...p, [currentIdx]: idx }))} className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center gap-5 group ${selected ? 'border-[var(--brand)] bg-[var(--brand-subtle)] ring-4 ring-[var(--brand)]/5' : 'border-[var(--border-base)] bg-[var(--bg-surface)] hover:border-[var(--brand)]'}`}>
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all ${selected ? 'bg-[var(--brand)] text-white' : 'bg-[var(--bg-app)] text-[var(--text-muted)]'}`}>
                           {String.fromCharCode(65 + idx)}
                        </span>
                        <span className={`text-base font-bold ${selected ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-main)]'}`}>{option}</span>
                     </button>
                  );
               })}
            </div>
         </div>
      </main>

      <div className="h-20 border-t border-[var(--border-base)] bg-[var(--bg-surface)]/80 backdrop-blur-md px-6 flex items-center justify-between shrink-0 z-20">
         <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0} className="btn btn-ghost px-6 font-black text-xs uppercase tracking-widest disabled:opacity-30">
           <ChevronLeft size={18} /> Prev
         </button>
         <button onClick={() => setCurrentIdx(Math.min(questions.length - 1, currentIdx + 1))} disabled={currentIdx === questions.length - 1} className="btn btn-secondary px-8 font-black text-xs uppercase tracking-widest disabled:opacity-30">
           Next <ChevronRight size={18} />
         </button>
      </div>

      {paletteOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setPaletteOpen(false)}>
           <div className="w-full max-w-2xl bg-[var(--bg-surface)] rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
              <div className="p-6 border-b border-[var(--border-base)] flex justify-between items-center bg-[var(--bg-app)]">
                 <h3 className="font-black text-[var(--text-main)]">Question Map</h3>
                 <button onClick={() => setPaletteOpen(false)} className="p-2 hover:bg-[var(--bg-surface)] rounded-xl text-[var(--text-muted)]"><X size={20}/></button>
              </div>
              <div className="p-8 grid grid-cols-5 sm:grid-cols-10 gap-3 max-h-[60vh] overflow-y-auto no-scrollbar">
                 {questions.map((_, idx) => (
                    <button key={idx} onClick={() => { setCurrentIdx(idx); setPaletteOpen(false); }} className={`aspect-square rounded-xl font-black text-xs flex items-center justify-center transition-all ${currentIdx === idx ? 'bg-[var(--brand)] text-white shadow-lg scale-110' : answers[idx] !== undefined ? 'bg-[var(--brand-subtle)] text-[var(--brand)] border border-[var(--brand)]/20' : 'bg-[var(--bg-app)] text-[var(--text-muted)] hover:bg-[var(--border-base)]'}`}>
                      {idx + 1}
                    </button>
                 ))}
              </div>
           </div>
        </div>
      )}
      <AtomicModal isOpen={showConfirm} title="Submission" message="Confirm submit simulation?" onConfirm={handleSubmit} onCancel={() => setShowConfirm(false)} />
    </div>
  );
};

export default CBTExam;