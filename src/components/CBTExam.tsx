import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Trophy, 
  Menu,
  X,
  Home,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { questionBank, type Question } from '../data/questions';
import type { QuizConfig } from './CBTHub';
import AtomicModal from './AtomicModal';

interface CBTExamProps {
  config: QuizConfig;
  onExit: () => void;
}

const CBTExam: React.FC<CBTExamProps> = ({ config, onExit }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(config.timeLimit * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [viewMode, setViewMode] = useState<'results' | 'review'>('results');

  useEffect(() => {
    let qs = [...questionBank];
    const levelMap: Record<string, string[]> = {
      'SS1': ['Cell Biology', 'Taxonomy', 'Botany', 'Zoology', 'Ecology', 'Microbiology', 'Nutrition'],
      'SS2': ['Physiology', 'Nutrition', 'Ecology'],
      'SS3': ['Physiology', 'Genetics', 'Evolution']
    };
    if (config.type === 'level' && config.targetId) {
      const allowed = levelMap[config.targetId] || [];
      qs = qs.filter(q => allowed.includes(q.category));
    }
    const processedQs = qs.sort(() => Math.random() - 0.5).slice(0, config.limit).map(q => {
      if (q.options && q.options.length === 4) return q;
      const distractors = questionBank
        .filter(other => other.category === q.category && other.answer !== q.answer)
        .map(other => other.answer).sort(() => Math.random() - 0.5).slice(0, 3);
      while (distractors.length < 3) distractors.push("None of the above");
      const allOptions = [...distractors, q.answer].sort(() => Math.random() - 0.5);
      return { ...q, options: allOptions };
    });
    setShuffledQuestions(processedQs);
  }, [config]);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelect = (idx: number) => { if (!isSubmitted) setUserAnswers(p => ({ ...p, [currentIndex]: idx })); };
  const formatTime = (s: number) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2, '0')}`;

  const calculateScore = () => {
    let s = 0;
    shuffledQuestions.forEach((q, idx) => { if (q.options?.[userAnswers[idx]] === q.answer) s++; });
    return s;
  };

  if (shuffledQuestions.length === 0) return null;

  if (isSubmitted && viewMode === 'results') {
    const score = calculateScore();
    const pct = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <div className="fixed inset-0 z-[300] bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 text-center shadow-2xl">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-6xl font-black dark:text-white mb-2 italic tracking-tighter">{pct}%</h2>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
              <p className="text-[8px] font-black text-slate-400 uppercase">Correct</p>
              <p className="text-xl font-black dark:text-white">{score}/{shuffledQuestions.length}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
              <p className="text-[8px] font-black text-slate-400 uppercase">Accuracy</p>
              <p className="text-xl font-black text-blue-600">{pct}%</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button onClick={() => setViewMode('review')} className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">View Explanations</button>
            <button onClick={onExit} className="w-full py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest">Back Home</button>
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitted && viewMode === 'review') {
    return (
      <div className="fixed inset-0 z-[300] bg-white dark:bg-slate-950 flex flex-col">
        <header className="h-14 shrink-0 bg-slate-900 text-white px-4 flex items-center justify-between shadow-lg">
          <h2 className="font-black uppercase text-[10px] tracking-widest italic">Atomic Review</h2>
          <button onClick={() => setViewMode('results')} className="p-2 bg-white/10 rounded-lg"><X size={18} /></button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
          {shuffledQuestions.map((q, idx) => {
            const userIdx = userAnswers[idx];
            const isCorrect = q.options?.[userIdx] === q.answer;
            return (
              <div key={idx} className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 ${isCorrect ? 'border-emerald-500/20 shadow-emerald-500/5' : 'border-rose-500/20 shadow-rose-500/5'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-[10px] ${isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>{idx + 1}</span>
                  <span className="text-[8px] font-black uppercase text-slate-400">{isCorrect ? 'Mastered' : 'Missed'}</span>
                </div>
                <h3 className="text-sm font-black text-slate-800 dark:text-white mb-4 uppercase">{q.question}</h3>
                <div className="grid grid-cols-1 gap-2 mb-4">
                  {q.options?.map((opt, oIdx) => {
                    const isSelected = userIdx === oIdx;
                    const isCorrectOpt = opt === q.answer;
                    return (
                      <div key={oIdx} className={`p-3 rounded-xl border flex items-center gap-3 text-[10px] font-bold ${isCorrectOpt ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500 text-emerald-700 dark:text-emerald-400' : isSelected ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-500 text-rose-700 dark:text-rose-400' : 'bg-slate-50 dark:bg-slate-800 border-transparent opacity-50'}`}>
                        <span className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">{String.fromCharCode(65+oIdx)}</span>
                        <span>{opt}</span>
                        {isCorrectOpt && <CheckCircle2 size={12} className="ml-auto" />}
                        {isSelected && !isCorrectOpt && <XCircle size={12} className="ml-auto" />}
                      </div>
                    );
                  })}
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-500 text-[11px] font-bold text-slate-700 dark:text-slate-300 italic">
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </main>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[250] bg-white dark:bg-slate-950 flex flex-col h-[100dvh] overflow-hidden">
      
      {/* HUD Header */}
      <header className="h-14 shrink-0 bg-slate-900 text-white px-4 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsPaletteOpen(true)} className="p-2 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-all"><Menu size={18} /></button>
          <button onClick={onExit} className="p-2 bg-white/5 rounded-xl border border-white/10 active:scale-90 transition-all text-blue-400"><Home size={18} /></button>
          <div className="flex flex-col">
            <h1 className="text-[10px] font-black uppercase italic text-blue-400">Atomic Phase</h1>
            <p className="text-[7px] text-slate-500 font-bold uppercase tracking-widest leading-none">Simulation 4.2</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-lg border-2 flex items-center gap-2 ${timeLeft < 60 ? 'bg-rose-600 border-rose-400 animate-pulse text-white' : 'bg-slate-800 border-slate-700 text-blue-400'}`}>
            <Clock size={12} />
            <span className="text-sm font-black font-mono tabular-nums">{formatTime(timeLeft)}</span>
          </div>
          <button onClick={() => setShowConfirm(true)} className="px-4 py-1.5 bg-blue-600 text-white rounded-lg font-black text-[9px] uppercase shadow-lg active:scale-95 transition-all">SUBMIT</button>
        </div>
      </header>

      {/* Main Viewport */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-900 z-10"><div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${((currentIndex + 1) / shuffledQuestions.length) * 100}%` }}></div></div>

        <main className="h-full overflow-y-auto p-4 sm:p-10 no-scrollbar bg-[#F8FAFC] dark:bg-slate-950 scroll-touch">
          <div className="max-w-xl mx-auto space-y-6 pb-32 pt-4">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xs font-black italic border-2 border-white dark:border-slate-800">Q{currentIndex + 1}</span>
                <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest underline decoration-blue-500 decoration-2 underline-offset-2">{shuffledQuestions[currentIndex].category}</span>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter italic">{currentIndex + 1} / {shuffledQuestions.length}</p>
            </div>

            <h2 className="text-lg sm:text-2xl font-black text-slate-800 dark:text-white leading-tight uppercase italic tracking-tighter decoration-slate-100 dark:decoration-slate-900 underline decoration-4 underline-offset-4">
              {shuffledQuestions[currentIndex].question}
            </h2>

            <div className="grid grid-cols-1 gap-2 pt-2">
              {shuffledQuestions[currentIndex].options?.map((option, idx) => {
                const isSelected = userAnswers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 active:scale-[0.98] ${isSelected ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-[1.01]' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500'}`}
                  >
                    <span className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-black text-xs transition-all ${isSelected ? 'bg-white text-blue-600 rotate-6 shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>{String.fromCharCode(65 + idx)}</span>
                    <span className="text-[11px] font-black uppercase italic tracking-tight leading-snug">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>

        {/* FLOATING HUD NAV BAR */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center px-6 pointer-events-none z-50">
           <div className="bg-slate-900/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/10 p-2 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-2 pointer-events-auto">
              <button 
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="p-4 bg-white/5 rounded-full text-white active:scale-90 disabled:opacity-20 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="px-6 py-2 bg-white/10 rounded-full flex flex-col items-center">
                 <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none">OBJECTIVE</span>
                 <span className="text-lg font-black text-white font-mono leading-none mt-1">{currentIndex + 1} <span className="text-slate-500 text-xs">/ {shuffledQuestions.length}</span></span>
              </div>

              <button 
                onClick={() => setCurrentIndex(Math.min(shuffledQuestions.length - 1, currentIndex + 1))}
                disabled={currentIndex === shuffledQuestions.length - 1}
                className="p-4 bg-blue-600 rounded-full text-white active:scale-90 shadow-lg shadow-blue-500/30 disabled:opacity-20 transition-all"
              >
                <ChevronRight size={20} />
              </button>
           </div>
        </div>
      </div>

      {/* Palette Drawer */}
      {isPaletteOpen && (
        <div className="fixed inset-0 z-[260] bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsPaletteOpen(false)}>
          <div className="w-[85vw] max-w-xs h-full bg-white dark:bg-slate-900 p-6 shadow-2xl animate-in slide-in-from-left duration-500 flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-white/5">
              <h4 className="font-black text-sm uppercase italic dark:text-white">Lab Matrix</h4>
              <button onClick={() => setIsPaletteOpen(false)} className="p-2 text-slate-400 hover:text-rose-500 transition-colors"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-2 content-start no-scrollbar">
              {shuffledQuestions.map((_, idx) => (
                <button key={idx} onClick={() => { setCurrentIndex(idx); setIsPaletteOpen(false); }} className={`aspect-square rounded-lg text-[9px] font-black transition-all flex items-center justify-center border-2 ${currentIndex === idx ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-110' : userAnswers[idx] !== undefined ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/5 text-slate-400'}`}>{idx + 1}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      <AtomicModal isOpen={showConfirm} title="Final Submission" message="Transmit objective data for scoring and detailed review?" onConfirm={() => { setShowConfirm(false); setIsSubmitted(true); }} onCancel={() => setShowConfirm(false)} />
    </div>
  );
};

export default CBTExam;
