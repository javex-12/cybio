import React, { useState } from 'react';
import { chapterQuizzes } from '../data/quizzes';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RefreshCw, 
  Trophy, 
  ArrowLeft, 
  Info, 
  AlertCircle,
  Zap,
  Target,
  Brain
} from 'lucide-react';

interface ChapterQuizProps {
  chapterId: string;
  onExit: () => void;
}

const ChapterQuiz: React.FC<ChapterQuizProps> = ({ chapterId, onExit }) => {
  const questions = chapterQuizzes[chapterId] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [viewMode, setViewMode] = useState<'exam' | 'results' | 'review'>('exam');

  const currentQ = questions[currentIndex];

  const handleOptionSelect = (index: number) => {
    setUserAnswers(prev => ({ ...prev, [currentIndex]: index }));
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      // Auto-scroll to top of question
      const scrollArea = document.querySelector('.exam-scroll-area');
      if (scrollArea) scrollArea.scrollTop = 0;
    } else {
      setViewMode('results');
    }
  };

  const calculateScore = () => {
    let s = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctIndex) s++;
    });
    return s;
  };

  if (questions.length === 0) return null;

  if (viewMode === 'results') {
    const score = calculateScore();
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950 p-4 flex flex-col items-center justify-center overflow-y-auto">
        <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 text-center shadow-2xl animate-in zoom-in-95 duration-500">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-2 italic">{pct}%</h2>
          <p className="text-slate-400 font-black uppercase tracking-widest mb-10 text-[10px]">Mastery Score</p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
               <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Score</p>
               <p className="text-2xl font-black text-emerald-600">{score}/{questions.length}</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5">
               <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Accuracy</p>
               <p className="text-2xl font-black text-blue-600">{pct}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button onClick={() => setViewMode('review')} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase text-[10px] tracking-widest shadow-lg active:scale-95 transition-all">Review Explanations</button>
            <button onClick={onExit} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold uppercase text-[10px] tracking-widest active:scale-95 transition-all">Close Lab</button>
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'review') {
    return (
      <div className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 flex flex-col overflow-hidden">
        <header className="h-16 shrink-0 bg-slate-900 text-white px-6 flex items-center justify-between shadow-2xl z-50">
          <h2 className="font-black uppercase text-xs tracking-widest italic">Atomic Review</h2>
          <button onClick={() => setViewMode('results')} className="p-2 bg-white/10 rounded-lg"><X size={20} /></button>
        </header>
        <main className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar bg-[#F8FAFC] dark:bg-slate-950">
          <div className="max-w-3xl mx-auto space-y-6 pb-20">
            {questions.map((q, idx) => {
              const userIdx = userAnswers[idx];
              const isCorrect = userIdx === q.correctIndex;
              return (
                <div key={idx} className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border-2 transition-all ${isCorrect ? 'border-emerald-100 shadow-emerald-500/5' : 'border-rose-100 shadow-rose-500/5'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs ${isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'}`}>{idx + 1}</span>
                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-800 dark:text-white leading-tight mb-6">{q.question}</h3>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-blue-500 relative overflow-hidden">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed italic">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#F8FAFC] dark:bg-slate-950 flex flex-col h-screen overflow-hidden">
      
      {/* Mini Header */}
      <header className="h-14 shrink-0 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-4 z-50">
        <button onClick={onExit} className="p-2 text-slate-400 hover:text-rose-500 transition-colors active:scale-90"><ArrowLeft size={20} /></button>
        <div className="text-center">
          <h4 className="text-[10px] font-black text-slate-800 dark:text-white uppercase italic leading-none">Atomic Revision</h4>
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Phase {currentIndex + 1} / {questions.length}</p>
        </div>
        <div className="w-8"></div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative flex flex-col">
        {/* Simple Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 z-10">
          <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}></div>
        </div>

        <main className="flex-1 overflow-y-auto exam-scroll-area p-4 sm:p-8 no-scrollbar bg-white dark:bg-slate-950">
          <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500 pb-32">
            <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white leading-[1.2] uppercase italic tracking-tighter decoration-blue-500 underline underline-offset-8">
              {currentQ.question}
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = userAnswers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-center gap-4 active:scale-[0.98] ${isSelected ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-slate-50 dark:bg-slate-900 border-slate-50 dark:border-transparent text-slate-700 dark:text-slate-300'}`}
                  >
                    <span className={`w-8 h-8 shrink-0 rounded-lg flex items-center justify-center font-black text-xs ${isSelected ? 'bg-white text-blue-600' : 'bg-white dark:bg-slate-800 text-slate-400'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm font-bold uppercase italic tracking-tight">{option}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </main>

        {/* Action Bar - ALWAYS VISIBLE */}
        <footer className="h-20 shrink-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-6 z-40 shadow-2xl">
          <div className="flex-1">
             <div className="flex items-center gap-2">
                <Target size={12} className="text-blue-500" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{currentIndex + 1} of {questions.length}</span>
             </div>
          </div>
          <button 
            onClick={nextQuestion}
            disabled={userAnswers[currentIndex] === undefined}
            className="px-10 py-3.5 bg-slate-900 dark:bg-blue-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 disabled:opacity-20 flex items-center gap-2"
          >
            {currentIndex + 1 < questions.length ? "NEXT" : "FINALIZE"} <ChevronRight size={16} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ChapterQuiz;